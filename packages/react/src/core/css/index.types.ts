import type * as CSS from "csstype"
import type { AnyString } from "../../utils"
import type {
  AnySelector,
  ConditionProperty,
  ConditionProps,
} from "../conditions"
import type { StyleProps } from "../styles"
import type {
  Breakpoint,
  KeyframeIdent,
  StyledTheme,
  ThemePath,
  ThemeTokens,
  UsageTheme,
} from "../theme"

export type { CSS }

export type ColorMode = "dark" | "light"
export type ColorModeWithSystem = "system" | ColorMode

export type ColorModeArray<Y, M extends boolean = true> = M extends true
  ? [ResponsiveWithConditionObject<Y> | Y, ResponsiveWithConditionObject<Y> | Y]
  : [Y, Y]

export type ResponsiveObject<Y, M extends boolean = true> = M extends true
  ? { [D in Breakpoint]?: ColorModeArray<Y> | Y }
  : { [D in Breakpoint]?: Y }

export type ConditionObject<Y, M extends boolean = true> = M extends true
  ? {
      [D in ConditionProperty]?: ColorModeArray<Y> | ResponsiveObject<Y> | Y
    }
  : {
      [D in ConditionProperty]?: Y
    }

export type ResponsiveWithConditionObject<
  Y,
  M extends boolean = true,
> = M extends true
  ? ConditionObject<Y> & {
      [D in Breakpoint]?:
        | ColorModeArray<Y>
        | ResponsiveWithConditionObject<Y>
        | Y
    }
  : ConditionObject<Y, false> & { [D in Breakpoint]?: Y }

export type Token<Y, M = unknown> = M extends keyof ThemeTokens
  ? ThemeTokens[M] | Y
  : Y

export type ColorModeValue<Y, M = unknown> = M extends keyof ThemeTokens
  ? ColorModeArray<ThemeTokens[M] | Y, false> | ThemeTokens[M] | Y
  : ColorModeArray<Y, false> | Y

export type ResponsiveValue<Y, M = unknown> = M extends keyof ThemeTokens
  ? ResponsiveObject<ThemeTokens[M] | Y, false> | ThemeTokens[M] | Y
  : ResponsiveObject<Y, false> | Y

export type StyleValue<Y, M = unknown> =
  | ColorModeValue<Y, M>
  | ResponsiveValue<Y, M>

export type StyleValueWithCondition<
  Y,
  M = unknown,
> = M extends keyof ThemeTokens
  ?
      | ColorModeArray<ThemeTokens[M] | Y>
      | ResponsiveWithConditionObject<ThemeTokens[M] | Y>
      | ThemeTokens[M]
      | Y
  : ColorModeArray<Y> | ResponsiveWithConditionObject<Y> | Y

export type CSSVariable = `--${string}`
interface CSSVariableProps {
  [key: CSSVariable]: StyleValueWithCondition<number | ThemePath> | undefined
}

type VendorProps = {
  [Y in keyof CSS.VendorPropertiesFallback]?: StyleValueWithCondition<
    AnyString | CSS.VendorPropertiesFallback[Y]
  >
}

interface CSSFlatObject extends StyleProps, VendorProps, CSSVariableProps {}

export type CSSObject = CSSFlatObject & {
  [D in AnySelector | ConditionProperty]?: D extends keyof CSSFlatObject
    ? CSSFlatObject[D]
    : CSSObject
}
export type CSSProperties = AnyString | keyof CSSFlatObject

export interface CSSPropObject<
  Y extends CSSObject | CSSSlotObject = CSSObject,
> {
  [key: string]: { [key: string]: Y }
}

export type CSSSlotObject<Y extends number | string | symbol = string> = {
  [M in Y]?: CSSObject
}

export type CSSModifierObject<Y extends CSSObject | CSSSlotObject = CSSObject> =
  {
    [M in "base" | AnyString | number]?: Y
  }

export type CSSKeyframeObject = {
  [M in `${number}%` | KeyframeIdent]?: CSSFlatObject
}

export interface CSSAnimationObject {
  keyframes: Token<CSSKeyframeObject, "keyframes">
  delay?: Token<CSS.Property.AnimationDelay>
  direction?: Token<CSS.Property.AnimationDirection>
  duration?: Token<CSS.Property.AnimationDuration, "durations">
  fillMode?: Token<CSS.Property.AnimationFillMode>
  iterationCount?: Token<CSS.Property.AnimationIterationCount>
  playState?: Token<CSS.Property.AnimationPlayState>
  timingFunction?: Token<CSS.Property.AnimationTimingFunction, "easings">
}

export interface CSSProps
  extends StyleProps,
    ConditionProps,
    VendorProps,
    CSSVariableProps {
  /**
   * The CSS object.
   */
  css?: CSSObject | CSSObject[]
}

export interface FunctionCSSInterpolation {
  (theme: StyledTheme<UsageTheme>): CSSObject
}

export type CSSObjectOrFunction = CSSObject | FunctionCSSInterpolation
