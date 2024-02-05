import { isArray, isObject, omitObject, prettier } from "../../utils"
import { config } from "./config"

type Component = {
  sizes: string[]
  variants: string[]
}

const hues = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

export const printComponent = (components: Record<string, Component>) =>
  `components: { ${Object.entries(components)
    .map(
      ([key, unions]) =>
        `${key.match(/^[a-zA-Z0-9\-_]+$/) ? key : `"${key}"`}: { ${print(
          unions,
        )}}`,
    )
    .join(`\n`)} }`

export const print = (unions: Record<string, string[]>) =>
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

export const extractComponents = ({ components = {} }: { components: any }) =>
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
    {} as Record<string, Component>,
  )

export const extractTransitions = (theme: any) => {
  let transitionProperty: string[] = []
  let transitionDuration: string[] = []
  let transitionEasing: string[] = []

  const { transitions, semantics } = theme

  if (!isObject(transitions))
    return { transitionProperty, transitionDuration, transitionEasing }

  const { property, duration, easing } = semantics.transitions ?? {}

  Object.entries(transitions).forEach(([key, value]) => {
    switch (key) {
      case "property":
        transitionProperty = [...extractPaths(value), ...extractPaths(property)]
        break

      case "duration":
        transitionDuration = [...extractPaths(value), ...extractPaths(duration)]
        break

      case "easing":
        transitionEasing = [...extractPaths(value), ...extractPaths(easing)]
        break

      default:
        return
    }
  })

  return { transitionProperty, transitionDuration, transitionEasing }
}

const isHue = (value: any) => {
  if (!isObject(value)) return false

  const keys = Object.keys(value)

  return hues.every((key) => keys.includes(key.toString()))
}

export const extractColorSchemes = (theme: any) => {
  const { colors, semantics } = theme
  const results: { colorSchemes: string[]; colorSchemeColors: string[] } = {
    colorSchemes: [],
    colorSchemeColors: [],
  }

  if (!isObject(colors)) return results

  Object.entries(colors).forEach(([key, value]) => {
    if (!isHue(value)) return

    results.colorSchemes.push(key)

    const semanticKeys =
      Object.entries(semantics?.colorSchemes ?? {})
        .filter(([, relatedKey]) => key === relatedKey)
        .map(([key]) => key) ?? []

    if (!semanticKeys.length) return

    results.colorSchemes.push(...semanticKeys)
    results.colorSchemeColors.push(
      ...semanticKeys
        .map((semanticKey) =>
          Object.keys(value).map((hue) => `${semanticKey}.${hue}`),
        )
        .flat(),
    )
  })

  return results
}

export const extractThemeSchemes = (theme: any) => {
  const { themeSchemes } = theme

  if (!isObject(themeSchemes)) return ["base"]

  return ["base", ...Object.keys(themeSchemes)]
}

export const extractPaths = (
  target: any,
  maxDepth = 3,
  omitKeys: string[] = [],
) => {
  if ((!isObject(target) && !isArray(target)) || !maxDepth) return []

  return Object.entries(target).reduce((array, [key, value]) => {
    if (
      isObject(value) &&
      !Object.keys(value).some((key) => omitKeys.includes(key))
    ) {
      extractPaths(value, maxDepth - 1, omitKeys).forEach((nestedKey) =>
        array.push(`${key}.${nestedKey}`),
      )
    } else {
      array.push(key)
    }

    return array
  }, [] as string[])
}

export const extractKeys = (theme: any, key: string) => {
  const keys = key.split(".")

  const property = keys.reduce((obj, key) => obj[key] ?? {}, theme)

  if (!isObject(property)) return []

  return Object.keys(property)
}

export const createThemeTypings = async (theme: any) => {
  const tokens = config.reduce(
    (
      prev,
      {
        key,
        maxScanDepth,
        omitScanKeys,
        filter = () => true,
        flatMap = (value) => value,
      },
    ) => {
      const target = theme[key]

      prev[key] = []

      if (isObject(target) || isArray(target)) {
        prev[key] = extractPaths(target, maxScanDepth, omitScanKeys)
          .filter(filter)
          .flatMap(flatMap)
      }

      if (isObject(theme.semantics)) {
        const semanticKeys = extractKeys(
          omitObject(theme.semantics, ["colorSchemes"]),
          key,
        )
          .filter(filter)
          .flatMap(flatMap)

        prev[key].push(...semanticKeys)
      }

      return prev
    },
    {} as Record<string, string[]>,
  )

  const textStyles = extractKeys(theme, "styles.textStyles")
  const layerStyles = extractKeys(theme, "styles.layerStyles")
  const { colorSchemes, colorSchemeColors } = extractColorSchemes(theme)
  const themeSchemes = extractThemeSchemes(theme)
  const { transitionProperty, transitionDuration, transitionEasing } =
    extractTransitions(theme)
  const componentTypes = extractComponents(theme)

  tokens.colors = [...tokens.colors, ...colorSchemeColors]

  return prettier(
    `import type { UITheme } from './ui-theme.types'\n\nexport interface GeneratedTheme extends UITheme { ${print(
      {
        ...tokens,
        textStyles,
        layerStyles,
        colorSchemes,
        themeSchemes,
        transitionProperty,
        transitionDuration,
        transitionEasing,
      },
    )} ${printComponent(componentTypes)} }`,
  )
}
