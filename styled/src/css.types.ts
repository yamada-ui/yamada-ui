import { Dict } from '@yamada-ui/utils'
import * as CSS from 'csstype'
import { Theme, StyledTheme, StylesProps, PseudosProps } from './'

export type ColorScheme = 'light' | 'dark'

export type ThemeProps<Y extends keyof Theme['components'] | unknown = unknown> = {
  variant?: Y extends keyof Theme['components']
    ?
        | ResponsiveObject<Theme['components'][Y]['variants']>
        | ColorSchemeArray<Theme['components'][Y]['variants']>
        | Theme['components'][Y]['variants']
    : ResponsiveObject<string> | ColorSchemeArray<string> | string
  size?: Y extends keyof Theme['components']
    ?
        | ResponsiveObject<Theme['components'][Y]['sizes']>
        | ColorSchemeArray<Theme['components'][Y]['sizes']>
        | Theme['components'][Y]['sizes']
    : ResponsiveObject<string> | ColorSchemeArray<string> | string
  colorStyle?: Theme['colorStyles']
}

export type ColorSchemeArray<Y> = [Y, Y]

export type ResponsiveObject<Y> = Record<'base', Y> & Partial<Record<Theme['breakpoints'], Y>>

export type Token<Y, M = unknown, D = 'responsive', H = 'colorScheme'> = M extends keyof Theme
  ? D extends 'responsive'
    ? H extends 'colorScheme'
      ? ResponsiveObject<Y | Theme[M]> | ColorSchemeArray<Y | Theme[M]> | Y | Theme[M]
      : ResponsiveObject<Y | Theme[M]> | Y | Theme[M]
    : H extends 'colorScheme'
    ? ColorSchemeArray<Y | Theme[M]> | Y | Theme[M]
    : Y | Theme[M]
  : D extends 'responsive'
  ? H extends 'colorScheme'
    ? ResponsiveObject<Y> | ColorSchemeArray<Y> | Y
    : ResponsiveObject<Y> | Y
  : H extends 'colorScheme'
  ? ColorSchemeArray<Y> | Y
  : Y

export type StyledProps<Y> = Y | ((theme: StyledTheme<Dict>) => Y)

export type StyleProperties = CSS.Properties & Omit<StylesProps, keyof CSS.Properties>

type StyleValue<Y extends keyof StyleProperties> = StyledProps<
  | ResponsiveObject<boolean | number | string | StyleProperties[Y]>
  | ColorSchemeArray<boolean | number | string | StyleProperties[Y]>
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
  [key: string]: StyleDefinition<Y> & Y
}

export type RecursivePseudos<Y> = {
  [K in keyof CSS.Pseudos | keyof PseudosProps]?: PseudoDefinition<Y> & Y
}

export type RecursiveCSSUIObject<Y> = Y & (Y | RecursivePseudos<Y> | RecursiveStyles<Y>)

export type CSSUIObject = RecursiveCSSUIObject<StyleUIValue>

export type CSSUIProps<Y = 'responsive', M = 'colorScheme'> = StylesProps<Y, M> & PseudosProps

export type UIStyleProps = {
  theme: StyledTheme<Dict>
  colorScheme?: ColorScheme
  colorStyle?: Theme['colorStyles']
  [key: string]: any
}

export type UIStyle = CSSUIObject | ((props: UIStyleProps) => CSSUIObject)

export type FunctionCSSInterpolation = { (theme: StyledTheme<Dict>): CSSUIProps }

export type CSSObjectOrFunc = CSSUIProps | FunctionCSSInterpolation
