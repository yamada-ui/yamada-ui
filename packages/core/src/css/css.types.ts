import type { Interpolation } from "@emotion/react"
import type { Dict, ObjectLiteral, StringLiteral } from "@yamada-ui/utils"
import type * as CSS from "csstype"
import type { PseudoProps } from "../pseudos"
import type { StyleProps } from "../styles"
import type { InternalTheme, StyledTheme, Theme } from "../theme.types"

export type { CSS }

export type ColorMode = "dark" | "light"
export type ColorModeWithSystem = "system" | ColorMode
export type Breakpoint = "base" | Theme["breakpoints"]

type ThemeVariant<Y extends keyof Theme["components"] | unknown = unknown> =
  Y extends keyof Theme["components"]
    ? UIValue<Theme["components"][Y]["variants"]>
    : UIValue<string>

type ThemeSize<Y extends keyof Theme["components"] | unknown = unknown> =
  Y extends keyof Theme["components"]
    ? UIValue<Theme["components"][Y]["sizes"]>
    : UIValue<string>

type ThemeColorScheme =
  | [Theme["colorSchemes"], Theme["colorSchemes"]]
  | Theme["colorSchemes"]

export interface ThemeProps<
  Y extends keyof Theme["components"] | unknown = unknown,
> {
  /**
   * The color scheme of the component.
   */
  colorScheme?: ThemeColorScheme
  /**
   * The size of the component.
   */
  size?: ThemeSize<Y>
  /**
   * The variant of the component.
   */
  variant?: ThemeVariant<Y>
  /**
   * If `true`, skip component theming.
   *
   * @private
   */
  __isProcessSkip?: boolean
  /**
   * The styles used to override component styles when `__isProcessSkip` is true
   *
   * @private
   */
  __styles?: { [key: string]: CSSUIObject | undefined } | CSSUIObject
}

export type ColorModeArray<Y, M extends boolean = true> = M extends true
  ? [ResponsiveObject<Y, false> | Y, ResponsiveObject<Y, false> | Y]
  : [Y, Y]

export type ResponsiveObject<Y, M extends boolean = true> = M extends true
  ? { [key in Breakpoint]?: ColorModeArray<Y, false> | Y }
  : { [key in Breakpoint]?: Y }

export type UIValue<Y> = ColorModeArray<Y> | ResponsiveObject<Y> | Y

export type BaseToken<Y, M = unknown> = M extends keyof Theme ? Theme[M] | Y : Y

export type ColorModeToken<Y, M = unknown> = M extends keyof Theme
  ? ColorModeArray<Theme[M] | Y> | Theme[M] | Y
  : ColorModeArray<Y> | Y

export type ResponsiveToken<Y, M = unknown> = M extends keyof Theme
  ? ResponsiveObject<Theme[M] | Y> | Theme[M] | Y
  : ResponsiveObject<Y> | Y

export type Token<Y, M = unknown> = M extends keyof Theme
  ? UIValue<Theme[M] | Y>
  : UIValue<Y>

export type StyledProps<Y> = ((theme: StyledTheme) => Y) | Y

export interface StyleProperties
  extends CSS.Properties,
    Omit<StyleProps, keyof CSS.Properties> {}

type StyleValue<Y extends keyof StyleProperties> = StyledProps<
  UIValue<StyleProperties[Y]>
>

type UIStyleValue<Y extends keyof StyleProperties | keyof StyleProps> =
  Y extends keyof StyleProps ? StyleProps[Y] | StyleValue<Y> : StyleValue<Y>

export type UIStyles = {
  [Y in keyof StyleProperties]?: UIStyleValue<Y>
}

export type RecursiveStyles<Y> = {
  [K in keyof CSS.Pseudos | keyof PseudoProps | StringLiteral]?:
    | ObjectLiteral
    | (RecursiveStyles<Y> & Y)
}

export interface CSSUIObject extends UIStyles, RecursiveStyles<UIStyles> {}

export interface CSSProps {
  /**
   * The emotion's css object.
   */
  css?: Interpolation<{}>
  /**
   * The CSS object that depends on the theme.
   */
  sx?: CSSUIObject
  /**
   * Used for internal css management.
   *
   * @private
   */
  __css?: CSSUIObject
}

export interface CSSUIProps extends StyleProps, PseudoProps {}

export type UIStyleProps<
  Y extends Dict = Dict,
  M extends InternalTheme = InternalTheme,
> = {
  theme: StyledTheme<M>
  colorScheme?: Theme["colorSchemes"]
  breakpoint?: Breakpoint
  colorMode?: ColorMode
  themeScheme?: Theme["themeSchemes"]
} & Y

export type UIStyle<Y extends Dict = Dict> =
  | ((props: UIStyleProps<Y>) => CSSUIObject)
  | CSSUIObject
export type UIMultiStyle<Y extends Dict = Dict> =
  | ((props: UIStyleProps<Y>) => { [key: string]: UIStyle<Y> })
  | { [key: string]: UIStyle<Y> }

export interface AnimationStyle {
  keyframes: { [key: string]: UIStyles }
  delay?: BaseToken<CSS.Property.AnimationDelay>
  direction?: BaseToken<CSS.Property.AnimationDirection>
  duration?: BaseToken<CSS.Property.AnimationDuration, "transitionDuration">
  fillMode?: BaseToken<CSS.Property.AnimationFillMode>
  iterationCount?: BaseToken<CSS.Property.AnimationIterationCount>
  playState?: BaseToken<CSS.Property.AnimationPlayState>
  timingFunction?: BaseToken<
    CSS.Property.AnimationTimingFunction,
    "transitionEasing"
  >
}

export interface FunctionCSSInterpolation {
  (theme: StyledTheme): CSSUIProps
}

export type CSSObjectOrFunc = CSSUIProps | FunctionCSSInterpolation
