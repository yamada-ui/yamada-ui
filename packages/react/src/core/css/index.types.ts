import type * as CSS from "csstype"
import type { ObjectLiteral, StringLiteral } from "../../utils"
import type { PseudoProperty, PseudoProps } from "../pseudos"
import type { StyleProps } from "../styles"
import type {
  Breakpoint,
  KeyframeIdent,
  StyledTheme,
  ThemeTokens,
  UsageTheme,
} from "../theme"

export type { CSS }

export type ColorMode = "dark" | "light"
export type ColorModeWithSystem = "system" | ColorMode

export type ColorModeArray<Y, M extends boolean = true> = M extends true
  ? [ResponsiveObject<Y, false> | Y, ResponsiveObject<Y, false> | Y]
  : [Y, Y]

export type ResponsiveObject<Y, M extends boolean = true> = M extends true
  ? { [key in Breakpoint]?: ColorModeArray<Y, false> | Y }
  : { [key in Breakpoint]?: Y }

export type ResponsiveWithPseudoObject<
  Y,
  M extends boolean = true,
> = M extends true
  ? { [key in Breakpoint | PseudoProperty]?: ColorModeArray<Y, false> | Y }
  : { [key in Breakpoint | PseudoProperty]?: Y }

export type Token<Y, M = unknown> = M extends keyof ThemeTokens
  ? ThemeTokens[M] | Y
  : Y

export type ColorModeValue<Y, M = unknown> = M extends keyof ThemeTokens
  ? ColorModeArray<ThemeTokens[M] | Y> | ThemeTokens[M] | Y
  : ColorModeArray<Y> | Y

export type ResponsiveValue<Y, M = unknown> = M extends keyof ThemeTokens
  ? ResponsiveObject<ThemeTokens[M] | Y> | ThemeTokens[M] | Y
  : ResponsiveObject<Y> | Y

export type StyleValue<Y, M = unknown> = M extends keyof ThemeTokens
  ?
      | ColorModeArray<ThemeTokens[M] | Y>
      | ResponsiveWithPseudoObject<ThemeTokens[M] | Y>
      | ThemeTokens[M]
      | Y
  : ColorModeArray<Y> | ResponsiveWithPseudoObject<Y> | Y

type CSSInternalObject = {
  [Y in keyof StyleProps]?: StyleValue<StyleProps[Y]>
}

type CSSRecursiveObject<Y> = {
  [K in keyof CSS.Pseudos | PseudoProperty | StringLiteral]?:
    | (CSSRecursiveObject<Y> & Y)
    | ObjectLiteral
}

export interface CSSObject
  extends CSSInternalObject,
    CSSRecursiveObject<CSSInternalObject> {}

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

export type CSSKeyframesObject = {
  [key in `${number}%` | KeyframeIdent]?: CSSInternalObject
}

export interface CSSAnimationObject {
  keyframes: Token<CSSKeyframesObject, "keyframes">
  delay?: Token<CSS.Property.AnimationDelay>
  direction?: Token<CSS.Property.AnimationDirection>
  duration?: Token<CSS.Property.AnimationDuration, "durations">
  fillMode?: Token<CSS.Property.AnimationFillMode>
  iterationCount?: Token<CSS.Property.AnimationIterationCount>
  playState?: Token<CSS.Property.AnimationPlayState>
  timingFunction?: Token<CSS.Property.AnimationTimingFunction, "easings">
}

export interface CSSProps extends StyleProps, PseudoProps {
  /**
   * The CSS object.
   */
  css?: CSSObject | CSSObject[]
}

export interface FunctionCSSInterpolation {
  (theme: StyledTheme<UsageTheme>): CSSObject
}

export type CSSObjectOrFunction = CSSObject | FunctionCSSInterpolation
