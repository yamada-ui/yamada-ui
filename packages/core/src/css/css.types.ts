import type * as CSS from "csstype"
import type { PseudoProps } from "../pseudos"
import type { StyleProps } from "../styles"
import type { Theme, StyledTheme } from "../theme.types"

export type * as CSS from "csstype"

export type ColorMode = "light" | "dark"

type ThemeVariant<Y extends keyof Theme["components"] | unknown = unknown> =
  Y extends keyof Theme["components"]
    ? UIValue<Theme["components"][Y]["variants"]>
    : UIValue<string>

type ThemeSize<Y extends keyof Theme["components"] | unknown = unknown> =
  Y extends keyof Theme["components"]
    ? UIValue<Theme["components"][Y]["sizes"]>
    : UIValue<string>

export type ThemeProps<
  Y extends keyof Theme["components"] | unknown = unknown,
> = {
  variant?: ThemeVariant<Y>
  size?: ThemeSize<Y>
  colorScheme?: Theme["colorSchemes"]
}

export type ColorModeArray<Y> = [Y, Y]

export type ResponsiveObject<Y> = Record<"base", Y> &
  Partial<Record<Theme["breakpoints"], Y>>

type UIValue<Y> = ResponsiveObject<Y> | ColorModeArray<Y> | Y

export type BaseToken<Y, M = unknown> = M extends keyof Theme ? Y | Theme[M] : Y

export type ColorModeToken<Y, M = unknown> = M extends keyof Theme
  ? ColorModeArray<Y | Theme[M]> | Y | Theme[M]
  : ColorModeArray<Y> | Y

export type ResponsiveToken<Y, M = unknown> = M extends keyof Theme
  ? ResponsiveObject<Y | Theme[M]> | Y | Theme[M]
  : ResponsiveObject<Y> | Y

export type Token<Y, M = unknown> = M extends keyof Theme
  ? UIValue<Y | Theme[M]>
  : UIValue<Y>

export type StyledProps<Y> = Y | ((theme: StyledTheme) => Y)

export type StyleProperties = CSS.Properties &
  Omit<StyleProps, keyof CSS.Properties>

type StyleValue<Y extends keyof StyleProperties> = StyledProps<
  UIValue<StyleProperties[Y]>
>

export type StyleUIValue = {
  [Y in keyof StyleProperties]?: Y extends keyof StyleProps
    ? StyleProps[Y] | StyleValue<Y>
    : StyleValue<Y>
}

type StyleDefinition<Y> = Y | string | RecursiveStyles<Y | string>

type PseudoDefinition<Y> = Y | RecursivePseudos<Y>

export type RecursiveStyles<Y> = {
  [key: string]: (StyleDefinition<Y> | PseudoDefinition<Y>) & Y
}

export type RecursivePseudos<Y> = {
  [K in keyof CSS.Pseudos | keyof PseudoProps]?: PseudoDefinition<Y> & Y
}

export type RecursiveCSSUIObject<Y> = Y &
  (Y | RecursivePseudos<Y> | RecursiveStyles<Y>)

export type CSSUIObject = RecursiveCSSUIObject<StyleUIValue>

export type CSSUIProps = StyleProps & PseudoProps

export type UIStyleProps = {
  theme: StyledTheme
  colorMode?: ColorMode
  colorScheme?: Theme["colorSchemes"]
  themeScheme?: Theme["themeSchemes"]
  [key: string]: any
}

export type UIStyle = CSSUIObject | ((props: UIStyleProps) => CSSUIObject)
export type UIMultiStyle =
  | Record<string, UIStyle>
  | ((props: UIStyleProps) => Record<string, UIStyle>)

export type AnimationStyle = {
  keyframes: Record<string, StyleUIValue>
  duration?: BaseToken<CSS.Property.AnimationDuration, "transitionDuration">
  timingFunction?: BaseToken<
    CSS.Property.AnimationTimingFunction,
    "transitionEasing"
  >
  delay?: BaseToken<CSS.Property.AnimationDelay>
  iterationCount?: BaseToken<CSS.Property.AnimationIterationCount>
  direction?: BaseToken<CSS.Property.AnimationDirection>
  fillMode?: BaseToken<CSS.Property.AnimationFillMode>
  playState?: BaseToken<CSS.Property.AnimationPlayState>
}

export type FunctionCSSInterpolation = {
  (theme: StyledTheme): CSSUIProps
}

export type CSSObjectOrFunc = CSSUIProps | FunctionCSSInterpolation
