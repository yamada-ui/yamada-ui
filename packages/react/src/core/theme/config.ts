import type {
  AnimationStyle,
  CSSModifierObject,
  CSSObject,
  CSSPropObject,
  CSSSlotObject,
} from "../css"
import type {
  ComponentStyle,
  DefineThemeAnimationTokens,
  DefineThemeBreakpointTokens,
  DefineThemeColorSchemeSemanticTokens,
  DefineThemeColorSemanticTokens,
  DefineThemeKeyframeTokens,
  DefineThemeSchemeTokens,
  DefineThemeTokens,
  ThemeConfig,
  UsageTheme,
} from "./index.types"
import type { ComponentSlotStyle } from "./index.types"

interface DefineConfig {
  (value: ThemeConfig): ThemeConfig
}

export const defineConfig: DefineConfig = (value) => value

export interface DefineComponentStyle {
  <
    Y extends CSSPropObject = CSSPropObject,
    M extends CSSModifierObject = CSSModifierObject,
    D extends CSSModifierObject = CSSModifierObject,
  >(
    value: ComponentStyle<Y, M, D>,
  ): ComponentStyle<Y, M, D>
}

export const defineComponentStyle: DefineComponentStyle = (value) => value

export interface DefineComponentSlotStyle {
  <
    Y extends string = string,
    M extends CSSPropObject<CSSSlotObject<Y>> = CSSPropObject<CSSSlotObject<Y>>,
    D extends CSSModifierObject<CSSSlotObject<Y>> = CSSModifierObject<
      CSSSlotObject<Y>
    >,
    H extends CSSModifierObject<CSSSlotObject<Y>> = CSSModifierObject<
      CSSSlotObject<Y>
    >,
  >(
    value: ComponentSlotStyle<Y, M, D, H>,
  ): ComponentSlotStyle<Y, M, D, H>
}

export const defineComponentSlotStyle: DefineComponentSlotStyle = (value) =>
  value

interface DefineStyle {
  (value: CSSObject): CSSObject
}

interface DefineModifierStyle {
  <T extends CSSModifierObject>(value: T): T
}

const defineGlobalStyle: DefineStyle = (value) => value
const defineResetStyle: DefineStyle = (value) => value
const defineLayerStyle: DefineModifierStyle = (value) => value
const defineTextStyle: DefineModifierStyle = (value) => value

export const defineStyles = {
  layerStyle: defineLayerStyle,
  textStyle: defineTextStyle,
  globalStyle: defineGlobalStyle,
  resetStyle: defineResetStyle,
}

interface DefineTokens {
  <T extends DefineThemeTokens>(value: T): T
}

interface DefineAnimationTokens {
  <T extends DefineThemeAnimationTokens>(value: T): T
}

interface DefineBreakpointTokens {
  <T extends DefineThemeBreakpointTokens>(value: T): T
}

interface DefineKeyframeTokens {
  <T extends DefineThemeKeyframeTokens>(value: T): T
}

const defineAnimationTokens: DefineAnimationTokens = (value) => value
const defineAspectRatioTokens: DefineTokens = (value) => value
const defineBlurTokens: DefineTokens = (value) => value
const defineBorderTokens: DefineTokens = (value) => value
const defineBreakpointTokens: DefineBreakpointTokens = (value) => value
const defineColorTokens: DefineTokens = (value) => value
const defineDurationTokens: DefineTokens = (value) => value
const defineEasingTokens: DefineTokens = (value) => value
const defineFontTokens: DefineTokens = (value) => value
const defineFontSizeTokens: DefineTokens = (value) => value
const defineFontWeightTokens: DefineTokens = (value) => value
const defineGradientTokens: DefineTokens = (value) => value
const defineKeyframeTokens: DefineKeyframeTokens = (value) => value
const defineLetterSpacingTokens: DefineTokens = (value) => value
const defineLineHeightTokens: DefineTokens = (value) => value
const defineRadiusTokens: DefineTokens = (value) => value
const defineShadowTokens: DefineTokens = (value) => value
const defineSizeTokens: DefineTokens = (value) => value
const defineSpaceTokens: DefineTokens = (value) => value
const defineZIndexTokens: DefineTokens = (value) => value

