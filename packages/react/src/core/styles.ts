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
  aspectRatio: true,
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
  emptyCells: true,
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
  offset: true,
  offsetAnchor: true,
  offsetDistance: true,
  offsetPath: true,
  offsetPosition: true,
  offsetRotate: true,
  opacity: true,
  order: true,
  orphans: true,
  outline: { processResult: true, transform: transforms.outline },
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
  printColorAdjust: true,
  quotes: true,
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
  rubyPosition: true,
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
  stopColor: true,
  stopOpacity: true,
  stroke: {
    properties: "stroke",
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
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
  textTransform: true,
  textUnderlineOffset: true,
  textUnderlinePosition: true,
  textWrap: true,
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
  translate: true,
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
  userSelect: true,
  vectorEffect: true,
  verticalAlign: true,
  viewTimeline: true,
  viewTimelineAxis: true,
  viewTimelineInset: true,
  viewTimelineName: true,
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
  apply: { processResult: true, transform: transforms.styles() },
  layerStyle: {
    processResult: true,
    transform: transforms.styles("layerStyles"),
  },
  textStyle: {
    processResult: true,
    transform: transforms.styles("textStyles"),
  },
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
  vars: { processSkip: true, transform: transforms.vars },
} as const satisfies StyleConfigs

export type AtRuleStyleProperty = keyof typeof atRuleStyles

export const atRuleStyles = {
  keyframes: {
    processSkip: true,
    token: "keyframes",
    transform: pipe(transforms.token("keyframes"), transforms.keyframes),
  },
  _container: { processSkip: true, transform: transforms.container },
  _media: { processSkip: true, transform: transforms.media },
  _supports: { processSkip: true, transform: transforms.supports },
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

export const aspectRatioProperties = [] as const

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
  "color",
  "textColor",
  "columnRuleColor",
  "fill",
  "floodColor",
  "lightingColor",
  "outlineColor",
  "scrollbarColor",
  "stroke",
  "textDecorationColor",
  "textEmphasisColor",
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
  "translateX",
  "translateY",
] as const

export type ZIndexProperty = (typeof zIndexProperties)[number]

export const zIndexProperties = ["zIndex", "z"] as const

export type LayoutStyleProperty = (typeof layoutStyleProperties)[number]

