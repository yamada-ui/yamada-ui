import {
  flattenObject,
  objectFromEntries,
  pickObject,
  omitObject,
  Dict,
  hues,
  isObject,
  runIfFunc,
  isFunction,
} from '@yamada-ui/utils'
import { ThemeProps, UIStyleProps, analyzeBreakpoints, createVars } from './css'
import { ComponentMultiStyle, ComponentStyle, ThemeConfig } from './theme.types'

export type VarToken = {
  isSemantic: boolean
  value: string | number | [string | number, string | number]
}

export type VarTokens = Record<string, VarToken>

const tokens = [
  'blurs',
  'borders',
  'breakpoints',
  'colors',
  'fontSizes',
  'fontWeights',
  'fonts',
  'gradients',
  'letterSpacings',
  'lineHeights',
  'radii',
  'shadows',
  'sizes',
  'spaces',
  'transitions',
  'zIndices',
] as const

export type ThemeToken =
  | (typeof tokens)[number]
  | 'animations'
  | 'transitions.duration'
  | 'transitions.property'
  | 'transitions.easing'

export const transformTheme = <T extends Dict>(
  _theme: T,
  config?: ThemeConfig,
): Dict => {
  const theme = omitTheme(_theme)

  const tokens = createTokens(theme)
  const prefix = config?.var?.prefix
  const breakpoints = theme.breakpoints

  const { cssMap, cssVars } = createVars(tokens, prefix)

  const defaultCSSVars: Dict = {}

  Object.assign(theme, {
    __config: config,
    __cssVars: { ...defaultCSSVars, ...cssVars },
    __cssMap: cssMap,
    __breakpoints: analyzeBreakpoints(breakpoints),
  })

  return theme
}

const createTokens = (theme: Dict): VarTokens => {
  const defaultTokens = pickObject(theme, tokens as unknown as string[])

  const semanticTokens = theme.semantics ?? {}

  const defaultTokenEntries: [string, VarToken][] = Object.entries(
    flattenObject(defaultTokens) ?? {},
  ).map(([token, value]) => {
    const enhancedToken = { isSemantic: false, value }

    return [token, enhancedToken]
  })

  const semanticTokenEntries: [string, VarToken][] = Object.entries(
    flattenObject(semanticTokens) ?? {},
  ).reduce(
    (prev, [token, value]) => {
      if (token.startsWith('colorSchemes.')) {
        const [, semanticToken] = token.split('.')

        hues.forEach((hue) => {
          const enhancedToken = { isSemantic: true, value: `${value}.${hue}` }

          prev.push([`colors.${semanticToken}.${hue}`, enhancedToken])
        })
      } else {
        const enhancedToken = { isSemantic: true, value }

        prev.push([token, enhancedToken])
      }

      return prev
    },
    [] as [string, VarToken][],
  )

  return objectFromEntries<VarTokens>([
    ...defaultTokenEntries,
    ...semanticTokenEntries,
  ])
}

const omitTheme = (theme: Dict): Dict =>
  omitObject(theme, ['__cssMap', '__cssVar', '__breakpoints'])

export const omitThemeProps = <T extends ThemeProps>(props: T) =>
  omitObject(props, ['size', 'variant', 'colorScheme'])

export const mergeStyle = <T extends ComponentStyle | ComponentMultiStyle>(
  target: T,
  source: T,
): T => {
  let result = Object.assign({}, target) as T

  if (isObject(source)) {
    if (isObject(target)) {
      for (const [sourceKey, sourceValue] of Object.entries(source)) {
        const targetValue = target[sourceKey as keyof T]

        if (target.hasOwnProperty(sourceKey)) {
          if (!isFunction(targetValue) && !isFunction(sourceValue)) {
            result[sourceKey as keyof T] = mergeStyle(
              targetValue,
              sourceValue,
            ) as T[keyof T]
          } else {
            result[sourceKey as keyof T] = ((props: UIStyleProps) =>
              mergeStyle(
                runIfFunc(targetValue, props) as T,
                runIfFunc(sourceValue, props) as T,
              )) as T[keyof T]
          }
        } else {
          Object.assign(result, { [sourceKey]: sourceValue })
        }
      }
    } else {
      result = source
    }
  }

  return result as T
}
