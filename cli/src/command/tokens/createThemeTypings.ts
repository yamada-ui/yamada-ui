import { isArray, isObject, prettier } from '../../utils'
import { config } from './config'

type Component = {
  sizes: string[]
  variants: string[]
}

export const printComponent = (components: Record<string, Component>): string =>
  `components: { ${Object.entries(components)
    .map(
      ([key, unions]) =>
        `${key.match(/^[a-zA-Z0-9\-_]+$/) ? key : `"${key}"`}: { ${print(unions)}}`,
    )
    .join(`\n`)} }`

export const print = (unions: Record<string, string[]>): string =>
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

export const extractComponents = ({
  components = {},
}: {
  components: any
}): Record<string, Component> =>
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

export const extractPaths = (target: any, maxDepth = 3): string[] => {
  if ((!isObject<object>(target) && !Array.isArray(target)) || !maxDepth) return []

  return Object.entries(target).reduce((array, [key, value]) => {
    if (isObject(value)) {
      extractPaths(value, maxDepth - 1).forEach((nestedKey) => array.push(`${key}.${nestedKey}`))
    } else {
      array.push(key)
    }

    return array
  }, [] as string[])
}

export const extractKeys = (theme: any, key: string): string[] => {
  const keys = key.split('.')

  const property = keys.reduce((obj, key) => obj[key] ?? {}, theme)

  if (!isObject<object>(property)) return []

  return Object.keys(property)
}

export const createThemeTypings = async (theme: any) => {
  const unions = config.reduce(
    (obj, { key, maxScanDepth, filter = () => true, flatMap = (value) => value }) => {
      const target = theme[key]

      obj[key] = []

      if (isObject(target) || isArray(target)) {
        obj[key] = extractPaths(target, maxScanDepth).filter(filter).flatMap(flatMap)
      }

      if (isObject(theme.semantic)) {
        const semanticKeys = extractKeys(theme.semantic, key).filter(filter).flatMap(flatMap)

        obj[key].push(...semanticKeys)
      }

      return obj
    },
    {} as Record<string, string[]>,
  )

  const textStyles = extractKeys(theme, 'styles.textStyles')
  const layerStyles = extractKeys(theme, 'styles.layerStyles')
  const componentTypes = extractComponents(theme)

  return prettier(
    `export type GeneratedTheme = { ${print({
      ...unions,
      textStyles,
      layerStyles,
    })} ${printComponent(componentTypes)} }`,
  )
}