export const layoutStyleProperties = [
  "width",
  "inlineSize",
  "height",
  "backfaceVisibility",
  "blockSize",
  "boxSize",
  "minWidth",
  "minInlineSize",
  "minHeight",
  "minBlockSize",
  "maxWidth",
  "maxInlineSize",
  "maxHeight",
  "maxBlockSize",
  "overflow",
  "overflowX",
  "overflowY",
  "overscrollBehavior",
  "overscroll",
  "overscrollX",
  "textDecor",
  "overscrollBehaviorY",
  "overscrollY",
  "display",
  "aspectRatio",
  "verticalAlign",
  "boxSizing",
  "boxDecorationBreak",
  "float",
  "objectFit",
  "objectPosition",
  "visibility",
  "isolation",
  "w",
  "h",
  "minW",
  "maxW",
  "minH",
  "maxH",
  "position",
  "pos",
  "zIndex",
  "inset",
  "insetX",
  "insetInline",
  "insetY",
  "insetBlock",
  "top",
  "insetBlockStart",
  "bottom",
  "insetBlockEnd",
  "left",
  "insetInlineStart",
  "right",
  "insetInlineEnd",
  "insetStart",
  "insetEnd",
  "margin",
  "marginTop",
  "marginBlockStart",
  "marginRight",
  "marginInlineEnd",
  "marginBottom",
  "marginBlockEnd",
  "marginLeft",
  "marginInlineStart",
  "marginX",
  "marginInline",
  "marginY",
  "marginBlock",
  "padding",
  "paddingTop",
  "paddingBlockStart",
  "paddingRight",
  "paddingBottom",
  "paddingBlockEnd",
  "paddingLeft",
  "paddingInlineStart",
  "paddingInlineEnd",
  "paddingX",
  "paddingInline",
  "paddingY",
  "paddingBlock",
  "m",
  "mt",
  "mr",
  "me",
  "marginEnd",
  "mb",
  "ml",
  "ms",
  "marginStart",
  "mx",
  "my",
  "p",
  "pt",
  "py",
  "px",
  "pb",
  "pl",
  "ps",
  "paddingStart",
  "pr",
  "pe",
  "paddingEnd",
  "alignItems",
  "alignContent",
  "justifyItems",
  "justifyContent",
  "flexWrap",
  "flexDirection",
  "flexDir",
  "flex",
  "flexFlow",
  "flexGrow",
  "flexShrink",
  "flexBasis",
  "justifySelf",
  "alignSelf",
  "order",
  "placeItems",
  "placeContent",
  "placeSelf",
  "gap",
  "rowGap",
  "columnGap",
  "grid",
  "gridColumn",
  "gridRow",
  "gridAutoFlow",
  "gridAutoColumns",
  "gridColumnStart",
  "gridColumnEnd",
  "gridRowStart",
  "gridRowEnd",
  "gridAutoRows",
  "gridTemplate",
  "gridTemplateColumns",
  "gridTemplateRows",
  "gridTemplateAreas",
  "gridArea",
] as const

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
   * The CSS `accent-color` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/accent-color
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - chrome : 93
   * - chrome_android : 93
   * - edge : 93
   * - firefox : 92
   * - firefox_android : 92
   */
  accent?: Token<CSS.Property.AccentColor, "colors">
  /**
   * The CSS `accent-color` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/accent-color
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - chrome : 93
   * - chrome_android : 93
   * - edge : 93
   * - firefox : 92
   * - firefox_android : 92
   */
  accentColor?: Token<CSS.Property.AccentColor, "colors">
  /**
   * The CSS `align-content` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/align-content
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-03-30`
   * @newly_available_date `2015-09-30`
   * @support_browsers
   * - chrome : 29
   * - chrome_android : 29
   * - edge : 12
   * - firefox : 20
   * - firefox_android : 20
   * - safari : 9
   * - safari_ios : 9
   */
  alignContent?: Token<CSS.Property.AlignContent>
  /**
   * The CSS `align-items` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/align-items
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-03-30`
   * @newly_available_date `2015-09-30`
   * @support_browsers
   * - chrome : 29
   * - chrome_android : 29
   * - edge : 12
   * - firefox : 20
   * - firefox_android : 20
   * - safari : 9
   * - safari_ios : 9
   */
  alignItems?: Token<CSS.Property.AlignItems>
  /**
   * The CSS `alignment-baseline` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/alignment-baseline
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - chrome : ≤80
   * - chrome_android : ≤80
   * - edge : ≤80
   * - safari : ≤13.1
   * - safari_ios : ≤13.4
   */
  alignmentBaseline?: Token<CSS.Property.AlignmentBaseline>
  /**
   * The CSS `align-self` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/align-self
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-03-30`
   * @newly_available_date `2015-09-30`
   * @support_browsers
   * - chrome : 29
   * - chrome_android : 29
   * - edge : 12
   * - firefox : 20
   * - firefox_android : 20
   * - safari : 9
   * - safari_ios : 9
   */
  alignSelf?: Token<CSS.Property.AlignSelf>
  /**
   * The CSS `all` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/all
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 37
   * - chrome_android : 37
   * - edge : 79
   * - firefox : 27
   * - firefox_android : 27
   * - safari : 9.1
   * - safari_ios : 9.3
   */
  all?: Token<CSS.Globals>
  /**
   * The CSS `animation` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/animation
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-03-30`
   * @newly_available_date `2015-09-30`
   * @support_browsers
   * - chrome : 43
   * - chrome_android : 43
   * - edge : 12
   * - firefox : 16
   * - firefox_android : 16
   * - safari : 9
   * - safari_ios : 9
   */
  animation?: Token<CSS.Property.Animation, "animations">
  /**
   * The CSS `animation-composition` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/animation-composition
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2023-07-04`
   * @support_browsers
   * - chrome : 112
   * - chrome_android : 112
   * - edge : 112
   * - firefox : 115
   * - firefox_android : 115
   * - safari : 16
   * - safari_ios : 16
   */
  animationComposition?: Token<CSS.Property.AnimationComposition>
  /**
   * The CSS `animation-delay` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/animation-delay
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-03-30`
   * @newly_available_date `2015-09-30`
   * @support_browsers
   * - chrome : 43
   * - chrome_android : 43
   * - edge : 12
   * - firefox : 16
   * - firefox_android : 16
   * - safari : 9
   * - safari_ios : 9
   */
  animationDelay?: Token<CSS.Property.AnimationDelay>
  /**
   * The CSS `animation-direction` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/animation-direction
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-03-30`
   * @newly_available_date `2015-09-30`
   * @support_browsers
   * - chrome : 43
   * - chrome_android : 43
   * - edge : 12
   * - firefox : 16
   * - firefox_android : 16
   * - safari : 9
   * - safari_ios : 9
   */
  animationDirection?: Token<CSS.Property.AnimationDirection>
  /**
   * The CSS `animation-duration` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/animation-duration
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-03-30`
   * @newly_available_date `2015-09-30`
   * @support_browsers
   * - chrome : 43
   * - chrome_android : 43
   * - edge : 12
   * - firefox : 16
   * - firefox_android : 16
   * - safari : 9
   * - safari_ios : 9
   */
  animationDuration?: Token<CSS.Property.AnimationDuration, "durations">
  /**
   * The CSS `animation-fill-mode` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-03-30`
   * @newly_available_date `2015-09-30`
   * @support_browsers
   * - chrome : 43
   * - chrome_android : 43
   * - edge : 12
   * - firefox : 16
   * - firefox_android : 16
   * - safari : 9
   * - safari_ios : 9
   */
  animationFillMode?: Token<CSS.Property.AnimationFillMode>
  /**
   * The CSS `animation-iteration-count` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-03-30`
   * @newly_available_date `2015-09-30`
   * @support_browsers
   * - chrome : 43
   * - chrome_android : 43
   * - edge : 12
   * - firefox : 16
   * - firefox_android : 16
   * - safari : 9
   * - safari_ios : 9
   */
  animationIterationCount?: Token<CSS.Property.AnimationIterationCount>
  /**
   * The CSS `animation-name` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/animation-name
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-03-30`
   * @newly_available_date `2015-09-30`
   * @support_browsers
   * - chrome : 43
   * - chrome_android : 43
   * - edge : 12
   * - firefox : 16
   * - firefox_android : 16
   * - safari : 9
   * - safari_ios : 9
   */
  animationName?: Token<CSS.Property.AnimationName, "keyframes">
  /**
   * The CSS `animation-play-state` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/animation-play-state
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-03-30`
   * @newly_available_date `2015-09-30`
   * @support_browsers
   * - chrome : 43
   * - chrome_android : 43
   * - edge : 12
   * - firefox : 16
   * - firefox_android : 16
   * - safari : 9
   * - safari_ios : 9
   */
  animationPlayState?: Token<CSS.Property.AnimationPlayState>
  /**
   * The CSS `animation-range` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/animation-range
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - chrome : 115
   * - chrome_android : 115
   * - edge : 115
   */
  animationRange?: Token<CSS.Property.AnimationRange>
  /**
   * The CSS `animation-range-end` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/animation-range-end
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - chrome : 115
   * - chrome_android : 115
   * - edge : 115
   */
  animationRangeEnd?: Token<CSS.Property.AnimationRangeEnd>
  /**
   * The CSS `animation-range-start` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/animation-range-start
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - chrome : 115
   * - chrome_android : 115
   * - edge : 115
   */
  animationRangeStart?: Token<CSS.Property.AnimationRangeStart>
  /**
   * The CSS `animation-timeline` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/animation-timeline
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - chrome : 115
   * - chrome_android : 115
   * - edge : 115
   */
  animationTimeline?: Token<CSS.Property.AnimationTimeline>
  /**
   * The CSS `animation-timing-function` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/animation-timing-function
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-03-30`
   * @newly_available_date `2015-09-30`
   * @support_browsers
   * - chrome : 43
   * - chrome_android : 43
   * - edge : 12
   * - firefox : 16
   * - firefox_android : 16
   * - safari : 9
   * - safari_ios : 9
   */
  animationTimingFunction?: Token<
    CSS.Property.AnimationTimingFunction,
    "easings"
  >
  /**
   * The CSS `appearance` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/appearance
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-09-14`
   * @newly_available_date `2022-03-14`
   * @support_browsers
   * - chrome : 84
   * - chrome_android : 84
   * - edge : 84
   * - firefox : 80
   * - firefox_android : 80
   * - safari : 15.4
   * - safari_ios : 15.4
   */
  appearance?: Token<CSS.Property.Appearance>
  /**
   * The CSS `aspect-ratio` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/aspect-ratio
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 88
   * - chrome_android : 88
   * - edge : 88
   * - firefox : 89
   * - firefox_android : 89
   * - safari : 15
   * - safari_ios : 15
   */
  aspectRatio?: Token<CSS.Property.AspectRatio>
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
   * The CSS `backdrop-filter` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/backdrop-filter
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2024-09-16`
   * @support_browsers
   * - chrome : 76
   * - chrome_android : 76
   * - edge : 79
   * - firefox : 103
   * - firefox_android : 103
   * - safari : 18
   * - safari_ios : 18
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
   * The CSS `backface-visibility` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/backface-visibility
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-09-14`
   * @newly_available_date `2022-03-14`
   * @support_browsers
   * - chrome : 36
   * - chrome_android : 36
   * - edge : 12
   * - firefox : 16
   * - firefox_android : 16
   * - safari : 15.4
   * - safari_ios : 15.4
   */
  backfaceVisibility?: Token<CSS.Property.BackfaceVisibility | number, "sizes">
  /**
   * The CSS `background` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/background
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 3.6
   * - firefox_android : 4
   * - safari : 1.3
   * - safari_ios : 1
   */
  background?: Token<CSS.Property.Background, "colors">
  /**
   * The CSS `background-attachment` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/background-attachment
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-09-14`
   * @newly_available_date `2022-03-14`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 25
   * - firefox_android : 25
   * - safari : 15.4
   * - safari_ios : 15.4
   */
  backgroundAttachment?: Token<CSS.Property.BackgroundAttachment>
  /**
   * The CSS `background-blend-mode` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/background-blend-mode
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 35
   * - chrome_android : 59
   * - edge : 79
   * - firefox : 30
   * - firefox_android : 54
   * - safari : 8
   * - safari_ios : 8
   */
  backgroundBlendMode?: Token<CSS.Property.BackgroundBlendMode>
  /**
   * The CSS `background-clip` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/background-clip
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 21
   * - chrome_android : 25
   * - edge : 12
   * - firefox : 22
   * - firefox_android : 22
   * - safari : 5.1
   * - safari_ios : 5
   */
  backgroundClip?: Token<CSS.Property.BackgroundClip>
  /**
   * The CSS `background-color` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/background-color
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  backgroundColor?: Token<CSS.Property.BackgroundColor, "colors">
  /**
   * The CSS `background-image` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/background-image
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 3.6
   * - firefox_android : 4
   * - safari : 1.3
   * - safari_ios : 1
   */
  backgroundImage?: Token<CSS.Property.BackgroundImage, "gradients">
  /**
   * The CSS `background-origin` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/background-origin
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 21
   * - chrome_android : 25
   * - edge : 12
   * - firefox : 22
   * - firefox_android : 22
   * - safari : 5.1
   * - safari_ios : 4
   */
  backgroundOrigin?: Token<CSS.Property.BackgroundOrigin>
  /**
   * The CSS `background-position` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/background-position
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 25
   * - chrome_android : 25
   * - edge : 12
   * - firefox : 13
   * - firefox_android : 14
   * - safari : 7
   * - safari_ios : 7
   */
  backgroundPosition?: Token<CSS.Property.BackgroundPosition>
  /**
   * The CSS `background-position-x` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/background-position-x
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 25
   * - chrome_android : 25
   * - edge : 12
   * - firefox : 13
   * - firefox_android : 14
   * - safari : 7
   * - safari_ios : 7
   */
  backgroundPositionX?: Token<CSS.Property.BackgroundPositionX>
  /**
   * The CSS `background-position-y` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/background-position-y
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 25
   * - chrome_android : 25
   * - edge : 12
   * - firefox : 13
   * - firefox_android : 14
   * - safari : 7
   * - safari_ios : 7
   */
  backgroundPositionY?: Token<CSS.Property.BackgroundPositionY>
  /**
   * The CSS `background-repeat` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/background-repeat
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2019-03-20`
   * @newly_available_date `2016-09-20`
   * @support_browsers
   * - chrome : 30
   * - chrome_android : 30
   * - edge : 12
   * - firefox : 49
   * - firefox_android : 49
   * - safari : 8
   * - safari_ios : 8
   */
  backgroundRepeat?: Token<CSS.Property.BackgroundRepeat>
  /**
   * The CSS `background-size` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/background-size
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 21
   * - chrome_android : 25
   * - edge : 12
   * - firefox : 9
   * - firefox_android : 18
   * - safari : 5.1
   * - safari_ios : 4.2
   */
  backgroundSize?: Token<CSS.Property.BackgroundSize>
  /**
   * The CSS `baseline-shift` property.
   *
   * @see Docs https://drafts.csswg.org/css-inline/#baseline-shift-property
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - chrome : ≤80
   * - chrome_android : ≤80
   * - edge : ≤80
   * - safari : ≤13.1
   * - safari_ios : ≤13.4
   */
  baselineShift?: Token<CSS.Property.BaselineShift>
  /**
   * The CSS `background` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/background
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 3.6
   * - firefox_android : 4
   * - safari : 1.3
   * - safari_ios : 1
   */
  bg?: Token<CSS.Property.Background, "colors">
  /**
   * The CSS `background-attachment` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/background-attachment
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-09-14`
   * @newly_available_date `2022-03-14`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 25
   * - firefox_android : 25
   * - safari : 15.4
   * - safari_ios : 15.4
   */
  bgAttachment?: Token<CSS.Property.BackgroundAttachment>
  /**
   * The CSS `background-blend-mode` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/background-blend-mode
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 35
   * - chrome_android : 59
   * - edge : 79
   * - firefox : 30
   * - firefox_android : 54
   * - safari : 8
   * - safari_ios : 8
   */
  bgBlendMode?: Token<CSS.Property.BackgroundBlendMode>
  /**
   * The CSS `background-clip` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/background-clip
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 21
   * - chrome_android : 25
   * - edge : 12
   * - firefox : 22
   * - firefox_android : 22
   * - safari : 5.1
   * - safari_ios : 5
   */
  bgClip?: Token<CSS.Property.BackgroundClip>
  /**
   * The CSS `background-color` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/background-color
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  bgColor?: Token<CSS.Property.BackgroundColor, "colors">
  /**
   * The CSS `background-image` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/background-image
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 3.6
   * - firefox_android : 4
   * - safari : 1.3
   * - safari_ios : 1
   */
  bgGradient?: Token<CSS.Property.BackgroundImage, "gradients">
  /**
   * The CSS `background-image` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/background-image
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 3.6
   * - firefox_android : 4
   * - safari : 1.3
   * - safari_ios : 1
   */
  bgImage?: Token<CSS.Property.BackgroundImage, "gradients">
  /**
   * The CSS `background-image` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/background-image
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 3.6
   * - firefox_android : 4
   * - safari : 1.3
   * - safari_ios : 1
   */
  bgImg?: Token<CSS.Property.BackgroundImage, "gradients">
  /**
   * The CSS `background-origin` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/background-origin
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 21
   * - chrome_android : 25
   * - edge : 12
   * - firefox : 22
   * - firefox_android : 22
   * - safari : 5.1
   * - safari_ios : 4
   */
  bgOrigin?: Token<CSS.Property.BackgroundOrigin>
  /**
   * The CSS `background-position` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/background-position
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 25
   * - chrome_android : 25
   * - edge : 12
   * - firefox : 13
   * - firefox_android : 14
   * - safari : 7
   * - safari_ios : 7
   */
  bgPosition?: Token<CSS.Property.BackgroundPosition>
  /**
   * The CSS `background-position-x` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/background-position-x
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 25
   * - chrome_android : 25
   * - edge : 12
   * - firefox : 13
   * - firefox_android : 14
   * - safari : 7
   * - safari_ios : 7
   */
  bgPositionX?: Token<CSS.Property.BackgroundPositionX>
  /**
   * The CSS `background-position-y` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/background-position-y
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 25
   * - chrome_android : 25
   * - edge : 12
   * - firefox : 13
   * - firefox_android : 14
   * - safari : 7
   * - safari_ios : 7
   */
  bgPositionY?: Token<CSS.Property.BackgroundPositionY>
  /**
   * The CSS `background-position-x` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/background-position-x
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 25
   * - chrome_android : 25
   * - edge : 12
   * - firefox : 13
   * - firefox_android : 14
   * - safari : 7
   * - safari_ios : 7
   */
  bgPosX?: Token<CSS.Property.BackgroundPositionX>
  /**
   * The CSS `background-position-y` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/background-position-y
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 25
   * - chrome_android : 25
   * - edge : 12
   * - firefox : 13
   * - firefox_android : 14
   * - safari : 7
   * - safari_ios : 7
   */
  bgPosY?: Token<CSS.Property.BackgroundPositionY>
  /**
   * The CSS `background-repeat` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/background-repeat
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2019-03-20`
   * @newly_available_date `2016-09-20`
   * @support_browsers
   * - chrome : 30
   * - chrome_android : 30
   * - edge : 12
   * - firefox : 49
   * - firefox_android : 49
   * - safari : 8
   * - safari_ios : 8
   */
  bgRepeat?: Token<CSS.Property.BackgroundRepeat>
  /**
   * The CSS `background-size` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/background-size
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 21
   * - chrome_android : 25
   * - edge : 12
   * - firefox : 9
   * - firefox_android : 18
   * - safari : 5.1
   * - safari_ios : 4.2
   */
  bgSize?: Token<CSS.Property.BackgroundSize>
  /**
   * The CSS `mix-blend-mode` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 41
   * - chrome_android : 41
   * - edge : 79
   * - firefox : 32
   * - firefox_android : 32
   * - safari : 8
   * - safari_ios : 8
   */
  blendMode?: Token<CSS.Property.MixBlendMode>
  /**
   * The CSS `block-size` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/block-size
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  blockSize?: Token<CSS.Property.BlockSize | number, "sizes">
  /**
   * Sets the value of `--blur`.
   */
  blur?: Token<StringLiteral, "blurs">
  /**
   * The CSS `border` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 14
   * - safari : 1
   * - safari_ios : 3
   */
  border?: Token<CSS.Property.Border | number, "borders">
  /**
   * The CSS `border-block` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-block
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderBlock?: Token<CSS.Property.BorderBlock | number, "borders">
  /**
   * The CSS `border-block-color` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-block-color
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderBlockColor?: Token<CSS.Property.BorderBlockColor, "colors">
  /**
   * The CSS `border-block-end` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-block-end
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderBlockEnd?: Token<CSS.Property.BorderBlockEnd | number, "borders">
  /**
   * The CSS `border-block-end-color` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-block-end-color
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderBlockEndColor?: Token<CSS.Property.BorderBlockEndColor, "colors">
  /**
   * The CSS `border-block-end-style` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-block-end-style
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderBlockEndStyle?: Token<CSS.Property.BorderBlockEndStyle>
  /**
   * The CSS `border-block-end-width` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-block-end-width
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderBlockEndWidth?: Token<CSS.Property.BorderBlockEndWidth | number>
  /**
   * The CSS `border-block-start` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-block-start
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderBlockStart?: Token<CSS.Property.BorderBlockStart | number, "borders">
  /**
   * The CSS `border-block-start-color` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-block-start-color
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderBlockStartColor?: Token<CSS.Property.BorderBlockStartColor, "colors">
  /**
   * The CSS `border-block-start-style` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-block-start-style
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderBlockStartStyle?: Token<CSS.Property.BorderBlockStartStyle>
  /**
   * The CSS `border-block-start-width` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-block-start-width
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderBlockStartWidth?: Token<CSS.Property.BorderBlockStartWidth | number>
  /**
   * The CSS `border-block-style` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-block-style
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderBlockStyle?: Token<CSS.Property.BorderBlockStyle>
  /**
   * The CSS `border-block-width` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-block-width
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderBlockWidth?: Token<CSS.Property.BorderBlockWidth | number>
  /**
   * The CSS `border-bottom` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-bottom
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 14
   * - safari : 1
   * - safari_ios : 3
   */
  borderBottom?: Token<CSS.Property.BorderBottom | number, "borders">
  /**
   * The CSS `border-bottom-color` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-bottom-color
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 14
   * - safari : 1
   * - safari_ios : 3
   */
  borderBottomColor?: Token<CSS.Property.BorderBottomColor, "colors">
  /**
   * The CSS `border-end-end-radius` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-end-end-radius
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderBottomEndRadius?: Token<
    CSS.Property.BorderEndEndRadius | number,
    "radii"
  >
  /**
   * The CSS `border-bottom-left-radius` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 4
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 4
   * - firefox_android : 4
   * - safari : 5
   * - safari_ios : 4.2
   */
  borderBottomLeftRadius?: Token<
    CSS.Property.BorderBottomLeftRadius | number,
    "radii"
  >
  /**
   * The CSS `border-bottom-left-radius` and `border-bottom-right-radius` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 4
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 4
   * - firefox_android : 4
   * - safari : 5
   * - safari_ios : 4.2
   */
  borderBottomRadius?: Token<
    | CSS.Property.BorderBottomLeftRadius
    | CSS.Property.BorderBottomRightRadius
    | number,
    "radii"
  >
  /**
   * The CSS `border-bottom-right-radius` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 4
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 4
   * - firefox_android : 4
   * - safari : 5
   * - safari_ios : 4.2
   */
  borderBottomRightRadius?: Token<
    CSS.Property.BorderBottomRightRadius | number,
    "radii"
  >
  /**
   * The CSS `border-end-start-radius` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-end-start-radius
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderBottomStartRadius?: Token<
    CSS.Property.BorderEndStartRadius | number,
    "radii"
  >
  /**
   * The CSS `border-bottom-style` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-bottom-style
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 14
   * - safari : 1
   * - safari_ios : 3
   */
  borderBottomStyle?: Token<CSS.Property.BorderBottomStyle>
  /**
   * The CSS `border-bottom-width` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-bottom-width
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 14
   * - safari : 1
   * - safari_ios : 3
   */
  borderBottomWidth?: Token<CSS.Property.BorderBottomWidth | number>
  /**
   * The CSS `border-collapse` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-collapse
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  borderCollapse?: Token<CSS.Property.BorderCollapse>
  /**
   * The CSS `border-color` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-color
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 14
   * - safari : 1
   * - safari_ios : 3
   */
  borderColor?: Token<CSS.Property.BorderColor, "colors">
  /**
   * The CSS `border-inline-end` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-inline-end
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderEnd?: Token<CSS.Property.BorderInlineEnd | number, "borders">
  /**
   * The CSS `border-inline-end-color` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderEndColor?: Token<CSS.Property.BorderInlineEndColor, "colors">
  /**
   * The CSS `border-end-end-radius` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-end-end-radius
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderEndEndRadius?: Token<CSS.Property.BorderEndEndRadius | number, "radii">
  /**
   * The CSS `border-end-start-radius` and `border-end-end-radius` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-end-end-radius
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-end-start-radius
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderEndRadius?: Token<
    | CSS.Property.BorderEndEndRadius
    | CSS.Property.BorderEndStartRadius
    | number,
    "radii"
  >
  /**
   * The CSS `border-end-start-radius` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-end-start-radius
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderEndStartRadius?: Token<
    CSS.Property.BorderEndStartRadius | number,
    "radii"
  >
  /**
   * The CSS `border-inline-end-style` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderEndStyle?: Token<CSS.Property.BorderInlineEndStyle>
  /**
   * The CSS `border-inline-end-width` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderEndWidth?: Token<CSS.Property.BorderInlineEndWidth | number>
  /**
   * The CSS `border-image` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-image
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2019-08-01`
   * @newly_available_date `2017-02-01`
   * @support_browsers
   * - chrome : 56
   * - chrome_android : 56
   * - edge : 12
   * - firefox : 50
   * - firefox_android : 50
   * - safari : 9.1
   * - safari_ios : 9.3
   */
  borderImage?: Token<CSS.Property.BorderImage | number, "borders">
  /**
   * The CSS `border-image-outset` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-image-outset
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2019-08-01`
   * @newly_available_date `2017-02-01`
   * @support_browsers
   * - chrome : 56
   * - chrome_android : 56
   * - edge : 12
   * - firefox : 50
   * - firefox_android : 50
   * - safari : 9.1
   * - safari_ios : 9.3
   */
  borderImageOutset?: Token<CSS.Property.BorderImageOutset>
  /**
   * The CSS `border-image-repeat` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-image-repeat
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2019-08-01`
   * @newly_available_date `2017-02-01`
   * @support_browsers
   * - chrome : 56
   * - chrome_android : 56
   * - edge : 12
   * - firefox : 50
   * - firefox_android : 50
   * - safari : 9.1
   * - safari_ios : 9.3
   */
  borderImageRepeat?: Token<CSS.Property.BorderImageRepeat>
  /**
   * The CSS `border-image-slice` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-image-slice
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2019-08-01`
   * @newly_available_date `2017-02-01`
   * @support_browsers
   * - chrome : 56
   * - chrome_android : 56
   * - edge : 12
   * - firefox : 50
   * - firefox_android : 50
   * - safari : 9.1
   * - safari_ios : 9.3
   */
  borderImageSlice?: Token<CSS.Property.BorderImageSlice>
  /**
   * The CSS `border-image-source` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-image-source
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2019-08-01`
   * @newly_available_date `2017-02-01`
   * @support_browsers
   * - chrome : 56
   * - chrome_android : 56
   * - edge : 12
   * - firefox : 50
   * - firefox_android : 50
   * - safari : 9.1
   * - safari_ios : 9.3
   */
  borderImageSource?: Token<CSS.Property.BorderImageSource, "gradients">
  /**
   * The CSS `border-image-width` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-image-width
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2019-08-01`
   * @newly_available_date `2017-02-01`
   * @support_browsers
   * - chrome : 56
   * - chrome_android : 56
   * - edge : 12
   * - firefox : 50
   * - firefox_android : 50
   * - safari : 9.1
   * - safari_ios : 9.3
   */
  borderImageWidth?: Token<CSS.Property.BorderImageWidth | number>
  /**
   * The CSS `border-inline` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-inline
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderInline?: Token<CSS.Property.BorderInline | number, "borders">
  /**
   * The CSS `border-inline-color` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-inline-color
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderInlineColor?: Token<CSS.Property.BorderInlineColor, "colors">
  /**
   * The CSS `border-inline-end` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-inline-end
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderInlineEnd?: Token<CSS.Property.BorderInlineEnd | number, "borders">
  /**
   * The CSS `border-inline-end-color` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderInlineEndColor?: Token<CSS.Property.BorderInlineEndColor, "colors">
  /**
   * The CSS `border-end-start-radius` and `border-end-end-radius` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-end-end-radius
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-end-start-radius
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderInlineEndRadius?: Token<
    | CSS.Property.BorderEndEndRadius
    | CSS.Property.BorderEndStartRadius
    | number,
    "radii"
  >
  /**
   * The CSS `border-inline-end-style` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderInlineEndStyle?: Token<CSS.Property.BorderInlineEndStyle>
  /**
   * The CSS `border-inline-end-width` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderInlineEndWidth?: Token<CSS.Property.BorderInlineEndWidth | number>
  /**
   * The CSS `border-inline-start` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-inline-start
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderInlineStart?: Token<CSS.Property.BorderInlineStart | number, "borders">
  /**
   * The CSS `border-inline-start-color` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderInlineStartColor?: Token<CSS.Property.BorderInlineStartColor, "colors">
  /**
   * The CSS `border-start-start-radius` and `border-start-end-radius` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-start-end-radius
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-start-start-radius
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderInlineStartRadius?: Token<
    | CSS.Property.BorderStartEndRadius
    | CSS.Property.BorderStartStartRadius
    | number,
    "radii"
  >
  /**
   * The CSS `border-inline-start-style` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderInlineStartStyle?: Token<CSS.Property.BorderInlineStartStyle>
  /**
   * The CSS `border-inline-start-width` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderInlineStartWidth?: Token<CSS.Property.BorderInlineStartWidth | number>
  /**
   * The CSS `border-inline-style` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-inline-style
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderInlineStyle?: Token<CSS.Property.BorderInlineStyle>
  /**
   * The CSS `border-inline-width` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-inline-width
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderInlineWidth?: Token<CSS.Property.BorderInlineWidth | number>
  /**
   * The CSS `border-left` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-left
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 14
   * - safari : 1
   * - safari_ios : 3
   */
  borderLeft?: Token<CSS.Property.BorderLeft | number, "borders">
  /**
   * The CSS `border-left-color` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-left-color
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 14
   * - safari : 1
   * - safari_ios : 3
   */
  borderLeftColor?: Token<CSS.Property.BorderLeftColor, "colors">
  /**
   * The CSS `border-top-left-radius` and `border-bottom-left-radius` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 4
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 4
   * - firefox_android : 4
   * - safari : 5
   * - safari_ios : 4.2
   */
  borderLeftRadius?: Token<
    | CSS.Property.BorderBottomLeftRadius
    | CSS.Property.BorderTopLeftRadius
    | number,
    "radii"
  >
  /**
   * The CSS `border-left-style` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-left-style
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 14
   * - safari : 1
   * - safari_ios : 3
   */
  borderLeftStyle?: Token<CSS.Property.BorderLeftStyle>
  /**
   * The CSS `border-left-width` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-left-width
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 14
   * - safari : 1
   * - safari_ios : 3
   */
  borderLeftWidth?: Token<CSS.Property.BorderLeftWidth | number>
  /**
   * The CSS `border-radius` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-radius
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 4
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 4
   * - firefox_android : 4
   * - safari : 5
   * - safari_ios : 4.2
   */
  borderRadius?: Token<CSS.Property.BorderRadius | number, "radii">
  /**
   * The CSS `border-right` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-right
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 14
   * - safari : 1
   * - safari_ios : 3
   */
  borderRight?: Token<CSS.Property.BorderRight | number, "borders">
  /**
   * The CSS `border-right-color` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-right-color
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 14
   * - safari : 1
   * - safari_ios : 3
   */
  borderRightColor?: Token<CSS.Property.BorderRightColor, "colors">
  /**
   * The CSS `border-top-right-radius` and `border-bottom-right-radius` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 4
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 4
   * - firefox_android : 4
   * - safari : 5
   * - safari_ios : 4.2
   */
  borderRightRadius?: Token<
    | CSS.Property.BorderBottomRightRadius
    | CSS.Property.BorderTopRightRadius
    | number,
    "radii"
  >
  /**
   * The CSS `border-right-style` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-right-style
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 14
   * - safari : 1
   * - safari_ios : 3
   */
  borderRightStyle?: Token<CSS.Property.BorderRightStyle>
  /**
   * The CSS `border-right-width` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-right-width
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 14
   * - safari : 1
   * - safari_ios : 3
   */
  borderRightWidth?: Token<CSS.Property.BorderRightWidth | number>
  /**
   * The CSS `border-spacing` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-spacing
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  borderSpacing?: Token<CSS.Property.BorderSpacing>
  /**
   * The CSS `border-inline-start` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-inline-start
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderStart?: Token<CSS.Property.BorderInlineStart | number, "borders">
  /**
   * The CSS `border-inline-start-color` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderStartColor?: Token<CSS.Property.BorderInlineStartColor, "colors">
  /**
   * The CSS `border-start-end-radius` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-start-end-radius
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderStartEndRadius?: Token<
    CSS.Property.BorderStartEndRadius | number,
    "radii"
  >
  /**
   * The CSS `border-start-start-radius` and `border-start-end-radius` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-start-end-radius
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-start-start-radius
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderStartRadius?: Token<
    | CSS.Property.BorderStartEndRadius
    | CSS.Property.BorderStartStartRadius
    | number,
    "radii"
  >
  /**
   * The CSS `border-start-start-radius` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-start-start-radius
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderStartStartRadius?: Token<
    CSS.Property.BorderStartStartRadius | number,
    "radii"
  >
  /**
   * The CSS `border-inline-start-style` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderStartStyle?: Token<CSS.Property.BorderInlineStartStyle>
  /**
   * The CSS `border-inline-start-width` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderStartWidth?: Token<CSS.Property.BorderInlineStartWidth | number>
  /**
   * The CSS `border-style` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-style
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 14
   * - safari : 1
   * - safari_ios : 3
   */
  borderStyle?: Token<CSS.Property.BorderStyle>
  /**
   * The CSS `border-top` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-top
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 14
   * - safari : 1
   * - safari_ios : 3
   */
  borderTop?: Token<CSS.Property.BorderTop | number, "borders">
  /**
   * The CSS `border-top-color` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-top-color
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 14
   * - safari : 1
   * - safari_ios : 3
   */
  borderTopColor?: Token<CSS.Property.BorderTopColor, "colors">
  /**
   * The CSS `border-start-end-radius` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-start-end-radius
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderTopEndRadius?: Token<
    CSS.Property.BorderStartEndRadius | number,
    "radii"
  >
  /**
   * The CSS `border-top-left-radius` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 4
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 4
   * - firefox_android : 4
   * - safari : 5
   * - safari_ios : 4.2
   */
  borderTopLeftRadius?: Token<
    CSS.Property.BorderTopLeftRadius | number,
    "radii"
  >
  /**
   * The CSS `border-top-left-radius` and `border-top-right-radius` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 4
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 4
   * - firefox_android : 4
   * - safari : 5
   * - safari_ios : 4.2
   */
  borderTopRadius?: Token<
    | CSS.Property.BorderTopLeftRadius
    | CSS.Property.BorderTopRightRadius
    | number,
    "radii"
  >
  /**
   * The CSS `border-top-right-radius` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 4
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 4
   * - firefox_android : 4
   * - safari : 5
   * - safari_ios : 4.2
   */
  borderTopRightRadius?: Token<
    CSS.Property.BorderTopRightRadius | number,
    "radii"
  >
  /**
   * The CSS `border-start-start-radius` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-start-start-radius
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  borderTopStartRadius?: Token<
    CSS.Property.BorderStartStartRadius | number,
    "radii"
  >
  /**
   * The CSS `border-top-style` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-top-style
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 14
   * - safari : 1
   * - safari_ios : 3
   */
  borderTopStyle?: Token<CSS.Property.BorderTopStyle>
  /**
   * The CSS `border-top-width` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-top-width
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 14
   * - safari : 1
   * - safari_ios : 3
   */
  borderTopWidth?: Token<CSS.Property.BorderTopWidth | number>
  /**
   * The CSS `border-width` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-width
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 14
   * - safari : 1
   * - safari_ios : 3
   */
  borderWidth?: Token<CSS.Property.BorderWidth | number>
  /**
   * The CSS `border-left` and `border-right` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-left
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-right
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 14
   * - safari : 1
   * - safari_ios : 3
   */
  borderX?: Token<
    CSS.Property.BorderLeft | CSS.Property.BorderRight | number,
    "borders"
  >
  /**
   * The CSS `border-top` and `border-bottom` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-bottom
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-top
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 14
   * - safari : 1
   * - safari_ios : 3
   */
  borderY?: Token<
    CSS.Property.BorderBottom | CSS.Property.BorderTop | number,
    "borders"
  >
  /**
   * The CSS `bottom` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/bottom
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  bottom?: Token<CSS.Property.Bottom | number, "spaces">
  /**
   * The CSS `box-align` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/box-align
   *
   * @deprecated
   */
  boxAlign?: Token<CSS.Property.BoxAlign>
  /**
   * The CSS `box-decoration-break` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/box-decoration-break
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - chrome : 130
   * - chrome_android : 130
   * - edge : 130
   * - firefox : 32
   * - firefox_android : 32
   */
  boxDecorationBreak?: Token<CSS.Property.BoxDecorationBreak>
  /**
   * The CSS `box-direction` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/box-direction
   *
   * @deprecated
   */
  boxDirection?: Token<CSS.Property.BoxDirection>
  /**
   * The CSS `box-flex` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/box-flex
   *
   * @deprecated
   */
  boxFlex?: Token<CSS.Property.BoxFlex>
  /**
   * The CSS `box-flex-group` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/box-flex-group
   *
   * @deprecated
   */
  boxFlexGroup?: Token<CSS.Property.BoxFlexGroup>
  /**
   * The CSS `box-lines` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/box-lines
   *
   * @deprecated
   */
  boxLines?: Token<CSS.Property.BoxLines>
  /**
   * The CSS `box-ordinal-group` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/box-ordinal-group
   *
   * @deprecated
   */
  boxOrdinalGroup?: Token<CSS.Property.BoxOrdinalGroup>
  /**
   * The CSS `box-orient` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/box-orient
   *
   * @deprecated
   */
  boxOrient?: Token<CSS.Property.BoxOrient>
  /**
   * The CSS `box-pack` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/box-pack
   *
   * @deprecated
   */
  boxPack?: Token<CSS.Property.BoxPack>
  /**
   * The CSS `box-shadow` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/box-shadow
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 10
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 4
   * - firefox_android : 4
   * - safari : 5.1
   * - safari_ios : 5
   */
  boxShadow?: Token<CSS.Property.BoxShadow, "shadows">
  /**
   * The CSS `width` and `height` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/height
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/width
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  boxSize?: Token<CSS.Property.Height | CSS.Property.Width | number, "sizes">
  /**
   * The CSS `box-sizing` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/box-sizing
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 10
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 29
   * - firefox_android : 29
   * - safari : 5.1
   * - safari_ios : 6
   */
  boxSizing?: Token<CSS.Property.BoxSizing>
  /**
   * The CSS `break-after` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/break-after
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   */
  breakAfter?: Token<CSS.Property.BreakAfter>
  /**
   * The CSS `break-before` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/break-before
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   */
  breakBefore?: Token<CSS.Property.BreakBefore>
  /**
   * The CSS `break-inside` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/break-inside
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   */
  breakInside?: Token<CSS.Property.BreakInside>
  /**
   * Sets the value of `--brightness`.
   */
  brightness?: Token<StringLiteral>
  /**
   * The CSS `caption-side` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/caption-side
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  captionSide?: Token<CSS.Property.CaptionSide>
  /**
   * The CSS `caret-color` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/caret-color
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 57
   * - chrome_android : 57
   * - edge : 79
   * - firefox : 53
   * - firefox_android : 53
   * - safari : 11.1
   * - safari_ios : 11.3
   */
  caret?: Token<CSS.Property.CaretColor, "colors">
  /**
   * The CSS `caret-color` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/caret-color
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 57
   * - chrome_android : 57
   * - edge : 79
   * - firefox : 53
   * - firefox_android : 53
   * - safari : 11.1
   * - safari_ios : 11.3
   */
  caretColor?: Token<CSS.Property.CaretColor, "colors">
  /**
   * The CSS `clear` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/clear
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  clear?: Token<CSS.Property.Clear>
  /**
   * The CSS `clip` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/clip
   */
  clip?: Token<CSS.Property.Clip>
  /**
   * The CSS `clip-path` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/clip-path
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2023-07-21`
   * @newly_available_date `2021-01-21`
   * @support_browsers
   * - chrome : 88
   * - chrome_android : 88
   * - edge : 88
   * - firefox : 71
   * - firefox_android : 79
   * - safari : 13.1
   * - safari_ios : 13
   */
  clipPath?: Token<CSS.Property.ClipPath>
  /**
   * The CSS `clip-rule` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/clip-rule
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 79
   * - firefox : 3
   * - firefox_android : 4
   * - safari : 3
   * - safari_ios : 2
   */
  clipRule?: Token<CSS.Property.ClipRule>
  /**
   * The CSS `color` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/color
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  color?: Token<CSS.Property.Color, "colors">
  /**
   * The CSS `color-adjust` property.
   *
   * @see Docs https://drafts.csswg.org/css-color-adjust-1/#color-adjust
   */
  colorAdjust?: Token<CSS.Property.PrintColorAdjust>
  /**
   * The CSS `color-interpolation` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/color-interpolation
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 79
   * - firefox : 3
   * - firefox_android : 4
   * - safari : 3
   * - safari_ios : 2
   */
  colorInterpolation?: Token<CSS.Property.ColorInterpolation>
  /**
   * The CSS `color-scheme` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
   */
  colorMode?: Token<CSS.Property.ColorScheme>
  /**
   * The CSS `column-count` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/column-count
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2019-09-07`
   * @newly_available_date `2017-03-07`
   * @support_browsers
   * - chrome : 50
   * - chrome_android : 50
   * - edge : 12
   * - firefox : 52
   * - firefox_android : 52
   * - safari : 9
   * - safari_ios : 9
   */
  columnCount?: Token<CSS.Property.ColumnCount>
  /**
   * The CSS `column-fill` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/column-fill
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2019-09-07`
   * @newly_available_date `2017-03-07`
   * @support_browsers
   * - chrome : 50
   * - chrome_android : 50
   * - edge : 12
   * - firefox : 52
   * - firefox_android : 52
   * - safari : 9
   * - safari_ios : 9
   */
  columnFill?: Token<CSS.Property.ColumnFill>
  /**
   * The CSS `column-gap` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/column-gap
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2019-09-07`
   * @newly_available_date `2017-03-07`
   * @support_browsers
   * - chrome : 50
   * - chrome_android : 50
   * - edge : 12
   * - firefox : 52
   * - firefox_android : 52
   * - safari : 9
   * - safari_ios : 9
   */
  columnGap?: Token<CSS.Property.ColumnGap | number, "spaces">
  /**
   * The CSS `column-rule` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/column-rule
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2019-09-07`
   * @newly_available_date `2017-03-07`
   * @support_browsers
   * - chrome : 50
   * - chrome_android : 50
   * - edge : 12
   * - firefox : 52
   * - firefox_android : 52
   * - safari : 9
   * - safari_ios : 9
   */
  columnRule?: Token<CSS.Property.ColumnRule | number>
  /**
   * The CSS `column-rule-color` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/column-rule-color
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2019-09-07`
   * @newly_available_date `2017-03-07`
   * @support_browsers
   * - chrome : 50
   * - chrome_android : 50
   * - edge : 12
   * - firefox : 52
   * - firefox_android : 52
   * - safari : 9
   * - safari_ios : 9
   */
  columnRuleColor?: Token<CSS.Property.ColumnRuleColor, "colors">
  /**
   * The CSS `column-rule-style` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/column-rule-style
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2019-09-07`
   * @newly_available_date `2017-03-07`
   * @support_browsers
   * - chrome : 50
   * - chrome_android : 50
   * - edge : 12
   * - firefox : 52
   * - firefox_android : 52
   * - safari : 9
   * - safari_ios : 9
   */
  columnRuleStyle?: Token<CSS.Property.ColumnRuleStyle>
  /**
   * The CSS `column-rule-width` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/column-rule-width
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2019-09-07`
   * @newly_available_date `2017-03-07`
   * @support_browsers
   * - chrome : 50
   * - chrome_android : 50
   * - edge : 12
   * - firefox : 52
   * - firefox_android : 52
   * - safari : 9
   * - safari_ios : 9
   */
  columnRuleWidth?: Token<CSS.Property.ColumnRuleWidth | number>
  /**
   * The CSS `columns` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/columns
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2019-09-07`
   * @newly_available_date `2017-03-07`
   * @support_browsers
   * - chrome : 50
   * - chrome_android : 50
   * - edge : 12
   * - firefox : 52
   * - firefox_android : 52
   * - safari : 9
   * - safari_ios : 9
   */
  columns?: Token<CSS.Property.Columns>
  /**
   * The CSS `column-span` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/column-span
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2023-01-28`
   * @newly_available_date `2020-07-28`
   * @support_browsers
   * - chrome : 50
   * - chrome_android : 50
   * - edge : 12
   * - firefox : 71
   * - firefox_android : 79
   * - safari : 9
   * - safari_ios : 9
   */
  columnSpan?: Token<CSS.Property.ColumnSpan>
  /**
   * The CSS `column-width` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/column-width
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2019-09-07`
   * @newly_available_date `2017-03-07`
   * @support_browsers
   * - chrome : 50
   * - chrome_android : 50
   * - edge : 12
   * - firefox : 52
   * - firefox_android : 52
   * - safari : 9
   * - safari_ios : 9
   */
  columnWidth?: Token<CSS.Property.ColumnWidth | number, "sizes">
  /**
   * The CSS `contain` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/contain
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-09-14`
   * @newly_available_date `2022-03-14`
   * @support_browsers
   * - chrome : 52
   * - chrome_android : 52
   * - edge : 79
   * - firefox : 69
   * - firefox_android : 79
   * - safari : 15.4
   * - safari_ios : 15.4
   */
  contain?: Token<CSS.Property.Contain>
  /**
   * The CSS `container` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/container
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2023-02-14`
   * @support_browsers
   * - chrome : 105
   * - chrome_android : 105
   * - edge : 105
   * - firefox : 110
   * - firefox_android : 110
   * - safari : 16
   * - safari_ios : 16
   */
  container?: Token<CSS.Property.Container>
  /**
   * The CSS `container-name` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/container-name
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2023-02-14`
   * @support_browsers
   * - chrome : 105
   * - chrome_android : 105
   * - edge : 105
   * - firefox : 110
   * - firefox_android : 110
   * - safari : 16
   * - safari_ios : 16
   */
  containerName?: Token<CSS.Property.ContainerName>
  /**
   * The CSS `container-type` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/container-type
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2023-02-14`
   * @support_browsers
   * - chrome : 105
   * - chrome_android : 105
   * - edge : 105
   * - firefox : 110
   * - firefox_android : 110
   * - safari : 16
   * - safari_ios : 16
   */
  containerType?: Token<CSS.Property.ContainerType>
  /**
   * The CSS `contain-intrinsic-block-size` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-block-size
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2023-09-18`
   * @support_browsers
   * - chrome : 83
   * - chrome_android : 83
   * - edge : 83
   * - firefox : 107
   * - firefox_android : 107
   * - safari : 17
   * - safari_ios : 17
   */
  containIntrinsicBlockSize?: Token<CSS.Property.ContainIntrinsicBlockSize>
  /**
   * The CSS `contain-intrinsic-height` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-height
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2023-09-18`
   * @support_browsers
   * - chrome : 83
   * - chrome_android : 83
   * - edge : 83
   * - firefox : 107
   * - firefox_android : 107
   * - safari : 17
   * - safari_ios : 17
   */
  containIntrinsicHeight?: Token<CSS.Property.ContainIntrinsicHeight>
  /**
   * The CSS `contain-intrinsic-inline-size` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-inline-size
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2023-09-18`
   * @support_browsers
   * - chrome : 83
   * - chrome_android : 83
   * - edge : 83
   * - firefox : 107
   * - firefox_android : 107
   * - safari : 17
   * - safari_ios : 17
   */
  containIntrinsicInlineSize?: Token<CSS.Property.ContainIntrinsicInlineSize>
  /**
   * The CSS `contain-intrinsic-size` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-size
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2023-09-18`
   * @support_browsers
   * - chrome : 83
   * - chrome_android : 83
   * - edge : 83
   * - firefox : 107
   * - firefox_android : 107
   * - safari : 17
   * - safari_ios : 17
   */
  containIntrinsicSize?: Token<CSS.Property.ContainIntrinsicSize>
  /**
   * The CSS `contain-intrinsic-width` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-width
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2023-09-18`
   * @support_browsers
   * - chrome : 83
   * - chrome_android : 83
   * - edge : 83
   * - firefox : 107
   * - firefox_android : 107
   * - safari : 17
   * - safari_ios : 17
   */
  containIntrinsicWidth?: Token<
    CSS.Property.ContainIntrinsicWidth | number,
    "sizes"
  >
  /**
   * The CSS `content` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/content
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  content?: Token<CSS.Property.Content>
  /**
   * The CSS `content-visibility` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/content-visibility
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2024-09-16`
   * @support_browsers
   * - chrome : 108
   * - chrome_android : 108
   * - edge : 108
   * - firefox : 130
   * - firefox_android : 130
   * - safari : 18
   * - safari_ios : 18
   */
  contentVisibility?: Token<CSS.Property.ContentVisibility>
  /**
   * Sets the value of `--contrast`.
   */
  contrast?: Token<StringLiteral>
  /**
   * The CSS `counter-increment` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/counter-increment
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 2
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 25
   * - safari : 3
   * - safari_ios : 1
   */
  counterIncrement?: Token<CSS.Property.CounterIncrement>
  /**
   * The CSS `counter-reset` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/counter-reset
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 2
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 25
   * - safari : 3
   * - safari_ios : 1
   */
  counterReset?: Token<CSS.Property.CounterReset>
  /**
   * The CSS `counter-set` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/counter-set
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2023-12-11`
   * @support_browsers
   * - chrome : 85
   * - chrome_android : 85
   * - edge : 85
   * - firefox : 68
   * - firefox_android : 68
   * - safari : 17.2
   * - safari_ios : 17.2
   */
  counterSet?: Token<CSS.Property.CounterSet>
  /**
   * The CSS `cursor` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/cursor
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - chrome : 68
   * - chrome_android : 68
   * - edge : 79
   * - firefox : 27
   * - firefox_android : 95
   * - safari : 11
   */
  cursor?: Token<CSS.Property.Cursor>
  /**
   * The CSS `direction` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/direction
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 48
   * - chrome_android : 48
   * - edge : 79
   * - firefox : 50
   * - firefox_android : 50
   * - safari : 11
   * - safari_ios : 11
   */
  direction?: Token<CSS.Property.Direction>
  /**
   * The CSS `display` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/display
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  display?: Token<CSS.Property.Display>
  /**
   * The CSS `dominant-baseline` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/dominant-baseline
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `≤2022-09-24`
   * @newly_available_date `≤2020-03-24`
   * @support_browsers
   * - chrome : ≤80
   * - chrome_android : ≤80
   * - edge : ≤80
   * - firefox : 1
   * - firefox_android : 4
   * - safari : ≤13.1
   * - safari_ios : ≤13.4
   */
  dominantBaseline?: Token<CSS.Property.DominantBaseline>
  /**
   * Sets the value of `--drop-shadow`.
   */
  dropShadow?: Token<StringLiteral, "shadows">
  /**
   * The CSS `empty-cells` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/empty-cells
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  emptyCells?: Token<CSS.Property.EmptyCells>
  /**
   * The CSS `fill` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/fill
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 79
   * - firefox : 3
   * - firefox_android : 4
   * - safari : 3
   * - safari_ios : 2
   */
  fill?: Token<CSS.Property.Fill, "colors">
  /**
   * The CSS `fill-opacity` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/fill-opacity
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `≤2022-09-24`
   * @newly_available_date `≤2020-03-24`
   * @support_browsers
   * - chrome : ≤80
   * - chrome_android : ≤80
   * - edge : ≤80
   * - firefox : 1
   * - firefox_android : 4
   * - safari : ≤13.1
   * - safari_ios : ≤13.4
   */
  fillOpacity?: Token<CSS.Property.FillOpacity>
  /**
   * The CSS `fill-rule` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/fill-rule
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 79
   * - firefox : 3
   * - firefox_android : 4
   * - safari : 3
   * - safari_ios : 2
   */
  fillRule?: Token<CSS.Property.FillRule>
  /**
   * The CSS `filter` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/filter
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2019-03-07`
   * @newly_available_date `2016-09-07`
   * @support_browsers
   * - chrome : 53
   * - chrome_android : 53
   * - edge : 12
   * - firefox : 35
   * - firefox_android : 35
   * - safari : 9.1
   * - safari_ios : 9.3
   */
  filter?: Token<CSS.Property.Filter>
  /**
   * The CSS `flex` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/flex
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-03-30`
   * @newly_available_date `2015-09-30`
   * @support_browsers
   * - chrome : 29
   * - chrome_android : 29
   * - edge : 12
   * - firefox : 20
   * - firefox_android : 20
   * - safari : 9
   * - safari_ios : 9
   */
  flex?: Token<CSS.Property.Flex>
  /**
   * The CSS `flex-basis` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/flex-basis
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-03-30`
   * @newly_available_date `2015-09-30`
   * @support_browsers
   * - chrome : 29
   * - chrome_android : 29
   * - edge : 12
   * - firefox : 20
   * - firefox_android : 20
   * - safari : 9
   * - safari_ios : 9
   */
  flexBasis?: Token<CSS.Property.FlexBasis | number, "sizes">
  /**
   * The CSS `flex-direction` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/flex-direction
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-03-30`
   * @newly_available_date `2015-09-30`
   * @support_browsers
   * - chrome : 29
   * - chrome_android : 29
   * - edge : 12
   * - firefox : 20
   * - firefox_android : 20
   * - safari : 9
   * - safari_ios : 9
   */
  flexDir?: Token<CSS.Property.FlexDirection>
  /**
   * The CSS `flex-direction` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/flex-direction
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-03-30`
   * @newly_available_date `2015-09-30`
   * @support_browsers
   * - chrome : 29
   * - chrome_android : 29
   * - edge : 12
   * - firefox : 20
   * - firefox_android : 20
   * - safari : 9
   * - safari_ios : 9
   */
  flexDirection?: Token<CSS.Property.FlexDirection>
  /**
   * The CSS `flex-flow` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/flex-flow
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-03-30`
   * @newly_available_date `2015-09-30`
   * @support_browsers
   * - chrome : 29
   * - chrome_android : 29
   * - edge : 12
   * - firefox : 20
   * - firefox_android : 20
   * - safari : 9
   * - safari_ios : 9
   */
  flexFlow?: Token<CSS.Property.FlexFlow>
  /**
   * The CSS `flex-grow` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/flex-grow
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-03-30`
   * @newly_available_date `2015-09-30`
   * @support_browsers
   * - chrome : 29
   * - chrome_android : 29
   * - edge : 12
   * - firefox : 20
   * - firefox_android : 20
   * - safari : 9
   * - safari_ios : 9
   */
  flexGrow?: Token<CSS.Property.FlexGrow>
  /**
   * The CSS `flex-shrink` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/flex-shrink
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-03-30`
   * @newly_available_date `2015-09-30`
   * @support_browsers
   * - chrome : 29
   * - chrome_android : 29
   * - edge : 12
   * - firefox : 20
   * - firefox_android : 20
   * - safari : 9
   * - safari_ios : 9
   */
  flexShrink?: Token<CSS.Property.FlexShrink>
  /**
   * The CSS `flex-wrap` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/flex-wrap
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-03-30`
   * @newly_available_date `2015-09-30`
   * @support_browsers
   * - chrome : 29
   * - chrome_android : 29
   * - edge : 12
   * - firefox : 20
   * - firefox_android : 20
   * - safari : 9
   * - safari_ios : 9
   */
  flexWrap?: Token<CSS.Property.FlexWrap>
  /**
   * The CSS `float` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/float
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  float?: Token<CSS.Property.Float>
  /**
   * The CSS `flood-color` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/flood-color
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 5
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 3
   * - firefox_android : 4
   * - safari : 6
   * - safari_ios : 6
   */
  floodColor?: Token<CSS.Property.FloodColor, "colors">
  /**
   * The CSS `flood-opacity` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/flood-opacity
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 5
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 3
   * - firefox_android : 4
   * - safari : 6
   * - safari_ios : 6
   */
  floodOpacity?: Token<CSS.Property.FloodOpacity>
  /**
   * The CSS `font` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/font
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  font?: Token<CSS.Property.Font>
  /**
   * The CSS `font-family` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/font-family
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  fontFamily?: Token<CSS.Property.FontFamily, "fonts">
  /**
   * The CSS `font-feature-settings` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/font-feature-settings
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2019-10-05`
   * @newly_available_date `2017-04-05`
   * @support_browsers
   * - chrome : 48
   * - chrome_android : 48
   * - edge : 15
   * - firefox : 34
   * - firefox_android : 34
   * - safari : 9.1
   * - safari_ios : 9.3
   */
  fontFeatureSettings?: Token<CSS.Property.FontFeatureSettings>
  /**
   * The CSS `font-kerning` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/font-kerning
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 33
   * - chrome_android : 33
   * - edge : 79
   * - firefox : 32
   * - firefox_android : 32
   * - safari : 9
   * - safari_ios : 9
   */
  fontKerning?: Token<CSS.Property.FontKerning>
  /**
   * The CSS `font-language-override` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/font-language-override
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - firefox : 34
   * - firefox_android : 34
   */
  fontLanguageOverride?: Token<CSS.Property.FontLanguageOverride>
  /**
   * The CSS `font-optical-sizing` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/font-optical-sizing
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-09-24`
   * @newly_available_date `2020-03-24`
   * @support_browsers
   * - chrome : 79
   * - chrome_android : 79
   * - edge : 17
   * - firefox : 62
   * - firefox_android : 62
   * - safari : 13.1
   * - safari_ios : 13.4
   */
  fontOpticalSizing?: Token<CSS.Property.FontOpticalSizing>
  /**
   * The CSS `font-palette` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/font-palette
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2022-11-15`
   * @support_browsers
   * - chrome : 101
   * - chrome_android : 101
   * - edge : 101
   * - firefox : 107
   * - firefox_android : 107
   * - safari : 15.4
   * - safari_ios : 15.4
   */
  fontPalette?: Token<CSS.Property.FontPalette>
  /**
   * The CSS `font-size` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/font-size
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  fontSize?: Token<CSS.Property.FontSize | number, "fontSizes">
  /**
   * The CSS `font-size-adjust` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/font-size-adjust
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2024-07-25`
   * @support_browsers
   * - chrome : 127
   * - chrome_android : 127
   * - edge : 127
   * - firefox : 118
   * - firefox_android : 118
   * - safari : 17
   * - safari_ios : 17
   */
  fontSizeAdjust?: Token<CSS.Property.FontSizeAdjust>
  /**
   * The CSS `font-smooth` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/font-smooth
   */
  fontSmooth?: Token<CSS.Property.FontSmooth>
  /**
   * The CSS `font-stretch` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/font-stretch
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2020-03-19`
   * @newly_available_date `2017-09-19`
   * @support_browsers
   * - chrome : 60
   * - chrome_android : 60
   * - edge : 12
   * - firefox : 9
   * - firefox_android : 9
   * - safari : 11
   * - safari_ios : 11
   */
  fontStretch?: Token<CSS.Property.FontStretch>
  /**
   * The CSS `font-style` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/font-style
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  fontStyle?: Token<CSS.Property.FontStyle>
  /**
   * The CSS `font-synthesis` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/font-synthesis
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-07-06`
   * @newly_available_date `2022-01-06`
   * @support_browsers
   * - chrome : 97
   * - chrome_android : 97
   * - edge : 97
   * - firefox : 34
   * - firefox_android : 34
   * - safari : 9
   * - safari_ios : 9
   */
  fontSynthesis?: Token<CSS.Property.FontSynthesis>
  /**
   * The CSS `font-synthesis-position` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/font-synthesis-position
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - firefox : 118
   * - firefox_android : 118
   */
  fontSynthesisPosition?: Token<CSS.Property.FontSynthesisPosition>
  /**
   * The CSS `font-synthesis-small-caps` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/font-synthesis-small-caps
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2023-03-27`
   * @support_browsers
   * - chrome : 97
   * - chrome_android : 97
   * - edge : 97
   * - firefox : 111
   * - firefox_android : 111
   * - safari : 16.4
   * - safari_ios : 16.4
   */
  fontSynthesisSmallCaps?: Token<CSS.Property.FontSynthesisSmallCaps>
  /**
   * The CSS `font-synthesis-style` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/font-synthesis-style
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2023-03-27`
   * @support_browsers
   * - chrome : 97
   * - chrome_android : 97
   * - edge : 97
   * - firefox : 111
   * - firefox_android : 111
   * - safari : 16.4
   * - safari_ios : 16.4
   */
  fontSynthesisStyle?: Token<CSS.Property.FontSynthesisStyle>
  /**
   * The CSS `font-synthesis-weight` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/font-synthesis-weight
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2023-03-27`
   * @support_browsers
   * - chrome : 97
   * - chrome_android : 97
   * - edge : 97
   * - firefox : 111
   * - firefox_android : 111
   * - safari : 16.4
   * - safari_ios : 16.4
   */
  fontSynthesisWeight?: Token<CSS.Property.FontSynthesisWeight>
  /**
   * The CSS `font-variant` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/font-variant
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  fontVariant?: Token<CSS.Property.FontVariant>
  /**
   * The CSS `font-variant-alternates` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/font-variant-alternates
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2023-03-13`
   * @support_browsers
   * - chrome : 111
   * - chrome_android : 111
   * - edge : 111
   * - firefox : 34
   * - firefox_android : 34
   * - safari : 9.1
   * - safari_ios : 9.3
   */
  fontVariantAlternates?: Token<CSS.Property.FontVariantAlternates>
  /**
   * The CSS `font-variant-caps` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/font-variant-caps
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 52
   * - chrome_android : 52
   * - edge : 79
   * - firefox : 34
   * - firefox_android : 34
   * - safari : 9.1
   * - safari_ios : 9.3
   */
  fontVariantCaps?: Token<CSS.Property.FontVariantCaps>
  /**
   * The CSS `font-variant-east-asian` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 63
   * - chrome_android : 63
   * - edge : 79
   * - firefox : 34
   * - firefox_android : 34
   * - safari : 9.1
   * - safari_ios : 9.3
   */
  fontVariantEastAsian?: Token<CSS.Property.FontVariantEastAsian>
  /**
   * The CSS `font-variant-emoji` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/font-variant-emoji
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - chrome : 131
   * - edge : 131
   */
  fontVariantEmoji?: Token<CSS.Property.FontVariantEmoji>
  /**
   * The CSS `font-variant-ligatures` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 34
   * - chrome_android : 34
   * - edge : 79
   * - firefox : 34
   * - firefox_android : 34
   * - safari : 9.1
   * - safari_ios : 9.3
   */
  fontVariantLigatures?: Token<CSS.Property.FontVariantLigatures>
  /**
   * The CSS `font-variant-numeric` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 52
   * - chrome_android : 52
   * - edge : 79
   * - firefox : 34
   * - firefox_android : 34
   * - safari : 9.1
   * - safari_ios : 9.3
   */
  fontVariantNumeric?: Token<CSS.Property.FontVariantNumeric>
  /**
   * The CSS `font-variant-position` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/font-variant-position
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - firefox : ≤72
   * - firefox_android : ≤79
   * - safari : ≤13.1
   * - safari_ios : ≤13.4
   */
  fontVariantPosition?: Token<CSS.Property.FontVariantPosition>
  /**
   * The CSS `font-variation-settings` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/font-variation-settings
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2021-03-05`
   * @newly_available_date `2018-09-05`
   * @support_browsers
   * - chrome : 62
   * - chrome_android : 62
   * - edge : 17
   * - firefox : 62
   * - firefox_android : 62
   * - safari : 11
   * - safari_ios : 11
   */
  fontVariationSettings?: Token<CSS.Property.FontVariationSettings>
  /**
   * The CSS `font-weight` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/font-weight
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 2
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  fontWeight?: Token<CSS.Property.FontWeight, "fontWeights">
  /**
   * The CSS `forced-color-adjust` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/forced-color-adjust
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2022-09-12`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 79
   * - firefox : 89
   * - firefox_android : 89
   * - safari : 16
   * - safari_ios : 16
   */
  forcedColorAdjust?: Token<CSS.Property.ForcedColorAdjust>
  /**
   * The CSS `gap` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/gap
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2020-04-17`
   * @newly_available_date `2017-10-17`
   * @support_browsers
   * - chrome : 57
   * - chrome_android : 57
   * - edge : 16
   * - firefox : 52
   * - firefox_android : 52
   * - safari : 10.1
   * - safari_ios : 10.3
   */
  g?: Token<CSS.Property.Gap | number, "spaces">
  /**
   * The CSS `gap` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/gap
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2020-04-17`
   * @newly_available_date `2017-10-17`
   * @support_browsers
   * - chrome : 57
   * - chrome_android : 57
   * - edge : 16
   * - firefox : 52
   * - firefox_android : 52
   * - safari : 10.1
   * - safari_ios : 10.3
   */
  gap?: Token<CSS.Property.Gap | number, "spaces">
  /**
   * The CSS `column-gap` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/column-gap
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2019-09-07`
   * @newly_available_date `2017-03-07`
   * @support_browsers
   * - chrome : 50
   * - chrome_android : 50
   * - edge : 12
   * - firefox : 52
   * - firefox_android : 52
   * - safari : 9
   * - safari_ios : 9
   */
  gapX?: Token<CSS.Property.ColumnGap | number, "spaces">
  /**
   * The CSS `row-gap` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/row-gap
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2020-04-17`
   * @newly_available_date `2017-10-17`
   * @support_browsers
   * - chrome : 57
   * - chrome_android : 57
   * - edge : 16
   * - firefox : 52
   * - firefox_android : 52
   * - safari : 10.1
   * - safari_ios : 10.3
   */
  gapY?: Token<CSS.Property.RowGap | number, "spaces">
  /**
   * The CSS `glyph-orientation-vertical` property.
   *
   * @see Docs https://drafts.csswg.org/css-writing-modes-4/#glyph-orientation
   */
  glyphOrientationVertical?: Token<CSS.Property.GlyphOrientationVertical>
  /**
   * Sets the value of `--grayscale`.
   */
  grayscale?: Token<StringLiteral>
  /**
   * The CSS `grid` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/grid
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2020-04-17`
   * @newly_available_date `2017-10-17`
   * @support_browsers
   * - chrome : 57
   * - chrome_android : 57
   * - edge : 16
   * - firefox : 52
   * - firefox_android : 52
   * - safari : 10.1
   * - safari_ios : 10.3
   */
  grid?: Token<CSS.Property.Grid>
  /**
   * The CSS `grid-area` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/grid-area
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2020-04-17`
   * @newly_available_date `2017-10-17`
   * @support_browsers
   * - chrome : 57
   * - chrome_android : 57
   * - edge : 16
   * - firefox : 52
   * - firefox_android : 52
   * - safari : 10.1
   * - safari_ios : 10.3
   */
  gridArea?: Token<CSS.Property.GridArea>
  /**
   * The CSS `grid-auto-columns` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2020-04-17`
   * @newly_available_date `2017-10-17`
   * @support_browsers
   * - chrome : 57
   * - chrome_android : 57
   * - edge : 16
   * - firefox : 52
   * - firefox_android : 52
   * - safari : 10.1
   * - safari_ios : 10.3
   */
  gridAutoColumns?: Token<CSS.Property.GridAutoColumns | number, "sizes">
  /**
   * The CSS `grid-auto-flow` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2020-04-17`
   * @newly_available_date `2017-10-17`
   * @support_browsers
   * - chrome : 57
   * - chrome_android : 57
   * - edge : 16
   * - firefox : 52
   * - firefox_android : 52
   * - safari : 10.1
   * - safari_ios : 10.3
   */
  gridAutoFlow?: Token<CSS.Property.GridAutoFlow>
  /**
   * The CSS `grid-auto-rows` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2020-04-17`
   * @newly_available_date `2017-10-17`
   * @support_browsers
   * - chrome : 57
   * - chrome_android : 57
   * - edge : 16
   * - firefox : 52
   * - firefox_android : 52
   * - safari : 10.1
   * - safari_ios : 10.3
   */
  gridAutoRows?: Token<CSS.Property.GridAutoRows | number, "sizes">
  /**
   * The CSS `grid-column` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/grid-column
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2020-04-17`
   * @newly_available_date `2017-10-17`
   * @support_browsers
   * - chrome : 57
   * - chrome_android : 57
   * - edge : 16
   * - firefox : 52
   * - firefox_android : 52
   * - safari : 10.1
   * - safari_ios : 10.3
   */
  gridColumn?: Token<CSS.Property.GridColumn>
  /**
   * The CSS `grid-column-end` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/grid-column-end
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2020-04-17`
   * @newly_available_date `2017-10-17`
   * @support_browsers
   * - chrome : 57
   * - chrome_android : 57
   * - edge : 16
   * - firefox : 52
   * - firefox_android : 52
   * - safari : 10.1
   * - safari_ios : 10.3
   */
  gridColumnEnd?: Token<CSS.Property.GridColumnEnd>
  /**
   * The CSS `grid-column-start` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/grid-column-start
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2020-04-17`
   * @newly_available_date `2017-10-17`
   * @support_browsers
   * - chrome : 57
   * - chrome_android : 57
   * - edge : 16
   * - firefox : 52
   * - firefox_android : 52
   * - safari : 10.1
   * - safari_ios : 10.3
   */
  gridColumnStart?: Token<CSS.Property.GridColumnStart>
  /**
   * The CSS `grid-row` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/grid-row
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2020-04-17`
   * @newly_available_date `2017-10-17`
   * @support_browsers
   * - chrome : 57
   * - chrome_android : 57
   * - edge : 16
   * - firefox : 52
   * - firefox_android : 52
   * - safari : 10.1
   * - safari_ios : 10.3
   */
  gridRow?: Token<CSS.Property.GridRow>
  /**
   * The CSS `grid-row-end` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/grid-row-end
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2020-04-17`
   * @newly_available_date `2017-10-17`
   * @support_browsers
   * - chrome : 57
   * - chrome_android : 57
   * - edge : 16
   * - firefox : 52
   * - firefox_android : 52
   * - safari : 10.1
   * - safari_ios : 10.3
   */
  gridRowEnd?: Token<CSS.Property.GridRowEnd>
  /**
   * The CSS `grid-row-start` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/grid-row-start
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2020-04-17`
   * @newly_available_date `2017-10-17`
   * @support_browsers
   * - chrome : 57
   * - chrome_android : 57
   * - edge : 16
   * - firefox : 52
   * - firefox_android : 52
   * - safari : 10.1
   * - safari_ios : 10.3
   */
  gridRowStart?: Token<CSS.Property.GridRowStart>
  /**
   * The CSS `grid-template` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/grid-template
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2020-04-17`
   * @newly_available_date `2017-10-17`
   * @support_browsers
   * - chrome : 57
   * - chrome_android : 57
   * - edge : 16
   * - firefox : 52
   * - firefox_android : 52
   * - safari : 10.1
   * - safari_ios : 10.3
   */
  gridTemplate?: Token<CSS.Property.GridTemplate>
  /**
   * The CSS `grid-template-areas` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/grid-template-areas
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2020-04-17`
   * @newly_available_date `2017-10-17`
   * @support_browsers
   * - chrome : 57
   * - chrome_android : 57
   * - edge : 16
   * - firefox : 52
   * - firefox_android : 52
   * - safari : 10.1
   * - safari_ios : 10.3
   */
  gridTemplateAreas?: Token<CSS.Property.GridTemplateAreas>
  /**
   * The CSS `grid-template-columns` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/grid-template-columns
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2020-04-17`
   * @newly_available_date `2017-10-17`
   * @support_browsers
   * - chrome : 57
   * - chrome_android : 57
   * - edge : 16
   * - firefox : 52
   * - firefox_android : 52
   * - safari : 10.1
   * - safari_ios : 10.3
   */
  gridTemplateColumns?: Token<
    CSS.Property.GridTemplateColumns | number,
    "sizes"
  >
  /**
   * The CSS `grid-template-rows` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/grid-template-rows
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2020-04-17`
   * @newly_available_date `2017-10-17`
   * @support_browsers
   * - chrome : 57
   * - chrome_android : 57
   * - edge : 16
   * - firefox : 52
   * - firefox_android : 52
   * - safari : 10.1
   * - safari_ios : 10.3
   */
  gridTemplateRows?: Token<CSS.Property.GridTemplateRows | number, "sizes">
  /**
   * The CSS `column-gap` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/column-gap
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2019-09-07`
   * @newly_available_date `2017-03-07`
   * @support_browsers
   * - chrome : 50
   * - chrome_android : 50
   * - edge : 12
   * - firefox : 52
   * - firefox_android : 52
   * - safari : 9
   * - safari_ios : 9
   */
  gx?: Token<CSS.Property.ColumnGap | number, "spaces">
  /**
   * The CSS `row-gap` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/row-gap
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2020-04-17`
   * @newly_available_date `2017-10-17`
   * @support_browsers
   * - chrome : 57
   * - chrome_android : 57
   * - edge : 16
   * - firefox : 52
   * - firefox_android : 52
   * - safari : 10.1
   * - safari_ios : 10.3
   */
  gy?: Token<CSS.Property.RowGap | number, "spaces">
  /**
   * The CSS `height` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/height
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  h?: Token<CSS.Property.Height | number, "sizes">
  /**
   * The CSS `hanging-punctuation` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/hanging-punctuation
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   */
  hangingPunctuation?: Token<CSS.Property.HangingPunctuation>
  /**
   * The CSS `height` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/height
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  height?: Token<CSS.Property.Height | number, "sizes">
  /**
   * Sets the value of `--hue-rotate`.
   */
  hueRotate?: Token<StringLiteral>
  /**
   * The CSS `hyphenate-character` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/hyphenate-character
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2023-09-18`
   * @support_browsers
   * - chrome : 106
   * - chrome_android : 106
   * - edge : 106
   * - firefox : 98
   * - firefox_android : 98
   * - safari : 17
   * - safari_ios : 17
   */
  hyphenateCharacter?: Token<CSS.Property.HyphenateCharacter>
  /**
   * The CSS `hyphenate-limit-chars` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/hyphenate-limit-chars
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - chrome : 109
   * - chrome_android : 109
   * - edge : 109
   */
  hyphenateLimitChars?: Token<CSS.Property.HyphenateLimitChars>
  /**
   * The CSS `hyphens` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/hyphens
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2023-09-18`
   * @support_browsers
   * - chrome : 88
   * - chrome_android : 55
   * - edge : 88
   * - firefox : 43
   * - firefox_android : 43
   * - safari : 17
   * - safari_ios : 17
   */
  hyphens?: Token<CSS.Property.Hyphens>
  /**
   * The CSS `image-orientation` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/image-orientation
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-10-13`
   * @newly_available_date `2020-04-13`
   * @support_browsers
   * - chrome : 81
   * - chrome_android : 81
   * - edge : 81
   * - firefox : 26
   * - firefox_android : 26
   * - safari : 13.1
   * - safari_ios : 13.4
   */
  imageOrientation?: Token<CSS.Property.ImageOrientation>
  /**
   * The CSS `image-rendering` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/image-rendering
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-04-05`
   * @newly_available_date `2021-10-05`
   * @support_browsers
   * - chrome : 41
   * - chrome_android : 41
   * - edge : 79
   * - firefox : 93
   * - firefox_android : 93
   * - safari : 10
   * - safari_ios : 10
   */
  imageRendering?: Token<CSS.Property.ImageRendering>
  /**
   * The CSS `ime-mode` property.
   *
   * @see Docs https://drafts.csswg.org/css-ui/#input-method-editor
   *
   * @deprecated
   */
  imeMode?: Token<CSS.Property.ImeMode>
  /**
   * The CSS `initial-letter` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/initial-letter
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - chrome : 110
   * - chrome_android : 110
   * - edge : 110
   */
  initialLetter?: Token<CSS.Property.InitialLetter>
  /**
   * The CSS `inline-size` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/inline-size
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  inlineSize?: Token<CSS.Property.InlineSize | number, "sizes">
  /**
   * The CSS `inset` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/inset
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  inset?: Token<CSS.Property.Inset | number, "spaces">
  /**
   * The CSS `inset-block` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/inset-block
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  insetBlock?: Token<CSS.Property.InsetBlock | number, "spaces">
  /**
   * The CSS `inset-block-end` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/inset-block-end
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  insetBlockEnd?: Token<CSS.Property.InsetBlockEnd | number, "spaces">
  /**
   * The CSS `inset-block-start` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/inset-block-start
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  insetBlockStart?: Token<CSS.Property.InsetBlockStart | number, "spaces">
  /**
   * The CSS `inset-inline-end` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/inset-inline-end
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  insetEnd?: Token<CSS.Property.InsetInlineEnd | number, "spaces">
  /**
   * The CSS `inset-inline` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/inset-inline
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  insetInline?: Token<CSS.Property.InsetInline | number, "spaces">
  /**
   * The CSS `inset-inline-end` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/inset-inline-end
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  insetInlineEnd?: Token<CSS.Property.InsetInlineEnd | number, "spaces">
  /**
   * The CSS `inset-inline-start` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/inset-inline-start
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  insetInlineStart?: Token<CSS.Property.InsetInlineStart | number, "spaces">
  /**
   * The CSS `inset-inline-start` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/inset-inline-start
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  insetStart?: Token<CSS.Property.InsetInlineStart | number, "spaces">
  /**
   * The CSS `left` and `right` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/left
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/right
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  insetX?: Token<CSS.Property.Left | CSS.Property.Right | number, "spaces">
  /**
   * The CSS `top` and `bottom` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/bottom
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/top
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  insetY?: Token<CSS.Property.Bottom | CSS.Property.Top | number, "spaces">
  /**
   * Sets the value of `--invert`.
   */
  invert?: Token<StringLiteral>
  /**
   * The CSS `isolation` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/isolation
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 41
   * - chrome_android : 41
   * - edge : 79
   * - firefox : 36
   * - firefox_android : 36
   * - safari : 8
   * - safari_ios : 8
   */
  isolation?: Token<CSS.Property.Isolation>
  /**
   * The CSS `justify-content` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/justify-content
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-03-30`
   * @newly_available_date `2015-09-30`
   * @support_browsers
   * - chrome : 29
   * - chrome_android : 29
   * - edge : 12
   * - firefox : 20
   * - firefox_android : 20
   * - safari : 9
   * - safari_ios : 9
   */
  justifyContent?: Token<CSS.Property.JustifyContent>
  /**
   * The CSS `justify-items` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/justify-items
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-03-30`
   * @newly_available_date `2015-09-30`
   * @support_browsers
   * - chrome : 29
   * - chrome_android : 29
   * - edge : 12
   * - firefox : 20
   * - firefox_android : 20
   * - safari : 9
   * - safari_ios : 9
   */
  justifyItems?: Token<CSS.Property.JustifyItems>
  /**
   * The CSS `justify-self` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/justify-self
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2020-04-17`
   * @newly_available_date `2017-10-17`
   * @support_browsers
   * - chrome : 57
   * - chrome_android : 57
   * - edge : 16
   * - firefox : 52
   * - firefox_android : 52
   * - safari : 10.1
   * - safari_ios : 10.3
   */
  justifySelf?: Token<CSS.Property.JustifySelf>
  /**
   * The `@keyframes` of CSS at-rule.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes
   */
  keyframes?: Token<CSSObject | StringLiteral, "keyframes">
  /**
   * The CSS `line-height` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/line-height
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  leading?: Token<CSS.Property.LineHeight, "lineHeights">
  /**
   * The CSS `left` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/left
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  left?: Token<CSS.Property.Left | number, "spaces">
  /**
   * The CSS `letter-spacing` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/letter-spacing
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  letterSpacing?: Token<CSS.Property.LetterSpacing, "letterSpacings">
  /**
   * The CSS `lighting-color` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/lighting-color
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 5
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 3
   * - firefox_android : 4
   * - safari : 6
   * - safari_ios : 6
   */
  lightingColor?: Token<CSS.Property.LightingColor, "colors">
  /**
   * The CSS `line-break` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/line-break
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2023-01-28`
   * @newly_available_date `2020-07-28`
   * @support_browsers
   * - chrome : 83
   * - chrome_android : 83
   * - edge : 83
   * - firefox : 69
   * - firefox_android : 79
   * - safari : 13
   * - safari_ios : 13
   */
  lineBreak?: Token<CSS.Property.LineBreak>
  /**
   * Used to visually truncate a text after a number of lines.
   */
  lineClamp?: Token<number>
  /**
   * The CSS `line-height` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/line-height
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  lineHeight?: Token<CSS.Property.LineHeight, "lineHeights">
  /**
   * The CSS `line-height-step` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/line-height-step
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   */
  lineHeightStep?: Token<CSS.Property.LineHeightStep>
  /**
   * The CSS `list-style` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/list-style
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  listStyle?: Token<CSS.Property.ListStyle>
  /**
   * The CSS `list-style-image` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/list-style-image
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  listStyleImage?: Token<CSS.Property.ListStyleImage, "gradients">
  /**
   * The CSS `list-style-image` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/list-style-image
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  listStyleImg?: Token<CSS.Property.ListStyleImage, "gradients">
  /**
   * The CSS `list-style-position` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/list-style-position
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  listStylePos?: Token<CSS.Property.ListStylePosition>
  /**
   * The CSS `list-style-position` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/list-style-position
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  listStylePosition?: Token<CSS.Property.ListStylePosition>
  /**
   * The CSS `list-style-type` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/list-style-type
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  listStyleType?: Token<CSS.Property.ListStyleType>
  /**
   * The CSS `margin` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/margin
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  m?: Token<CSS.Property.Margin | number, "spaces">
  /**
   * The CSS `margin` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/margin
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  margin?: Token<CSS.Property.Margin | number, "spaces">
  /**
   * The CSS `margin-block` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/margin-block
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  marginBlock?: Token<CSS.Property.MarginBlock | number, "spaces">
  /**
   * The CSS `margin-block-end` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/margin-block-end
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  marginBlockEnd?: Token<CSS.Property.MarginBlockEnd | number, "spaces">
  /**
   * The CSS `margin-block-start` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/margin-block-start
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  marginBlockStart?: Token<CSS.Property.MarginBlockStart | number, "spaces">
  /**
   * The CSS `margin-bottom` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  marginBottom?: Token<CSS.Property.MarginBottom | number, "spaces">
  /**
   * The CSS `margin-inline-end` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/margin-inline-end
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  marginEnd?: Token<CSS.Property.MarginInlineEnd | number, "spaces">
  /**
   * The CSS `margin-inline` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/margin-inline
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  marginInline?: Token<CSS.Property.MarginInline | number, "spaces">
  /**
   * The CSS `margin-inline-end` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/margin-inline-end
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  marginInlineEnd?: Token<CSS.Property.MarginInlineEnd | number, "spaces">
  /**
   * The CSS `margin-inline-start` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/margin-inline-start
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  marginInlineStart?: Token<CSS.Property.MarginInlineStart | number, "spaces">
  /**
   * The CSS `margin-left` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/margin-left
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  marginLeft?: Token<CSS.Property.MarginLeft | number, "spaces">
  /**
   * The CSS `margin-right` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/margin-right
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  marginRight?: Token<CSS.Property.MarginRight | number, "spaces">
  /**
   * The CSS `margin-inline-start` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/margin-inline-start
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  marginStart?: Token<CSS.Property.MarginInlineStart | number, "spaces">
  /**
   * The CSS `margin-top` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/margin-top
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  marginTop?: Token<CSS.Property.MarginTop | number, "spaces">
  /**
   * The CSS `margin-trim` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/margin-trim
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - safari : 16.4
   * - safari_ios : 16.4
   */
  marginTrim?: Token<CSS.Property.MarginTrim>
  /**
   * The CSS `margin-inline-start` and `margin-inline-end` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/margin-inline-end
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/margin-inline-start
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  marginX?: Token<
    CSS.Property.MarginInlineEnd | CSS.Property.MarginInlineStart | number,
    "spaces"
  >
  /**
   * The CSS `margin-top` and `margin-bottom` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/margin-top
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  marginY?: Token<
    CSS.Property.MarginBottom | CSS.Property.MarginTop | number,
    "spaces"
  >
  /**
   * The CSS `marker` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/marker
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 79
   * - firefox : 3
   * - firefox_android : 4
   * - safari : 3
   * - safari_ios : 2
   */
  marker?: Token<CSS.Property.Marker>
  /**
   * The CSS `marker-end` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/marker-end
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 79
   * - firefox : 3
   * - firefox_android : 4
   * - safari : 3
   * - safari_ios : 2
   */
  markerEnd?: Token<CSS.Property.MarkerEnd>
  /**
   * The CSS `marker-mid` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/marker-mid
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 79
   * - firefox : 3
   * - firefox_android : 4
   * - safari : 3
   * - safari_ios : 2
   */
  markerMid?: Token<CSS.Property.MarkerMid>
  /**
   * The CSS `marker-start` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/marker-start
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 79
   * - firefox : 3
   * - firefox_android : 4
   * - safari : 3
   * - safari_ios : 2
   */
  markerStart?: Token<CSS.Property.MarkerStart>
  /**
   * The CSS `mask` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/mask
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2023-12-07`
   * @support_browsers
   * - chrome : 120
   * - chrome_android : 120
   * - edge : 120
   * - firefox : 53
   * - firefox_android : 53
   * - safari : 15.4
   * - safari_ios : 15.4
   */
  mask?: Token<CSS.Property.Mask>
  /**
   * The CSS `mask-border` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/mask-border
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - safari : 17.2
   */
  maskBorder?: Token<CSS.Property.MaskBorder>
  /**
   * The CSS `mask-border-outset` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/mask-border-outset
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - safari : 17.2
   */
  maskBorderOutset?: Token<CSS.Property.MaskBorderOutset>
  /**
   * The CSS `mask-border-repeat` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/mask-border-repeat
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - safari : 17.2
   */
  maskBorderRepeat?: Token<CSS.Property.MaskBorderRepeat>
  /**
   * The CSS `mask-border-slice` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/mask-border-slice
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - safari : 17.2
   */
  maskBorderSlice?: Token<CSS.Property.MaskBorderSlice>
  /**
   * The CSS `mask-border-source` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/mask-border-source
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - safari : 17.2
   */
  maskBorderSource?: Token<CSS.Property.MaskBorderSource>
  /**
   * The CSS `mask-border-width` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/mask-border-width
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - safari : 17.2
   */
  maskBorderWidth?: Token<CSS.Property.MaskBorderWidth | number>
  /**
   * The CSS `mask-clip` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/mask-clip
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2023-12-07`
   * @support_browsers
   * - chrome : 120
   * - chrome_android : 120
   * - edge : 120
   * - firefox : 53
   * - firefox_android : 53
   * - safari : 15.4
   * - safari_ios : 15.4
   */
  maskClip?: Token<CSS.Property.MaskClip>
  /**
   * The CSS `mask-composite` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/mask-composite
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2023-12-07`
   * @support_browsers
   * - chrome : 120
   * - chrome_android : 120
   * - edge : 120
   * - firefox : 53
   * - firefox_android : 53
   * - safari : 15.4
   * - safari_ios : 15.4
   */
  maskComposite?: Token<CSS.Property.MaskComposite>
  /**
   * The CSS `mask-image` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/mask-image
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2023-12-07`
   * @support_browsers
   * - chrome : 120
   * - chrome_android : 120
   * - edge : 120
   * - firefox : 53
   * - firefox_android : 53
   * - safari : 15.4
   * - safari_ios : 15.4
   */
  maskImage?: Token<CSS.Property.MaskImage, "gradients">
  /**
   * The CSS `mask-mode` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/mask-mode
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2023-12-07`
   * @support_browsers
   * - chrome : 120
   * - chrome_android : 120
   * - edge : 120
   * - firefox : 53
   * - firefox_android : 53
   * - safari : 15.4
   * - safari_ios : 15.4
   */
  maskMode?: Token<CSS.Property.MaskMode>
  /**
   * The CSS `mask-origin` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/mask-origin
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2023-12-07`
   * @support_browsers
   * - chrome : 120
   * - chrome_android : 120
   * - edge : 120
   * - firefox : 53
   * - firefox_android : 53
   * - safari : 15.4
   * - safari_ios : 15.4
   */
  maskOrigin?: Token<CSS.Property.MaskOrigin>
  /**
   * The CSS `mask-position` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/mask-position
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2023-12-07`
   * @support_browsers
   * - chrome : 120
   * - chrome_android : 120
   * - edge : 120
   * - firefox : 53
   * - firefox_android : 53
   * - safari : 15.4
   * - safari_ios : 15.4
   */
  maskPosition?: Token<CSS.Property.MaskPosition>
  /**
   * The CSS `mask-repeat` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/mask-repeat
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2023-12-07`
   * @support_browsers
   * - chrome : 120
   * - chrome_android : 120
   * - edge : 120
   * - firefox : 53
   * - firefox_android : 53
   * - safari : 15.4
   * - safari_ios : 15.4
   */
  maskRepeat?: Token<CSS.Property.MaskRepeat>
  /**
   * The CSS `mask-size` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/mask-size
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2023-12-07`
   * @support_browsers
   * - chrome : 120
   * - chrome_android : 120
   * - edge : 120
   * - firefox : 53
   * - firefox_android : 53
   * - safari : 15.4
   * - safari_ios : 15.4
   */
  maskSize?: Token<CSS.Property.MaskSize>
  /**
   * The CSS `mask-type` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/mask-type
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 24
   * - chrome_android : 25
   * - edge : 79
   * - firefox : 35
   * - firefox_android : 35
   * - safari : 7
   * - safari_ios : 7
   */
  maskType?: Token<CSS.Property.MaskType>
  /**
   * The CSS `math-depth` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/math-depth
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2023-01-12`
   * @support_browsers
   * - chrome : 109
   * - chrome_android : 109
   * - edge : 109
   * - firefox : 4
   * - firefox_android : 4
   * - safari : 5.1
   * - safari_ios : 5
   */
  mathDepth?: Token<CSS.Property.MathDepth>
  /**
   * The CSS `math-shift` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/math-shift
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2023-01-12`
   * @support_browsers
   * - chrome : 109
   * - chrome_android : 109
   * - edge : 109
   * - firefox : 4
   * - firefox_android : 4
   * - safari : 5.1
   * - safari_ios : 5
   */
  mathShift?: Token<CSS.Property.MathShift>
  /**
   * The CSS `math-style` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/math-style
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2023-01-12`
   * @support_browsers
   * - chrome : 109
   * - chrome_android : 109
   * - edge : 109
   * - firefox : 4
   * - firefox_android : 4
   * - safari : 5.1
   * - safari_ios : 5
   */
  mathStyle?: Token<CSS.Property.MathStyle>
  /**
   * The CSS `max-block-size` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/max-block-size
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  maxBlockSize?: Token<CSS.Property.MaxBlockSize | number, "sizes">
  /**
   * The CSS `max-width` and `max-height` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/max-height
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/max-width
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 18
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1.3
   * - safari_ios : 1
   */
  maxBoxSize?: Token<
    CSS.Property.MaxHeight | CSS.Property.MaxWidth | number,
    "sizes"
  >
  /**
   * The CSS `max-height` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/max-height
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 18
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1.3
   * - safari_ios : 1
   */
  maxH?: Token<CSS.Property.MaxHeight | number, "sizes">
  /**
   * The CSS `max-height` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/max-height
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 18
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1.3
   * - safari_ios : 1
   */
  maxHeight?: Token<CSS.Property.MaxHeight | number, "sizes">
  /**
   * The CSS `max-inline-size` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/max-inline-size
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  maxInlineSize?: Token<CSS.Property.MaxInlineSize | number, "sizes">
  /**
   * The CSS `max-width` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/max-width
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 18
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1.3
   * - safari_ios : 1
   */
  maxW?: Token<CSS.Property.MaxWidth | number, "sizes">
  /**
   * The CSS `max-width` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/max-width
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 18
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1.3
   * - safari_ios : 1
   */
  maxWidth?: Token<CSS.Property.MaxWidth | number, "sizes">
  /**
   * The CSS `margin-bottom` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  mb?: Token<CSS.Property.MarginBottom | number, "spaces">
  /**
   * The CSS `margin-inline-end` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/margin-inline-end
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  me?: Token<CSS.Property.MarginInlineEnd | number, "spaces">
  /**
   * The CSS `min-block-size` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/min-block-size
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  minBlockSize?: Token<CSS.Property.MinBlockSize | number, "sizes">
  /**
   * The CSS `min-width` and `min-height` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/min-height
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/min-width
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 18
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1.3
   * - safari_ios : 1
   */
  minBoxSize?: Token<
    CSS.Property.MinHeight | CSS.Property.MinWidth | number,
    "sizes"
  >
  /**
   * The CSS `min-height` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/min-height
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 18
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1.3
   * - safari_ios : 1
   */
  minH?: Token<CSS.Property.MinHeight | number, "sizes">
  /**
   * The CSS `min-height` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/min-height
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 18
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1.3
   * - safari_ios : 1
   */
  minHeight?: Token<CSS.Property.MinHeight | number, "sizes">
  /**
   * The CSS `min-inline-size` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/min-inline-size
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  minInlineSize?: Token<CSS.Property.MinInlineSize | number, "sizes">
  /**
   * The CSS `min-width` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/min-width
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 18
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1.3
   * - safari_ios : 1
   */
  minW?: Token<CSS.Property.MinWidth | number, "sizes">
  /**
   * The CSS `min-width` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/min-width
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 18
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1.3
   * - safari_ios : 1
   */
  minWidth?: Token<CSS.Property.MinWidth | number, "sizes">
  /**
   * The CSS `mix-blend-mode` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 41
   * - chrome_android : 41
   * - edge : 79
   * - firefox : 32
   * - firefox_android : 32
   * - safari : 8
   * - safari_ios : 8
   */
  mixBlendMode?: Token<CSS.Property.MixBlendMode>
  /**
   * The CSS `margin-left` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/margin-left
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  ml?: Token<CSS.Property.MarginLeft | number, "spaces">
  /**
   * The CSS `margin-right` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/margin-right
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  mr?: Token<CSS.Property.MarginRight | number, "spaces">
  /**
   * The CSS `margin-inline-start` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/margin-inline-start
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  ms?: Token<CSS.Property.MarginInlineStart | number, "spaces">
  /**
   * The CSS `margin-top` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/margin-top
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  mt?: Token<CSS.Property.MarginTop | number, "spaces">
  /**
   * The CSS `margin-inline-start` and `margin-inline-end` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/margin-inline-end
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/margin-inline-start
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  mx?: Token<
    CSS.Property.MarginInlineEnd | CSS.Property.MarginInlineStart | number,
    "spaces"
  >
  /**
   * The CSS `margin-top` and `margin-bottom` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/margin-top
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  my?: Token<
    CSS.Property.MarginBottom | CSS.Property.MarginTop | number,
    "spaces"
  >
  /**
   * The CSS `object-fit` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/object-fit
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 32
   * - chrome_android : 32
   * - edge : 79
   * - firefox : 36
   * - firefox_android : 36
   * - safari : 10
   * - safari_ios : 10
   */
  objectFit?: Token<CSS.Property.ObjectFit>
  /**
   * The CSS `object-position` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/object-position
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 32
   * - chrome_android : 32
   * - edge : 79
   * - firefox : 36
   * - firefox_android : 36
   * - safari : 10
   * - safari_ios : 10
   */
  objectPosition?: Token<CSS.Property.ObjectPosition>
  /**
   * The CSS `offset` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/offset
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2022-09-12`
   * @support_browsers
   * - chrome : 55
   * - chrome_android : 55
   * - edge : 79
   * - firefox : 72
   * - firefox_android : 79
   * - safari : 16
   * - safari_ios : 16
   */
  offset?: Token<CSS.Property.Offset>
  /**
   * The CSS `offset-anchor` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/offset-anchor
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2022-09-12`
   * @support_browsers
   * - chrome : 55
   * - chrome_android : 55
   * - edge : 79
   * - firefox : 72
   * - firefox_android : 79
   * - safari : 16
   * - safari_ios : 16
   */
  offsetAnchor?: Token<CSS.Property.OffsetAnchor>
  /**
   * The CSS `offset-distance` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/offset-distance
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2022-09-12`
   * @support_browsers
   * - chrome : 55
   * - chrome_android : 55
   * - edge : 79
   * - firefox : 72
   * - firefox_android : 79
   * - safari : 16
   * - safari_ios : 16
   */
  offsetDistance?: Token<CSS.Property.OffsetDistance>
  /**
   * The CSS `offset-path` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/offset-path
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2022-09-12`
   * @support_browsers
   * - chrome : 55
   * - chrome_android : 55
   * - edge : 79
   * - firefox : 72
   * - firefox_android : 79
   * - safari : 16
   * - safari_ios : 16
   */
  offsetPath?: Token<CSS.Property.OffsetPath>
  /**
   * The CSS `offset-position` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/offset-position
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2022-09-12`
   * @support_browsers
   * - chrome : 55
   * - chrome_android : 55
   * - edge : 79
   * - firefox : 72
   * - firefox_android : 79
   * - safari : 16
   * - safari_ios : 16
   */
  offsetPosition?: Token<CSS.Property.OffsetPosition>
  /**
   * The CSS `offset-rotate` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2022-09-12`
   * @support_browsers
   * - chrome : 55
   * - chrome_android : 55
   * - edge : 79
   * - firefox : 72
   * - firefox_android : 79
   * - safari : 16
   * - safari_ios : 16
   */
  offsetRotate?: Token<CSS.Property.OffsetRotate>
  /**
   * The CSS `opacity` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/opacity
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 2
   * - safari_ios : 1
   */
  opacity?: Token<CSS.Property.Opacity>
  /**
   * The CSS `order` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/order
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-03-30`
   * @newly_available_date `2015-09-30`
   * @support_browsers
   * - chrome : 29
   * - chrome_android : 29
   * - edge : 12
   * - firefox : 20
   * - firefox_android : 20
   * - safari : 9
   * - safari_ios : 9
   */
  order?: Token<CSS.Property.Order>
  /**
   * The CSS `orphans` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/orphans
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - chrome : 25
   * - chrome_android : 25
   * - edge : 12
   * - safari : 1.3
   * - safari_ios : 1
   */
  orphans?: Token<CSS.Property.Orphans>
  /**
   * The CSS `outline` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/outline
   */
  outline?: Token<"inside" | "mixed" | "outside" | CSS.Property.Outline>
  /**
   * The CSS `outline-color` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/outline-color
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2019-10-05`
   * @newly_available_date `2017-04-05`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 15
   * - firefox : 1.5
   * - firefox_android : 4
   * - safari : 1.2
   * - safari_ios : 1
   */
  outlineColor?: Token<CSS.Property.OutlineColor, "colors">
  /**
   * The CSS `outline-offset` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/outline-offset
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2019-10-05`
   * @newly_available_date `2017-04-05`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 15
   * - firefox : 1.5
   * - firefox_android : 4
   * - safari : 1.2
   * - safari_ios : 1
   */
  outlineOffset?: Token<CSS.Property.OutlineOffset>
  /**
   * The CSS `outline-style` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/outline-style
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2019-10-05`
   * @newly_available_date `2017-04-05`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 15
   * - firefox : 1.5
   * - firefox_android : 4
   * - safari : 1.2
   * - safari_ios : 1
   */
  outlineStyle?: Token<CSS.Property.OutlineStyle>
  /**
   * The CSS `outline-width` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/outline-width
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2019-10-05`
   * @newly_available_date `2017-04-05`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 15
   * - firefox : 1.5
   * - firefox_android : 4
   * - safari : 1.2
   * - safari_ios : 1
   */
  outlineWidth?: Token<CSS.Property.OutlineWidth | number>
  /**
   * The CSS `overflow` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/overflow
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2022-09-12`
   * @support_browsers
   * - chrome : 90
   * - chrome_android : 90
   * - edge : 90
   * - firefox : 81
   * - firefox_android : 81
   * - safari : 16
   * - safari_ios : 16
   */
  overflow?: Token<CSS.Property.Overflow>
  /**
   * The CSS `overflow-anchor` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/overflow-anchor
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - chrome : 56
   * - chrome_android : 56
   * - edge : 79
   * - firefox : 66
   * - firefox_android : 66
   */
  overflowAnchor?: Token<CSS.Property.OverflowAnchor>
  /**
   * The CSS `overflow-block` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/overflow-block
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  overflowBlock?: Token<CSS.Property.OverflowBlock>
  /**
   * The CSS `overflow-clip-margin` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/overflow-clip-margin
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   */
  overflowClipMargin?: Token<CSS.Property.OverflowClipMargin>
  /**
   * The CSS `overflow-inline` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/overflow-inline
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  overflowInline?: Token<CSS.Property.OverflowInline>
  /**
   * The CSS `overflow-wrap` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2021-04-02`
   * @newly_available_date `2018-10-02`
   * @support_browsers
   * - chrome : 23
   * - chrome_android : 25
   * - edge : 18
   * - firefox : 49
   * - firefox_android : 49
   * - safari : 7
   * - safari_ios : 7
   */
  overflowWrap?: Token<CSS.Property.OverflowWrap>
  /**
   * The CSS `overflow-x` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/overflow-x
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2022-09-12`
   * @support_browsers
   * - chrome : 90
   * - chrome_android : 90
   * - edge : 90
   * - firefox : 81
   * - firefox_android : 81
   * - safari : 16
   * - safari_ios : 16
   */
  overflowX?: Token<CSS.Property.OverflowX>
  /**
   * The CSS `overflow-y` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/overflow-y
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2022-09-12`
   * @support_browsers
   * - chrome : 90
   * - chrome_android : 90
   * - edge : 90
   * - firefox : 81
   * - firefox_android : 81
   * - safari : 16
   * - safari_ios : 16
   */
  overflowY?: Token<CSS.Property.OverflowY>
  /**
   * The CSS `overlay` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/overlay
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - chrome : 117
   * - chrome_android : 117
   * - edge : 117
   */
  overlay?: Token<CSS.Property.Overlay>
  /**
   * The CSS `overscroll-behavior` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2022-09-12`
   * @support_browsers
   * - chrome : 63
   * - chrome_android : 63
   * - edge : 18
   * - firefox : 59
   * - firefox_android : 59
   * - safari : 16
   * - safari_ios : 16
   */
  overscroll?: Token<CSS.Property.OverscrollBehavior>
  /**
   * The CSS `overscroll-behavior` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2022-09-12`
   * @support_browsers
   * - chrome : 63
   * - chrome_android : 63
   * - edge : 18
   * - firefox : 59
   * - firefox_android : 59
   * - safari : 16
   * - safari_ios : 16
   */
  overscrollBehavior?: Token<CSS.Property.OverscrollBehavior>
  /**
   * The CSS `overscroll-behavior-block` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-block
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2022-09-12`
   * @support_browsers
   * - chrome : 63
   * - chrome_android : 63
   * - edge : 18
   * - firefox : 59
   * - firefox_android : 59
   * - safari : 16
   * - safari_ios : 16
   */
  overscrollBehaviorBlock?: Token<CSS.Property.OverscrollBehaviorBlock>
  /**
   * The CSS `overscroll-behavior-inline` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-inline
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2022-09-12`
   * @support_browsers
   * - chrome : 63
   * - chrome_android : 63
   * - edge : 18
   * - firefox : 59
   * - firefox_android : 59
   * - safari : 16
   * - safari_ios : 16
   */
  overscrollBehaviorInline?: Token<CSS.Property.OverscrollBehaviorInline>
  /**
   * The CSS `overscroll-behavior-x` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2022-09-12`
   * @support_browsers
   * - chrome : 63
   * - chrome_android : 63
   * - edge : 18
   * - firefox : 59
   * - firefox_android : 59
   * - safari : 16
   * - safari_ios : 16
   */
  overscrollBehaviorX?: Token<CSS.Property.OverscrollBehaviorX>
  /**
   * The CSS `overscroll-behavior-y` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2022-09-12`
   * @support_browsers
   * - chrome : 63
   * - chrome_android : 63
   * - edge : 18
   * - firefox : 59
   * - firefox_android : 59
   * - safari : 16
   * - safari_ios : 16
   */
  overscrollBehaviorY?: Token<CSS.Property.OverscrollBehaviorY>
  /**
   * The CSS `overscroll-behavior-x` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2022-09-12`
   * @support_browsers
   * - chrome : 63
   * - chrome_android : 63
   * - edge : 18
   * - firefox : 59
   * - firefox_android : 59
   * - safari : 16
   * - safari_ios : 16
   */
  overscrollX?: Token<CSS.Property.OverscrollBehaviorX>
  /**
   * The CSS `overscroll-behavior-y` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2022-09-12`
   * @support_browsers
   * - chrome : 63
   * - chrome_android : 63
   * - edge : 18
   * - firefox : 59
   * - firefox_android : 59
   * - safari : 16
   * - safari_ios : 16
   */
  overscrollY?: Token<CSS.Property.OverscrollBehaviorY>
  /**
   * The CSS `padding` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/padding
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  p?: Token<CSS.Property.Padding | number, "spaces">
  /**
   * The CSS `padding` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/padding
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  padding?: Token<CSS.Property.Padding | number, "spaces">
  /**
   * The CSS `padding-block` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/padding-block
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  paddingBlock?: Token<CSS.Property.PaddingBlock | number, "spaces">
  /**
   * The CSS `padding-block-end` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/padding-block-end
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  paddingBlockEnd?: Token<CSS.Property.PaddingBlockEnd | number, "spaces">
  /**
   * The CSS `padding-block-start` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/padding-block-start
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  paddingBlockStart?: Token<CSS.Property.PaddingBlockStart | number, "spaces">
  /**
   * The CSS `padding-bottom` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  paddingBottom?: Token<CSS.Property.PaddingBottom | number, "spaces">
  /**
   * The CSS `padding-inline-end` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/padding-inline-end
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  paddingEnd?: Token<CSS.Property.PaddingInlineEnd | number, "spaces">
  /**
   * The CSS `padding-inline` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/padding-inline
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  paddingInline?: Token<CSS.Property.PaddingInline | number, "spaces">
  /**
   * The CSS `padding-inline-end` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/padding-inline-end
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  paddingInlineEnd?: Token<CSS.Property.PaddingInlineEnd | number, "spaces">
  /**
   * The CSS `padding-inline-start` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/padding-inline-start
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  paddingInlineStart?: Token<CSS.Property.PaddingInlineStart | number, "spaces">
  /**
   * The CSS `padding-left` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/padding-left
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  paddingLeft?: Token<CSS.Property.PaddingLeft | number, "spaces">
  /**
   * The CSS `padding-right` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/padding-right
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  paddingRight?: Token<CSS.Property.PaddingRight | number, "spaces">
  /**
   * The CSS `padding-inline-start` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/padding-inline-start
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  paddingStart?: Token<CSS.Property.PaddingInlineStart | number, "spaces">
  /**
   * The CSS `padding-top` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/padding-top
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  paddingTop?: Token<CSS.Property.PaddingTop | number, "spaces">
  /**
   * The CSS `padding-inline-start` and `padding-inline-end` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/padding-inline-end
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/padding-inline-start
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  paddingX?: Token<
    CSS.Property.PaddingInlineEnd | CSS.Property.PaddingInlineStart | number,
    "spaces"
  >
  /**
   * The CSS `padding-top` and `padding-bottom` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/padding-top
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  paddingY?: Token<
    CSS.Property.PaddingBottom | CSS.Property.PaddingTop | number,
    "spaces"
  >
  /**
   * The CSS `page` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/page
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - chrome : 85
   * - chrome_android : 85
   * - edge : 85
   * - safari : ≤13.1
   * - safari_ios : ≤13.4
   */
  page?: Token<CSS.Property.Page>
  /**
   * The CSS `page-break-after` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/page-break-after
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   */
  pageBreakAfter?: Token<CSS.Property.PageBreakAfter>
  /**
   * The CSS `page-break-before` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/page-break-before
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   */
  pageBreakBefore?: Token<CSS.Property.PageBreakBefore>
  /**
   * The CSS `page-break-inside` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/page-break-inside
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   */
  pageBreakInside?: Token<CSS.Property.PageBreakInside>
  /**
   * The CSS `paint-order` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/paint-order
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - chrome : 123
   * - chrome_android : 123
   * - edge : 123
   * - firefox : ≤66
   * - firefox_android : ≤66
   * - safari : ≤12
   */
  paintOrder?: Token<CSS.Property.PaintOrder>
  /**
   * The CSS `padding-bottom` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  pb?: Token<CSS.Property.PaddingBottom | number, "spaces">
  /**
   * The CSS `padding-inline-end` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/padding-inline-end
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  pe?: Token<CSS.Property.PaddingInlineEnd | number, "spaces">
  /**
   * The CSS `perspective` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/perspective
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-09-14`
   * @newly_available_date `2022-03-14`
   * @support_browsers
   * - chrome : 36
   * - chrome_android : 36
   * - edge : 12
   * - firefox : 16
   * - firefox_android : 16
   * - safari : 15.4
   * - safari_ios : 15.4
   */
  perspective?: Token<CSS.Property.Perspective>
  /**
   * The CSS `perspective-origin` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/perspective-origin
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-09-14`
   * @newly_available_date `2022-03-14`
   * @support_browsers
   * - chrome : 36
   * - chrome_android : 36
   * - edge : 12
   * - firefox : 16
   * - firefox_android : 16
   * - safari : 15.4
   * - safari_ios : 15.4
   */
  perspectiveOrigin?: Token<CSS.Property.PerspectiveOrigin>
  /**
   * The CSS `padding-left` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/padding-left
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  pl?: Token<CSS.Property.PaddingLeft | number, "spaces">
  /**
   * The CSS `place-content` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/place-content
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-03-30`
   * @newly_available_date `2015-09-30`
   * @support_browsers
   * - chrome : 29
   * - chrome_android : 29
   * - edge : 12
   * - firefox : 20
   * - firefox_android : 20
   * - safari : 9
   * - safari_ios : 9
   */
  placeContent?: Token<CSS.Property.PlaceContent>
  /**
   * The CSS `place-items` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/place-items
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-03-30`
   * @newly_available_date `2015-09-30`
   * @support_browsers
   * - chrome : 29
   * - chrome_android : 29
   * - edge : 12
   * - firefox : 20
   * - firefox_android : 20
   * - safari : 9
   * - safari_ios : 9
   */
  placeItems?: Token<CSS.Property.PlaceItems>
  /**
   * The CSS `place-self` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/place-self
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-03-30`
   * @newly_available_date `2015-09-30`
   * @support_browsers
   * - chrome : 29
   * - chrome_android : 29
   * - edge : 12
   * - firefox : 20
   * - firefox_android : 20
   * - safari : 9
   * - safari_ios : 9
   */
  placeSelf?: Token<CSS.Property.PlaceSelf>
  /**
   * The CSS `pointer-events` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/pointer-events
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 2
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 3.6
   * - firefox_android : 4
   * - safari : 4
   * - safari_ios : 3.2
   */
  pointerEvents?: Token<CSS.Property.PointerEvents>
  /**
   * The CSS `position` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/position
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  pos?: Token<CSS.Property.Position>
  /**
   * The CSS `position` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/position
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  position?: Token<CSS.Property.Position>
  /**
   * The CSS `padding-right` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/padding-right
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  pr?: Token<CSS.Property.PaddingRight | number, "spaces">
  /**
   * The CSS `print-color-adjust` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/print-color-adjust
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - firefox : 97
   * - firefox_android : 97
   * - safari : 15.4
   * - safari_ios : 15.4
   */
  printColorAdjust?: Token<CSS.Property.PrintColorAdjust>
  /**
   * The CSS `padding-inline-start` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/padding-inline-start
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  ps?: Token<CSS.Property.PaddingInlineStart | number, "spaces">
  /**
   * The CSS `padding-top` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/padding-top
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  pt?: Token<CSS.Property.PaddingTop | number, "spaces">
  /**
   * The CSS `padding-inline-start` and `padding-inline-end` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/padding-inline-end
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/padding-inline-start
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  px?: Token<
    CSS.Property.PaddingInlineEnd | CSS.Property.PaddingInlineStart | number,
    "spaces"
  >
  /**
   * The CSS `padding-top` and `padding-bottom` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/padding-top
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  py?: Token<
    CSS.Property.PaddingBottom | CSS.Property.PaddingTop | number,
    "spaces"
  >
  /**
   * The CSS `quotes` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/quotes
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2023-10-26`
   * @newly_available_date `2021-04-26`
   * @support_browsers
   * - chrome : 87
   * - chrome_android : 87
   * - edge : 87
   * - firefox : 70
   * - firefox_android : 79
   * - safari : 14.1
   * - safari_ios : 14.5
   */
  quotes?: Token<CSS.Property.Quotes>
  /**
   * The CSS `resize` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/resize
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - chrome : 4
   * - chrome_android : 18
   * - edge : 79
   * - firefox : 5
   * - firefox_android : 5
   * - safari : 4
   */
  resize?: Token<CSS.Property.Resize>
  /**
   * The CSS `right` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/right
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  right?: Token<CSS.Property.Right | number, "spaces">
  /**
   * The CSS `rotate` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/rotate
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2022-08-05`
   * @support_browsers
   * - chrome : 104
   * - chrome_android : 104
   * - edge : 104
   * - firefox : 72
   * - firefox_android : 79
   * - safari : 14.1
   * - safari_ios : 14.5
   */
  rotate?: Token<CSS.Property.Rotate>
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
   * The CSS `border-radius` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-radius
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 4
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 4
   * - firefox_android : 4
   * - safari : 5
   * - safari_ios : 4.2
   */
  rounded?: Token<CSS.Property.BorderRadius | number, "radii">
  /**
   * The CSS `border-bottom-left-radius` and `border-bottom-right-radius` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 4
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 4
   * - firefox_android : 4
   * - safari : 5
   * - safari_ios : 4.2
   */
  roundedBottom?: Token<
    | CSS.Property.BorderBottomLeftRadius
    | CSS.Property.BorderBottomRightRadius
    | number,
    "radii"
  >
  /**
   * The CSS `border-end-end-radius` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-end-end-radius
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  roundedBottomEnd?: Token<CSS.Property.BorderEndEndRadius | number, "radii">
  /**
   * The CSS `border-bottom-left-radius` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 4
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 4
   * - firefox_android : 4
   * - safari : 5
   * - safari_ios : 4.2
   */
  roundedBottomLeft?: Token<
    CSS.Property.BorderBottomLeftRadius | number,
    "radii"
  >
  /**
   * The CSS `border-bottom-right-radius` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 4
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 4
   * - firefox_android : 4
   * - safari : 5
   * - safari_ios : 4.2
   */
  roundedBottomRight?: Token<
    CSS.Property.BorderBottomRightRadius | number,
    "radii"
  >
  /**
   * The CSS `border-end-start-radius` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-end-start-radius
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  roundedBottomStart?: Token<
    CSS.Property.BorderEndStartRadius | number,
    "radii"
  >
  /**
   * The CSS `border-end-start-radius` and `border-end-end-radius` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-end-end-radius
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-end-start-radius
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  roundedEnd?: Token<
    | CSS.Property.BorderEndEndRadius
    | CSS.Property.BorderEndStartRadius
    | number,
    "radii"
  >
  /**
   * The CSS `border-top-left-radius` and `border-bottom-left-radius` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 4
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 4
   * - firefox_android : 4
   * - safari : 5
   * - safari_ios : 4.2
   */
  roundedLeft?: Token<
    | CSS.Property.BorderBottomLeftRadius
    | CSS.Property.BorderTopLeftRadius
    | number,
    "radii"
  >
  /**
   * The CSS `border-top-right-radius` and `border-bottom-right-radius` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 4
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 4
   * - firefox_android : 4
   * - safari : 5
   * - safari_ios : 4.2
   */
  roundedRight?: Token<
    | CSS.Property.BorderBottomRightRadius
    | CSS.Property.BorderTopRightRadius
    | number,
    "radii"
  >
  /**
   * The CSS `border-start-start-radius` and `border-start-end-radius` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-start-end-radius
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-start-start-radius
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  roundedStart?: Token<
    | CSS.Property.BorderStartEndRadius
    | CSS.Property.BorderStartStartRadius
    | number,
    "radii"
  >
  /**
   * The CSS `border-top-left-radius` and `border-top-right-radius` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 4
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 4
   * - firefox_android : 4
   * - safari : 5
   * - safari_ios : 4.2
   */
  roundedTop?: Token<
    | CSS.Property.BorderTopLeftRadius
    | CSS.Property.BorderTopRightRadius
    | number,
    "radii"
  >
  /**
   * The CSS `border-start-end-radius` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-start-end-radius
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  roundedTopEnd?: Token<CSS.Property.BorderStartEndRadius | number, "radii">
  /**
   * The CSS `border-top-left-radius` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 4
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 4
   * - firefox_android : 4
   * - safari : 5
   * - safari_ios : 4.2
   */
  roundedTopLeft?: Token<CSS.Property.BorderTopLeftRadius | number, "radii">
  /**
   * The CSS `border-top-right-radius` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 4
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 4
   * - firefox_android : 4
   * - safari : 5
   * - safari_ios : 4.2
   */
  roundedTopRight?: Token<CSS.Property.BorderTopRightRadius | number, "radii">
  /**
   * The CSS `border-start-start-radius` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/border-start-start-radius
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-03-20`
   * @newly_available_date `2021-09-20`
   * @support_browsers
   * - chrome : 89
   * - chrome_android : 89
   * - edge : 89
   * - firefox : 66
   * - firefox_android : 66
   * - safari : 15
   * - safari_ios : 15
   */
  roundedTopStart?: Token<CSS.Property.BorderStartStartRadius | number, "radii">
  /**
   * The CSS `row-gap` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/row-gap
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2020-04-17`
   * @newly_available_date `2017-10-17`
   * @support_browsers
   * - chrome : 57
   * - chrome_android : 57
   * - edge : 16
   * - firefox : 52
   * - firefox_android : 52
   * - safari : 10.1
   * - safari_ios : 10.3
   */
  rowGap?: Token<CSS.Property.RowGap | number, "spaces">
  /**
   * The CSS `ruby-align` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/ruby-align
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2024-12-11`
   * @support_browsers
   * - chrome : 128
   * - chrome_android : 128
   * - edge : 128
   * - firefox : 38
   * - firefox_android : 38
   * - safari : 18.2
   * - safari_ios : 18.2
   */
  rubyAlign?: Token<CSS.Property.RubyAlign>
  /**
   * The CSS `ruby-position` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/ruby-position
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2024-12-11`
   * @support_browsers
   * - chrome : 84
   * - chrome_android : 84
   * - edge : 84
   * - firefox : 38
   * - firefox_android : 38
   * - safari : 18.2
   * - safari_ios : 18.2
   */
  rubyPosition?: Token<CSS.Property.RubyPosition>
  /**
   * Sets the value of `--saturate`.
   */
  saturate?: Token<StringLiteral>
  /**
   * The CSS `scale` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scale
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2022-08-05`
   * @support_browsers
   * - chrome : 104
   * - chrome_android : 104
   * - edge : 104
   * - firefox : 72
   * - firefox_android : 79
   * - safari : 14.1
   * - safari_ios : 14.5
   */
  scale?: Token<CSS.Property.Scale>
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
   * The CSS `scrollbar-color` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scrollbar-color
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - chrome : 121
   * - chrome_android : 121
   * - edge : 121
   * - firefox : 64
   * - firefox_android : 64
   */
  scrollbarColor?: Token<CSS.Property.ScrollbarColor, "colors">
  /**
   * The CSS `scrollbar-gutter` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scrollbar-gutter
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2024-12-11`
   * @support_browsers
   * - chrome : 94
   * - chrome_android : 94
   * - edge : 94
   * - firefox : 97
   * - firefox_android : 97
   * - safari : 18.2
   * - safari_ios : 18.2
   */
  scrollbarGutter?: Token<CSS.Property.ScrollbarGutter>
  /**
   * The CSS `scrollbar-width` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scrollbar-width
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2024-12-11`
   * @support_browsers
   * - chrome : 121
   * - chrome_android : 121
   * - edge : 121
   * - firefox : 64
   * - firefox_android : 64
   * - safari : 18.2
   * - safari_ios : 18.2
   */
  scrollbarWidth?: Token<CSS.Property.ScrollbarWidth | number>
  /**
   * The CSS `scroll-behavior` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scroll-behavior
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-09-14`
   * @newly_available_date `2022-03-14`
   * @support_browsers
   * - chrome : 61
   * - chrome_android : 61
   * - edge : 79
   * - firefox : 36
   * - firefox_android : 36
   * - safari : 15.4
   * - safari_ios : 15.4
   */
  scrollBehavior?: Token<CSS.Property.ScrollBehavior>
  /**
   * The CSS `scroll-margin` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scroll-margin
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 69
   * - chrome_android : 69
   * - edge : 79
   * - firefox : 68
   * - firefox_android : 68
   * - safari : 11
   * - safari_ios : 11
   */
  scrollMargin?: Token<CSS.Property.ScrollMargin | number, "spaces">
  /**
   * The CSS `scroll-margin-block` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 69
   * - chrome_android : 69
   * - edge : 79
   * - firefox : 68
   * - firefox_android : 68
   * - safari : 11
   * - safari_ios : 11
   */
  scrollMarginBlock?: Token<CSS.Property.ScrollMarginBlock>
  /**
   * The CSS `scroll-margin-block-end` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-end
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 69
   * - chrome_android : 69
   * - edge : 79
   * - firefox : 68
   * - firefox_android : 68
   * - safari : 11
   * - safari_ios : 11
   */
  scrollMarginBlockEnd?: Token<CSS.Property.ScrollMarginBlockEnd>
  /**
   * The CSS `scroll-margin-block-start` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-start
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 69
   * - chrome_android : 69
   * - edge : 79
   * - firefox : 68
   * - firefox_android : 68
   * - safari : 11
   * - safari_ios : 11
   */
  scrollMarginBlockStart?: Token<CSS.Property.ScrollMarginBlockStart>
  /**
   * The CSS `scroll-margin-bottom` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scroll-margin-bottom
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 69
   * - chrome_android : 69
   * - edge : 79
   * - firefox : 68
   * - firefox_android : 68
   * - safari : 11
   * - safari_ios : 11
   */
  scrollMarginBottom?: Token<CSS.Property.ScrollMarginBottom | number, "spaces">
  /**
   * The CSS `scroll-margin-inline` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 69
   * - chrome_android : 69
   * - edge : 79
   * - firefox : 68
   * - firefox_android : 68
   * - safari : 11
   * - safari_ios : 11
   */
  scrollMarginInline?: Token<CSS.Property.ScrollMarginInline>
  /**
   * The CSS `scroll-margin-inline-end` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-end
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 69
   * - chrome_android : 69
   * - edge : 79
   * - firefox : 68
   * - firefox_android : 68
   * - safari : 11
   * - safari_ios : 11
   */
  scrollMarginInlineEnd?: Token<CSS.Property.ScrollMarginInlineEnd>
  /**
   * The CSS `scroll-margin-inline-start` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-start
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 69
   * - chrome_android : 69
   * - edge : 79
   * - firefox : 68
   * - firefox_android : 68
   * - safari : 11
   * - safari_ios : 11
   */
  scrollMarginInlineStart?: Token<CSS.Property.ScrollMarginInlineStart>
  /**
   * The CSS `scroll-margin-left` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scroll-margin-left
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 69
   * - chrome_android : 69
   * - edge : 79
   * - firefox : 68
   * - firefox_android : 68
   * - safari : 11
   * - safari_ios : 11
   */
  scrollMarginLeft?: Token<CSS.Property.ScrollMarginLeft | number, "spaces">
  /**
   * The CSS `scroll-margin-right` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scroll-margin-right
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 69
   * - chrome_android : 69
   * - edge : 79
   * - firefox : 68
   * - firefox_android : 68
   * - safari : 11
   * - safari_ios : 11
   */
  scrollMarginRight?: Token<CSS.Property.ScrollMarginRight | number, "spaces">
  /**
   * The CSS `scroll-margin-top` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scroll-margin-top
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 69
   * - chrome_android : 69
   * - edge : 79
   * - firefox : 68
   * - firefox_android : 68
   * - safari : 11
   * - safari_ios : 11
   */
  scrollMarginTop?: Token<CSS.Property.ScrollMarginTop | number, "spaces">
  /**
   * The CSS `scroll-margin-left` and `scroll-margin-right` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scroll-margin-left
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scroll-margin-right
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 69
   * - chrome_android : 69
   * - edge : 79
   * - firefox : 68
   * - firefox_android : 68
   * - safari : 11
   * - safari_ios : 11
   */
  scrollMarginX?: Token<
    CSS.Property.ScrollMarginLeft | CSS.Property.ScrollMarginRight | number,
    "spaces"
  >
  /**
   * The CSS `scroll-margin-top` and `scroll-margin-bottom` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scroll-margin-bottom
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scroll-margin-top
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 69
   * - chrome_android : 69
   * - edge : 79
   * - firefox : 68
   * - firefox_android : 68
   * - safari : 11
   * - safari_ios : 11
   */
  scrollMarginY?: Token<
    CSS.Property.ScrollMarginBottom | CSS.Property.ScrollMarginTop | number,
    "spaces"
  >
  /**
   * The CSS `scroll-padding` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scroll-padding
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 69
   * - chrome_android : 69
   * - edge : 79
   * - firefox : 68
   * - firefox_android : 68
   * - safari : 11
   * - safari_ios : 11
   */
  scrollPadding?: Token<CSS.Property.ScrollPadding | number, "spaces">
  /**
   * The CSS `scroll-padding-block` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 69
   * - chrome_android : 69
   * - edge : 79
   * - firefox : 68
   * - firefox_android : 68
   * - safari : 11
   * - safari_ios : 11
   */
  scrollPaddingBlock?: Token<CSS.Property.ScrollPaddingBlock>
  /**
   * The CSS `scroll-padding-block-end` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-end
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 69
   * - chrome_android : 69
   * - edge : 79
   * - firefox : 68
   * - firefox_android : 68
   * - safari : 11
   * - safari_ios : 11
   */
  scrollPaddingBlockEnd?: Token<CSS.Property.ScrollPaddingBlockEnd>
  /**
   * The CSS `scroll-padding-block-start` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-start
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 69
   * - chrome_android : 69
   * - edge : 79
   * - firefox : 68
   * - firefox_android : 68
   * - safari : 11
   * - safari_ios : 11
   */
  scrollPaddingBlockStart?: Token<CSS.Property.ScrollPaddingBlockStart>
  /**
   * The CSS `scroll-padding-bottom` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scroll-padding-bottom
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 69
   * - chrome_android : 69
   * - edge : 79
   * - firefox : 68
   * - firefox_android : 68
   * - safari : 11
   * - safari_ios : 11
   */
  scrollPaddingBottom?: Token<
    CSS.Property.ScrollPaddingBottom | number,
    "spaces"
  >
  /**
   * The CSS `scroll-padding-inline` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 69
   * - chrome_android : 69
   * - edge : 79
   * - firefox : 68
   * - firefox_android : 68
   * - safari : 11
   * - safari_ios : 11
   */
  scrollPaddingInline?: Token<CSS.Property.ScrollPaddingInline>
  /**
   * The CSS `scroll-padding-inline-end` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-end
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 69
   * - chrome_android : 69
   * - edge : 79
   * - firefox : 68
   * - firefox_android : 68
   * - safari : 11
   * - safari_ios : 11
   */
  scrollPaddingInlineEnd?: Token<CSS.Property.ScrollPaddingInlineEnd>
  /**
   * The CSS `scroll-padding-inline-start` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-start
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 69
   * - chrome_android : 69
   * - edge : 79
   * - firefox : 68
   * - firefox_android : 68
   * - safari : 11
   * - safari_ios : 11
   */
  scrollPaddingInlineStart?: Token<CSS.Property.ScrollPaddingInlineStart>
  /**
   * The CSS `scroll-padding-left` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scroll-padding-left
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 69
   * - chrome_android : 69
   * - edge : 79
   * - firefox : 68
   * - firefox_android : 68
   * - safari : 11
   * - safari_ios : 11
   */
  scrollPaddingLeft?: Token<CSS.Property.ScrollPaddingLeft | number, "spaces">
  /**
   * The CSS `scroll-padding-right` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scroll-padding-right
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 69
   * - chrome_android : 69
   * - edge : 79
   * - firefox : 68
   * - firefox_android : 68
   * - safari : 11
   * - safari_ios : 11
   */
  scrollPaddingRight?: Token<CSS.Property.ScrollPaddingRight | number, "spaces">
  /**
   * The CSS `scroll-padding-top` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scroll-padding-top
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 69
   * - chrome_android : 69
   * - edge : 79
   * - firefox : 68
   * - firefox_android : 68
   * - safari : 11
   * - safari_ios : 11
   */
  scrollPaddingTop?: Token<CSS.Property.ScrollPaddingTop | number, "spaces">
  /**
   * The CSS `scroll-padding-left` and `scroll-padding-right` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scroll-padding-left
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scroll-padding-right
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 69
   * - chrome_android : 69
   * - edge : 79
   * - firefox : 68
   * - firefox_android : 68
   * - safari : 11
   * - safari_ios : 11
   */
  scrollPaddingX?: Token<
    CSS.Property.ScrollPaddingLeft | CSS.Property.ScrollPaddingRight | number,
    "spaces"
  >
  /**
   * The CSS `scroll-padding-top` and `scroll-padding-bottom` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scroll-padding-bottom
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scroll-padding-top
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 69
   * - chrome_android : 69
   * - edge : 79
   * - firefox : 68
   * - firefox_android : 68
   * - safari : 11
   * - safari_ios : 11
   */
  scrollPaddingY?: Token<
    CSS.Property.ScrollPaddingBottom | CSS.Property.ScrollPaddingTop | number,
    "spaces"
  >
  /**
   * The CSS `scroll-snap-align` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scroll-snap-align
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 69
   * - chrome_android : 69
   * - edge : 79
   * - firefox : 68
   * - firefox_android : 68
   * - safari : 11
   * - safari_ios : 11
   */
  scrollSnapAlign?: Token<CSS.Property.ScrollSnapAlign>
  /**
   * The CSS `scroll-snap-stop` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scroll-snap-stop
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 69
   * - chrome_android : 69
   * - edge : 79
   * - firefox : 68
   * - firefox_android : 68
   * - safari : 11
   * - safari_ios : 11
   */
  scrollSnapStop?: Token<CSS.Property.ScrollSnapStop>
  /**
   * The CSS `scroll-snap-type` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 69
   * - chrome_android : 69
   * - edge : 79
   * - firefox : 68
   * - firefox_android : 68
   * - safari : 11
   * - safari_ios : 11
   */
  scrollSnapType?: Token<CSS.Property.ScrollSnapType>
  /**
   * The CSS `scroll-timeline` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scroll-timeline
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - chrome : 115
   * - chrome_android : 115
   * - edge : 115
   */
  scrollTimeline?: Token<CSS.Property.ScrollTimeline>
  /**
   * The CSS `scroll-timeline-axis` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scroll-timeline-axis
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - chrome : 115
   * - chrome_android : 115
   * - edge : 115
   */
  scrollTimelineAxis?: Token<CSS.Property.ScrollTimelineAxis>
  /**
   * The CSS `scroll-timeline-name` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/scroll-timeline-name
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - chrome : 115
   * - chrome_android : 115
   * - edge : 115
   */
  scrollTimelineName?: Token<CSS.Property.ScrollTimelineName>
  /**
   * Sets the value of `--sepia`.
   */
  sepia?: Token<StringLiteral>
  /**
   * The CSS `box-shadow` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/box-shadow
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 10
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 4
   * - firefox_android : 4
   * - safari : 5.1
   * - safari_ios : 5
   */
  shadow?: Token<CSS.Property.BoxShadow, "shadows">
  /**
   * The CSS `shape-image-threshold` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/shape-image-threshold
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 37
   * - chrome_android : 37
   * - edge : 79
   * - firefox : 62
   * - firefox_android : 62
   * - safari : 10.1
   * - safari_ios : 10.3
   */
  shapeImageThreshold?: Token<CSS.Property.ShapeImageThreshold>
  /**
   * The CSS `shape-margin` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/shape-margin
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 37
   * - chrome_android : 37
   * - edge : 79
   * - firefox : 62
   * - firefox_android : 62
   * - safari : 10.1
   * - safari_ios : 10.3
   */
  shapeMargin?: Token<CSS.Property.ShapeMargin>
  /**
   * The CSS `shape-outside` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/shape-outside
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 37
   * - chrome_android : 37
   * - edge : 79
   * - firefox : 62
   * - firefox_android : 62
   * - safari : 10.1
   * - safari_ios : 10.3
   */
  shapeOutside?: Token<CSS.Property.ShapeOutside>
  /**
   * The CSS `shape-rendering` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/shape-rendering
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 79
   * - firefox : 3
   * - firefox_android : 4
   * - safari : 3
   * - safari_ios : 2
   */
  shapeRendering?: Token<CSS.Property.ShapeRendering>
  /**
   * Sets the value of `--skew-x`.
   */
  skewX?: Token<StringLiteral>
  /**
   * Sets the value of `--skew-y`.
   */
  skewY?: Token<StringLiteral>
  /**
   * The CSS `stop-color` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/stop-color
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 79
   * - firefox : 3
   * - firefox_android : 4
   * - safari : 3
   * - safari_ios : 2
   */
  stopColor?: Token<CSS.Property.StopColor>
  /**
   * The CSS `stop-opacity` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/stop-opacity
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 79
   * - firefox : 3
   * - firefox_android : 4
   * - safari : 3
   * - safari_ios : 2
   */
  stopOpacity?: Token<CSS.Property.StopOpacity>
  /**
   * The CSS `stroke` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/stroke
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 79
   * - firefox : 3
   * - firefox_android : 4
   * - safari : 3
   * - safari_ios : 2
   */
  stroke?: Token<CSS.Property.Stroke, "colors">
  /**
   * The CSS `stroke-dasharray` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/stroke-dasharray
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 79
   * - firefox : 3
   * - firefox_android : 4
   * - safari : 3
   * - safari_ios : 2
   */
  strokeDasharray?: Token<CSS.Property.StrokeDasharray>
  /**
   * The CSS `stroke-dashoffset` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/stroke-dashoffset
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 79
   * - firefox : 3
   * - firefox_android : 4
   * - safari : 3
   * - safari_ios : 2
   */
  strokeDashoffset?: Token<CSS.Property.StrokeDashoffset | number>
  /**
   * The CSS `stroke-linecap` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/stroke-linecap
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 79
   * - firefox : 3
   * - firefox_android : 4
   * - safari : 3
   * - safari_ios : 2
   */
  strokeLinecap?: Token<CSS.Property.StrokeLinecap>
  /**
   * The CSS `stroke-linejoin` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/stroke-linejoin
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 79
   * - firefox : 3
   * - firefox_android : 4
   * - safari : 3
   * - safari_ios : 2
   */
  strokeLinejoin?: Token<CSS.Property.StrokeLinejoin>
  /**
   * The CSS `stroke-miterlimit` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/stroke-miterlimit
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 79
   * - firefox : 3
   * - firefox_android : 4
   * - safari : 3
   * - safari_ios : 2
   */
  strokeMiterlimit?: Token<CSS.Property.StrokeMiterlimit>
  /**
   * The CSS `stroke-opacity` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/stroke-opacity
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `≤2022-09-24`
   * @newly_available_date `≤2020-03-24`
   * @support_browsers
   * - chrome : ≤80
   * - chrome_android : ≤80
   * - edge : ≤80
   * - firefox : 1
   * - firefox_android : 4
   * - safari : ≤13.1
   * - safari_ios : ≤13.4
   */
  strokeOpacity?: Token<CSS.Property.StrokeOpacity>
  /**
   * The CSS `stroke-width` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/stroke-width
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 79
   * - firefox : 3
   * - firefox_android : 4
   * - safari : 3
   * - safari_ios : 2
   */
  strokeWidth?: Token<CSS.Property.StrokeWidth | number>
  /**
   * The CSS `table-layout` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/table-layout
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  tableLayout?: Token<CSS.Property.TableLayout>
  /**
   * The CSS `tab-size` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/tab-size
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-02-10`
   * @newly_available_date `2021-08-10`
   * @support_browsers
   * - chrome : 42
   * - chrome_android : 42
   * - edge : 79
   * - firefox : 91
   * - firefox_android : 91
   * - safari : 13.1
   * - safari_ios : 13.4
   */
  tabSize?: Token<CSS.Property.TabSize>
  /**
   * The CSS `font-size` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/font-size
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  text?: Token<CSS.Property.FontSize | number, "fontSizes">
  /**
   * The CSS `text-align` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/text-align
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  textAlign?: Token<CSS.Property.TextAlign>
  /**
   * The CSS `text-align-last` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/text-align-last
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2022-09-12`
   * @support_browsers
   * - chrome : 47
   * - chrome_android : 47
   * - edge : 12
   * - firefox : 49
   * - firefox_android : 49
   * - safari : 16
   * - safari_ios : 16
   */
  textAlignLast?: Token<CSS.Property.TextAlignLast>
  /**
   * The CSS `text-anchor` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/text-anchor
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 79
   * - firefox : 3
   * - firefox_android : 4
   * - safari : 3
   * - safari_ios : 2
   */
  textAnchor?: Token<CSS.Property.TextAnchor>
  /**
   * The CSS `color` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/color
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  textColor?: Token<CSS.Property.Color, "colors">
  /**
   * The CSS `text-combine-upright` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/text-combine-upright
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-09-14`
   * @newly_available_date `2022-03-14`
   * @support_browsers
   * - chrome : 48
   * - chrome_android : 48
   * - edge : 79
   * - firefox : 48
   * - firefox_android : 48
   * - safari : 15.4
   * - safari_ios : 15.4
   */
  textCombineUpright?: Token<CSS.Property.TextCombineUpright>
  /**
   * The CSS `text-decoration` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/text-decoration
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  textDecor?: Token<CSS.Property.TextDecoration>
  /**
   * The CSS `text-decoration` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/text-decoration
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  textDecoration?: Token<CSS.Property.TextDecoration>
  /**
   * The CSS `text-decoration-color` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/text-decoration-color
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  textDecorationColor?: Token<CSS.Property.TextDecorationColor, "colors">
  /**
   * The CSS `text-decoration-line` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/text-decoration-line
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  textDecorationLine?: Token<CSS.Property.TextDecorationLine>
  /**
   * The CSS `text-decoration-skip` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  textDecorationSkip?: Token<CSS.Property.TextDecorationSkip>
  /**
   * The CSS `text-decoration-skip-ink` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip-ink
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  textDecorationSkipInk?: Token<CSS.Property.TextDecorationSkipInk>
  /**
   * The CSS `text-decoration-style` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/text-decoration-style
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  textDecorationStyle?: Token<CSS.Property.TextDecorationStyle>
  /**
   * The CSS `text-decoration-thickness` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/text-decoration-thickness
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  textDecorationThickness?: Token<CSS.Property.TextDecorationThickness>
  /**
   * The CSS `text-emphasis` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/text-emphasis
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-09-03`
   * @newly_available_date `2022-03-03`
   * @support_browsers
   * - chrome : 99
   * - chrome_android : 99
   * - edge : 99
   * - firefox : 46
   * - firefox_android : 46
   * - safari : 7
   * - safari_ios : 7
   */
  textEmphasis?: Token<CSS.Property.TextEmphasis>
  /**
   * The CSS `text-emphasis-color` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-09-03`
   * @newly_available_date `2022-03-03`
   * @support_browsers
   * - chrome : 99
   * - chrome_android : 99
   * - edge : 99
   * - firefox : 46
   * - firefox_android : 46
   * - safari : 7
   * - safari_ios : 7
   */
  textEmphasisColor?: Token<CSS.Property.TextEmphasisColor, "colors">
  /**
   * The CSS `text-emphasis-position` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/text-emphasis-position
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-09-03`
   * @newly_available_date `2022-03-03`
   * @support_browsers
   * - chrome : 99
   * - chrome_android : 99
   * - edge : 99
   * - firefox : 46
   * - firefox_android : 46
   * - safari : 7
   * - safari_ios : 7
   */
  textEmphasisPosition?: Token<CSS.Property.TextEmphasisPosition>
  /**
   * The CSS `text-emphasis-style` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-09-03`
   * @newly_available_date `2022-03-03`
   * @support_browsers
   * - chrome : 99
   * - chrome_android : 99
   * - edge : 99
   * - firefox : 46
   * - firefox_android : 46
   * - safari : 7
   * - safari_ios : 7
   */
  textEmphasisStyle?: Token<CSS.Property.TextEmphasisStyle>
  /**
   * The CSS `text-indent` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/text-indent
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  textIndent?: Token<CSS.Property.TextIndent>
  /**
   * The CSS `text-justify` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/text-justify
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - firefox : 55
   * - firefox_android : 55
   */
  textJustify?: Token<CSS.Property.TextJustify>
  /**
   * The CSS `text-orientation` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/text-orientation
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2023-03-16`
   * @newly_available_date `2020-09-16`
   * @support_browsers
   * - chrome : 48
   * - chrome_android : 48
   * - edge : 79
   * - firefox : 41
   * - firefox_android : 41
   * - safari : 14
   * - safari_ios : 14
   */
  textOrientation?: Token<CSS.Property.TextOrientation>
  /**
   * The CSS `text-overflow` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/text-overflow
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 7
   * - firefox_android : 7
   * - safari : 1.3
   * - safari_ios : 1
   */
  textOverflow?: Token<CSS.Property.TextOverflow>
  /**
   * The CSS `text-rendering` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/text-rendering
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 79
   * - firefox : 3
   * - firefox_android : 4
   * - safari : 3
   * - safari_ios : 2
   */
  textRendering?: Token<CSS.Property.TextRendering>
  /**
   * The CSS `text-shadow` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/text-shadow
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 2
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 3.5
   * - firefox_android : 4
   * - safari : 1.1
   * - safari_ios : 1
   */
  textShadow?: Token<CSS.Property.TextShadow, "shadows">
  /**
   * The CSS `text-size-adjust` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/text-size-adjust
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - chrome : 54
   * - chrome_android : 54
   * - edge : 79
   */
  textSizeAdjust?: Token<CSS.Property.TextSizeAdjust>
  /**
   * The CSS `text-transform` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/text-transform
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  textTransform?: Token<CSS.Property.TextTransform>
  /**
   * The CSS `text-underline-offset` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/text-underline-offset
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2023-05-19`
   * @newly_available_date `2020-11-19`
   * @support_browsers
   * - chrome : 87
   * - chrome_android : 87
   * - edge : 87
   * - firefox : 70
   * - firefox_android : 79
   * - safari : 12.1
   * - safari_ios : 12.2
   */
  textUnderlineOffset?: Token<CSS.Property.TextUnderlineOffset>
  /**
   * The CSS `text-underline-position` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/text-underline-position
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2023-05-19`
   * @newly_available_date `2020-11-19`
   * @support_browsers
   * - chrome : 87
   * - chrome_android : 87
   * - edge : 87
   * - firefox : 70
   * - firefox_android : 79
   * - safari : 12.1
   * - safari_ios : 12.2
   */
  textUnderlinePosition?: Token<CSS.Property.TextUnderlinePosition>
  /**
   * The CSS `text-wrap` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/text-wrap
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2024-03-19`
   * @support_browsers
   * - chrome : 114
   * - chrome_android : 114
   * - edge : 114
   * - firefox : 124
   * - firefox_android : 124
   * - safari : 17.4
   * - safari_ios : 17.4
   */
  textWrap?: Token<CSS.Property.TextWrap>
  /**
   * The CSS `timeline-scope` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/timeline-scope
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - chrome : 115
   * - chrome_android : 115
   * - edge : 115
   */
  timelineScope?: Token<CSS.Property.TimelineScope>
  /**
   * The CSS `top` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/top
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  top?: Token<CSS.Property.Top | number, "spaces">
  /**
   * The CSS `touch-action` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/touch-action
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-03-19`
   * @newly_available_date `2019-09-19`
   * @support_browsers
   * - chrome : 36
   * - chrome_android : 36
   * - edge : 12
   * - firefox : 52
   * - firefox_android : 52
   * - safari : 13
   * - safari_ios : 9.3
   */
  touchAction?: Token<CSS.Property.TouchAction>
  /**
   * The CSS `letter-spacing` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/letter-spacing
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  tracking?: Token<CSS.Property.LetterSpacing, "letterSpacings">
  /**
   * The CSS `transform` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/transform
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-03-30`
   * @newly_available_date `2015-09-30`
   * @support_browsers
   * - chrome : 36
   * - chrome_android : 36
   * - edge : 12
   * - firefox : 16
   * - firefox_android : 16
   * - safari : 9
   * - safari_ios : 9
   */
  transform?: Token<CSS.Property.Transform>
  /**
   * The CSS `transform-box` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/transform-box
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2024-04-16`
   * @support_browsers
   * - chrome : 118
   * - chrome_android : 118
   * - edge : 118
   * - firefox : 125
   * - firefox_android : 125
   * - safari : 13.1
   * - safari_ios : 13.4
   */
  transformBox?: Token<CSS.Property.TransformBox>
  /**
   * The CSS `transform-origin` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/transform-origin
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-03-30`
   * @newly_available_date `2015-09-30`
   * @support_browsers
   * - chrome : 36
   * - chrome_android : 36
   * - edge : 12
   * - firefox : 16
   * - firefox_android : 16
   * - safari : 9
   * - safari_ios : 9
   */
  transformOrigin?: Token<CSS.Property.TransformOrigin>
  /**
   * The CSS `transform-style` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/transform-style
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2024-09-14`
   * @newly_available_date `2022-03-14`
   * @support_browsers
   * - chrome : 36
   * - chrome_android : 36
   * - edge : 12
   * - firefox : 16
   * - firefox_android : 16
   * - safari : 15.4
   * - safari_ios : 15.4
   */
  transformStyle?: Token<CSS.Property.TransformStyle>
  /**
   * The CSS `transition` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/transition
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
   * The CSS `transition-behavior` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/transition-behavior
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2024-08-06`
   * @support_browsers
   * - chrome : 117
   * - chrome_android : 117
   * - edge : 117
   * - firefox : 129
   * - firefox_android : 129
   * - safari : 17.4
   * - safari_ios : 17.4
   */
  transitionBehavior?: Token<CSS.Property.TransitionBehavior>
  /**
   * The CSS `transition-delay` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/transition-delay
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-03-30`
   * @newly_available_date `2015-09-30`
   * @support_browsers
   * - chrome : 26
   * - chrome_android : 26
   * - edge : 12
   * - firefox : 16
   * - firefox_android : 16
   * - safari : 9
   * - safari_ios : 9
   */
  transitionDelay?: Token<CSS.Property.TransitionDelay>
  /**
   * The CSS `transition-duration` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/transition-duration
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-03-30`
   * @newly_available_date `2015-09-30`
   * @support_browsers
   * - chrome : 26
   * - chrome_android : 26
   * - edge : 12
   * - firefox : 16
   * - firefox_android : 16
   * - safari : 9
   * - safari_ios : 9
   */
  transitionDuration?: Token<CSS.Property.TransitionDuration, "durations">
  /**
   * The CSS `transition-property` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property
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
   * The CSS `transition-timing-function` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/transition-timing-function
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-03-30`
   * @newly_available_date `2015-09-30`
   * @support_browsers
   * - chrome : 26
   * - chrome_android : 26
   * - edge : 12
   * - firefox : 16
   * - firefox_android : 16
   * - safari : 9
   * - safari_ios : 9
   */
  transitionTimingFunction?: Token<
    CSS.Property.TransitionTimingFunction,
    "easings"
  >
  /**
   * The CSS `translate` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/translate
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2022-08-05`
   * @support_browsers
   * - chrome : 104
   * - chrome_android : 104
   * - edge : 104
   * - firefox : 72
   * - firefox_android : 79
   * - safari : 14.1
   * - safari_ios : 14.5
   */
  translate?: Token<"no" | "yes" | CSS.Property.Translate>
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
   * The CSS `unicode-bidi` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/unicode-bidi
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 48
   * - chrome_android : 48
   * - edge : 79
   * - firefox : 50
   * - firefox_android : 50
   * - safari : 11
   * - safari_ios : 11
   */
  unicodeBidi?: Token<CSS.Property.UnicodeBidi>
  /**
   * The CSS `user-select` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/user-select
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - chrome : 54
   * - chrome_android : 54
   * - edge : 79
   * - firefox : 69
   * - firefox_android : 79
   */
  userSelect?: Token<CSS.Property.UserSelect>
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
  vars?: { name: string; token?: ThemeToken; value?: Token<any> }[]
  /**
   * The CSS `vector-effect` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/vector-effect
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 79
   * - firefox : 3
   * - firefox_android : 4
   * - safari : 3
   * - safari_ios : 2
   */
  vectorEffect?: Token<CSS.Property.VectorEffect>
  /**
   * The CSS `vertical-align` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/vertical-align
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  verticalAlign?: Token<CSS.Property.VerticalAlign>
  /**
   * The CSS `view-timeline` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/view-timeline
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - chrome : 115
   * - chrome_android : 115
   * - edge : 115
   */
  viewTimeline?: Token<CSS.Property.ViewTimeline>
  /**
   * The CSS `view-timeline-axis` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/view-timeline-axis
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - chrome : 115
   * - chrome_android : 115
   * - edge : 115
   */
  viewTimelineAxis?: Token<CSS.Property.ViewTimelineAxis>
  /**
   * The CSS `view-timeline-inset` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/view-timeline-inset
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - chrome : 115
   * - chrome_android : 115
   * - edge : 115
   */
  viewTimelineInset?: Token<CSS.Property.ViewTimelineInset>
  /**
   * The CSS `view-timeline-name` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/view-timeline-name
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - chrome : 115
   * - chrome_android : 115
   * - edge : 115
   */
  viewTimelineName?: Token<CSS.Property.ViewTimelineName>
  /**
   * The CSS `view-transition-name` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/view-transition-name
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - chrome : 111
   * - chrome_android : 111
   * - edge : 111
   * - safari : 18
   * - safari_ios : 18
   */
  viewTransitionName?: Token<CSS.Property.ViewTransitionName>
  /**
   * The CSS `visibility` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/visibility
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1.3
   * - safari_ios : 1
   */
  visibility?: Token<CSS.Property.Visibility>
  /**
   * The CSS `width` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/width
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  w?: Token<CSS.Property.Width | number, "sizes">
  /**
   * The CSS `white-space` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/white-space
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  whiteSpace?: Token<CSS.Property.WhiteSpace>
  /**
   * The CSS `white-space-collapse` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/white-space-collapse
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2024-03-19`
   * @support_browsers
   * - chrome : 114
   * - chrome_android : 114
   * - edge : 114
   * - firefox : 124
   * - firefox_android : 124
   * - safari : 17.4
   * - safari_ios : 17.4
   */
  whiteSpaceCollapse?: Token<CSS.Property.WhiteSpaceCollapse>
  /**
   * The CSS `widows` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/widows
   *
   * @Baseline
   * @scope `Limited available`
   * @widely_available_date `-`
   * @newly_available_date `-`
   * @support_browsers
   * - chrome : 25
   * - chrome_android : 25
   * - edge : 12
   * - safari : 1.3
   * - safari_ios : 1
   */
  widows?: Token<CSS.Property.Widows>
  /**
   * The CSS `width` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/width
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  width?: Token<CSS.Property.Width | number, "sizes">
  /**
   * The CSS `will-change` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/will-change
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2022-07-15`
   * @newly_available_date `2020-01-15`
   * @support_browsers
   * - chrome : 36
   * - chrome_android : 36
   * - edge : 79
   * - firefox : 36
   * - firefox_android : 36
   * - safari : 9.1
   * - safari_ios : 9.3
   */
  willChange?: Token<CSS.Property.WillChange>
  /**
   * The CSS `word-break` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/word-break
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-03-30`
   * @newly_available_date `2015-09-30`
   * @support_browsers
   * - chrome : 44
   * - chrome_android : 44
   * - edge : 12
   * - firefox : 15
   * - firefox_android : 15
   * - safari : 9
   * - safari_ios : 9
   */
  wordBreak?: Token<CSS.Property.WordBreak>
  /**
   * The CSS `word-spacing` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/word-spacing
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  wordSpacing?: Token<CSS.Property.WordSpacing>
  /**
   * The CSS `writing-mode` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/writing-mode
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2019-09-27`
   * @newly_available_date `2017-03-27`
   * @support_browsers
   * - chrome : 48
   * - chrome_android : 48
   * - edge : 12
   * - firefox : 41
   * - firefox_android : 41
   * - safari : 10.1
   * - safari_ios : 10.3
   */
  writingMode?: Token<CSS.Property.WritingMode>
  /**
   * The CSS `z-index` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/z-index
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 3
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  z?: Token<CSS.Property.ZIndex, "zIndices">
  /**
   * The CSS `z-index` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/z-index
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 3
   * - firefox_android : 4
   * - safari : 1
   * - safari_ios : 1
   */
  zIndex?: Token<CSS.Property.ZIndex, "zIndices">
  /**
   * The CSS `zoom` property.
   *
   * @see Docs https://developer.mozilla.org/docs/Web/CSS/zoom
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2024-05-14`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 126
   * - firefox_android : 126
   * - safari : 3.1
   * - safari_ios : 3
   */
  zoom?: Token<CSS.Property.Zoom>
  /**
   * The `@container` of CSS at-rule.
   *
   * @example
   * ```jsx
   * <Box containerType="size">
   *   <Text _container={[{ maxW: "1200px", css: { color: "red" } }]}>
   *     Box
   *   </Text>
   * </Box>
   * ```
   *
   * @Baseline
   * @scope `Newly available`
   * @widely_available_date `-`
   * @newly_available_date `2023-02-14`
   * @support_browsers
   * - chrome : 105
   * - chrome_android : 105
   * - edge : 105
   * - firefox : 110
   * - firefox_android : 110
   * - safari : 16
   * - safari_ios : 16
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
   * The `@media` of CSS at-rule.
   *
   * @example
   * ```jsx
   * <Box
   *   _media={[{ maxW: "1200px", css: { color: "red" } }]
   * >
   *   Box
   * </Box>
   * ```
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-01-29`
   * @newly_available_date `2015-07-29`
   * @support_browsers
   * - chrome : 1
   * - chrome_android : 18
   * - edge : 12
   * - firefox : 1
   * - firefox_android : 4
   * - safari : 3
   * - safari_ios : 1
   */
  _media?: {
    [key: string]: any
    type?: "all" | "print" | "screen" | "speech" | StringLiteral
    css?: CSSObject
    /**
     * The feature anyHover of media.
     *
     * @Baseline
     * @scope `Widely available`
     * @widely_available_date `2021-06-11`
     * @newly_available_date `2018-12-11`
     * @support_browsers
     * - chrome : 41
     * - chrome_android : 41
     * - edge : 12
     * - firefox : 64
     * - firefox_android : 64
     * - safari : 9
     * - safari_ios : 9
     */
    anyHover?: "hover" | "none" | StringLiteral
    /**
     * The feature anyPointer of media.
     *
     * @Baseline
     * @scope `Widely available`
     * @widely_available_date `2021-06-11`
     * @newly_available_date `2018-12-11`
     * @support_browsers
     * - chrome : 41
     * - chrome_android : 41
     * - edge : 12
     * - firefox : 64
     * - firefox_android : 64
     * - safari : 9
     * - safari_ios : 9
     */
    anyPointer?: "coarse" | "fine" | "none" | StringLiteral
    /**
     * The feature aspectRatio of media.
     *
     * @Baseline
     * @scope `Widely available`
     * @widely_available_date `2018-01-29`
     * @newly_available_date `2015-07-29`
     * @support_browsers
     * - chrome : 1
     * - chrome_android : 18
     * - edge : 12
     * - firefox : 1
     * - firefox_android : 4
     * - safari : 3
     * - safari_ios : 1
     */
    aspectRatio?: CSS.Property.AspectRatio
    /**
     * The feature color of media.
     *
     * @Baseline
     * @scope `Widely available`
     * @widely_available_date `2018-01-29`
     * @newly_available_date `2015-07-29`
     * @support_browsers
     * - chrome : 1
     * - chrome_android : 18
     * - edge : 12
     * - firefox : 1
     * - firefox_android : 4
     * - safari : 3
     * - safari_ios : 1
     */
    color?: number | StringLiteral
    /**
     * The feature colorGamut of media.
     *
     * @Baseline
     * @scope `Newly available`
     * @widely_available_date `-`
     * @newly_available_date `2023-02-14`
     * @support_browsers
     * - chrome : 58
     * - chrome_android : 58
     * - edge : 79
     * - firefox : 110
     * - firefox_android : 110
     * - safari : 10
     * - safari_ios : 10
     */
    colorGamut?: "p3" | "rec2020" | "srgb" | StringLiteral
    /**
     * The feature colorIndex of media.
     *
     * @Baseline
     * @scope `Widely available`
     * @widely_available_date `2018-01-29`
     * @newly_available_date `2015-07-29`
     * @support_browsers
     * - chrome : 1
     * - chrome_android : 18
     * - edge : 12
     * - firefox : 1
     * - firefox_android : 4
     * - safari : 3
     * - safari_ios : 1
     */
    colorIndex?: number | StringLiteral
    /**
     * The feature deviceAspectRatio of media.
     *
     * @deprecated
     */
    deviceAspectRatio?: CSS.Property.AspectRatio
    /**
     * The feature deviceHeight of media.
     *
     * @deprecated
     */
    deviceHeight?: CSS.Property.Height | number | ThemeTokens["sizes"]
    /**
     * The feature deviceWidth of media.
     *
     * @deprecated
     */
    deviceWidth?: CSS.Property.Width | number | ThemeTokens["sizes"]
    /**
     * The feature displayMode of media.
     *
     * @Baseline
     * @scope `Limited available`
     * @widely_available_date `-`
     * @newly_available_date `-`
     * @support_browsers
     * - chrome : 123
     * - edge : 123
     */
    displayMode?:
      | "browser"
      | "fullscreen"
      | "minimal-ui"
      | "picture-in-picture"
      | "standalone"
      | "window-controls-overlay"
      | StringLiteral
    /**
     * The feature dynamicRange of media.
     *
     * @Baseline
     * @scope `Widely available`
     * @widely_available_date `2024-11-03`
     * @newly_available_date `2022-05-03`
     * @support_browsers
     * - chrome : 98
     * - chrome_android : 98
     * - edge : 98
     * - firefox : 100
     * - firefox_android : 100
     * - safari : 13.1
     * - safari_ios : 13.4
     */
    dynamicRange?: "high" | "standard" | StringLiteral
    /**
     * The feature forcedColors of media.
     *
     * @Baseline
     * @scope `Newly available`
     * @widely_available_date `-`
     * @newly_available_date `2022-09-12`
     * @support_browsers
     * - chrome : 89
     * - chrome_android : 89
     * - edge : 79
     * - firefox : 89
     * - firefox_android : 89
     * - safari : 16
     * - safari_ios : 16
     */
    forcedColors?: "active" | "none" | StringLiteral
    /**
     * The feature grid of media.
     *
     * @Baseline
     * @scope `Widely available`
     * @widely_available_date `2018-01-29`
     * @newly_available_date `2015-07-29`
     * @support_browsers
     * - chrome : 1
     * - chrome_android : 18
     * - edge : 12
     * - firefox : 1
     * - firefox_android : 4
     * - safari : 3
     * - safari_ios : 1
     */
    grid?: "StringLiteral" | 0 | 1
    h?: CSS.Property.Height | number | ThemeTokens["sizes"]
    /**
     * The feature height of media.
     *
     * @Baseline
     * @scope `Widely available`
     * @widely_available_date `2018-01-29`
     * @newly_available_date `2015-07-29`
     * @support_browsers
     * - chrome : 1
     * - chrome_android : 18
     * - edge : 12
     * - firefox : 1
     * - firefox_android : 4
     * - safari : 3
     * - safari_ios : 1
     */
    height?: CSS.Property.Height | number | ThemeTokens["sizes"]
    /**
     * The feature hover of media.
     *
     * @Baseline
     * @scope `Widely available`
     * @widely_available_date `2021-06-11`
     * @newly_available_date `2018-12-11`
     * @support_browsers
     * - chrome : 41
     * - chrome_android : 41
     * - edge : 12
     * - firefox : 64
     * - firefox_android : 64
     * - safari : 9
     * - safari_ios : 9
     */
    hover?: "hover" | "none" | StringLiteral
    /**
     * The feature invertedColors of media.
     *
     * @Baseline
     * @scope `Limited available`
     * @widely_available_date `-`
     * @newly_available_date `-`
     * @support_browsers
     * - safari : 9.1
     * - safari_ios : 10
     */
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
    /**
     * The feature monochrome of media.
     *
     * @Baseline
     * @scope `Widely available`
     * @widely_available_date `2018-01-29`
     * @newly_available_date `2015-07-29`
     * @support_browsers
     * - chrome : 1
     * - chrome_android : 18
     * - edge : 12
     * - firefox : 1
     * - firefox_android : 4
     * - safari : 3
     * - safari_ios : 1
     */
    monochrome?: number | StringLiteral
    /**
     * The feature orientation of media.
     *
     * @Baseline
     * @scope `Widely available`
     * @widely_available_date `2018-01-29`
     * @newly_available_date `2015-07-29`
     * @support_browsers
     * - chrome : 1
     * - chrome_android : 18
     * - edge : 12
     * - firefox : 1
     * - firefox_android : 4
     * - safari : 3
     * - safari_ios : 1
     */
    orientation?: "landscape" | "portrait" | StringLiteral
    /**
     * The feature overflowBlock of media.
     *
     * @Baseline
     * @scope `Newly available`
     * @widely_available_date `-`
     * @newly_available_date `2023-09-18`
     * @support_browsers
     * - chrome : 113
     * - chrome_android : 113
     * - edge : 113
     * - firefox : 66
     * - firefox_android : 66
     * - safari : 17
     * - safari_ios : 17
     */
    overflowBlock?:
      | "none"
      | "optional-paged"
      | "paged"
      | "scroll"
      | StringLiteral
    /**
     * The feature overflowInline of media.
     *
     * @Baseline
     * @scope `Newly available`
     * @widely_available_date `-`
     * @newly_available_date `2023-09-18`
     * @support_browsers
     * - chrome : 113
     * - chrome_android : 113
     * - edge : 113
     * - firefox : 66
     * - firefox_android : 66
     * - safari : 17
     * - safari_ios : 17
     */
    overflowInline?: "none" | "scroll" | StringLiteral
    /**
     * The feature pointer of media.
     *
     * @Baseline
     * @scope `Widely available`
     * @widely_available_date `2021-06-11`
     * @newly_available_date `2018-12-11`
     * @support_browsers
     * - chrome : 41
     * - chrome_android : 41
     * - edge : 12
     * - firefox : 64
     * - firefox_android : 64
     * - safari : 9
     * - safari_ios : 9
     */
    pointer?: "coarse" | "fine" | "none" | StringLiteral
    prefersColorMode?: "dark" | "light" | StringLiteral
    /**
     * The feature prefersContrast of media.
     *
     * @Baseline
     * @scope `Widely available`
     * @widely_available_date `2024-11-30`
     * @newly_available_date `2022-05-31`
     * @support_browsers
     * - chrome : 96
     * - chrome_android : 96
     * - edge : 96
     * - firefox : 101
     * - firefox_android : 101
     * - safari : 14.1
     * - safari_ios : 14.5
     */
    prefersContrast?:
      | "custom"
      | "high"
      | "low"
      | "no-preference"
      | StringLiteral
    /**
     * The feature prefersReducedMotion of media.
     *
     * @Baseline
     * @scope `Widely available`
     * @widely_available_date `2022-07-15`
     * @newly_available_date `2020-01-15`
     * @support_browsers
     * - chrome : 74
     * - chrome_android : 74
     * - edge : 79
     * - firefox : 63
     * - firefox_android : 64
     * - safari : 10.1
     * - safari_ios : 10.3
     */
    prefersReducedMotion?: "no-preference" | "reduce" | StringLiteral
    query?: StringLiteral
    /**
     * The feature resolution of media.
     *
     * @Baseline
     * @scope `Newly available`
     * @widely_available_date `-`
     * @newly_available_date `2022-09-12`
     * @support_browsers
     * - chrome : 68
     * - chrome_android : 68
     * - edge : 79
     * - firefox : 62
     * - firefox_android : 62
     * - safari : 16
     * - safari_ios : 16
     */
    resolution?: StringLiteral
    scan?: "interlace" | "progressive" | StringLiteral
    /**
     * The feature scripting of media.
     *
     * @Baseline
     * @scope `Newly available`
     * @widely_available_date `-`
     * @newly_available_date `2023-12-07`
     * @support_browsers
     * - chrome : 120
     * - chrome_android : 120
     * - edge : 120
     * - firefox : 113
     * - firefox_android : 113
     * - safari : 17
     * - safari_ios : 17
     */
    scripting?: "enabled" | "initial-only" | "none" | StringLiteral
    /**
     * The feature update of media.
     *
     * @Baseline
     * @scope `Newly available`
     * @widely_available_date `-`
     * @newly_available_date `2023-09-18`
     * @support_browsers
     * - chrome : 113
     * - chrome_android : 113
     * - edge : 113
     * - firefox : 102
     * - firefox_android : 102
     * - safari : 17
     * - safari_ios : 17
     */
    update?: "fast" | "none" | "slow" | StringLiteral
    /**
     * The feature videoDynamicRange of media.
     *
     * @Baseline
     * @scope `Limited available`
     * @widely_available_date `-`
     * @newly_available_date `-`
     * @support_browsers
     * - firefox : 100
     * - firefox_android : 100
     */
    videoDynamicRange?: "high" | "standard" | StringLiteral
    w?: CSS.Property.Width | number | ThemeTokens["sizes"]
    /**
     * The feature width of media.
     *
     * @Baseline
     * @scope `Widely available`
     * @widely_available_date `2018-01-29`
     * @newly_available_date `2015-07-29`
     * @support_browsers
     * - chrome : 1
     * - chrome_android : 18
     * - edge : 12
     * - firefox : 1
     * - firefox_android : 4
     * - safari : 3
     * - safari_ios : 1
     */
    width?: CSS.Property.Width | number | ThemeTokens["sizes"]
  }[]
  /**
   * The `@supports` of CSS at-rule.
   *
   * @example
   * ```jsx
   * <Box containerType="size">
   *   <Text _supports={[{ display: "flex", css: { display: "flex" } }]}>
   *     Box
   *   </Text>
   * </Box>
   * ```
   *
   * @Baseline
   * @scope `Widely available`
   * @widely_available_date `2018-03-30`
   * @newly_available_date `2015-09-30`
   * @support_browsers
   * - chrome : 28
   * - chrome_android : 28
   * - edge : 12
   * - firefox : 22
   * - firefox_android : 22
   * - safari : 9
   * - safari_ios : 9
   */
  _supports?: { css?: CSSObject; query?: StringLiteral }[]
}
