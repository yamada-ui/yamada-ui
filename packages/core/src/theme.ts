import { flattenObject, objectFromEntries, pickObject, omitObject, Dict } from '@yamada-ui/utils'
import { ThemeProps, analyzeBreakpoints, createVars } from './css'
import { ThemeConfig } from './theme.types'

export type VarToken = {
  isSemantic: boolean
  value: string | number | [string | number, string | number]
}

export type VarTokens = Record<string, VarToken>

const tokens = [
  'colors',
  'fonts',
  'fontSizes',
  'fontWeights',
  'letterSpacings',
  'lineHeights',
  'radii',
  'shadows',
  'borders',
  'sizes',
  'spaces',
  'zIndices',
  'transitions',
] as const

export type ThemeToken =
  | (typeof tokens)[number]
  | 'transitions.duration'
  | 'transitions.property'
  | 'transitions.easing'

export const transformTheme = <T extends Dict>(_theme: T, config: ThemeConfig): Dict => {
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
  const keys = tokens as unknown as string[]

  const defaultTokens = pickObject(theme, keys)

  const semanticTokens = theme.semantics ?? {}

  const defaultTokenEntries = Object.entries(flattenObject(defaultTokens) ?? {}).map(
    ([token, value]) => {
      const enhancedToken = { isSemantic: false, value }

      return [token, enhancedToken] as [string, VarToken]
    },
  )

  const semanticTokenEntries = Object.entries(flattenObject(semanticTokens) ?? {}).map(
    ([token, value]) => {
      const enhancedToken = { isSemantic: true, value }

      return [token, enhancedToken] as [string, VarToken]
    },
  )

  return objectFromEntries<VarTokens>([...defaultTokenEntries, ...semanticTokenEntries])
}

const omitTheme = (theme: Dict): Dict =>
  omitObject(theme, ['__cssMap', '__cssVar', '__breakpoints'])

export const omitThemeProps = <T extends ThemeProps>(props: T) =>
  omitObject(props, ['size', 'variant', 'colorStyle'])
