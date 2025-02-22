import type { StringLiteral } from "@yamada-ui/utils"
import type * as CSS from "csstype"
import type { StyleConfigs } from "./config"
import type { CSSObject, Token } from "./css"
import type { ColorScheme, ThemeToken, ThemeTokens } from "./theme"
import { transforms } from "./config"
import { pipe } from "./config/utils"

export type StandardStyleProperty = keyof typeof standardStyles

export const standardStyles = {
  accentColor: {
    properties: "accentColor",
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  alignContent: true,
  alignItems: true,
  alignmentBaseline: true,
  alignSelf: true,
  all: true,
  anchorName: true,
  anchorScope: true,
  animation: {
    properties: "animation",
    token: "animations",
    transform: pipe(transforms.token("animations"), transforms.animation),
  },
  animationComposition: true,
  animationDelay: true,
  animationDirection: true,
  animationDuration: {
    properties: "animationDuration",
    token: "durations",
    transform: transforms.token("durations"),
  },
  animationFillMode: true,
  animationIterationCount: true,
  animationName: {
    properties: "animationName",
    token: "keyframes",
    transform: transforms.token("keyframes"),
  },
  animationPlayState: true,
  animationRange: true,
  animationRangeEnd: true,
  animationRangeStart: true,
  animationTimeline: true,
  animationTimingFunction: {
    properties: "animationTimingFunction",
    token: "easings",
    transform: transforms.token("easings"),
  },
  appearance: true,
  aspectRatio: {
    properties: "aspectRatio",
    token: "aspectRatios",
    transform: transforms.token("aspectRatios"),
  },
  backdropBlur: {
    properties: "--backdrop-blur",
    token: "blurs",
    transform: pipe(
      transforms.token("blurs"),
      transforms.function("blur"),
      transforms.filter("backdropFilter"),
    ),
  },
  backdropBrightness: {
    properties: "--backdrop-brightness",
    transform: pipe(
      transforms.function("brightness"),
      transforms.filter("backdropFilter"),
    ),
  },
  backdropContrast: {
    properties: "--backdrop-contrast",
    transform: pipe(
      transforms.function("contrast"),
      transforms.filter("backdropFilter"),
    ),
  },
  backdropDropShadow: {
    properties: "--backdrop-drop-shadow",
    token: "shadows",
    transform: pipe(
      transforms.token("shadows"),
      transforms.function("drop-shadow"),
      transforms.filter("backdropFilter"),
    ),
  },
  backdropFilter: true,
  backdropGrayscale: {
    properties: "--backdrop-grayscale",
    transform: pipe(
      transforms.function("grayscale"),
      transforms.filter("backdropFilter"),
    ),
  },
  backdropHueRotate: {
    properties: "--backdrop-hue-rotate",
    transform: pipe(
      transforms.deg,
      transforms.function("hue-rotate"),
      transforms.filter("backdropFilter"),
    ),
  },
  backdropInvert: {
    properties: "--backdrop-invert",
    transform: pipe(
      transforms.function("invert"),
      transforms.filter("backdropFilter"),
    ),
  },
  backdropSaturate: {
    properties: "--backdrop-saturate",
    transform: pipe(
      transforms.function("saturate"),
      transforms.filter("backdropFilter"),
    ),
  },
  backdropSepia: {
    properties: "--backdrop-sepia",
    transform: pipe(
      transforms.function("sepia"),
      transforms.filter("backdropFilter"),
    ),
  },
  backfaceVisibility: {
    properties: "backfaceVisibility",
    token: "sizes",
    transform: pipe(
      transforms.token("sizes"),
      transforms.fraction,
      transforms.px,
      transforms.calc("sizes"),
    ),
  },
  background: {
    properties: "background",
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  backgroundAttachment: true,
  backgroundBlendMode: true,
  backgroundClip: {
    properties: "backgroundClip",
    transform: transforms.bgClip,
  },
  backgroundColor: {
    properties: "backgroundColor",
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  backgroundImage: {
    properties: "backgroundImage",
    token: "gradients",
    transform: pipe(transforms.token("gradients"), transforms.gradient),
  },
  backgroundOrigin: true,
  backgroundPosition: true,
  backgroundPositionX: true,
  backgroundPositionY: true,
  backgroundRepeat: true,
  backgroundSize: true,
  baselineShift: true,
  baselineSource: true,
  blockSize: {
    properties: "blockSize",
    token: "sizes",
    transform: pipe(
      transforms.token("sizes"),
      transforms.fraction,
      transforms.px,
      transforms.calc("sizes"),
    ),
  },
  blur: {
    properties: "--blur",
    token: "blurs",
    transform: pipe(
      transforms.token("blurs"),
      transforms.function("blur"),
      transforms.filter(),
    ),
  },
  border: {
    properties: "border",
    token: "borders",
    transform: pipe(transforms.token("borders"), transforms.px),
  },
  borderBlock: {
    properties: "borderBlock",
    token: "borders",
    transform: pipe(transforms.token("borders"), transforms.px),
  },
  borderBlockColor: {
    properties: "borderBlockColor",
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  borderBlockEnd: {
    properties: "borderBlockEnd",
    token: "borders",
    transform: pipe(transforms.token("borders"), transforms.px),
  },
  borderBlockEndColor: {
    properties: "borderBlockEndColor",
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  borderBlockEndStyle: true,
  borderBlockEndWidth: {
    properties: "borderBlockEndWidth",
    transform: transforms.px,
  },
  borderBlockStart: {
    properties: "borderBlockStart",
    token: "borders",
    transform: pipe(transforms.token("borders"), transforms.px),
  },
  borderBlockStartColor: {
    properties: "borderBlockStartColor",
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  borderBlockStartStyle: true,
  borderBlockStartWidth: {
    properties: "borderBlockStartWidth",
    transform: transforms.px,
  },
  borderBlockStyle: true,
  borderBlockWidth: {
    properties: "borderBlockWidth",
    transform: transforms.px,
  },
  borderBottom: {
    properties: "borderBottom",
    token: "borders",
    transform: pipe(transforms.token("borders"), transforms.px),
  },
  borderBottomColor: {
    properties: "borderBottomColor",
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  borderBottomLeftRadius: {
    properties: "borderBottomLeftRadius",
    token: "radii",
    transform: pipe(
      transforms.token("radii"),
      transforms.px,
      transforms.calc("radii"),
    ),
  },
  borderBottomRadius: {
    properties: ["borderBottomLeftRadius", "borderBottomRightRadius"],
    token: "radii",
    transform: pipe(
      transforms.token("radii"),
      transforms.px,
      transforms.calc("radii"),
    ),
  },
  borderBottomRightRadius: {
    properties: "borderBottomRightRadius",
    token: "radii",
    transform: pipe(
      transforms.token("radii"),
      transforms.px,
      transforms.calc("radii"),
    ),
  },
  borderBottomStyle: true,
  borderBottomWidth: {
    properties: "borderBottomWidth",
    transform: transforms.px,
  },
  borderCollapse: true,
  borderColor: {
    properties: "borderColor",
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  borderEndEndRadius: {
    properties: "borderEndEndRadius",
    token: "radii",
    transform: pipe(
      transforms.token("radii"),
      transforms.px,
      transforms.calc("radii"),
    ),
  },
  borderEndStartRadius: {
    properties: "borderEndStartRadius",
    token: "radii",
    transform: pipe(
      transforms.token("radii"),
      transforms.px,
      transforms.calc("radii"),
    ),
  },
  borderImage: {
    properties: "borderImage",
    token: "borders",
    transform: pipe(transforms.token("borders"), transforms.px),
  },
  borderImageOutset: true,
  borderImageRepeat: true,
  borderImageSlice: true,
  borderImageSource: {
    properties: "borderImageSource",
    token: "gradients",
    transform: pipe(transforms.token("gradients"), transforms.gradient),
  },
  borderImageWidth: {
    properties: "borderImageWidth",
    transform: transforms.px,
  },
  borderInline: {
    properties: "borderInline",
    token: "borders",
    transform: pipe(transforms.token("borders"), transforms.px),
  },
  borderInlineColor: {
    properties: "borderInlineColor",
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  borderInlineEnd: {
    properties: "borderInlineEnd",
    token: "borders",
    transform: pipe(transforms.token("borders"), transforms.px),
  },
  borderInlineEndColor: {
    properties: "borderInlineEndColor",
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  borderInlineEndRadius: {
    properties: ["borderEndStartRadius", "borderEndEndRadius"],
    token: "radii",
    transform: pipe(
      transforms.token("radii"),
      transforms.px,
      transforms.calc("radii"),
    ),
  },
  borderInlineEndStyle: true,
  borderInlineEndWidth: {
    properties: "borderInlineEndWidth",
    transform: transforms.px,
  },
  borderInlineStart: {
    properties: "borderInlineStart",
    token: "borders",
    transform: pipe(transforms.token("borders"), transforms.px),
  },
  borderInlineStartColor: {
    properties: "borderInlineStartColor",
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  borderInlineStartRadius: {
    properties: ["borderStartStartRadius", "borderStartEndRadius"],
    token: "radii",
    transform: pipe(
      transforms.token("radii"),
      transforms.px,
      transforms.calc("radii"),
    ),
  },
  borderInlineStartStyle: true,
  borderInlineStartWidth: {
    properties: "borderInlineStartWidth",
    transform: transforms.px,
  },
  borderInlineStyle: true,
  borderInlineWidth: {
    properties: "borderInlineWidth",
    transform: transforms.px,
  },
  borderLeft: {
    properties: "borderLeft",
    token: "borders",
    transform: pipe(transforms.token("borders"), transforms.px),
  },
  borderLeftColor: {
    properties: "borderLeftColor",
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  borderLeftRadius: {
    properties: ["borderTopLeftRadius", "borderBottomLeftRadius"],
    token: "radii",
    transform: pipe(
      transforms.token("radii"),
      transforms.px,
      transforms.calc("radii"),
    ),
  },
  borderLeftStyle: true,
  borderLeftWidth: { properties: "borderLeftWidth", transform: transforms.px },
  borderRadius: {
    properties: "borderRadius",
    token: "radii",
    transform: pipe(
      transforms.token("radii"),
      transforms.px,
      transforms.calc("radii"),
    ),
  },
  borderRight: {
    properties: "borderRight",
    token: "borders",
    transform: pipe(transforms.token("borders"), transforms.px),
  },
  borderRightColor: {
    properties: "borderRightColor",
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  borderRightRadius: {
    properties: ["borderTopRightRadius", "borderBottomRightRadius"],
    token: "radii",
    transform: pipe(
      transforms.token("radii"),
      transforms.px,
      transforms.calc("radii"),
    ),
  },
  borderRightStyle: true,
  borderRightWidth: {
    properties: "borderRightWidth",
    transform: transforms.px,
  },
  borderSpacing: true,
  borderStartEndRadius: {
    properties: "borderStartEndRadius",
    token: "radii",
    transform: pipe(
      transforms.token("radii"),
      transforms.px,
      transforms.calc("radii"),
    ),
  },
  borderStartStartRadius: {
    properties: "borderStartStartRadius",
    token: "radii",
    transform: pipe(
      transforms.token("radii"),
      transforms.px,
      transforms.calc("radii"),
    ),
  },
  borderStyle: true,
  borderTop: {
    properties: "borderTop",
    token: "borders",
    transform: pipe(transforms.token("borders"), transforms.px),
  },
  borderTopColor: {
    properties: "borderTopColor",
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  borderTopLeftRadius: {
    properties: "borderTopLeftRadius",
    token: "radii",
    transform: pipe(
      transforms.token("radii"),
      transforms.px,
      transforms.calc("radii"),
    ),
  },
  borderTopRadius: {
    properties: ["borderTopLeftRadius", "borderTopRightRadius"],
    token: "radii",
    transform: pipe(
      transforms.token("radii"),
      transforms.px,
      transforms.calc("radii"),
    ),
  },
  borderTopRightRadius: {
    properties: "borderTopRightRadius",
    token: "radii",
    transform: pipe(
      transforms.token("radii"),
      transforms.px,
      transforms.calc("radii"),
    ),
  },
  borderTopStyle: true,
  borderTopWidth: { properties: "borderTopWidth", transform: transforms.px },
  borderWidth: { properties: "borderWidth", transform: transforms.px },
  borderX: {
    properties: ["borderLeft", "borderRight"],
    token: "borders",
    transform: pipe(transforms.token("borders"), transforms.px),
  },
  borderY: {
    properties: ["borderTop", "borderBottom"],
    token: "borders",
    transform: pipe(transforms.token("borders"), transforms.px),
  },
  bottom: {
    properties: "bottom",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  boxAlign: true,
  boxDecorationBreak: true,
  boxDirection: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxLines: true,
  boxOrdinalGroup: true,
  boxOrient: true,
  boxPack: true,
  boxShadow: {
    properties: "boxShadow",
    token: "shadows",
    transform: transforms.token("shadows"),
  },
  boxSize: {
    properties: ["width", "height"],
    token: "sizes",
    transform: pipe(
      transforms.token("sizes"),
      transforms.fraction,
      transforms.px,
      transforms.calc("sizes"),
    ),
  },
  boxSizing: true,
  breakAfter: true,
  breakBefore: true,
  breakInside: true,
  brightness: {
    properties: "--brightness",
    transform: pipe(transforms.function("brightness"), transforms.filter()),
  },
  captionSide: true,
  caretColor: {
    properties: "caretColor",
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  clear: true,
  clip: true,
  clipPath: true,
  clipRule: true,
  color: {
    properties: "color",
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  colorAdjust: true,
  colorInterpolation: true,
  colorInterpolationFilters: true,
  colorMode: { properties: "colorScheme" },
  columnCount: true,
  columnFill: true,
  columnGap: {
    properties: "columnGap",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  columnRule: { properties: "columnRule", transform: transforms.px },
  columnRuleColor: {
    properties: "columnRuleColor",
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  columnRuleStyle: true,
  columnRuleWidth: { properties: "columnRuleWidth", transform: transforms.px },
  columns: true,
  columnSpan: true,
  columnWidth: {
    properties: "columnWidth",
    token: "sizes",
    transform: pipe(
      transforms.token("sizes"),
      transforms.fraction,
      transforms.px,
      transforms.calc("sizes"),
    ),
  },
  contain: true,
  container: true,
  containerName: true,
  containerType: true,
  containIntrinsicBlockSize: true,
  containIntrinsicHeight: true,
  containIntrinsicInlineSize: true,
  containIntrinsicSize: true,
  containIntrinsicWidth: {
    properties: "containIntrinsicWidth",
    token: "sizes",
    transform: pipe(
      transforms.token("sizes"),
      transforms.fraction,
      transforms.px,
      transforms.calc("sizes"),
    ),
  },
  content: true,
  contentVisibility: true,
  contrast: {
    properties: "--contrast",
    transform: pipe(transforms.function("contrast"), transforms.filter()),
  },
  counterIncrement: true,
  counterReset: true,
  counterSet: true,
  cursor: true,
  cx: true,
  cy: true,
  d: true,
  direction: true,
  display: true,
  dominantBaseline: true,
  dropShadow: {
    properties: "--drop-shadow",
    token: "shadows",
    transform: pipe(
      transforms.token("shadows"),
      transforms.function("drop-shadow"),
      transforms.filter(),
    ),
  },
  dynamicRangeLimit: true,
  emptyCells: true,
  fieldSizing: true,
  fill: {
    properties: "fill",
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  fillOpacity: true,
  fillRule: true,
  filter: true,
  flex: true,
  flexBasis: {
    properties: "flexBasis",
    token: "sizes",
    transform: pipe(
      transforms.token("sizes"),
      transforms.fraction,
      transforms.px,
      transforms.calc("sizes"),
    ),
  },
  flexDirection: true,
  flexFlow: true,
  flexGrow: true,
  flexShrink: true,
  flexWrap: true,
  float: true,
  floodColor: {
    properties: "floodColor",
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  floodOpacity: true,
  focusRing: { transform: transforms.focusRing("&:is(:focus, [data-focus])") },
  focusRingColor: {
    properties: "--focus-ring-color",
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  focusRingOffset: {
    properties: "--focus-ring-offset",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  focusRingStyle: { properties: "--focus-ring-style" },
  focusRingWidth: { properties: "--focus-ring-width" },
  focusVisibleRing: {
    transform: transforms.focusRing(
      "&:is(:focus-visible, [data-focus-visible])",
    ),
  },
  font: true,
  fontFamily: {
    properties: "fontFamily",
    token: "fonts",
    transform: transforms.token("fonts"),
  },
  fontFeatureSettings: true,
  fontKerning: true,
  fontLanguageOverride: true,
  fontOpticalSizing: true,
  fontPalette: true,
  fontSize: {
    properties: "fontSize",
    token: "fontSizes",
    transform: pipe(
      transforms.token("fontSizes"),
      transforms.px,
      transforms.calc("fontSizes"),
    ),
  },
  fontSizeAdjust: true,
  fontSmooth: true,
  fontStretch: true,
  fontStyle: true,
  fontSynthesis: true,
  fontSynthesisPosition: true,
  fontSynthesisSmallCaps: true,
  fontSynthesisStyle: true,
  fontSynthesisWeight: true,
  fontVariant: true,
  fontVariantAlternates: true,
  fontVariantCaps: true,
  fontVariantEastAsian: true,
  fontVariantEmoji: true,
  fontVariantLigatures: true,
  fontVariantNumeric: true,
  fontVariantPosition: true,
  fontVariationSettings: true,
  fontWeight: {
    properties: "fontWeight",
    token: "fontWeights",
    transform: transforms.token("fontWeights"),
  },
  forcedColorAdjust: true,
  gap: {
    properties: "gap",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  glyphOrientationHorizontal: true,
  glyphOrientationVertical: true,
  grayscale: {
    properties: "--grayscale",
    transform: pipe(transforms.function("grayscale"), transforms.filter()),
  },
  grid: true,
  gridArea: true,
  gridAutoColumns: {
    properties: "gridAutoColumns",
    token: "sizes",
    transform: pipe(
      transforms.token("sizes"),
      transforms.fraction,
      transforms.px,
      transforms.grid,
    ),
  },
  gridAutoFlow: true,
  gridAutoRows: {
    properties: "gridAutoRows",
    token: "sizes",
    transform: pipe(
      transforms.token("sizes"),
      transforms.fraction,
      transforms.px,
      transforms.grid,
    ),
  },
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnStart: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowStart: true,
  gridTemplate: true,
  gridTemplateAreas: true,
  gridTemplateColumns: {
    properties: "gridTemplateColumns",
    token: "sizes",
    transform: pipe(
      transforms.token("sizes"),
      transforms.fraction,
      transforms.px,
      transforms.grid,
    ),
  },
  gridTemplateRows: {
    properties: "gridTemplateRows",
    token: "sizes",
    transform: pipe(
      transforms.token("sizes"),
      transforms.fraction,
      transforms.px,
      transforms.grid,
    ),
  },
  hangingPunctuation: true,
  height: {
    properties: "height",
    token: "sizes",
    transform: pipe(
      transforms.token("sizes"),
      transforms.fraction,
      transforms.px,
      transforms.calc("sizes"),
    ),
  },
  hueRotate: {
    properties: "--hue-rotate",
    transform: pipe(
      transforms.deg,
      transforms.function("hue-rotate"),
      transforms.filter(),
    ),
  },
  hyphenateCharacter: true,
  hyphenateLimitChars: true,
  hyphens: true,
  imageOrientation: true,
  imageRendering: true,
  imeMode: true,
  initialLetter: true,
  inlineSize: {
    properties: "inlineSize",
    token: "sizes",
    transform: pipe(
      transforms.token("sizes"),
      transforms.fraction,
      transforms.px,
      transforms.calc("sizes"),
    ),
  },
  inset: {
    properties: "inset",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  insetBlock: {
    properties: "insetBlock",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  insetBlockEnd: {
    properties: "insetBlockEnd",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  insetBlockStart: {
    properties: "insetBlockStart",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  insetInline: {
    properties: "insetInline",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  insetInlineEnd: {
    properties: "insetInlineEnd",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  insetInlineStart: {
    properties: "insetInlineStart",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  insetX: {
    properties: ["left", "right"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  insetY: {
    properties: ["top", "bottom"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  interpolateSize: true,
  invert: {
    properties: "--invert",
    transform: pipe(transforms.function("invert"), transforms.filter()),
  },
  isolation: true,
  justifyContent: true,
  justifyItems: true,
  justifySelf: true,
  left: {
    properties: "left",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  letterSpacing: {
    properties: "letterSpacing",
    token: "letterSpacings",
    transform: transforms.token("letterSpacings"),
  },
  lightingColor: {
    properties: "lightingColor",
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  lineBreak: true,
  lineHeight: {
    properties: "lineHeight",
    token: "lineHeights",
    transform: transforms.token("lineHeights"),
  },
  lineHeightStep: true,
  listStyle: true,
  listStyleImage: {
    properties: "listStyleImage",
    token: "gradients",
    transform: pipe(transforms.token("gradients"), transforms.gradient),
  },
  listStylePosition: true,
  listStyleType: true,
  margin: {
    properties: "margin",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  marginBlock: {
    properties: "marginBlock",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  marginBlockEnd: {
    properties: "marginBlockEnd",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  marginBlockStart: {
    properties: "marginBlockStart",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  marginBottom: {
    properties: "marginBottom",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  marginInline: {
    properties: "marginInline",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  marginInlineEnd: {
    properties: "marginInlineEnd",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  marginInlineStart: {
    properties: "marginInlineStart",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  marginLeft: {
    properties: "marginLeft",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  marginRight: {
    properties: "marginRight",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  marginTop: {
    properties: "marginTop",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  marginTrim: true,
  marginX: {
    properties: ["marginInlineStart", "marginInlineEnd"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  marginY: {
    properties: ["marginTop", "marginBottom"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  marker: true,
  markerEnd: true,
  markerMid: true,
  markerStart: true,
  mask: true,
  maskBorder: true,
  maskBorderOutset: true,
  maskBorderRepeat: true,
  maskBorderSlice: true,
  maskBorderSource: true,
  maskBorderWidth: { properties: "maskBorderWidth", transform: transforms.px },
  maskClip: true,
  maskComposite: true,
  maskImage: {
    properties: "maskImage",
    token: "gradients",
    transform: pipe(transforms.token("gradients"), transforms.gradient),
  },
  maskMode: true,
  maskOrigin: true,
  maskPosition: true,
  maskRepeat: true,
  maskSize: true,
  maskType: true,
  mathDepth: true,
  mathShift: true,
  mathStyle: true,
  maxBlockSize: {
    properties: "maxBlockSize",
    token: "sizes",
    transform: pipe(
      transforms.token("sizes"),
      transforms.fraction,
      transforms.px,
      transforms.calc("sizes"),
    ),
  },
  maxBoxSize: {
    properties: ["maxWidth", "maxHeight"],
    token: "sizes",
    transform: pipe(
      transforms.token("sizes"),
      transforms.fraction,
      transforms.px,
      transforms.calc("sizes"),
    ),
  },
  maxHeight: {
    properties: "maxHeight",
    token: "sizes",
    transform: pipe(
      transforms.token("sizes"),
      transforms.fraction,
      transforms.px,
      transforms.calc("sizes"),
    ),
  },
  maxInlineSize: {
    properties: "maxInlineSize",
    token: "sizes",
    transform: pipe(
      transforms.token("sizes"),
      transforms.fraction,
      transforms.px,
      transforms.calc("sizes"),
    ),
  },
  maxWidth: {
    properties: "maxWidth",
    token: "sizes",
    transform: pipe(
      transforms.token("sizes"),
      transforms.fraction,
      transforms.px,
      transforms.calc("sizes"),
    ),
  },
  minBlockSize: {
    properties: "minBlockSize",
    token: "sizes",
    transform: pipe(
      transforms.token("sizes"),
      transforms.fraction,
      transforms.px,
      transforms.calc("sizes"),
    ),
  },
  minBoxSize: {
    properties: ["minWidth", "minHeight"],
    token: "sizes",
    transform: pipe(
      transforms.token("sizes"),
      transforms.fraction,
      transforms.px,
      transforms.calc("sizes"),
    ),
  },
  minHeight: {
    properties: "minHeight",
    token: "sizes",
    transform: pipe(
      transforms.token("sizes"),
      transforms.fraction,
      transforms.px,
      transforms.calc("sizes"),
    ),
  },
  minInlineSize: {
    properties: "minInlineSize",
    token: "sizes",
    transform: pipe(
      transforms.token("sizes"),
      transforms.fraction,
      transforms.px,
      transforms.calc("sizes"),
    ),
  },
  minWidth: {
    properties: "minWidth",
    token: "sizes",
    transform: pipe(
      transforms.token("sizes"),
      transforms.fraction,
      transforms.px,
      transforms.calc("sizes"),
    ),
  },
  mixBlendMode: true,
  objectFit: true,
  objectPosition: true,
  objectViewBox: true,
  offset: true,
  offsetAnchor: true,
  offsetDistance: true,
  offsetPath: true,
  offsetPosition: true,
  offsetRotate: true,
  opacity: true,
  order: true,
  orphans: true,
  outline: {},
  outlineColor: {
    properties: "outlineColor",
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  outlineOffset: true,
  outlineStyle: true,
  outlineWidth: { properties: "outlineWidth", transform: transforms.px },
  overflow: true,
  overflowAnchor: true,
  overflowBlock: true,
  overflowClipMargin: true,
  overflowInline: true,
  overflowWrap: true,
  overflowX: true,
  overflowY: true,
  overlay: true,
  overscrollBehavior: true,
  overscrollBehaviorBlock: true,
  overscrollBehaviorInline: true,
  overscrollBehaviorX: true,
  overscrollBehaviorY: true,
  padding: {
    properties: "padding",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  paddingBlock: {
    properties: "paddingBlock",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  paddingBlockEnd: {
    properties: "paddingBlockEnd",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  paddingBlockStart: {
    properties: "paddingBlockStart",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  paddingBottom: {
    properties: "paddingBottom",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  paddingInline: {
    properties: "paddingInline",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  paddingInlineEnd: {
    properties: "paddingInlineEnd",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  paddingInlineStart: {
    properties: "paddingInlineStart",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  paddingLeft: {
    properties: "paddingLeft",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  paddingRight: {
    properties: "paddingRight",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  paddingTop: {
    properties: "paddingTop",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  paddingX: {
    properties: ["paddingInlineStart", "paddingInlineEnd"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  paddingY: {
    properties: ["paddingTop", "paddingBottom"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  page: true,
  pageBreakAfter: true,
  pageBreakBefore: true,
  pageBreakInside: true,
  paintOrder: true,
  perspective: true,
  perspectiveOrigin: true,
  placeContent: true,
  placeItems: true,
  placeSelf: true,
  pointerEvents: true,
  position: true,
  positionAnchor: true,
  positionArea: true,
  positionTry: true,
  positionTryFallbacks: true,
  positionTryOrder: true,
  positionVisibility: true,
  printColorAdjust: true,
  quotes: true,
  r: true,
  readingFlow: true,
  resize: true,
  right: {
    properties: "right",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  rotate: { properties: "rotate", transform: transforms.deg },
  rotateX: {
    properties: "--rotate-x",
    transform: pipe(
      transforms.deg,
      transforms.function("rotateX"),
      transforms.transform,
    ),
  },
  rotateY: {
    properties: "--rotate-y",
    transform: pipe(
      transforms.deg,
      transforms.function("rotateY"),
      transforms.transform,
    ),
  },
  rotateZ: {
    properties: "--rotate-z",
    transform: pipe(
      transforms.deg,
      transforms.function("rotateZ"),
      transforms.transform,
    ),
  },
  rowGap: {
    properties: "rowGap",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  rubyAlign: true,
  rubyOverhang: true,
  rubyPosition: true,
  rx: true,
  ry: true,
  saturate: {
    properties: "--saturate",
    transform: pipe(transforms.function("saturate"), transforms.filter()),
  },
  scale: true,
  scaleX: {
    properties: "--scale-x",
    transform: pipe(transforms.function("scaleX"), transforms.transform),
  },
  scaleY: {
    properties: "--scale-y",
    transform: pipe(transforms.function("scaleY"), transforms.transform),
  },
  scaleZ: {
    properties: "--scale-z",
    transform: pipe(transforms.function("scaleZ"), transforms.transform),
  },
  scrollbarColor: {
    properties: "scrollbarColor",
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  scrollbarGutter: true,
  scrollbarWidth: { properties: "scrollbarWidth", transform: transforms.px },
  scrollBehavior: true,
  scrollInitialTarget: true,
  scrollMargin: {
    properties: "scrollMargin",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  scrollMarginBlock: true,
  scrollMarginBlockEnd: true,
  scrollMarginBlockStart: true,
  scrollMarginBottom: {
    properties: "scrollMarginBottom",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  scrollMarginInline: true,
  scrollMarginInlineEnd: true,
  scrollMarginInlineStart: true,
  scrollMarginLeft: {
    properties: "scrollMarginLeft",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  scrollMarginRight: {
    properties: "scrollMarginRight",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  scrollMarginTop: {
    properties: "scrollMarginTop",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  scrollMarginX: {
    properties: ["scrollMarginLeft", "scrollMarginRight"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  scrollMarginY: {
    properties: ["scrollMarginTop", "scrollMarginBottom"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  scrollPadding: {
    properties: "scrollPadding",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  scrollPaddingBlock: true,
  scrollPaddingBlockEnd: true,
  scrollPaddingBlockStart: true,
  scrollPaddingBottom: {
    properties: "scrollPaddingBottom",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  scrollPaddingInline: true,
  scrollPaddingInlineEnd: true,
  scrollPaddingInlineStart: true,
  scrollPaddingLeft: {
    properties: "scrollPaddingLeft",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  scrollPaddingRight: {
    properties: "scrollPaddingRight",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  scrollPaddingTop: {
    properties: "scrollPaddingTop",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  scrollPaddingX: {
    properties: ["scrollPaddingLeft", "scrollPaddingRight"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  scrollPaddingY: {
    properties: ["scrollPaddingTop", "scrollPaddingBottom"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  scrollSnapAlign: true,
  scrollSnapStop: true,
  scrollSnapType: true,
  scrollTimeline: true,
  scrollTimelineAxis: true,
  scrollTimelineName: true,
  sepia: {
    properties: "--sepia",
    transform: pipe(transforms.function("sepia"), transforms.filter()),
  },
  shapeImageThreshold: true,
  shapeMargin: true,
  shapeOutside: true,
  shapeRendering: true,
  skewX: {
    properties: "--skew-x",
    transform: pipe(
      transforms.deg,
      transforms.function("skewX"),
      transforms.transform,
    ),
  },
  skewY: {
    properties: "--skew-y",
    transform: pipe(
      transforms.deg,
      transforms.function("skewY"),
      transforms.transform,
    ),
  },
  speak: true,
  speakAs: true,
  stopColor: true,
  stopOpacity: true,
  stroke: {
    properties: "stroke",
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  strokeColor: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeLinecap: true,
  strokeLinejoin: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: { properties: "strokeWidth", transform: transforms.px },
  tableLayout: true,
  tabSize: true,
  textAlign: true,
  textAlignLast: true,
  textAnchor: true,
  textBox: true,
  textBoxEdge: true,
  textBoxTrim: true,
  textCombineUpright: true,
  textDecoration: true,
  textDecorationColor: {
    properties: "textDecorationColor",
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  textDecorationLine: true,
  textDecorationSkip: true,
  textDecorationSkipInk: true,
  textDecorationStyle: true,
  textDecorationThickness: true,
  textEmphasis: true,
  textEmphasisColor: {
    properties: "textEmphasisColor",
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  textEmphasisPosition: true,
  textEmphasisStyle: true,
  textIndent: true,
  textJustify: true,
  textOrientation: true,
  textOverflow: true,
  textRendering: true,
  textShadow: {
    properties: "textShadow",
    token: "shadows",
    transform: transforms.token("shadows"),
  },
  textSizeAdjust: true,
  textSpacingTrim: true,
  textTransform: true,
  textUnderlineOffset: true,
  textUnderlinePosition: true,
  textWrap: true,
  textWrapMode: true,
  textWrapStyle: true,
  timelineScope: true,
  top: {
    properties: "top",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  touchAction: true,
  transform: true,
  transformBox: true,
  transformOrigin: true,
  transformStyle: true,
  transition: { transform: transforms.transition() },
  transitionBehavior: true,
  transitionDelay: true,
  transitionDuration: {
    properties: "transitionDuration",
    token: "durations",
    transform: transforms.token("durations"),
  },
  transitionProperty: { transform: transforms.transition("property") },
  transitionTimingFunction: {
    properties: "transitionTimingFunction",
    token: "easings",
    transform: transforms.token("easings"),
  },
  translateX: {
    properties: "--translate-x",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.function("translateX"),
      transforms.calc("spaces"),
      transforms.transform,
    ),
  },
  translateY: {
    properties: "--translate-y",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.function("translateY"),
      transforms.calc("spaces"),
      transforms.transform,
    ),
  },
  translateZ: {
    properties: "--translate-z",
    transform: pipe(transforms.function("translateZ"), transforms.transform),
  },
  unicodeBidi: true,
  userModify: true,
  userSelect: true,
  vectorEffect: true,
  verticalAlign: true,
  viewTimeline: true,
  viewTimelineAxis: true,
  viewTimelineInset: true,
  viewTimelineName: true,
  viewTransitionClass: true,
  viewTransitionName: true,
  visibility: true,
  whiteSpace: true,
  whiteSpaceCollapse: true,
  widows: true,
  width: {
    properties: "width",
    token: "sizes",
    transform: pipe(
      transforms.token("sizes"),
      transforms.fraction,
      transforms.px,
      transforms.calc("sizes"),
    ),
  },
  willChange: true,
  wordBreak: true,
  wordSpacing: true,
  writingMode: true,
  x: true,
  y: true,
  zIndex: {
    properties: "zIndex",
    token: "zIndices",
    transform: transforms.token("zIndices"),
  },
  zoom: true,
} as const satisfies StyleConfigs

export type ShorthandStyleProperty = keyof typeof shorthandStyles

export const shorthandStyles = {
  accent: standardStyles.accentColor,
  bg: standardStyles.background,
  bgAttachment: { properties: "backgroundAttachment" },
  bgBlendMode: { properties: "backgroundBlendMode" },
  bgClip: standardStyles.backgroundClip,
  bgColor: standardStyles.backgroundColor,
  bgGradient: standardStyles.backgroundImage,
  bgImage: standardStyles.backgroundImage,
  bgImg: standardStyles.backgroundImage,
  bgOrigin: { properties: "backgroundOrigin" },
  bgPosition: { properties: "backgroundPosition" },
  bgPositionX: { properties: "backgroundPositionX" },
  bgPositionY: { properties: "backgroundPositionY" },
  bgPosX: { properties: "backgroundPositionX" },
  bgPosY: { properties: "backgroundPositionY" },
  bgRepeat: { properties: "backgroundRepeat" },
  bgSize: { properties: "backgroundSize" },
  blendMode: { properties: "mixBlendMode" },
  borderBottomEndRadius: standardStyles.borderEndEndRadius,
  borderBottomStartRadius: standardStyles.borderEndStartRadius,
  borderEnd: standardStyles.borderInlineEnd,
  borderEndColor: standardStyles.borderInlineEndColor,
  borderEndRadius: standardStyles.borderInlineEndRadius,
  borderEndStyle: { properties: "borderInlineEndStyle" },
  borderEndWidth: standardStyles.borderInlineEndWidth,
  borderStart: standardStyles.borderInlineStart,
  borderStartColor: standardStyles.borderInlineStartColor,
  borderStartRadius: standardStyles.borderInlineStartRadius,
  borderStartStyle: { properties: "borderInlineStartStyle" },
  borderStartWidth: standardStyles.borderInlineStartWidth,
  borderTopEndRadius: standardStyles.borderStartEndRadius,
  borderTopStartRadius: standardStyles.borderStartStartRadius,
  caret: standardStyles.caretColor,
  flexDir: { properties: "flexDirection" },
  g: standardStyles.gap,
  gapX: standardStyles.columnGap,
  gapY: standardStyles.rowGap,
  gx: standardStyles.columnGap,
  gy: standardStyles.rowGap,
  h: standardStyles.height,
  insetEnd: standardStyles.insetInlineEnd,
  insetStart: standardStyles.insetInlineStart,
  leading: standardStyles.lineHeight,
  listStyleImg: standardStyles.listStyleImage,
  listStylePos: { properties: "listStylePosition" },
  m: standardStyles.margin,
  marginEnd: standardStyles.marginInlineEnd,
  marginStart: standardStyles.marginInlineStart,
  maxH: standardStyles.maxHeight,
  maxW: standardStyles.maxWidth,
  mb: standardStyles.marginBottom,
  me: standardStyles.marginInlineEnd,
  minH: standardStyles.minHeight,
  minW: standardStyles.minWidth,
  ml: standardStyles.marginLeft,
  mr: standardStyles.marginRight,
  ms: standardStyles.marginInlineStart,
  mt: standardStyles.marginTop,
  mx: standardStyles.marginX,
  my: standardStyles.marginY,
  overscroll: { properties: "overscrollBehavior" },
  overscrollX: { properties: "overscrollBehaviorX" },
  overscrollY: { properties: "overscrollBehaviorY" },
  p: standardStyles.padding,
  paddingEnd: standardStyles.paddingInlineEnd,
  paddingStart: standardStyles.paddingInlineStart,
  pb: standardStyles.paddingBottom,
  pe: standardStyles.paddingInlineEnd,
  pl: standardStyles.paddingLeft,
  pos: { properties: "position" },
  pr: standardStyles.paddingRight,
  ps: standardStyles.paddingInlineStart,
  pt: standardStyles.paddingTop,
  px: standardStyles.paddingX,
  py: standardStyles.paddingY,
  rounded: standardStyles.borderRadius,
  roundedBottom: standardStyles.borderBottomRadius,
  roundedBottomEnd: standardStyles.borderEndEndRadius,
  roundedBottomLeft: standardStyles.borderBottomLeftRadius,
  roundedBottomRight: standardStyles.borderBottomRightRadius,
  roundedBottomStart: standardStyles.borderEndStartRadius,
  roundedEnd: standardStyles.borderInlineEndRadius,
  roundedLeft: standardStyles.borderLeftRadius,
  roundedRight: standardStyles.borderRightRadius,
  roundedStart: standardStyles.borderInlineStartRadius,
  roundedTop: standardStyles.borderTopRadius,
  roundedTopEnd: standardStyles.borderStartEndRadius,
  roundedTopLeft: standardStyles.borderTopLeftRadius,
  roundedTopRight: standardStyles.borderTopRightRadius,
  roundedTopStart: standardStyles.borderStartStartRadius,
  shadow: standardStyles.boxShadow,
  text: standardStyles.fontSize,
  textColor: standardStyles.color,
  textDecor: { properties: "textDecoration" },
  tracking: standardStyles.letterSpacing,
  w: standardStyles.width,
  z: standardStyles.zIndex,
} as const satisfies StyleConfigs

export type PseudoStyleProperty = keyof typeof pseudoStyles

export const pseudoStyles = {
  "&::after": { properties: "&::after", transform: transforms.content },
  "&::before": { properties: "&::before", transform: transforms.content },
} as const satisfies StyleConfigs

export type UIStyleProperty = keyof typeof uiStyles

export const uiStyles = {
  apply: { transform: transforms.styles() },
  layerStyle: { transform: transforms.styles("layerStyles") },
  textStyle: { transform: transforms.styles("textStyles") },
  colorScheme: { transform: transforms.colorScheme },
  lineClamp: {
    properties: "--line-clamp",
    static: {
      display: "-webkit-box",
      overflow: "hidden",
      textOverflow: "ellipsis",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "var(--line-clamp)",
    },
  },
  truncated: { transform: transforms.truncated },
  vars: { transform: transforms.vars },
} as const satisfies StyleConfigs

export type AtRuleStyleProperty = keyof typeof atRuleStyles

export const atRuleStyles = {
  keyframes: {
    properties: "animationName",
    token: "keyframes",
    transform: pipe(transforms.token("keyframes"), transforms.keyframes),
  },
  _container: { transform: transforms.container },
  _landscape: { properties: "@media (orientation: landscape)" },
  _media: { transform: transforms.media },
  _mediaDark: { properties: "@media (prefers-color-scheme: dark)" },
  _mediaLight: { properties: "@media (prefers-color-scheme: light)" },
  _mediaReduceMotion: { properties: "@media (prefers-reduced-motion: reduce)" },
  _portrait: { properties: "@media (orientation: portrait)" },
  _print: { properties: "@media print" },
  _supports: { transform: transforms.supports },
} as const satisfies StyleConfigs

export type Styles = typeof styles

export const styles = {
  ...standardStyles,
  ...shorthandStyles,
  ...pseudoStyles,
  ...uiStyles,
  ...atRuleStyles,
} as const satisfies StyleConfigs

export type StyleProperty = keyof typeof styles

export const styleProperties = Object.keys(styles) as StyleProperty[]

export type VariableLengthProperty = (typeof variableLengthProperties)[number]

export const variableLengthProperties = [
  "vars",
  "_container",
  "_media",
  "_supports",
] as const

export type SizeProperty = (typeof sizeProperties)[number]

export const sizeProperties = [
  "backfaceVisibility",
  "blockSize",
  "columnWidth",
  "containIntrinsicWidth",
  "flexBasis",
  "gridAutoColumns",
  "gridAutoRows",
  "gridTemplateColumns",
  "gridTemplateRows",
  "height",
  "h",
  "inlineSize",
  "maxBlockSize",
  "maxHeight",
  "maxH",
  "maxInlineSize",
  "maxWidth",
  "maxW",
  "minBlockSize",
  "minHeight",
  "minH",
  "minInlineSize",
  "minWidth",
  "minW",
  "width",
  "w",
  "boxSize",
  "maxBoxSize",
  "minBoxSize",
] as const

export type AnimationProperty = (typeof animationProperties)[number]

export const animationProperties = ["animation"] as const

export type AspectRatioProperty = (typeof aspectRatioProperties)[number]

export const aspectRatioProperties = ["aspectRatio"] as const

export type BlurProperty = (typeof blurProperties)[number]

export const blurProperties = ["blur", "backdropBlur"] as const

export type BorderProperty = (typeof borderProperties)[number]

export const borderProperties = [
  "border",
  "borderBlock",
  "borderBlockEnd",
  "borderBlockStart",
  "borderBottom",
  "borderImage",
  "borderInline",
  "borderInlineEnd",
  "borderEnd",
  "borderInlineStart",
  "borderStart",
  "borderLeft",
  "borderRight",
  "borderTop",
  "borderX",
  "borderY",
] as const

export type ColorProperty = (typeof colorProperties)[number]

export const colorProperties = [
  "color",
  "textColor",
  "floodColor",
  "lightingColor",
  "stroke",
  "accentColor",
  "accent",
  "background",
  "bg",
  "backgroundColor",
  "bgColor",
  "borderBlockColor",
  "borderBlockEndColor",
  "borderBlockStartColor",
  "borderBottomColor",
  "borderColor",
  "borderInlineColor",
  "borderInlineEndColor",
  "borderEndColor",
  "borderInlineStartColor",
  "borderStartColor",
  "borderLeftColor",
  "borderRightColor",
  "borderTopColor",
  "caretColor",
  "caret",
  "columnRuleColor",
  "fill",
  "outlineColor",
  "scrollbarColor",
  "textDecorationColor",
  "textEmphasisColor",
  "focusRingColor",
] as const

export type DurationProperty = (typeof durationProperties)[number]

export const durationProperties = [
  "animationDuration",
  "transitionDuration",
] as const

export type EasingProperty = (typeof easingProperties)[number]

export const easingProperties = [
  "animationTimingFunction",
  "transitionTimingFunction",
] as const

export type FontProperty = (typeof fontProperties)[number]

export const fontProperties = [
  "fontFamily",
  "fontSize",
  "text",
  "fontWeight",
  "lineHeight",
  "leading",
  "letterSpacing",
  "tracking",
] as const

export type GradientProperty = (typeof gradientProperties)[number]

export const gradientProperties = [
  "backgroundImage",
  "bgImage",
  "bgImg",
  "bgGradient",
  "borderImageSource",
  "listStyleImage",
  "listStyleImg",
  "maskImage",
] as const

export type KeyframeProperty = (typeof keyframeProperties)[number]

export const keyframeProperties = ["animationName", "keyframes"] as const

export type RadiusProperty = (typeof radiusProperties)[number]

export const radiusProperties = [
  "borderBottomLeftRadius",
  "roundedBottomLeft",
  "borderBottomRightRadius",
  "roundedBottomRight",
  "borderEndEndRadius",
  "borderBottomEndRadius",
  "roundedBottomEnd",
  "borderEndStartRadius",
  "borderBottomStartRadius",
  "roundedBottomStart",
  "borderRadius",
  "rounded",
  "borderStartEndRadius",
  "borderTopEndRadius",
  "roundedTopEnd",
  "borderStartStartRadius",
  "borderTopStartRadius",
  "roundedTopStart",
  "borderTopLeftRadius",
  "roundedTopLeft",
  "borderTopRightRadius",
  "roundedTopRight",
  "borderBottomRadius",
  "roundedBottom",
  "borderInlineEndRadius",
  "borderEndRadius",
  "roundedEnd",
  "borderInlineStartRadius",
  "borderStartRadius",
  "roundedStart",
  "borderLeftRadius",
  "roundedLeft",
  "borderRightRadius",
  "roundedRight",
  "borderTopRadius",
  "roundedTop",
] as const

export type ShadowProperty = (typeof shadowProperties)[number]

export const shadowProperties = [
  "boxShadow",
  "shadow",
  "textShadow",
  "dropShadow",
  "backdropDropShadow",
] as const

export type SpaceProperty = (typeof spaceProperties)[number]

export const spaceProperties = [
  "bottom",
  "columnGap",
  "gx",
  "gapX",
  "gap",
  "g",
  "inset",
  "insetBlock",
  "insetBlockEnd",
  "insetBlockStart",
  "insetInline",
  "insetInlineEnd",
  "insetEnd",
  "insetInlineStart",
  "insetStart",
  "left",
  "margin",
  "m",
  "marginBlock",
  "marginBlockEnd",
  "marginBlockStart",
  "marginBottom",
  "mb",
  "marginInline",
  "marginInlineEnd",
  "me",
  "marginEnd",
  "marginInlineStart",
  "ms",
  "marginStart",
  "marginLeft",
  "ml",
  "marginRight",
  "mr",
  "marginTop",
  "mt",
  "padding",
  "p",
  "paddingBlock",
  "paddingBlockEnd",
  "paddingBlockStart",
  "paddingBottom",
  "pb",
  "paddingInline",
  "paddingInlineEnd",
  "pe",
  "paddingEnd",
  "paddingInlineStart",
  "ps",
  "paddingStart",
  "paddingLeft",
  "pl",
  "paddingRight",
  "pr",
  "paddingTop",
  "pt",
  "right",
  "rowGap",
  "gy",
  "gapY",
  "scrollMargin",
  "scrollMarginBottom",
  "scrollMarginLeft",
  "scrollMarginRight",
  "scrollMarginTop",
  "scrollPadding",
  "scrollPaddingBottom",
  "scrollPaddingLeft",
  "scrollPaddingRight",
  "scrollPaddingTop",
  "top",
  "insetX",
  "insetY",
  "marginX",
  "mx",
  "marginY",
  "my",
  "paddingX",
  "px",
  "paddingY",
  "py",
  "scrollMarginX",
  "scrollMarginY",
  "scrollPaddingX",
  "scrollPaddingY",
  "focusRingOffset",
  "translateX",
  "translateY",
] as const

export type ZIndexProperty = (typeof zIndexProperties)[number]

export const zIndexProperties = ["zIndex", "z"] as const

export interface StyleProps {
  /**
   * Apply other styles defined in `theme.styles`.
   *
   * @example
   * ```jsx
   * <Box apply='mdx.h1'>Box</Box>
   * ```
   *
   * This will apply styles defined in `theme.styles.mdx.h1`
   */
  apply?: Token<StringLiteral, "apply">
  /**
   * Apply layer styles defined in `theme.layerStyles`.
   */
  layerStyle?: Token<StringLiteral, "layerStyles">
  /**
   * Apply text styles defined in `theme.textStyles`.
   */
  textStyle?: Token<StringLiteral, "textStyles">
  /**
   * Set color scheme variables.
   */
  colorScheme?: Token<ColorScheme>
  /**
   * ### accent-color
   *
   * The <code>accent-color</code> CSS property sets a color for checkboxes, radio buttons, and other form controls.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/accent-color
   */
  accent?: Token<CSS.Property.AccentColor, "colors">
  /**
   * ### accent-color
   *
   * The <code>accent-color</code> CSS property sets a color for checkboxes, radio buttons, and other form controls.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/accent-color
   */
  accentColor?: Token<CSS.Property.AccentColor, "colors">
  /**
   * ### align-content
   *
   * Flexbox is a one-dimensional layout system, which places content either horizontally or vertically, with optional wrapping.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-03-30
   * @newly_available_date 2015-09-30
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-content
   */
  alignContent?: Token<CSS.Property.AlignContent>
  /**
   * ### align-items
   *
   * Flexbox is a one-dimensional layout system, which places content either horizontally or vertically, with optional wrapping.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-03-30
   * @newly_available_date 2015-09-30
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-items
   */
  alignItems?: Token<CSS.Property.AlignItems>
  /**
   * ### alignment-baseline
   *
   * The <code>alignment-baseline</code> CSS property sets which baseline of an element is aligned with the corresponding baseline of its parent.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/alignment-baseline
   */
  alignmentBaseline?: Token<CSS.Property.AlignmentBaseline>
  /**
   * ### align-self
   *
   * Flexbox is a one-dimensional layout system, which places content either horizontally or vertically, with optional wrapping.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-03-30
   * @newly_available_date 2015-09-30
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-self
   */
  alignSelf?: Token<CSS.Property.AlignSelf>
  /**
   * ### all
   *
   * The <code>all</code> CSS property is a shorthand for all CSS properties, except for <code>direction</code> and <code>unicode-bidi</code>. It accepts only the keywords for explicit defaulting (such as <code>initial</code> and <code>inherit</code>), since they are the only values supported on all CSS properties.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/all
   */
  all?: Token<CSS.Globals>
  /**
   * ### anchor-name
   *
   * Anchor positioning places an element based on the position of another element. For example, you can place a tooltip next to the content it references.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/anchor-name
   *
   * @experimental
   */
  anchorName?: Token<string & {}>
  /**
   * ### anchor-scope
   *
   * Anchor positioning places an element based on the position of another element. For example, you can place a tooltip next to the content it references.
   *
   * @baseline `Limited available`
   *
   * @see https://drafts.csswg.org/css-anchor-position-1/#propdef-anchor-scope
   *
   * @experimental
   */
  anchorScope?: Token<string & {}>
  /**
   * ### animation
   *
   * The <code>animation</code> CSS property animates an element's style over time, using keyframes described in <code>@keyframes</code> rules.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-03-30
   * @newly_available_date 2015-09-30
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation
   */
  animation?: Token<CSS.Property.Animation, "animations">
  /**
   * ### animation-composition
   *
   * The <code>animation-composition</code> CSS property chooses how to combine animations that affect the same property.
   *
   * @baseline `Newly available`
   * @newly_available_date 2023-07-04
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-composition
   */
  animationComposition?: Token<CSS.Property.AnimationComposition>
  /**
   * ### animation-delay
   *
   * The <code>animation</code> CSS property animates an element's style over time, using keyframes described in <code>@keyframes</code> rules.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-03-30
   * @newly_available_date 2015-09-30
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-delay
   */
  animationDelay?: Token<CSS.Property.AnimationDelay>
  /**
   * ### animation-direction
   *
   * The <code>animation</code> CSS property animates an element's style over time, using keyframes described in <code>@keyframes</code> rules.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-03-30
   * @newly_available_date 2015-09-30
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-direction
   */
  animationDirection?: Token<CSS.Property.AnimationDirection>
  /**
   * ### animation-duration
   *
   * The <code>animation</code> CSS property animates an element's style over time, using keyframes described in <code>@keyframes</code> rules.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-03-30
   * @newly_available_date 2015-09-30
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-duration
   */
  animationDuration?: Token<CSS.Property.AnimationDuration, "durations">
  /**
   * ### animation-fill-mode
   *
   * The <code>animation</code> CSS property animates an element's style over time, using keyframes described in <code>@keyframes</code> rules.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-03-30
   * @newly_available_date 2015-09-30
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode
   */
  animationFillMode?: Token<CSS.Property.AnimationFillMode>
  /**
   * ### animation-iteration-count
   *
   * The <code>animation</code> CSS property animates an element's style over time, using keyframes described in <code>@keyframes</code> rules.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-03-30
   * @newly_available_date 2015-09-30
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count
   */
  animationIterationCount?: Token<CSS.Property.AnimationIterationCount>
  /**
   * ### animation-name
   *
   * The <code>animation</code> CSS property animates an element's style over time, using keyframes described in <code>@keyframes</code> rules.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-03-30
   * @newly_available_date 2015-09-30
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-name
   */
  animationName?: Token<CSS.Property.AnimationName, "keyframes">
  /**
   * ### animation-play-state
   *
   * The <code>animation</code> CSS property animates an element's style over time, using keyframes described in <code>@keyframes</code> rules.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-03-30
   * @newly_available_date 2015-09-30
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-play-state
   */
  animationPlayState?: Token<CSS.Property.AnimationPlayState>
  /**
   * ### animation-range
   *
   * The <code>animation-timeline</code>, <code>scroll-timeline</code>, and <code>view-timeline</code> CSS properties advance animations based on the user's scroll position.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-range
   *
   * @experimental
   */
  animationRange?: Token<CSS.Property.AnimationRange>
  /**
   * ### animation-range-end
   *
   * The <code>animation-timeline</code>, <code>scroll-timeline</code>, and <code>view-timeline</code> CSS properties advance animations based on the user's scroll position.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-range-end
   *
   * @experimental
   */
  animationRangeEnd?: Token<CSS.Property.AnimationRangeEnd>
  /**
   * ### animation-range-start
   *
   * The <code>animation-timeline</code>, <code>scroll-timeline</code>, and <code>view-timeline</code> CSS properties advance animations based on the user's scroll position.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-range-start
   *
   * @experimental
   */
  animationRangeStart?: Token<CSS.Property.AnimationRangeStart>
  /**
   * ### animation-timeline
   *
   * The <code>animation-timeline</code>, <code>scroll-timeline</code>, and <code>view-timeline</code> CSS properties advance animations based on the user's scroll position.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-timeline
   *
   * @experimental
   */
  animationTimeline?: Token<CSS.Property.AnimationTimeline>
  /**
   * ### animation-timing-function
   *
   * The <code>animation</code> CSS property animates an element's style over time, using keyframes described in <code>@keyframes</code> rules.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-03-30
   * @newly_available_date 2015-09-30
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-timing-function
   */
  animationTimingFunction?: Token<
    CSS.Property.AnimationTimingFunction,
    "easings"
  >
  /**
   * ### appearance
   *
   * The <code>appearance</code> CSS property controls the appearance of form controls. Using <code>appearance: none</code> disables any default native appearance and allows the elements to be styled with CSS.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-09-14
   * @newly_available_date 2022-03-14
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/appearance
   */
  appearance?: Token<CSS.Property.Appearance>
  /**
   * ### aspect-ratio
   *
   * The <code>aspect-ratio</code> CSS property controls the width-to-height ratio of elements. For <code>&#x3C;img></code> and <code>&#x3C;video></code> elements, the <code>width</code> and <code>height</code> attributes used together with <code>height: auto</code> control the aspect ratio while the image/video is loading.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/aspect-ratio
   */
  aspectRatio?: Token<CSS.Property.AspectRatio, "aspectRatios">
  /**
   * Sets the value of `--backdrop-blur`.
   */
  backdropBlur?: Token<StringLiteral, "blurs">
  /**
   * Sets the value of `--backdrop-brightness`.
   */
  backdropBrightness?: Token<StringLiteral>
  /**
   * Sets the value of `--backdrop-contrast`.
   */
  backdropContrast?: Token<StringLiteral>
  /**
   * Sets the value of `--backdrop-drop-shadow`.
   */
  backdropDropShadow?: Token<StringLiteral, "shadows">
  /**
   * ### backdrop-filter
   *
   * The <code>backdrop-filter</code> CSS property applies graphical effects such as blurring or color shifting to the area behind an element.
   *
   * @baseline `Newly available`
   * @newly_available_date 2024-09-16
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/backdrop-filter
   */
  backdropFilter?: Token<CSS.Property.BackdropFilter>
  /**
   * Sets the value of `--backdrop-grayscale`.
   */
  backdropGrayscale?: Token<StringLiteral>
  /**
   * Sets the value of `--backdrop-hue-rotate`.
   */
  backdropHueRotate?: Token<StringLiteral>
  /**
   * Sets the value of `--backdrop-invert`.
   */
  backdropInvert?: Token<StringLiteral>
  /**
   * Sets the value of `--backdrop-saturate`.
   */
  backdropSaturate?: Token<StringLiteral>
  /**
   * Sets the value of `--backdrop-sepia`.
   */
  backdropSepia?: Token<StringLiteral>
  /**
   * ### backface-visibility
   *
   * The <code>transform</code> CSS property and its 3D transform functions allow rotations and other transforms in three dimensions, including perspective transforms.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-09-14
   * @newly_available_date 2022-03-14
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/backface-visibility
   */
  backfaceVisibility?: Token<CSS.Property.BackfaceVisibility | number, "sizes">
  /**
   * ### background
   *
   * The <code>background</code> CSS property is a shorthand that sets several background properties at once.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background
   */
  background?: Token<CSS.Property.Background, "colors">
  /**
   * ### background-attachment
   *
   * The <code>background-attachment</code> CSS property sets whether an element's background image or gradient moves as the element scrolls.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-09-14
   * @newly_available_date 2022-03-14
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-attachment
   */
  backgroundAttachment?: Token<CSS.Property.BackgroundAttachment>
  /**
   * ### background-blend-mode
   *
   * The <code>background-blend-mode</code> CSS property blends an element's background image and background color using blend modes like <code>multiply</code>, <code>difference</code>, or <code>color</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-blend-mode
   */
  backgroundBlendMode?: Token<CSS.Property.BackgroundBlendMode>
  /**
   * ### background-clip
   *
   * The <code>background-clip</code> CSS property sets the extent of the background: the padding box, the content box, or the default border box.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-clip
   */
  backgroundClip?: Token<CSS.Property.BackgroundClip>
  /**
   * ### background-color
   *
   * The <code>background-color</code> CSS property sets the fill color of an element, behind any content and background images or gradients.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-color
   */
  backgroundColor?: Token<CSS.Property.BackgroundColor, "colors">
  /**
   * ### background-image
   *
   * The <code>background-image</code> CSS property sets the graphics to display behind the content of an element and in front of the background color. Graphics may be any combination of images or gradients.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-image
   */
  backgroundImage?: Token<CSS.Property.BackgroundImage, "gradients">
  /**
   * ### background-origin
   *
   * The <code>background-origin</code> CSS property sets the background starting position relative to the border and padding of an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-origin
   */
  backgroundOrigin?: Token<CSS.Property.BackgroundOrigin>
  /**
   * ### background-position
   *
   * The <code>background-position</code> CSS property offsets the initial position of background images relative to the background origin.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position
   */
  backgroundPosition?: Token<CSS.Property.BackgroundPosition>
  /**
   * ### background-position-x
   *
   * The <code>background-position</code> CSS property offsets the initial position of background images relative to the background origin.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-x
   */
  backgroundPositionX?: Token<CSS.Property.BackgroundPositionX>
  /**
   * ### background-position-y
   *
   * The <code>background-position</code> CSS property offsets the initial position of background images relative to the background origin.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-y
   */
  backgroundPositionY?: Token<CSS.Property.BackgroundPositionY>
  /**
   * ### background-repeat
   *
   * The <code>background-repeat</code> CSS property sets how a background image is tiled.
   *
   * @baseline `Widely available`
   * @widely_available_date 2019-03-20
   * @newly_available_date 2016-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-repeat
   */
  backgroundRepeat?: Token<CSS.Property.BackgroundRepeat>
  /**
   * ### background-size
   *
   * The <code>background-size</code> CSS property scales or stretches a background based on the size of the element (with the <code>contain</code> and <code>cover</code> keywords), a length, or percentage.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-size
   */
  backgroundSize?: Token<CSS.Property.BackgroundSize>
  /**
   * ### baseline-shift
   *
   * The <code>baseline-shift</code> CSS property sets the position of an element relative to its dominant baseline.
   *
   * @baseline `Limited available`
   *
   * @see https://drafts.csswg.org/css-inline/#baseline-shift-property
   */
  baselineShift?: Token<CSS.Property.BaselineShift>
  /**
   * ### baseline-source
   *
   * The <code>baseline-source</code> CSS property controls how inline-level boxes with multiple lines of text are aligned with the surrounding text. By default, which typographic baseline is used depends on the <code>display</code> property value.
   *
   * @baseline `Limited available`
   *
   * @see https://drafts.csswg.org/css-inline/#baseline-source
   */
  baselineSource?: Token<string & {}>
  /**
   * ### background
   *
   * The <code>background</code> CSS property is a shorthand that sets several background properties at once.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background
   */
  bg?: Token<CSS.Property.Background, "colors">
  /**
   * ### background-attachment
   *
   * The <code>background-attachment</code> CSS property sets whether an element's background image or gradient moves as the element scrolls.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-09-14
   * @newly_available_date 2022-03-14
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-attachment
   */
  bgAttachment?: Token<CSS.Property.BackgroundAttachment>
  /**
   * ### background-blend-mode
   *
   * The <code>background-blend-mode</code> CSS property blends an element's background image and background color using blend modes like <code>multiply</code>, <code>difference</code>, or <code>color</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-blend-mode
   */
  bgBlendMode?: Token<CSS.Property.BackgroundBlendMode>
  /**
   * ### background-clip
   *
   * The <code>background-clip</code> CSS property sets the extent of the background: the padding box, the content box, or the default border box.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-clip
   */
  bgClip?: Token<CSS.Property.BackgroundClip>
  /**
   * ### background-color
   *
   * The <code>background-color</code> CSS property sets the fill color of an element, behind any content and background images or gradients.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-color
   */
  bgColor?: Token<CSS.Property.BackgroundColor, "colors">
  /**
   * ### background-image
   *
   * The <code>background-image</code> CSS property sets the graphics to display behind the content of an element and in front of the background color. Graphics may be any combination of images or gradients.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-image
   */
  bgGradient?: Token<CSS.Property.BackgroundImage, "gradients">
  /**
   * ### background-image
   *
   * The <code>background-image</code> CSS property sets the graphics to display behind the content of an element and in front of the background color. Graphics may be any combination of images or gradients.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-image
   */
  bgImage?: Token<CSS.Property.BackgroundImage, "gradients">
  /**
   * ### background-image
   *
   * The <code>background-image</code> CSS property sets the graphics to display behind the content of an element and in front of the background color. Graphics may be any combination of images or gradients.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-image
   */
  bgImg?: Token<CSS.Property.BackgroundImage, "gradients">
  /**
   * ### background-origin
   *
   * The <code>background-origin</code> CSS property sets the background starting position relative to the border and padding of an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-origin
   */
  bgOrigin?: Token<CSS.Property.BackgroundOrigin>
  /**
   * ### background-position
   *
   * The <code>background-position</code> CSS property offsets the initial position of background images relative to the background origin.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position
   */
  bgPosition?: Token<CSS.Property.BackgroundPosition>
  /**
   * ### background-position-x
   *
   * The <code>background-position</code> CSS property offsets the initial position of background images relative to the background origin.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-x
   */
  bgPositionX?: Token<CSS.Property.BackgroundPositionX>
  /**
   * ### background-position-y
   *
   * The <code>background-position</code> CSS property offsets the initial position of background images relative to the background origin.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-y
   */
  bgPositionY?: Token<CSS.Property.BackgroundPositionY>
  /**
   * ### background-position-x
   *
   * The <code>background-position</code> CSS property offsets the initial position of background images relative to the background origin.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-x
   */
  bgPosX?: Token<CSS.Property.BackgroundPositionX>
  /**
   * ### background-position-y
   *
   * The <code>background-position</code> CSS property offsets the initial position of background images relative to the background origin.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-y
   */
  bgPosY?: Token<CSS.Property.BackgroundPositionY>
  /**
   * ### background-repeat
   *
   * The <code>background-repeat</code> CSS property sets how a background image is tiled.
   *
   * @baseline `Widely available`
   * @widely_available_date 2019-03-20
   * @newly_available_date 2016-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-repeat
   */
  bgRepeat?: Token<CSS.Property.BackgroundRepeat>
  /**
   * ### background-size
   *
   * The <code>background-size</code> CSS property scales or stretches a background based on the size of the element (with the <code>contain</code> and <code>cover</code> keywords), a length, or percentage.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-size
   */
  bgSize?: Token<CSS.Property.BackgroundSize>
  /**
   * ### mix-blend-mode
   *
   * The <code>mix-blend-mode</code> CSS property blends an element's content with its background or parent elements using blend modes like <code>multiply</code>, <code>difference</code>, or <code>color</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode
   */
  blendMode?: Token<CSS.Property.MixBlendMode>
  /**
   * ### block-size
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/block-size
   */
  blockSize?: Token<CSS.Property.BlockSize | number, "sizes">
  /**
   * Sets the value of `--blur`.
   */
  blur?: Token<StringLiteral, "blurs">
  /**
   * ### border
   *
   * The <code>border</code> CSS property sets the color, style, and width of the line around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border
   */
  border?: Token<CSS.Property.Border | number, "borders">
  /**
   * ### border-block
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block
   */
  borderBlock?: Token<CSS.Property.BorderBlock | number, "borders">
  /**
   * ### border-block-color
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-color
   */
  borderBlockColor?: Token<CSS.Property.BorderBlockColor, "colors">
  /**
   * ### border-block-end
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end
   */
  borderBlockEnd?: Token<CSS.Property.BorderBlockEnd | number, "borders">
  /**
   * ### border-block-end-color
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-color
   */
  borderBlockEndColor?: Token<CSS.Property.BorderBlockEndColor, "colors">
  /**
   * ### border-block-end-style
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-style
   */
  borderBlockEndStyle?: Token<CSS.Property.BorderBlockEndStyle>
  /**
   * ### border-block-end-width
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-width
   */
  borderBlockEndWidth?: Token<CSS.Property.BorderBlockEndWidth | number>
  /**
   * ### border-block-start
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start
   */
  borderBlockStart?: Token<CSS.Property.BorderBlockStart | number, "borders">
  /**
   * ### border-block-start-color
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-color
   */
  borderBlockStartColor?: Token<CSS.Property.BorderBlockStartColor, "colors">
  /**
   * ### border-block-start-style
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-style
   */
  borderBlockStartStyle?: Token<CSS.Property.BorderBlockStartStyle>
  /**
   * ### border-block-start-width
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-width
   */
  borderBlockStartWidth?: Token<CSS.Property.BorderBlockStartWidth | number>
  /**
   * ### border-block-style
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-style
   */
  borderBlockStyle?: Token<CSS.Property.BorderBlockStyle>
  /**
   * ### border-block-width
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-width
   */
  borderBlockWidth?: Token<CSS.Property.BorderBlockWidth | number>
  /**
   * ### border-bottom
   *
   * The <code>border</code> CSS property sets the color, style, and width of the line around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom
   */
  borderBottom?: Token<CSS.Property.BorderBottom | number, "borders">
  /**
   * ### border-bottom-color
   *
   * The <code>border</code> CSS property sets the color, style, and width of the line around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-color
   */
  borderBottomColor?: Token<CSS.Property.BorderBottomColor, "colors">
  /**
   * ### border-end-end-radius
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-end-end-radius
   */
  borderBottomEndRadius?: Token<
    CSS.Property.BorderEndEndRadius | number,
    "radii"
  >
  /**
   * ### border-bottom-left-radius
   *
   * The <code>border-radius</code> CSS property rounds the corners of the border drawn around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius
   */
  borderBottomLeftRadius?: Token<
    CSS.Property.BorderBottomLeftRadius | number,
    "radii"
  >
  /**
   * ### border-bottom-left-radius
   *
   * The <code>border-radius</code> CSS property rounds the corners of the border drawn around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius
   *
   * ------------------------------------
   *
   * ### border-bottom-right-radius
   *
   * The <code>border-radius</code> CSS property rounds the corners of the border drawn around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius
   */
  borderBottomRadius?: Token<
    | CSS.Property.BorderBottomLeftRadius
    | CSS.Property.BorderBottomRightRadius
    | number,
    "radii"
  >
  /**
   * ### border-bottom-right-radius
   *
   * The <code>border-radius</code> CSS property rounds the corners of the border drawn around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius
   */
  borderBottomRightRadius?: Token<
    CSS.Property.BorderBottomRightRadius | number,
    "radii"
  >
  /**
   * ### border-end-start-radius
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-end-start-radius
   */
  borderBottomStartRadius?: Token<
    CSS.Property.BorderEndStartRadius | number,
    "radii"
  >
  /**
   * ### border-bottom-style
   *
   * The <code>border</code> CSS property sets the color, style, and width of the line around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-style
   */
  borderBottomStyle?: Token<CSS.Property.BorderBottomStyle>
  /**
   * ### border-bottom-width
   *
   * The <code>border</code> CSS property sets the color, style, and width of the line around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-width
   */
  borderBottomWidth?: Token<CSS.Property.BorderBottomWidth | number>
  /**
   * ### border-collapse
   *
   * The <code>&#x3C;table></code> HTML element, with several related elements, represents tabular data in rows and columns of cells.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-collapse
   */
  borderCollapse?: Token<CSS.Property.BorderCollapse>
  /**
   * ### border-color
   *
   * The <code>border</code> CSS property sets the color, style, and width of the line around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-color
   */
  borderColor?: Token<CSS.Property.BorderColor, "colors">
  /**
   * ### border-inline-end
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end
   */
  borderEnd?: Token<CSS.Property.BorderInlineEnd | number, "borders">
  /**
   * ### border-inline-end-color
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color
   */
  borderEndColor?: Token<CSS.Property.BorderInlineEndColor, "colors">
  /**
   * ### border-end-end-radius
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-end-end-radius
   */
  borderEndEndRadius?: Token<CSS.Property.BorderEndEndRadius | number, "radii">
  /**
   * ### border-end-end-radius
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-end-end-radius
   *
   * ------------------------------------
   *
   * ### border-end-start-radius
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-end-start-radius
   */
  borderEndRadius?: Token<
    | CSS.Property.BorderEndEndRadius
    | CSS.Property.BorderEndStartRadius
    | number,
    "radii"
  >
  /**
   * ### border-end-start-radius
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-end-start-radius
   */
  borderEndStartRadius?: Token<
    CSS.Property.BorderEndStartRadius | number,
    "radii"
  >
  /**
   * ### border-inline-end-style
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style
   */
  borderEndStyle?: Token<CSS.Property.BorderInlineEndStyle>
  /**
   * ### border-inline-end-width
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width
   */
  borderEndWidth?: Token<CSS.Property.BorderInlineEndWidth | number>
  /**
   * ### border-image
   *
   * The <code>border-image</code> CSS property draws an image around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2019-08-01
   * @newly_available_date 2017-02-01
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image
   */
  borderImage?: Token<CSS.Property.BorderImage | number, "borders">
  /**
   * ### border-image-outset
   *
   * The <code>border-image</code> CSS property draws an image around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2019-08-01
   * @newly_available_date 2017-02-01
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-outset
   */
  borderImageOutset?: Token<CSS.Property.BorderImageOutset>
  /**
   * ### border-image-repeat
   *
   * The <code>border-image</code> CSS property draws an image around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2019-08-01
   * @newly_available_date 2017-02-01
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-repeat
   */
  borderImageRepeat?: Token<CSS.Property.BorderImageRepeat>
  /**
   * ### border-image-slice
   *
   * The <code>border-image</code> CSS property draws an image around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2019-08-01
   * @newly_available_date 2017-02-01
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-slice
   */
  borderImageSlice?: Token<CSS.Property.BorderImageSlice>
  /**
   * ### border-image-source
   *
   * The <code>border-image</code> CSS property draws an image around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2019-08-01
   * @newly_available_date 2017-02-01
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-source
   */
  borderImageSource?: Token<CSS.Property.BorderImageSource, "gradients">
  /**
   * ### border-image-width
   *
   * The <code>border-image</code> CSS property draws an image around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2019-08-01
   * @newly_available_date 2017-02-01
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-width
   */
  borderImageWidth?: Token<CSS.Property.BorderImageWidth | number>
  /**
   * ### border-inline
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline
   */
  borderInline?: Token<CSS.Property.BorderInline | number, "borders">
  /**
   * ### border-inline-color
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-color
   */
  borderInlineColor?: Token<CSS.Property.BorderInlineColor, "colors">
  /**
   * ### border-inline-end
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end
   */
  borderInlineEnd?: Token<CSS.Property.BorderInlineEnd | number, "borders">
  /**
   * ### border-inline-end-color
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color
   */
  borderInlineEndColor?: Token<CSS.Property.BorderInlineEndColor, "colors">
  /**
   * ### border-end-end-radius
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-end-end-radius
   *
   * ------------------------------------
   *
   * ### border-end-start-radius
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-end-start-radius
   */
  borderInlineEndRadius?: Token<
    | CSS.Property.BorderEndEndRadius
    | CSS.Property.BorderEndStartRadius
    | number,
    "radii"
  >
  /**
   * ### border-inline-end-style
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style
   */
  borderInlineEndStyle?: Token<CSS.Property.BorderInlineEndStyle>
  /**
   * ### border-inline-end-width
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width
   */
  borderInlineEndWidth?: Token<CSS.Property.BorderInlineEndWidth | number>
  /**
   * ### border-inline-start
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start
   */
  borderInlineStart?: Token<CSS.Property.BorderInlineStart | number, "borders">
  /**
   * ### border-inline-start-color
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color
   */
  borderInlineStartColor?: Token<CSS.Property.BorderInlineStartColor, "colors">
  /**
   * ### border-start-end-radius
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-start-end-radius
   *
   * ------------------------------------
   *
   * ### border-start-start-radius
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-start-start-radius
   */
  borderInlineStartRadius?: Token<
    | CSS.Property.BorderStartEndRadius
    | CSS.Property.BorderStartStartRadius
    | number,
    "radii"
  >
  /**
   * ### border-inline-start-style
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style
   */
  borderInlineStartStyle?: Token<CSS.Property.BorderInlineStartStyle>
  /**
   * ### border-inline-start-width
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width
   */
  borderInlineStartWidth?: Token<CSS.Property.BorderInlineStartWidth | number>
  /**
   * ### border-inline-style
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-style
   */
  borderInlineStyle?: Token<CSS.Property.BorderInlineStyle>
  /**
   * ### border-inline-width
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-width
   */
  borderInlineWidth?: Token<CSS.Property.BorderInlineWidth | number>
  /**
   * ### border-left
   *
   * The <code>border</code> CSS property sets the color, style, and width of the line around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left
   */
  borderLeft?: Token<CSS.Property.BorderLeft | number, "borders">
  /**
   * ### border-left-color
   *
   * The <code>border</code> CSS property sets the color, style, and width of the line around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-color
   */
  borderLeftColor?: Token<CSS.Property.BorderLeftColor, "colors">
  /**
   * ### border-bottom-left-radius
   *
   * The <code>border-radius</code> CSS property rounds the corners of the border drawn around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius
   *
   * ------------------------------------
   *
   * ### border-top-left-radius
   *
   * The <code>border-radius</code> CSS property rounds the corners of the border drawn around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius
   */
  borderLeftRadius?: Token<
    | CSS.Property.BorderBottomLeftRadius
    | CSS.Property.BorderTopLeftRadius
    | number,
    "radii"
  >
  /**
   * ### border-left-style
   *
   * The <code>border</code> CSS property sets the color, style, and width of the line around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-style
   */
  borderLeftStyle?: Token<CSS.Property.BorderLeftStyle>
  /**
   * ### border-left-width
   *
   * The <code>border</code> CSS property sets the color, style, and width of the line around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-width
   */
  borderLeftWidth?: Token<CSS.Property.BorderLeftWidth | number>
  /**
   * ### border-radius
   *
   * The <code>border-radius</code> CSS property rounds the corners of the border drawn around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-radius
   */
  borderRadius?: Token<CSS.Property.BorderRadius | number, "radii">
  /**
   * ### border-right
   *
   * The <code>border</code> CSS property sets the color, style, and width of the line around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right
   */
  borderRight?: Token<CSS.Property.BorderRight | number, "borders">
  /**
   * ### border-right-color
   *
   * The <code>border</code> CSS property sets the color, style, and width of the line around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-color
   */
  borderRightColor?: Token<CSS.Property.BorderRightColor, "colors">
  /**
   * ### border-bottom-right-radius
   *
   * The <code>border-radius</code> CSS property rounds the corners of the border drawn around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius
   *
   * ------------------------------------
   *
   * ### border-top-right-radius
   *
   * The <code>border-radius</code> CSS property rounds the corners of the border drawn around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius
   */
  borderRightRadius?: Token<
    | CSS.Property.BorderBottomRightRadius
    | CSS.Property.BorderTopRightRadius
    | number,
    "radii"
  >
  /**
   * ### border-right-style
   *
   * The <code>border</code> CSS property sets the color, style, and width of the line around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-style
   */
  borderRightStyle?: Token<CSS.Property.BorderRightStyle>
  /**
   * ### border-right-width
   *
   * The <code>border</code> CSS property sets the color, style, and width of the line around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-width
   */
  borderRightWidth?: Token<CSS.Property.BorderRightWidth | number>
  /**
   * ### border-spacing
   *
   * The <code>&#x3C;table></code> HTML element, with several related elements, represents tabular data in rows and columns of cells.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-spacing
   */
  borderSpacing?: Token<CSS.Property.BorderSpacing>
  /**
   * ### border-inline-start
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start
   */
  borderStart?: Token<CSS.Property.BorderInlineStart | number, "borders">
  /**
   * ### border-inline-start-color
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color
   */
  borderStartColor?: Token<CSS.Property.BorderInlineStartColor, "colors">
  /**
   * ### border-start-end-radius
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-start-end-radius
   */
  borderStartEndRadius?: Token<
    CSS.Property.BorderStartEndRadius | number,
    "radii"
  >
  /**
   * ### border-start-end-radius
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-start-end-radius
   *
   * ------------------------------------
   *
   * ### border-start-start-radius
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-start-start-radius
   */
  borderStartRadius?: Token<
    | CSS.Property.BorderStartEndRadius
    | CSS.Property.BorderStartStartRadius
    | number,
    "radii"
  >
  /**
   * ### border-start-start-radius
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-start-start-radius
   */
  borderStartStartRadius?: Token<
    CSS.Property.BorderStartStartRadius | number,
    "radii"
  >
  /**
   * ### border-inline-start-style
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style
   */
  borderStartStyle?: Token<CSS.Property.BorderInlineStartStyle>
  /**
   * ### border-inline-start-width
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width
   */
  borderStartWidth?: Token<CSS.Property.BorderInlineStartWidth | number>
  /**
   * ### border-style
   *
   * The <code>border</code> CSS property sets the color, style, and width of the line around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-style
   */
  borderStyle?: Token<CSS.Property.BorderStyle>
  /**
   * ### border-top
   *
   * The <code>border</code> CSS property sets the color, style, and width of the line around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top
   */
  borderTop?: Token<CSS.Property.BorderTop | number, "borders">
  /**
   * ### border-top-color
   *
   * The <code>border</code> CSS property sets the color, style, and width of the line around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-color
   */
  borderTopColor?: Token<CSS.Property.BorderTopColor, "colors">
  /**
   * ### border-start-end-radius
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-start-end-radius
   */
  borderTopEndRadius?: Token<
    CSS.Property.BorderStartEndRadius | number,
    "radii"
  >
  /**
   * ### border-top-left-radius
   *
   * The <code>border-radius</code> CSS property rounds the corners of the border drawn around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius
   */
  borderTopLeftRadius?: Token<
    CSS.Property.BorderTopLeftRadius | number,
    "radii"
  >
  /**
   * ### border-top-left-radius
   *
   * The <code>border-radius</code> CSS property rounds the corners of the border drawn around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius
   *
   * ------------------------------------
   *
   * ### border-top-right-radius
   *
   * The <code>border-radius</code> CSS property rounds the corners of the border drawn around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius
   */
  borderTopRadius?: Token<
    | CSS.Property.BorderTopLeftRadius
    | CSS.Property.BorderTopRightRadius
    | number,
    "radii"
  >
  /**
   * ### border-top-right-radius
   *
   * The <code>border-radius</code> CSS property rounds the corners of the border drawn around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius
   */
  borderTopRightRadius?: Token<
    CSS.Property.BorderTopRightRadius | number,
    "radii"
  >
  /**
   * ### border-start-start-radius
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-start-start-radius
   */
  borderTopStartRadius?: Token<
    CSS.Property.BorderStartStartRadius | number,
    "radii"
  >
  /**
   * ### border-top-style
   *
   * The <code>border</code> CSS property sets the color, style, and width of the line around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-style
   */
  borderTopStyle?: Token<CSS.Property.BorderTopStyle>
  /**
   * ### border-top-width
   *
   * The <code>border</code> CSS property sets the color, style, and width of the line around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-width
   */
  borderTopWidth?: Token<CSS.Property.BorderTopWidth | number>
  /**
   * ### border-width
   *
   * The <code>border</code> CSS property sets the color, style, and width of the line around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-width
   */
  borderWidth?: Token<CSS.Property.BorderWidth | number>
  /**
   * ### border-left
   *
   * The <code>border</code> CSS property sets the color, style, and width of the line around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left
   *
   * ------------------------------------
   *
   * ### border-right
   *
   * The <code>border</code> CSS property sets the color, style, and width of the line around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right
   */
  borderX?: Token<
    CSS.Property.BorderLeft | CSS.Property.BorderRight | number,
    "borders"
  >
  /**
   * ### border-bottom
   *
   * The <code>border</code> CSS property sets the color, style, and width of the line around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom
   *
   * ------------------------------------
   *
   * ### border-top
   *
   * The <code>border</code> CSS property sets the color, style, and width of the line around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top
   */
  borderY?: Token<
    CSS.Property.BorderBottom | CSS.Property.BorderTop | number,
    "borders"
  >
  /**
   * ### bottom
   *
   * The physical CSS properties, <code>top</code>, <code>right</code>, <code>bottom</code>, and <code>left</code>, set the inset position of an element relative to the corresponding side of a container determined by the element's <code>position</code> property.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/bottom
   */
  bottom?: Token<CSS.Property.Bottom | number, "spaces">
  /**
   * ### box-align
   *
   * The CSS `box-align` property.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-align
   *
   * @deprecated
   */
  boxAlign?: Token<CSS.Property.BoxAlign>
  /**
   * ### box-decoration-break
   *
   * The <code>box-decoration-break</code> CSS property sets whether box decorations, such as borders or backgrounds, of an element divided across a page, column, or region wraps each fragment or splits across the break.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-decoration-break
   */
  boxDecorationBreak?: Token<CSS.Property.BoxDecorationBreak>
  /**
   * ### box-direction
   *
   * The CSS `box-direction` property.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-direction
   *
   * @deprecated
   */
  boxDirection?: Token<CSS.Property.BoxDirection>
  /**
   * ### box-flex
   *
   * The CSS `box-flex` property.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-flex
   *
   * @deprecated
   */
  boxFlex?: Token<CSS.Property.BoxFlex>
  /**
   * ### box-flex-group
   *
   * The CSS `box-flex-group` property.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-flex-group
   *
   * @deprecated
   */
  boxFlexGroup?: Token<CSS.Property.BoxFlexGroup>
  /**
   * ### box-lines
   *
   * The CSS `box-lines` property.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-lines
   *
   * @deprecated
   */
  boxLines?: Token<CSS.Property.BoxLines>
  /**
   * ### box-ordinal-group
   *
   * The CSS `box-ordinal-group` property.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-ordinal-group
   *
   * @deprecated
   */
  boxOrdinalGroup?: Token<CSS.Property.BoxOrdinalGroup>
  /**
   * ### box-orient
   *
   * The CSS `box-orient` property.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-orient
   *
   * @deprecated
   */
  boxOrient?: Token<CSS.Property.BoxOrient>
  /**
   * ### box-pack
   *
   * The CSS `box-pack` property.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-pack
   *
   * @deprecated
   */
  boxPack?: Token<CSS.Property.BoxPack>
  /**
   * ### box-shadow
   *
   * The <code>box-shadow</code> CSS property applies shadow effects around an element's frame. This can create drop shadow and inner shadow effects.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-shadow
   */
  boxShadow?: Token<CSS.Property.BoxShadow, "shadows">
  /**
   * ### height
   *
   * The <code>width</code> and <code>height</code> CSS properties set the preferred physical size of an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/height
   *
   * ------------------------------------
   *
   * ### width
   *
   * The <code>width</code> and <code>height</code> CSS properties set the preferred physical size of an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/width
   */
  boxSize?: Token<CSS.Property.Height | CSS.Property.Width | number, "sizes">
  /**
   * ### box-sizing
   *
   * The <code>box-sizing</code> CSS property sets whether an element's width and height are calculated based on the <code>content-box</code>, which does not count the size of borders or padding, or <code>border-box</code>, which does count them.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-sizing
   */
  boxSizing?: Token<CSS.Property.BoxSizing>
  /**
   * ### break-after
   *
   * In printed page layouts, the <code>break-after</code>, <code>break-before</code>, <code>break-inside</code> CSS properties control where printed pages start and end. Also known as pagination or page breaking.
   *
   * @baseline `Widely available`
   * @widely_available_date 2021-07-29
   * @newly_available_date 2019-01-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-after
   */
  breakAfter?: Token<CSS.Property.BreakAfter>
  /**
   * ### break-before
   *
   * In printed page layouts, the <code>break-after</code>, <code>break-before</code>, <code>break-inside</code> CSS properties control where printed pages start and end. Also known as pagination or page breaking.
   *
   * @baseline `Widely available`
   * @widely_available_date 2021-07-29
   * @newly_available_date 2019-01-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-before
   */
  breakBefore?: Token<CSS.Property.BreakBefore>
  /**
   * ### break-inside
   *
   * In printed page layouts, the <code>break-after</code>, <code>break-before</code>, <code>break-inside</code> CSS properties control where printed pages start and end. Also known as pagination or page breaking.
   *
   * @baseline `Widely available`
   * @widely_available_date 2021-07-29
   * @newly_available_date 2019-01-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-inside
   */
  breakInside?: Token<CSS.Property.BreakInside>
  /**
   * Sets the value of `--brightness`.
   */
  brightness?: Token<StringLiteral>
  /**
   * ### caption-side
   *
   * The <code>&#x3C;table></code> HTML element, with several related elements, represents tabular data in rows and columns of cells.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/caption-side
   */
  captionSide?: Token<CSS.Property.CaptionSide>
  /**
   * ### caret-color
   *
   * The <code>caret-color</code> CSS property sets the color of the text insertion pointer in a text input.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/caret-color
   */
  caret?: Token<CSS.Property.CaretColor, "colors">
  /**
   * ### caret-color
   *
   * The <code>caret-color</code> CSS property sets the color of the text insertion pointer in a text input.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/caret-color
   */
  caretColor?: Token<CSS.Property.CaretColor, "colors">
  /**
   * ### clear
   *
   * The <code>float</code> CSS property aligns an element to either side of its container, allowing text and inline elements to flow around it. The <code>clear</code> CSS property sets whether an element is moved below floating elements that proceed it.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/clear
   */
  clear?: Token<CSS.Property.Clear>
  /**
   * ### clip
   *
   * The <code>clip</code> CSS property sets the visible area of an absolutely positioned element.
   *
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/clip
   *
   * @deprecated
   */
  clip?: Token<CSS.Property.Clip>
  /**
   * ### clip-path
   *
   * The <code>clip-path</code> CSS property and SVG attribute set the visible area of an element. Everything outside the area will be hidden.
   *
   * @baseline `Widely available`
   * @widely_available_date 2023-07-21
   * @newly_available_date 2021-01-21
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/clip-path
   */
  clipPath?: Token<CSS.Property.ClipPath>
  /**
   * ### clip-rule
   *
   * The SVG image format, represented by the <code>&#x3C;svg></code> element, creates two-dimensional vector graphics with declarative or scripted interaction and animation.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/clip-rule
   */
  clipRule?: Token<CSS.Property.ClipRule>
  /**
   * ### color
   *
   * The <code>color</code> CSS property sets the primary foreground color of an element, which is used for text, the default border color, and text decorations.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/color
   */
  color?: Token<CSS.Property.Color, "colors">
  /**
   * ### color-adjust
   *
   * The <code>color-adjust</code> shorthand CSS property allows multiple performance related color adjustments to be set at once. Setting the <code>print-color-adjust</code> CSS property directly is preferred, as it is the only such adjustment so far defined.
   *
   *
   * @see https://drafts.csswg.org/css-color-adjust-1/#color-adjust
   *
   * @deprecated
   */
  colorAdjust?: Token<CSS.Property.PrintColorAdjust>
  /**
   * ### color-interpolation
   *
   * The SVG image format, represented by the <code>&#x3C;svg></code> element, creates two-dimensional vector graphics with declarative or scripted interaction and animation.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/color-interpolation
   */
  colorInterpolation?: Token<CSS.Property.ColorInterpolation>
  /**
   * ### color-interpolation-filters
   *
   * The <code>&#x3C;filter></code> SVG element applies custom effects such as color manipulation, blurring, or morphing to SVG elements.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/color-interpolation-filters
   */
  colorInterpolationFilters?: Token<string & {}>
  /**
   * ### column-count
   *
   * Multi-column layout flows an element's content across one or more columns in a single row, without affecting the <code>display</code> property of its children.
   *
   * @baseline `Widely available`
   * @widely_available_date 2019-09-07
   * @newly_available_date 2017-03-07
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-count
   */
  columnCount?: Token<CSS.Property.ColumnCount>
  /**
   * ### column-fill
   *
   * The <code>column-fill</code> CSS property sets the distribution of content across columns in a multi-column layout.
   *
   * @baseline `Widely available`
   * @widely_available_date 2019-09-07
   * @newly_available_date 2017-03-07
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-fill
   */
  columnFill?: Token<CSS.Property.ColumnFill>
  /**
   * ### column-gap
   *
   * Multi-column layout flows an element's content across one or more columns in a single row, without affecting the <code>display</code> property of its children.
   *
   * @baseline `Widely available`
   * @widely_available_date 2019-09-07
   * @newly_available_date 2017-03-07
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-gap
   */
  columnGap?: Token<CSS.Property.ColumnGap | number, "spaces">
  /**
   * ### column-rule
   *
   * Multi-column layout flows an element's content across one or more columns in a single row, without affecting the <code>display</code> property of its children.
   *
   * @baseline `Widely available`
   * @widely_available_date 2019-09-07
   * @newly_available_date 2017-03-07
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule
   */
  columnRule?: Token<CSS.Property.ColumnRule | number>
  /**
   * ### column-rule-color
   *
   * Multi-column layout flows an element's content across one or more columns in a single row, without affecting the <code>display</code> property of its children.
   *
   * @baseline `Widely available`
   * @widely_available_date 2019-09-07
   * @newly_available_date 2017-03-07
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-color
   */
  columnRuleColor?: Token<CSS.Property.ColumnRuleColor, "colors">
  /**
   * ### column-rule-style
   *
   * Multi-column layout flows an element's content across one or more columns in a single row, without affecting the <code>display</code> property of its children.
   *
   * @baseline `Widely available`
   * @widely_available_date 2019-09-07
   * @newly_available_date 2017-03-07
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-style
   */
  columnRuleStyle?: Token<CSS.Property.ColumnRuleStyle>
  /**
   * ### column-rule-width
   *
   * Multi-column layout flows an element's content across one or more columns in a single row, without affecting the <code>display</code> property of its children.
   *
   * @baseline `Widely available`
   * @widely_available_date 2019-09-07
   * @newly_available_date 2017-03-07
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-width
   */
  columnRuleWidth?: Token<CSS.Property.ColumnRuleWidth | number>
  /**
   * ### columns
   *
   * Multi-column layout flows an element's content across one or more columns in a single row, without affecting the <code>display</code> property of its children.
   *
   * @baseline `Widely available`
   * @widely_available_date 2019-09-07
   * @newly_available_date 2017-03-07
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/columns
   */
  columns?: Token<CSS.Property.Columns>
  /**
   * ### column-span
   *
   * The <code>column-span</code> CSS property controls whether a child element extends across all columns of a multi-column parent.
   *
   * @baseline `Widely available`
   * @widely_available_date 2023-01-28
   * @newly_available_date 2020-07-28
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-span
   */
  columnSpan?: Token<CSS.Property.ColumnSpan>
  /**
   * ### column-width
   *
   * Multi-column layout flows an element's content across one or more columns in a single row, without affecting the <code>display</code> property of its children.
   *
   * @baseline `Widely available`
   * @widely_available_date 2019-09-07
   * @newly_available_date 2017-03-07
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-width
   */
  columnWidth?: Token<CSS.Property.ColumnWidth | number, "sizes">
  /**
   * ### contain
   *
   * The <code>contain</code> CSS property sets limits to the scope of styles, layout, and paint rendering for speed and efficiency. The <code>none</code> keyword value disables containment, <code>strict</code> is equivalent to <code>contain: size layout style paint</code>, and <code>content</code> is equivalent to <code>contain: layout style paint</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-09-14
   * @newly_available_date 2022-03-14
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/contain
   */
  contain?: Token<CSS.Property.Contain>
  /**
   * ### container
   *
   * Container size queries with the <code>@container</code> at-rule apply styles to an element based on the dimensions of its container.
   *
   * @baseline `Newly available`
   * @newly_available_date 2023-02-14
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/container
   */
  container?: Token<CSS.Property.Container>
  /**
   * ### container-name
   *
   * Container size queries with the <code>@container</code> at-rule apply styles to an element based on the dimensions of its container.
   *
   * @baseline `Newly available`
   * @newly_available_date 2023-02-14
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/container-name
   */
  containerName?: Token<CSS.Property.ContainerName>
  /**
   * ### container-type
   *
   * Container size queries with the <code>@container</code> at-rule apply styles to an element based on the dimensions of its container.
   *
   * @baseline `Newly available`
   * @newly_available_date 2023-02-14
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/container-type
   */
  containerType?: Token<CSS.Property.ContainerType>
  /**
   * ### contain-intrinsic-block-size
   *
   * The <code>contain-intrinsic-size</code> CSS property sets the intrinsic size of an element. When using size containment, the browser will lay out the element as if it had a single child of this size.
   *
   * @baseline `Newly available`
   * @newly_available_date 2023-09-18
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-block-size
   */
  containIntrinsicBlockSize?: Token<CSS.Property.ContainIntrinsicBlockSize>
  /**
   * ### contain-intrinsic-height
   *
   * The <code>contain-intrinsic-size</code> CSS property sets the intrinsic size of an element. When using size containment, the browser will lay out the element as if it had a single child of this size.
   *
   * @baseline `Newly available`
   * @newly_available_date 2023-09-18
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-height
   */
  containIntrinsicHeight?: Token<CSS.Property.ContainIntrinsicHeight>
  /**
   * ### contain-intrinsic-inline-size
   *
   * The <code>contain-intrinsic-size</code> CSS property sets the intrinsic size of an element. When using size containment, the browser will lay out the element as if it had a single child of this size.
   *
   * @baseline `Newly available`
   * @newly_available_date 2023-09-18
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-inline-size
   */
  containIntrinsicInlineSize?: Token<CSS.Property.ContainIntrinsicInlineSize>
  /**
   * ### contain-intrinsic-size
   *
   * The <code>contain-intrinsic-size</code> CSS property sets the intrinsic size of an element. When using size containment, the browser will lay out the element as if it had a single child of this size.
   *
   * @baseline `Newly available`
   * @newly_available_date 2023-09-18
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-size
   */
  containIntrinsicSize?: Token<CSS.Property.ContainIntrinsicSize>
  /**
   * ### contain-intrinsic-width
   *
   * The <code>contain-intrinsic-size</code> CSS property sets the intrinsic size of an element. When using size containment, the browser will lay out the element as if it had a single child of this size.
   *
   * @baseline `Newly available`
   * @newly_available_date 2023-09-18
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-width
   */
  containIntrinsicWidth?: Token<
    CSS.Property.ContainIntrinsicWidth | number,
    "sizes"
  >
  /**
   * ### content
   *
   * The <code>content</code> CSS property sets the content inside of an element or pseudo-element, replacing the current value. It's often used with the <code>::before</code> and <code>::after</code> pseudo-elements to generate cosmetic content.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/content
   */
  content?: Token<CSS.Property.Content>
  /**
   * ### content-visibility
   *
   * The <code>content-visibility</code> CSS property delays rendering an element, including layout and painting, until it is needed.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/content-visibility
   */
  contentVisibility?: Token<CSS.Property.ContentVisibility>
  /**
   * ### counter-increment
   *
   * The <code>counter-reset</code> and <code>counter-increment</code> CSS properties and the <code>counter()</code> and <code>counters()</code> functions automatically number headings or ordered list items.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-increment
   */
  counterIncrement?: Token<CSS.Property.CounterIncrement>
  /**
   * ### counter-reset
   *
   * The <code>counter-reset</code> and <code>counter-increment</code> CSS properties and the <code>counter()</code> and <code>counters()</code> functions automatically number headings or ordered list items.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-reset
   */
  counterReset?: Token<CSS.Property.CounterReset>
  /**
   * ### counter-set
   *
   * The <code>counter-set</code> CSS property creates (and optionally sets a value for) a counter, the numbers for a series of headings or ordered list items.
   *
   * @baseline `Newly available`
   * @newly_available_date 2023-12-11
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-set
   */
  counterSet?: Token<CSS.Property.CounterSet>
  /**
   * ### cursor
   *
   * The <code>cursor</code> CSS property styles the pointer, allowing you to provide hints to the user on how to interact with the hovered element.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/cursor
   */
  cursor?: Token<CSS.Property.Cursor>
  /**
   * ### cx
   *
   * The SVG image format, represented by the <code>&#x3C;svg></code> element, creates two-dimensional vector graphics with declarative or scripted interaction and animation.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/cx
   */
  cx?: Token<string & {}>
  /**
   * ### cy
   *
   * The SVG image format, represented by the <code>&#x3C;svg></code> element, creates two-dimensional vector graphics with declarative or scripted interaction and animation.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/cy
   */
  cy?: Token<string & {}>
  /**
   * ### d
   *
   * The SVG image format, represented by the <code>&#x3C;svg></code> element, creates two-dimensional vector graphics with declarative or scripted interaction and animation.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/d
   */
  d?: Token<string & {}>
  /**
   * ### direction
   *
   * The <code>unicode-bidi</code> and <code>direction</code> CSS properties override the Unicode layout algorithm. They are intended for Document Type Definition (DTD) designers. For HTML documents, you should use the <code>dir</code> global HTML attribute and <code>&#x3C;bdo></code> HTML element instead.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/direction
   */
  direction?: Token<CSS.Property.Direction>
  /**
   * ### display
   *
   * The <code>display</code> CSS property sets the display behavior of an element's box within its layout and sets the layout behavior for its child elements.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/display
   */
  display?: Token<CSS.Property.Display>
  /**
   * ### dominant-baseline
   *
   * The <code>dominant-baseline</code> CSS property sets the specific baseline used to align an elements's text and inline-level contents.
   *
   * @baseline `Widely available`
   * @widely_available_date ≤2022-09-24
   * @newly_available_date ≤2020-03-24
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/dominant-baseline
   */
  dominantBaseline?: Token<CSS.Property.DominantBaseline>
  /**
   * ### dynamic-range-limit
   *
   * The CSS `dynamic-range-limit` property.
   *
   * @see https://drafts.csswg.org/css-color-hdr/#the-dynamic-range-limit-property
   *
   * @experimental
   */
  dynamicRangeLimit?: Token<string & {}>
  /**
   * ### empty-cells
   *
   * The <code>&#x3C;table></code> HTML element, with several related elements, represents tabular data in rows and columns of cells.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/empty-cells
   */
  emptyCells?: Token<CSS.Property.EmptyCells>
  /**
   * ### field-sizing
   *
   * The <code>field-sizing</code> CSS property allows form controls such as <code>&#x3C;textarea></code> to be sized based on their content.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/field-sizing
   *
   * @experimental
   */
  fieldSizing?: Token<string & {}>
  /**
   * ### fill
   *
   * The SVG image format, represented by the <code>&#x3C;svg></code> element, creates two-dimensional vector graphics with declarative or scripted interaction and animation.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/fill
   */
  fill?: Token<CSS.Property.Fill, "colors">
  /**
   * ### fill-opacity
   *
   * The <code>fill-opacity</code>, and <code>stroke-opacity</code> SVG attributes and CSS properties control the transparency of a stroke or fill of an SVG element.
   *
   * @baseline `Widely available`
   * @widely_available_date ≤2022-09-24
   * @newly_available_date ≤2020-03-24
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/fill-opacity
   */
  fillOpacity?: Token<CSS.Property.FillOpacity>
  /**
   * ### fill-rule
   *
   * The SVG image format, represented by the <code>&#x3C;svg></code> element, creates two-dimensional vector graphics with declarative or scripted interaction and animation.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/fill-rule
   */
  fillRule?: Token<CSS.Property.FillRule>
  /**
   * ### filter
   *
   * The <code>filter</code> CSS property applies one or more graphic effects to an element. You can use filter functions, such as <code>blur()</code> and <code>drop-shadow()</code>, alone or combined to produce different effects.
   *
   * @baseline `Widely available`
   * @widely_available_date 2019-03-07
   * @newly_available_date 2016-09-07
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/filter
   */
  filter?: Token<CSS.Property.Filter>
  /**
   * ### flex
   *
   * Flexbox is a one-dimensional layout system, which places content either horizontally or vertically, with optional wrapping.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-03-30
   * @newly_available_date 2015-09-30
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex
   */
  flex?: Token<CSS.Property.Flex>
  /**
   * ### flex-basis
   *
   * Flexbox is a one-dimensional layout system, which places content either horizontally or vertically, with optional wrapping.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-03-30
   * @newly_available_date 2015-09-30
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-basis
   */
  flexBasis?: Token<CSS.Property.FlexBasis | number, "sizes">
  /**
   * ### flex-direction
   *
   * Flexbox is a one-dimensional layout system, which places content either horizontally or vertically, with optional wrapping.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-03-30
   * @newly_available_date 2015-09-30
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-direction
   */
  flexDir?: Token<CSS.Property.FlexDirection>
  /**
   * ### flex-direction
   *
   * Flexbox is a one-dimensional layout system, which places content either horizontally or vertically, with optional wrapping.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-03-30
   * @newly_available_date 2015-09-30
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-direction
   */
  flexDirection?: Token<CSS.Property.FlexDirection>
  /**
   * ### flex-flow
   *
   * Flexbox is a one-dimensional layout system, which places content either horizontally or vertically, with optional wrapping.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-03-30
   * @newly_available_date 2015-09-30
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-flow
   */
  flexFlow?: Token<CSS.Property.FlexFlow>
  /**
   * ### flex-grow
   *
   * Flexbox is a one-dimensional layout system, which places content either horizontally or vertically, with optional wrapping.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-03-30
   * @newly_available_date 2015-09-30
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-grow
   */
  flexGrow?: Token<CSS.Property.FlexGrow>
  /**
   * ### flex-shrink
   *
   * Flexbox is a one-dimensional layout system, which places content either horizontally or vertically, with optional wrapping.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-03-30
   * @newly_available_date 2015-09-30
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-shrink
   */
  flexShrink?: Token<CSS.Property.FlexShrink>
  /**
   * ### flex-wrap
   *
   * Flexbox is a one-dimensional layout system, which places content either horizontally or vertically, with optional wrapping.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-03-30
   * @newly_available_date 2015-09-30
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-wrap
   */
  flexWrap?: Token<CSS.Property.FlexWrap>
  /**
   * ### float
   *
   * The <code>float</code> CSS property aligns an element to either side of its container, allowing text and inline elements to flow around it. The <code>clear</code> CSS property sets whether an element is moved below floating elements that proceed it.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/float
   */
  float?: Token<CSS.Property.Float>
  /**
   * ### flood-color
   *
   * The <code>&#x3C;filter></code> SVG element applies custom effects such as color manipulation, blurring, or morphing to SVG elements.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flood-color
   */
  floodColor?: Token<CSS.Property.FloodColor, "colors">
  /**
   * ### flood-opacity
   *
   * The <code>&#x3C;filter></code> SVG element applies custom effects such as color manipulation, blurring, or morphing to SVG elements.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flood-opacity
   */
  floodOpacity?: Token<CSS.Property.FloodOpacity>
  /**
   * ### font
   *
   * The <code>font</code> CSS property shorthand sets multiple font properties, including style, weight, size, and font family.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font
   */
  font?: Token<CSS.Property.Font>
  /**
   * ### font-family
   *
   * The <code>font-family</code> CSS property sets the desired font face for text, along with optional fallback font faces.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-family
   */
  fontFamily?: Token<CSS.Property.FontFamily, "fonts">
  /**
   * ### font-feature-settings
   *
   * The <code>font-feature-settings</code> CSS property sets low-level OpenType feature tags for a font. When possible, use <code>font-variant</code> instead.
   *
   * @baseline `Widely available`
   * @widely_available_date 2019-10-05
   * @newly_available_date 2017-04-05
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-feature-settings
   */
  fontFeatureSettings?: Token<CSS.Property.FontFeatureSettings>
  /**
   * ### font-kerning
   *
   * The <code>font-kerning</code> CSS property sets whether kerning data from a font is used to adjust the space between letters.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-kerning
   */
  fontKerning?: Token<CSS.Property.FontKerning>
  /**
   * ### font-language-override
   *
   * The <code>font-language-override</code> CSS property sets which language-specific glyphs are displayed.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-language-override
   */
  fontLanguageOverride?: Token<CSS.Property.FontLanguageOverride>
  /**
   * ### font-optical-sizing
   *
   * The <code>font-optical-sizing</code> CSS property sets whether text rendering is optimized for viewing at different sizes.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-09-24
   * @newly_available_date 2020-03-24
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-optical-sizing
   */
  fontOpticalSizing?: Token<CSS.Property.FontOpticalSizing>
  /**
   * ### font-palette
   *
   * The <code>font-palette</code> CSS property selects a color palette from the font, optionally overriding individual colors in the <code>@font-palette-values</code> at-rule.
   *
   * @baseline `Newly available`
   * @newly_available_date 2022-11-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-palette
   */
  fontPalette?: Token<CSS.Property.FontPalette>
  /**
   * ### font-size
   *
   * The <code>font-size</code> CSS property sets the text height.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size
   */
  fontSize?: Token<CSS.Property.FontSize | number, "fontSizes">
  /**
   * ### font-size-adjust
   *
   * The <code>font-size-adjust</code> CSS property preserves apparent text size, regardless of the font used, by scaling fonts to the same size with respect to a specific metric, such as x-height. This can help make fallback fonts look the same size.
   *
   * @baseline `Newly available`
   * @newly_available_date 2024-07-25
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size-adjust
   */
  fontSizeAdjust?: Token<CSS.Property.FontSizeAdjust>
  /**
   * ### font-smooth
   *
   * The CSS `font-smooth` property.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-smooth
   */
  fontSmooth?: Token<CSS.Property.FontSmooth>
  /**
   * ### font-stretch
   *
   * The <code>font-stretch</code> CSS property selects a font face from a font family based on width, either by a keyword such as <code>condensed</code> or a percentage.
   *
   * @baseline `Widely available`
   * @widely_available_date 2020-03-19
   * @newly_available_date 2017-09-19
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-stretch
   */
  fontStretch?: Token<CSS.Property.FontStretch>
  /**
   * ### font-style
   *
   * The <code>font-style</code> CSS property sets the text style, with <code>normal</code>, <code>italic</code>, and <code>oblique</code> options.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-style
   */
  fontStyle?: Token<CSS.Property.FontStyle>
  /**
   * ### font-synthesis
   *
   * The <code>font-synthesis</code> CSS shorthand property disables all font synthesis except the given kinds. To disable a specific kind of font synthesis, instead use the longhand properties such as <code>font-synthesis-style</code> and <code>font-synthesis-weight</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-07-06
   * @newly_available_date 2022-01-06
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-synthesis
   */
  fontSynthesis?: Token<CSS.Property.FontSynthesis>
  /**
   * ### font-synthesis-position
   *
   * The <code>font-synthesis-position</code> CSS property sets whether or not the browser should synthesize subscript and superscript typefaces when they're missing from the font.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-synthesis-position
   *
   * @experimental
   */
  fontSynthesisPosition?: Token<CSS.Property.FontSynthesisPosition>
  /**
   * ### font-synthesis-small-caps
   *
   * The <code>font-synthesis-small-caps</code> CSS property sets whether or not the browser should synthesize small caps typefaces when they're missing from the font.
   *
   * @baseline `Newly available`
   * @newly_available_date 2023-03-27
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-synthesis-small-caps
   */
  fontSynthesisSmallCaps?: Token<CSS.Property.FontSynthesisSmallCaps>
  /**
   * ### font-synthesis-style
   *
   * The <code>font-synthesis-style</code> CSS property sets whether or not the browser should synthesize italic and oblique typefaces when they're missing from the font.
   *
   * @baseline `Newly available`
   * @newly_available_date 2023-03-27
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-synthesis-style
   */
  fontSynthesisStyle?: Token<CSS.Property.FontSynthesisStyle>
  /**
   * ### font-synthesis-weight
   *
   * The <code>font-synthesis-weight</code> CSS property sets whether or not the browser should synthesize bold typefaces when they're missing from the font.
   *
   * @baseline `Newly available`
   * @newly_available_date 2023-03-27
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-synthesis-weight
   */
  fontSynthesisWeight?: Token<CSS.Property.FontSynthesisWeight>
  /**
   * ### font-variant
   *
   * The <code>font-variant</code> CSS property is a shorthand for <code>font-variant-alternates</code>, <code>font-variant-caps</code>, <code>font-variant-east-asian</code>, <code>font-variant-emoji</code>, <code>font-variant-ligatures</code>, <code>font-variant-numeric</code>, and <code>font-variant-position</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant
   */
  fontVariant?: Token<CSS.Property.FontVariant>
  /**
   * ### font-variant-alternates
   *
   * The <code>font-variant-alternates</code> CSS property, along with the <code>@font-feature-values</code> at-rule, chooses when to use a font's alternate glyphs.
   *
   * @baseline `Newly available`
   * @newly_available_date 2023-03-13
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-alternates
   */
  fontVariantAlternates?: Token<CSS.Property.FontVariantAlternates>
  /**
   * ### font-variant-caps
   *
   * The <code>font-variant-caps</code> CSS property sets whether text should be displayed in small caps, petite caps, or with capital letters designed for titles.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-caps
   */
  fontVariantCaps?: Token<CSS.Property.FontVariantCaps>
  /**
   * ### font-variant-east-asian
   *
   * The <code>font-variant-east-asian</code> CSS property controls glyph substitution and sizing in East Asian text.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian
   */
  fontVariantEastAsian?: Token<CSS.Property.FontVariantEastAsian>
  /**
   * ### font-variant-emoji
   *
   * The <code>font-variant-emoji</code> CSS property sets the default presentation for emoji characters.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-emoji
   */
  fontVariantEmoji?: Token<CSS.Property.FontVariantEmoji>
  /**
   * ### font-variant-ligatures
   *
   * The <code>font-variant-ligatures</code> CSS property sets how characters can be visually combined for readability or stylistic reasons.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures
   */
  fontVariantLigatures?: Token<CSS.Property.FontVariantLigatures>
  /**
   * ### font-variant-numeric
   *
   * The <code>font-variant-numeric</code> CSS property sets how numeric characters are displayed. For example, you can align columns of numbers or use zeroes that have a slash.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric
   */
  fontVariantNumeric?: Token<CSS.Property.FontVariantNumeric>
  /**
   * ### font-variant-position
   *
   * The <code>font-variant-position</code> CSS property sets whether to use alternate glyphs for subscript and superscript text.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-position
   */
  fontVariantPosition?: Token<CSS.Property.FontVariantPosition>
  /**
   * ### font-variation-settings
   *
   * The <code>font-variation-settings</code> CSS property sets an "axis of variability" on a variable font, such as weight, optical size, or a custom axis defined by the typeface designer. When possible, use other CSS font properties, such as <code>font-weight: bold</code>. Also known as variable fonts.
   *
   * @baseline `Widely available`
   * @widely_available_date 2021-03-05
   * @newly_available_date 2018-09-05
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variation-settings
   */
  fontVariationSettings?: Token<CSS.Property.FontVariationSettings>
  /**
   * ### font-weight
   *
   * The <code>font-weight</code> CSS property controls the thickness of a font. It is set explicitly with the keyword <code>bold</code> or a number, or relative to the inherited thickness with the keywords <code>bolder</code> or <code>lighter</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-weight
   */
  fontWeight?: Token<CSS.Property.FontWeight, "fontWeights">
  /**
   * ### forced-color-adjust
   *
   * The <code>forced-colors</code> CSS @media rule detects when a user has chosen to use a forced colors mode, also known as high-contrast mode, and the <code>forced-color-adjust</code> CSS property sets whether forced colors apply to an element.
   *
   * @baseline `Newly available`
   * @newly_available_date 2022-09-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/forced-color-adjust
   */
  forcedColorAdjust?: Token<CSS.Property.ForcedColorAdjust>
  /**
   * ### gap
   *
   * CSS grid is a two-dimensional layout system, which lays content out in rows and columns.
   *
   * @baseline `Widely available`
   * @widely_available_date 2020-04-17
   * @newly_available_date 2017-10-17
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/gap
   */
  g?: Token<CSS.Property.Gap | number, "spaces">
  /**
   * ### gap
   *
   * CSS grid is a two-dimensional layout system, which lays content out in rows and columns.
   *
   * @baseline `Widely available`
   * @widely_available_date 2020-04-17
   * @newly_available_date 2017-10-17
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/gap
   */
  gap?: Token<CSS.Property.Gap | number, "spaces">
  /**
   * ### column-gap
   *
   * Multi-column layout flows an element's content across one or more columns in a single row, without affecting the <code>display</code> property of its children.
   *
   * @baseline `Widely available`
   * @widely_available_date 2019-09-07
   * @newly_available_date 2017-03-07
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-gap
   */
  gapX?: Token<CSS.Property.ColumnGap | number, "spaces">
  /**
   * ### row-gap
   *
   * CSS grid is a two-dimensional layout system, which lays content out in rows and columns.
   *
   * @baseline `Widely available`
   * @widely_available_date 2020-04-17
   * @newly_available_date 2017-10-17
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/row-gap
   */
  gapY?: Token<CSS.Property.RowGap | number, "spaces">
  /**
   * ### glyph-orientation-horizontal
   *
   * The SVG 1.1 image format has several components that were excluded from SVG 2, such as fonts, alternate glyphs, and the <code>xlink</code> namespace.
   *
   *
   * @see https://developer.mozilla.org/docs/Web/SVG/Attribute/glyph-orientation-horizontal
   *
   * @deprecated
   */
  glyphOrientationHorizontal?: Token<string & {}>
  /**
   * ### glyph-orientation-vertical
   *
   * The <code>glyph-orientation-vertical</code> CSS property sets the orientation of glyphs in text rendered in a vertical writing mode.
   *
   *
   * @see https://drafts.csswg.org/css-writing-modes-4/#glyph-orientation
   *
   * @deprecated
   */
  glyphOrientationVertical?: Token<CSS.Property.GlyphOrientationVertical>
  /**
   * ### grid
   *
   * CSS grid is a two-dimensional layout system, which lays content out in rows and columns.
   *
   * @baseline `Widely available`
   * @widely_available_date 2020-04-17
   * @newly_available_date 2017-10-17
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid
   */
  grid?: Token<CSS.Property.Grid>
  /**
   * ### grid-area
   *
   * CSS grid is a two-dimensional layout system, which lays content out in rows and columns.
   *
   * @baseline `Widely available`
   * @widely_available_date 2020-04-17
   * @newly_available_date 2017-10-17
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-area
   */
  gridArea?: Token<CSS.Property.GridArea>
  /**
   * ### grid-auto-columns
   *
   * CSS grid is a two-dimensional layout system, which lays content out in rows and columns.
   *
   * @baseline `Widely available`
   * @widely_available_date 2020-04-17
   * @newly_available_date 2017-10-17
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns
   */
  gridAutoColumns?: Token<CSS.Property.GridAutoColumns | number, "sizes">
  /**
   * ### grid-auto-flow
   *
   * CSS grid is a two-dimensional layout system, which lays content out in rows and columns.
   *
   * @baseline `Widely available`
   * @widely_available_date 2020-04-17
   * @newly_available_date 2017-10-17
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow
   */
  gridAutoFlow?: Token<CSS.Property.GridAutoFlow>
  /**
   * ### grid-auto-rows
   *
   * CSS grid is a two-dimensional layout system, which lays content out in rows and columns.
   *
   * @baseline `Widely available`
   * @widely_available_date 2020-04-17
   * @newly_available_date 2017-10-17
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows
   */
  gridAutoRows?: Token<CSS.Property.GridAutoRows | number, "sizes">
  /**
   * ### grid-column
   *
   * CSS grid is a two-dimensional layout system, which lays content out in rows and columns.
   *
   * @baseline `Widely available`
   * @widely_available_date 2020-04-17
   * @newly_available_date 2017-10-17
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column
   */
  gridColumn?: Token<CSS.Property.GridColumn>
  /**
   * ### grid-column-end
   *
   * CSS grid is a two-dimensional layout system, which lays content out in rows and columns.
   *
   * @baseline `Widely available`
   * @widely_available_date 2020-04-17
   * @newly_available_date 2017-10-17
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-end
   */
  gridColumnEnd?: Token<CSS.Property.GridColumnEnd>
  /**
   * ### grid-column-start
   *
   * CSS grid is a two-dimensional layout system, which lays content out in rows and columns.
   *
   * @baseline `Widely available`
   * @widely_available_date 2020-04-17
   * @newly_available_date 2017-10-17
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-start
   */
  gridColumnStart?: Token<CSS.Property.GridColumnStart>
  /**
   * ### grid-row
   *
   * CSS grid is a two-dimensional layout system, which lays content out in rows and columns.
   *
   * @baseline `Widely available`
   * @widely_available_date 2020-04-17
   * @newly_available_date 2017-10-17
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row
   */
  gridRow?: Token<CSS.Property.GridRow>
  /**
   * ### grid-row-end
   *
   * CSS grid is a two-dimensional layout system, which lays content out in rows and columns.
   *
   * @baseline `Widely available`
   * @widely_available_date 2020-04-17
   * @newly_available_date 2017-10-17
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-end
   */
  gridRowEnd?: Token<CSS.Property.GridRowEnd>
  /**
   * ### grid-row-start
   *
   * CSS grid is a two-dimensional layout system, which lays content out in rows and columns.
   *
   * @baseline `Widely available`
   * @widely_available_date 2020-04-17
   * @newly_available_date 2017-10-17
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-start
   */
  gridRowStart?: Token<CSS.Property.GridRowStart>
  /**
   * ### grid-template
   *
   * CSS grid is a two-dimensional layout system, which lays content out in rows and columns.
   *
   * @baseline `Widely available`
   * @widely_available_date 2020-04-17
   * @newly_available_date 2017-10-17
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template
   */
  gridTemplate?: Token<CSS.Property.GridTemplate>
  /**
   * ### grid-template-areas
   *
   * CSS grid is a two-dimensional layout system, which lays content out in rows and columns.
   *
   * @baseline `Widely available`
   * @widely_available_date 2020-04-17
   * @newly_available_date 2017-10-17
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-areas
   */
  gridTemplateAreas?: Token<CSS.Property.GridTemplateAreas>
  /**
   * ### grid-template-columns
   *
   * CSS grid is a two-dimensional layout system, which lays content out in rows and columns.
   *
   * @baseline `Widely available`
   * @widely_available_date 2020-04-17
   * @newly_available_date 2017-10-17
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-columns
   */
  gridTemplateColumns?: Token<
    CSS.Property.GridTemplateColumns | number,
    "sizes"
  >
  /**
   * ### grid-template-rows
   *
   * CSS grid is a two-dimensional layout system, which lays content out in rows and columns.
   *
   * @baseline `Widely available`
   * @widely_available_date 2020-04-17
   * @newly_available_date 2017-10-17
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-rows
   */
  gridTemplateRows?: Token<CSS.Property.GridTemplateRows | number, "sizes">
  /**
   * ### column-gap
   *
   * Multi-column layout flows an element's content across one or more columns in a single row, without affecting the <code>display</code> property of its children.
   *
   * @baseline `Widely available`
   * @widely_available_date 2019-09-07
   * @newly_available_date 2017-03-07
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-gap
   */
  gx?: Token<CSS.Property.ColumnGap | number, "spaces">
  /**
   * ### row-gap
   *
   * CSS grid is a two-dimensional layout system, which lays content out in rows and columns.
   *
   * @baseline `Widely available`
   * @widely_available_date 2020-04-17
   * @newly_available_date 2017-10-17
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/row-gap
   */
  gy?: Token<CSS.Property.RowGap | number, "spaces">
  /**
   * ### height
   *
   * The <code>width</code> and <code>height</code> CSS properties set the preferred physical size of an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/height
   */
  h?: Token<CSS.Property.Height | number, "sizes">
  /**
   * ### hanging-punctuation
   *
   * The <code>hanging-punctuation</code> CSS property puts punctuation characters outside of the box to align the text with the rest of the document.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/hanging-punctuation
   */
  hangingPunctuation?: Token<CSS.Property.HangingPunctuation>
  /**
   * ### height
   *
   * The <code>width</code> and <code>height</code> CSS properties set the preferred physical size of an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/height
   */
  height?: Token<CSS.Property.Height | number, "sizes">
  /**
   * ### hyphenate-character
   *
   * The <code>hyphenate-character</code> CSS property sets the character or string to use at the end of a line before a line break.
   *
   * @baseline `Newly available`
   * @newly_available_date 2023-09-18
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/hyphenate-character
   */
  hyphenateCharacter?: Token<CSS.Property.HyphenateCharacter>
  /**
   * ### hyphenate-limit-chars
   *
   * The <code>hyphenate-limit-chars</code> CSS property sets the number of characters in a word before it is hyphenated and the minimum number of characters on either side of the hyphen.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/hyphenate-limit-chars
   */
  hyphenateLimitChars?: Token<CSS.Property.HyphenateLimitChars>
  /**
   * ### hyphens
   *
   * The <code>hyphens</code> CSS property controls when long words are broken by line wrapping. Although called <code>hyphens</code>, the property applies to word-splitting behavior across languages, such as customary spelling changes or the use of other characters. Support for non-English languages varies significantly.
   *
   * @baseline `Newly available`
   * @newly_available_date 2023-09-18
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/hyphens
   */
  hyphens?: Token<CSS.Property.Hyphens>
  /**
   * ### image-orientation
   *
   * The <code>image-orientation</code> CSS property corrects the rotation of an image using the image's metadata, such as EXIF.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-10-13
   * @newly_available_date 2020-04-13
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/image-orientation
   */
  imageOrientation?: Token<CSS.Property.ImageOrientation>
  /**
   * ### image-rendering
   *
   * The <code>image-rendering</code> CSS property sets how images are scaled, retaining smoothness for photos, or hard edges for pixel art and QR codes.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-04-05
   * @newly_available_date 2021-10-05
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/image-rendering
   */
  imageRendering?: Token<CSS.Property.ImageRendering>
  /**
   * ### ime-mode
   *
   * The <code>ime-mode</code> CSS property sets the state of the input method editor for text fields.
   *
   *
   * @see https://drafts.csswg.org/css-ui/#input-method-editor
   *
   * @deprecated
   */
  imeMode?: Token<CSS.Property.ImeMode>
  /**
   * ### initial-letter
   *
   * The <code>initial-letter</code> CSS property sets the number of lines the first letter of an element occupies. You can use the property to make a raised capital or drop cap.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/initial-letter
   */
  initialLetter?: Token<CSS.Property.InitialLetter>
  /**
   * ### inline-size
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inline-size
   */
  inlineSize?: Token<CSS.Property.InlineSize | number, "sizes">
  /**
   * ### inset
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset
   */
  inset?: Token<CSS.Property.Inset | number, "spaces">
  /**
   * ### inset-block
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-block
   */
  insetBlock?: Token<CSS.Property.InsetBlock | number, "spaces">
  /**
   * ### inset-block-end
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-block-end
   */
  insetBlockEnd?: Token<CSS.Property.InsetBlockEnd | number, "spaces">
  /**
   * ### inset-block-start
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-block-start
   */
  insetBlockStart?: Token<CSS.Property.InsetBlockStart | number, "spaces">
  /**
   * ### inset-inline-end
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-inline-end
   */
  insetEnd?: Token<CSS.Property.InsetInlineEnd | number, "spaces">
  /**
   * ### inset-inline
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-inline
   */
  insetInline?: Token<CSS.Property.InsetInline | number, "spaces">
  /**
   * ### inset-inline-end
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-inline-end
   */
  insetInlineEnd?: Token<CSS.Property.InsetInlineEnd | number, "spaces">
  /**
   * ### inset-inline-start
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-inline-start
   */
  insetInlineStart?: Token<CSS.Property.InsetInlineStart | number, "spaces">
  /**
   * ### inset-inline-start
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-inline-start
   */
  insetStart?: Token<CSS.Property.InsetInlineStart | number, "spaces">
  /**
   * ### interpolate-size
   *
   * The <code>interpolate-size</code> CSS property sets whether animations and transitions interpolate between a numeric value and a keyword value, such as from a fixed length to <code>auto</code> or <code>fit-content</code>.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/interpolate-size
   *
   * @experimental
   */
  interpolateSize?: Token<string & {}>
  /**
   * ### isolation
   *
   * The <code>isolation</code> CSS property creates a new stacking context, which impacts <code>z-index</code> ordering and blend modes.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/isolation
   */
  isolation?: Token<CSS.Property.Isolation>
  /**
   * ### justify-content
   *
   * Flexbox is a one-dimensional layout system, which places content either horizontally or vertically, with optional wrapping.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-03-30
   * @newly_available_date 2015-09-30
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-content
   */
  justifyContent?: Token<CSS.Property.JustifyContent>
  /**
   * ### justify-items
   *
   * Flexbox is a one-dimensional layout system, which places content either horizontally or vertically, with optional wrapping.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-03-30
   * @newly_available_date 2015-09-30
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-items
   */
  justifyItems?: Token<CSS.Property.JustifyItems>
  /**
   * ### justify-self
   *
   * CSS grid is a two-dimensional layout system, which lays content out in rows and columns.
   *
   * @baseline `Widely available`
   * @widely_available_date 2020-04-17
   * @newly_available_date 2017-10-17
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-self
   */
  justifySelf?: Token<CSS.Property.JustifySelf>
  /**
   * ### line-height
   *
   * The <code>line-height</code> CSS property sets the spacing between text baselines, oriented to the horizontal or vertical writing mode.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/line-height
   */
  leading?: Token<CSS.Property.LineHeight, "lineHeights">
  /**
   * ### left
   *
   * The physical CSS properties, <code>top</code>, <code>right</code>, <code>bottom</code>, and <code>left</code>, set the inset position of an element relative to the corresponding side of a container determined by the element's <code>position</code> property.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/left
   */
  left?: Token<CSS.Property.Left | number, "spaces">
  /**
   * ### letter-spacing
   *
   * The <code>letter-spacing</code> CSS property controls the amount of space between each letter in an element or block of text.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/letter-spacing
   */
  letterSpacing?: Token<CSS.Property.LetterSpacing, "letterSpacings">
  /**
   * ### lighting-color
   *
   * The <code>&#x3C;filter></code> SVG element applies custom effects such as color manipulation, blurring, or morphing to SVG elements.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/lighting-color
   */
  lightingColor?: Token<CSS.Property.LightingColor, "colors">
  /**
   * ### line-break
   *
   * The <code>line-break</code> CSS property sets how strictly to apply rules for wrapping text to new lines, especially for symbols and punctuation.
   *
   * @baseline `Widely available`
   * @widely_available_date 2023-01-28
   * @newly_available_date 2020-07-28
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/line-break
   */
  lineBreak?: Token<CSS.Property.LineBreak>
  /**
   * ### line-height
   *
   * The <code>line-height</code> CSS property sets the spacing between text baselines, oriented to the horizontal or vertical writing mode.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/line-height
   */
  lineHeight?: Token<CSS.Property.LineHeight, "lineHeights">
  /**
   * ### line-height-step
   *
   * The <code>line-height-step</code> CSS property creates consistent vertical rhythm by setting the spacing between body text baselines. It rounds taller lines like headings up to the next multiple of the body text spacing.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/line-height-step
   *
   * @experimental
   */
  lineHeightStep?: Token<CSS.Property.LineHeightStep>
  /**
   * ### list-style
   *
   * The <code>list-style</code> shorthand CSS property and the <code>list-style-image</code>, <code>list-style-position</code>, and <code>list-style-type</code> longhand properties set the position and appearance of a list item's marker.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style
   */
  listStyle?: Token<CSS.Property.ListStyle>
  /**
   * ### list-style-image
   *
   * The <code>list-style</code> shorthand CSS property and the <code>list-style-image</code>, <code>list-style-position</code>, and <code>list-style-type</code> longhand properties set the position and appearance of a list item's marker.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-image
   */
  listStyleImage?: Token<CSS.Property.ListStyleImage, "gradients">
  /**
   * ### list-style-image
   *
   * The <code>list-style</code> shorthand CSS property and the <code>list-style-image</code>, <code>list-style-position</code>, and <code>list-style-type</code> longhand properties set the position and appearance of a list item's marker.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-image
   */
  listStyleImg?: Token<CSS.Property.ListStyleImage, "gradients">
  /**
   * ### list-style-position
   *
   * The <code>list-style</code> shorthand CSS property and the <code>list-style-image</code>, <code>list-style-position</code>, and <code>list-style-type</code> longhand properties set the position and appearance of a list item's marker.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-position
   */
  listStylePos?: Token<CSS.Property.ListStylePosition>
  /**
   * ### list-style-position
   *
   * The <code>list-style</code> shorthand CSS property and the <code>list-style-image</code>, <code>list-style-position</code>, and <code>list-style-type</code> longhand properties set the position and appearance of a list item's marker.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-position
   */
  listStylePosition?: Token<CSS.Property.ListStylePosition>
  /**
   * ### list-style-type
   *
   * The <code>list-style</code> shorthand CSS property and the <code>list-style-image</code>, <code>list-style-position</code>, and <code>list-style-type</code> longhand properties set the position and appearance of a list item's marker.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-type
   */
  listStyleType?: Token<CSS.Property.ListStyleType>
  /**
   * ### margin
   *
   * The <code>margin</code> CSS property sets space around an element. It is a shorthand for <code>margin-top</code>, <code>margin-right</code>, <code>margin-bottom</code>, and <code>margin-left</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin
   */
  m?: Token<CSS.Property.Margin | number, "spaces">
  /**
   * ### margin
   *
   * The <code>margin</code> CSS property sets space around an element. It is a shorthand for <code>margin-top</code>, <code>margin-right</code>, <code>margin-bottom</code>, and <code>margin-left</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin
   */
  margin?: Token<CSS.Property.Margin | number, "spaces">
  /**
   * ### margin-block
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block
   */
  marginBlock?: Token<CSS.Property.MarginBlock | number, "spaces">
  /**
   * ### margin-block-end
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-end
   */
  marginBlockEnd?: Token<CSS.Property.MarginBlockEnd | number, "spaces">
  /**
   * ### margin-block-start
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-start
   */
  marginBlockStart?: Token<CSS.Property.MarginBlockStart | number, "spaces">
  /**
   * ### margin-bottom
   *
   * The <code>margin</code> CSS property sets space around an element. It is a shorthand for <code>margin-top</code>, <code>margin-right</code>, <code>margin-bottom</code>, and <code>margin-left</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   */
  marginBottom?: Token<CSS.Property.MarginBottom | number, "spaces">
  /**
   * ### margin-inline-end
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-end
   */
  marginEnd?: Token<CSS.Property.MarginInlineEnd | number, "spaces">
  /**
   * ### margin-inline
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline
   */
  marginInline?: Token<CSS.Property.MarginInline | number, "spaces">
  /**
   * ### margin-inline-end
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-end
   */
  marginInlineEnd?: Token<CSS.Property.MarginInlineEnd | number, "spaces">
  /**
   * ### margin-inline-start
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-start
   */
  marginInlineStart?: Token<CSS.Property.MarginInlineStart | number, "spaces">
  /**
   * ### margin-left
   *
   * The <code>margin</code> CSS property sets space around an element. It is a shorthand for <code>margin-top</code>, <code>margin-right</code>, <code>margin-bottom</code>, and <code>margin-left</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
   */
  marginLeft?: Token<CSS.Property.MarginLeft | number, "spaces">
  /**
   * ### margin-right
   *
   * The <code>margin</code> CSS property sets space around an element. It is a shorthand for <code>margin-top</code>, <code>margin-right</code>, <code>margin-bottom</code>, and <code>margin-left</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
   */
  marginRight?: Token<CSS.Property.MarginRight | number, "spaces">
  /**
   * ### margin-inline-start
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-start
   */
  marginStart?: Token<CSS.Property.MarginInlineStart | number, "spaces">
  /**
   * ### margin-top
   *
   * The <code>margin</code> CSS property sets space around an element. It is a shorthand for <code>margin-top</code>, <code>margin-right</code>, <code>margin-bottom</code>, and <code>margin-left</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-top
   */
  marginTop?: Token<CSS.Property.MarginTop | number, "spaces">
  /**
   * ### margin-trim
   *
   * The <code>margin-trim</code> CSS property removes the margins of child elements when they meet the edges of the container.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-trim
   *
   * @experimental
   */
  marginTrim?: Token<CSS.Property.MarginTrim>
  /**
   * ### marker
   *
   * The SVG image format, represented by the <code>&#x3C;svg></code> element, creates two-dimensional vector graphics with declarative or scripted interaction and animation.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/marker
   */
  marker?: Token<CSS.Property.Marker>
  /**
   * ### marker-end
   *
   * The SVG image format, represented by the <code>&#x3C;svg></code> element, creates two-dimensional vector graphics with declarative or scripted interaction and animation.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/marker-end
   */
  markerEnd?: Token<CSS.Property.MarkerEnd>
  /**
   * ### marker-mid
   *
   * The SVG image format, represented by the <code>&#x3C;svg></code> element, creates two-dimensional vector graphics with declarative or scripted interaction and animation.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/marker-mid
   */
  markerMid?: Token<CSS.Property.MarkerMid>
  /**
   * ### marker-start
   *
   * The SVG image format, represented by the <code>&#x3C;svg></code> element, creates two-dimensional vector graphics with declarative or scripted interaction and animation.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/marker-start
   */
  markerStart?: Token<CSS.Property.MarkerStart>
  /**
   * ### mask
   *
   * The <code>mask</code> CSS property (and several longhand properties) partially or completely hides an element according to the shape and depth of an image.
   *
   * @baseline `Newly available`
   * @newly_available_date 2023-12-07
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask
   */
  mask?: Token<CSS.Property.Mask>
  /**
   * ### mask-border
   *
   * The <code>mask-border</code> CSS property sets how the edges of an element are masked. It is a shorthand for <code>mask-border-outset</code>, <code>mask-border-repeat</code>, <code>mask-border-slice</code>, <code>mask-border-source</code>, and <code>mask-border-width</code>.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-border
   */
  maskBorder?: Token<CSS.Property.MaskBorder>
  /**
   * ### mask-border-outset
   *
   * The <code>mask-border</code> CSS property sets how the edges of an element are masked. It is a shorthand for <code>mask-border-outset</code>, <code>mask-border-repeat</code>, <code>mask-border-slice</code>, <code>mask-border-source</code>, and <code>mask-border-width</code>.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-border-outset
   */
  maskBorderOutset?: Token<CSS.Property.MaskBorderOutset>
  /**
   * ### mask-border-repeat
   *
   * The <code>mask-border</code> CSS property sets how the edges of an element are masked. It is a shorthand for <code>mask-border-outset</code>, <code>mask-border-repeat</code>, <code>mask-border-slice</code>, <code>mask-border-source</code>, and <code>mask-border-width</code>.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-border-repeat
   */
  maskBorderRepeat?: Token<CSS.Property.MaskBorderRepeat>
  /**
   * ### mask-border-slice
   *
   * The <code>mask-border</code> CSS property sets how the edges of an element are masked. It is a shorthand for <code>mask-border-outset</code>, <code>mask-border-repeat</code>, <code>mask-border-slice</code>, <code>mask-border-source</code>, and <code>mask-border-width</code>.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-border-slice
   */
  maskBorderSlice?: Token<CSS.Property.MaskBorderSlice>
  /**
   * ### mask-border-source
   *
   * The <code>mask-border</code> CSS property sets how the edges of an element are masked. It is a shorthand for <code>mask-border-outset</code>, <code>mask-border-repeat</code>, <code>mask-border-slice</code>, <code>mask-border-source</code>, and <code>mask-border-width</code>.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-border-source
   */
  maskBorderSource?: Token<CSS.Property.MaskBorderSource>
  /**
   * ### mask-border-width
   *
   * The <code>mask-border</code> CSS property sets how the edges of an element are masked. It is a shorthand for <code>mask-border-outset</code>, <code>mask-border-repeat</code>, <code>mask-border-slice</code>, <code>mask-border-source</code>, and <code>mask-border-width</code>.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-border-width
   */
  maskBorderWidth?: Token<CSS.Property.MaskBorderWidth | number>
  /**
   * ### mask-clip
   *
   * The <code>mask</code> CSS property (and several longhand properties) partially or completely hides an element according to the shape and depth of an image.
   *
   * @baseline `Newly available`
   * @newly_available_date 2023-12-07
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-clip
   */
  maskClip?: Token<CSS.Property.MaskClip>
  /**
   * ### mask-composite
   *
   * The <code>mask</code> CSS property (and several longhand properties) partially or completely hides an element according to the shape and depth of an image.
   *
   * @baseline `Newly available`
   * @newly_available_date 2023-12-07
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-composite
   */
  maskComposite?: Token<CSS.Property.MaskComposite>
  /**
   * ### mask-image
   *
   * The <code>mask</code> CSS property (and several longhand properties) partially or completely hides an element according to the shape and depth of an image.
   *
   * @baseline `Newly available`
   * @newly_available_date 2023-12-07
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-image
   */
  maskImage?: Token<CSS.Property.MaskImage, "gradients">
  /**
   * ### mask-mode
   *
   * The <code>mask</code> CSS property (and several longhand properties) partially or completely hides an element according to the shape and depth of an image.
   *
   * @baseline `Newly available`
   * @newly_available_date 2023-12-07
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-mode
   */
  maskMode?: Token<CSS.Property.MaskMode>
  /**
   * ### mask-origin
   *
   * The <code>mask</code> CSS property (and several longhand properties) partially or completely hides an element according to the shape and depth of an image.
   *
   * @baseline `Newly available`
   * @newly_available_date 2023-12-07
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-origin
   */
  maskOrigin?: Token<CSS.Property.MaskOrigin>
  /**
   * ### mask-position
   *
   * The <code>mask</code> CSS property (and several longhand properties) partially or completely hides an element according to the shape and depth of an image.
   *
   * @baseline `Newly available`
   * @newly_available_date 2023-12-07
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-position
   */
  maskPosition?: Token<CSS.Property.MaskPosition>
  /**
   * ### mask-repeat
   *
   * The <code>mask</code> CSS property (and several longhand properties) partially or completely hides an element according to the shape and depth of an image.
   *
   * @baseline `Newly available`
   * @newly_available_date 2023-12-07
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-repeat
   */
  maskRepeat?: Token<CSS.Property.MaskRepeat>
  /**
   * ### mask-size
   *
   * The <code>mask</code> CSS property (and several longhand properties) partially or completely hides an element according to the shape and depth of an image.
   *
   * @baseline `Newly available`
   * @newly_available_date 2023-12-07
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-size
   */
  maskSize?: Token<CSS.Property.MaskSize>
  /**
   * ### mask-type
   *
   * The <code>mask-type</code> CSS property on an SVG <code>&#x3C;mask></code> element sets whether the mask is a <code>luminance</code> or <code>alpha</code> mask.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-type
   */
  maskType?: Token<CSS.Property.MaskType>
  /**
   * ### math-depth
   *
   * MathML, or the Mathematical Markup Language, describes mathematical notation, such as expressions and formulas. Also known as MathML Core.
   *
   * @baseline `Newly available`
   * @newly_available_date 2023-01-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/math-depth
   */
  mathDepth?: Token<CSS.Property.MathDepth>
  /**
   * ### math-shift
   *
   * MathML, or the Mathematical Markup Language, describes mathematical notation, such as expressions and formulas. Also known as MathML Core.
   *
   * @baseline `Newly available`
   * @newly_available_date 2023-01-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/math-shift
   *
   * @experimental
   */
  mathShift?: Token<CSS.Property.MathShift>
  /**
   * ### math-style
   *
   * MathML, or the Mathematical Markup Language, describes mathematical notation, such as expressions and formulas. Also known as MathML Core.
   *
   * @baseline `Newly available`
   * @newly_available_date 2023-01-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/math-style
   */
  mathStyle?: Token<CSS.Property.MathStyle>
  /**
   * ### max-block-size
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-block-size
   */
  maxBlockSize?: Token<CSS.Property.MaxBlockSize | number, "sizes">
  /**
   * ### max-height
   *
   * The <code>min-width</code>, <code>min-height</code>, <code>max-width</code>, and <code>max-height</code> CSS properties set the minimum and maximum size of an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-height
   */
  maxH?: Token<CSS.Property.MaxHeight | number, "sizes">
  /**
   * ### max-height
   *
   * The <code>min-width</code>, <code>min-height</code>, <code>max-width</code>, and <code>max-height</code> CSS properties set the minimum and maximum size of an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-height
   */
  maxHeight?: Token<CSS.Property.MaxHeight | number, "sizes">
  /**
   * ### max-inline-size
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-inline-size
   */
  maxInlineSize?: Token<CSS.Property.MaxInlineSize | number, "sizes">
  /**
   * ### max-width
   *
   * The <code>min-width</code>, <code>min-height</code>, <code>max-width</code>, and <code>max-height</code> CSS properties set the minimum and maximum size of an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-width
   */
  maxW?: Token<CSS.Property.MaxWidth | number, "sizes">
  /**
   * ### max-width
   *
   * The <code>min-width</code>, <code>min-height</code>, <code>max-width</code>, and <code>max-height</code> CSS properties set the minimum and maximum size of an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-width
   */
  maxWidth?: Token<CSS.Property.MaxWidth | number, "sizes">
  /**
   * ### margin-bottom
   *
   * The <code>margin</code> CSS property sets space around an element. It is a shorthand for <code>margin-top</code>, <code>margin-right</code>, <code>margin-bottom</code>, and <code>margin-left</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   */
  mb?: Token<CSS.Property.MarginBottom | number, "spaces">
  /**
   * ### margin-inline-end
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-end
   */
  me?: Token<CSS.Property.MarginInlineEnd | number, "spaces">
  /**
   * ### min-block-size
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-block-size
   */
  minBlockSize?: Token<CSS.Property.MinBlockSize | number, "sizes">
  /**
   * ### min-height
   *
   * The <code>min-width</code>, <code>min-height</code>, <code>max-width</code>, and <code>max-height</code> CSS properties set the minimum and maximum size of an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-height
   */
  minH?: Token<CSS.Property.MinHeight | number, "sizes">
  /**
   * ### min-height
   *
   * The <code>min-width</code>, <code>min-height</code>, <code>max-width</code>, and <code>max-height</code> CSS properties set the minimum and maximum size of an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-height
   */
  minHeight?: Token<CSS.Property.MinHeight | number, "sizes">
  /**
   * ### min-inline-size
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-inline-size
   */
  minInlineSize?: Token<CSS.Property.MinInlineSize | number, "sizes">
  /**
   * ### min-width
   *
   * The <code>min-width</code>, <code>min-height</code>, <code>max-width</code>, and <code>max-height</code> CSS properties set the minimum and maximum size of an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-width
   */
  minW?: Token<CSS.Property.MinWidth | number, "sizes">
  /**
   * ### min-width
   *
   * The <code>min-width</code>, <code>min-height</code>, <code>max-width</code>, and <code>max-height</code> CSS properties set the minimum and maximum size of an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-width
   */
  minWidth?: Token<CSS.Property.MinWidth | number, "sizes">
  /**
   * ### mix-blend-mode
   *
   * The <code>mix-blend-mode</code> CSS property blends an element's content with its background or parent elements using blend modes like <code>multiply</code>, <code>difference</code>, or <code>color</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode
   */
  mixBlendMode?: Token<CSS.Property.MixBlendMode>
  /**
   * ### margin-left
   *
   * The <code>margin</code> CSS property sets space around an element. It is a shorthand for <code>margin-top</code>, <code>margin-right</code>, <code>margin-bottom</code>, and <code>margin-left</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
   */
  ml?: Token<CSS.Property.MarginLeft | number, "spaces">
  /**
   * ### margin-right
   *
   * The <code>margin</code> CSS property sets space around an element. It is a shorthand for <code>margin-top</code>, <code>margin-right</code>, <code>margin-bottom</code>, and <code>margin-left</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
   */
  mr?: Token<CSS.Property.MarginRight | number, "spaces">
  /**
   * ### margin-inline-start
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-start
   */
  ms?: Token<CSS.Property.MarginInlineStart | number, "spaces">
  /**
   * ### margin-top
   *
   * The <code>margin</code> CSS property sets space around an element. It is a shorthand for <code>margin-top</code>, <code>margin-right</code>, <code>margin-bottom</code>, and <code>margin-left</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-top
   */
  mt?: Token<CSS.Property.MarginTop | number, "spaces">
  /**
   * ### object-fit
   *
   * The <code>object-fit</code> CSS property sets how images, videos, and other replaced elements are scaled within their container.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/object-fit
   */
  objectFit?: Token<CSS.Property.ObjectFit>
  /**
   * ### object-position
   *
   * The <code>object-position</code> CSS property places images, videos, and other replaced elements within their boxes.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/object-position
   */
  objectPosition?: Token<CSS.Property.ObjectPosition>
  /**
   * ### object-view-box
   *
   * The <code>object-view-box</code> CSS property crops and zooms to an inset area of an image.
   *
   * @baseline `Limited available`
   *
   * @see https://drafts.csswg.org/css-images-5/#propdef-object-view-box
   *
   * @experimental
   */
  objectViewBox?: Token<string & {}>
  /**
   * ### offset
   *
   * The <code>offset</code> CSS property animates an element along a defined motion path.
   *
   * @baseline `Newly available`
   * @newly_available_date 2022-09-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset
   */
  offset?: Token<CSS.Property.Offset>
  /**
   * ### offset-anchor
   *
   * The <code>offset</code> CSS property animates an element along a defined motion path.
   *
   * @baseline `Newly available`
   * @newly_available_date 2022-09-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-anchor
   */
  offsetAnchor?: Token<CSS.Property.OffsetAnchor>
  /**
   * ### offset-distance
   *
   * The <code>offset</code> CSS property animates an element along a defined motion path.
   *
   * @baseline `Newly available`
   * @newly_available_date 2022-09-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-distance
   */
  offsetDistance?: Token<CSS.Property.OffsetDistance>
  /**
   * ### offset-path
   *
   * The <code>offset</code> CSS property animates an element along a defined motion path.
   *
   * @baseline `Newly available`
   * @newly_available_date 2022-09-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-path
   */
  offsetPath?: Token<CSS.Property.OffsetPath>
  /**
   * ### offset-position
   *
   * The <code>offset</code> CSS property animates an element along a defined motion path.
   *
   * @baseline `Newly available`
   * @newly_available_date 2022-09-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-position
   */
  offsetPosition?: Token<CSS.Property.OffsetPosition>
  /**
   * ### offset-rotate
   *
   * The <code>offset</code> CSS property animates an element along a defined motion path.
   *
   * @baseline `Newly available`
   * @newly_available_date 2022-09-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  offsetRotate?: Token<CSS.Property.OffsetRotate>
  /**
   * ### opacity
   *
   * The <code>opacity</code> CSS property sets the transparency of an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/opacity
   */
  opacity?: Token<CSS.Property.Opacity>
  /**
   * ### order
   *
   * Flexbox is a one-dimensional layout system, which places content either horizontally or vertically, with optional wrapping.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-03-30
   * @newly_available_date 2015-09-30
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/order
   */
  order?: Token<CSS.Property.Order>
  /**
   * ### orphans
   *
   * The <code>widows</code> and <code>orphans</code> CSS properties set the minimum lines included in a text fragment created by page, column, or region breaks.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/orphans
   */
  orphans?: Token<CSS.Property.Orphans>
  /**
   * ### outline-color
   *
   * The <code>outline-color</code>, <code>outline-style</code>, and <code>outline-width</code> and <code>outline-offset</code> CSS properties style a line around an element, outside of the border.
   *
   * @baseline `Widely available`
   * @widely_available_date 2019-10-05
   * @newly_available_date 2017-04-05
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-color
   */
  outlineColor?: Token<CSS.Property.OutlineColor, "colors">
  /**
   * ### outline-offset
   *
   * The <code>outline-color</code>, <code>outline-style</code>, and <code>outline-width</code> and <code>outline-offset</code> CSS properties style a line around an element, outside of the border.
   *
   * @baseline `Widely available`
   * @widely_available_date 2019-10-05
   * @newly_available_date 2017-04-05
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-offset
   */
  outlineOffset?: Token<CSS.Property.OutlineOffset>
  /**
   * ### outline-style
   *
   * The <code>outline-color</code>, <code>outline-style</code>, and <code>outline-width</code> and <code>outline-offset</code> CSS properties style a line around an element, outside of the border.
   *
   * @baseline `Widely available`
   * @widely_available_date 2019-10-05
   * @newly_available_date 2017-04-05
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-style
   */
  outlineStyle?: Token<CSS.Property.OutlineStyle>
  /**
   * ### outline-width
   *
   * The <code>outline-color</code>, <code>outline-style</code>, and <code>outline-width</code> and <code>outline-offset</code> CSS properties style a line around an element, outside of the border.
   *
   * @baseline `Widely available`
   * @widely_available_date 2019-10-05
   * @newly_available_date 2017-04-05
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-width
   */
  outlineWidth?: Token<CSS.Property.OutlineWidth | number>
  /**
   * ### overflow
   *
   * The <code>overflow</code> CSS property sets the behavior for when content doesn't fit in an element.
   *
   * @baseline `Newly available`
   * @newly_available_date 2022-09-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow
   */
  overflow?: Token<CSS.Property.Overflow>
  /**
   * ### overflow-anchor
   *
   * The <code>overflow-anchor</code> CSS property sets an element as a possible scroll anchor, reducing unintended scrolling when document changes occur above the current scrollport. This is enabled by default where supported.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-anchor
   */
  overflowAnchor?: Token<CSS.Property.OverflowAnchor>
  /**
   * ### overflow-block
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-block
   */
  overflowBlock?: Token<CSS.Property.OverflowBlock>
  /**
   * ### overflow-clip-margin
   *
   * The <code>overflow-clip-margin</code> CSS property sets how far overflow content may appear outside the bounds of an element before it's clipped by effects such as <code>overflow: clip</code>.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-clip-margin
   */
  overflowClipMargin?: Token<CSS.Property.OverflowClipMargin>
  /**
   * ### overflow-inline
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-inline
   */
  overflowInline?: Token<CSS.Property.OverflowInline>
  /**
   * ### overflow-wrap
   *
   * The <code>overflow-wrap</code> CSS property breaks a line of text onto multiple lines inside the targeted element in an otherwise unbreakable place to prevent overflow. The legacy property is <code>word-wrap</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2021-04-02
   * @newly_available_date 2018-10-02
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  overflowWrap?: Token<CSS.Property.OverflowWrap>
  /**
   * ### overflow-x
   *
   * The <code>overflow</code> CSS property sets the behavior for when content doesn't fit in an element.
   *
   * @baseline `Newly available`
   * @newly_available_date 2022-09-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-x
   */
  overflowX?: Token<CSS.Property.OverflowX>
  /**
   * ### overflow-y
   *
   * The <code>overflow</code> CSS property sets the behavior for when content doesn't fit in an element.
   *
   * @baseline `Newly available`
   * @newly_available_date 2022-09-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-y
   */
  overflowY?: Token<CSS.Property.OverflowY>
  /**
   * ### overlay
   *
   * The <code>overlay</code> CSS property, used as an <code>allow-discrete</code> CSS transition, prevents a top layer element, such as a popover or a <code>&#x3C;dialog></code>, from being removed from the top layer before it has finished animating. You can't set the value of the <code>overlay</code> property; only use it as transition property.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overlay
   *
   * @experimental
   */
  overlay?: Token<CSS.Property.Overlay>
  /**
   * ### overscroll-behavior
   *
   * The <code>overscroll-behavior</code> CSS property disables default scrolling behaviors when the edges of a scrolling area are reached.
   *
   * @baseline `Newly available`
   * @newly_available_date 2022-09-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior
   */
  overscroll?: Token<CSS.Property.OverscrollBehavior>
  /**
   * ### overscroll-behavior
   *
   * The <code>overscroll-behavior</code> CSS property disables default scrolling behaviors when the edges of a scrolling area are reached.
   *
   * @baseline `Newly available`
   * @newly_available_date 2022-09-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior
   */
  overscrollBehavior?: Token<CSS.Property.OverscrollBehavior>
  /**
   * ### overscroll-behavior-block
   *
   * The <code>overscroll-behavior</code> CSS property disables default scrolling behaviors when the edges of a scrolling area are reached.
   *
   * @baseline `Newly available`
   * @newly_available_date 2022-09-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-block
   */
  overscrollBehaviorBlock?: Token<CSS.Property.OverscrollBehaviorBlock>
  /**
   * ### overscroll-behavior-inline
   *
   * The <code>overscroll-behavior</code> CSS property disables default scrolling behaviors when the edges of a scrolling area are reached.
   *
   * @baseline `Newly available`
   * @newly_available_date 2022-09-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-inline
   */
  overscrollBehaviorInline?: Token<CSS.Property.OverscrollBehaviorInline>
  /**
   * ### overscroll-behavior-x
   *
   * The <code>overscroll-behavior</code> CSS property disables default scrolling behaviors when the edges of a scrolling area are reached.
   *
   * @baseline `Newly available`
   * @newly_available_date 2022-09-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x
   */
  overscrollBehaviorX?: Token<CSS.Property.OverscrollBehaviorX>
  /**
   * ### overscroll-behavior-y
   *
   * The <code>overscroll-behavior</code> CSS property disables default scrolling behaviors when the edges of a scrolling area are reached.
   *
   * @baseline `Newly available`
   * @newly_available_date 2022-09-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y
   */
  overscrollBehaviorY?: Token<CSS.Property.OverscrollBehaviorY>
  /**
   * ### overscroll-behavior-x
   *
   * The <code>overscroll-behavior</code> CSS property disables default scrolling behaviors when the edges of a scrolling area are reached.
   *
   * @baseline `Newly available`
   * @newly_available_date 2022-09-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x
   */
  overscrollX?: Token<CSS.Property.OverscrollBehaviorX>
  /**
   * ### overscroll-behavior-y
   *
   * The <code>overscroll-behavior</code> CSS property disables default scrolling behaviors when the edges of a scrolling area are reached.
   *
   * @baseline `Newly available`
   * @newly_available_date 2022-09-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y
   */
  overscrollY?: Token<CSS.Property.OverscrollBehaviorY>
  /**
   * ### padding
   *
   * The <code>padding</code> CSS property sets space between an element's edge and its contents. It is a shorthand for <code>padding-top</code>, <code>padding-right</code>, <code>padding-bottom</code>, and <code>padding-left</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding
   */
  p?: Token<CSS.Property.Padding | number, "spaces">
  /**
   * ### padding
   *
   * The <code>padding</code> CSS property sets space between an element's edge and its contents. It is a shorthand for <code>padding-top</code>, <code>padding-right</code>, <code>padding-bottom</code>, and <code>padding-left</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding
   */
  padding?: Token<CSS.Property.Padding | number, "spaces">
  /**
   * ### padding-block
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block
   */
  paddingBlock?: Token<CSS.Property.PaddingBlock | number, "spaces">
  /**
   * ### padding-block-end
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-end
   */
  paddingBlockEnd?: Token<CSS.Property.PaddingBlockEnd | number, "spaces">
  /**
   * ### padding-block-start
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-start
   */
  paddingBlockStart?: Token<CSS.Property.PaddingBlockStart | number, "spaces">
  /**
   * ### padding-bottom
   *
   * The <code>padding</code> CSS property sets space between an element's edge and its contents. It is a shorthand for <code>padding-top</code>, <code>padding-right</code>, <code>padding-bottom</code>, and <code>padding-left</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   */
  paddingBottom?: Token<CSS.Property.PaddingBottom | number, "spaces">
  /**
   * ### padding-inline-end
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-end
   */
  paddingEnd?: Token<CSS.Property.PaddingInlineEnd | number, "spaces">
  /**
   * ### padding-inline
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline
   */
  paddingInline?: Token<CSS.Property.PaddingInline | number, "spaces">
  /**
   * ### padding-inline-end
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-end
   */
  paddingInlineEnd?: Token<CSS.Property.PaddingInlineEnd | number, "spaces">
  /**
   * ### padding-inline-start
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-start
   */
  paddingInlineStart?: Token<CSS.Property.PaddingInlineStart | number, "spaces">
  /**
   * ### padding-left
   *
   * The <code>padding</code> CSS property sets space between an element's edge and its contents. It is a shorthand for <code>padding-top</code>, <code>padding-right</code>, <code>padding-bottom</code>, and <code>padding-left</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
   */
  paddingLeft?: Token<CSS.Property.PaddingLeft | number, "spaces">
  /**
   * ### padding-right
   *
   * The <code>padding</code> CSS property sets space between an element's edge and its contents. It is a shorthand for <code>padding-top</code>, <code>padding-right</code>, <code>padding-bottom</code>, and <code>padding-left</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
   */
  paddingRight?: Token<CSS.Property.PaddingRight | number, "spaces">
  /**
   * ### padding-inline-start
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-start
   */
  paddingStart?: Token<CSS.Property.PaddingInlineStart | number, "spaces">
  /**
   * ### padding-top
   *
   * The <code>padding</code> CSS property sets space between an element's edge and its contents. It is a shorthand for <code>padding-top</code>, <code>padding-right</code>, <code>padding-bottom</code>, and <code>padding-left</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
   */
  paddingTop?: Token<CSS.Property.PaddingTop | number, "spaces">
  /**
   * ### page
   *
   * The <code>:first</code>, <code>:left</code>, and <code>:right</code> pseudo-classes select pages based on their position in sequence after pagination. They're often used with the <code>page</code> CSS property, to choose a print layout defined by the <code>@page</code> rule.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page
   */
  page?: Token<CSS.Property.Page>
  /**
   * ### page-break-after
   *
   * The <code>page-break-before</code>, <code>page-break-inside</code>, and <code>page-break-after</code> CSS properties are aliases to the <code>break-before</code>, <code>break-inside</code>, and <code>break-after</code> properties.
   *
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-after
   *
   * @deprecated
   */
  pageBreakAfter?: Token<CSS.Property.PageBreakAfter>
  /**
   * ### page-break-before
   *
   * The <code>page-break-before</code>, <code>page-break-inside</code>, and <code>page-break-after</code> CSS properties are aliases to the <code>break-before</code>, <code>break-inside</code>, and <code>break-after</code> properties.
   *
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-before
   *
   * @deprecated
   */
  pageBreakBefore?: Token<CSS.Property.PageBreakBefore>
  /**
   * ### page-break-inside
   *
   * The <code>page-break-before</code>, <code>page-break-inside</code>, and <code>page-break-after</code> CSS properties are aliases to the <code>break-before</code>, <code>break-inside</code>, and <code>break-after</code> properties.
   *
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-inside
   *
   * @deprecated
   */
  pageBreakInside?: Token<CSS.Property.PageBreakInside>
  /**
   * ### paint-order
   *
   * The <code>paint-order</code> CSS property sets the z-order of strokes, fills, and (in SVG content) markers. For example, <code>paint-order: markers stroke fill;</code> draws the markers, then stroke on top of markers, then fill on top of both markers and stroke.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/paint-order
   */
  paintOrder?: Token<CSS.Property.PaintOrder>
  /**
   * ### padding-bottom
   *
   * The <code>padding</code> CSS property sets space between an element's edge and its contents. It is a shorthand for <code>padding-top</code>, <code>padding-right</code>, <code>padding-bottom</code>, and <code>padding-left</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   */
  pb?: Token<CSS.Property.PaddingBottom | number, "spaces">
  /**
   * ### padding-inline-end
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-end
   */
  pe?: Token<CSS.Property.PaddingInlineEnd | number, "spaces">
  /**
   * ### perspective
   *
   * The <code>transform</code> CSS property and its 3D transform functions allow rotations and other transforms in three dimensions, including perspective transforms.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-09-14
   * @newly_available_date 2022-03-14
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective
   */
  perspective?: Token<CSS.Property.Perspective>
  /**
   * ### perspective-origin
   *
   * The <code>transform</code> CSS property and its 3D transform functions allow rotations and other transforms in three dimensions, including perspective transforms.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-09-14
   * @newly_available_date 2022-03-14
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective-origin
   */
  perspectiveOrigin?: Token<CSS.Property.PerspectiveOrigin>
  /**
   * ### padding-left
   *
   * The <code>padding</code> CSS property sets space between an element's edge and its contents. It is a shorthand for <code>padding-top</code>, <code>padding-right</code>, <code>padding-bottom</code>, and <code>padding-left</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
   */
  pl?: Token<CSS.Property.PaddingLeft | number, "spaces">
  /**
   * ### place-content
   *
   * Flexbox is a one-dimensional layout system, which places content either horizontally or vertically, with optional wrapping.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-03-30
   * @newly_available_date 2015-09-30
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/place-content
   */
  placeContent?: Token<CSS.Property.PlaceContent>
  /**
   * ### place-items
   *
   * Flexbox is a one-dimensional layout system, which places content either horizontally or vertically, with optional wrapping.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-03-30
   * @newly_available_date 2015-09-30
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/place-items
   */
  placeItems?: Token<CSS.Property.PlaceItems>
  /**
   * ### place-self
   *
   * Flexbox is a one-dimensional layout system, which places content either horizontally or vertically, with optional wrapping.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-03-30
   * @newly_available_date 2015-09-30
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/place-self
   */
  placeSelf?: Token<CSS.Property.PlaceSelf>
  /**
   * ### pointer-events
   *
   * The <code>pointer-events</code> CSS property sets whether a user can interact with an element using a mouse, touch, or other pointing input device.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/pointer-events
   */
  pointerEvents?: Token<CSS.Property.PointerEvents>
  /**
   * ### position
   *
   * The <code>position</code> CSS property sets the origin position of an element to an element, the element's scrollport, or the viewport.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/position
   */
  pos?: Token<CSS.Property.Position>
  /**
   * ### position
   *
   * The <code>position</code> CSS property sets the origin position of an element to an element, the element's scrollport, or the viewport.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/position
   */
  position?: Token<CSS.Property.Position>
  /**
   * ### position-anchor
   *
   * Anchor positioning places an element based on the position of another element. For example, you can place a tooltip next to the content it references.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/position-anchor
   *
   * @experimental
   */
  positionAnchor?: Token<string & {}>
  /**
   * ### position-area
   *
   * Anchor positioning places an element based on the position of another element. For example, you can place a tooltip next to the content it references.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/position-area
   *
   * @experimental
   */
  positionArea?: Token<string & {}>
  /**
   * ### position-try
   *
   * Anchor positioning places an element based on the position of another element. For example, you can place a tooltip next to the content it references.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/position-try
   *
   * @experimental
   */
  positionTry?: Token<string & {}>
  /**
   * ### position-try-fallbacks
   *
   * Anchor positioning places an element based on the position of another element. For example, you can place a tooltip next to the content it references.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/position-try-fallbacks
   *
   * @experimental
   */
  positionTryFallbacks?: Token<string & {}>
  /**
   * ### position-try-order
   *
   * Anchor positioning places an element based on the position of another element. For example, you can place a tooltip next to the content it references.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/position-try-order
   *
   * @experimental
   */
  positionTryOrder?: Token<string & {}>
  /**
   * ### position-visibility
   *
   * Anchor positioning places an element based on the position of another element. For example, you can place a tooltip next to the content it references.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/position-visibility
   *
   * @experimental
   */
  positionVisibility?: Token<string & {}>
  /**
   * ### padding-right
   *
   * The <code>padding</code> CSS property sets space between an element's edge and its contents. It is a shorthand for <code>padding-top</code>, <code>padding-right</code>, <code>padding-bottom</code>, and <code>padding-left</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
   */
  pr?: Token<CSS.Property.PaddingRight | number, "spaces">
  /**
   * ### print-color-adjust
   *
   * The <code>print-color-adjust</code> CSS property sets whether styles of printed pages should be adjusted to use less ink, in cases such as light text on a dark background.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/print-color-adjust
   */
  printColorAdjust?: Token<CSS.Property.PrintColorAdjust>
  /**
   * ### padding-inline-start
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-start
   */
  ps?: Token<CSS.Property.PaddingInlineStart | number, "spaces">
  /**
   * ### padding-top
   *
   * The <code>padding</code> CSS property sets space between an element's edge and its contents. It is a shorthand for <code>padding-top</code>, <code>padding-right</code>, <code>padding-bottom</code>, and <code>padding-left</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
   */
  pt?: Token<CSS.Property.PaddingTop | number, "spaces">
  /**
   * ### quotes
   *
   * The <code>quotes</code> CSS property sets the quotation marks inserted via the <code>content</code> CSS property or <code>&#x3C;q></code> element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2023-10-26
   * @newly_available_date 2021-04-26
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/quotes
   */
  quotes?: Token<CSS.Property.Quotes>
  /**
   * ### r
   *
   * The SVG image format, represented by the <code>&#x3C;svg></code> element, creates two-dimensional vector graphics with declarative or scripted interaction and animation.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/r
   */
  r?: Token<string & {}>
  /**
   * ### reading-flow
   *
   * The <code>reading-flow</code> CSS property sets the order in which flex or grid elements are rendered to speech or reached via focus navigation.
   *
   * @baseline `Limited available`
   *
   * @see https://drafts.csswg.org/css-display-4/#reading-flow
   *
   * @experimental
   */
  readingFlow?: Token<string & {}>
  /**
   * ### resize
   *
   * The <code>resize</code> CSS property sets whether an element can be resized by the user, and on which axes.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/resize
   */
  resize?: Token<CSS.Property.Resize>
  /**
   * ### right
   *
   * The physical CSS properties, <code>top</code>, <code>right</code>, <code>bottom</code>, and <code>left</code>, set the inset position of an element relative to the corresponding side of a container determined by the element's <code>position</code> property.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/right
   */
  right?: Token<CSS.Property.Right | number, "spaces">
  /**
   * ### rotate
   *
   * The <code>translate</code>, <code>rotate</code>, and <code>scale</code> CSS properties apply single transformations independently, as opposed to applying multiple transformations with the <code>transform</code> CSS property.
   *
   * @baseline `Widely available`
   * @widely_available_date 2025-02-05
   * @newly_available_date 2022-08-05
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/rotate
   */
  rotate?: Token<CSS.Property.Rotate>
  /**
   * ### border-radius
   *
   * The <code>border-radius</code> CSS property rounds the corners of the border drawn around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-radius
   */
  rounded?: Token<CSS.Property.BorderRadius | number, "radii">
  /**
   * ### border-bottom-left-radius
   *
   * The <code>border-radius</code> CSS property rounds the corners of the border drawn around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius
   *
   * ------------------------------------
   *
   * ### border-bottom-right-radius
   *
   * The <code>border-radius</code> CSS property rounds the corners of the border drawn around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius
   */
  roundedBottom?: Token<
    | CSS.Property.BorderBottomLeftRadius
    | CSS.Property.BorderBottomRightRadius
    | number,
    "radii"
  >
  /**
   * ### border-end-end-radius
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-end-end-radius
   */
  roundedBottomEnd?: Token<CSS.Property.BorderEndEndRadius | number, "radii">
  /**
   * ### border-bottom-left-radius
   *
   * The <code>border-radius</code> CSS property rounds the corners of the border drawn around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius
   */
  roundedBottomLeft?: Token<
    CSS.Property.BorderBottomLeftRadius | number,
    "radii"
  >
  /**
   * ### border-bottom-right-radius
   *
   * The <code>border-radius</code> CSS property rounds the corners of the border drawn around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius
   */
  roundedBottomRight?: Token<
    CSS.Property.BorderBottomRightRadius | number,
    "radii"
  >
  /**
   * ### border-end-start-radius
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-end-start-radius
   */
  roundedBottomStart?: Token<
    CSS.Property.BorderEndStartRadius | number,
    "radii"
  >
  /**
   * ### border-end-end-radius
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-end-end-radius
   *
   * ------------------------------------
   *
   * ### border-end-start-radius
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-end-start-radius
   */
  roundedEnd?: Token<
    | CSS.Property.BorderEndEndRadius
    | CSS.Property.BorderEndStartRadius
    | number,
    "radii"
  >
  /**
   * ### border-bottom-left-radius
   *
   * The <code>border-radius</code> CSS property rounds the corners of the border drawn around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius
   *
   * ------------------------------------
   *
   * ### border-top-left-radius
   *
   * The <code>border-radius</code> CSS property rounds the corners of the border drawn around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius
   */
  roundedLeft?: Token<
    | CSS.Property.BorderBottomLeftRadius
    | CSS.Property.BorderTopLeftRadius
    | number,
    "radii"
  >
  /**
   * ### border-bottom-right-radius
   *
   * The <code>border-radius</code> CSS property rounds the corners of the border drawn around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius
   *
   * ------------------------------------
   *
   * ### border-top-right-radius
   *
   * The <code>border-radius</code> CSS property rounds the corners of the border drawn around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius
   */
  roundedRight?: Token<
    | CSS.Property.BorderBottomRightRadius
    | CSS.Property.BorderTopRightRadius
    | number,
    "radii"
  >
  /**
   * ### border-start-end-radius
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-start-end-radius
   *
   * ------------------------------------
   *
   * ### border-start-start-radius
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-start-start-radius
   */
  roundedStart?: Token<
    | CSS.Property.BorderStartEndRadius
    | CSS.Property.BorderStartStartRadius
    | number,
    "radii"
  >
  /**
   * ### border-top-left-radius
   *
   * The <code>border-radius</code> CSS property rounds the corners of the border drawn around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius
   *
   * ------------------------------------
   *
   * ### border-top-right-radius
   *
   * The <code>border-radius</code> CSS property rounds the corners of the border drawn around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius
   */
  roundedTop?: Token<
    | CSS.Property.BorderTopLeftRadius
    | CSS.Property.BorderTopRightRadius
    | number,
    "radii"
  >
  /**
   * ### border-start-end-radius
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-start-end-radius
   */
  roundedTopEnd?: Token<CSS.Property.BorderStartEndRadius | number, "radii">
  /**
   * ### border-top-left-radius
   *
   * The <code>border-radius</code> CSS property rounds the corners of the border drawn around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius
   */
  roundedTopLeft?: Token<CSS.Property.BorderTopLeftRadius | number, "radii">
  /**
   * ### border-top-right-radius
   *
   * The <code>border-radius</code> CSS property rounds the corners of the border drawn around an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius
   */
  roundedTopRight?: Token<CSS.Property.BorderTopRightRadius | number, "radii">
  /**
   * ### border-start-start-radius
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-start-start-radius
   */
  roundedTopStart?: Token<CSS.Property.BorderStartStartRadius | number, "radii">
  /**
   * ### row-gap
   *
   * CSS grid is a two-dimensional layout system, which lays content out in rows and columns.
   *
   * @baseline `Widely available`
   * @widely_available_date 2020-04-17
   * @newly_available_date 2017-10-17
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/row-gap
   */
  rowGap?: Token<CSS.Property.RowGap | number, "spaces">
  /**
   * ### ruby-align
   *
   * The <code>ruby-align</code> CSS property sets the spacing and alignment of ruby annotation text when it does not fill its available space.
   *
   * @baseline `Newly available`
   * @newly_available_date 2024-12-11
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/ruby-align
   */
  rubyAlign?: Token<CSS.Property.RubyAlign>
  /**
   * ### ruby-overhang
   *
   * The <code>ruby-overhang</code> CSS property sets whether ruby annotations may overlap adjacent text.
   *
   * @baseline `Limited available`
   *
   * @see https://drafts.csswg.org/css-ruby/#propdef-ruby-overhang
   */
  rubyOverhang?: Token<string & {}>
  /**
   * ### ruby-position
   *
   * The <code>ruby-position</code> CSS property sets the position of a ruby annotation in relation to its base text. Annotations can display over, under, or interleaved with the base text.
   *
   * @baseline `Newly available`
   * @newly_available_date 2024-12-11
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/ruby-position
   */
  rubyPosition?: Token<CSS.Property.RubyPosition>
  /**
   * ### rx
   *
   * The SVG image format, represented by the <code>&#x3C;svg></code> element, creates two-dimensional vector graphics with declarative or scripted interaction and animation.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/rx
   */
  rx?: Token<string & {}>
  /**
   * ### ry
   *
   * The SVG image format, represented by the <code>&#x3C;svg></code> element, creates two-dimensional vector graphics with declarative or scripted interaction and animation.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/ry
   */
  ry?: Token<string & {}>
  /**
   * ### scale
   *
   * The <code>translate</code>, <code>rotate</code>, and <code>scale</code> CSS properties apply single transformations independently, as opposed to applying multiple transformations with the <code>transform</code> CSS property.
   *
   * @baseline `Widely available`
   * @widely_available_date 2025-02-05
   * @newly_available_date 2022-08-05
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scale
   */
  scale?: Token<CSS.Property.Scale>
  /**
   * ### scrollbar-color
   *
   * The <code>scrollbar-color</code> CSS property sets the color of the scrollbar track and thumb.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scrollbar-color
   */
  scrollbarColor?: Token<CSS.Property.ScrollbarColor, "colors">
  /**
   * ### scrollbar-gutter
   *
   * The <code>scrollbar-gutter</code> CSS property reserves space for the scrollbar, preventing unwanted layout changes as the scrollbar appears and disappears.
   *
   * @baseline `Newly available`
   * @newly_available_date 2024-12-11
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scrollbar-gutter
   */
  scrollbarGutter?: Token<CSS.Property.ScrollbarGutter>
  /**
   * ### scrollbar-width
   *
   * The <code>scrollbar-width</code> CSS property sets the width of the scrollbar.
   *
   * @baseline `Newly available`
   * @newly_available_date 2024-12-11
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scrollbar-width
   */
  scrollbarWidth?: Token<CSS.Property.ScrollbarWidth | number>
  /**
   * ### scroll-behavior
   *
   * The <code>scroll-behavior</code> CSS property controls whether scrolling is smooth or snaps, for scroll actions not performed by the user such as those triggered by navigation.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-09-14
   * @newly_available_date 2022-03-14
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-behavior
   */
  scrollBehavior?: Token<CSS.Property.ScrollBehavior>
  /**
   * ### scroll-initial-target
   *
   * The CSS `scroll-initial-target` property.
   *
   * @see https://drafts.csswg.org/css-scroll-snap-2/#propdef-scroll-initial-target
   *
   * @experimental
   */
  scrollInitialTarget?: Token<string & {}>
  /**
   * ### scroll-margin
   *
   * CSS scroll snap controls the panning and scrolling behavior within a scroll container.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin
   */
  scrollMargin?: Token<CSS.Property.ScrollMargin | number, "spaces">
  /**
   * ### scroll-margin-block
   *
   * CSS scroll snap controls the panning and scrolling behavior within a scroll container.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block
   */
  scrollMarginBlock?: Token<CSS.Property.ScrollMarginBlock>
  /**
   * ### scroll-margin-block-end
   *
   * CSS scroll snap controls the panning and scrolling behavior within a scroll container.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-end
   */
  scrollMarginBlockEnd?: Token<CSS.Property.ScrollMarginBlockEnd>
  /**
   * ### scroll-margin-block-start
   *
   * CSS scroll snap controls the panning and scrolling behavior within a scroll container.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-start
   */
  scrollMarginBlockStart?: Token<CSS.Property.ScrollMarginBlockStart>
  /**
   * ### scroll-margin-bottom
   *
   * CSS scroll snap controls the panning and scrolling behavior within a scroll container.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-bottom
   */
  scrollMarginBottom?: Token<CSS.Property.ScrollMarginBottom | number, "spaces">
  /**
   * ### scroll-margin-inline
   *
   * CSS scroll snap controls the panning and scrolling behavior within a scroll container.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline
   */
  scrollMarginInline?: Token<CSS.Property.ScrollMarginInline>
  /**
   * ### scroll-margin-inline-end
   *
   * CSS scroll snap controls the panning and scrolling behavior within a scroll container.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-end
   */
  scrollMarginInlineEnd?: Token<CSS.Property.ScrollMarginInlineEnd>
  /**
   * ### scroll-margin-inline-start
   *
   * CSS scroll snap controls the panning and scrolling behavior within a scroll container.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-start
   */
  scrollMarginInlineStart?: Token<CSS.Property.ScrollMarginInlineStart>
  /**
   * ### scroll-margin-left
   *
   * CSS scroll snap controls the panning and scrolling behavior within a scroll container.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-left
   */
  scrollMarginLeft?: Token<CSS.Property.ScrollMarginLeft | number, "spaces">
  /**
   * ### scroll-margin-right
   *
   * CSS scroll snap controls the panning and scrolling behavior within a scroll container.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-right
   */
  scrollMarginRight?: Token<CSS.Property.ScrollMarginRight | number, "spaces">
  /**
   * ### scroll-margin-top
   *
   * CSS scroll snap controls the panning and scrolling behavior within a scroll container.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-top
   */
  scrollMarginTop?: Token<CSS.Property.ScrollMarginTop | number, "spaces">
  /**
   * ### scroll-padding
   *
   * CSS scroll snap controls the panning and scrolling behavior within a scroll container.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding
   */
  scrollPadding?: Token<CSS.Property.ScrollPadding | number, "spaces">
  /**
   * ### scroll-padding-block
   *
   * CSS scroll snap controls the panning and scrolling behavior within a scroll container.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block
   */
  scrollPaddingBlock?: Token<CSS.Property.ScrollPaddingBlock>
  /**
   * ### scroll-padding-block-end
   *
   * CSS scroll snap controls the panning and scrolling behavior within a scroll container.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-end
   */
  scrollPaddingBlockEnd?: Token<CSS.Property.ScrollPaddingBlockEnd>
  /**
   * ### scroll-padding-block-start
   *
   * CSS scroll snap controls the panning and scrolling behavior within a scroll container.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-start
   */
  scrollPaddingBlockStart?: Token<CSS.Property.ScrollPaddingBlockStart>
  /**
   * ### scroll-padding-bottom
   *
   * CSS scroll snap controls the panning and scrolling behavior within a scroll container.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-bottom
   */
  scrollPaddingBottom?: Token<
    CSS.Property.ScrollPaddingBottom | number,
    "spaces"
  >
  /**
   * ### scroll-padding-inline
   *
   * CSS scroll snap controls the panning and scrolling behavior within a scroll container.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline
   */
  scrollPaddingInline?: Token<CSS.Property.ScrollPaddingInline>
  /**
   * ### scroll-padding-inline-end
   *
   * CSS scroll snap controls the panning and scrolling behavior within a scroll container.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-end
   */
  scrollPaddingInlineEnd?: Token<CSS.Property.ScrollPaddingInlineEnd>
  /**
   * ### scroll-padding-inline-start
   *
   * CSS scroll snap controls the panning and scrolling behavior within a scroll container.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-start
   */
  scrollPaddingInlineStart?: Token<CSS.Property.ScrollPaddingInlineStart>
  /**
   * ### scroll-padding-left
   *
   * CSS scroll snap controls the panning and scrolling behavior within a scroll container.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-left
   */
  scrollPaddingLeft?: Token<CSS.Property.ScrollPaddingLeft | number, "spaces">
  /**
   * ### scroll-padding-right
   *
   * CSS scroll snap controls the panning and scrolling behavior within a scroll container.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-right
   */
  scrollPaddingRight?: Token<CSS.Property.ScrollPaddingRight | number, "spaces">
  /**
   * ### scroll-padding-top
   *
   * CSS scroll snap controls the panning and scrolling behavior within a scroll container.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-top
   */
  scrollPaddingTop?: Token<CSS.Property.ScrollPaddingTop | number, "spaces">
  /**
   * ### scroll-snap-align
   *
   * CSS scroll snap controls the panning and scrolling behavior within a scroll container.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-align
   */
  scrollSnapAlign?: Token<CSS.Property.ScrollSnapAlign>
  /**
   * ### scroll-snap-stop
   *
   * CSS scroll snap controls the panning and scrolling behavior within a scroll container.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-stop
   */
  scrollSnapStop?: Token<CSS.Property.ScrollSnapStop>
  /**
   * ### scroll-snap-type
   *
   * CSS scroll snap controls the panning and scrolling behavior within a scroll container.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type
   */
  scrollSnapType?: Token<CSS.Property.ScrollSnapType>
  /**
   * ### scroll-timeline
   *
   * The <code>animation-timeline</code>, <code>scroll-timeline</code>, and <code>view-timeline</code> CSS properties advance animations based on the user's scroll position.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-timeline
   *
   * @experimental
   */
  scrollTimeline?: Token<CSS.Property.ScrollTimeline>
  /**
   * ### scroll-timeline-axis
   *
   * The <code>animation-timeline</code>, <code>scroll-timeline</code>, and <code>view-timeline</code> CSS properties advance animations based on the user's scroll position.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-timeline-axis
   *
   * @experimental
   */
  scrollTimelineAxis?: Token<CSS.Property.ScrollTimelineAxis>
  /**
   * ### scroll-timeline-name
   *
   * The <code>animation-timeline</code>, <code>scroll-timeline</code>, and <code>view-timeline</code> CSS properties advance animations based on the user's scroll position.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-timeline-name
   *
   * @experimental
   */
  scrollTimelineName?: Token<CSS.Property.ScrollTimelineName>
  /**
   * ### box-shadow
   *
   * The <code>box-shadow</code> CSS property applies shadow effects around an element's frame. This can create drop shadow and inner shadow effects.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-shadow
   */
  shadow?: Token<CSS.Property.BoxShadow, "shadows">
  /**
   * ### shape-image-threshold
   *
   * The <code>shape-outside</code> CSS property, along with <code>shape-margin</code> and <code>shape-image-threshold</code>, sets the shape around which adjacent content will wrap.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-image-threshold
   */
  shapeImageThreshold?: Token<CSS.Property.ShapeImageThreshold>
  /**
   * ### shape-margin
   *
   * The <code>shape-outside</code> CSS property, along with <code>shape-margin</code> and <code>shape-image-threshold</code>, sets the shape around which adjacent content will wrap.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-margin
   */
  shapeMargin?: Token<CSS.Property.ShapeMargin>
  /**
   * ### shape-outside
   *
   * The <code>shape-outside</code> CSS property, along with <code>shape-margin</code> and <code>shape-image-threshold</code>, sets the shape around which adjacent content will wrap.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-outside
   */
  shapeOutside?: Token<CSS.Property.ShapeOutside>
  /**
   * ### shape-rendering
   *
   * The SVG image format, represented by the <code>&#x3C;svg></code> element, creates two-dimensional vector graphics with declarative or scripted interaction and animation.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-rendering
   */
  shapeRendering?: Token<CSS.Property.ShapeRendering>
  /**
   * ### speak
   *
   * The <code>speak</code> CSS property sets whether or not text should be spoken.
   *
   * @baseline `Limited available`
   *
   * @see https://drafts.csswg.org/css-speech-1/#speaking-props-speak
   */
  speak?: Token<string & {}>
  /**
   * ### speak-as
   *
   * The <code>speak-as</code> CSS property sets how any element's content is spoken. Not to be confused with the <code>speak-as</code> descriptor of <code>@counter-style</code> at-rules.
   *
   * @baseline `Limited available`
   *
   * @see https://drafts.csswg.org/css-speech-1/#speaking-props-speak-as
   *
   * @experimental
   */
  speakAs?: Token<string & {}>
  /**
   * ### stop-color
   *
   * The SVG image format, represented by the <code>&#x3C;svg></code> element, creates two-dimensional vector graphics with declarative or scripted interaction and animation.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/stop-color
   */
  stopColor?: Token<CSS.Property.StopColor>
  /**
   * ### stop-opacity
   *
   * The SVG image format, represented by the <code>&#x3C;svg></code> element, creates two-dimensional vector graphics with declarative or scripted interaction and animation.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/stop-opacity
   */
  stopOpacity?: Token<CSS.Property.StopOpacity>
  /**
   * ### stroke
   *
   * The SVG image format, represented by the <code>&#x3C;svg></code> element, creates two-dimensional vector graphics with declarative or scripted interaction and animation.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/stroke
   */
  stroke?: Token<CSS.Property.Stroke, "colors">
  /**
   * ### stroke-color
   *
   * The SVG image format, represented by the <code>&#x3C;svg></code> element, creates two-dimensional vector graphics with declarative or scripted interaction and animation.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://drafts.fxtf.org/fill-stroke-3/#stroke-color
   *
   * @experimental
   */
  strokeColor?: Token<string & {}>
  /**
   * ### stroke-dasharray
   *
   * The SVG image format, represented by the <code>&#x3C;svg></code> element, creates two-dimensional vector graphics with declarative or scripted interaction and animation.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/stroke-dasharray
   */
  strokeDasharray?: Token<CSS.Property.StrokeDasharray>
  /**
   * ### stroke-dashoffset
   *
   * The SVG image format, represented by the <code>&#x3C;svg></code> element, creates two-dimensional vector graphics with declarative or scripted interaction and animation.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/stroke-dashoffset
   */
  strokeDashoffset?: Token<CSS.Property.StrokeDashoffset | number>
  /**
   * ### stroke-linecap
   *
   * The SVG image format, represented by the <code>&#x3C;svg></code> element, creates two-dimensional vector graphics with declarative or scripted interaction and animation.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/stroke-linecap
   */
  strokeLinecap?: Token<CSS.Property.StrokeLinecap>
  /**
   * ### stroke-linejoin
   *
   * The SVG image format, represented by the <code>&#x3C;svg></code> element, creates two-dimensional vector graphics with declarative or scripted interaction and animation.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/stroke-linejoin
   */
  strokeLinejoin?: Token<CSS.Property.StrokeLinejoin>
  /**
   * ### stroke-miterlimit
   *
   * The SVG image format, represented by the <code>&#x3C;svg></code> element, creates two-dimensional vector graphics with declarative or scripted interaction and animation.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/stroke-miterlimit
   */
  strokeMiterlimit?: Token<CSS.Property.StrokeMiterlimit>
  /**
   * ### stroke-opacity
   *
   * The <code>fill-opacity</code>, and <code>stroke-opacity</code> SVG attributes and CSS properties control the transparency of a stroke or fill of an SVG element.
   *
   * @baseline `Widely available`
   * @widely_available_date ≤2022-09-24
   * @newly_available_date ≤2020-03-24
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/stroke-opacity
   */
  strokeOpacity?: Token<CSS.Property.StrokeOpacity>
  /**
   * ### stroke-width
   *
   * The SVG image format, represented by the <code>&#x3C;svg></code> element, creates two-dimensional vector graphics with declarative or scripted interaction and animation.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/stroke-width
   */
  strokeWidth?: Token<CSS.Property.StrokeWidth | number>
  /**
   * ### table-layout
   *
   * The <code>&#x3C;table></code> HTML element, with several related elements, represents tabular data in rows and columns of cells.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/table-layout
   */
  tableLayout?: Token<CSS.Property.TableLayout>
  /**
   * ### tab-size
   *
   * The <code>tab-size</code> CSS property sets the width of the tab character.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-02-10
   * @newly_available_date 2021-08-10
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/tab-size
   */
  tabSize?: Token<CSS.Property.TabSize>
  /**
   * ### font-size
   *
   * The <code>font-size</code> CSS property sets the text height.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size
   */
  text?: Token<CSS.Property.FontSize | number, "fontSizes">
  /**
   * ### text-align
   *
   * The <code>text-align</code> CSS property sets the horizontal placement of the inner content of a block element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align
   */
  textAlign?: Token<CSS.Property.TextAlign>
  /**
   * ### text-align-last
   *
   * The <code>text-align-last</code> CSS property sets the alignment of the last line of text before a forced line break.
   *
   * @baseline `Newly available`
   * @newly_available_date 2022-09-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align-last
   */
  textAlignLast?: Token<CSS.Property.TextAlignLast>
  /**
   * ### text-anchor
   *
   * The SVG image format, represented by the <code>&#x3C;svg></code> element, creates two-dimensional vector graphics with declarative or scripted interaction and animation.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-anchor
   */
  textAnchor?: Token<CSS.Property.TextAnchor>
  /**
   * ### text-box
   *
   * The <code>text-box</code> CSS property sets the spacing above and below text based on a font's typographic features. For example, <code>text-box: trim-both ex alphabetic</code> trims the top to the top of the letter x and the bottom to the bottom of most letters, without descenders.
   *
   * @baseline `Limited available`
   *
   * @see https://drafts.csswg.org/css-inline-3/#text-box-shorthand
   */
  textBox?: Token<string & {}>
  /**
   * ### text-box-edge
   *
   * The <code>text-box</code> CSS property sets the spacing above and below text based on a font's typographic features. For example, <code>text-box: trim-both ex alphabetic</code> trims the top to the top of the letter x and the bottom to the bottom of most letters, without descenders.
   *
   * @baseline `Limited available`
   *
   * @see https://drafts.csswg.org/css-inline-3/#text-box-edge
   */
  textBoxEdge?: Token<string & {}>
  /**
   * ### text-box-trim
   *
   * The <code>text-box</code> CSS property sets the spacing above and below text based on a font's typographic features. For example, <code>text-box: trim-both ex alphabetic</code> trims the top to the top of the letter x and the bottom to the bottom of most letters, without descenders.
   *
   * @baseline `Limited available`
   *
   * @see https://drafts.csswg.org/css-inline-3/#text-box-trim
   */
  textBoxTrim?: Token<string & {}>
  /**
   * ### color
   *
   * The <code>color</code> CSS property sets the primary foreground color of an element, which is used for text, the default border color, and text decorations.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/color
   */
  textColor?: Token<CSS.Property.Color, "colors">
  /**
   * ### text-combine-upright
   *
   * The <code>text-combine-upright</code> CSS property displays multiple characters in the space of a single character in vertical text. This is used in East Asian documents to display Latin-based strings such as components of a date or letters of an initialism.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-09-14
   * @newly_available_date 2022-03-14
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-combine-upright
   */
  textCombineUpright?: Token<CSS.Property.TextCombineUpright>
  /**
   * ### text-decoration
   *
   * The <code>text-decoration</code> CSS property sets the style and color of decorative lines including underline, overline, line-through, or a combination of lines.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration
   */
  textDecor?: Token<CSS.Property.TextDecoration>
  /**
   * ### text-decoration
   *
   * The <code>text-decoration</code> CSS property sets the style and color of decorative lines including underline, overline, line-through, or a combination of lines.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration
   */
  textDecoration?: Token<CSS.Property.TextDecoration>
  /**
   * ### text-decoration-color
   *
   * The <code>text-decoration</code> CSS property sets the style and color of decorative lines including underline, overline, line-through, or a combination of lines.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-color
   */
  textDecorationColor?: Token<CSS.Property.TextDecorationColor, "colors">
  /**
   * ### text-decoration-line
   *
   * The <code>text-decoration</code> CSS property sets the style and color of decorative lines including underline, overline, line-through, or a combination of lines.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-line
   */
  textDecorationLine?: Token<CSS.Property.TextDecorationLine>
  /**
   * ### text-decoration-skip
   *
   * The <code>text-decoration</code> CSS property sets the style and color of decorative lines including underline, overline, line-through, or a combination of lines.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip
   *
   * @experimental
   */
  textDecorationSkip?: Token<CSS.Property.TextDecorationSkip>
  /**
   * ### text-decoration-skip-ink
   *
   * The <code>text-decoration</code> CSS property sets the style and color of decorative lines including underline, overline, line-through, or a combination of lines.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip-ink
   */
  textDecorationSkipInk?: Token<CSS.Property.TextDecorationSkipInk>
  /**
   * ### text-decoration-style
   *
   * The <code>text-decoration</code> CSS property sets the style and color of decorative lines including underline, overline, line-through, or a combination of lines.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-style
   */
  textDecorationStyle?: Token<CSS.Property.TextDecorationStyle>
  /**
   * ### text-decoration-thickness
   *
   * The <code>text-decoration</code> CSS property sets the style and color of decorative lines including underline, overline, line-through, or a combination of lines.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-thickness
   */
  textDecorationThickness?: Token<CSS.Property.TextDecorationThickness>
  /**
   * ### text-emphasis
   *
   * The <code>text-emphasis</code> CSS property sets position and style for text emphasis marks, especially for East Asian languages.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-09-03
   * @newly_available_date 2022-03-03
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis
   */
  textEmphasis?: Token<CSS.Property.TextEmphasis>
  /**
   * ### text-emphasis-color
   *
   * The <code>text-emphasis</code> CSS property sets position and style for text emphasis marks, especially for East Asian languages.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-09-03
   * @newly_available_date 2022-03-03
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color
   */
  textEmphasisColor?: Token<CSS.Property.TextEmphasisColor, "colors">
  /**
   * ### text-emphasis-position
   *
   * The <code>text-emphasis</code> CSS property sets position and style for text emphasis marks, especially for East Asian languages.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-09-03
   * @newly_available_date 2022-03-03
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-position
   */
  textEmphasisPosition?: Token<CSS.Property.TextEmphasisPosition>
  /**
   * ### text-emphasis-style
   *
   * The <code>text-emphasis</code> CSS property sets position and style for text emphasis marks, especially for East Asian languages.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-09-03
   * @newly_available_date 2022-03-03
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style
   */
  textEmphasisStyle?: Token<CSS.Property.TextEmphasisStyle>
  /**
   * ### text-indent
   *
   * The <code>text-indent</code> CSS property sets the size of the empty space (indentation) at the beginning of lines in a text.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-indent
   */
  textIndent?: Token<CSS.Property.TextIndent>
  /**
   * ### text-justify
   *
   * The <code>text-justify</code> CSS property sets the justification method of text when <code>text-align: justify</code> is set.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-justify
   */
  textJustify?: Token<CSS.Property.TextJustify>
  /**
   * ### text-orientation
   *
   * The <code>text-orientation</code> CSS property sets the how text is typeset within a line when the writing mode is vertical.
   *
   * @baseline `Widely available`
   * @widely_available_date 2023-03-16
   * @newly_available_date 2020-09-16
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-orientation
   */
  textOrientation?: Token<CSS.Property.TextOrientation>
  /**
   * ### text-overflow
   *
   * The <code>text-overflow</code> CSS property sets how hidden overflow content appears to users. The property can clip content, truncate content with an ellipsis (…), or truncate with a custom string.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-overflow
   */
  textOverflow?: Token<CSS.Property.TextOverflow>
  /**
   * ### text-rendering
   *
   * The SVG image format, represented by the <code>&#x3C;svg></code> element, creates two-dimensional vector graphics with declarative or scripted interaction and animation.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-rendering
   */
  textRendering?: Token<CSS.Property.TextRendering>
  /**
   * ### text-shadow
   *
   * The <code>text-shadow</code> CSS property sets the position and styles of shadow on text.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-shadow
   */
  textShadow?: Token<CSS.Property.TextShadow, "shadows">
  /**
   * ### text-size-adjust
   *
   * The <code>text-size-adjust</code> CSS property disables or modifies the browser's default text size adjustment for small screen sizes.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-size-adjust
   *
   * @experimental
   */
  textSizeAdjust?: Token<CSS.Property.TextSizeAdjust>
  /**
   * ### text-spacing-trim
   *
   * The <code>text-spacing-trim</code> CSS property controls spacing around CJK characters, avoiding excessive whitespace when using full-width punctuation characters.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-spacing-trim
   *
   * @experimental
   */
  textSpacingTrim?: Token<string & {}>
  /**
   * ### text-transform
   *
   * The <code>text-transform</code> CSS property sets text case and capitalization.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-transform
   */
  textTransform?: Token<CSS.Property.TextTransform>
  /**
   * ### text-underline-offset
   *
   * The <code>text-underline-position</code> and <code>text-underline-offset</code> CSS properties set the position and distance from initial position of text underlines on text with <code>text-decoration: underline</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2023-05-19
   * @newly_available_date 2020-11-19
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-underline-offset
   */
  textUnderlineOffset?: Token<CSS.Property.TextUnderlineOffset>
  /**
   * ### text-underline-position
   *
   * The <code>text-underline-position</code> and <code>text-underline-offset</code> CSS properties set the position and distance from initial position of text underlines on text with <code>text-decoration: underline</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2023-05-19
   * @newly_available_date 2020-11-19
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-underline-position
   */
  textUnderlinePosition?: Token<CSS.Property.TextUnderlinePosition>
  /**
   * ### text-wrap
   *
   * The <code>text-wrap</code> CSS property sets how lines break in text that overflows the container. It is a shorthand for <code>text-wrap-style</code> and <code>text-wrap-mode</code>.
   *
   * @baseline `Newly available`
   * @newly_available_date 2024-03-19
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-wrap
   */
  textWrap?: Token<CSS.Property.TextWrap>
  /**
   * ### text-wrap-mode
   *
   * The <code>text-wrap-mode</code> CSS property sets whether lines may wrap with the values <code>wrap</code> and <code>nowrap</code>. It is a longhand property for both <code>white-space</code> and <code>text-wrap</code>.
   *
   * @baseline `Newly available`
   * @newly_available_date 2024-10-17
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-wrap-mode
   */
  textWrapMode?: Token<string & {}>
  /**
   * ### text-wrap-style
   *
   * The <code>text-wrap-style</code> CSS property sets how lines break in text that overflows the container. It can also be set with the <code>text-wrap</code> shorthand.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-wrap-style
   */
  textWrapStyle?: Token<string & {}>
  /**
   * ### timeline-scope
   *
   * The <code>animation-timeline</code>, <code>scroll-timeline</code>, and <code>view-timeline</code> CSS properties advance animations based on the user's scroll position.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/timeline-scope
   *
   * @experimental
   */
  timelineScope?: Token<CSS.Property.TimelineScope>
  /**
   * ### top
   *
   * The physical CSS properties, <code>top</code>, <code>right</code>, <code>bottom</code>, and <code>left</code>, set the inset position of an element relative to the corresponding side of a container determined by the element's <code>position</code> property.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/top
   */
  top?: Token<CSS.Property.Top | number, "spaces">
  /**
   * ### touch-action
   *
   * The <code>touch-action</code> CSS property sets whether an element on a touch screen can be panned or pinched to zoom.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-03-19
   * @newly_available_date 2019-09-19
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/touch-action
   */
  touchAction?: Token<CSS.Property.TouchAction>
  /**
   * ### letter-spacing
   *
   * The <code>letter-spacing</code> CSS property controls the amount of space between each letter in an element or block of text.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/letter-spacing
   */
  tracking?: Token<CSS.Property.LetterSpacing, "letterSpacings">
  /**
   * ### transform
   *
   * The <code>transform</code> CSS property and its 2D transform functions allow rotating, scaling, skewing, and translating an element. Arbitrary 2D transforms are also possible using a transformation matrix.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-03-30
   * @newly_available_date 2015-09-30
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform
   */
  transform?: Token<CSS.Property.Transform>
  /**
   * ### transform-box
   *
   * The <code>transform-box</code> CSS property sets the position and dimensions of the reference box relative to which an element's transformations are calculated.
   *
   * @baseline `Newly available`
   * @newly_available_date 2024-04-16
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-box
   */
  transformBox?: Token<CSS.Property.TransformBox>
  /**
   * ### transform-origin
   *
   * The <code>transform</code> CSS property and its 2D transform functions allow rotating, scaling, skewing, and translating an element. Arbitrary 2D transforms are also possible using a transformation matrix.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-03-30
   * @newly_available_date 2015-09-30
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-origin
   */
  transformOrigin?: Token<CSS.Property.TransformOrigin>
  /**
   * ### transform-style
   *
   * The <code>transform</code> CSS property and its 3D transform functions allow rotations and other transforms in three dimensions, including perspective transforms.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-09-14
   * @newly_available_date 2022-03-14
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-style
   */
  transformStyle?: Token<CSS.Property.TransformStyle>
  /**
   * ### transition-behavior
   *
   * The <code>transition-behavior: allow-discrete</code> CSS declaration allows transitions for properties whose animation behavior is discrete. Such properties can't be interpolated and swap from their start value to the end value at 50%.
   *
   * @baseline `Newly available`
   * @newly_available_date 2024-08-06
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-behavior
   */
  transitionBehavior?: Token<CSS.Property.TransitionBehavior>
  /**
   * ### transition-delay
   *
   * The <code>transition</code> shorthand CSS property sets how changes to an element's styles may occur over time. Transitions can be applied to specific CSS properties, all properties, or none.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-03-30
   * @newly_available_date 2015-09-30
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-delay
   */
  transitionDelay?: Token<CSS.Property.TransitionDelay>
  /**
   * ### transition-duration
   *
   * The <code>transition</code> shorthand CSS property sets how changes to an element's styles may occur over time. Transitions can be applied to specific CSS properties, all properties, or none.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-03-30
   * @newly_available_date 2015-09-30
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-duration
   */
  transitionDuration?: Token<CSS.Property.TransitionDuration, "durations">
  /**
   * ### transition-timing-function
   *
   * The <code>transition</code> shorthand CSS property sets how changes to an element's styles may occur over time. Transitions can be applied to specific CSS properties, all properties, or none.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-03-30
   * @newly_available_date 2015-09-30
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-timing-function
   */
  transitionTimingFunction?: Token<
    CSS.Property.TransitionTimingFunction,
    "easings"
  >
  /**
   * ### unicode-bidi
   *
   * The <code>unicode-bidi</code> and <code>direction</code> CSS properties override the Unicode layout algorithm. They are intended for Document Type Definition (DTD) designers. For HTML documents, you should use the <code>dir</code> global HTML attribute and <code>&#x3C;bdo></code> HTML element instead.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/unicode-bidi
   */
  unicodeBidi?: Token<CSS.Property.UnicodeBidi>
  /**
   * ### user-modify
   *
   * The CSS `user-modify` property.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/user-modify
   *
   * @deprecated
   */
  userModify?: Token<string & {}>
  /**
   * ### user-select
   *
   * The <code>user-select</code> CSS property controls which elements can be selected by the user.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/user-select
   */
  userSelect?: Token<CSS.Property.UserSelect>
  /**
   * ### vector-effect
   *
   * The SVG image format, represented by the <code>&#x3C;svg></code> element, creates two-dimensional vector graphics with declarative or scripted interaction and animation.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/vector-effect
   */
  vectorEffect?: Token<CSS.Property.VectorEffect>
  /**
   * ### vertical-align
   *
   * The <code>vertical-align</code> CSS property sets the vertical alignment of inline, inline-block, and table cell elements. It has no effect on block-level elements.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/vertical-align
   */
  verticalAlign?: Token<CSS.Property.VerticalAlign>
  /**
   * ### view-timeline
   *
   * The <code>animation-timeline</code>, <code>scroll-timeline</code>, and <code>view-timeline</code> CSS properties advance animations based on the user's scroll position.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/view-timeline
   *
   * @experimental
   */
  viewTimeline?: Token<CSS.Property.ViewTimeline>
  /**
   * ### view-timeline-axis
   *
   * The <code>animation-timeline</code>, <code>scroll-timeline</code>, and <code>view-timeline</code> CSS properties advance animations based on the user's scroll position.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/view-timeline-axis
   *
   * @experimental
   */
  viewTimelineAxis?: Token<CSS.Property.ViewTimelineAxis>
  /**
   * ### view-timeline-inset
   *
   * The <code>animation-timeline</code>, <code>scroll-timeline</code>, and <code>view-timeline</code> CSS properties advance animations based on the user's scroll position.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/view-timeline-inset
   *
   * @experimental
   */
  viewTimelineInset?: Token<CSS.Property.ViewTimelineInset>
  /**
   * ### view-timeline-name
   *
   * The <code>animation-timeline</code>, <code>scroll-timeline</code>, and <code>view-timeline</code> CSS properties advance animations based on the user's scroll position.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/view-timeline-name
   *
   * @experimental
   */
  viewTimelineName?: Token<CSS.Property.ViewTimelineName>
  /**
   * ### view-transition-class
   *
   * The <code>view-transition-class</code> CSS property sets a name that can be used to apply styles to multiple named view transition pseudo-elements.
   *
   * @baseline `Limited available`
   *
   * @see https://drafts.csswg.org/css-view-transitions-2/#view-transition-class-prop
   */
  viewTransitionClass?: Token<string & {}>
  /**
   * ### view-transition-name
   *
   * View transitions allow you to create animated visual transitions between different states of a document.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/view-transition-name
   */
  viewTransitionName?: Token<CSS.Property.ViewTransitionName>
  /**
   * ### visibility
   *
   * The <code>visibility</code> CSS property sets whether an element is shown. Invisible elements still affect the document layout.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/visibility
   */
  visibility?: Token<CSS.Property.Visibility>
  /**
   * ### width
   *
   * The <code>width</code> and <code>height</code> CSS properties set the preferred physical size of an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/width
   */
  w?: Token<CSS.Property.Width | number, "sizes">
  /**
   * ### white-space
   *
   * The <code>white-space</code> CSS property sets how white space is collapsed and how lines wrap. It is a shorthand for <code>white-space-collapse</code> and <code>text-wrap-mode</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/white-space
   */
  whiteSpace?: Token<CSS.Property.WhiteSpace>
  /**
   * ### white-space-collapse
   *
   * The <code>white-space-collapse</code> CSS property sets whether new line characters are shown as line breaks, and whether multiple consecutive spaces are all displayed or combined.
   *
   * @baseline `Newly available`
   * @newly_available_date 2024-03-19
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/white-space-collapse
   */
  whiteSpaceCollapse?: Token<CSS.Property.WhiteSpaceCollapse>
  /**
   * ### widows
   *
   * The <code>widows</code> and <code>orphans</code> CSS properties set the minimum lines included in a text fragment created by page, column, or region breaks.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/widows
   */
  widows?: Token<CSS.Property.Widows>
  /**
   * ### width
   *
   * The <code>width</code> and <code>height</code> CSS properties set the preferred physical size of an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/width
   */
  width?: Token<CSS.Property.Width | number, "sizes">
  /**
   * ### will-change
   *
   * The <code>will-change</code> CSS property gives hints to the browser about expected changes to an element's scroll position, contents, or style. These hints allow browsers to optimize for upcoming style changes.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/will-change
   */
  willChange?: Token<CSS.Property.WillChange>
  /**
   * ### word-break
   *
   * The <code>word-break</code> CSS property sets how lines break within words.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-03-30
   * @newly_available_date 2015-09-30
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/word-break
   */
  wordBreak?: Token<CSS.Property.WordBreak>
  /**
   * ### word-spacing
   *
   * The <code>word-spacing</code> CSS property sets the amount of white space between words.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/word-spacing
   */
  wordSpacing?: Token<CSS.Property.WordSpacing>
  /**
   * ### writing-mode
   *
   * The <code>writing-mode</code> CSS property sets whether text is laid out horizontally or vertically, and left to right, or right to left.
   *
   * @baseline `Widely available`
   * @widely_available_date 2019-09-27
   * @newly_available_date 2017-03-27
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/writing-mode
   */
  writingMode?: Token<CSS.Property.WritingMode>
  /**
   * ### x
   *
   * The SVG image format, represented by the <code>&#x3C;svg></code> element, creates two-dimensional vector graphics with declarative or scripted interaction and animation.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/x
   */
  x?: Token<string & {}>
  /**
   * ### y
   *
   * The SVG image format, represented by the <code>&#x3C;svg></code> element, creates two-dimensional vector graphics with declarative or scripted interaction and animation.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/y
   */
  y?: Token<string & {}>
  /**
   * ### z-index
   *
   * The <code>z-index</code> CSS property orders overlapping elements, with higher values appearing in front of or on top of lower values.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/z-index
   */
  z?: Token<CSS.Property.ZIndex, "zIndices">
  /**
   * ### z-index
   *
   * The <code>z-index</code> CSS property orders overlapping elements, with higher values appearing in front of or on top of lower values.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/z-index
   */
  zIndex?: Token<CSS.Property.ZIndex, "zIndices">
  /**
   * ### zoom
   *
   * The <code>zoom</code> CSS property scales the size of an element. Unlike the <code>transform</code> property, a zoomed element affects page layout.
   *
   * @baseline `Newly available`
   * @newly_available_date 2024-05-14
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/zoom
   */
  zoom?: Token<CSS.Property.Zoom>
  /**

*/
  colorMode?: Token<CSS.Property.ColorScheme>
  /**
   * Sets the value of `--contrast`.
   */
  contrast?: Token<StringLiteral>
  /**
   * Sets the value of `--drop-shadow`.
   */
  dropShadow?: Token<StringLiteral, "shadows">
  /**
   * The focus ring is used to identify the currently focused element.
   */
  focusRing?: Token<
    "inline" | "inside" | "mixed" | "none" | "outline" | "outside"
  >
  /**
   * Sets the value of `--focus-ring-color`.
   */
  focusRingColor?: Token<StringLiteral, "colors">
  /**
   * Sets the value of `--focus-ring-offset`.
   */
  focusRingOffset?: Token<number | StringLiteral, "spaces">
  /**
   * Sets the value of `--focus-ring-style`.
   */
  focusRingStyle?: Token<StringLiteral>
  /**
   * Sets the value of `--focus-ring-width`.
   */
  focusRingWidth?: Token<StringLiteral>
  /**
   * The focus ring is used to identify the currently focused element.
   */
  focusVisibleRing?: Token<
    "inline" | "inside" | "mixed" | "none" | "outline" | "outside"
  >
  /**
   * Sets the value of `--grayscale`.
   */
  grayscale?: Token<StringLiteral>
  /**
   * Sets the value of `--hue-rotate`.
   */
  hueRotate?: Token<StringLiteral>
  /**
   * ### left
   *
   * The physical CSS properties, <code>top</code>, <code>right</code>, <code>bottom</code>, and <code>left</code>, set the inset position of an element relative to the corresponding side of a container determined by the element's <code>position</code> property.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/left
   *
   * ------------------------------------
   *
   * ### right
   *
   * The physical CSS properties, <code>top</code>, <code>right</code>, <code>bottom</code>, and <code>left</code>, set the inset position of an element relative to the corresponding side of a container determined by the element's <code>position</code> property.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/right
   */
  insetX?: Token<CSS.Property.Left | CSS.Property.Right | number, "spaces">
  /**
   * ### bottom
   *
   * The physical CSS properties, <code>top</code>, <code>right</code>, <code>bottom</code>, and <code>left</code>, set the inset position of an element relative to the corresponding side of a container determined by the element's <code>position</code> property.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/bottom
   *
   * ------------------------------------
   *
   * ### top
   *
   * The physical CSS properties, <code>top</code>, <code>right</code>, <code>bottom</code>, and <code>left</code>, set the inset position of an element relative to the corresponding side of a container determined by the element's <code>position</code> property.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/top
   */
  insetY?: Token<CSS.Property.Bottom | CSS.Property.Top | number, "spaces">
  /**
   * Sets the value of `--invert`.
   */
  invert?: Token<StringLiteral>
  /**
   * ### keyframes
   *
   * The <code>animation</code> CSS property animates an element's style over time, using keyframes described in <code>@keyframes</code> rules.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-03-30
   * @newly_available_date 2015-09-30
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/@keyframes
   */
  keyframes?: Token<StringLiteral | { [key: string]: CSSObject }, "keyframes">
  /**
   * Used to visually truncate a text after a number of lines.
   * ### line-clamp
   *
   * The <code>line-clamp</code> CSS property limits the text in a block container to a certain number of lines. The prefixed <code>-webkit-line-clamp</code> is widely supported but only works with <code>-webkit-box-orient: vertical</code> in combination with <code>display: -webkit-box</code> or <code>display: -webkit-inline-box</code>.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/line-clamp
   */
  lineClamp?: Token<number>
  /**
   * ### margin-inline-end
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-end
   *
   * ------------------------------------
   *
   * ### margin-inline-start
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-start
   */
  marginX?: Token<
    CSS.Property.MarginInlineEnd | CSS.Property.MarginInlineStart | number,
    "spaces"
  >
  /**
   * ### margin-bottom
   *
   * The <code>margin</code> CSS property sets space around an element. It is a shorthand for <code>margin-top</code>, <code>margin-right</code>, <code>margin-bottom</code>, and <code>margin-left</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   *
   * ------------------------------------
   *
   * ### margin-top
   *
   * The <code>margin</code> CSS property sets space around an element. It is a shorthand for <code>margin-top</code>, <code>margin-right</code>, <code>margin-bottom</code>, and <code>margin-left</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-top
   */
  marginY?: Token<
    CSS.Property.MarginBottom | CSS.Property.MarginTop | number,
    "spaces"
  >
  /**
   * ### max-height
   *
   * The <code>min-width</code>, <code>min-height</code>, <code>max-width</code>, and <code>max-height</code> CSS properties set the minimum and maximum size of an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-height
   *
   * ------------------------------------
   *
   * ### max-width
   *
   * The <code>min-width</code>, <code>min-height</code>, <code>max-width</code>, and <code>max-height</code> CSS properties set the minimum and maximum size of an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-width
   */
  maxBoxSize?: Token<
    CSS.Property.MaxHeight | CSS.Property.MaxWidth | number,
    "sizes"
  >
  /**
   * ### min-height
   *
   * The <code>min-width</code>, <code>min-height</code>, <code>max-width</code>, and <code>max-height</code> CSS properties set the minimum and maximum size of an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-height
   *
   * ------------------------------------
   *
   * ### min-width
   *
   * The <code>min-width</code>, <code>min-height</code>, <code>max-width</code>, and <code>max-height</code> CSS properties set the minimum and maximum size of an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-width
   */
  minBoxSize?: Token<
    CSS.Property.MinHeight | CSS.Property.MinWidth | number,
    "sizes"
  >
  /**
   * ### margin-inline-end
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-end
   *
   * ------------------------------------
   *
   * ### margin-inline-start
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-start
   */
  mx?: Token<
    CSS.Property.MarginInlineEnd | CSS.Property.MarginInlineStart | number,
    "spaces"
  >
  /**
   * ### margin-bottom
   *
   * The <code>margin</code> CSS property sets space around an element. It is a shorthand for <code>margin-top</code>, <code>margin-right</code>, <code>margin-bottom</code>, and <code>margin-left</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   *
   * ------------------------------------
   *
   * ### margin-top
   *
   * The <code>margin</code> CSS property sets space around an element. It is a shorthand for <code>margin-top</code>, <code>margin-right</code>, <code>margin-bottom</code>, and <code>margin-left</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-top
   */
  my?: Token<
    CSS.Property.MarginBottom | CSS.Property.MarginTop | number,
    "spaces"
  >
  /**
   * ### outline
   *
   * The <code>outline</code> CSS shorthand sets the color, style, and width of a line around an element, outside of the border.
   *
   * @baseline `Newly available`
   * @newly_available_date 2023-03-27
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline
   */
  outline?: Token<"inside" | "mixed" | "outside" | CSS.Property.Outline>
  /**
   * ### padding-inline-end
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-end
   *
   * ------------------------------------
   *
   * ### padding-inline-start
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-start
   */
  paddingX?: Token<
    CSS.Property.PaddingInlineEnd | CSS.Property.PaddingInlineStart | number,
    "spaces"
  >
  /**
   * ### padding-bottom
   *
   * The <code>padding</code> CSS property sets space between an element's edge and its contents. It is a shorthand for <code>padding-top</code>, <code>padding-right</code>, <code>padding-bottom</code>, and <code>padding-left</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   *
   * ------------------------------------
   *
   * ### padding-top
   *
   * The <code>padding</code> CSS property sets space between an element's edge and its contents. It is a shorthand for <code>padding-top</code>, <code>padding-right</code>, <code>padding-bottom</code>, and <code>padding-left</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
   */
  paddingY?: Token<
    CSS.Property.PaddingBottom | CSS.Property.PaddingTop | number,
    "spaces"
  >
  /**
   * ### padding-inline-end
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-end
   *
   * ------------------------------------
   *
   * ### padding-inline-start
   *
   * CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, <code>block-end</code> refers to the bottom. Also known as flow relative.
   *
   * @baseline `Widely available`
   * @widely_available_date 2024-03-20
   * @newly_available_date 2021-09-20
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-start
   */
  px?: Token<
    CSS.Property.PaddingInlineEnd | CSS.Property.PaddingInlineStart | number,
    "spaces"
  >
  /**
   * ### padding-bottom
   *
   * The <code>padding</code> CSS property sets space between an element's edge and its contents. It is a shorthand for <code>padding-top</code>, <code>padding-right</code>, <code>padding-bottom</code>, and <code>padding-left</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   *
   * ------------------------------------
   *
   * ### padding-top
   *
   * The <code>padding</code> CSS property sets space between an element's edge and its contents. It is a shorthand for <code>padding-top</code>, <code>padding-right</code>, <code>padding-bottom</code>, and <code>padding-left</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
   */
  py?: Token<
    CSS.Property.PaddingBottom | CSS.Property.PaddingTop | number,
    "spaces"
  >
  /**
   * Sets the value of `--rotate-x`.
   */
  rotateX?: Token<StringLiteral>
  /**
   * Sets the value of `--rotate-y`.
   */
  rotateY?: Token<StringLiteral>
  /**
   * Sets the value of `--rotate-z`.
   */
  rotateZ?: Token<StringLiteral>
  /**
   * Sets the value of `--saturate`.
   */
  saturate?: Token<StringLiteral>
  /**
   * Sets the value of `--scale-x`.
   */
  scaleX?: Token<StringLiteral>
  /**
   * Sets the value of `--scale-y`.
   */
  scaleY?: Token<StringLiteral>
  /**
   * Sets the value of `--scale-z`.
   */
  scaleZ?: Token<StringLiteral>
  /**
   * ### scroll-margin-left
   *
   * CSS scroll snap controls the panning and scrolling behavior within a scroll container.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-left
   *
   * ------------------------------------
   *
   * ### scroll-margin-right
   *
   * CSS scroll snap controls the panning and scrolling behavior within a scroll container.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-right
   */
  scrollMarginX?: Token<
    CSS.Property.ScrollMarginLeft | CSS.Property.ScrollMarginRight | number,
    "spaces"
  >
  /**
   * ### scroll-margin-bottom
   *
   * CSS scroll snap controls the panning and scrolling behavior within a scroll container.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-bottom
   *
   * ------------------------------------
   *
   * ### scroll-margin-top
   *
   * CSS scroll snap controls the panning and scrolling behavior within a scroll container.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-top
   */
  scrollMarginY?: Token<
    CSS.Property.ScrollMarginBottom | CSS.Property.ScrollMarginTop | number,
    "spaces"
  >
  /**
   * ### scroll-padding-left
   *
   * CSS scroll snap controls the panning and scrolling behavior within a scroll container.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-left
   *
   * ------------------------------------
   *
   * ### scroll-padding-right
   *
   * CSS scroll snap controls the panning and scrolling behavior within a scroll container.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-right
   */
  scrollPaddingX?: Token<
    CSS.Property.ScrollPaddingLeft | CSS.Property.ScrollPaddingRight | number,
    "spaces"
  >
  /**
   * ### scroll-padding-bottom
   *
   * CSS scroll snap controls the panning and scrolling behavior within a scroll container.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-bottom
   *
   * ------------------------------------
   *
   * ### scroll-padding-top
   *
   * CSS scroll snap controls the panning and scrolling behavior within a scroll container.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-top
   */
  scrollPaddingY?: Token<
    CSS.Property.ScrollPaddingBottom | CSS.Property.ScrollPaddingTop | number,
    "spaces"
  >
  /**
   * Sets the value of `--sepia`.
   */
  sepia?: Token<StringLiteral>
  /**
   * Sets the value of `--skew-x`.
   */
  skewX?: Token<StringLiteral>
  /**
   * Sets the value of `--skew-y`.
   */
  skewY?: Token<StringLiteral>
  /**
   * ### transition
   *
   * The <code>transition</code> shorthand CSS property sets how changes to an element's styles may occur over time. Transitions can be applied to specific CSS properties, all properties, or none.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-03-30
   * @newly_available_date 2015-09-30
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition
   */
  transition?: Token<
    | "all"
    | "backgrounds"
    | "colors"
    | "common"
    | "opacity"
    | "position"
    | "shadow"
    | "size"
    | CSS.Property.Transition
  >
  /**
   * ### transition-property
   *
   * The <code>transition</code> shorthand CSS property sets how changes to an element's styles may occur over time. Transitions can be applied to specific CSS properties, all properties, or none.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-03-30
   * @newly_available_date 2015-09-30
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-property
   */
  transitionProperty?: Token<
    | "all"
    | "backgrounds"
    | "colors"
    | "common"
    | "opacity"
    | "position"
    | "shadow"
    | "size"
    | CSS.Property.TransitionProperty
  >
  /**
   * Sets the value of `--translate-x`.
   */
  translateX?: Token<number | StringLiteral, "spaces">
  /**
   * Sets the value of `--translate-y`.
   */
  translateY?: Token<number | StringLiteral, "spaces">
  /**
   * Sets the value of `--translate-z`.
   */
  translateZ?: Token<StringLiteral>
  /**
   * If `true`, it clamps truncate a text after one line.
   */
  truncated?: Token<boolean>
  /**
   * Set CSS variables.
   *
   * @example
   * ```jsx
   * <Box
   *   vars={[{ name:"space", token: "spaces", value: "md" }]
   *   m="calc({space} * 2)"
   * >
   *   Box
   * </Box>
   * ```
   */
  vars?: Token<{ name: string; token?: ThemeToken; value?: Token<any> }[]>
  /**
   * ### container
   *
   * Container size queries with the <code>@container</code> at-rule apply styles to an element based on the dimensions of its container.
   *
   * @baseline `Newly available`
   * @newly_available_date 2023-02-14
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/@container
   */
  _container?: {
    [key: string]: any
    name?: StringLiteral
    css?: CSSObject
    aspectRatio?: CSS.Property.AspectRatio
    blockSize?: CSS.Property.BlockSize | number | ThemeTokens["sizes"]
    h?: CSS.Property.Height | number | ThemeTokens["sizes"]
    height?: CSS.Property.Height | number | ThemeTokens["sizes"]
    inlineSize?: CSS.Property.InlineSize | number | ThemeTokens["sizes"]
    maxAspectRatio?: CSS.Property.AspectRatio
    maxBlockSize?: CSS.Property.MaxBlockSize | number | ThemeTokens["sizes"]
    maxH?: CSS.Property.MaxHeight | number | ThemeTokens["sizes"]
    maxHeight?: CSS.Property.MaxHeight | number | ThemeTokens["sizes"]
    maxInlineSize?: CSS.Property.MaxInlineSize | number | ThemeTokens["sizes"]
    maxW?: CSS.Property.MaxWidth | number | ThemeTokens["sizes"]
    maxWidth?: CSS.Property.MaxWidth | number | ThemeTokens["sizes"]
    minAspectRatio?: CSS.Property.AspectRatio
    minBlockSize?: CSS.Property.MinBlockSize | number | ThemeTokens["sizes"]
    minH?: CSS.Property.MinHeight | number | ThemeTokens["sizes"]
    minHeight?: CSS.Property.MinHeight | number | ThemeTokens["sizes"]
    minInlineSize?: CSS.Property.MinInlineSize | number | ThemeTokens["sizes"]
    minW?: CSS.Property.MinWidth | number | ThemeTokens["sizes"]
    minWidth?: CSS.Property.MinWidth | number | ThemeTokens["sizes"]
    orientation?: "landscape" | "portrait" | StringLiteral
    query?: StringLiteral
    w?: CSS.Property.Width | number | ThemeTokens["sizes"]
    width?: CSS.Property.Width | number | ThemeTokens["sizes"]
  }[]
  /**
   * ### media
   *
   * The <code>@media</code> CSS rule conditionally applies styles based on the output device type, its capabilities, and the user's preferences. Media queries are composed of an optional media type such as <code>screen</code> or <code>print</code>, and one or more mandatory media features, such as <code>prefers-reduced-animations</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/@media
   */
  _landscape?: CSSObject
  /**
   * ### media
   *
   * The <code>@media</code> CSS rule conditionally applies styles based on the output device type, its capabilities, and the user's preferences. Media queries are composed of an optional media type such as <code>screen</code> or <code>print</code>, and one or more mandatory media features, such as <code>prefers-reduced-animations</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/@media
   */
  _media?: {
    [key: string]: any
    type?: "all" | "print" | "screen" | "speech" | StringLiteral
    css?: CSSObject
    anyHover?: "hover" | "none" | StringLiteral
    anyPointer?: "coarse" | "fine" | "none" | StringLiteral
    aspectRatio?: CSS.Property.AspectRatio
    color?: number | StringLiteral
    colorGamut?: "p3" | "rec2020" | "srgb" | StringLiteral
    colorIndex?: number | StringLiteral
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
      | StringLiteral
    dynamicRange?: "high" | "standard" | StringLiteral
    forcedColors?: "active" | "none" | StringLiteral
    grid?: 0 | 1 | "StringLiteral"
    h?: CSS.Property.Height | number | ThemeTokens["sizes"]
    height?: CSS.Property.Height | number | ThemeTokens["sizes"]
    hover?: "hover" | "none" | StringLiteral
    invertedColors?: "inverted" | "none" | StringLiteral
    maxColor?: number | StringLiteral
    maxColorIndex?: number | StringLiteral
    maxDeviceAspectRatio?: CSS.Property.AspectRatio
    maxDeviceHeight?: CSS.Property.MaxHeight | number | ThemeTokens["sizes"]
    maxH?: CSS.Property.MaxHeight | number | ThemeTokens["sizes"]
    maxHeight?: CSS.Property.MaxHeight | number | ThemeTokens["sizes"]
    maxMonochrome?: number | StringLiteral
    maxResolution?: StringLiteral
    maxW?: CSS.Property.MaxWidth | number | ThemeTokens["sizes"]
    maxWidth?: CSS.Property.MaxWidth | number | ThemeTokens["sizes"]
    mazDeviceWidth?: CSS.Property.Width | number | ThemeTokens["sizes"]
    minColor?: number | StringLiteral
    minColorIndex?: number | StringLiteral
    minDeviceAspectRatio?: CSS.Property.AspectRatio
    minDeviceHeight?: CSS.Property.MinHeight | number | ThemeTokens["sizes"]
    minDeviceWidth?: CSS.Property.Width | number | ThemeTokens["sizes"]
    minH?: CSS.Property.MinHeight | number | ThemeTokens["sizes"]
    minHeight?: CSS.Property.MinHeight | number | ThemeTokens["sizes"]
    minMonochrome?: number | StringLiteral
    minResolution?: StringLiteral
    minW?: CSS.Property.MinWidth | number | ThemeTokens["sizes"]
    minWidth?: CSS.Property.MinWidth | number | ThemeTokens["sizes"]
    monochrome?: number | StringLiteral
    orientation?: "landscape" | "portrait" | StringLiteral
    overflowBlock?:
      | "none"
      | "optional-paged"
      | "paged"
      | "scroll"
      | StringLiteral
    overflowInline?: "none" | "scroll" | StringLiteral
    pointer?: "coarse" | "fine" | "none" | StringLiteral
    prefersColorScheme?: "dark" | "light" | StringLiteral
    prefersContrast?:
      | "custom"
      | "high"
      | "low"
      | "no-preference"
      | StringLiteral
    prefersReducedMotion?: "no-preference" | "reduce" | StringLiteral
    query?: StringLiteral
    resolution?: StringLiteral
    scan?: "interlace" | "progressive" | StringLiteral
    scripting?: "enabled" | "initial-only" | "none" | StringLiteral
    update?: "fast" | "none" | "slow" | StringLiteral
    videoDynamicRange?: "high" | "standard" | StringLiteral
    w?: CSS.Property.Width | number | ThemeTokens["sizes"]
    width?: CSS.Property.Width | number | ThemeTokens["sizes"]
  }[]
  /**
   * ### media
   *
   * The <code>@media</code> CSS rule conditionally applies styles based on the output device type, its capabilities, and the user's preferences. Media queries are composed of an optional media type such as <code>screen</code> or <code>print</code>, and one or more mandatory media features, such as <code>prefers-reduced-animations</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/@media
   */
  _mediaDark?: CSSObject
  /**
   * ### media
   *
   * The <code>@media</code> CSS rule conditionally applies styles based on the output device type, its capabilities, and the user's preferences. Media queries are composed of an optional media type such as <code>screen</code> or <code>print</code>, and one or more mandatory media features, such as <code>prefers-reduced-animations</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/@media
   */
  _mediaLight?: CSSObject
  /**
   * ### media
   *
   * The <code>@media</code> CSS rule conditionally applies styles based on the output device type, its capabilities, and the user's preferences. Media queries are composed of an optional media type such as <code>screen</code> or <code>print</code>, and one or more mandatory media features, such as <code>prefers-reduced-animations</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/@media
   */
  _mediaReduceMotion?: CSSObject
  /**
   * ### media
   *
   * The <code>@media</code> CSS rule conditionally applies styles based on the output device type, its capabilities, and the user's preferences. Media queries are composed of an optional media type such as <code>screen</code> or <code>print</code>, and one or more mandatory media features, such as <code>prefers-reduced-animations</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/@media
   */
  _portrait?: CSSObject
  /**
   * ### media
   *
   * The <code>@media</code> CSS rule conditionally applies styles based on the output device type, its capabilities, and the user's preferences. Media queries are composed of an optional media type such as <code>screen</code> or <code>print</code>, and one or more mandatory media features, such as <code>prefers-reduced-animations</code>.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-01-29
   * @newly_available_date 2015-07-29
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/@media
   */
  _print?: CSSObject
  /**
   * ### supports
   *
   * The <code>@supports</code> at-rule applies styles based on a browser's support for CSS features, such as a CSS property and value. Also known as feature queries.
   *
   * @baseline `Widely available`
   * @widely_available_date 2018-03-30
   * @newly_available_date 2015-09-30
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/@supports
   */
  _supports?: { css?: CSSObject; query?: StringLiteral }[]
}
