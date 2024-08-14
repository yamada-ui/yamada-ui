import type { ObjectLiteral, StringLiteral } from "@yamada-ui/utils"
import type * as CSS from "csstype"
import type { PseudoProps } from "../pseudos"
import type { StyleProps } from "../styles"
import type { Theme, StyledTheme } from "../theme.types"

export type { CSS }

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
  /**
   * The variant of the component.
   */
  variant?: ThemeVariant<Y>
  /**
   * The size of the component.
   */
  size?: ThemeSize<Y>
  /**
   * The color scheme of the component.
   */
  colorScheme?: Theme["colorSchemes"]
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
  __styles?: CSSUIObject | Record<string, CSSUIObject>
}

export type ColorModeArray<Y> = [Y, Y]

export type ResponsiveObject<Y> = Partial<
  Record<Theme["breakpoints"] | "base", Y>
>

export type UIValue<Y> = ResponsiveObject<Y> | ColorModeArray<Y> | Y

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

export type UIStyles = {
  [Y in keyof StyleProperties]?: Y extends keyof StyleProps
    ? StyleProps[Y] | StyleValue<Y>
    : StyleValue<Y>
}

export type RecursiveStyles<Y> = {
  [K in keyof CSS.Pseudos | keyof PseudoProps | StringLiteral]?:
    | (Y & RecursiveStyles<Y>)
    | ObjectLiteral
}

export type CSSUIObject = UIStyles & RecursiveStyles<UIStyles>

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
  keyframes: Record<string, UIStyles>
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
