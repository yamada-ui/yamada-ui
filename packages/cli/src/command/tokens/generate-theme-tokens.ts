import type { Dict } from "../../utils/index.js"
import {
  getObject,
  isArray,
  isObject,
  omitObject,
  prettier,
} from "../../utils/index.js"
import { config } from "./config.js"

const TONES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

const print = (unions: { [key: string]: string[] }) =>
  Object.entries(unions)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(
      ([key, union]) =>
        `${key}: ${union
          .map((value: any) => `"${value}"`)
          .concat(["(string & {})"])
          .join(" | ")};`,
    )
    .join("\n")

const isTone = (value: any) => {
  if (!isObject(value)) return false

  const keys = Object.keys(value)

  return TONES.every((key) => keys.includes(key.toString()))
}

const extractColorSchemes = (theme: Dict, colorTokens: string[] = []) => {
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

  if (!isObject(semanticTokens?.colorSchemes)) return { colorSchemes }

  Object.entries(semanticTokens.colorSchemes).forEach(([key, value]) => {
    if (isTone(value)) {
      colorSchemes.push(key)
      colorTokens.push(...TONES.map((tone) => `${key}.${tone}`))
    } else {
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

  if (!isObject(colors)) return { colorSchemes }

  Object.entries(colors).forEach(([key, value]) => {
    if (!isTone(value)) return

    colorSchemes.push(key)
  })

  return { colorSchemes }
}

const extractThemeSchemes = (theme: Dict) => {
  const { themeSchemes } = theme

  if (!isObject(themeSchemes)) return ["base"]

  return ["base", ...Object.keys(themeSchemes)]
}

interface ExtractPathsOptions {
  maxDepth?: number
  replaceKey?: (key: string) => string
  shouldProcess?: (obj: Dict) => boolean
}

const extractPaths = (
  target: Dict,
  {
    maxDepth = Infinity,
    replaceKey = (key: string) => key,
    shouldProcess = () => true,
  }: ExtractPathsOptions = {},
) => {
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

const extractKeys = (obj: Dict, key: string) => {
  const property = getObject(obj, key)

  if (!isObject(property)) return []

  return Object.keys(property)
}

export const generateThemeTokens = async (
  theme: Dict,
  { responsive = false }: Dict,
  internal: boolean,
) => {
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
    return prettier(
      [
        `import type { UsageThemeTokens } from "./theme"`,
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
    return prettier(
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
