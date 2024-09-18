import type { Dict } from "../../utils"
import { getObject, isArray, isObject, prettier } from "../../utils"
import { config } from "./config"

const TONES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

interface Component {
  sizes: string[]
  variants: string[]
}

const printComponent = (components: { [key: string]: Component }) =>
  `components: { ${Object.entries(components)
    .map(
      ([key, unions]) =>
        `${key.match(/^[a-zA-Z0-9\-_]+$/) ? key : `"${key}"`}: { ${print(
          unions,
        )}}`,
    )
    .join(`\n`)} }`

const print = (unions: Component | { [key: string]: string[] }) =>
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

const extractComponents = ({ components = {} }: Dict) =>
  Object.entries<{ sizes?: object; variants?: object }>(components).reduce(
    (obj, [key, { sizes, variants }]) => {
      if (sizes || variants) {
        obj[key] = {
          sizes: Object.keys(sizes ?? {}),
          variants: Object.keys(variants ?? {}),
        }
      }

      return obj
    },
    {} as { [key: string]: Component },
  )

const isTone = (value: any) => {
  if (!isObject(value)) return false

  const keys = Object.keys(value)

  return TONES.every((key) => keys.includes(key.toString()))
}

const extractColorSchemes = (theme: Dict) => {
  const { colors, semantics } = theme

  let colorSchemes: string[] = []
  let colorSchemeColors: string[] = []

  if (!isObject(colors)) return { colorSchemes, colorSchemeColors }

  Object.entries(colors).forEach(([key, value]) => {
    if (!isTone(value)) return

    colorSchemes.push(key)
  })

  if (!isObject(semantics?.colorSchemes))
    return { colorSchemes, colorSchemeColors }

  Object.entries(semantics.colorSchemes).forEach(([key, value]) => {
    if (isTone(value)) {
      colorSchemes.push(key)
      colorSchemeColors.push(...TONES.map((tone) => `${key}.${tone}`))
    } else {
      const hasColorScheme = isArray(value)
        ? value.every((key) => Object.keys(colors).includes(String(key)))
        : Object.keys(colors).includes(String(value))

      if (!hasColorScheme) return

      colorSchemes.push(key)
      colorSchemeColors.push(...TONES.map((tone) => `${key}.${tone}`))
    }
  })

  return { colorSchemes, colorSchemeColors }
}

const extractThemeSchemes = (theme: Dict) => {
  const { themeSchemes } = theme

  if (!isObject(themeSchemes)) return ["base"]

  return ["base", ...Object.keys(themeSchemes)]
}

const extractPaths = (
  target: Dict,
  maxDepth = 3,
  omitKeys: string[] = [],
  shouldProcess?: (obj: Dict) => boolean,
) => {
  if ((!isObject(target) && !isArray(target)) || !maxDepth) return []

  return Object.entries(target).reduce((prev, [key, value]) => {
    if (
      isObject(value) &&
      !Object.keys(value).some((key) => omitKeys.includes(key)) &&
      (!shouldProcess || shouldProcess(value))
    ) {
      extractPaths(value, maxDepth - 1, omitKeys, shouldProcess).forEach(
        (nestedKey) => prev.push(`${key}.${nestedKey}`),
      )
    } else {
      prev.push(key)
    }

    return prev
  }, [] as string[])
}

const extractKeys = (obj: Dict, key: string) => {
  const property = getObject(obj, key)

  if (!isObject(property)) return []

  return Object.keys(property)
}

export const createThemeTypings = async (
  theme: Dict,
  { responsive = false }: Dict,
) => {
  let shouldProcess: ((obj: Dict) => boolean) | undefined = undefined

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

  const tokens = config.reduce(
    (
      prev,
      {
        key,
        replaceKey,
        maxScanDepth,
        omitScanKeys,
        flatMap = (value) => value,
      },
    ) => {
      const target = getObject(theme, key)

      prev[replaceKey ?? key] = []

      if (isObject(target) || isArray(target)) {
        prev[replaceKey ?? key] = extractPaths(
          target,
          maxScanDepth,
          omitScanKeys,
          shouldProcess,
        ).flatMap(flatMap)
      }

      if (isObject(theme.semantics)) {
        const target = getObject(theme.semantics, key)

        const semanticKeys = extractPaths(
          target,
          maxScanDepth,
          omitScanKeys,
          shouldProcess,
        ).flatMap(flatMap)

        prev[replaceKey ?? key].push(...semanticKeys)
      }

      return prev
    },
    {} as { [key: string]: string[] },
  )

  const textStyles = extractKeys(theme, "styles.textStyles")
  const layerStyles = extractKeys(theme, "styles.layerStyles")
  const { colorSchemes, colorSchemeColors } = extractColorSchemes(theme)
  const themeSchemes = extractThemeSchemes(theme)
  const components = extractComponents(theme)

  tokens.colors = [...tokens.colors, ...colorSchemeColors]

  return prettier(
    [
      `import type { UITheme } from './ui-theme.types'`,
      ``,
      `export interface GeneratedTheme extends UITheme {`,
      print({
        ...tokens,
        textStyles,
        layerStyles,
        colorSchemes,
        themeSchemes,
      }),
      printComponent(components),
      `}`,
    ].join("\n"),
  )
}
