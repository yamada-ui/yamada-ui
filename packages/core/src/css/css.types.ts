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

export type StyledProps<Y> = Y | ((theme: StyledTheme) => Y)

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
  theme: StyledTheme
  colorMode?: ColorMode
  colorScheme?: Theme['colorSchemes']
  themeScheme?: Theme['themeSchemes']
  [key: string]: any
}

export type UIStyle = CSSUIObject | ((props: UIStyleProps) => CSSUIObject)
export type UIMultiStyle =
  | Record<string, UIStyle>
  | ((props: UIStyleProps) => Record<string, UIStyle>)

export type AnimationStyle = {
  keyframes: Record<string, StylesProps<'unResponsive', 'unColorMode'>>
  duration?: Token<
    CSS.Property.AnimationDuration,
    'transitionDuration',
    'unResponsive',
    'unColorMode'
  >
  timingFunction?: Token<
    CSS.Property.AnimationTimingFunction,
    'transitionEasing',
    'unResponsive',
    'unColorMode'
  >
  delay?: Token<
    CSS.Property.AnimationDelay,
    unknown,
    'unResponsive',
    'unColorMode'
  >
  iterationCount?: Token<
    CSS.Property.AnimationIterationCount,
    unknown,
    'unResponsive',
    'unColorMode'
  >
  direction?: Token<
    CSS.Property.AnimationDirection,
    unknown,
    'unResponsive',
    'unColorMode'
  >
  fillMode?: Token<
    CSS.Property.AnimationFillMode,
    unknown,
    'unResponsive',
    'unColorMode'
  >
  playState?: Token<
    CSS.Property.AnimationPlayState,
    unknown,
    'unResponsive',
    'unColorMode'
  >
}

export type FunctionCSSInterpolation = {
  (theme: StyledTheme): CSSUIProps
}

export type CSSObjectOrFunc = CSSUIProps | FunctionCSSInterpolation
