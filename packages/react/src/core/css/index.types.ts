import type * as CSS from "csstype"
import type { AnyString } from "../../utils"
import type {
  Breakpoint,
  KeyframeIdent,
  System,
  ThemePath,
  ThemeTokens,
} from "../system"
import type {
  AnySelector,
  ConditionProperty,
  ConditionProps,
} from "./conditions"
import type { StyleProps } from "./styles"

export type { CSS }

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

export type StyleImportantValue<Y extends string> =
  | `${Y}!`
  | `${Y} !important`
  | Y

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

export type CSSSlotObject<Y extends string = string> = {
  [M in Y]?: CSSObject
}

export type CSSModifierObject<Y extends CSSObject | CSSSlotObject = CSSObject> =
  {
    [M in "base" | AnyString]?: Y
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

export interface CSSAtRuleObject {
  [key: string]: any
  css?: CSSObject
  aspectRatio?: CSS.Property.AspectRatio
  h?: CSS.Property.Height | number | ThemeTokens["sizes"]
  height?: CSS.Property.Height | number | ThemeTokens["sizes"]
  maxAspectRatio?: CSS.Property.AspectRatio
  maxH?: CSS.Property.MaxHeight | number | ThemeTokens["sizes"]
  maxHeight?: CSS.Property.MaxHeight | number | ThemeTokens["sizes"]
  maxW?: CSS.Property.MaxWidth | number | ThemeTokens["sizes"]
  maxWidth?: CSS.Property.MaxWidth | number | ThemeTokens["sizes"]
  minAspectRatio?: CSS.Property.AspectRatio
  minH?: CSS.Property.MinHeight | number | ThemeTokens["sizes"]
  minHeight?: CSS.Property.MinHeight | number | ThemeTokens["sizes"]
  minW?: CSS.Property.MinWidth | number | ThemeTokens["sizes"]
  minWidth?: CSS.Property.MinWidth | number | ThemeTokens["sizes"]
  orientation?: "landscape" | "portrait" | AnyString
  query?: AnyString
  w?: CSS.Property.Width | number | ThemeTokens["sizes"]
  width?: CSS.Property.Width | number | ThemeTokens["sizes"]
}

export interface CSSContainerObject extends CSSAtRuleObject {
  name?: AnyString
  style?: string | string[]
  blockSize?: CSS.Property.BlockSize | number | ThemeTokens["sizes"]
  inlineSize?: CSS.Property.InlineSize | number | ThemeTokens["sizes"]
  maxAspectRatio?: CSS.Property.AspectRatio
  maxBlockSize?: CSS.Property.MaxBlockSize | number | ThemeTokens["sizes"]
  maxInlineSize?: CSS.Property.MaxInlineSize | number | ThemeTokens["sizes"]
  minAspectRatio?: CSS.Property.AspectRatio
  minBlockSize?: CSS.Property.MinBlockSize | number | ThemeTokens["sizes"]
  minInlineSize?: CSS.Property.MinInlineSize | number | ThemeTokens["sizes"]
}

export interface CSSMediaObject extends CSSAtRuleObject {
  type?: "all" | "print" | "screen" | "speech" | AnyString
  anyHover?: "hover" | "none" | AnyString
  anyPointer?: "coarse" | "fine" | "none" | AnyString
  color?: AnyString | number
  colorGamut?: "p3" | "rec2020" | "srgb" | AnyString
  colorIndex?: AnyString | number
  deviceAspectRatio?: CSS.Property.AspectRatio
  deviceHeight?: CSS.Property.Height | number | ThemeTokens["sizes"]
  deviceWidth?: CSS.Property.Width | number | ThemeTokens["sizes"]
  displayMode?:
    | "browser"
    | "fullscreen"
    | "minimal-ui"
    | "picture-in-picture"
    | "standalone"
    | "window-controls-overlay"
    | AnyString
  dynamicRange?: "high" | "standard" | AnyString
  forcedColors?: "active" | "none" | AnyString
  grid?: 0 | 1 | "AnyString"
  hover?: "hover" | "none" | AnyString
  invertedColors?: "inverted" | "none" | AnyString
  maxColor?: AnyString | number
  maxColorIndex?: AnyString | number
  maxDeviceAspectRatio?: CSS.Property.AspectRatio
  maxDeviceHeight?: CSS.Property.MaxHeight | number | ThemeTokens["sizes"]
  maxMonochrome?: AnyString | number
  maxResolution?: AnyString
  mazDeviceWidth?: CSS.Property.Width | number | ThemeTokens["sizes"]
  minColor?: AnyString | number
  minColorIndex?: AnyString | number
  minDeviceAspectRatio?: CSS.Property.AspectRatio
  minDeviceHeight?: CSS.Property.MinHeight | number | ThemeTokens["sizes"]
  minDeviceWidth?: CSS.Property.Width | number | ThemeTokens["sizes"]
  minMonochrome?: AnyString | number
  minResolution?: AnyString
  monochrome?: AnyString | number
  orientation?: "landscape" | "portrait" | AnyString
  overflowBlock?: "none" | "optional-paged" | "paged" | "scroll" | AnyString
  overflowInline?: "none" | "scroll" | AnyString
  pointer?: "coarse" | "fine" | "none" | AnyString
  prefersColorScheme?: "dark" | "light" | AnyString
  prefersContrast?: "custom" | "high" | "low" | "no-preference" | AnyString
  prefersReducedMotion?: "no-preference" | "reduce" | AnyString
  resolution?: AnyString
  scan?: "interlace" | "progressive" | AnyString
  scripting?: "enabled" | "initial-only" | "none" | AnyString
  update?: "fast" | "none" | "slow" | AnyString
  videoDynamicRange?: "high" | "standard" | AnyString
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
  (system: System): CSSObject
}

export type CSSObjectOrFunction = CSSObject | FunctionCSSInterpolation
