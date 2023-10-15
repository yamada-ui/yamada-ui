import { isArray, isObject, omitObject, prettier } from '../../utils'
import { config } from './config'

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
          .concat(['(string & {})'])
          .join(' | ')};`,
    )
    .join('\n')

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
      case 'property':
        transitionProperty = [...extractPaths(value), ...extractPaths(property)]
        break

      case 'duration':
        transitionDuration = [...extractPaths(value), ...extractPaths(duration)]
        break

      case 'easing':
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

  if (!isObject(colors)) return []

  return Object.entries(colors).reduce((array, [key, value]) => {
    if (!isHue(value)) return array

    array.push(key)

    const [semanticKey] =
      Object.entries(semantics?.colorSchemes ?? {}).find(
        ([, relatedKey]) => key === relatedKey,
      ) ?? []

    if (semanticKey) array.push(semanticKey)

    return array
  }, [] as string[])
}

export const extractThemeSchemes = (theme: any) => {
  const { themeSchemes } = theme

  if (!isObject(themeSchemes)) return ['base']

  return ['base', ...Object.keys(themeSchemes)]
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
  const keys = key.split('.')

  const property = keys.reduce((obj, key) => obj[key] ?? {}, theme)

  if (!isObject(property)) return []

  return Object.keys(property)
}

export const createThemeTypings = async (theme: any) => {
  const unions = config.reduce(
    (
      obj,
      {
        key,
        maxScanDepth,
        omitScanKeys,
        filter = () => true,
        flatMap = (value) => value,
      },
    ) => {
      const target = theme[key]

      obj[key] = []

      if (isObject(target) || isArray(target)) {
        obj[key] = extractPaths(target, maxScanDepth, omitScanKeys)
          .filter(filter)
          .flatMap(flatMap)
      }

      if (isObject(theme.semantics)) {
        const semanticKeys = extractKeys(
          omitObject(theme.semantics, ['colorSchemes']),
          key,
        )
          .filter(filter)
          .flatMap(flatMap)

        obj[key].push(...semanticKeys)
      }

      return obj
    },
    {} as Record<string, string[]>,
  )

  const textStyles = extractKeys(theme, 'styles.textStyles')
  const layerStyles = extractKeys(theme, 'styles.layerStyles')
  const colorSchemes = extractColorSchemes(theme)
  const themeSchemes = extractThemeSchemes(theme)
  const { transitionProperty, transitionDuration, transitionEasing } =
    extractTransitions(theme)
  const componentTypes = extractComponents(theme)

  return prettier(
    `import { UITheme } from './ui-theme.types'\n\nexport interface GeneratedTheme extends UITheme { ${print(
      {
        ...unions,
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
