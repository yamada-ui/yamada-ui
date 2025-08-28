import type { Dict } from "@yamada-ui/utils"
import type { Config } from "../../index.type"
import {
  getObject,
  isArray,
  isObject,
  isString,
  merge,
  omitObject,
} from "@yamada-ui/utils"
import { Command } from "commander"
import ora from "ora"
import path from "path"
import { CONFIG_FILE_NAME } from "../../constant"
import {
  cwd,
  getConfig,
  getModule,
  timer,
  validateDir,
  writeFileSafe,
} from "../../utils"
import { config } from "./config"

const TONES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

function isTone(value: any) {
  if (!isObject(value)) return false

  const keys = Object.keys(value)

  return TONES.every((key) => keys.includes(key.toString()))
}

function print(unions: { [key: string]: string[] }) {
  return Object.entries(unions)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(
      ([key, union]) =>
        `${key}: ${
          !union.length
            ? "never"
            : union.map((value: any) => `"${value}"`).join(" | ")
        };`,
    )
    .join("\n")
}

function extractColorSchemes(theme: Dict, colorTokens: string[] = []) {
  colorTokens.push(
    "colorScheme.contrast",
    "colorScheme.fg",
    "colorScheme.subtle",
    "colorScheme.muted",
    "colorScheme.emphasized",
    "colorScheme.ghost",
    "colorScheme.solid",
    "colorScheme.outline",
  )

  const { colors, semanticTokens } = theme

  const colorSchemes: string[] = []

  Object.entries(colors ?? {}).forEach(([key, value]) => {
    if (!isTone(value)) return

    colorSchemes.push(key)
  })

  if (!isObject(semanticTokens?.colorSchemes)) return { colorSchemes }

  Object.entries(semanticTokens.colorSchemes).forEach(([key, value]) => {
    if (isTone(value)) {
      colorSchemes.push(key)
      colorTokens.push(...TONES.map((tone) => `${key}.${tone}`))
    } else {
      if (isArray(value)) {
        if (value.every((token) => colorSchemes.includes(token)))
          colorSchemes.push(key)
      } else if (isString(value)) {
        if (colorSchemes.includes(value)) colorSchemes.push(key)
      }

      const targetToken = isArray(value) ? value[0] : value

      const targetTokens = colorTokens.filter(
        (token) => token === targetToken || token.startsWith(`${targetToken}.`),
      )

      colorTokens.push(
        ...targetTokens.map((token) =>
          token === targetToken
            ? key
            : token.replace(new RegExp(`^${targetToken}.`), `${key}.`),
        ),
      )
    }
  })

  return { colorSchemes }
}

function extractThemeSchemes(theme: Dict) {
  const { themeSchemes } = theme

  return Object.keys(themeSchemes ?? {})
}

interface ExtractPathsOptions {
  maxDepth?: number
  replaceKey?: (key: string) => string
  shouldProcess?: (obj: Dict) => boolean
}

function extractPaths(
  target: Dict,
  {
    maxDepth = Infinity,
    replaceKey = (key: string) => key,
    shouldProcess = () => true,
  }: ExtractPathsOptions = {},
) {
  if (!isObject(target) && !isArray(target)) return []

  return Object.entries(target).reduce<string[]>((prev, [key, value]) => {
    if (isObject(value) && shouldProcess(value) && maxDepth > 1) {
      extractPaths(value, {
        maxDepth: maxDepth - 1,
        replaceKey,
        shouldProcess,
      }).forEach((nestedKey) => prev.push(replaceKey(`${key}.${nestedKey}`)))
    } else {
      prev.push(replaceKey(key))
    }

    return prev
  }, [])
}

function extractKeys(obj: Dict, key: string) {
  const property = getObject(obj, key)

  if (!isObject(property)) return []

  return Object.keys(property)
}

