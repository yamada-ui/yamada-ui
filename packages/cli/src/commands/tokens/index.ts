import type { Dict } from "@yamada-ui/utils"
import {
  getObject,
  isArray,
  isObject,
  isString,
  omitObject,
} from "@yamada-ui/utils"
import chokidar from "chokidar"
import { Command } from "commander"
import { ESLint } from "eslint"
import { writeFile } from "fs/promises"
import ora from "ora"
import path from "path"
import c from "picocolors"
import { format, getModule } from "../../utils"
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

async function generateThemeTokens(
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
    return await format(
      [
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
      ].join("\n"),
    )
  } else {
    return format(
      [
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
      ].join("\n"),
    )
  }
}

const getTheme = async (path: string, cwd: string) => {
  const { dependencies, mod } = await getModule(path, cwd)

  const theme =
    mod?.default ?? mod?.theme ?? mod?.customTheme ?? mod?.defaultTheme ?? {}
  const config = mod?.config ?? mod?.customConfig ?? mod?.defaultConfig ?? {}

  return { config, dependencies, theme }
}

interface Options {
  cwd: string
  internal: boolean
  lint: boolean
  watch: boolean | string
  out?: string
}

export const tokens = new Command("tokens")
  .description("Generate theme typings")
  .argument("<path>", "Path to the theme file")
  .option("--cwd <path>", "Current working directory", process.cwd())
  .option("-o, --out <path>", `Output path`)
  .option(
    "-w, --watch [path]",
    "Watch directory for changes and rebuild",
    false,
  )
  .option("--lint", "Lint the output file", false)
  .option("--internal", "Generate internal tokens", false)
  .action(async function (
    inputPath: string,
    { cwd, internal, lint, out: outPath, watch }: Options,
  ) {
    const spinner = ora()
    const eslint = new ESLint({ fix: true })

    spinner.start(`Getting theme`)

    cwd = path.resolve(cwd)
    inputPath = path.resolve(cwd, inputPath)
    outPath = outPath
      ? path.resolve(cwd, outPath)
      : path.join(
          inputPath.includes("/")
            ? inputPath.split("/").slice(0, -1).join("/")
            : cwd,
          "index.types.ts",
        )

    let file = await getTheme(inputPath, cwd)

    const { config, dependencies, theme } = file

    spinner.succeed(`Got theme`)

    const buildFile = async () => {
      spinner.start(`Generating theme typings`)

      let content = await generateThemeTokens(theme, { ...config, internal })

      if (lint) {
        const [result] = await eslint.lintText(content, { filePath: inputPath })

        if (result?.output) content = result.output
      }

      await writeFile(outPath, content, "utf8")

      spinner.succeed(`Generated theme typings`)

      if (watch) spinner.info("Watching for changes...")
    }

    if (watch) {
      const watchPath = isString(watch) ? watch : dependencies

      chokidar
        .watch(watchPath)
        .on("ready", buildFile)
        .on("change", async (path) => {
          spinner.info(`File changed ${path}`)

          file = await getTheme(inputPath, cwd)

          return buildFile()
        })
    } else {
      const start = process.hrtime.bigint()

      await buildFile()

      const end = process.hrtime.bigint()
      const duration = (Number(end - start) / 1e9).toFixed(2)

      console.log("\n", c.green(`Done in ${duration}s`))
    }
  })