export const defineTokens = {
  animations: defineAnimationTokens,
  aspectRatios: defineAspectRatioTokens,
  blurs: defineBlurTokens,
  borders: defineBorderTokens,
  breakpoints: defineBreakpointTokens,
  colors: defineColorTokens,
  durations: defineDurationTokens,
  easings: defineEasingTokens,
  fonts: defineFontTokens,
  fontSizes: defineFontSizeTokens,
  fontWeights: defineFontWeightTokens,
  gradients: defineGradientTokens,
  keyframes: defineKeyframeTokens,
  letterSpacings: defineLetterSpacingTokens,
  lineHeights: defineLineHeightTokens,
  radii: defineRadiusTokens,
  shadows: defineShadowTokens,
  sizes: defineSizeTokens,
  spaces: defineSpaceTokens,
  zIndices: defineZIndexTokens,
}

interface DefineSemanticTokens extends DefineTokens {}

interface DefineAnimationSemanticTokens {
  <T extends DefineThemeAnimationTokens<AnimationStyle | string>>(value: T): T
}

interface DefineColorSemanticTokens {
  <T extends DefineThemeColorSemanticTokens>(value: T): T
}

interface DefineColorSchemeSemanticTokens {
  <T extends DefineThemeColorSchemeSemanticTokens>(value: T): T
}

const defineAnimationSemanticTokens: DefineAnimationSemanticTokens = (value) =>
  value
const defineAspectRatioSemanticTokens: DefineSemanticTokens = (value) => value
const defineBlurSemanticTokens: DefineSemanticTokens = (value) => value
const defineBorderSemanticTokens: DefineSemanticTokens = (value) => value
const defineBreakpointSemanticTokens: DefineBreakpointTokens = (value) => value
const defineColorSemanticTokens: DefineColorSemanticTokens = (value) => value
const defineColorSchemeSemanticTokens: DefineColorSchemeSemanticTokens = (
  value,
) => value
const defineDurationSemanticTokens: DefineSemanticTokens = (value) => value
const defineEasingSemanticTokens: DefineSemanticTokens = (value) => value
const defineFontSemanticTokens: DefineSemanticTokens = (value) => value
const defineFontSizeSemanticTokens: DefineSemanticTokens = (value) => value
const defineFontWeightSemanticTokens: DefineSemanticTokens = (value) => value
const defineGradientSemanticTokens: DefineSemanticTokens = (value) => value
const defineKeyframeSemanticTokens: DefineKeyframeTokens = (value) => value
const defineLetterSpacingSemanticTokens: DefineSemanticTokens = (value) => value
const defineLineHeightSemanticTokens: DefineSemanticTokens = (value) => value
const defineRadiusSemanticTokens: DefineSemanticTokens = (value) => value
const defineShadowSemanticTokens: DefineSemanticTokens = (value) => value
const defineSizeSemanticTokens: DefineSemanticTokens = (value) => value
const defineSpaceSemanticTokens: DefineSemanticTokens = (value) => value
const defineZIndexSemanticTokens: DefineSemanticTokens = (value) => value

export const defineSemanticTokens = {
  animations: defineAnimationSemanticTokens,
  aspectRatios: defineAspectRatioSemanticTokens,
  blurs: defineBlurSemanticTokens,
  borders: defineBorderSemanticTokens,
  breakpoints: defineBreakpointSemanticTokens,
  colors: defineColorSemanticTokens,
  colorSchemes: defineColorSchemeSemanticTokens,
  durations: defineDurationSemanticTokens,
  easings: defineEasingSemanticTokens,
  fonts: defineFontSemanticTokens,
  fontSizes: defineFontSizeSemanticTokens,
  fontWeights: defineFontWeightSemanticTokens,
  gradients: defineGradientSemanticTokens,
  keyframes: defineKeyframeSemanticTokens,
  letterSpacings: defineLetterSpacingSemanticTokens,
  lineHeights: defineLineHeightSemanticTokens,
  radii: defineRadiusSemanticTokens,
  shadows: defineShadowSemanticTokens,
  sizes: defineSizeSemanticTokens,
  spaces: defineSpaceSemanticTokens,
  zIndices: defineZIndexSemanticTokens,
}

interface DefineThemeSchemes {
  <T extends DefineThemeSchemeTokens>(value: T): T
}

export const defineThemeSchemes: DefineThemeSchemes = (value) => value

interface DefineTheme {
  <T extends UsageTheme>(value: T): T
}

export const defineTheme: DefineTheme = (value) => value
