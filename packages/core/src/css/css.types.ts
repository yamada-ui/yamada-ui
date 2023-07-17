import { Dict } from '@yamada-ui/utils'
import type * as CSS from 'csstype'
import { StylesProps, PseudosProps } from '../styles'
import { Theme, StyledTheme } from '../theme.types'

export type ColorMode = 'light' | 'dark'

export type ThemeProps<
  Y extends keyof Theme['components'] | unknown = unknown,
> = {
  variant?: Y extends keyof Theme['components']
    ?
        | ResponsiveObject<Theme['components'][Y]['variants']>
        | ColorModeArray<Theme['components'][Y]['variants']>
        | Theme['components'][Y]['variants']
    : ResponsiveObject<string> | ColorModeArray<string> | string
  size?: Y extends keyof Theme['components']
    ?
        | ResponsiveObject<Theme['components'][Y]['sizes']>
        | ColorModeArray<Theme['components'][Y]['sizes']>
        | Theme['components'][Y]['sizes']
    : ResponsiveObject<string> | ColorModeArray<string> | string
  colorScheme?: Theme['colorSchemes']
}

export type ColorModeArray<Y> = [Y, Y]

export type ResponsiveObject<Y> = Record<'base', Y> &
  Partial<Record<Theme['breakpoints'], Y>>

export type Token<
  Y,
  M = unknown,
  D = 'responsive',
  H = 'colorMode',
> = M extends keyof Theme
  ? D extends 'responsive'
    ? H extends 'colorMode'
      ?
          | ResponsiveObject<Y | Theme[M]>
          | ColorModeArray<Y | Theme[M]>
          | Y
          | Theme[M]
      : ResponsiveObject<Y | Theme[M]> | Y | Theme[M]
    : H extends 'colorMode'
    ? ColorModeArray<Y | Theme[M]> | Y | Theme[M]
    : Y | Theme[M]
  : D extends 'responsive'
  ? H extends 'colorMode'
    ? ResponsiveObject<Y> | ColorModeArray<Y> | Y
    : ResponsiveObject<Y> | Y
  : H extends 'colorMode'
  ? ColorModeArray<Y> | Y
  : Y

export type StyledProps<Y> = Y | ((theme: StyledTheme<Dict>) => Y)

export type StyleProperties = CSS.Properties &
  Omit<StylesProps, keyof CSS.Properties>

type StyleValue<Y extends keyof StyleProperties> = StyledProps<
  | ResponsiveObject<boolean | number | string | StyleProperties[Y]>
  | ColorModeArray<boolean | number | string | StyleProperties[Y]>
  | StyleProperties[Y]
>

export type StyleUIValue = {
  [Y in keyof StyleProperties]?: Y extends keyof StylesProps
    ? StylesProps[Y] | StyleValue<Y>
    : StyleValue<Y>
}

type StyleDefinition<Y> = Y | string | RecursiveStyles<Y | string>

type PseudoDefinition<Y> = Y | RecursivePseudos<Y>

export type RecursiveStyles<Y> = {
  [key: string]: (StyleDefinition<Y> | PseudoDefinition<Y>) & Y
}

export type RecursivePseudos<Y> = {
  [K in keyof CSS.Pseudos | keyof PseudosProps]?: PseudoDefinition<Y> & Y
}

export type RecursiveCSSUIObject<Y> = Y &
  (Y | RecursivePseudos<Y> | RecursiveStyles<Y>)

export type CSSUIObject = RecursiveCSSUIObject<StyleUIValue>

export type CSSUIProps<Y = 'responsive', M = 'colorMode'> = StylesProps<Y, M> &
  PseudosProps

export type UIStyleProps = {
  theme: StyledTheme<Dict>
  colorMode?: ColorMode
  colorScheme?: Theme['colorSchemes']
  [key: string]: any
}

export type UIStyle = CSSUIObject | ((props: UIStyleProps) => CSSUIObject)
export type UIMultiStyle =
  | Record<string, UIStyle>
  | ((props: UIStyleProps) => Record<string, UIStyle>)

export type FunctionCSSInterpolation = {
  (theme: StyledTheme<Dict>): CSSUIProps
}

export type CSSObjectOrFunc = CSSUIProps | FunctionCSSInterpolation
