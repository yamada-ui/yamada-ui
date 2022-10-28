import { Dict } from '@yamada-ui/utils'
import * as CSS from 'csstype'
import { Theme, StyledTheme, StylesProps, PseudosProps } from './'

export type Scheme = 'light' | 'dark'

export type ThemeProps<Y extends string = any> = {
  variant?: Y extends keyof Theme['components'] ? Theme['components'][Y]['variants'] : string
  size?: Y extends keyof Theme['components'] ? Theme['components'][Y]['sizes'] : string
  colorScheme?: Theme['colorSchemes']
}

export type SchemeArray<Y> = [Y, Y]

export type ResponsiveObject<Y> = Partial<Record<'base' | Theme['breakpoints'], Y>>

export type Token<Y, M = unknown, D = 'responsive', H = 'scheme'> = M extends keyof Theme
  ? D extends 'responsive'
    ? H extends 'scheme'
      ? ResponsiveObject<Y | Theme[M]> | SchemeArray<Y | Theme[M]> | Y | Theme[M]
      : ResponsiveObject<Y | Theme[M]> | Y | Theme[M]
    : Y | Theme[M]
  : D extends 'responsive'
  ? H extends 'scheme'
    ? ResponsiveObject<Y> | SchemeArray<Y> | Y
    : ResponsiveObject<Y> | Y
  : Y

export type StyledProps<T> = T | ((theme: StyledTheme<Dict>) => T)

export type StyleProperties = CSS.Properties & Omit<StylesProps, keyof CSS.Properties>

type StyleValue<Y extends keyof StyleProperties> = StyledProps<
  | ResponsiveObject<boolean | number | string | StyleProperties[Y]>
  | SchemeArray<boolean | number | string | StyleProperties[Y]>
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

export type CSSUIProps<Y = 'responsive', M = 'scheme'> = StylesProps<Y, M> & PseudosProps

export type UIStyle =
  | CSSUIObject
  | ((props: {
      theme: StyledTheme<Dict>
      scheme?: Scheme
      colorScheme?: string
      [key: string]: any
    }) => CSSUIObject)

export type FunctionCSSInterpolation = { (theme: StyledTheme<Dict>): CSSUIProps }

export type CSSObjectOrFunc = CSSUIProps | FunctionCSSInterpolation
