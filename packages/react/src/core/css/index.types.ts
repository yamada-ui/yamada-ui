import type * as CSS from "csstype"
import type { ObjectLiteral, StringLiteral } from "../../utils"
import type { PseudoProps } from "../pseudos"
import type { StyleProps } from "../styles"
import type { Breakpoint, StyledTheme, ThemeTokens, UsageTheme } from "../theme"

export type { CSS }

export type ColorMode = "dark" | "light"
export type ColorModeWithSystem = "system" | ColorMode

export type ColorModeArray<Y, M extends boolean = true> = M extends true
  ? [ResponsiveObject<Y, false> | Y, ResponsiveObject<Y, false> | Y]
  : [Y, Y]

export type ResponsiveObject<Y, M extends boolean = true> = M extends true
  ? { [key in Breakpoint]?: ColorModeArray<Y, false> | Y }
  : { [key in Breakpoint]?: Y }

export type UIValue<Y> = ColorModeArray<Y> | ResponsiveObject<Y> | Y

export type BaseToken<Y, M = unknown> = M extends keyof ThemeTokens
  ? ThemeTokens[M] | Y
  : Y

export type ColorModeToken<Y, M = unknown> = M extends keyof ThemeTokens
  ? ColorModeArray<ThemeTokens[M] | Y> | ThemeTokens[M] | Y
  : ColorModeArray<Y> | Y

export type ResponsiveToken<Y, M = unknown> = M extends keyof ThemeTokens
  ? ResponsiveObject<ThemeTokens[M] | Y> | ThemeTokens[M] | Y
  : ResponsiveObject<Y> | Y

export type Token<Y, M = unknown> = M extends keyof ThemeTokens
  ? UIValue<ThemeTokens[M] | Y>
  : UIValue<Y>

export interface CSSProperties
  extends CSS.Properties,
    Omit<StyleProps, keyof CSS.Properties> {}

type StyleValue<Y extends keyof CSSProperties> = UIValue<CSSProperties[Y]>

type StyleUIValue<Y extends keyof CSSProperties | keyof StyleProps> =
  Y extends keyof StyleProps ? StyleProps[Y] | StyleValue<Y> : StyleValue<Y>

export type StyleObject = {
  [Y in keyof CSSProperties]?: StyleUIValue<Y>
}

export type CSSRecursiveObject<Y> = {
  [K in keyof CSS.Pseudos | keyof PseudoProps | StringLiteral]?:
    | (CSSRecursiveObject<Y> & Y)
    | ObjectLiteral
}

export interface CSSObject
  extends StyleObject,
    CSSRecursiveObject<StyleObject> {}

export interface CSSPropObject<
  Y extends CSSObject | CSSSlotObject = CSSObject,
> {
  [key: string]: { [key: string]: Y }
}

export type CSSSlotObject<Y extends number | string | symbol = string> = {
  [key in Y]?: CSSObject
}

export interface CSSModifierObject<
  Y extends CSSObject | CSSSlotObject = CSSObject,
> {
  [key: string]: Y
}

export interface CSSProps extends StyleProps, PseudoProps {
  /**
   * The CSS object.
   */
  css?: CSSObject | CSSObject[]
}

export interface AnimationStyle {
  keyframes: { [key: string]: StyleObject } | ThemeTokens["keyframes"]
  delay?: BaseToken<CSS.Property.AnimationDelay>
  direction?: BaseToken<CSS.Property.AnimationDirection>
  duration?: BaseToken<CSS.Property.AnimationDuration, "durations">
  fillMode?: BaseToken<CSS.Property.AnimationFillMode>
  iterationCount?: BaseToken<CSS.Property.AnimationIterationCount>
  playState?: BaseToken<CSS.Property.AnimationPlayState>
  timingFunction?: BaseToken<CSS.Property.AnimationTimingFunction, "easings">
}

export interface FunctionCSSInterpolation {
  (theme: StyledTheme<UsageTheme>): CSSObject
}

export type CSSObjectOrFunc = CSSObject | FunctionCSSInterpolation
