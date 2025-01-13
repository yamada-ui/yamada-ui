import type { StringLiteral } from "@yamada-ui/utils"
import type * as CSS from "csstype"
import type { StyleConfigs } from "./config"
import type { CSSObject, Token } from "./css"
import type { ThemeToken } from "./theme"
import type { ColorScheme, Theme } from "./theme.types"
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
    token: "transitions.duration",
    transform: transforms.token("transitions.duration"),
  },
  animationFillMode: true,
  animationIterationCount: true,
  animationName: true,
  animationPlayState: true,
  animationRange: true,
  animationRangeEnd: true,
  animationRangeStart: true,
  animationTimeline: true,
  animationTimingFunction: {
    properties: "animationTimingFunction",
    token: "transitions.easing",
    transform: transforms.token("transitions.easing"),
  },
  appearance: true,
  aspectRatio: true,
  azimuth: true,
  backdropBlur: {
    properties: "--backdrop-blur",
    token: "blurs",
    transform: pipe(transforms.token("blurs"), transforms.function("blur")),
  },
  backdropBrightness: {
    properties: "--backdrop-brightness",
    transform: transforms.function("brightness"),
  },
  backdropContrast: {
    properties: "--backdrop-contrast",
    transform: transforms.function("contrast"),
  },
  backdropDropShadow: {
    properties: "--backdrop-drop-shadow",
    token: "shadows",
    transform: pipe(
      transforms.token("shadows"),
      transforms.function("drop-shadow"),
    ),
  },
  backdropFilter: { transform: transforms.filter("backdrop") },
  backdropGrayscale: {
    properties: "--backdrop-grayscale",
    transform: transforms.function("grayscale"),
  },
  backdropHueRotate: {
    properties: "--backdrop-hue-rotate",
    transform: pipe(transforms.deg, transforms.function("hue-rotate")),
  },
  backdropInvert: {
    properties: "--backdrop-invert",
    transform: transforms.function("invert"),
  },
  backdropSaturate: {
    properties: "--backdrop-saturate",
    transform: transforms.function("saturate"),
  },
  backdropSepia: {
    properties: "--backdrop-sepia",
    transform: transforms.function("sepia"),
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
    transform: pipe(transforms.token("blurs"), transforms.function("blur")),
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
    transform: transforms.function("brightness"),
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
    transform: transforms.function("contrast"),
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
  filter: { transform: transforms.filter() },
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
    transform: transforms.function("grayscale"),
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
    transform: pipe(transforms.deg, transforms.function("hue-rotate")),
  },
  hyphenateCharacter: true,
  hyphenateLimitChars: true,
  hyphens: true,
  imageOrientation: true,
  imageRendering: true,
  imageResolution: true,
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
  invert: { properties: "--invert", transform: transforms.function("invert") },
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
  maskBorderMode: true,
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
  rotate: { properties: "--rotate", transform: transforms.deg },
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
    transform: transforms.function("saturate"),
  },
  scale: { properties: ["--scale-x", "--scale-y"] },
  scaleX: { properties: "--scale-x" },
  scaleY: { properties: "--scale-y" },
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
  sepia: { properties: "--sepia", transform: transforms.function("sepia") },
  shapeImageThreshold: true,
  shapeMargin: true,
  shapeOutside: true,
  shapeRendering: true,
  skewX: { properties: "--skew-x", transform: transforms.deg },
  skewY: { properties: "--skew-y", transform: transforms.deg },
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
  transform: { properties: "transform", transform: transforms.transform },
  transformBox: true,
  transformOrigin: true,
  transformStyle: true,
  transition: true,
  transitionBehavior: true,
  transitionDelay: true,
  transitionDuration: {
    properties: "transitionDuration",
    token: "transitions.duration",
    transform: transforms.token("transitions.duration"),
  },
  transitionProperty: {
    properties: "transitionProperty",
    token: "transitions.property",
    transform: transforms.token("transitions.property"),
  },
  transitionTimingFunction: {
    properties: "transitionTimingFunction",
    token: "transitions.easing",
    transform: transforms.token("transitions.easing"),
  },
  translate: true,
  translateX: {
    properties: "--translate-x",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  translateY: {
    properties: "--translate-y",
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
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
  isTruncated: { transform: transforms.isTruncated },
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
  vars: { processSkip: true, transform: transforms.vars },
} as const satisfies StyleConfigs

export type AtRuleStyleProperty = keyof typeof atRuleStyles

export const atRuleStyles = {
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

export type ProcessSkipProperty = (typeof processSkipProperties)[number]

export const processSkipProperties = [
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

export type BlurProperty = (typeof blurProperties)[number]

export const blurProperties = ["backdropBlur", "blur"] as const

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
  "backdropDropShadow",
  "dropShadow",
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

export type TransitionProperty = (typeof transitionProperties)[number]

export const transitionProperties = [
  "transitionProperty",
  "animationTimingFunction",
  "transitionTimingFunction",
  "animationDuration",
  "transitionDuration",
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
  apply?: Token<StringLiteral>
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
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/accent-color
   */
  accent?: Token<CSS.Property.AccentColor, "colors">
  /**
   * The CSS `accent-color` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/accent-color
   */
  accentColor?: Token<CSS.Property.AccentColor, "colors">
  /**
   * The CSS `align-content` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
   */
  alignContent?: Token<CSS.Property.AlignContent>
  /**
   * The CSS `align-items` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
   */
  alignItems?: Token<CSS.Property.AlignItems>
  /**
   * The CSS `alignment-baseline` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/alignment-baseline
   */
  alignmentBaseline?: Token<CSS.Property.AlignmentBaseline>
  /**
   * The CSS `align-self` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/align-self
   */
  alignSelf?: Token<CSS.Property.AlignSelf>
  /**
   * The CSS `all` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/all
   */
  all?: Token<CSS.Globals>
  /**
   * The CSS `animation` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/animation
   */
  animation?: Token<CSS.Property.Animation, "animations">
  /**
   * The CSS `animation-composition` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/animation-composition
   */
  animationComposition?: Token<CSS.Property.AnimationComposition>
  /**
   * The CSS `animation-delay` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay
   */
  animationDelay?: Token<CSS.Property.AnimationDelay>
  /**
   * The CSS `animation-direction` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction
   */
  animationDirection?: Token<CSS.Property.AnimationDirection>
  /**
   * The CSS `animation-duration` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration
   */
  animationDuration?: Token<
    CSS.Property.AnimationDuration,
    "transitionDuration"
  >
  /**
   * The CSS `animation-fill-mode` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode
   */
  animationFillMode?: Token<CSS.Property.AnimationFillMode>
  /**
   * The CSS `animation-iteration-count` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count
   */
  animationIterationCount?: Token<CSS.Property.AnimationIterationCount>
  /**
   * The CSS `animation-name` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name
   */
  animationName?: Token<CSS.Property.AnimationName>
  /**
   * The CSS `animation-play-state` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state
   */
  animationPlayState?: Token<CSS.Property.AnimationPlayState>
  /**
   * The CSS `animation-range` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/animation-range
   */
  animationRange?: Token<CSS.Property.AnimationRange>
  /**
   * The CSS `animation-range-end` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/animation-range-end
   */
  animationRangeEnd?: Token<CSS.Property.AnimationRangeEnd>
  /**
   * The CSS `animation-range-start` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/animation-range-start
   */
  animationRangeStart?: Token<CSS.Property.AnimationRangeStart>
  /**
   * The CSS `animation-timeline` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline
   */
  animationTimeline?: Token<CSS.Property.AnimationTimeline>
  /**
   * The CSS `animation-timing-function` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function
   */
  animationTimingFunction?: Token<
    CSS.Property.AnimationTimingFunction,
    "transitionEasing"
  >
  /**
   * The CSS `appearance` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/appearance
   */
  appearance?: Token<CSS.Property.Appearance>
  /**
   * The CSS `aspect-ratio` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio
   */
  aspectRatio?: Token<CSS.Property.AspectRatio>
  /**
   * The CSS `azimuth` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/azimuth
   *
   * @deprecated
   */
  azimuth?: Token<CSS.Property.Azimuth>
  /**
   * If `backdropBlur=auto`, sets the value of `--backdrop-blur`.
   */
  backdropBlur?: Token<StringLiteral, "blurs">
  /**
   * If `backdropBlur=auto`, sets the value of `--backdrop-brightness`.
   */
  backdropBrightness?: Token<StringLiteral>
  /**
   * If `backdropBlur=auto`, sets the value of `--backdrop-contrast`.
   */
  backdropContrast?: Token<StringLiteral>
  /**
   * If `backdropBlur=auto`, sets the value of `--backdrop-drop-shadow`.
   */
  backdropDropShadow?: Token<StringLiteral, "shadows">
  /**
   * The CSS `backdrop-filter` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter
   */
  backdropFilter?: Token<"auto" | CSS.Property.BackdropFilter>
  /**
   * If `backdropBlur=auto`, sets the value of `--backdrop-grayscale`.
   */
  backdropGrayscale?: Token<StringLiteral>
  /**
   * If `backdropBlur=auto`, sets the value of `--backdrop-hue-rotate`.
   */
  backdropHueRotate?: Token<StringLiteral>
  /**
   * If `backdropBlur=auto`, sets the value of `--backdrop-invert`.
   */
  backdropInvert?: Token<StringLiteral>
  /**
   * If `backdropBlur=auto`, sets the value of `--backdrop-saturate`.
   */
  backdropSaturate?: Token<StringLiteral>
  /**
   * If `backdropBlur=auto`, sets the value of `--backdrop-sepia`.
   */
  backdropSepia?: Token<StringLiteral>
  /**
   * The CSS `backface-visibility` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility
   */
  backfaceVisibility?: Token<CSS.Property.BackfaceVisibility | number, "sizes">
  /**
   * The CSS `background` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/background
   */
  background?: Token<CSS.Property.Background, "colors">
  /**
   * The CSS `background-attachment` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment
   */
  backgroundAttachment?: Token<CSS.Property.BackgroundAttachment>
  /**
   * The CSS `background-blend-mode` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode
   */
  backgroundBlendMode?: Token<CSS.Property.BackgroundBlendMode>
  /**
   * The CSS `background-clip` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip
   */
  backgroundClip?: Token<CSS.Property.BackgroundClip>
  /**
   * The CSS `background-color` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
   */
  backgroundColor?: Token<CSS.Property.BackgroundColor, "colors">
  /**
   * The CSS `background-image` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/background-image
   */
  backgroundImage?: Token<CSS.Property.BackgroundImage, "gradients">
  /**
   * The CSS `background-origin` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin
   */
  backgroundOrigin?: Token<CSS.Property.BackgroundOrigin>
  /**
   * The CSS `background-position` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/background-position
   */
  backgroundPosition?: Token<CSS.Property.BackgroundPosition>
  /**
   * The CSS `background-position-x` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/background-position-x
   */
  backgroundPositionX?: Token<CSS.Property.BackgroundPositionX>
  /**
   * The CSS `background-position-y` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/background-position-y
   */
  backgroundPositionY?: Token<CSS.Property.BackgroundPositionY>
  /**
   * The CSS `background-repeat` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat
   */
  backgroundRepeat?: Token<CSS.Property.BackgroundRepeat>
  /**
   * The CSS `background-size` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/background-size
   */
  backgroundSize?: Token<CSS.Property.BackgroundSize>
  /**
   * The CSS `baseline-shift` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/baseline-shift
   */
  baselineShift?: Token<CSS.Property.BaselineShift>
  /**
   * The CSS `background` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/background
   */
  bg?: Token<CSS.Property.Background, "colors">
  /**
   * The CSS `background-attachment` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment
   */
  bgAttachment?: Token<CSS.Property.BackgroundAttachment>
  /**
   * The CSS `background-blend-mode` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode
   */
  bgBlendMode?: Token<CSS.Property.BackgroundBlendMode>
  /**
   * The CSS `background-clip` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip
   */
  bgClip?: Token<CSS.Property.BackgroundClip>
  /**
   * The CSS `background-color` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
   */
  bgColor?: Token<CSS.Property.BackgroundColor, "colors">
  /**
   * The CSS `background-image` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/background-image
   */
  bgGradient?: Token<CSS.Property.BackgroundImage, "gradients">
  /**
   * The CSS `background-image` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/background-image
   */
  bgImage?: Token<CSS.Property.BackgroundImage, "gradients">
  /**
   * The CSS `background-image` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/background-image
   */
  bgImg?: Token<CSS.Property.BackgroundImage, "gradients">
  /**
   * The CSS `background-origin` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin
   */
  bgOrigin?: Token<CSS.Property.BackgroundOrigin>
  /**
   * The CSS `background-position` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/background-position
   */
  bgPosition?: Token<CSS.Property.BackgroundPosition>
  /**
   * The CSS `background-position-x` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/background-position-x
   */
  bgPositionX?: Token<CSS.Property.BackgroundPositionX>
  /**
   * The CSS `background-position-y` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/background-position-y
   */
  bgPositionY?: Token<CSS.Property.BackgroundPositionY>
  /**
   * The CSS `background-position-x` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/background-position-x
   */
  bgPosX?: Token<CSS.Property.BackgroundPositionX>
  /**
   * The CSS `background-position-y` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/background-position-y
   */
  bgPosY?: Token<CSS.Property.BackgroundPositionY>
  /**
   * The CSS `background-repeat` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat
   */
  bgRepeat?: Token<CSS.Property.BackgroundRepeat>
  /**
   * The CSS `background-size` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/background-size
   */
  bgSize?: Token<CSS.Property.BackgroundSize>
  /**
   * The CSS `mix-blend-mode` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode
   */
  blendMode?: Token<CSS.Property.MixBlendMode>
  /**
   * The CSS `block-size` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/block-size
   */
  blockSize?: Token<CSS.Property.BlockSize | number, "sizes">
  /**
   * If `filter=auto`, sets the value of `--blur`.
   */
  blur?: Token<StringLiteral, "blurs">
  /**
   * The CSS `border` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border
   */
  border?: Token<CSS.Property.Border | number, "borders">
  /**
   * The CSS `border-block` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-block
   */
  borderBlock?: Token<CSS.Property.BorderBlock | number, "borders">
  /**
   * The CSS `border-block-color` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-color
   */
  borderBlockColor?: Token<CSS.Property.BorderBlockColor, "colors">
  /**
   * The CSS `border-block-end` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end
   */
  borderBlockEnd?: Token<CSS.Property.BorderBlockEnd | number, "borders">
  /**
   * The CSS `border-block-end-color` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end-color
   */
  borderBlockEndColor?: Token<CSS.Property.BorderBlockEndColor, "colors">
  /**
   * The CSS `border-block-end-style` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end-style
   */
  borderBlockEndStyle?: Token<CSS.Property.BorderBlockEndStyle>
  /**
   * The CSS `border-block-end-width` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end-width
   */
  borderBlockEndWidth?: Token<CSS.Property.BorderBlockEndWidth | number>
  /**
   * The CSS `border-block-start` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-start
   */
  borderBlockStart?: Token<CSS.Property.BorderBlockStart | number, "borders">
  /**
   * The CSS `border-block-start-color` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-start-color
   */
  borderBlockStartColor?: Token<CSS.Property.BorderBlockStartColor, "colors">
  /**
   * The CSS `border-block-start-style` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-start-style
   */
  borderBlockStartStyle?: Token<CSS.Property.BorderBlockStartStyle>
  /**
   * The CSS `border-block-start-width` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-start-width
   */
  borderBlockStartWidth?: Token<CSS.Property.BorderBlockStartWidth | number>
  /**
   * The CSS `border-block-style` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-style
   */
  borderBlockStyle?: Token<CSS.Property.BorderBlockStyle>
  /**
   * The CSS `border-block-width` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-width
   */
  borderBlockWidth?: Token<CSS.Property.BorderBlockWidth | number>
  /**
   * The CSS `border-bottom` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom
   */
  borderBottom?: Token<CSS.Property.BorderBottom | number, "borders">
  /**
   * The CSS `border-bottom-color` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-color
   */
  borderBottomColor?: Token<CSS.Property.BorderBottomColor, "colors">
  /**
   * The CSS `border-end-end-radius` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-end-end-radius
   */
  borderBottomEndRadius?: Token<
    CSS.Property.BorderEndEndRadius | number,
    "radii"
  >
  /**
   * The CSS `border-bottom-left-radius` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius
   */
  borderBottomLeftRadius?: Token<
    CSS.Property.BorderBottomLeftRadius | number,
    "radii"
  >
  /**
   * The CSS `border-bottom-left-radius` and `border-bottom-right-radius` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius
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
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius
   */
  borderBottomRightRadius?: Token<
    CSS.Property.BorderBottomRightRadius | number,
    "radii"
  >
  /**
   * The CSS `border-end-start-radius` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-end-start-radius
   */
  borderBottomStartRadius?: Token<
    CSS.Property.BorderEndStartRadius | number,
    "radii"
  >
  /**
   * The CSS `border-bottom-style` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-style
   */
  borderBottomStyle?: Token<CSS.Property.BorderBottomStyle>
  /**
   * The CSS `border-bottom-width` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-width
   */
  borderBottomWidth?: Token<CSS.Property.BorderBottomWidth | number>
  /**
   * The CSS `border-collapse` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse
   */
  borderCollapse?: Token<CSS.Property.BorderCollapse>
  /**
   * The CSS `border-color` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
   */
  borderColor?: Token<CSS.Property.BorderColor, "colors">
  /**
   * The CSS `border-inline-end` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end
   */
  borderEnd?: Token<CSS.Property.BorderInlineEnd | number, "borders">
  /**
   * The CSS `border-inline-end-color` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-color
   */
  borderEndColor?: Token<CSS.Property.BorderInlineEndColor, "colors">
  /**
   * The CSS `border-end-end-radius` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-end-end-radius
   */
  borderEndEndRadius?: Token<CSS.Property.BorderEndEndRadius | number, "radii">
  /**
   * The CSS `border-end-start-radius` and `border-end-end-radius` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-end-end-radius
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-end-start-radius
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
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-end-start-radius
   */
  borderEndStartRadius?: Token<
    CSS.Property.BorderEndStartRadius | number,
    "radii"
  >
  /**
   * The CSS `border-inline-end-style` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-style
   */
  borderEndStyle?: Token<CSS.Property.BorderInlineEndStyle>
  /**
   * The CSS `border-inline-end-width` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-width
   */
  borderEndWidth?: Token<CSS.Property.BorderInlineEndWidth | number>
  /**
   * The CSS `border-image` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-image
   */
  borderImage?: Token<CSS.Property.BorderImage | number, "borders">
  /**
   * The CSS `border-image-outset` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-outset
   */
  borderImageOutset?: Token<CSS.Property.BorderImageOutset>
  /**
   * The CSS `border-image-repeat` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-repeat
   */
  borderImageRepeat?: Token<CSS.Property.BorderImageRepeat>
  /**
   * The CSS `border-image-slice` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-slice
   */
  borderImageSlice?: Token<CSS.Property.BorderImageSlice>
  /**
   * The CSS `border-image-source` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-source
   */
  borderImageSource?: Token<CSS.Property.BorderImageSource, "gradients">
  /**
   * The CSS `border-image-width` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-width
   */
  borderImageWidth?: Token<CSS.Property.BorderImageWidth | number>
  /**
   * The CSS `border-inline` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline
   */
  borderInline?: Token<CSS.Property.BorderInline | number, "borders">
  /**
   * The CSS `border-inline-color` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-color
   */
  borderInlineColor?: Token<CSS.Property.BorderInlineColor, "colors">
  /**
   * The CSS `border-inline-end` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end
   */
  borderInlineEnd?: Token<CSS.Property.BorderInlineEnd | number, "borders">
  /**
   * The CSS `border-inline-end-color` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-color
   */
  borderInlineEndColor?: Token<CSS.Property.BorderInlineEndColor, "colors">
  /**
   * The CSS `border-end-start-radius` and `border-end-end-radius` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-end-end-radius
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-end-start-radius
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
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-style
   */
  borderInlineEndStyle?: Token<CSS.Property.BorderInlineEndStyle>
  /**
   * The CSS `border-inline-end-width` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-width
   */
  borderInlineEndWidth?: Token<CSS.Property.BorderInlineEndWidth | number>
  /**
   * The CSS `border-inline-start` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start
   */
  borderInlineStart?: Token<CSS.Property.BorderInlineStart | number, "borders">
  /**
   * The CSS `border-inline-start-color` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start-color
   */
  borderInlineStartColor?: Token<CSS.Property.BorderInlineStartColor, "colors">
  /**
   * The CSS `border-start-start-radius` and `border-start-end-radius` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-start-end-radius
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-start-start-radius
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
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start-style
   */
  borderInlineStartStyle?: Token<CSS.Property.BorderInlineStartStyle>
  /**
   * The CSS `border-inline-start-width` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start-width
   */
  borderInlineStartWidth?: Token<CSS.Property.BorderInlineStartWidth | number>
  /**
   * The CSS `border-inline-style` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-style
   */
  borderInlineStyle?: Token<CSS.Property.BorderInlineStyle>
  /**
   * The CSS `border-inline-width` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-width
   */
  borderInlineWidth?: Token<CSS.Property.BorderInlineWidth | number>
  /**
   * The CSS `border-left` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-left
   */
  borderLeft?: Token<CSS.Property.BorderLeft | number, "borders">
  /**
   * The CSS `border-left-color` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-color
   */
  borderLeftColor?: Token<CSS.Property.BorderLeftColor, "colors">
  /**
   * The CSS `border-top-left-radius` and `border-bottom-left-radius` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius
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
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-style
   */
  borderLeftStyle?: Token<CSS.Property.BorderLeftStyle>
  /**
   * The CSS `border-left-width` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-width
   */
  borderLeftWidth?: Token<CSS.Property.BorderLeftWidth | number>
  /**
   * The CSS `border-radius` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
   */
  borderRadius?: Token<CSS.Property.BorderRadius | number, "radii">
  /**
   * The CSS `border-right` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-right
   */
  borderRight?: Token<CSS.Property.BorderRight | number, "borders">
  /**
   * The CSS `border-right-color` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-color
   */
  borderRightColor?: Token<CSS.Property.BorderRightColor, "colors">
  /**
   * The CSS `border-top-right-radius` and `border-bottom-right-radius` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius
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
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-style
   */
  borderRightStyle?: Token<CSS.Property.BorderRightStyle>
  /**
   * The CSS `border-right-width` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-width
   */
  borderRightWidth?: Token<CSS.Property.BorderRightWidth | number>
  /**
   * The CSS `border-spacing` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-spacing
   */
  borderSpacing?: Token<CSS.Property.BorderSpacing>
  /**
   * The CSS `border-inline-start` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start
   */
  borderStart?: Token<CSS.Property.BorderInlineStart | number, "borders">
  /**
   * The CSS `border-inline-start-color` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start-color
   */
  borderStartColor?: Token<CSS.Property.BorderInlineStartColor, "colors">
  /**
   * The CSS `border-start-end-radius` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-start-end-radius
   */
  borderStartEndRadius?: Token<
    CSS.Property.BorderStartEndRadius | number,
    "radii"
  >
  /**
   * The CSS `border-start-start-radius` and `border-start-end-radius` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-start-end-radius
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-start-start-radius
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
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-start-start-radius
   */
  borderStartStartRadius?: Token<
    CSS.Property.BorderStartStartRadius | number,
    "radii"
  >
  /**
   * The CSS `border-inline-start-style` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start-style
   */
  borderStartStyle?: Token<CSS.Property.BorderInlineStartStyle>
  /**
   * The CSS `border-inline-start-width` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start-width
   */
  borderStartWidth?: Token<CSS.Property.BorderInlineStartWidth | number>
  /**
   * The CSS `border-style` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-style
   */
  borderStyle?: Token<CSS.Property.BorderStyle>
  /**
   * The CSS `border-top` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-top
   */
  borderTop?: Token<CSS.Property.BorderTop | number, "borders">
  /**
   * The CSS `border-top-color` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-color
   */
  borderTopColor?: Token<CSS.Property.BorderTopColor, "colors">
  /**
   * The CSS `border-start-end-radius` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-start-end-radius
   */
  borderTopEndRadius?: Token<
    CSS.Property.BorderStartEndRadius | number,
    "radii"
  >
  /**
   * The CSS `border-top-left-radius` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius
   */
  borderTopLeftRadius?: Token<
    CSS.Property.BorderTopLeftRadius | number,
    "radii"
  >
  /**
   * The CSS `border-top-left-radius` and `border-top-right-radius` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius
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
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius
   */
  borderTopRightRadius?: Token<
    CSS.Property.BorderTopRightRadius | number,
    "radii"
  >
  /**
   * The CSS `border-start-start-radius` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-start-start-radius
   */
  borderTopStartRadius?: Token<
    CSS.Property.BorderStartStartRadius | number,
    "radii"
  >
  /**
   * The CSS `border-top-style` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-style
   */
  borderTopStyle?: Token<CSS.Property.BorderTopStyle>
  /**
   * The CSS `border-top-width` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-width
   */
  borderTopWidth?: Token<CSS.Property.BorderTopWidth | number>
  /**
   * The CSS `border-width` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-width
   */
  borderWidth?: Token<CSS.Property.BorderWidth | number>
  /**
   * The CSS `border-left` and `border-right` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-left
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-right
   */
  borderX?: Token<
    CSS.Property.BorderLeft | CSS.Property.BorderRight | number,
    "borders"
  >
  /**
   * The CSS `border-top` and `border-bottom` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-top
   */
  borderY?: Token<
    CSS.Property.BorderBottom | CSS.Property.BorderTop | number,
    "borders"
  >
  /**
   * The CSS `bottom` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/bottom
   */
  bottom?: Token<CSS.Property.Bottom | number, "spaces">
  /**
   * The CSS `box-align` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/box-align
   *
   * @deprecated
   */
  boxAlign?: Token<CSS.Property.BoxAlign>
  /**
   * The CSS `box-decoration-break` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/box-decoration-break
   */
  boxDecorationBreak?: Token<CSS.Property.BoxDecorationBreak>
  /**
   * The CSS `box-direction` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/box-direction
   *
   * @deprecated
   */
  boxDirection?: Token<CSS.Property.BoxDirection>
  /**
   * The CSS `box-flex` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/box-flex
   *
   * @deprecated
   */
  boxFlex?: Token<CSS.Property.BoxFlex>
  /**
   * The CSS `box-flex-group` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/box-flex-group
   *
   * @deprecated
   */
  boxFlexGroup?: Token<CSS.Property.BoxFlexGroup>
  /**
   * The CSS `box-lines` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/box-lines
   *
   * @deprecated
   */
  boxLines?: Token<CSS.Property.BoxLines>
  /**
   * The CSS `box-ordinal-group` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/box-ordinal-group
   *
   * @deprecated
   */
  boxOrdinalGroup?: Token<CSS.Property.BoxOrdinalGroup>
  /**
   * The CSS `box-orient` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/box-orient
   *
   * @deprecated
   */
  boxOrient?: Token<CSS.Property.BoxOrient>
  /**
   * The CSS `box-pack` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/box-pack
   *
   * @deprecated
   */
  boxPack?: Token<CSS.Property.BoxPack>
  /**
   * The CSS `box-shadow` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
   */
  boxShadow?: Token<CSS.Property.BoxShadow, "shadows">
  /**
   * The CSS `width` and `height` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/height
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/width
   */
  boxSize?: Token<CSS.Property.Height | CSS.Property.Width | number, "sizes">
  /**
   * The CSS `box-sizing` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing
   */
  boxSizing?: Token<CSS.Property.BoxSizing>
  /**
   * The CSS `break-after` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/break-after
   */
  breakAfter?: Token<CSS.Property.BreakAfter>
  /**
   * The CSS `break-before` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/break-before
   */
  breakBefore?: Token<CSS.Property.BreakBefore>
  /**
   * The CSS `break-inside` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/break-inside
   */
  breakInside?: Token<CSS.Property.BreakInside>
  /**
   * If `filter=auto`, sets the value of `--brightness`.
   */
  brightness?: Token<StringLiteral>
  /**
   * The CSS `caption-side` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/caption-side
   */
  captionSide?: Token<CSS.Property.CaptionSide>
  /**
   * The CSS `caret-color` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/caret-color
   */
  caret?: Token<CSS.Property.CaretColor, "colors">
  /**
   * The CSS `caret-color` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/caret-color
   */
  caretColor?: Token<CSS.Property.CaretColor, "colors">
  /**
   * The CSS `clear` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/clear
   */
  clear?: Token<CSS.Property.Clear>
  /**
   * The CSS `clip` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/clip
   */
  clip?: Token<CSS.Property.Clip>
  /**
   * The CSS `clip-path` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path
   */
  clipPath?: Token<CSS.Property.ClipPath>
  /**
   * The CSS `clip-rule` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/clip-rule
   */
  clipRule?: Token<CSS.Property.ClipRule>
  /**
   * The CSS `color` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/color
   */
  color?: Token<CSS.Property.Color, "colors">
  /**
   * The CSS `color-interpolation` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/color-interpolation
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
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/column-count
   */
  columnCount?: Token<CSS.Property.ColumnCount>
  /**
   * The CSS `column-fill` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/column-fill
   */
  columnFill?: Token<CSS.Property.ColumnFill>
  /**
   * The CSS `column-gap` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap
   */
  columnGap?: Token<CSS.Property.ColumnGap | number, "spaces">
  /**
   * The CSS `column-rule` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule
   */
  columnRule?: Token<CSS.Property.ColumnRule | number>
  /**
   * The CSS `column-rule-color` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-color
   */
  columnRuleColor?: Token<CSS.Property.ColumnRuleColor, "colors">
  /**
   * The CSS `column-rule-style` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-style
   */
  columnRuleStyle?: Token<CSS.Property.ColumnRuleStyle>
  /**
   * The CSS `column-rule-width` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-width
   */
  columnRuleWidth?: Token<CSS.Property.ColumnRuleWidth | number>
  /**
   * The CSS `columns` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/columns
   */
  columns?: Token<CSS.Property.Columns>
  /**
   * The CSS `column-span` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/column-span
   */
  columnSpan?: Token<CSS.Property.ColumnSpan>
  /**
   * The CSS `column-width` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/column-width
   */
  columnWidth?: Token<CSS.Property.ColumnWidth | number, "sizes">
  /**
   * The CSS `contain` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/contain
   */
  contain?: Token<CSS.Property.Contain>
  /**
   * The CSS `container` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/container
   */
  container?: Token<CSS.Property.Container>
  /**
   * The CSS `container-name` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/container-name
   */
  containerName?: Token<CSS.Property.ContainerName>
  /**
   * The CSS `container-type` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/container-type
   */
  containerType?: Token<CSS.Property.ContainerType>
  /**
   * The CSS `contain-intrinsic-block-size` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/contain-intrinsic-block-size
   */
  containIntrinsicBlockSize?: Token<CSS.Property.ContainIntrinsicBlockSize>
  /**
   * The CSS `contain-intrinsic-height` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/contain-intrinsic-height
   */
  containIntrinsicHeight?: Token<CSS.Property.ContainIntrinsicHeight>
  /**
   * The CSS `contain-intrinsic-inline-size` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/contain-intrinsic-inline-size
   */
  containIntrinsicInlineSize?: Token<CSS.Property.ContainIntrinsicInlineSize>
  /**
   * The CSS `contain-intrinsic-size` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/contain-intrinsic-size
   */
  containIntrinsicSize?: Token<CSS.Property.ContainIntrinsicSize>
  /**
   * The CSS `contain-intrinsic-width` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/contain-intrinsic-width
   */
  containIntrinsicWidth?: Token<
    CSS.Property.ContainIntrinsicWidth | number,
    "sizes"
  >
  /**
   * The CSS `content` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/content
   */
  content?: Token<CSS.Property.Content>
  /**
   * The CSS `content-visibility` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility
   */
  contentVisibility?: Token<CSS.Property.ContentVisibility>
  /**
   * If `filter=auto`, sets the value of `--contrast`.
   */
  contrast?: Token<StringLiteral>
  /**
   * The CSS `counter-increment` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/counter-increment
   */
  counterIncrement?: Token<CSS.Property.CounterIncrement>
  /**
   * The CSS `counter-reset` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/counter-reset
   */
  counterReset?: Token<CSS.Property.CounterReset>
  /**
   * The CSS `counter-set` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/counter-set
   */
  counterSet?: Token<CSS.Property.CounterSet>
  /**
   * The CSS `cursor` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
   */
  cursor?: Token<CSS.Property.Cursor>
  /**
   * The CSS `direction` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/direction
   */
  direction?: Token<CSS.Property.Direction>
  /**
   * The CSS `display` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/display
   */
  display?: Token<CSS.Property.Display>
  /**
   * The CSS `dominant-baseline` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/dominant-baseline
   */
  dominantBaseline?: Token<CSS.Property.DominantBaseline>
  /**
   * If `filter=auto`, sets the value of `--drop-shadow`.
   */
  dropShadow?: Token<StringLiteral, "shadows">
  /**
   * The CSS `empty-cells` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/empty-cells
   */
  emptyCells?: Token<CSS.Property.EmptyCells>
  /**
   * The CSS `fill` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/fill
   */
  fill?: Token<CSS.Property.Fill, "colors">
  /**
   * The CSS `fill-opacity` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/fill-opacity
   */
  fillOpacity?: Token<CSS.Property.FillOpacity>
  /**
   * The CSS `fill-rule` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/fill-rule
   */
  fillRule?: Token<CSS.Property.FillRule>
  /**
   * The CSS `filter` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/filter
   */
  filter?: Token<"auto" | CSS.Property.Filter>
  /**
   * The CSS `flex` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/flex
   */
  flex?: Token<CSS.Property.Flex>
  /**
   * The CSS `flex-basis` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis
   */
  flexBasis?: Token<CSS.Property.FlexBasis | number, "sizes">
  /**
   * The CSS `flex-direction` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction
   */
  flexDir?: Token<CSS.Property.FlexDirection>
  /**
   * The CSS `flex-direction` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction
   */
  flexDirection?: Token<CSS.Property.FlexDirection>
  /**
   * The CSS `flex-flow` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow
   */
  flexFlow?: Token<CSS.Property.FlexFlow>
  /**
   * The CSS `flex-grow` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow
   */
  flexGrow?: Token<CSS.Property.FlexGrow>
  /**
   * The CSS `flex-shrink` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink
   */
  flexShrink?: Token<CSS.Property.FlexShrink>
  /**
   * The CSS `flex-wrap` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap
   */
  flexWrap?: Token<CSS.Property.FlexWrap>
  /**
   * The CSS `float` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/float
   */
  float?: Token<CSS.Property.Float>
  /**
   * The CSS `flood-color` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/flood-color
   */
  floodColor?: Token<CSS.Property.FloodColor, "colors">
  /**
   * The CSS `flood-opacity` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/flood-opacity
   */
  floodOpacity?: Token<CSS.Property.FloodOpacity>
  /**
   * The CSS `font` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/font
   */
  font?: Token<CSS.Property.Font>
  /**
   * The CSS `font-family` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/font-family
   */
  fontFamily?: Token<CSS.Property.FontFamily, "fonts">
  /**
   * The CSS `font-feature-settings` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/font-feature-settings
   */
  fontFeatureSettings?: Token<CSS.Property.FontFeatureSettings>
  /**
   * The CSS `font-kerning` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/font-kerning
   */
  fontKerning?: Token<CSS.Property.FontKerning>
  /**
   * The CSS `font-language-override` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/font-language-override
   */
  fontLanguageOverride?: Token<CSS.Property.FontLanguageOverride>
  /**
   * The CSS `font-optical-sizing` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/font-optical-sizing
   */
  fontOpticalSizing?: Token<CSS.Property.FontOpticalSizing>
  /**
   * The CSS `font-palette` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/font-palette
   */
  fontPalette?: Token<CSS.Property.FontPalette>
  /**
   * The CSS `font-size` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
   */
  fontSize?: Token<CSS.Property.FontSize | number, "fontSizes">
  /**
   * The CSS `font-size-adjust` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/font-size-adjust
   */
  fontSizeAdjust?: Token<CSS.Property.FontSizeAdjust>
  /**
   * The CSS `font-smooth` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth
   */
  fontSmooth?: Token<CSS.Property.FontSmooth>
  /**
   * The CSS `font-stretch` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch
   */
  fontStretch?: Token<CSS.Property.FontStretch>
  /**
   * The CSS `font-style` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/font-style
   */
  fontStyle?: Token<CSS.Property.FontStyle>
  /**
   * The CSS `font-synthesis` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/font-synthesis
   */
  fontSynthesis?: Token<CSS.Property.FontSynthesis>
  /**
   * The CSS `font-synthesis-position` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/font-synthesis-position
   */
  fontSynthesisPosition?: Token<CSS.Property.FontSynthesisPosition>
  /**
   * The CSS `font-synthesis-small-caps` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/font-synthesis-small-caps
   */
  fontSynthesisSmallCaps?: Token<CSS.Property.FontSynthesisSmallCaps>
  /**
   * The CSS `font-synthesis-style` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/font-synthesis-style
   */
  fontSynthesisStyle?: Token<CSS.Property.FontSynthesisStyle>
  /**
   * The CSS `font-synthesis-weight` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/font-synthesis-weight
   */
  fontSynthesisWeight?: Token<CSS.Property.FontSynthesisWeight>
  /**
   * The CSS `font-variant` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant
   */
  fontVariant?: Token<CSS.Property.FontVariant>
  /**
   * The CSS `font-variant-alternates` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-alternates
   */
  fontVariantAlternates?: Token<CSS.Property.FontVariantAlternates>
  /**
   * The CSS `font-variant-caps` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-caps
   */
  fontVariantCaps?: Token<CSS.Property.FontVariantCaps>
  /**
   * The CSS `font-variant-east-asian` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-east-asian
   */
  fontVariantEastAsian?: Token<CSS.Property.FontVariantEastAsian>
  /**
   * The CSS `font-variant-emoji` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-emoji
   */
  fontVariantEmoji?: Token<CSS.Property.FontVariantEmoji>
  /**
   * The CSS `font-variant-ligatures` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-ligatures
   */
  fontVariantLigatures?: Token<CSS.Property.FontVariantLigatures>
  /**
   * The CSS `font-variant-numeric` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric
   */
  fontVariantNumeric?: Token<CSS.Property.FontVariantNumeric>
  /**
   * The CSS `font-variant-position` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-position
   */
  fontVariantPosition?: Token<CSS.Property.FontVariantPosition>
  /**
   * The CSS `font-variation-settings` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/font-variation-settings
   */
  fontVariationSettings?: Token<CSS.Property.FontVariationSettings>
  /**
   * The CSS `font-weight` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
   */
  fontWeight?: Token<CSS.Property.FontWeight, "fontWeights">
  /**
   * The CSS `forced-color-adjust` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/forced-color-adjust
   */
  forcedColorAdjust?: Token<CSS.Property.ForcedColorAdjust>
  /**
   * The CSS `gap` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/gap
   */
  g?: Token<CSS.Property.Gap | number, "spaces">
  /**
   * The CSS `gap` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/gap
   */
  gap?: Token<CSS.Property.Gap | number, "spaces">
  /**
   * The CSS `column-gap` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap
   */
  gapX?: Token<CSS.Property.ColumnGap | number, "spaces">
  /**
   * The CSS `row-gap` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap
   */
  gapY?: Token<CSS.Property.RowGap | number, "spaces">
  /**
   * The CSS `glyph-orientation-vertical` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/glyph-orientation-vertical
   */
  glyphOrientationVertical?: Token<CSS.Property.GlyphOrientationVertical>
  /**
   * If `filter=auto`, sets the value of `--grayscale`.
   */
  grayscale?: Token<StringLiteral>
  /**
   * The CSS `grid` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/grid
   */
  grid?: Token<CSS.Property.Grid>
  /**
   * The CSS `grid-area` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area
   */
  gridArea?: Token<CSS.Property.GridArea>
  /**
   * The CSS `grid-auto-columns` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns
   */
  gridAutoColumns?: Token<CSS.Property.GridAutoColumns | number, "sizes">
  /**
   * The CSS `grid-auto-flow` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow
   */
  gridAutoFlow?: Token<CSS.Property.GridAutoFlow>
  /**
   * The CSS `grid-auto-rows` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows
   */
  gridAutoRows?: Token<CSS.Property.GridAutoRows | number, "sizes">
  /**
   * The CSS `grid-column` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column
   */
  gridColumn?: Token<CSS.Property.GridColumn>
  /**
   * The CSS `grid-column-end` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end
   */
  gridColumnEnd?: Token<CSS.Property.GridColumnEnd>
  /**
   * The CSS `grid-column-start` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start
   */
  gridColumnStart?: Token<CSS.Property.GridColumnStart>
  /**
   * The CSS `grid-row` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row
   */
  gridRow?: Token<CSS.Property.GridRow>
  /**
   * The CSS `grid-row-end` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end
   */
  gridRowEnd?: Token<CSS.Property.GridRowEnd>
  /**
   * The CSS `grid-row-start` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start
   */
  gridRowStart?: Token<CSS.Property.GridRowStart>
  /**
   * The CSS `grid-template` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template
   */
  gridTemplate?: Token<CSS.Property.GridTemplate>
  /**
   * The CSS `grid-template-areas` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas
   */
  gridTemplateAreas?: Token<CSS.Property.GridTemplateAreas>
  /**
   * The CSS `grid-template-columns` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns
   */
  gridTemplateColumns?: Token<
    CSS.Property.GridTemplateColumns | number,
    "sizes"
  >
  /**
   * The CSS `grid-template-rows` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows
   */
  gridTemplateRows?: Token<CSS.Property.GridTemplateRows | number, "sizes">
  /**
   * The CSS `column-gap` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap
   */
  gx?: Token<CSS.Property.ColumnGap | number, "spaces">
  /**
   * The CSS `row-gap` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap
   */
  gy?: Token<CSS.Property.RowGap | number, "spaces">
  /**
   * The CSS `height` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/height
   */
  h?: Token<CSS.Property.Height | number, "sizes">
  /**
   * The CSS `hanging-punctuation` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/hanging-punctuation
   */
  hangingPunctuation?: Token<CSS.Property.HangingPunctuation>
  /**
   * The CSS `height` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/height
   */
  height?: Token<CSS.Property.Height | number, "sizes">
  /**
   * If `filter=auto`, sets the value of `--hue-rotate`.
   */
  hueRotate?: Token<StringLiteral>
  /**
   * The CSS `hyphenate-character` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/hyphenate-character
   */
  hyphenateCharacter?: Token<CSS.Property.HyphenateCharacter>
  /**
   * The CSS `hyphenate-limit-chars` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/hyphenate-limit-chars
   */
  hyphenateLimitChars?: Token<CSS.Property.HyphenateLimitChars>
  /**
   * The CSS `hyphens` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens
   */
  hyphens?: Token<CSS.Property.Hyphens>
  /**
   * The CSS `image-orientation` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/image-orientation
   */
  imageOrientation?: Token<CSS.Property.ImageOrientation>
  /**
   * The CSS `image-rendering` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/image-rendering
   */
  imageRendering?: Token<CSS.Property.ImageRendering>
  /**
   * The CSS `image-resolution` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/image-resolution
   */
  imageResolution?: Token<CSS.Property.ImageResolution>
  /**
   * The CSS `initial-letter` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/initial-letter
   */
  initialLetter?: Token<CSS.Property.InitialLetter>
  /**
   * The CSS `inline-size` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size
   */
  inlineSize?: Token<CSS.Property.InlineSize | number, "sizes">
  /**
   * The CSS `inset` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/inset
   */
  inset?: Token<CSS.Property.Inset | number, "spaces">
  /**
   * The CSS `inset-block` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/inset-block
   */
  insetBlock?: Token<CSS.Property.InsetBlock | number, "spaces">
  /**
   * The CSS `inset-block-end` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/inset-block-end
   */
  insetBlockEnd?: Token<CSS.Property.InsetBlockEnd | number, "spaces">
  /**
   * The CSS `inset-block-start` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/inset-block-start
   */
  insetBlockStart?: Token<CSS.Property.InsetBlockStart | number, "spaces">
  /**
   * The CSS `inset-inline-end` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline-end
   */
  insetEnd?: Token<CSS.Property.InsetInlineEnd | number, "spaces">
  /**
   * The CSS `inset-inline` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline
   */
  insetInline?: Token<CSS.Property.InsetInline | number, "spaces">
  /**
   * The CSS `inset-inline-end` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline-end
   */
  insetInlineEnd?: Token<CSS.Property.InsetInlineEnd | number, "spaces">
  /**
   * The CSS `inset-inline-start` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline-start
   */
  insetInlineStart?: Token<CSS.Property.InsetInlineStart | number, "spaces">
  /**
   * The CSS `inset-inline-start` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline-start
   */
  insetStart?: Token<CSS.Property.InsetInlineStart | number, "spaces">
  /**
   * The CSS `left` and `right` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/left
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/right
   */
  insetX?: Token<CSS.Property.Left | CSS.Property.Right | number, "spaces">
  /**
   * The CSS `top` and `bottom` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/bottom
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/top
   */
  insetY?: Token<CSS.Property.Bottom | CSS.Property.Top | number, "spaces">
  /**
   * If `filter=auto`, sets the value of `--invert`.
   */
  invert?: Token<StringLiteral>
  /**
   * The CSS `isolation` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/isolation
   */
  isolation?: Token<CSS.Property.Isolation>
  /**
   * If `true`, it clamps truncate a text after one line.
   */
  isTruncated?: Token<boolean>
  /**
   * The CSS `justify-content` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
   */
  justifyContent?: Token<CSS.Property.JustifyContent>
  /**
   * The CSS `justify-items` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items
   */
  justifyItems?: Token<CSS.Property.JustifyItems>
  /**
   * The CSS `justify-self` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self
   */
  justifySelf?: Token<CSS.Property.JustifySelf>
  /**
   * The CSS `line-height` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
   */
  leading?: Token<CSS.Property.LineHeight, "lineHeights">
  /**
   * The CSS `left` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/left
   */
  left?: Token<CSS.Property.Left | number, "spaces">
  /**
   * The CSS `letter-spacing` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing
   */
  letterSpacing?: Token<CSS.Property.LetterSpacing, "letterSpacings">
  /**
   * The CSS `lighting-color` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/lighting-color
   */
  lightingColor?: Token<CSS.Property.LightingColor, "colors">
  /**
   * The CSS `line-break` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/line-break
   */
  lineBreak?: Token<CSS.Property.LineBreak>
  /**
   * Used to visually truncate a text after a number of lines.
   */
  lineClamp?: Token<number>
  /**
   * The CSS `line-height` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
   */
  lineHeight?: Token<CSS.Property.LineHeight, "lineHeights">
  /**
   * The CSS `line-height-step` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/line-height-step
   */
  lineHeightStep?: Token<CSS.Property.LineHeightStep>
  /**
   * The CSS `list-style` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/list-style
   */
  listStyle?: Token<CSS.Property.ListStyle>
  /**
   * The CSS `list-style-image` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-image
   */
  listStyleImage?: Token<CSS.Property.ListStyleImage, "gradients">
  /**
   * The CSS `list-style-image` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-image
   */
  listStyleImg?: Token<CSS.Property.ListStyleImage, "gradients">
  /**
   * The CSS `list-style-position` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-position
   */
  listStylePos?: Token<CSS.Property.ListStylePosition>
  /**
   * The CSS `list-style-position` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-position
   */
  listStylePosition?: Token<CSS.Property.ListStylePosition>
  /**
   * The CSS `list-style-type` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type
   */
  listStyleType?: Token<CSS.Property.ListStyleType>
  /**
   * The CSS `margin` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/margin
   */
  m?: Token<CSS.Property.Margin | number, "spaces">
  /**
   * The CSS `margin` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/margin
   */
  margin?: Token<CSS.Property.Margin | number, "spaces">
  /**
   * The CSS `margin-block` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block
   */
  marginBlock?: Token<CSS.Property.MarginBlock | number, "spaces">
  /**
   * The CSS `margin-block-end` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block-end
   */
  marginBlockEnd?: Token<CSS.Property.MarginBlockEnd | number, "spaces">
  /**
   * The CSS `margin-block-start` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block-start
   */
  marginBlockStart?: Token<CSS.Property.MarginBlockStart | number, "spaces">
  /**
   * The CSS `margin-bottom` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom
   */
  marginBottom?: Token<CSS.Property.MarginBottom | number, "spaces">
  /**
   * The CSS `margin-inline-end` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-end
   */
  marginEnd?: Token<CSS.Property.MarginInlineEnd | number, "spaces">
  /**
   * The CSS `margin-inline` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline
   */
  marginInline?: Token<CSS.Property.MarginInline | number, "spaces">
  /**
   * The CSS `margin-inline-end` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-end
   */
  marginInlineEnd?: Token<CSS.Property.MarginInlineEnd | number, "spaces">
  /**
   * The CSS `margin-inline-start` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-start
   */
  marginInlineStart?: Token<CSS.Property.MarginInlineStart | number, "spaces">
  /**
   * The CSS `margin-left` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left
   */
  marginLeft?: Token<CSS.Property.MarginLeft | number, "spaces">
  /**
   * The CSS `margin-right` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right
   */
  marginRight?: Token<CSS.Property.MarginRight | number, "spaces">
  /**
   * The CSS `margin-inline-start` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-start
   */
  marginStart?: Token<CSS.Property.MarginInlineStart | number, "spaces">
  /**
   * The CSS `margin-top` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top
   */
  marginTop?: Token<CSS.Property.MarginTop | number, "spaces">
  /**
   * The CSS `margin-trim` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/margin-trim
   */
  marginTrim?: Token<CSS.Property.MarginTrim>
  /**
   * The CSS `margin-inline-start` and `margin-inline-end` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-end
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-start
   */
  marginX?: Token<
    CSS.Property.MarginInlineEnd | CSS.Property.MarginInlineStart | number,
    "spaces"
  >
  /**
   * The CSS `margin-top` and `margin-bottom` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top
   */
  marginY?: Token<
    CSS.Property.MarginBottom | CSS.Property.MarginTop | number,
    "spaces"
  >
  /**
   * The CSS `marker` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/marker
   */
  marker?: Token<CSS.Property.Marker>
  /**
   * The CSS `marker-end` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/marker-end
   */
  markerEnd?: Token<CSS.Property.MarkerEnd>
  /**
   * The CSS `marker-mid` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/marker-mid
   */
  markerMid?: Token<CSS.Property.MarkerMid>
  /**
   * The CSS `marker-start` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/marker-start
   */
  markerStart?: Token<CSS.Property.MarkerStart>
  /**
   * The CSS `mask` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/mask
   */
  mask?: Token<CSS.Property.Mask>
  /**
   * The CSS `mask-border` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/mask-border
   */
  maskBorder?: Token<CSS.Property.MaskBorder>
  /**
   * The CSS `mask-border-mode` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/mask-border-mode
   */
  maskBorderMode?: Token<CSS.Property.MaskBorderMode>
  /**
   * The CSS `mask-border-outset` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/mask-border-outset
   */
  maskBorderOutset?: Token<CSS.Property.MaskBorderOutset>
  /**
   * The CSS `mask-border-repeat` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/mask-border-repeat
   */
  maskBorderRepeat?: Token<CSS.Property.MaskBorderRepeat>
  /**
   * The CSS `mask-border-slice` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/mask-border-slice
   */
  maskBorderSlice?: Token<CSS.Property.MaskBorderSlice>
  /**
   * The CSS `mask-border-source` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/mask-border-source
   */
  maskBorderSource?: Token<CSS.Property.MaskBorderSource>
  /**
   * The CSS `mask-border-width` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/mask-border-width
   */
  maskBorderWidth?: Token<CSS.Property.MaskBorderWidth | number>
  /**
   * The CSS `mask-clip` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/mask-clip
   */
  maskClip?: Token<CSS.Property.MaskClip>
  /**
   * The CSS `mask-composite` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/mask-composite
   */
  maskComposite?: Token<CSS.Property.MaskComposite>
  /**
   * The CSS `mask-image` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image
   */
  maskImage?: Token<CSS.Property.MaskImage, "gradients">
  /**
   * The CSS `mask-mode` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/mask-mode
   */
  maskMode?: Token<CSS.Property.MaskMode>
  /**
   * The CSS `mask-origin` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/mask-origin
   */
  maskOrigin?: Token<CSS.Property.MaskOrigin>
  /**
   * The CSS `mask-position` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/mask-position
   */
  maskPosition?: Token<CSS.Property.MaskPosition>
  /**
   * The CSS `mask-repeat` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/mask-repeat
   */
  maskRepeat?: Token<CSS.Property.MaskRepeat>
  /**
   * The CSS `mask-size` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/mask-size
   */
  maskSize?: Token<CSS.Property.MaskSize>
  /**
   * The CSS `mask-type` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/mask-type
   */
  maskType?: Token<CSS.Property.MaskType>
  /**
   * The CSS `math-depth` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/math-depth
   */
  mathDepth?: Token<CSS.Property.MathDepth>
  /**
   * The CSS `math-shift` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/math-shift
   */
  mathShift?: Token<CSS.Property.MathShift>
  /**
   * The CSS `math-style` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/math-style
   */
  mathStyle?: Token<CSS.Property.MathStyle>
  /**
   * The CSS `max-block-size` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/max-block-size
   */
  maxBlockSize?: Token<CSS.Property.MaxBlockSize | number, "sizes">
  /**
   * The CSS `max-width` and `max-height` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/max-height
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/max-width
   */
  maxBoxSize?: Token<
    CSS.Property.MaxHeight | CSS.Property.MaxWidth | number,
    "sizes"
  >
  /**
   * The CSS `max-height` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/max-height
   */
  maxH?: Token<CSS.Property.MaxHeight | number, "sizes">
  /**
   * The CSS `max-height` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/max-height
   */
  maxHeight?: Token<CSS.Property.MaxHeight | number, "sizes">
  /**
   * The CSS `max-inline-size` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/max-inline-size
   */
  maxInlineSize?: Token<CSS.Property.MaxInlineSize | number, "sizes">
  /**
   * The CSS `max-width` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/max-width
   */
  maxW?: Token<CSS.Property.MaxWidth | number, "sizes">
  /**
   * The CSS `max-width` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/max-width
   */
  maxWidth?: Token<CSS.Property.MaxWidth | number, "sizes">
  /**
   * The CSS `margin-bottom` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom
   */
  mb?: Token<CSS.Property.MarginBottom | number, "spaces">
  /**
   * The CSS `margin-inline-end` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-end
   */
  me?: Token<CSS.Property.MarginInlineEnd | number, "spaces">
  /**
   * The CSS `min-block-size` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/min-block-size
   */
  minBlockSize?: Token<CSS.Property.MinBlockSize | number, "sizes">
  /**
   * The CSS `min-width` and `min-height` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/min-height
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/min-width
   */
  minBoxSize?: Token<
    CSS.Property.MinHeight | CSS.Property.MinWidth | number,
    "sizes"
  >
  /**
   * The CSS `min-height` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/min-height
   */
  minH?: Token<CSS.Property.MinHeight | number, "sizes">
  /**
   * The CSS `min-height` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/min-height
   */
  minHeight?: Token<CSS.Property.MinHeight | number, "sizes">
  /**
   * The CSS `min-inline-size` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/min-inline-size
   */
  minInlineSize?: Token<CSS.Property.MinInlineSize | number, "sizes">
  /**
   * The CSS `min-width` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/min-width
   */
  minW?: Token<CSS.Property.MinWidth | number, "sizes">
  /**
   * The CSS `min-width` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/min-width
   */
  minWidth?: Token<CSS.Property.MinWidth | number, "sizes">
  /**
   * The CSS `mix-blend-mode` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode
   */
  mixBlendMode?: Token<CSS.Property.MixBlendMode>
  /**
   * The CSS `margin-left` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left
   */
  ml?: Token<CSS.Property.MarginLeft | number, "spaces">
  /**
   * The CSS `margin-right` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right
   */
  mr?: Token<CSS.Property.MarginRight | number, "spaces">
  /**
   * The CSS `margin-inline-start` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-start
   */
  ms?: Token<CSS.Property.MarginInlineStart | number, "spaces">
  /**
   * The CSS `margin-top` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top
   */
  mt?: Token<CSS.Property.MarginTop | number, "spaces">
  /**
   * The CSS `margin-inline-start` and `margin-inline-end` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-end
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-start
   */
  mx?: Token<
    CSS.Property.MarginInlineEnd | CSS.Property.MarginInlineStart | number,
    "spaces"
  >
  /**
   * The CSS `margin-top` and `margin-bottom` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top
   */
  my?: Token<
    CSS.Property.MarginBottom | CSS.Property.MarginTop | number,
    "spaces"
  >
  /**
   * The CSS `object-fit` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
   */
  objectFit?: Token<CSS.Property.ObjectFit>
  /**
   * The CSS `object-position` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/object-position
   */
  objectPosition?: Token<CSS.Property.ObjectPosition>
  /**
   * The CSS `offset` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/offset
   */
  offset?: Token<CSS.Property.Offset>
  /**
   * The CSS `offset-anchor` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/offset-anchor
   */
  offsetAnchor?: Token<CSS.Property.OffsetAnchor>
  /**
   * The CSS `offset-distance` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/offset-distance
   */
  offsetDistance?: Token<CSS.Property.OffsetDistance>
  /**
   * The CSS `offset-path` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/offset-path
   */
  offsetPath?: Token<CSS.Property.OffsetPath>
  /**
   * The CSS `offset-position` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/offset-position
   */
  offsetPosition?: Token<CSS.Property.OffsetPosition>
  /**
   * The CSS `offset-rotate` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/offset-rotate
   */
  offsetRotate?: Token<CSS.Property.OffsetRotate>
  /**
   * The CSS `opacity` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/opacity
   */
  opacity?: Token<CSS.Property.Opacity>
  /**
   * The CSS `order` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/order
   */
  order?: Token<CSS.Property.Order>
  /**
   * The CSS `orphans` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/orphans
   */
  orphans?: Token<CSS.Property.Orphans>
  /**
   * The CSS `outline` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/outline
   */
  outline?: Token<"inside" | "mixed" | "outside" | CSS.Property.Filter>
  /**
   * The CSS `outline-color` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/outline-color
   */
  outlineColor?: Token<CSS.Property.OutlineColor, "colors">
  /**
   * The CSS `outline-offset` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/outline-offset
   */
  outlineOffset?: Token<CSS.Property.OutlineOffset>
  /**
   * The CSS `outline-style` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/outline-style
   */
  outlineStyle?: Token<CSS.Property.OutlineStyle>
  /**
   * The CSS `outline-width` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/outline-width
   */
  outlineWidth?: Token<CSS.Property.OutlineWidth | number>
  /**
   * The CSS `overflow` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
   */
  overflow?: Token<CSS.Property.Overflow>
  /**
   * The CSS `overflow-anchor` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-anchor
   */
  overflowAnchor?: Token<CSS.Property.OverflowAnchor>
  /**
   * The CSS `overflow-block` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-block
   */
  overflowBlock?: Token<CSS.Property.OverflowBlock>
  /**
   * The CSS `overflow-clip-margin` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-clip-margin
   */
  overflowClipMargin?: Token<CSS.Property.OverflowClipMargin>
  /**
   * The CSS `overflow-inline` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-inline
   */
  overflowInline?: Token<CSS.Property.OverflowInline>
  /**
   * The CSS `overflow-wrap` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap
   */
  overflowWrap?: Token<CSS.Property.OverflowWrap>
  /**
   * The CSS `overflow-x` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x
   */
  overflowX?: Token<CSS.Property.OverflowX>
  /**
   * The CSS `overflow-y` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y
   */
  overflowY?: Token<CSS.Property.OverflowY>
  /**
   * The CSS `overlay` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/overlay
   */
  overlay?: Token<CSS.Property.Overlay>
  /**
   * The CSS `overscroll-behavior` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior
   */
  overscroll?: Token<CSS.Property.OverscrollBehavior>
  /**
   * The CSS `overscroll-behavior` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior
   */
  overscrollBehavior?: Token<CSS.Property.OverscrollBehavior>
  /**
   * The CSS `overscroll-behavior-block` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior-block
   */
  overscrollBehaviorBlock?: Token<CSS.Property.OverscrollBehaviorBlock>
  /**
   * The CSS `overscroll-behavior-inline` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior-inline
   */
  overscrollBehaviorInline?: Token<CSS.Property.OverscrollBehaviorInline>
  /**
   * The CSS `overscroll-behavior-x` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior-x
   */
  overscrollBehaviorX?: Token<CSS.Property.OverscrollBehaviorX>
  /**
   * The CSS `overscroll-behavior-y` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior-y
   */
  overscrollBehaviorY?: Token<CSS.Property.OverscrollBehaviorY>
  /**
   * The CSS `overscroll-behavior-x` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior-x
   */
  overscrollX?: Token<CSS.Property.OverscrollBehaviorX>
  /**
   * The CSS `overscroll-behavior-y` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior-y
   */
  overscrollY?: Token<CSS.Property.OverscrollBehaviorY>
  /**
   * The CSS `padding` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/padding
   */
  p?: Token<CSS.Property.Padding | number, "spaces">
  /**
   * The CSS `padding` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/padding
   */
  padding?: Token<CSS.Property.Padding | number, "spaces">
  /**
   * The CSS `padding-block` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block
   */
  paddingBlock?: Token<CSS.Property.PaddingBlock | number, "spaces">
  /**
   * The CSS `padding-block-end` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block-end
   */
  paddingBlockEnd?: Token<CSS.Property.PaddingBlockEnd | number, "spaces">
  /**
   * The CSS `padding-block-start` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block-start
   */
  paddingBlockStart?: Token<CSS.Property.PaddingBlockStart | number, "spaces">
  /**
   * The CSS `padding-bottom` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom
   */
  paddingBottom?: Token<CSS.Property.PaddingBottom | number, "spaces">
  /**
   * The CSS `padding-inline-end` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-end
   */
  paddingEnd?: Token<CSS.Property.PaddingInlineEnd | number, "spaces">
  /**
   * The CSS `padding-inline` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline
   */
  paddingInline?: Token<CSS.Property.PaddingInline | number, "spaces">
  /**
   * The CSS `padding-inline-end` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-end
   */
  paddingInlineEnd?: Token<CSS.Property.PaddingInlineEnd | number, "spaces">
  /**
   * The CSS `padding-inline-start` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-start
   */
  paddingInlineStart?: Token<CSS.Property.PaddingInlineStart | number, "spaces">
  /**
   * The CSS `padding-left` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left
   */
  paddingLeft?: Token<CSS.Property.PaddingLeft | number, "spaces">
  /**
   * The CSS `padding-right` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right
   */
  paddingRight?: Token<CSS.Property.PaddingRight | number, "spaces">
  /**
   * The CSS `padding-inline-start` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-start
   */
  paddingStart?: Token<CSS.Property.PaddingInlineStart | number, "spaces">
  /**
   * The CSS `padding-top` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top
   */
  paddingTop?: Token<CSS.Property.PaddingTop | number, "spaces">
  /**
   * The CSS `padding-inline-start` and `padding-inline-end` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-end
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-start
   */
  paddingX?: Token<
    CSS.Property.PaddingInlineEnd | CSS.Property.PaddingInlineStart | number,
    "spaces"
  >
  /**
   * The CSS `padding-top` and `padding-bottom` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top
   */
  paddingY?: Token<
    CSS.Property.PaddingBottom | CSS.Property.PaddingTop | number,
    "spaces"
  >
  /**
   * The CSS `page` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/page
   */
  page?: Token<CSS.Property.Page>
  /**
   * The CSS `page-break-after` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-after
   */
  pageBreakAfter?: Token<CSS.Property.PageBreakAfter>
  /**
   * The CSS `page-break-before` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-before
   */
  pageBreakBefore?: Token<CSS.Property.PageBreakBefore>
  /**
   * The CSS `page-break-inside` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-inside
   */
  pageBreakInside?: Token<CSS.Property.PageBreakInside>
  /**
   * The CSS `paint-order` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/paint-order
   */
  paintOrder?: Token<CSS.Property.PaintOrder>
  /**
   * The CSS `padding-bottom` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom
   */
  pb?: Token<CSS.Property.PaddingBottom | number, "spaces">
  /**
   * The CSS `padding-inline-end` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-end
   */
  pe?: Token<CSS.Property.PaddingInlineEnd | number, "spaces">
  /**
   * The CSS `perspective` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/perspective
   */
  perspective?: Token<CSS.Property.Perspective>
  /**
   * The CSS `perspective-origin` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin
   */
  perspectiveOrigin?: Token<CSS.Property.PerspectiveOrigin>
  /**
   * The CSS `padding-left` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left
   */
  pl?: Token<CSS.Property.PaddingLeft | number, "spaces">
  /**
   * The CSS `place-content` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/place-content
   */
  placeContent?: Token<CSS.Property.PlaceContent>
  /**
   * The CSS `place-items` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/place-items
   */
  placeItems?: Token<CSS.Property.PlaceItems>
  /**
   * The CSS `place-self` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/place-self
   */
  placeSelf?: Token<CSS.Property.PlaceSelf>
  /**
   * The CSS `pointer-events` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events
   */
  pointerEvents?: Token<CSS.Property.PointerEvents>
  /**
   * The CSS `position` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/position
   */
  pos?: Token<CSS.Property.Position>
  /**
   * The CSS `position` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/position
   */
  position?: Token<CSS.Property.Position>
  /**
   * The CSS `padding-right` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right
   */
  pr?: Token<CSS.Property.PaddingRight | number, "spaces">
  /**
   * The CSS `print-color-adjust` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/print-color-adjust
   */
  printColorAdjust?: Token<CSS.Property.PrintColorAdjust>
  /**
   * The CSS `padding-inline-start` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-start
   */
  ps?: Token<CSS.Property.PaddingInlineStart | number, "spaces">
  /**
   * The CSS `padding-top` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top
   */
  pt?: Token<CSS.Property.PaddingTop | number, "spaces">
  /**
   * The CSS `padding-inline-start` and `padding-inline-end` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-end
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-start
   */
  px?: Token<
    CSS.Property.PaddingInlineEnd | CSS.Property.PaddingInlineStart | number,
    "spaces"
  >
  /**
   * The CSS `padding-top` and `padding-bottom` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top
   */
  py?: Token<
    CSS.Property.PaddingBottom | CSS.Property.PaddingTop | number,
    "spaces"
  >
  /**
   * The CSS `quotes` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/quotes
   */
  quotes?: Token<CSS.Property.Quotes>
  /**
   * The CSS `resize` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/resize
   */
  resize?: Token<CSS.Property.Resize>
  /**
   * The CSS `right` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/right
   */
  right?: Token<CSS.Property.Right | number, "spaces">
  /**
   * If `transform=auto` or `transform=auto-3d`, sets the value of `--rotate`.
   */
  rotate?: Token<StringLiteral>
  /**
   * The CSS `border-radius` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
   */
  rounded?: Token<CSS.Property.BorderRadius | number, "radii">
  /**
   * The CSS `border-bottom-left-radius` and `border-bottom-right-radius` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius
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
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-end-end-radius
   */
  roundedBottomEnd?: Token<CSS.Property.BorderEndEndRadius | number, "radii">
  /**
   * The CSS `border-bottom-left-radius` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius
   */
  roundedBottomLeft?: Token<
    CSS.Property.BorderBottomLeftRadius | number,
    "radii"
  >
  /**
   * The CSS `border-bottom-right-radius` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius
   */
  roundedBottomRight?: Token<
    CSS.Property.BorderBottomRightRadius | number,
    "radii"
  >
  /**
   * The CSS `border-end-start-radius` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-end-start-radius
   */
  roundedBottomStart?: Token<
    CSS.Property.BorderEndStartRadius | number,
    "radii"
  >
  /**
   * The CSS `border-end-start-radius` and `border-end-end-radius` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-end-end-radius
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-end-start-radius
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
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius
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
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius
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
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-start-end-radius
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-start-start-radius
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
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius
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
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-start-end-radius
   */
  roundedTopEnd?: Token<CSS.Property.BorderStartEndRadius | number, "radii">
  /**
   * The CSS `border-top-left-radius` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius
   */
  roundedTopLeft?: Token<CSS.Property.BorderTopLeftRadius | number, "radii">
  /**
   * The CSS `border-top-right-radius` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius
   */
  roundedTopRight?: Token<CSS.Property.BorderTopRightRadius | number, "radii">
  /**
   * The CSS `border-start-start-radius` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/border-start-start-radius
   */
  roundedTopStart?: Token<CSS.Property.BorderStartStartRadius | number, "radii">
  /**
   * The CSS `row-gap` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap
   */
  rowGap?: Token<CSS.Property.RowGap | number, "spaces">
  /**
   * The CSS `ruby-align` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/ruby-align
   */
  rubyAlign?: Token<CSS.Property.RubyAlign>
  /**
   * The CSS `ruby-position` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/ruby-position
   */
  rubyPosition?: Token<CSS.Property.RubyPosition>
  /**
   * If `filter=auto`, sets the value of `--saturate`.
   */
  saturate?: Token<StringLiteral>
  /**
   * If `transform=auto` or `transform=auto-3d`, sets the value of `--scale-x` and `--scale-y`.
   */
  scale?: Token<StringLiteral>
  /**
   * If `transform=auto` or `transform=auto-3d`, sets the value of `--scale-x`.
   */
  scaleX?: Token<StringLiteral>
  /**
   * If `transform=auto` or `transform=auto-3d`, sets the value of `--scale-y`.
   */
  scaleY?: Token<StringLiteral>
  /**
   * The CSS `scrollbar-color` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-color
   */
  scrollbarColor?: Token<CSS.Property.ScrollbarColor, "colors">
  /**
   * The CSS `scrollbar-gutter` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter
   */
  scrollbarGutter?: Token<CSS.Property.ScrollbarGutter>
  /**
   * The CSS `scrollbar-width` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width
   */
  scrollbarWidth?: Token<CSS.Property.ScrollbarWidth | number>
  /**
   * The CSS `scroll-behavior` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior
   */
  scrollBehavior?: Token<CSS.Property.ScrollBehavior>
  /**
   * The CSS `scroll-margin` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin
   */
  scrollMargin?: Token<CSS.Property.ScrollMargin | number, "spaces">
  /**
   * The CSS `scroll-margin-block` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-block
   */
  scrollMarginBlock?: Token<CSS.Property.ScrollMarginBlock>
  /**
   * The CSS `scroll-margin-block-end` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-block-end
   */
  scrollMarginBlockEnd?: Token<CSS.Property.ScrollMarginBlockEnd>
  /**
   * The CSS `scroll-margin-block-start` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-block-start
   */
  scrollMarginBlockStart?: Token<CSS.Property.ScrollMarginBlockStart>
  /**
   * The CSS `scroll-margin-bottom` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-bottom
   */
  scrollMarginBottom?: Token<CSS.Property.ScrollMarginBottom | number, "spaces">
  /**
   * The CSS `scroll-margin-inline` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-inline
   */
  scrollMarginInline?: Token<CSS.Property.ScrollMarginInline>
  /**
   * The CSS `scroll-margin-inline-end` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-inline-end
   */
  scrollMarginInlineEnd?: Token<CSS.Property.ScrollMarginInlineEnd>
  /**
   * The CSS `scroll-margin-inline-start` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-inline-start
   */
  scrollMarginInlineStart?: Token<CSS.Property.ScrollMarginInlineStart>
  /**
   * The CSS `scroll-margin-left` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-left
   */
  scrollMarginLeft?: Token<CSS.Property.ScrollMarginLeft | number, "spaces">
  /**
   * The CSS `scroll-margin-right` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-right
   */
  scrollMarginRight?: Token<CSS.Property.ScrollMarginRight | number, "spaces">
  /**
   * The CSS `scroll-margin-top` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-top
   */
  scrollMarginTop?: Token<CSS.Property.ScrollMarginTop | number, "spaces">
  /**
   * The CSS `scroll-margin-left` and `scroll-margin-right` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-left
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-right
   */
  scrollMarginX?: Token<
    CSS.Property.ScrollMarginLeft | CSS.Property.ScrollMarginRight | number,
    "spaces"
  >
  /**
   * The CSS `scroll-margin-top` and `scroll-margin-bottom` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-bottom
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-top
   */
  scrollMarginY?: Token<
    CSS.Property.ScrollMarginBottom | CSS.Property.ScrollMarginTop | number,
    "spaces"
  >
  /**
   * The CSS `scroll-padding` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding
   */
  scrollPadding?: Token<CSS.Property.ScrollPadding | number, "spaces">
  /**
   * The CSS `scroll-padding-block` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-block
   */
  scrollPaddingBlock?: Token<CSS.Property.ScrollPaddingBlock>
  /**
   * The CSS `scroll-padding-block-end` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-block-end
   */
  scrollPaddingBlockEnd?: Token<CSS.Property.ScrollPaddingBlockEnd>
  /**
   * The CSS `scroll-padding-block-start` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-block-start
   */
  scrollPaddingBlockStart?: Token<CSS.Property.ScrollPaddingBlockStart>
  /**
   * The CSS `scroll-padding-bottom` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-bottom
   */
  scrollPaddingBottom?: Token<
    CSS.Property.ScrollPaddingBottom | number,
    "spaces"
  >
  /**
   * The CSS `scroll-padding-inline` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-inline
   */
  scrollPaddingInline?: Token<CSS.Property.ScrollPaddingInline>
  /**
   * The CSS `scroll-padding-inline-end` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-inline-end
   */
  scrollPaddingInlineEnd?: Token<CSS.Property.ScrollPaddingInlineEnd>
  /**
   * The CSS `scroll-padding-inline-start` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-inline-start
   */
  scrollPaddingInlineStart?: Token<CSS.Property.ScrollPaddingInlineStart>
  /**
   * The CSS `scroll-padding-left` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-left
   */
  scrollPaddingLeft?: Token<CSS.Property.ScrollPaddingLeft | number, "spaces">
  /**
   * The CSS `scroll-padding-right` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-right
   */
  scrollPaddingRight?: Token<CSS.Property.ScrollPaddingRight | number, "spaces">
  /**
   * The CSS `scroll-padding-top` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-top
   */
  scrollPaddingTop?: Token<CSS.Property.ScrollPaddingTop | number, "spaces">
  /**
   * The CSS `scroll-padding-left` and `scroll-padding-right` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-left
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-right
   */
  scrollPaddingX?: Token<
    CSS.Property.ScrollPaddingLeft | CSS.Property.ScrollPaddingRight | number,
    "spaces"
  >
  /**
   * The CSS `scroll-padding-top` and `scroll-padding-bottom` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-bottom
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-top
   */
  scrollPaddingY?: Token<
    CSS.Property.ScrollPaddingBottom | CSS.Property.ScrollPaddingTop | number,
    "spaces"
  >
  /**
   * The CSS `scroll-snap-align` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-align
   */
  scrollSnapAlign?: Token<CSS.Property.ScrollSnapAlign>
  /**
   * The CSS `scroll-snap-stop` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-stop
   */
  scrollSnapStop?: Token<CSS.Property.ScrollSnapStop>
  /**
   * The CSS `scroll-snap-type` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type
   */
  scrollSnapType?: Token<CSS.Property.ScrollSnapType>
  /**
   * The CSS `scroll-timeline` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-timeline
   */
  scrollTimeline?: Token<CSS.Property.ScrollTimeline>
  /**
   * The CSS `scroll-timeline-axis` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-timeline-axis
   */
  scrollTimelineAxis?: Token<CSS.Property.ScrollTimelineAxis>
  /**
   * The CSS `scroll-timeline-name` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-timeline-name
   */
  scrollTimelineName?: Token<CSS.Property.ScrollTimelineName>
  /**
   * If `filter=auto`, sets the value of `--sepia`.
   */
  sepia?: Token<StringLiteral>
  /**
   * The CSS `box-shadow` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
   */
  shadow?: Token<CSS.Property.BoxShadow, "shadows">
  /**
   * The CSS `shape-image-threshold` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/shape-image-threshold
   */
  shapeImageThreshold?: Token<CSS.Property.ShapeImageThreshold>
  /**
   * The CSS `shape-margin` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/shape-margin
   */
  shapeMargin?: Token<CSS.Property.ShapeMargin>
  /**
   * The CSS `shape-outside` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/shape-outside
   */
  shapeOutside?: Token<CSS.Property.ShapeOutside>
  /**
   * The CSS `shape-rendering` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/shape-rendering
   */
  shapeRendering?: Token<CSS.Property.ShapeRendering>
  /**
   * If `transform=auto` or `transform=auto-3d`, sets the value of `--skew-x`.
   */
  skewX?: Token<StringLiteral>
  /**
   * If `transform=auto` or `transform=auto-3d`, sets the value of `--skew-y`.
   */
  skewY?: Token<StringLiteral>
  /**
   * The CSS `stop-color` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/stop-color
   */
  stopColor?: Token<CSS.Property.StopColor>
  /**
   * The CSS `stop-opacity` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/stop-opacity
   */
  stopOpacity?: Token<CSS.Property.StopOpacity>
  /**
   * The CSS `stroke` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/stroke
   */
  stroke?: Token<CSS.Property.Stroke, "colors">
  /**
   * The CSS `stroke-dasharray` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/stroke-dasharray
   */
  strokeDasharray?: Token<CSS.Property.StrokeDasharray>
  /**
   * The CSS `stroke-dashoffset` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/stroke-dashoffset
   */
  strokeDashoffset?: Token<CSS.Property.StrokeDashoffset | number>
  /**
   * The CSS `stroke-linecap` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/stroke-linecap
   */
  strokeLinecap?: Token<CSS.Property.StrokeLinecap>
  /**
   * The CSS `stroke-linejoin` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/stroke-linejoin
   */
  strokeLinejoin?: Token<CSS.Property.StrokeLinejoin>
  /**
   * The CSS `stroke-miterlimit` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/stroke-miterlimit
   */
  strokeMiterlimit?: Token<CSS.Property.StrokeMiterlimit>
  /**
   * The CSS `stroke-opacity` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/stroke-opacity
   */
  strokeOpacity?: Token<CSS.Property.StrokeOpacity>
  /**
   * The CSS `stroke-width` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/stroke-width
   */
  strokeWidth?: Token<CSS.Property.StrokeWidth | number>
  /**
   * The CSS `table-layout` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout
   */
  tableLayout?: Token<CSS.Property.TableLayout>
  /**
   * The CSS `tab-size` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/tab-size
   */
  tabSize?: Token<CSS.Property.TabSize>
  /**
   * The CSS `font-size` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
   */
  text?: Token<CSS.Property.FontSize | number, "fontSizes">
  /**
   * The CSS `text-align` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/text-align
   */
  textAlign?: Token<CSS.Property.TextAlign>
  /**
   * The CSS `text-align-last` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/text-align-last
   */
  textAlignLast?: Token<CSS.Property.TextAlignLast>
  /**
   * The CSS `text-anchor` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/text-anchor
   */
  textAnchor?: Token<CSS.Property.TextAnchor>
  /**
   * The CSS `color` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/color
   */
  textColor?: Token<CSS.Property.Color, "colors">
  /**
   * The CSS `text-combine-upright` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/text-combine-upright
   */
  textCombineUpright?: Token<CSS.Property.TextCombineUpright>
  /**
   * The CSS `text-decoration` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration
   */
  textDecor?: Token<CSS.Property.TextDecoration>
  /**
   * The CSS `text-decoration` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration
   */
  textDecoration?: Token<CSS.Property.TextDecoration>
  /**
   * The CSS `text-decoration-color` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-color
   */
  textDecorationColor?: Token<CSS.Property.TextDecorationColor, "colors">
  /**
   * The CSS `text-decoration-line` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line
   */
  textDecorationLine?: Token<CSS.Property.TextDecorationLine>
  /**
   * The CSS `text-decoration-skip` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-skip
   */
  textDecorationSkip?: Token<CSS.Property.TextDecorationSkip>
  /**
   * The CSS `text-decoration-skip-ink` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-skip-ink
   */
  textDecorationSkipInk?: Token<CSS.Property.TextDecorationSkipInk>
  /**
   * The CSS `text-decoration-style` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style
   */
  textDecorationStyle?: Token<CSS.Property.TextDecorationStyle>
  /**
   * The CSS `text-decoration-thickness` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-thickness
   */
  textDecorationThickness?: Token<CSS.Property.TextDecorationThickness>
  /**
   * The CSS `text-emphasis` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis
   */
  textEmphasis?: Token<CSS.Property.TextEmphasis>
  /**
   * The CSS `text-emphasis-color` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis-color
   */
  textEmphasisColor?: Token<CSS.Property.TextEmphasisColor, "colors">
  /**
   * The CSS `text-emphasis-position` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis-position
   */
  textEmphasisPosition?: Token<CSS.Property.TextEmphasisPosition>
  /**
   * The CSS `text-emphasis-style` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis-style
   */
  textEmphasisStyle?: Token<CSS.Property.TextEmphasisStyle>
  /**
   * The CSS `text-indent` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent
   */
  textIndent?: Token<CSS.Property.TextIndent>
  /**
   * The CSS `text-justify` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/text-justify
   */
  textJustify?: Token<CSS.Property.TextJustify>
  /**
   * The CSS `text-orientation` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/text-orientation
   */
  textOrientation?: Token<CSS.Property.TextOrientation>
  /**
   * The CSS `text-overflow` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow
   */
  textOverflow?: Token<CSS.Property.TextOverflow>
  /**
   * The CSS `text-rendering` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/text-rendering
   */
  textRendering?: Token<CSS.Property.TextRendering>
  /**
   * The CSS `text-shadow` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow
   */
  textShadow?: Token<CSS.Property.TextShadow, "shadows">
  /**
   * The CSS `text-size-adjust` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/text-size-adjust
   */
  textSizeAdjust?: Token<CSS.Property.TextSizeAdjust>
  /**
   * The CSS `text-transform` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform
   */
  textTransform?: Token<CSS.Property.TextTransform>
  /**
   * The CSS `text-underline-offset` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-offset
   */
  textUnderlineOffset?: Token<CSS.Property.TextUnderlineOffset>
  /**
   * The CSS `text-underline-position` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-position
   */
  textUnderlinePosition?: Token<CSS.Property.TextUnderlinePosition>
  /**
   * The CSS `text-wrap` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap
   */
  textWrap?: Token<CSS.Property.TextWrap>
  /**
   * The CSS `timeline-scope` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/timeline-scope
   */
  timelineScope?: Token<CSS.Property.TimelineScope>
  /**
   * The CSS `top` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/top
   */
  top?: Token<CSS.Property.Top | number, "spaces">
  /**
   * The CSS `touch-action` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action
   */
  touchAction?: Token<CSS.Property.TouchAction>
  /**
   * The CSS `letter-spacing` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing
   */
  tracking?: Token<CSS.Property.LetterSpacing, "letterSpacings">
  /**
   * The CSS `transform` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/transform
   */
  transform?: Token<CSS.Property.Transform>
  /**
   * The CSS `transform-box` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/transform-box
   */
  transformBox?: Token<CSS.Property.TransformBox>
  /**
   * The CSS `transform-origin` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin
   */
  transformOrigin?: Token<CSS.Property.TransformOrigin>
  /**
   * The CSS `transform-style` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style
   */
  transformStyle?: Token<CSS.Property.TransformStyle>
  /**
   * The CSS `transition` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/transition
   */
  transition?: Token<CSS.Property.Transition>
  /**
   * The CSS `transition-behavior` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/transition-behavior
   */
  transitionBehavior?: Token<CSS.Property.TransitionBehavior>
  /**
   * The CSS `transition-delay` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay
   */
  transitionDelay?: Token<CSS.Property.TransitionDelay>
  /**
   * The CSS `transition-duration` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration
   */
  transitionDuration?: Token<
    CSS.Property.TransitionDuration,
    "transitionDuration"
  >
  /**
   * The CSS `transition-property` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property
   */
  transitionProperty?: Token<
    CSS.Property.TransitionProperty,
    "transitionProperty"
  >
  /**
   * The CSS `transition-timing-function` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function
   */
  transitionTimingFunction?: Token<
    CSS.Property.TransitionTimingFunction,
    "transitionEasing"
  >
  /**
   * The CSS `translate` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/translate
   */
  translate?: Token<"no" | "yes" | CSS.Property.Translate>
  /**
   * If `transform=auto` or `transform=auto-3d`, sets the value of `--translate-x`.
   */
  translateX?: Token<number | StringLiteral, "spaces">
  /**
   * If `transform=auto` or `transform=auto-3d`, sets the value of `--translate-y`.
   */
  translateY?: Token<number | StringLiteral, "spaces">
  /**
   * The CSS `unicode-bidi` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/unicode-bidi
   */
  unicodeBidi?: Token<CSS.Property.UnicodeBidi>
  /**
   * The CSS `user-select` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/user-select
   */
  userSelect?: Token<CSS.Property.UserSelect>
  /**
   * Set CSS variables.
   * @experimental
   *
   * @example
   * ```jsx
   * <Box
   *   vars={[{ name:"space", token: "spaces", value: "md" }]
   *   m="calc($space * 2)"
   * >
   *   Box
   * </Box>
   * ```
   */
  vars?: { name: string; token?: ThemeToken; value?: Token<any> }[]
  /**
   * The CSS `vector-effect` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/vector-effect
   */
  vectorEffect?: Token<CSS.Property.VectorEffect>
  /**
   * The CSS `vertical-align` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align
   */
  verticalAlign?: Token<CSS.Property.VerticalAlign>
  /**
   * The CSS `view-timeline` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/view-timeline
   */
  viewTimeline?: Token<CSS.Property.ViewTimeline>
  /**
   * The CSS `view-timeline-axis` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/view-timeline-axis
   */
  viewTimelineAxis?: Token<CSS.Property.ViewTimelineAxis>
  /**
   * The CSS `view-timeline-inset` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/view-timeline-inset
   */
  viewTimelineInset?: Token<CSS.Property.ViewTimelineInset>
  /**
   * The CSS `view-timeline-name` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/view-timeline-name
   */
  viewTimelineName?: Token<CSS.Property.ViewTimelineName>
  /**
   * The CSS `view-transition-name` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/view-transition-name
   */
  viewTransitionName?: Token<CSS.Property.ViewTransitionName>
  /**
   * The CSS `visibility` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/visibility
   */
  visibility?: Token<CSS.Property.Visibility>
  /**
   * The CSS `width` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/width
   */
  w?: Token<CSS.Property.Width | number, "sizes">
  /**
   * The CSS `white-space` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/white-space
   */
  whiteSpace?: Token<CSS.Property.WhiteSpace>
  /**
   * The CSS `white-space-collapse` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/white-space-collapse
   */
  whiteSpaceCollapse?: Token<CSS.Property.WhiteSpaceCollapse>
  /**
   * The CSS `widows` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/widows
   */
  widows?: Token<CSS.Property.Widows>
  /**
   * The CSS `width` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/width
   */
  width?: Token<CSS.Property.Width | number, "sizes">
  /**
   * The CSS `will-change` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/will-change
   */
  willChange?: Token<CSS.Property.WillChange>
  /**
   * The CSS `word-break` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/word-break
   */
  wordBreak?: Token<CSS.Property.WordBreak>
  /**
   * The CSS `word-spacing` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing
   */
  wordSpacing?: Token<CSS.Property.WordSpacing>
  /**
   * The CSS `writing-mode` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode
   */
  writingMode?: Token<CSS.Property.WritingMode>
  /**
   * The CSS `z-index` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/z-index
   */
  z?: Token<CSS.Property.ZIndex, "zIndices">
  /**
   * The CSS `z-index` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/z-index
   */
  zIndex?: Token<CSS.Property.ZIndex, "zIndices">
  /**
   * The CSS `zoom` property.
   *
   * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/zoom
   */
  zoom?: Token<CSS.Property.Zoom>
  /**
   * The `@container` of CSS at-rule.
   * @experimental
   *
   * @example
   * ```jsx
   * <Box containerType="size">
   *   <Text _container={[{ maxW: "1200px", css: { color: "red" } }]}>
   *     Box
   *   </Text>
   * </Box>
   * ```
   */
  _container?: {
    [key: string]: any
    name?: StringLiteral
    css?: CSSObject
    aspectRatio?: CSS.Property.AspectRatio
    blockSize?: CSS.Property.BlockSize | number | Theme["sizes"]
    h?: CSS.Property.Height | number | Theme["sizes"]
    height?: CSS.Property.Height | number | Theme["sizes"]
    inlineSize?: CSS.Property.InlineSize | number | Theme["sizes"]
    maxAspectRatio?: CSS.Property.AspectRatio
    maxBlockSize?: CSS.Property.MaxBlockSize | number | Theme["sizes"]
    maxH?: CSS.Property.MaxHeight | number | Theme["sizes"]
    maxHeight?: CSS.Property.MaxHeight | number | Theme["sizes"]
    maxInlineSize?: CSS.Property.MaxInlineSize | number | Theme["sizes"]
    maxW?: CSS.Property.MaxWidth | number | Theme["sizes"]
    maxWidth?: CSS.Property.MaxWidth | number | Theme["sizes"]
    minAspectRatio?: CSS.Property.AspectRatio
    minBlockSize?: CSS.Property.MinBlockSize | number | Theme["sizes"]
    minH?: CSS.Property.MinHeight | number | Theme["sizes"]
    minHeight?: CSS.Property.MinHeight | number | Theme["sizes"]
    minInlineSize?: CSS.Property.MinInlineSize | number | Theme["sizes"]
    minW?: CSS.Property.MinWidth | number | Theme["sizes"]
    minWidth?: CSS.Property.MinWidth | number | Theme["sizes"]
    orientation?: "landscape" | "portrait" | StringLiteral
    query?: StringLiteral
    w?: CSS.Property.Width | number | Theme["sizes"]
    width?: CSS.Property.Width | number | Theme["sizes"]
  }[]
  /**
   * The `@media` of CSS at-rule.
   * @experimental
   *
   * @example
   * ```jsx
   * <Box
   *   _media={[{ maxW: "1200px", css: { color: "red" } }]
   * >
   *   Box
   * </Box>
   * ```
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
    deviceHeight?: CSS.Property.Height | number | Theme["sizes"]
    deviceWidth?: CSS.Property.Width | number | Theme["sizes"]
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
    grid?: "StringLiteral" | 0 | 1
    h?: CSS.Property.Height | number | Theme["sizes"]
    height?: CSS.Property.Height | number | Theme["sizes"]
    hover?: "hover" | "none" | StringLiteral
    invertedColors?: "inverted" | "none" | StringLiteral
    maxColor?: number | StringLiteral
    maxColorIndex?: number | StringLiteral
    maxDeviceAspectRatio?: CSS.Property.AspectRatio
    maxDeviceHeight?: CSS.Property.MaxHeight | number | Theme["sizes"]
    maxH?: CSS.Property.MaxHeight | number | Theme["sizes"]
    maxHeight?: CSS.Property.MaxHeight | number | Theme["sizes"]
    maxMonochrome?: number | StringLiteral
    maxResolution?: StringLiteral
    maxW?: CSS.Property.MaxWidth | number | Theme["sizes"]
    maxWidth?: CSS.Property.MaxWidth | number | Theme["sizes"]
    mazDeviceWidth?: CSS.Property.Width | number | Theme["sizes"]
    minColor?: number | StringLiteral
    minColorIndex?: number | StringLiteral
    minDeviceAspectRatio?: CSS.Property.AspectRatio
    minDeviceHeight?: CSS.Property.MinHeight | number | Theme["sizes"]
    minDeviceWidth?: CSS.Property.Width | number | Theme["sizes"]
    minH?: CSS.Property.MinHeight | number | Theme["sizes"]
    minHeight?: CSS.Property.MinHeight | number | Theme["sizes"]
    minMonochrome?: number | StringLiteral
    minResolution?: StringLiteral
    minW?: CSS.Property.MinWidth | number | Theme["sizes"]
    minWidth?: CSS.Property.MinWidth | number | Theme["sizes"]
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
    w?: CSS.Property.Width | number | Theme["sizes"]
    width?: CSS.Property.Width | number | Theme["sizes"]
  }[]
  /**
   * The `@supports` of CSS at-rule.
   * @experimental
   *
   * @example
   * ```jsx
   * <Box containerType="size">
   *   <Text _supports={[{ display: "flex", css: { display: "flex" } }]}>
   *     Box
   *   </Text>
   * </Box>
   * ```
   */
  _supports?: { css?: CSSObject; query?: StringLiteral }[]
}