function generateThemeTokens(
  theme: Dict,
  { internal = false, theme: { responsive = false } = {} }: Dict,
) {
  let shouldProcess: (obj: Dict) => boolean = () => true

  if (responsive && isObject(theme.breakpoints)) {
    const keys = ["base", ...Object.keys(theme.breakpoints)]

    const isResponsive = (obj: Dict) => {
      const providedKeys = Object.keys(obj)

      if (!providedKeys.length) return false

      if (!providedKeys.includes("base")) return false

      return providedKeys.every((key) => keys.includes(key))
    }

    shouldProcess = (obj: Dict) => !isResponsive(obj)
  }

  const tokens = config.reduce<{ [key: string]: string[] }>(
    (
      prev,
      {
        key,
        flatMap = (value) => value,
        maxDepth,
        replaceKey,
        shouldProcess: additionalShouldProcess = () => true,
      },
    ) => {
      const target = getObject(theme, key)

      prev[key] = []

      if (isObject(target) || isArray(target)) {
        prev[key] = extractPaths(target, {
          maxDepth,
          replaceKey,
          shouldProcess: (obj) =>
            shouldProcess(obj) && additionalShouldProcess(obj),
        }).flatMap(flatMap)
      }

      if (isObject(theme.semanticTokens)) {
        const target = getObject(theme.semanticTokens, key)

        const semanticKeys = extractPaths(target, {
          maxDepth,
          replaceKey,
          shouldProcess: (obj) =>
            shouldProcess(obj) && additionalShouldProcess(obj),
        }).flatMap(flatMap)

        prev[key].push(...semanticKeys)
      }

      return prev
    },
    {},
  )

  const textStyles = extractKeys(theme, "styles.textStyles")
  const layerStyles = extractKeys(theme, "styles.layerStyles")
  const apply = extractPaths(
    omitObject(theme.styles ?? {}, [
      "globalStyle",
      "layerStyles",
      "resetStyle",
      "textStyles",
    ]),
    { maxDepth: 2 },
  )

  const { colorSchemes } = extractColorSchemes(theme, tokens.colors)
  const themeSchemes = extractThemeSchemes(theme)

  if (internal) {
    return [
      `import type { UsageThemeTokens } from "./system"`,
      ``,
      `export interface GeneratedThemeTokens extends UsageThemeTokens {`,
      print({
        ...tokens,
        apply,
        colorSchemes,
        layerStyles,
        textStyles,
        themeSchemes,
      }),
      `}`,
    ].join("\n")
  } else {
    return [
      `import type { UsageThemeTokens } from "@yamada-ui/react"`,
      ``,
      `declare module '@yamada-ui/react' {`,
      `  interface CustomThemeTokens extends UsageThemeTokens {`,
      `    ${print({
        ...tokens,
        apply,
        colorSchemes,
        layerStyles,
        textStyles,
        themeSchemes,
      })}`,
      `  }`,
      `}`,
    ].join("\n")
  }
}

async function getTheme(path: string, cwd: string) {
  const { dependencies, mod } = await getModule(path, cwd)

  const theme =
    mod?.default ?? mod?.theme ?? mod?.customTheme ?? mod?.defaultTheme ?? {}
  const config = mod?.config ?? mod?.customConfig ?? mod?.defaultConfig ?? {}

  return { config, dependencies, theme }
}

interface Options {
  config: string
  cwd: string
  internal: boolean
  format?: boolean
  lint?: boolean
  out?: string
}

export const tokens = new Command("tokens")
  .description("generate theme typings")
  .argument("[path]", "path to the theme file")
  .option("--cwd <path>", "current working directory", cwd)
  .option("-c, --config <path>", "path to the config file", CONFIG_FILE_NAME)
  .option("-o, --out <path>", `output path`)
  .option("-f, --format", "format the output file")
  .option("-l, --lint", "lint the output file")
  .option("--internal", "generate internal tokens", false)
  .action(async function (
    inputPath: string | undefined,
    { config: configPath, cwd, format, internal, lint, out: outPath }: Options,
  ) {
    const spinner = ora()

    try {
      const { end } = timer()

      spinner.start("Validating directory")

      await validateDir(cwd)

      spinner.succeed("Validated directory")

      let config: Config | undefined

      if (!internal) {
        spinner.start("Fetching config")

        config = await getConfig(cwd, configPath, { format, lint })

        if (config.theme?.path)
          inputPath ??= path.resolve(cwd, config.theme.path, "index.ts")

        spinner.succeed("Fetched config")
      }

      if (!inputPath) throw new Error("No input path provided")

      spinner.start(`Getting theme`)

      cwd = path.resolve(cwd)
      inputPath = path.resolve(cwd, inputPath)

      if (outPath) {
        outPath = path.resolve(cwd, outPath)
      } else if (inputPath.includes("/")) {
        const dirPath = inputPath.split("/").slice(0, -1).join("/")

        outPath = path.join(dirPath, "index.types.ts")
      } else {
        outPath = path.join(cwd, "index.types.ts")
      }

      const { config: themeConfig, theme } = await getTheme(inputPath, cwd)

      spinner.succeed(`Got theme`)

      spinner.start(`Generating theme typings`)

      const content = generateThemeTokens(theme, {
        ...themeConfig,
        internal,
      })

      await writeFileSafe(
        outPath,
        content,
        config
          ? merge(config, { lint: { filePath: inputPath } })
          : {
              cwd,
              format: { enabled: format },
              lint: { enabled: lint, filePath: inputPath },
            },
      )

      spinner.succeed(`Generated theme typings`)

      end()
    } catch (e) {
      if (e instanceof Error) {
        spinner.fail(e.message)
      } else {
        spinner.fail("An unknown error occurred")
      }
    }
  })
