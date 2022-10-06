import { Dict, ExtendTheme, StyledTheme, Union } from '../types'
import { analyzeBreakpoints, createVars } from '../functions'
import { flattenObject, merge, objectFromEntries, pickObject } from '../utils'
import { defaultTheme } from '../themes'

export type SemanticValue<
  Y extends string,
  M extends string | number = string | number,
  D = 'union',
> = D extends 'union'
  ? Union<M> | Partial<Record<'default' | Y, Union<M>>>
  : Partial<Record<'default' | Y, Union<M>>>

export type SemanticVarToken = {
  isSemantic: true
  value: string | number | SemanticValue<string>
}

export type defaultVarToken = { isSemantic: false; value: string | number }

export type VarToken = defaultVarToken | SemanticVarToken

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
] as const

export type ThemeToken =
  | typeof tokens[number]
  | 'transition.duration'
  | 'transition.property'
  | 'transition.easing'

export const transformTheme = <T extends Dict>(_theme: T) => {
  const theme = omitTheme(_theme)

  const tokens = createTokens(theme)
  const prefix = theme.config?.var?.prefix
  const breakpoints = theme.breakpoints

  const { cssMap, cssVars } = createVars(tokens, prefix)

  const defaultCSSVars: Dict = {}

  Object.assign(theme, {
    __cssVars: { ...defaultCSSVars, ...cssVars },
    __cssMap: cssMap,
    __breakpoints: analyzeBreakpoints(breakpoints),
  })

  return theme as StyledTheme<T>
}

const createTokens = (theme: Dict): VarTokens => {
  const keys = tokens as unknown as string[]

  const defaultTokens = pickObject(theme, keys)

  const semanticTokens = theme.semantic ?? {}

  const defaultTokenEntries = Object.entries(flattenObject(defaultTokens) ?? {}).map(
    ([token, value]) => {
      const enhancedToken = { isSemantic: false, value }

      return [token, enhancedToken] as [string, defaultVarToken]
    },
  )

  const semanticTokenEntries = Object.entries(flattenObject(semanticTokens, 1) ?? {}).map(
    ([token, value]) => {
      const enhancedToken = { isSemantic: true, value }

      return [token, enhancedToken] as [string, SemanticVarToken]
    },
  )

  return objectFromEntries<VarTokens>([...defaultTokenEntries, ...semanticTokenEntries])
}

const omitTheme = (theme: Dict): Dict => {
  const { __cssMap, __cssVars, __breakpoints, ...rest } = theme

  return rest
}

export const extendTheme = (extendTheme: ExtendTheme): Dict => merge(defaultTheme, extendTheme)
