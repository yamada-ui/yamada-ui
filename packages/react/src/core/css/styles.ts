import type * as CSS from "csstype"
import type { AnyString } from "../../utils"
import type { ColorScheme, ThemeTokens } from "../system"
import type { StyleConfigs } from "./config"
import type { CSSObject, StyleValueWithCondition } from "./index.types"
import { transforms } from "./config"
import { pipe } from "./utils"

export type StandardStyleProperty = keyof typeof standardStyles

export const standardStyles = {
  accentColor: {
    properties: ["accentColor"],
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
    properties: ["animation"],
    token: "animations",
    transform: pipe(transforms.token("animations"), transforms.animation),
  },
  animationComposition: true,
  animationDelay: true,
  animationDirection: true,
  animationDuration: {
    properties: ["animationDuration"],
    token: "durations",
    transform: transforms.token("durations"),
  },
  animationFillMode: true,
  animationIterationCount: true,
  animationName: {
    properties: ["animationName"],
    token: "keyframes",
    transform: transforms.token("keyframes"),
  },
  animationPlayState: true,
  animationRange: true,
  animationRangeEnd: true,
  animationRangeStart: true,
  animationTimeline: true,
  animationTimingFunction: {
    properties: ["animationTimingFunction"],
    token: "easings",
    transform: transforms.token("easings"),
  },
  appearance: true,
  aspectRatio: {
    properties: ["aspectRatio"],
    token: "aspectRatios",
    transform: transforms.token("aspectRatios"),
  },
  backdropBlur: {
    properties: ["--backdrop-blur"],
    token: "blurs",
    transform: pipe(
      transforms.token("blurs"),
      transforms.function("blur"),
      transforms.filter("backdropFilter"),
    ),
  },
  backdropBrightness: {
    properties: ["--backdrop-brightness"],
    transform: pipe(
      transforms.function("brightness"),
      transforms.filter("backdropFilter"),
    ),
  },
  backdropContrast: {
    properties: ["--backdrop-contrast"],
    transform: pipe(
      transforms.function("contrast"),
      transforms.filter("backdropFilter"),
    ),
  },
  backdropDropShadow: {
    properties: ["--backdrop-drop-shadow"],
    token: "shadows",
    transform: pipe(
      transforms.token("shadows"),
      transforms.function("drop-shadow"),
      transforms.filter("backdropFilter"),
    ),
  },
  backdropFilter: true,
  backdropGrayscale: {
    properties: ["--backdrop-grayscale"],
    transform: pipe(
      transforms.function("grayscale"),
      transforms.filter("backdropFilter"),
    ),
  },
  backdropHueRotate: {
    properties: ["--backdrop-hue-rotate"],
    transform: pipe(
      transforms.deg,
      transforms.function("hue-rotate"),
      transforms.filter("backdropFilter"),
    ),
  },
  backdropInvert: {
    properties: ["--backdrop-invert"],
    transform: pipe(
      transforms.function("invert"),
      transforms.filter("backdropFilter"),
    ),
  },
  backdropSaturate: {
    properties: ["--backdrop-saturate"],
    transform: pipe(
      transforms.function("saturate"),
      transforms.filter("backdropFilter"),
    ),
  },
  backdropSepia: {
    properties: ["--backdrop-sepia"],
    transform: pipe(
      transforms.function("sepia"),
      transforms.filter("backdropFilter"),
    ),
  },
  backfaceVisibility: {
    properties: ["backfaceVisibility"],
    token: "sizes",
    transform: pipe(
      transforms.token("sizes"),
      transforms.fraction,
      transforms.px,
      transforms.calc("sizes"),
    ),
  },
  background: {
    properties: ["background"],
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  backgroundAttachment: true,
  backgroundBlendMode: true,
  backgroundClip: {
    properties: ["backgroundClip"],
    transform: transforms.bgClip,
  },
  backgroundColor: {
    properties: ["backgroundColor"],
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  backgroundImage: {
    properties: ["backgroundImage"],
    token: "gradients",
    transform: pipe(transforms.token("gradients"), transforms.gradient),
  },
  backgroundOrigin: true,
  backgroundPosition: true,
  backgroundPositionX: true,
  backgroundPositionY: true,
  backgroundRepeat: true,
  backgroundRepeatX: true,
  backgroundRepeatY: true,
  backgroundSize: true,
  baselineShift: true,
  baselineSource: true,
  blockSize: {
    properties: ["blockSize"],
    token: "sizes",
    transform: pipe(
      transforms.token("sizes"),
      transforms.fraction,
      transforms.px,
      transforms.calc("sizes"),
    ),
  },
  blur: {
    properties: ["--blur"],
    token: "blurs",
    transform: pipe(
      transforms.token("blurs"),
      transforms.function("blur"),
      transforms.filter(),
    ),
  },
  border: {
    properties: ["border"],
    token: "borders",
    transform: pipe(transforms.token("borders"), transforms.px),
  },
  borderBlock: {
    properties: ["borderBlock"],
    token: "borders",
    transform: pipe(transforms.token("borders"), transforms.px),
  },
  borderBlockColor: {
    properties: ["borderBlockColor"],
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  borderBlockEnd: {
    properties: ["borderBlockEnd"],
    token: "borders",
    transform: pipe(transforms.token("borders"), transforms.px),
  },
  borderBlockEndColor: {
    properties: ["borderBlockEndColor"],
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  borderBlockEndStyle: true,
  borderBlockEndWidth: {
    properties: ["borderBlockEndWidth"],
    transform: transforms.px,
  },
  borderBlockStart: {
    properties: ["borderBlockStart"],
    token: "borders",
    transform: pipe(transforms.token("borders"), transforms.px),
  },
  borderBlockStartColor: {
    properties: ["borderBlockStartColor"],
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  borderBlockStartStyle: true,
  borderBlockStartWidth: {
    properties: ["borderBlockStartWidth"],
    transform: transforms.px,
  },
  borderBlockStyle: true,
  borderBlockWidth: {
    properties: ["borderBlockWidth"],
    transform: transforms.px,
  },
  borderBottom: {
    properties: ["borderBottom"],
    token: "borders",
    transform: pipe(transforms.token("borders"), transforms.px),
  },
  borderBottomColor: {
    properties: ["borderBottomColor"],
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  borderBottomLeftRadius: {
    properties: ["borderBottomLeftRadius"],
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
    properties: ["borderBottomRightRadius"],
    token: "radii",
    transform: pipe(
      transforms.token("radii"),
      transforms.px,
      transforms.calc("radii"),
    ),
  },
  borderBottomStyle: true,
  borderBottomWidth: {
    properties: ["borderBottomWidth"],
    transform: transforms.px,
  },
  borderCollapse: true,
  borderColor: {
    properties: ["borderColor"],
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  borderEndEndRadius: {
    properties: ["borderEndEndRadius"],
    token: "radii",
    transform: pipe(
      transforms.token("radii"),
      transforms.px,
      transforms.calc("radii"),
    ),
  },
  borderEndStartRadius: {
    properties: ["borderEndStartRadius"],
    token: "radii",
    transform: pipe(
      transforms.token("radii"),
      transforms.px,
      transforms.calc("radii"),
    ),
  },
  borderImage: {
    properties: ["borderImage"],
    token: "borders",
    transform: pipe(transforms.token("borders"), transforms.px),
  },
  borderImageOutset: true,
  borderImageRepeat: true,
  borderImageSlice: true,
  borderImageSource: {
    properties: ["borderImageSource"],
    token: "gradients",
    transform: pipe(transforms.token("gradients"), transforms.gradient),
  },
  borderImageWidth: {
    properties: ["borderImageWidth"],
    transform: transforms.px,
  },
  borderInline: {
    properties: ["borderInline"],
    token: "borders",
    transform: pipe(transforms.token("borders"), transforms.px),
  },
  borderInlineColor: {
    properties: ["borderInlineColor"],
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  borderInlineEnd: {
    properties: ["borderInlineEnd"],
    token: "borders",
    transform: pipe(transforms.token("borders"), transforms.px),
  },
  borderInlineEndColor: {
    properties: ["borderInlineEndColor"],
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
    properties: ["borderInlineEndWidth"],
    transform: transforms.px,
  },
  borderInlineStart: {
    properties: ["borderInlineStart"],
    token: "borders",
    transform: pipe(transforms.token("borders"), transforms.px),
  },
  borderInlineStartColor: {
    properties: ["borderInlineStartColor"],
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
    properties: ["borderInlineStartWidth"],
    transform: transforms.px,
  },
  borderInlineStyle: true,
  borderInlineWidth: {
    properties: ["borderInlineWidth"],
    transform: transforms.px,
  },
  borderLeft: {
    properties: ["borderLeft"],
    token: "borders",
    transform: pipe(transforms.token("borders"), transforms.px),
  },
  borderLeftColor: {
    properties: ["borderLeftColor"],
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
  borderLeftWidth: {
    properties: ["borderLeftWidth"],
    transform: transforms.px,
  },
  borderRadius: {
    properties: ["borderRadius"],
    token: "radii",
    transform: pipe(
      transforms.token("radii"),
      transforms.px,
      transforms.calc("radii"),
    ),
  },
  borderRight: {
    properties: ["borderRight"],
    token: "borders",
    transform: pipe(transforms.token("borders"), transforms.px),
  },
  borderRightColor: {
    properties: ["borderRightColor"],
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
    properties: ["borderRightWidth"],
    transform: transforms.px,
  },
  borderSpacing: true,
  borderStartEndRadius: {
    properties: ["borderStartEndRadius"],
    token: "radii",
    transform: pipe(
      transforms.token("radii"),
      transforms.px,
      transforms.calc("radii"),
    ),
  },
  borderStartStartRadius: {
    properties: ["borderStartStartRadius"],
    token: "radii",
    transform: pipe(
      transforms.token("radii"),
      transforms.px,
      transforms.calc("radii"),
    ),
  },
  borderStyle: true,
  borderTop: {
    properties: ["borderTop"],
    token: "borders",
    transform: pipe(transforms.token("borders"), transforms.px),
  },
  borderTopColor: {
    properties: ["borderTopColor"],
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  borderTopLeftRadius: {
    properties: ["borderTopLeftRadius"],
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
    properties: ["borderTopRightRadius"],
    token: "radii",
    transform: pipe(
      transforms.token("radii"),
      transforms.px,
      transforms.calc("radii"),
    ),
  },
  borderTopStyle: true,
  borderTopWidth: { properties: ["borderTopWidth"], transform: transforms.px },
  borderWidth: { properties: ["borderWidth"], transform: transforms.px },
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
    properties: ["bottom"],
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
    properties: ["boxShadow"],
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
    properties: ["--brightness"],
    transform: pipe(transforms.function("brightness"), transforms.filter()),
  },
  captionSide: true,
  caretAnimation: true,
  caretColor: {
    properties: ["caretColor"],
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  clear: true,
  clip: true,
  clipPath: true,
  clipRule: true,
  color: {
    properties: ["color"],
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  colorAdjust: true,
  colorInterpolation: true,
  colorInterpolationFilters: true,
  colorMode: { properties: ["colorScheme"] },
  columnCount: true,
  columnFill: true,
  columnGap: {
    properties: ["columnGap"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  columnRule: { properties: ["columnRule"], transform: transforms.px },
  columnRuleColor: {
    properties: ["columnRuleColor"],
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  columnRuleStyle: true,
  columnRuleWidth: {
    properties: ["columnRuleWidth"],
    transform: transforms.px,
  },
  columns: true,
  columnSpan: true,
  columnWidth: {
    properties: ["columnWidth"],
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
    properties: ["containIntrinsicWidth"],
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
    properties: ["--contrast"],
    transform: pipe(transforms.function("contrast"), transforms.filter()),
  },
  cornerBlockEndShape: true,
  cornerBlockStartShape: true,
  cornerBottomLeftShape: true,
  cornerBottomRightShape: true,
  cornerBottomShape: true,
  cornerEndEndShape: true,
  cornerEndStartShape: true,
  cornerInlineEndShape: true,
  cornerInlineStartShape: true,
  cornerLeftShape: true,
  cornerRightShape: true,
  cornerShape: true,
  cornerStartEndShape: true,
  cornerStartStartShape: true,
  cornerTopLeftShape: true,
  cornerTopRightShape: true,
  cornerTopShape: true,
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
    properties: ["--drop-shadow"],
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
    properties: ["fill"],
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  fillOpacity: true,
  fillRule: true,
  filter: true,
  flex: true,
  flexBasis: {
    properties: ["flexBasis"],
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
    properties: ["floodColor"],
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  floodOpacity: true,
  focusRing: { transform: transforms.focusRing("&:is(:focus, [data-focus])") },
  focusRingColor: {
    properties: ["--focus-ring-color"],
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  focusRingOffset: {
    properties: ["--focus-ring-offset"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  focusRingStyle: { properties: ["--focus-ring-style"] },
  focusRingWidth: { properties: ["--focus-ring-width"] },
  focusVisibleRing: {
    transform: transforms.focusRing(
      "&:is(:focus-visible, [data-focus-visible])",
    ),
  },
  font: true,
  fontFamily: {
    properties: ["fontFamily"],
    token: "fonts",
    transform: transforms.token("fonts"),
  },
  fontFeatureSettings: true,
  fontKerning: true,
  fontLanguageOverride: true,
  fontOpticalSizing: true,
  fontPalette: true,
  fontSize: {
    properties: ["fontSize"],
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
    properties: ["fontWeight"],
    token: "fontWeights",
    transform: transforms.token("fontWeights"),
  },
  fontWidth: true,
  forcedColorAdjust: true,
  gap: {
    properties: ["gap"],
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
    properties: ["--grayscale"],
    transform: pipe(transforms.function("grayscale"), transforms.filter()),
  },
  grid: true,
  gridArea: true,
  gridAutoColumns: {
    properties: ["gridAutoColumns"],
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
    properties: ["gridAutoRows"],
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
    properties: ["gridTemplateColumns"],
    token: "sizes",
    transform: pipe(
      transforms.token("sizes"),
      transforms.fraction,
      transforms.px,
      transforms.grid,
    ),
  },
  gridTemplateRows: {
    properties: ["gridTemplateRows"],
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
    properties: ["height"],
    token: "sizes",
    transform: pipe(
      transforms.token("sizes"),
      transforms.fraction,
      transforms.px,
      transforms.calc("sizes"),
    ),
  },
  hueRotate: {
    properties: ["--hue-rotate"],
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
    properties: ["inlineSize"],
    token: "sizes",
    transform: pipe(
      transforms.token("sizes"),
      transforms.fraction,
      transforms.px,
      transforms.calc("sizes"),
    ),
  },
  inset: {
    properties: ["inset"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  insetBlock: {
    properties: ["insetBlock"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  insetBlockEnd: {
    properties: ["insetBlockEnd"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  insetBlockStart: {
    properties: ["insetBlockStart"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  insetInline: {
    properties: ["insetInline"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  insetInlineEnd: {
    properties: ["insetInlineEnd"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  insetInlineStart: {
    properties: ["insetInlineStart"],
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
  interactivity: true,
  interpolateSize: true,
  invert: {
    properties: ["--invert"],
    transform: pipe(transforms.function("invert"), transforms.filter()),
  },
  isolation: true,
  justifyContent: true,
  justifyItems: true,
  justifySelf: true,
  left: {
    properties: ["left"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  letterSpacing: {
    properties: ["letterSpacing"],
    token: "letterSpacings",
    transform: transforms.token("letterSpacings"),
  },
  lightingColor: {
    properties: ["lightingColor"],
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  lineBreak: true,
  lineHeight: {
    properties: ["lineHeight"],
    token: "lineHeights",
    transform: transforms.token("lineHeights"),
  },
  listStyle: true,
  listStyleImage: {
    properties: ["listStyleImage"],
    token: "gradients",
    transform: pipe(transforms.token("gradients"), transforms.gradient),
  },
  listStylePosition: true,
  listStyleType: true,
  margin: {
    properties: ["margin"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  marginBlock: {
    properties: ["marginBlock"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  marginBlockEnd: {
    properties: ["marginBlockEnd"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  marginBlockStart: {
    properties: ["marginBlockStart"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  marginBottom: {
    properties: ["marginBottom"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  marginInline: {
    properties: ["marginInline"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  marginInlineEnd: {
    properties: ["marginInlineEnd"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  marginInlineStart: {
    properties: ["marginInlineStart"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  marginLeft: {
    properties: ["marginLeft"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  marginRight: {
    properties: ["marginRight"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  marginTop: {
    properties: ["marginTop"],
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
  maskBorderWidth: {
    properties: ["maskBorderWidth"],
    transform: transforms.px,
  },
  maskClip: true,
  maskComposite: true,
  maskImage: {
    properties: ["maskImage"],
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
    properties: ["maxBlockSize"],
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
    properties: ["maxHeight"],
    token: "sizes",
    transform: pipe(
      transforms.token("sizes"),
      transforms.fraction,
      transforms.px,
      transforms.calc("sizes"),
    ),
  },
  maxInlineSize: {
    properties: ["maxInlineSize"],
    token: "sizes",
    transform: pipe(
      transforms.token("sizes"),
      transforms.fraction,
      transforms.px,
      transforms.calc("sizes"),
    ),
  },
  maxWidth: {
    properties: ["maxWidth"],
    token: "sizes",
    transform: pipe(
      transforms.token("sizes"),
      transforms.fraction,
      transforms.px,
      transforms.calc("sizes"),
    ),
  },
  minBlockSize: {
    properties: ["minBlockSize"],
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
    properties: ["minHeight"],
    token: "sizes",
    transform: pipe(
      transforms.token("sizes"),
      transforms.fraction,
      transforms.px,
      transforms.calc("sizes"),
    ),
  },
  minInlineSize: {
    properties: ["minInlineSize"],
    token: "sizes",
    transform: pipe(
      transforms.token("sizes"),
      transforms.fraction,
      transforms.px,
      transforms.calc("sizes"),
    ),
  },
  minWidth: {
    properties: ["minWidth"],
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
  outline: true,
  outlineColor: {
    properties: ["outlineColor"],
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  outlineOffset: true,
  outlineStyle: true,
  outlineWidth: { properties: ["outlineWidth"], transform: transforms.px },
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
    properties: ["padding"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  paddingBlock: {
    properties: ["paddingBlock"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  paddingBlockEnd: {
    properties: ["paddingBlockEnd"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  paddingBlockStart: {
    properties: ["paddingBlockStart"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  paddingBottom: {
    properties: ["paddingBottom"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  paddingInline: {
    properties: ["paddingInline"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  paddingInlineEnd: {
    properties: ["paddingInlineEnd"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  paddingInlineStart: {
    properties: ["paddingInlineStart"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  paddingLeft: {
    properties: ["paddingLeft"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  paddingRight: {
    properties: ["paddingRight"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  paddingTop: {
    properties: ["paddingTop"],
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
  readingOrder: true,
  resize: true,
  right: {
    properties: ["right"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  rotate: { properties: ["rotate"], transform: transforms.deg },
  rotateX: {
    properties: ["--rotate-x"],
    transform: pipe(
      transforms.deg,
      transforms.function("rotateX"),
      transforms.transform,
    ),
  },
  rotateY: {
    properties: ["--rotate-y"],
    transform: pipe(
      transforms.deg,
      transforms.function("rotateY"),
      transforms.transform,
    ),
  },
  rotateZ: {
    properties: ["--rotate-z"],
    transform: pipe(
      transforms.deg,
      transforms.function("rotateZ"),
      transforms.transform,
    ),
  },
  rowGap: {
    properties: ["rowGap"],
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
    properties: ["--saturate"],
    transform: pipe(transforms.function("saturate"), transforms.filter()),
  },
  scale: true,
  scaleX: {
    properties: ["--scale-x"],
    transform: pipe(transforms.function("scaleX"), transforms.transform),
  },
  scaleY: {
    properties: ["--scale-y"],
    transform: pipe(transforms.function("scaleY"), transforms.transform),
  },
  scaleZ: {
    properties: ["--scale-z"],
    transform: pipe(transforms.function("scaleZ"), transforms.transform),
  },
  scrollbarColor: {
    properties: ["scrollbarColor"],
    token: "colors",
    transform: pipe(transforms.token("colors"), transforms.colorMix),
  },
  scrollbarGutter: true,
  scrollbarWidth: { properties: ["scrollbarWidth"], transform: transforms.px },
  scrollBehavior: true,
  scrollInitialTarget: true,
  scrollMargin: {
    properties: ["scrollMargin"],
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
    properties: ["scrollMarginBottom"],
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
    properties: ["scrollMarginLeft"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  scrollMarginRight: {
    properties: ["scrollMarginRight"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  scrollMarginTop: {
    properties: ["scrollMarginTop"],
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
  scrollMarkerGroup: true,
  scrollPadding: {
    properties: ["scrollPadding"],
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
    properties: ["scrollPaddingBottom"],
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
    properties: ["scrollPaddingLeft"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  scrollPaddingRight: {
    properties: ["scrollPaddingRight"],
    token: "spaces",
    transform: pipe(
      transforms.token("spaces"),
      transforms.px,
      transforms.calc("spaces"),
    ),
  },
  scrollPaddingTop: {
    properties: ["scrollPaddingTop"],
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
  scrollTargetGroup: true,
  scrollTimeline: true,
  scrollTimelineAxis: true,
  scrollTimelineName: true,
  sepia: {
    properties: ["--sepia"],
    transform: pipe(transforms.function("sepia"), transforms.filter()),
  },
  shapeImageThreshold: true,
  shapeMargin: true,
  shapeOutside: true,
  shapeRendering: true,
  skewX: {
    properties: ["--skew-x"],
    transform: pipe(
      transforms.deg,
      transforms.function("skewX"),
      transforms.transform,
    ),
  },
  skewY: {
    properties: ["--skew-y"],
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
    properties: ["stroke"],
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
  strokeWidth: { properties: ["strokeWidth"], transform: transforms.px },
  tableLayout: true,
  tabSize: true,
  textAlign: true,
  textAlignLast: true,
  textAnchor: true,
  textAutospace: true,
  textBox: true,
  textBoxEdge: true,
  textBoxTrim: true,
  textCombineUpright: true,
  textDecoration: true,
  textDecorationColor: {
    properties: ["textDecorationColor"],
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
    properties: ["textEmphasisColor"],
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
    properties: ["textShadow"],
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
    properties: ["top"],
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
    properties: ["transitionDuration"],
    token: "durations",
    transform: transforms.token("durations"),
  },
  transitionProperty: { transform: transforms.transition("property") },
  transitionTimingFunction: {
    properties: ["transitionTimingFunction"],
    token: "easings",
    transform: transforms.token("easings"),
  },
  translateX: {
    properties: ["--translate-x"],
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
    properties: ["--translate-y"],
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
    properties: ["--translate-z"],
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
  viewTransitionGroup: true,
  viewTransitionName: true,
  visibility: true,
  whiteSpace: true,
  whiteSpaceCollapse: true,
  widows: true,
  width: {
    properties: ["width"],
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
    properties: ["zIndex"],
    token: "zIndices",
    transform: transforms.token("zIndices"),
  },
  zoom: true,
} as const satisfies StyleConfigs

export type ShorthandStyleProperty = keyof typeof shorthandStyles

export const shorthandStyles = {
  accent: standardStyles.accentColor,
  bg: standardStyles.background,
  bgAttachment: { properties: ["backgroundAttachment"] },
  bgBlendMode: { properties: ["backgroundBlendMode"] },
  bgClip: standardStyles.backgroundClip,
  bgColor: standardStyles.backgroundColor,
  bgGradient: standardStyles.backgroundImage,
  bgImage: standardStyles.backgroundImage,
  bgImg: standardStyles.backgroundImage,
  bgOrigin: { properties: ["backgroundOrigin"] },
  bgPosition: { properties: ["backgroundPosition"] },
  bgPositionX: { properties: ["backgroundPositionX"] },
  bgPositionY: { properties: ["backgroundPositionY"] },
  bgPosX: { properties: ["backgroundPositionX"] },
  bgPosY: { properties: ["backgroundPositionY"] },
  bgRepeat: { properties: ["backgroundRepeat"] },
  bgSize: { properties: ["backgroundSize"] },
  blendMode: { properties: ["mixBlendMode"] },
  borderBottomEndRadius: standardStyles.borderEndEndRadius,
  borderBottomStartRadius: standardStyles.borderEndStartRadius,
  borderEnd: standardStyles.borderInlineEnd,
  borderEndColor: standardStyles.borderInlineEndColor,
  borderEndRadius: standardStyles.borderInlineEndRadius,
  borderEndStyle: { properties: ["borderInlineEndStyle"] },
  borderEndWidth: standardStyles.borderInlineEndWidth,
  borderStart: standardStyles.borderInlineStart,
  borderStartColor: standardStyles.borderInlineStartColor,
  borderStartRadius: standardStyles.borderInlineStartRadius,
  borderStartStyle: { properties: ["borderInlineStartStyle"] },
  borderStartWidth: standardStyles.borderInlineStartWidth,
  borderTopEndRadius: standardStyles.borderStartEndRadius,
  borderTopStartRadius: standardStyles.borderStartStartRadius,
  caret: standardStyles.caretColor,
  flexDir: { properties: ["flexDirection"] },
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
  listStylePos: { properties: ["listStylePosition"] },
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
  overscroll: { properties: ["overscrollBehavior"] },
  overscrollX: { properties: ["overscrollBehaviorX"] },
  overscrollY: { properties: ["overscrollBehaviorY"] },
  p: standardStyles.padding,
  paddingEnd: standardStyles.paddingInlineEnd,
  paddingStart: standardStyles.paddingInlineStart,
  pb: standardStyles.paddingBottom,
  pe: standardStyles.paddingInlineEnd,
  pl: standardStyles.paddingLeft,
  pos: { properties: ["position"] },
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
  textDecor: { properties: ["textDecoration"] },
  tracking: standardStyles.letterSpacing,
  w: standardStyles.width,
  z: standardStyles.zIndex,
} as const satisfies StyleConfigs

export type PseudoStyleProperty = keyof typeof pseudoStyles

export const pseudoStyles = {
  "&::after": { properties: ["&::after"], transform: transforms.content },
  "&::before": { properties: ["&::before"], transform: transforms.content },
} as const satisfies StyleConfigs

export type StyledStyleProperty = keyof typeof styledStyles

export const styledStyles = {
  apply: { transform: transforms.style() },
  layerStyle: { transform: transforms.style("layerStyles") },
  textStyle: { transform: transforms.style("textStyles") },
  colorScheme: { transform: transforms.colorScheme },
  lineClamp: {
    properties: ["--line-clamp"],
    static: {
      display: "-webkit-box",
      overflow: "hidden",
      textOverflow: "ellipsis",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "var(--line-clamp)",
    },
  },
  truncated: { transform: transforms.truncated },
} as const satisfies StyleConfigs

export type AtRuleStyleProperty = keyof typeof atRuleStyles

export const atRuleStyles = {
  _container: { transform: transforms.container },
  _keyframes: {
    properties: ["animationName"],
    token: "keyframes",
    transform: pipe(transforms.token("keyframes"), transforms.keyframes),
  },
  _landscape: { properties: ["@media (orientation: landscape)"] },
  _media: { transform: transforms.media },
  _mediaDark: { properties: ["@media (prefers-color-scheme: dark)"] },
  _mediaLight: { properties: ["@media (prefers-color-scheme: light)"] },
  _mediaReduceMotion: {
    properties: ["@media (prefers-reduced-motion: reduce)"],
  },
  _portrait: { properties: ["@media (orientation: portrait)"] },
  _print: { properties: ["@media print"] },
  _supports: { transform: transforms.supports },
} as const satisfies StyleConfigs

export type Styles = typeof styles

export const styles = {
  ...standardStyles,
  ...shorthandStyles,
  ...pseudoStyles,
  ...styledStyles,
  ...atRuleStyles,
} as const satisfies StyleConfigs

export type StyleProperty = keyof typeof styles

export const styleProperties = Object.keys(styles) as StyleProperty[]

export type VariableLengthProperty = (typeof variableLengthProperties)[number]

export const variableLengthProperties = [
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

export const keyframeProperties = ["animationName", "_keyframes"] as const

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
   */
  apply?: StyleValueWithCondition<AnyString, "apply">
  /**
   * Apply layer styles defined in `theme.layerStyles`.
   */
  layerStyle?: StyleValueWithCondition<AnyString, "layerStyles">
  /**
   * Apply text styles defined in `theme.textStyles`.
   */
  textStyle?: StyleValueWithCondition<AnyString, "textStyles">
  /**
   * Set color scheme variables.
   */
  colorScheme?: StyleValueWithCondition<ColorScheme>
  /**
   * ### accent-color
   *
   * The <code>accent-color</code> CSS property sets a color for checkboxes, radio buttons, and other form controls.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/accent-color
   */
  accent?: StyleValueWithCondition<CSS.Property.AccentColor, "colors">
  /**
   * ### accent-color
   *
   * The <code>accent-color</code> CSS property sets a color for checkboxes, radio buttons, and other form controls.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/accent-color
   */
  accentColor?: StyleValueWithCondition<CSS.Property.AccentColor, "colors">
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
  alignContent?: StyleValueWithCondition<CSS.Property.AlignContent>
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
  alignItems?: StyleValueWithCondition<CSS.Property.AlignItems>
  /**
   * ### alignment-baseline
   *
   * The <code>alignment-baseline</code> CSS property sets which baseline of an element is aligned with the corresponding baseline of its parent.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/alignment-baseline
   */
  alignmentBaseline?: StyleValueWithCondition<CSS.Property.AlignmentBaseline>
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
  alignSelf?: StyleValueWithCondition<CSS.Property.AlignSelf>
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
  all?: StyleValueWithCondition<CSS.Globals>
  /**
   * ### anchor-name
   *
   * Anchor positioning places an element based on the position of another element. For example, you can place a tooltip next to the content it references.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/anchor-name
   */
  anchorName?: StyleValueWithCondition<AnyString>
  /**
   * ### anchor-scope
   *
   * Anchor positioning places an element based on the position of another element. For example, you can place a tooltip next to the content it references.
   *
   * @baseline `Limited available`
   *
   * @see https://drafts.csswg.org/css-anchor-position-1/#propdef-anchor-scope
   */
  anchorScope?: StyleValueWithCondition<AnyString>
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
  animation?: StyleValueWithCondition<CSS.Property.Animation, "animations">
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
  animationComposition?: StyleValueWithCondition<CSS.Property.AnimationComposition>
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
  animationDelay?: StyleValueWithCondition<CSS.Property.AnimationDelay>
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
  animationDirection?: StyleValueWithCondition<CSS.Property.AnimationDirection>
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
  animationDuration?: StyleValueWithCondition<
    CSS.Property.AnimationDuration,
    "durations"
  >
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
  animationFillMode?: StyleValueWithCondition<CSS.Property.AnimationFillMode>
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
  animationIterationCount?: StyleValueWithCondition<CSS.Property.AnimationIterationCount>
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
  animationName?: StyleValueWithCondition<
    CSS.Property.AnimationName,
    "keyframes"
  >
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
  animationPlayState?: StyleValueWithCondition<CSS.Property.AnimationPlayState>
  /**
   * ### animation-range
   *
   * The <code>animation-timeline</code>, <code>scroll-timeline</code>, and <code>view-timeline</code> CSS properties advance animations based on the user's scroll position.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-range
   */
  animationRange?: StyleValueWithCondition<CSS.Property.AnimationRange>
  /**
   * ### animation-range-end
   *
   * The <code>animation-timeline</code>, <code>scroll-timeline</code>, and <code>view-timeline</code> CSS properties advance animations based on the user's scroll position.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-range-end
   */
  animationRangeEnd?: StyleValueWithCondition<CSS.Property.AnimationRangeEnd>
  /**
   * ### animation-range-start
   *
   * The <code>animation-timeline</code>, <code>scroll-timeline</code>, and <code>view-timeline</code> CSS properties advance animations based on the user's scroll position.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-range-start
   */
  animationRangeStart?: StyleValueWithCondition<CSS.Property.AnimationRangeStart>
  /**
   * ### animation-timeline
   *
   * The <code>animation-timeline</code>, <code>scroll-timeline</code>, and <code>view-timeline</code> CSS properties advance animations based on the user's scroll position.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-timeline
   */
  animationTimeline?: StyleValueWithCondition<CSS.Property.AnimationTimeline>
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
  animationTimingFunction?: StyleValueWithCondition<
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
  appearance?: StyleValueWithCondition<CSS.Property.Appearance>
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
  aspectRatio?: StyleValueWithCondition<
    CSS.Property.AspectRatio,
    "aspectRatios"
  >
  /**
   * Sets the value of `--backdrop-blur`.
   */
  backdropBlur?: StyleValueWithCondition<AnyString, "blurs">
  /**
   * Sets the value of `--backdrop-brightness`.
   */
  backdropBrightness?: StyleValueWithCondition<AnyString>
  /**
   * Sets the value of `--backdrop-contrast`.
   */
  backdropContrast?: StyleValueWithCondition<AnyString>
  /**
   * Sets the value of `--backdrop-drop-shadow`.
   */
  backdropDropShadow?: StyleValueWithCondition<AnyString, "shadows">
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
  backdropFilter?: StyleValueWithCondition<CSS.Property.BackdropFilter>
  /**
   * Sets the value of `--backdrop-grayscale`.
   */
  backdropGrayscale?: StyleValueWithCondition<AnyString>
  /**
   * Sets the value of `--backdrop-hue-rotate`.
   */
  backdropHueRotate?: StyleValueWithCondition<AnyString>
  /**
   * Sets the value of `--backdrop-invert`.
   */
  backdropInvert?: StyleValueWithCondition<AnyString>
  /**
   * Sets the value of `--backdrop-saturate`.
   */
  backdropSaturate?: StyleValueWithCondition<AnyString>
  /**
   * Sets the value of `--backdrop-sepia`.
   */
  backdropSepia?: StyleValueWithCondition<AnyString>
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
  backfaceVisibility?: StyleValueWithCondition<
    CSS.Property.BackfaceVisibility | number,
    "sizes"
  >
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
  background?: StyleValueWithCondition<CSS.Property.Background, "colors">
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
  backgroundAttachment?: StyleValueWithCondition<CSS.Property.BackgroundAttachment>
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
  backgroundBlendMode?: StyleValueWithCondition<CSS.Property.BackgroundBlendMode>
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
  backgroundClip?: StyleValueWithCondition<CSS.Property.BackgroundClip>
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
  backgroundColor?: StyleValueWithCondition<
    CSS.Property.BackgroundColor,
    "colors"
  >
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
  backgroundImage?: StyleValueWithCondition<
    CSS.Property.BackgroundImage,
    "gradients"
  >
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
  backgroundOrigin?: StyleValueWithCondition<CSS.Property.BackgroundOrigin>
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
  backgroundPosition?: StyleValueWithCondition<CSS.Property.BackgroundPosition>
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
  backgroundPositionX?: StyleValueWithCondition<CSS.Property.BackgroundPositionX>
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
  backgroundPositionY?: StyleValueWithCondition<CSS.Property.BackgroundPositionY>
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
  backgroundRepeat?: StyleValueWithCondition<CSS.Property.BackgroundRepeat>
  /**
   * ### background-repeat-x
   *
   * The CSS `background-repeat-x` property.
   *
   * @see https://drafts.csswg.org/css-backgrounds-4/#background-repeat-longhands
   *
   * @experimental
   */
  backgroundRepeatX?: StyleValueWithCondition<AnyString>
  /**
   * ### background-repeat-y
   *
   * The CSS `background-repeat-y` property.
   *
   * @see https://drafts.csswg.org/css-backgrounds-4/#background-repeat-longhands
   *
   * @experimental
   */
  backgroundRepeatY?: StyleValueWithCondition<AnyString>
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
  backgroundSize?: StyleValueWithCondition<CSS.Property.BackgroundSize>
  /**
   * ### baseline-shift
   *
   * The <code>baseline-shift</code> CSS property sets the position of an element relative to its dominant baseline.
   *
   * @baseline `Limited available`
   *
   * @see https://drafts.csswg.org/css-inline/#baseline-shift-property
   */
  baselineShift?: StyleValueWithCondition<CSS.Property.BaselineShift>
  /**
   * ### baseline-source
   *
   * The <code>baseline-source</code> CSS property controls how inline-level boxes with multiple lines of text are aligned with the surrounding text. By default, which typographic baseline is used depends on the <code>display</code> property value.
   *
   * @baseline `Limited available`
   *
   * @see https://drafts.csswg.org/css-inline/#baseline-source
   */
  baselineSource?: StyleValueWithCondition<AnyString>
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
  bg?: StyleValueWithCondition<CSS.Property.Background, "colors">
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
  bgAttachment?: StyleValueWithCondition<CSS.Property.BackgroundAttachment>
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
  bgBlendMode?: StyleValueWithCondition<CSS.Property.BackgroundBlendMode>
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
  bgClip?: StyleValueWithCondition<CSS.Property.BackgroundClip>
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
  bgColor?: StyleValueWithCondition<CSS.Property.BackgroundColor, "colors">
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
  bgGradient?: StyleValueWithCondition<
    CSS.Property.BackgroundImage,
    "gradients"
  >
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
  bgImage?: StyleValueWithCondition<CSS.Property.BackgroundImage, "gradients">
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
  bgImg?: StyleValueWithCondition<CSS.Property.BackgroundImage, "gradients">
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
  bgOrigin?: StyleValueWithCondition<CSS.Property.BackgroundOrigin>
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
  bgPosition?: StyleValueWithCondition<CSS.Property.BackgroundPosition>
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
  bgPositionX?: StyleValueWithCondition<CSS.Property.BackgroundPositionX>
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
  bgPositionY?: StyleValueWithCondition<CSS.Property.BackgroundPositionY>
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
  bgPosX?: StyleValueWithCondition<CSS.Property.BackgroundPositionX>
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
  bgPosY?: StyleValueWithCondition<CSS.Property.BackgroundPositionY>
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
  bgRepeat?: StyleValueWithCondition<CSS.Property.BackgroundRepeat>
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
  bgSize?: StyleValueWithCondition<CSS.Property.BackgroundSize>
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
  blendMode?: StyleValueWithCondition<CSS.Property.MixBlendMode>
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
  blockSize?: StyleValueWithCondition<CSS.Property.BlockSize | number, "sizes">
  /**
   * Sets the value of `--blur`.
   */
  blur?: StyleValueWithCondition<AnyString, "blurs">
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
  border?: StyleValueWithCondition<CSS.Property.Border | number, "borders">
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
  borderBlock?: StyleValueWithCondition<
    CSS.Property.BorderBlock | number,
    "borders"
  >
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
  borderBlockColor?: StyleValueWithCondition<
    CSS.Property.BorderBlockColor,
    "colors"
  >
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
  borderBlockEnd?: StyleValueWithCondition<
    CSS.Property.BorderBlockEnd | number,
    "borders"
  >
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
  borderBlockEndColor?: StyleValueWithCondition<
    CSS.Property.BorderBlockEndColor,
    "colors"
  >
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
  borderBlockEndStyle?: StyleValueWithCondition<CSS.Property.BorderBlockEndStyle>
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
  borderBlockEndWidth?: StyleValueWithCondition<
    CSS.Property.BorderBlockEndWidth | number
  >
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
  borderBlockStart?: StyleValueWithCondition<
    CSS.Property.BorderBlockStart | number,
    "borders"
  >
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
  borderBlockStartColor?: StyleValueWithCondition<
    CSS.Property.BorderBlockStartColor,
    "colors"
  >
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
  borderBlockStartStyle?: StyleValueWithCondition<CSS.Property.BorderBlockStartStyle>
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
  borderBlockStartWidth?: StyleValueWithCondition<
    CSS.Property.BorderBlockStartWidth | number
  >
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
  borderBlockStyle?: StyleValueWithCondition<CSS.Property.BorderBlockStyle>
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
  borderBlockWidth?: StyleValueWithCondition<
    CSS.Property.BorderBlockWidth | number
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
   */
  borderBottom?: StyleValueWithCondition<
    CSS.Property.BorderBottom | number,
    "borders"
  >
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
  borderBottomColor?: StyleValueWithCondition<
    CSS.Property.BorderBottomColor,
    "colors"
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
  borderBottomEndRadius?: StyleValueWithCondition<
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
  borderBottomLeftRadius?: StyleValueWithCondition<
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
  borderBottomRadius?: StyleValueWithCondition<
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
  borderBottomRightRadius?: StyleValueWithCondition<
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
  borderBottomStartRadius?: StyleValueWithCondition<
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
  borderBottomStyle?: StyleValueWithCondition<CSS.Property.BorderBottomStyle>
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
  borderBottomWidth?: StyleValueWithCondition<
    CSS.Property.BorderBottomWidth | number
  >
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
  borderCollapse?: StyleValueWithCondition<CSS.Property.BorderCollapse>
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
  borderColor?: StyleValueWithCondition<CSS.Property.BorderColor, "colors">
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
  borderEnd?: StyleValueWithCondition<
    CSS.Property.BorderInlineEnd | number,
    "borders"
  >
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
  borderEndColor?: StyleValueWithCondition<
    CSS.Property.BorderInlineEndColor,
    "colors"
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
  borderEndEndRadius?: StyleValueWithCondition<
    CSS.Property.BorderEndEndRadius | number,
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
  borderEndRadius?: StyleValueWithCondition<
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
  borderEndStartRadius?: StyleValueWithCondition<
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
  borderEndStyle?: StyleValueWithCondition<CSS.Property.BorderInlineEndStyle>
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
  borderEndWidth?: StyleValueWithCondition<
    CSS.Property.BorderInlineEndWidth | number
  >
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
  borderImage?: StyleValueWithCondition<
    CSS.Property.BorderImage | number,
    "borders"
  >
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
  borderImageOutset?: StyleValueWithCondition<CSS.Property.BorderImageOutset>
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
  borderImageRepeat?: StyleValueWithCondition<CSS.Property.BorderImageRepeat>
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
  borderImageSlice?: StyleValueWithCondition<CSS.Property.BorderImageSlice>
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
  borderImageSource?: StyleValueWithCondition<
    CSS.Property.BorderImageSource,
    "gradients"
  >
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
  borderImageWidth?: StyleValueWithCondition<
    CSS.Property.BorderImageWidth | number
  >
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
  borderInline?: StyleValueWithCondition<
    CSS.Property.BorderInline | number,
    "borders"
  >
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
  borderInlineColor?: StyleValueWithCondition<
    CSS.Property.BorderInlineColor,
    "colors"
  >
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
  borderInlineEnd?: StyleValueWithCondition<
    CSS.Property.BorderInlineEnd | number,
    "borders"
  >
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
  borderInlineEndColor?: StyleValueWithCondition<
    CSS.Property.BorderInlineEndColor,
    "colors"
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
  borderInlineEndRadius?: StyleValueWithCondition<
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
  borderInlineEndStyle?: StyleValueWithCondition<CSS.Property.BorderInlineEndStyle>
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
  borderInlineEndWidth?: StyleValueWithCondition<
    CSS.Property.BorderInlineEndWidth | number
  >
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
  borderInlineStart?: StyleValueWithCondition<
    CSS.Property.BorderInlineStart | number,
    "borders"
  >
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
  borderInlineStartColor?: StyleValueWithCondition<
    CSS.Property.BorderInlineStartColor,
    "colors"
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
  borderInlineStartRadius?: StyleValueWithCondition<
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
  borderInlineStartStyle?: StyleValueWithCondition<CSS.Property.BorderInlineStartStyle>
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
  borderInlineStartWidth?: StyleValueWithCondition<
    CSS.Property.BorderInlineStartWidth | number
  >
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
  borderInlineStyle?: StyleValueWithCondition<CSS.Property.BorderInlineStyle>
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
  borderInlineWidth?: StyleValueWithCondition<
    CSS.Property.BorderInlineWidth | number
  >
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
  borderLeft?: StyleValueWithCondition<
    CSS.Property.BorderLeft | number,
    "borders"
  >
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
  borderLeftColor?: StyleValueWithCondition<
    CSS.Property.BorderLeftColor,
    "colors"
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
  borderLeftRadius?: StyleValueWithCondition<
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
  borderLeftStyle?: StyleValueWithCondition<CSS.Property.BorderLeftStyle>
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
  borderLeftWidth?: StyleValueWithCondition<
    CSS.Property.BorderLeftWidth | number
  >
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
  borderRadius?: StyleValueWithCondition<
    CSS.Property.BorderRadius | number,
    "radii"
  >
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
  borderRight?: StyleValueWithCondition<
    CSS.Property.BorderRight | number,
    "borders"
  >
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
  borderRightColor?: StyleValueWithCondition<
    CSS.Property.BorderRightColor,
    "colors"
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
  borderRightRadius?: StyleValueWithCondition<
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
  borderRightStyle?: StyleValueWithCondition<CSS.Property.BorderRightStyle>
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
  borderRightWidth?: StyleValueWithCondition<
    CSS.Property.BorderRightWidth | number
  >
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
  borderSpacing?: StyleValueWithCondition<CSS.Property.BorderSpacing>
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
  borderStart?: StyleValueWithCondition<
    CSS.Property.BorderInlineStart | number,
    "borders"
  >
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
  borderStartColor?: StyleValueWithCondition<
    CSS.Property.BorderInlineStartColor,
    "colors"
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
  borderStartEndRadius?: StyleValueWithCondition<
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
  borderStartRadius?: StyleValueWithCondition<
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
  borderStartStartRadius?: StyleValueWithCondition<
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
  borderStartStyle?: StyleValueWithCondition<CSS.Property.BorderInlineStartStyle>
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
  borderStartWidth?: StyleValueWithCondition<
    CSS.Property.BorderInlineStartWidth | number
  >
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
  borderStyle?: StyleValueWithCondition<CSS.Property.BorderStyle>
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
  borderTop?: StyleValueWithCondition<
    CSS.Property.BorderTop | number,
    "borders"
  >
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
  borderTopColor?: StyleValueWithCondition<
    CSS.Property.BorderTopColor,
    "colors"
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
  borderTopEndRadius?: StyleValueWithCondition<
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
  borderTopLeftRadius?: StyleValueWithCondition<
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
  borderTopRadius?: StyleValueWithCondition<
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
  borderTopRightRadius?: StyleValueWithCondition<
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
  borderTopStartRadius?: StyleValueWithCondition<
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
  borderTopStyle?: StyleValueWithCondition<CSS.Property.BorderTopStyle>
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
  borderTopWidth?: StyleValueWithCondition<CSS.Property.BorderTopWidth | number>
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
  borderWidth?: StyleValueWithCondition<CSS.Property.BorderWidth | number>
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
  borderX?: StyleValueWithCondition<
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
  borderY?: StyleValueWithCondition<
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
  bottom?: StyleValueWithCondition<CSS.Property.Bottom | number, "spaces">
  /**
   * ### box-align
   *
   * The CSS `box-align` property.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-align
   *
   * @deprecated
   */
  boxAlign?: StyleValueWithCondition<CSS.Property.BoxAlign>
  /**
   * ### box-decoration-break
   *
   * The <code>box-decoration-break</code> CSS property sets whether box decorations, such as borders or backgrounds, of an element divided across a page, column, or region wraps each fragment or splits across the break.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-decoration-break
   */
  boxDecorationBreak?: StyleValueWithCondition<CSS.Property.BoxDecorationBreak>
  /**
   * ### box-direction
   *
   * The CSS `box-direction` property.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-direction
   *
   * @deprecated
   */
  boxDirection?: StyleValueWithCondition<CSS.Property.BoxDirection>
  /**
   * ### box-flex
   *
   * The CSS `box-flex` property.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-flex
   *
   * @deprecated
   */
  boxFlex?: StyleValueWithCondition<CSS.Property.BoxFlex>
  /**
   * ### box-flex-group
   *
   * The CSS `box-flex-group` property.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-flex-group
   *
   * @deprecated
   */
  boxFlexGroup?: StyleValueWithCondition<CSS.Property.BoxFlexGroup>
  /**
   * ### box-lines
   *
   * The CSS `box-lines` property.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-lines
   *
   * @deprecated
   */
  boxLines?: StyleValueWithCondition<CSS.Property.BoxLines>
  /**
   * ### box-ordinal-group
   *
   * The CSS `box-ordinal-group` property.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-ordinal-group
   *
   * @deprecated
   */
  boxOrdinalGroup?: StyleValueWithCondition<CSS.Property.BoxOrdinalGroup>
  /**
   * ### box-orient
   *
   * The CSS `box-orient` property.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-orient
   *
   * @deprecated
   */
  boxOrient?: StyleValueWithCondition<CSS.Property.BoxOrient>
  /**
   * ### box-pack
   *
   * The CSS `box-pack` property.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-pack
   *
   * @deprecated
   */
  boxPack?: StyleValueWithCondition<CSS.Property.BoxPack>
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
  boxShadow?: StyleValueWithCondition<CSS.Property.BoxShadow, "shadows">
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
  boxSize?: StyleValueWithCondition<
    CSS.Property.Height | CSS.Property.Width | number,
    "sizes"
  >
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
  boxSizing?: StyleValueWithCondition<CSS.Property.BoxSizing>
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
  breakAfter?: StyleValueWithCondition<CSS.Property.BreakAfter>
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
  breakBefore?: StyleValueWithCondition<CSS.Property.BreakBefore>
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
  breakInside?: StyleValueWithCondition<CSS.Property.BreakInside>
  /**
   * Sets the value of `--brightness`.
   */
  brightness?: StyleValueWithCondition<AnyString>
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
  captionSide?: StyleValueWithCondition<CSS.Property.CaptionSide>
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
  caret?: StyleValueWithCondition<CSS.Property.CaretColor, "colors">
  /**
   * ### caret-animation
   *
   * The CSS `caret-animation` property.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/caret-animation
   *
   * @experimental
   */
  caretAnimation?: StyleValueWithCondition<AnyString>
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
  caretColor?: StyleValueWithCondition<CSS.Property.CaretColor, "colors">
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
  clear?: StyleValueWithCondition<CSS.Property.Clear>
  /**
   * ### clip
   *
   * The <code>clip</code> CSS property sets the visible area of an absolutely positioned element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/clip
   *
   * @deprecated
   */
  clip?: StyleValueWithCondition<CSS.Property.Clip>
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
  clipPath?: StyleValueWithCondition<CSS.Property.ClipPath>
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
  clipRule?: StyleValueWithCondition<CSS.Property.ClipRule>
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
  color?: StyleValueWithCondition<CSS.Property.Color, "colors">
  /**
   * ### color-adjust
   *
   * The <code>color-adjust</code> shorthand CSS property allows multiple performance related color adjustments to be set at once. Setting the <code>print-color-adjust</code> CSS property directly is preferred, as it is the only such adjustment so far defined.
   *
   * @see https://drafts.csswg.org/css-color-adjust-1/#color-adjust
   *
   * @deprecated
   */
  colorAdjust?: StyleValueWithCondition<CSS.Property.PrintColorAdjust>
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
  colorInterpolation?: StyleValueWithCondition<CSS.Property.ColorInterpolation>
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
  colorInterpolationFilters?: StyleValueWithCondition<AnyString>
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
  columnCount?: StyleValueWithCondition<CSS.Property.ColumnCount>
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
  columnFill?: StyleValueWithCondition<CSS.Property.ColumnFill>
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
  columnGap?: StyleValueWithCondition<CSS.Property.ColumnGap | number, "spaces">
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
  columnRule?: StyleValueWithCondition<CSS.Property.ColumnRule | number>
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
  columnRuleColor?: StyleValueWithCondition<
    CSS.Property.ColumnRuleColor,
    "colors"
  >
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
  columnRuleStyle?: StyleValueWithCondition<CSS.Property.ColumnRuleStyle>
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
  columnRuleWidth?: StyleValueWithCondition<
    CSS.Property.ColumnRuleWidth | number
  >
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
  columns?: StyleValueWithCondition<CSS.Property.Columns>
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
  columnSpan?: StyleValueWithCondition<CSS.Property.ColumnSpan>
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
  columnWidth?: StyleValueWithCondition<
    CSS.Property.ColumnWidth | number,
    "sizes"
  >
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
  contain?: StyleValueWithCondition<CSS.Property.Contain>
  /**
   * ### container
   *
   * Container size queries with the <code>@container</code> at-rule apply styles to an element based on the dimensions of its container.
   *
   * @baseline `Widely available`
   * @widely_available_date 2025-08-14
   * @newly_available_date 2023-02-14
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/container
   */
  container?: StyleValueWithCondition<CSS.Property.Container>
  /**
   * ### container-name
   *
   * Container size queries with the <code>@container</code> at-rule apply styles to an element based on the dimensions of its container.
   *
   * @baseline `Widely available`
   * @widely_available_date 2025-08-14
   * @newly_available_date 2023-02-14
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/container-name
   */
  containerName?: StyleValueWithCondition<CSS.Property.ContainerName>
  /**
   * ### container-type
   *
   * Container size queries with the <code>@container</code> at-rule apply styles to an element based on the dimensions of its container.
   *
   * @baseline `Widely available`
   * @widely_available_date 2025-08-14
   * @newly_available_date 2023-02-14
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/container-type
   */
  containerType?: StyleValueWithCondition<CSS.Property.ContainerType>
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
  containIntrinsicBlockSize?: StyleValueWithCondition<CSS.Property.ContainIntrinsicBlockSize>
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
  containIntrinsicHeight?: StyleValueWithCondition<CSS.Property.ContainIntrinsicHeight>
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
  containIntrinsicInlineSize?: StyleValueWithCondition<CSS.Property.ContainIntrinsicInlineSize>
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
  containIntrinsicSize?: StyleValueWithCondition<CSS.Property.ContainIntrinsicSize>
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
  containIntrinsicWidth?: StyleValueWithCondition<
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
  content?: StyleValueWithCondition<CSS.Property.Content>
  /**
   * ### content-visibility
   *
   * The <code>content-visibility</code> CSS property delays rendering an element, including layout and painting, until it is needed.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/content-visibility
   */
  contentVisibility?: StyleValueWithCondition<CSS.Property.ContentVisibility>
  /**
   * ### corner-block-end-shape
   *
   * The CSS `corner-block-end-shape` property.
   *
   * @see https://drafts.csswg.org/css-borders/#propdef-corner-block-end-shape
   *
   * @experimental
   */
  cornerBlockEndShape?: StyleValueWithCondition<AnyString>
  /**
   * ### corner-block-start-shape
   *
   * The CSS `corner-block-start-shape` property.
   *
   * @see https://drafts.csswg.org/css-borders/#propdef-corner-block-start-shape
   *
   * @experimental
   */
  cornerBlockStartShape?: StyleValueWithCondition<AnyString>
  /**
   * ### corner-bottom-left-shape
   *
   * The CSS `corner-bottom-left-shape` property.
   *
   * @see https://drafts.csswg.org/css-borders/#propdef-corner-bottom-left-shape
   *
   * @experimental
   */
  cornerBottomLeftShape?: StyleValueWithCondition<AnyString>
  /**
   * ### corner-bottom-right-shape
   *
   * The CSS `corner-bottom-right-shape` property.
   *
   * @see https://drafts.csswg.org/css-borders/#propdef-corner-bottom-right-shape
   *
   * @experimental
   */
  cornerBottomRightShape?: StyleValueWithCondition<AnyString>
  /**
   * ### corner-bottom-shape
   *
   * The CSS `corner-bottom-shape` property.
   *
   * @see https://drafts.csswg.org/css-borders/#propdef-corner-bottom-shape
   *
   * @experimental
   */
  cornerBottomShape?: StyleValueWithCondition<AnyString>
  /**
   * ### corner-end-end-shape
   *
   * The CSS `corner-end-end-shape` property.
   *
   * @see https://drafts.csswg.org/css-borders/#propdef-corner-end-end-shape
   *
   * @experimental
   */
  cornerEndEndShape?: StyleValueWithCondition<AnyString>
  /**
   * ### corner-end-start-shape
   *
   * The CSS `corner-end-start-shape` property.
   *
   * @see https://drafts.csswg.org/css-borders/#propdef-corner-end-start-shape
   *
   * @experimental
   */
  cornerEndStartShape?: StyleValueWithCondition<AnyString>
  /**
   * ### corner-inline-end-shape
   *
   * The CSS `corner-inline-end-shape` property.
   *
   * @see https://drafts.csswg.org/css-borders/#propdef-corner-inline-end-shape
   *
   * @experimental
   */
  cornerInlineEndShape?: StyleValueWithCondition<AnyString>
  /**
   * ### corner-inline-start-shape
   *
   * The CSS `corner-inline-start-shape` property.
   *
   * @see https://drafts.csswg.org/css-borders/#propdef-corner-inline-start-shape
   *
   * @experimental
   */
  cornerInlineStartShape?: StyleValueWithCondition<AnyString>
  /**
   * ### corner-left-shape
   *
   * The CSS `corner-left-shape` property.
   *
   * @see https://drafts.csswg.org/css-borders/#propdef-corner-left-shape
   *
   * @experimental
   */
  cornerLeftShape?: StyleValueWithCondition<AnyString>
  /**
   * ### corner-right-shape
   *
   * The CSS `corner-right-shape` property.
   *
   * @see https://drafts.csswg.org/css-borders/#propdef-corner-right-shape
   *
   * @experimental
   */
  cornerRightShape?: StyleValueWithCondition<AnyString>
  /**
   * ### corner-shape
   *
   * The CSS `corner-shape` property.
   *
   * @see https://drafts.csswg.org/css-borders/#propdef-corner-shape
   *
   * @experimental
   */
  cornerShape?: StyleValueWithCondition<AnyString>
  /**
   * ### corner-start-end-shape
   *
   * The CSS `corner-start-end-shape` property.
   *
   * @see https://drafts.csswg.org/css-borders/#propdef-corner-start-end-shape
   *
   * @experimental
   */
  cornerStartEndShape?: StyleValueWithCondition<AnyString>
  /**
   * ### corner-start-start-shape
   *
   * The CSS `corner-start-start-shape` property.
   *
   * @see https://drafts.csswg.org/css-borders/#propdef-corner-start-start-shape
   *
   * @experimental
   */
  cornerStartStartShape?: StyleValueWithCondition<AnyString>
  /**
   * ### corner-top-left-shape
   *
   * The CSS `corner-top-left-shape` property.
   *
   * @see https://drafts.csswg.org/css-borders/#propdef-corner-top-left-shape
   *
   * @experimental
   */
  cornerTopLeftShape?: StyleValueWithCondition<AnyString>
  /**
   * ### corner-top-right-shape
   *
   * The CSS `corner-top-right-shape` property.
   *
   * @see https://drafts.csswg.org/css-borders/#propdef-corner-top-right-shape
   *
   * @experimental
   */
  cornerTopRightShape?: StyleValueWithCondition<AnyString>
  /**
   * ### corner-top-shape
   *
   * The CSS `corner-top-shape` property.
   *
   * @see https://drafts.csswg.org/css-borders/#propdef-corner-top-shape
   *
   * @experimental
   */
  cornerTopShape?: StyleValueWithCondition<AnyString>
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
  counterIncrement?: StyleValueWithCondition<CSS.Property.CounterIncrement>
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
  counterReset?: StyleValueWithCondition<CSS.Property.CounterReset>
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
  counterSet?: StyleValueWithCondition<CSS.Property.CounterSet>
  /**
   * ### cursor
   *
   * The <code>cursor</code> CSS property styles the pointer, allowing you to provide hints to the user on how to interact with the hovered element.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/cursor
   */
  cursor?: StyleValueWithCondition<CSS.Property.Cursor>
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
  cx?: StyleValueWithCondition<AnyString>
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
  cy?: StyleValueWithCondition<AnyString>
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
  d?: StyleValueWithCondition<AnyString>
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
  direction?: StyleValueWithCondition<CSS.Property.Direction>
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
  display?: StyleValueWithCondition<CSS.Property.Display>
  /**
   * ### dominant-baseline
   *
   * The <code>dominant-baseline</code> CSS property sets the specific baseline used to align an elements's text and inline-level contents.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-07-15
   * @newly_available_date 2020-01-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/dominant-baseline
   */
  dominantBaseline?: StyleValueWithCondition<CSS.Property.DominantBaseline>
  /**
   * ### dynamic-range-limit
   *
   * The CSS `dynamic-range-limit` property.
   *
   * @see https://drafts.csswg.org/css-color-hdr/#the-dynamic-range-limit-property
   */
  dynamicRangeLimit?: StyleValueWithCondition<AnyString>
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
  emptyCells?: StyleValueWithCondition<CSS.Property.EmptyCells>
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
  fieldSizing?: StyleValueWithCondition<AnyString>
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
  fill?: StyleValueWithCondition<CSS.Property.Fill, "colors">
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
  fillOpacity?: StyleValueWithCondition<CSS.Property.FillOpacity>
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
  fillRule?: StyleValueWithCondition<CSS.Property.FillRule>
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
  filter?: StyleValueWithCondition<CSS.Property.Filter>
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
  flex?: StyleValueWithCondition<CSS.Property.Flex>
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
  flexBasis?: StyleValueWithCondition<CSS.Property.FlexBasis | number, "sizes">
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
  flexDir?: StyleValueWithCondition<CSS.Property.FlexDirection>
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
  flexDirection?: StyleValueWithCondition<CSS.Property.FlexDirection>
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
  flexFlow?: StyleValueWithCondition<CSS.Property.FlexFlow>
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
  flexGrow?: StyleValueWithCondition<CSS.Property.FlexGrow>
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
  flexShrink?: StyleValueWithCondition<CSS.Property.FlexShrink>
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
  flexWrap?: StyleValueWithCondition<CSS.Property.FlexWrap>
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
  float?: StyleValueWithCondition<CSS.Property.Float>
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
  floodColor?: StyleValueWithCondition<CSS.Property.FloodColor, "colors">
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
  floodOpacity?: StyleValueWithCondition<CSS.Property.FloodOpacity>
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
  font?: StyleValueWithCondition<CSS.Property.Font>
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
  fontFamily?: StyleValueWithCondition<CSS.Property.FontFamily, "fonts">
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
  fontFeatureSettings?: StyleValueWithCondition<CSS.Property.FontFeatureSettings>
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
  fontKerning?: StyleValueWithCondition<CSS.Property.FontKerning>
  /**
   * ### font-language-override
   *
   * The <code>font-language-override</code> CSS property sets which language-specific glyphs are displayed.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-language-override
   */
  fontLanguageOverride?: StyleValueWithCondition<CSS.Property.FontLanguageOverride>
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
  fontOpticalSizing?: StyleValueWithCondition<CSS.Property.FontOpticalSizing>
  /**
   * ### font-palette
   *
   * The <code>font-palette</code> CSS property selects a color palette from the font, optionally overriding individual colors in the <code>@font-palette-values</code> at-rule.
   *
   * @baseline `Widely available`
   * @widely_available_date 2025-05-15
   * @newly_available_date 2022-11-15
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-palette
   */
  fontPalette?: StyleValueWithCondition<CSS.Property.FontPalette>
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
  fontSize?: StyleValueWithCondition<
    CSS.Property.FontSize | number,
    "fontSizes"
  >
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
  fontSizeAdjust?: StyleValueWithCondition<CSS.Property.FontSizeAdjust>
  /**
   * ### font-smooth
   *
   * The CSS `font-smooth` property.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-smooth
   */
  fontSmooth?: StyleValueWithCondition<CSS.Property.FontSmooth>
  /**
   * ### font-stretch
   *
   * The <code>font-stretch</code> CSS property selects a font face from a font family based on width, either by a keyword such as <code>condensed</code> or a percentage.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-stretch
   *
   * @deprecated
   */
  fontStretch?: StyleValueWithCondition<CSS.Property.FontStretch>
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
  fontStyle?: StyleValueWithCondition<CSS.Property.FontStyle>
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
  fontSynthesis?: StyleValueWithCondition<CSS.Property.FontSynthesis>
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
  fontSynthesisPosition?: StyleValueWithCondition<CSS.Property.FontSynthesisPosition>
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
  fontSynthesisSmallCaps?: StyleValueWithCondition<CSS.Property.FontSynthesisSmallCaps>
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
  fontSynthesisStyle?: StyleValueWithCondition<CSS.Property.FontSynthesisStyle>
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
  fontSynthesisWeight?: StyleValueWithCondition<CSS.Property.FontSynthesisWeight>
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
  fontVariant?: StyleValueWithCondition<CSS.Property.FontVariant>
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
  fontVariantAlternates?: StyleValueWithCondition<CSS.Property.FontVariantAlternates>
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
  fontVariantCaps?: StyleValueWithCondition<CSS.Property.FontVariantCaps>
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
  fontVariantEastAsian?: StyleValueWithCondition<CSS.Property.FontVariantEastAsian>
  /**
   * ### font-variant-emoji
   *
   * The <code>font-variant-emoji</code> CSS property sets the default presentation for emoji characters.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-emoji
   */
  fontVariantEmoji?: StyleValueWithCondition<CSS.Property.FontVariantEmoji>
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
  fontVariantLigatures?: StyleValueWithCondition<CSS.Property.FontVariantLigatures>
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
  fontVariantNumeric?: StyleValueWithCondition<CSS.Property.FontVariantNumeric>
  /**
   * ### font-variant-position
   *
   * The <code>font-variant-position</code> CSS property sets whether to use alternate glyphs for subscript and superscript text.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-position
   */
  fontVariantPosition?: StyleValueWithCondition<CSS.Property.FontVariantPosition>
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
  fontVariationSettings?: StyleValueWithCondition<CSS.Property.FontVariationSettings>
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
  fontWeight?: StyleValueWithCondition<CSS.Property.FontWeight, "fontWeights">
  /**
   * ### font-width
   *
   * The <code>font-width</code> CSS property selects a font face from a font family based on width, either by a keyword such as <code>condensed</code> or a percentage.
   *
   * @baseline `Limited available`
   *
   * @see https://drafts.csswg.org/css-fonts/#propdef-font-width
   *
   * @experimental
   */
  fontWidth?: StyleValueWithCondition<AnyString>
  /**
   * ### forced-color-adjust
   *
   * The <code>forced-colors</code> CSS @media rule detects when a user has chosen to use a forced colors mode, also known as high-contrast mode, and the <code>forced-color-adjust</code> CSS property sets whether forced colors apply to an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2025-03-12
   * @newly_available_date 2022-09-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/forced-color-adjust
   */
  forcedColorAdjust?: StyleValueWithCondition<CSS.Property.ForcedColorAdjust>
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
  g?: StyleValueWithCondition<CSS.Property.Gap | number, "spaces">
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
  gap?: StyleValueWithCondition<CSS.Property.Gap | number, "spaces">
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
  gapX?: StyleValueWithCondition<CSS.Property.ColumnGap | number, "spaces">
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
  gapY?: StyleValueWithCondition<CSS.Property.RowGap | number, "spaces">
  /**
   * ### glyph-orientation-horizontal
   *
   * The SVG 1.1 image format has several components that were excluded from SVG 2, such as fonts, alternate glyphs, and the <code>xlink</code> namespace.
   *
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Attribute/glyph-orientation-horizontal
   *
   * @deprecated
   */
  glyphOrientationHorizontal?: StyleValueWithCondition<AnyString>
  /**
   * ### glyph-orientation-vertical
   *
   * The <code>glyph-orientation-vertical</code> CSS property sets the orientation of glyphs in text rendered in a vertical writing mode.
   *
   * @see https://drafts.csswg.org/css-writing-modes-4/#glyph-orientation
   *
   * @deprecated
   */
  glyphOrientationVertical?: StyleValueWithCondition<CSS.Property.GlyphOrientationVertical>
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
  grid?: StyleValueWithCondition<CSS.Property.Grid>
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
  gridArea?: StyleValueWithCondition<CSS.Property.GridArea>
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
  gridAutoColumns?: StyleValueWithCondition<
    CSS.Property.GridAutoColumns | number,
    "sizes"
  >
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
  gridAutoFlow?: StyleValueWithCondition<CSS.Property.GridAutoFlow>
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
  gridAutoRows?: StyleValueWithCondition<
    CSS.Property.GridAutoRows | number,
    "sizes"
  >
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
  gridColumn?: StyleValueWithCondition<CSS.Property.GridColumn>
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
  gridColumnEnd?: StyleValueWithCondition<CSS.Property.GridColumnEnd>
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
  gridColumnStart?: StyleValueWithCondition<CSS.Property.GridColumnStart>
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
  gridRow?: StyleValueWithCondition<CSS.Property.GridRow>
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
  gridRowEnd?: StyleValueWithCondition<CSS.Property.GridRowEnd>
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
  gridRowStart?: StyleValueWithCondition<CSS.Property.GridRowStart>
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
  gridTemplate?: StyleValueWithCondition<CSS.Property.GridTemplate>
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
  gridTemplateAreas?: StyleValueWithCondition<CSS.Property.GridTemplateAreas>
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
  gridTemplateColumns?: StyleValueWithCondition<
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
  gridTemplateRows?: StyleValueWithCondition<
    CSS.Property.GridTemplateRows | number,
    "sizes"
  >
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
  gx?: StyleValueWithCondition<CSS.Property.ColumnGap | number, "spaces">
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
  gy?: StyleValueWithCondition<CSS.Property.RowGap | number, "spaces">
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
  h?: StyleValueWithCondition<CSS.Property.Height | number, "sizes">
  /**
   * ### hanging-punctuation
   *
   * The <code>hanging-punctuation</code> CSS property puts punctuation characters outside of the box to align the text with the rest of the document.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/hanging-punctuation
   */
  hangingPunctuation?: StyleValueWithCondition<CSS.Property.HangingPunctuation>
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
  height?: StyleValueWithCondition<CSS.Property.Height | number, "sizes">
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
  hyphenateCharacter?: StyleValueWithCondition<CSS.Property.HyphenateCharacter>
  /**
   * ### hyphenate-limit-chars
   *
   * The <code>hyphenate-limit-chars</code> CSS property sets the number of characters in a word before it is hyphenated and the minimum number of characters on either side of the hyphen.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/hyphenate-limit-chars
   */
  hyphenateLimitChars?: StyleValueWithCondition<CSS.Property.HyphenateLimitChars>
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
  hyphens?: StyleValueWithCondition<CSS.Property.Hyphens>
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
  imageOrientation?: StyleValueWithCondition<CSS.Property.ImageOrientation>
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
  imageRendering?: StyleValueWithCondition<CSS.Property.ImageRendering>
  /**
   * ### ime-mode
   *
   * The <code>ime-mode</code> CSS property sets the state of the input method editor for text fields.
   *
   * @see https://drafts.csswg.org/css-ui/#input-method-editor
   *
   * @deprecated
   */
  imeMode?: StyleValueWithCondition<CSS.Property.ImeMode>
  /**
   * ### initial-letter
   *
   * The <code>initial-letter</code> CSS property sets the number of lines the first letter of an element occupies. You can use the property to make a raised capital or drop cap.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/initial-letter
   */
  initialLetter?: StyleValueWithCondition<CSS.Property.InitialLetter>
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
  inlineSize?: StyleValueWithCondition<
    CSS.Property.InlineSize | number,
    "sizes"
  >
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
  inset?: StyleValueWithCondition<CSS.Property.Inset | number, "spaces">
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
  insetBlock?: StyleValueWithCondition<
    CSS.Property.InsetBlock | number,
    "spaces"
  >
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
  insetBlockEnd?: StyleValueWithCondition<
    CSS.Property.InsetBlockEnd | number,
    "spaces"
  >
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
  insetBlockStart?: StyleValueWithCondition<
    CSS.Property.InsetBlockStart | number,
    "spaces"
  >
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
  insetEnd?: StyleValueWithCondition<
    CSS.Property.InsetInlineEnd | number,
    "spaces"
  >
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
  insetInline?: StyleValueWithCondition<
    CSS.Property.InsetInline | number,
    "spaces"
  >
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
  insetInlineEnd?: StyleValueWithCondition<
    CSS.Property.InsetInlineEnd | number,
    "spaces"
  >
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
  insetInlineStart?: StyleValueWithCondition<
    CSS.Property.InsetInlineStart | number,
    "spaces"
  >
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
  insetStart?: StyleValueWithCondition<
    CSS.Property.InsetInlineStart | number,
    "spaces"
  >
  /**
   * ### interactivity
   *
   * The <code>interactivity: inert</code> CSS declaration makes an element and its descendants inert, like when using the <code>inert</code> HTML attribute. Inert elements can't be focused or clicked, their text can't be selected or found using the browser's find-in-page feature.
   *
   * @baseline `Limited available`
   *
   * @see https://drafts.csswg.org/css-ui-4/#propdef-interactivity
   *
   * @experimental
   */
  interactivity?: StyleValueWithCondition<AnyString>
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
  interpolateSize?: StyleValueWithCondition<AnyString>
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
  isolation?: StyleValueWithCondition<CSS.Property.Isolation>
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
  justifyContent?: StyleValueWithCondition<CSS.Property.JustifyContent>
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
  justifyItems?: StyleValueWithCondition<CSS.Property.JustifyItems>
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
  justifySelf?: StyleValueWithCondition<CSS.Property.JustifySelf>
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
  leading?: StyleValueWithCondition<CSS.Property.LineHeight, "lineHeights">
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
  left?: StyleValueWithCondition<CSS.Property.Left | number, "spaces">
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
  letterSpacing?: StyleValueWithCondition<
    CSS.Property.LetterSpacing,
    "letterSpacings"
  >
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
  lightingColor?: StyleValueWithCondition<CSS.Property.LightingColor, "colors">
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
  lineBreak?: StyleValueWithCondition<CSS.Property.LineBreak>
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
  lineHeight?: StyleValueWithCondition<CSS.Property.LineHeight, "lineHeights">
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
  listStyle?: StyleValueWithCondition<CSS.Property.ListStyle>
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
  listStyleImage?: StyleValueWithCondition<
    CSS.Property.ListStyleImage,
    "gradients"
  >
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
  listStyleImg?: StyleValueWithCondition<
    CSS.Property.ListStyleImage,
    "gradients"
  >
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
  listStylePos?: StyleValueWithCondition<CSS.Property.ListStylePosition>
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
  listStylePosition?: StyleValueWithCondition<CSS.Property.ListStylePosition>
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
  listStyleType?: StyleValueWithCondition<CSS.Property.ListStyleType>
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
  m?: StyleValueWithCondition<CSS.Property.Margin | number, "spaces">
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
  margin?: StyleValueWithCondition<CSS.Property.Margin | number, "spaces">
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
  marginBlock?: StyleValueWithCondition<
    CSS.Property.MarginBlock | number,
    "spaces"
  >
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
  marginBlockEnd?: StyleValueWithCondition<
    CSS.Property.MarginBlockEnd | number,
    "spaces"
  >
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
  marginBlockStart?: StyleValueWithCondition<
    CSS.Property.MarginBlockStart | number,
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
   */
  marginBottom?: StyleValueWithCondition<
    CSS.Property.MarginBottom | number,
    "spaces"
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
   */
  marginEnd?: StyleValueWithCondition<
    CSS.Property.MarginInlineEnd | number,
    "spaces"
  >
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
  marginInline?: StyleValueWithCondition<
    CSS.Property.MarginInline | number,
    "spaces"
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
   */
  marginInlineEnd?: StyleValueWithCondition<
    CSS.Property.MarginInlineEnd | number,
    "spaces"
  >
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
  marginInlineStart?: StyleValueWithCondition<
    CSS.Property.MarginInlineStart | number,
    "spaces"
  >
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
  marginLeft?: StyleValueWithCondition<
    CSS.Property.MarginLeft | number,
    "spaces"
  >
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
  marginRight?: StyleValueWithCondition<
    CSS.Property.MarginRight | number,
    "spaces"
  >
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
  marginStart?: StyleValueWithCondition<
    CSS.Property.MarginInlineStart | number,
    "spaces"
  >
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
  marginTop?: StyleValueWithCondition<CSS.Property.MarginTop | number, "spaces">
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
  marginTrim?: StyleValueWithCondition<CSS.Property.MarginTrim>
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
  marker?: StyleValueWithCondition<CSS.Property.Marker>
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
  markerEnd?: StyleValueWithCondition<CSS.Property.MarkerEnd>
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
  markerMid?: StyleValueWithCondition<CSS.Property.MarkerMid>
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
  markerStart?: StyleValueWithCondition<CSS.Property.MarkerStart>
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
  mask?: StyleValueWithCondition<CSS.Property.Mask>
  /**
   * ### mask-border
   *
   * The <code>mask-border</code> CSS property sets how the edges of an element are masked. It is a shorthand for <code>mask-border-outset</code>, <code>mask-border-repeat</code>, <code>mask-border-slice</code>, <code>mask-border-source</code>, and <code>mask-border-width</code>.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-border
   */
  maskBorder?: StyleValueWithCondition<CSS.Property.MaskBorder>
  /**
   * ### mask-border-outset
   *
   * The <code>mask-border</code> CSS property sets how the edges of an element are masked. It is a shorthand for <code>mask-border-outset</code>, <code>mask-border-repeat</code>, <code>mask-border-slice</code>, <code>mask-border-source</code>, and <code>mask-border-width</code>.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-border-outset
   */
  maskBorderOutset?: StyleValueWithCondition<CSS.Property.MaskBorderOutset>
  /**
   * ### mask-border-repeat
   *
   * The <code>mask-border</code> CSS property sets how the edges of an element are masked. It is a shorthand for <code>mask-border-outset</code>, <code>mask-border-repeat</code>, <code>mask-border-slice</code>, <code>mask-border-source</code>, and <code>mask-border-width</code>.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-border-repeat
   */
  maskBorderRepeat?: StyleValueWithCondition<CSS.Property.MaskBorderRepeat>
  /**
   * ### mask-border-slice
   *
   * The <code>mask-border</code> CSS property sets how the edges of an element are masked. It is a shorthand for <code>mask-border-outset</code>, <code>mask-border-repeat</code>, <code>mask-border-slice</code>, <code>mask-border-source</code>, and <code>mask-border-width</code>.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-border-slice
   */
  maskBorderSlice?: StyleValueWithCondition<CSS.Property.MaskBorderSlice>
  /**
   * ### mask-border-source
   *
   * The <code>mask-border</code> CSS property sets how the edges of an element are masked. It is a shorthand for <code>mask-border-outset</code>, <code>mask-border-repeat</code>, <code>mask-border-slice</code>, <code>mask-border-source</code>, and <code>mask-border-width</code>.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-border-source
   */
  maskBorderSource?: StyleValueWithCondition<CSS.Property.MaskBorderSource>
  /**
   * ### mask-border-width
   *
   * The <code>mask-border</code> CSS property sets how the edges of an element are masked. It is a shorthand for <code>mask-border-outset</code>, <code>mask-border-repeat</code>, <code>mask-border-slice</code>, <code>mask-border-source</code>, and <code>mask-border-width</code>.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-border-width
   */
  maskBorderWidth?: StyleValueWithCondition<
    CSS.Property.MaskBorderWidth | number
  >
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
  maskClip?: StyleValueWithCondition<CSS.Property.MaskClip>
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
  maskComposite?: StyleValueWithCondition<CSS.Property.MaskComposite>
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
  maskImage?: StyleValueWithCondition<CSS.Property.MaskImage, "gradients">
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
  maskMode?: StyleValueWithCondition<CSS.Property.MaskMode>
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
  maskOrigin?: StyleValueWithCondition<CSS.Property.MaskOrigin>
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
  maskPosition?: StyleValueWithCondition<CSS.Property.MaskPosition>
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
  maskRepeat?: StyleValueWithCondition<CSS.Property.MaskRepeat>
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
  maskSize?: StyleValueWithCondition<CSS.Property.MaskSize>
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
  maskType?: StyleValueWithCondition<CSS.Property.MaskType>
  /**
   * ### math-depth
   *
   * MathML, or the Mathematical Markup Language, describes mathematical notation, such as expressions and formulas. Also known as MathML Core.
   *
   * @baseline `Widely available`
   * @widely_available_date 2025-07-12
   * @newly_available_date 2023-01-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/math-depth
   */
  mathDepth?: StyleValueWithCondition<CSS.Property.MathDepth>
  /**
   * ### math-shift
   *
   * MathML, or the Mathematical Markup Language, describes mathematical notation, such as expressions and formulas. Also known as MathML Core.
   *
   * @baseline `Widely available`
   * @widely_available_date 2025-07-12
   * @newly_available_date 2023-01-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/math-shift
   *
   * @experimental
   */
  mathShift?: StyleValueWithCondition<CSS.Property.MathShift>
  /**
   * ### math-style
   *
   * MathML, or the Mathematical Markup Language, describes mathematical notation, such as expressions and formulas. Also known as MathML Core.
   *
   * @baseline `Widely available`
   * @widely_available_date 2025-07-12
   * @newly_available_date 2023-01-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/math-style
   */
  mathStyle?: StyleValueWithCondition<CSS.Property.MathStyle>
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
  maxBlockSize?: StyleValueWithCondition<
    CSS.Property.MaxBlockSize | number,
    "sizes"
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
   */
  maxH?: StyleValueWithCondition<CSS.Property.MaxHeight | number, "sizes">
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
  maxHeight?: StyleValueWithCondition<CSS.Property.MaxHeight | number, "sizes">
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
  maxInlineSize?: StyleValueWithCondition<
    CSS.Property.MaxInlineSize | number,
    "sizes"
  >
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
  maxW?: StyleValueWithCondition<CSS.Property.MaxWidth | number, "sizes">
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
  maxWidth?: StyleValueWithCondition<CSS.Property.MaxWidth | number, "sizes">
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
  mb?: StyleValueWithCondition<CSS.Property.MarginBottom | number, "spaces">
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
  me?: StyleValueWithCondition<CSS.Property.MarginInlineEnd | number, "spaces">
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
  minBlockSize?: StyleValueWithCondition<
    CSS.Property.MinBlockSize | number,
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
   */
  minH?: StyleValueWithCondition<CSS.Property.MinHeight | number, "sizes">
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
  minHeight?: StyleValueWithCondition<CSS.Property.MinHeight | number, "sizes">
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
  minInlineSize?: StyleValueWithCondition<
    CSS.Property.MinInlineSize | number,
    "sizes"
  >
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
  minW?: StyleValueWithCondition<CSS.Property.MinWidth | number, "sizes">
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
  minWidth?: StyleValueWithCondition<CSS.Property.MinWidth | number, "sizes">
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
  mixBlendMode?: StyleValueWithCondition<CSS.Property.MixBlendMode>
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
  ml?: StyleValueWithCondition<CSS.Property.MarginLeft | number, "spaces">
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
  mr?: StyleValueWithCondition<CSS.Property.MarginRight | number, "spaces">
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
  ms?: StyleValueWithCondition<
    CSS.Property.MarginInlineStart | number,
    "spaces"
  >
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
  mt?: StyleValueWithCondition<CSS.Property.MarginTop | number, "spaces">
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
  objectFit?: StyleValueWithCondition<CSS.Property.ObjectFit>
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
  objectPosition?: StyleValueWithCondition<CSS.Property.ObjectPosition>
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
  objectViewBox?: StyleValueWithCondition<AnyString>
  /**
   * ### offset
   *
   * The <code>offset</code> CSS property animates an element along a defined motion path.
   *
   * @baseline `Widely available`
   * @widely_available_date 2025-03-12
   * @newly_available_date 2022-09-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset
   */
  offset?: StyleValueWithCondition<CSS.Property.Offset>
  /**
   * ### offset-anchor
   *
   * The <code>offset</code> CSS property animates an element along a defined motion path.
   *
   * @baseline `Widely available`
   * @widely_available_date 2025-03-12
   * @newly_available_date 2022-09-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-anchor
   */
  offsetAnchor?: StyleValueWithCondition<CSS.Property.OffsetAnchor>
  /**
   * ### offset-distance
   *
   * The <code>offset</code> CSS property animates an element along a defined motion path.
   *
   * @baseline `Widely available`
   * @widely_available_date 2025-03-12
   * @newly_available_date 2022-09-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-distance
   */
  offsetDistance?: StyleValueWithCondition<CSS.Property.OffsetDistance>
  /**
   * ### offset-path
   *
   * The <code>offset</code> CSS property animates an element along a defined motion path.
   *
   * @baseline `Widely available`
   * @widely_available_date 2025-03-12
   * @newly_available_date 2022-09-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-path
   */
  offsetPath?: StyleValueWithCondition<CSS.Property.OffsetPath>
  /**
   * ### offset-position
   *
   * The <code>offset</code> CSS property animates an element along a defined motion path.
   *
   * @baseline `Widely available`
   * @widely_available_date 2025-03-12
   * @newly_available_date 2022-09-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-position
   */
  offsetPosition?: StyleValueWithCondition<CSS.Property.OffsetPosition>
  /**
   * ### offset-rotate
   *
   * The <code>offset</code> CSS property animates an element along a defined motion path.
   *
   * @baseline `Widely available`
   * @widely_available_date 2025-03-12
   * @newly_available_date 2022-09-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  offsetRotate?: StyleValueWithCondition<CSS.Property.OffsetRotate>
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
  opacity?: StyleValueWithCondition<CSS.Property.Opacity>
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
  order?: StyleValueWithCondition<CSS.Property.Order>
  /**
   * ### orphans
   *
   * The <code>widows</code> and <code>orphans</code> CSS properties set the minimum lines included in a text fragment created by page, column, or region breaks.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/orphans
   */
  orphans?: StyleValueWithCondition<CSS.Property.Orphans>
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
  outline?: StyleValueWithCondition<CSS.Property.Outline>
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
  outlineColor?: StyleValueWithCondition<CSS.Property.OutlineColor, "colors">
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
  outlineOffset?: StyleValueWithCondition<CSS.Property.OutlineOffset>
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
  outlineStyle?: StyleValueWithCondition<CSS.Property.OutlineStyle>
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
  outlineWidth?: StyleValueWithCondition<CSS.Property.OutlineWidth | number>
  /**
   * ### overflow
   *
   * The <code>overflow</code> CSS property sets the behavior for when content doesn't fit in an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-09-24
   * @newly_available_date 2020-03-24
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow
   */
  overflow?: StyleValueWithCondition<CSS.Property.Overflow>
  /**
   * ### overflow-anchor
   *
   * The <code>overflow-anchor</code> CSS property sets an element as a possible scroll anchor, reducing unintended scrolling when document changes occur above the current scrollport. This is enabled by default where supported.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-anchor
   */
  overflowAnchor?: StyleValueWithCondition<CSS.Property.OverflowAnchor>
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
  overflowBlock?: StyleValueWithCondition<CSS.Property.OverflowBlock>
  /**
   * ### overflow-clip-margin
   *
   * The <code>overflow-clip-margin</code> CSS property sets how far overflow content may appear outside the bounds of an element before it's clipped by effects such as <code>overflow: clip</code>.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-clip-margin
   */
  overflowClipMargin?: StyleValueWithCondition<CSS.Property.OverflowClipMargin>
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
  overflowInline?: StyleValueWithCondition<CSS.Property.OverflowInline>
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
  overflowWrap?: StyleValueWithCondition<CSS.Property.OverflowWrap>
  /**
   * ### overflow-x
   *
   * The <code>overflow</code> CSS property sets the behavior for when content doesn't fit in an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-09-24
   * @newly_available_date 2020-03-24
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-x
   */
  overflowX?: StyleValueWithCondition<CSS.Property.OverflowX>
  /**
   * ### overflow-y
   *
   * The <code>overflow</code> CSS property sets the behavior for when content doesn't fit in an element.
   *
   * @baseline `Widely available`
   * @widely_available_date 2022-09-24
   * @newly_available_date 2020-03-24
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-y
   */
  overflowY?: StyleValueWithCondition<CSS.Property.OverflowY>
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
  overlay?: StyleValueWithCondition<CSS.Property.Overlay>
  /**
   * ### overscroll-behavior
   *
   * The <code>overscroll-behavior</code> CSS property disables default scrolling behaviors when the edges of a scrolling area are reached.
   *
   * @baseline `Widely available`
   * @widely_available_date 2025-03-12
   * @newly_available_date 2022-09-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior
   */
  overscroll?: StyleValueWithCondition<CSS.Property.OverscrollBehavior>
  /**
   * ### overscroll-behavior
   *
   * The <code>overscroll-behavior</code> CSS property disables default scrolling behaviors when the edges of a scrolling area are reached.
   *
   * @baseline `Widely available`
   * @widely_available_date 2025-03-12
   * @newly_available_date 2022-09-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior
   */
  overscrollBehavior?: StyleValueWithCondition<CSS.Property.OverscrollBehavior>
  /**
   * ### overscroll-behavior-block
   *
   * The <code>overscroll-behavior</code> CSS property disables default scrolling behaviors when the edges of a scrolling area are reached.
   *
   * @baseline `Widely available`
   * @widely_available_date 2025-03-12
   * @newly_available_date 2022-09-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-block
   */
  overscrollBehaviorBlock?: StyleValueWithCondition<CSS.Property.OverscrollBehaviorBlock>
  /**
   * ### overscroll-behavior-inline
   *
   * The <code>overscroll-behavior</code> CSS property disables default scrolling behaviors when the edges of a scrolling area are reached.
   *
   * @baseline `Widely available`
   * @widely_available_date 2025-03-12
   * @newly_available_date 2022-09-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-inline
   */
  overscrollBehaviorInline?: StyleValueWithCondition<CSS.Property.OverscrollBehaviorInline>
  /**
   * ### overscroll-behavior-x
   *
   * The <code>overscroll-behavior</code> CSS property disables default scrolling behaviors when the edges of a scrolling area are reached.
   *
   * @baseline `Widely available`
   * @widely_available_date 2025-03-12
   * @newly_available_date 2022-09-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x
   */
  overscrollBehaviorX?: StyleValueWithCondition<CSS.Property.OverscrollBehaviorX>
  /**
   * ### overscroll-behavior-y
   *
   * The <code>overscroll-behavior</code> CSS property disables default scrolling behaviors when the edges of a scrolling area are reached.
   *
   * @baseline `Widely available`
   * @widely_available_date 2025-03-12
   * @newly_available_date 2022-09-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y
   */
  overscrollBehaviorY?: StyleValueWithCondition<CSS.Property.OverscrollBehaviorY>
  /**
   * ### overscroll-behavior-x
   *
   * The <code>overscroll-behavior</code> CSS property disables default scrolling behaviors when the edges of a scrolling area are reached.
   *
   * @baseline `Widely available`
   * @widely_available_date 2025-03-12
   * @newly_available_date 2022-09-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x
   */
  overscrollX?: StyleValueWithCondition<CSS.Property.OverscrollBehaviorX>
  /**
   * ### overscroll-behavior-y
   *
   * The <code>overscroll-behavior</code> CSS property disables default scrolling behaviors when the edges of a scrolling area are reached.
   *
   * @baseline `Widely available`
   * @widely_available_date 2025-03-12
   * @newly_available_date 2022-09-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y
   */
  overscrollY?: StyleValueWithCondition<CSS.Property.OverscrollBehaviorY>
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
  p?: StyleValueWithCondition<CSS.Property.Padding | number, "spaces">
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
  padding?: StyleValueWithCondition<CSS.Property.Padding | number, "spaces">
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
  paddingBlock?: StyleValueWithCondition<
    CSS.Property.PaddingBlock | number,
    "spaces"
  >
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
  paddingBlockEnd?: StyleValueWithCondition<
    CSS.Property.PaddingBlockEnd | number,
    "spaces"
  >
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
  paddingBlockStart?: StyleValueWithCondition<
    CSS.Property.PaddingBlockStart | number,
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
   */
  paddingBottom?: StyleValueWithCondition<
    CSS.Property.PaddingBottom | number,
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
   */
  paddingEnd?: StyleValueWithCondition<
    CSS.Property.PaddingInlineEnd | number,
    "spaces"
  >
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
  paddingInline?: StyleValueWithCondition<
    CSS.Property.PaddingInline | number,
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
   */
  paddingInlineEnd?: StyleValueWithCondition<
    CSS.Property.PaddingInlineEnd | number,
    "spaces"
  >
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
  paddingInlineStart?: StyleValueWithCondition<
    CSS.Property.PaddingInlineStart | number,
    "spaces"
  >
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
  paddingLeft?: StyleValueWithCondition<
    CSS.Property.PaddingLeft | number,
    "spaces"
  >
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
  paddingRight?: StyleValueWithCondition<
    CSS.Property.PaddingRight | number,
    "spaces"
  >
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
  paddingStart?: StyleValueWithCondition<
    CSS.Property.PaddingInlineStart | number,
    "spaces"
  >
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
  paddingTop?: StyleValueWithCondition<
    CSS.Property.PaddingTop | number,
    "spaces"
  >
  /**
   * ### page
   *
   * The <code>:first</code>, <code>:left</code>, and <code>:right</code> pseudo-classes select pages based on their position in sequence after pagination. They're often used with the <code>page</code> CSS property, to choose a print layout defined by the <code>@page</code> rule.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page
   */
  page?: StyleValueWithCondition<CSS.Property.Page>
  /**
   * ### page-break-after
   *
   * The <code>page-break-before</code>, <code>page-break-inside</code>, and <code>page-break-after</code> CSS properties are aliases to the <code>break-before</code>, <code>break-inside</code>, and <code>break-after</code> properties.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-after
   *
   * @deprecated
   */
  pageBreakAfter?: StyleValueWithCondition<CSS.Property.PageBreakAfter>
  /**
   * ### page-break-before
   *
   * The <code>page-break-before</code>, <code>page-break-inside</code>, and <code>page-break-after</code> CSS properties are aliases to the <code>break-before</code>, <code>break-inside</code>, and <code>break-after</code> properties.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-before
   *
   * @deprecated
   */
  pageBreakBefore?: StyleValueWithCondition<CSS.Property.PageBreakBefore>
  /**
   * ### page-break-inside
   *
   * The <code>page-break-before</code>, <code>page-break-inside</code>, and <code>page-break-after</code> CSS properties are aliases to the <code>break-before</code>, <code>break-inside</code>, and <code>break-after</code> properties.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-inside
   *
   * @deprecated
   */
  pageBreakInside?: StyleValueWithCondition<CSS.Property.PageBreakInside>
  /**
   * ### paint-order
   *
   * The <code>paint-order</code> CSS property sets the z-order of strokes, fills, and (in SVG content) markers. For example, <code>paint-order: markers stroke fill;</code> draws the markers, then stroke on top of markers, then fill on top of both markers and stroke.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/paint-order
   */
  paintOrder?: StyleValueWithCondition<CSS.Property.PaintOrder>
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
  pb?: StyleValueWithCondition<CSS.Property.PaddingBottom | number, "spaces">
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
  pe?: StyleValueWithCondition<CSS.Property.PaddingInlineEnd | number, "spaces">
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
  perspective?: StyleValueWithCondition<CSS.Property.Perspective>
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
  perspectiveOrigin?: StyleValueWithCondition<CSS.Property.PerspectiveOrigin>
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
  pl?: StyleValueWithCondition<CSS.Property.PaddingLeft | number, "spaces">
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
  placeContent?: StyleValueWithCondition<CSS.Property.PlaceContent>
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
  placeItems?: StyleValueWithCondition<CSS.Property.PlaceItems>
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
  placeSelf?: StyleValueWithCondition<CSS.Property.PlaceSelf>
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
  pointerEvents?: StyleValueWithCondition<CSS.Property.PointerEvents>
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
  pos?: StyleValueWithCondition<CSS.Property.Position>
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
  position?: StyleValueWithCondition<CSS.Property.Position>
  /**
   * ### position-anchor
   *
   * Anchor positioning places an element based on the position of another element. For example, you can place a tooltip next to the content it references.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/position-anchor
   */
  positionAnchor?: StyleValueWithCondition<AnyString>
  /**
   * ### position-area
   *
   * Anchor positioning places an element based on the position of another element. For example, you can place a tooltip next to the content it references.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/position-area
   */
  positionArea?: StyleValueWithCondition<AnyString>
  /**
   * ### position-try
   *
   * Anchor positioning places an element based on the position of another element. For example, you can place a tooltip next to the content it references.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/position-try
   */
  positionTry?: StyleValueWithCondition<AnyString>
  /**
   * ### position-try-fallbacks
   *
   * Anchor positioning places an element based on the position of another element. For example, you can place a tooltip next to the content it references.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/position-try-fallbacks
   */
  positionTryFallbacks?: StyleValueWithCondition<AnyString>
  /**
   * ### position-try-order
   *
   * Anchor positioning places an element based on the position of another element. For example, you can place a tooltip next to the content it references.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/position-try-order
   */
  positionTryOrder?: StyleValueWithCondition<AnyString>
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
  positionVisibility?: StyleValueWithCondition<AnyString>
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
  pr?: StyleValueWithCondition<CSS.Property.PaddingRight | number, "spaces">
  /**
   * ### print-color-adjust
   *
   * The <code>print-color-adjust</code> CSS property sets whether styles of printed pages should be adjusted to use less ink, in cases such as light text on a dark background.
   *
   * @baseline `Newly available`
   * @newly_available_date 2025-05-01
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/print-color-adjust
   */
  printColorAdjust?: StyleValueWithCondition<CSS.Property.PrintColorAdjust>
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
  ps?: StyleValueWithCondition<
    CSS.Property.PaddingInlineStart | number,
    "spaces"
  >
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
  pt?: StyleValueWithCondition<CSS.Property.PaddingTop | number, "spaces">
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
  quotes?: StyleValueWithCondition<CSS.Property.Quotes>
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
  r?: StyleValueWithCondition<AnyString>
  /**
   * ### reading-flow
   *
   * The <code>reading-flow</code> CSS property sets the order in which flex or grid elements are rendered to speech or reached via focus navigation. The <code>reading-order</code> property overrides this order.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/reading-flow
   *
   * @experimental
   */
  readingFlow?: StyleValueWithCondition<AnyString>
  /**
   * ### reading-order
   *
   * The <code>reading-flow</code> CSS property sets the order in which flex or grid elements are rendered to speech or reached via focus navigation. The <code>reading-order</code> property overrides this order.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/reading-order
   *
   * @experimental
   */
  readingOrder?: StyleValueWithCondition<AnyString>
  /**
   * ### resize
   *
   * The <code>resize</code> CSS property sets whether an element can be resized by the user, and on which axes.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/resize
   */
  resize?: StyleValueWithCondition<CSS.Property.Resize>
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
  right?: StyleValueWithCondition<CSS.Property.Right | number, "spaces">
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
  rotate?: StyleValueWithCondition<CSS.Property.Rotate>
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
  rounded?: StyleValueWithCondition<CSS.Property.BorderRadius | number, "radii">
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
  roundedBottom?: StyleValueWithCondition<
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
  roundedBottomEnd?: StyleValueWithCondition<
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
  roundedBottomLeft?: StyleValueWithCondition<
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
  roundedBottomRight?: StyleValueWithCondition<
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
  roundedBottomStart?: StyleValueWithCondition<
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
  roundedEnd?: StyleValueWithCondition<
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
  roundedLeft?: StyleValueWithCondition<
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
  roundedRight?: StyleValueWithCondition<
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
  roundedStart?: StyleValueWithCondition<
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
  roundedTop?: StyleValueWithCondition<
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
  roundedTopEnd?: StyleValueWithCondition<
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
  roundedTopLeft?: StyleValueWithCondition<
    CSS.Property.BorderTopLeftRadius | number,
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
  roundedTopRight?: StyleValueWithCondition<
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
  roundedTopStart?: StyleValueWithCondition<
    CSS.Property.BorderStartStartRadius | number,
    "radii"
  >
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
  rowGap?: StyleValueWithCondition<CSS.Property.RowGap | number, "spaces">
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
  rubyAlign?: StyleValueWithCondition<CSS.Property.RubyAlign>
  /**
   * ### ruby-overhang
   *
   * The <code>ruby-overhang</code> CSS property sets whether ruby annotations may overlap adjacent text.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/ruby-overhang
   */
  rubyOverhang?: StyleValueWithCondition<AnyString>
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
  rubyPosition?: StyleValueWithCondition<CSS.Property.RubyPosition>
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
  rx?: StyleValueWithCondition<AnyString>
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
  ry?: StyleValueWithCondition<AnyString>
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
  scale?: StyleValueWithCondition<CSS.Property.Scale>
  /**
   * ### scrollbar-color
   *
   * The <code>scrollbar-color</code> CSS property sets the color of the scrollbar track and thumb.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scrollbar-color
   */
  scrollbarColor?: StyleValueWithCondition<
    CSS.Property.ScrollbarColor,
    "colors"
  >
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
  scrollbarGutter?: StyleValueWithCondition<CSS.Property.ScrollbarGutter>
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
  scrollbarWidth?: StyleValueWithCondition<CSS.Property.ScrollbarWidth | number>
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
  scrollBehavior?: StyleValueWithCondition<CSS.Property.ScrollBehavior>
  /**
   * ### scroll-initial-target
   *
   * The <code>scroll-initial-target: nearest</code> CSS declaration sets the initial scroll position of its scroll container to the top of the element, much like scrolling to a URL fragment.
   *
   * @baseline `Limited available`
   *
   * @see https://drafts.csswg.org/css-scroll-snap-2/#propdef-scroll-initial-target
   *
   * @experimental
   */
  scrollInitialTarget?: StyleValueWithCondition<AnyString>
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
  scrollMargin?: StyleValueWithCondition<
    CSS.Property.ScrollMargin | number,
    "spaces"
  >
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
  scrollMarginBlock?: StyleValueWithCondition<CSS.Property.ScrollMarginBlock>
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
  scrollMarginBlockEnd?: StyleValueWithCondition<CSS.Property.ScrollMarginBlockEnd>
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
  scrollMarginBlockStart?: StyleValueWithCondition<CSS.Property.ScrollMarginBlockStart>
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
  scrollMarginBottom?: StyleValueWithCondition<
    CSS.Property.ScrollMarginBottom | number,
    "spaces"
  >
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
  scrollMarginInline?: StyleValueWithCondition<CSS.Property.ScrollMarginInline>
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
  scrollMarginInlineEnd?: StyleValueWithCondition<CSS.Property.ScrollMarginInlineEnd>
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
  scrollMarginInlineStart?: StyleValueWithCondition<CSS.Property.ScrollMarginInlineStart>
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
  scrollMarginLeft?: StyleValueWithCondition<
    CSS.Property.ScrollMarginLeft | number,
    "spaces"
  >
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
  scrollMarginRight?: StyleValueWithCondition<
    CSS.Property.ScrollMarginRight | number,
    "spaces"
  >
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
  scrollMarginTop?: StyleValueWithCondition<
    CSS.Property.ScrollMarginTop | number,
    "spaces"
  >
  /**
   * ### scroll-marker-group
   *
   * A scroll container can be navigated by activating <code>::scroll-marker</code> pseudo-elements which appear in a generated <code>::scroll-marker-group</code> pseudo-element, either before or after the scroll container.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-marker-group
   *
   * @experimental
   */
  scrollMarkerGroup?: StyleValueWithCondition<AnyString>
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
  scrollPadding?: StyleValueWithCondition<
    CSS.Property.ScrollPadding | number,
    "spaces"
  >
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
  scrollPaddingBlock?: StyleValueWithCondition<CSS.Property.ScrollPaddingBlock>
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
  scrollPaddingBlockEnd?: StyleValueWithCondition<CSS.Property.ScrollPaddingBlockEnd>
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
  scrollPaddingBlockStart?: StyleValueWithCondition<CSS.Property.ScrollPaddingBlockStart>
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
  scrollPaddingBottom?: StyleValueWithCondition<
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
  scrollPaddingInline?: StyleValueWithCondition<CSS.Property.ScrollPaddingInline>
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
  scrollPaddingInlineEnd?: StyleValueWithCondition<CSS.Property.ScrollPaddingInlineEnd>
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
  scrollPaddingInlineStart?: StyleValueWithCondition<CSS.Property.ScrollPaddingInlineStart>
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
  scrollPaddingLeft?: StyleValueWithCondition<
    CSS.Property.ScrollPaddingLeft | number,
    "spaces"
  >
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
  scrollPaddingRight?: StyleValueWithCondition<
    CSS.Property.ScrollPaddingRight | number,
    "spaces"
  >
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
  scrollPaddingTop?: StyleValueWithCondition<
    CSS.Property.ScrollPaddingTop | number,
    "spaces"
  >
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
  scrollSnapAlign?: StyleValueWithCondition<CSS.Property.ScrollSnapAlign>
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
  scrollSnapStop?: StyleValueWithCondition<CSS.Property.ScrollSnapStop>
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
  scrollSnapType?: StyleValueWithCondition<CSS.Property.ScrollSnapType>
  /**
   * ### scroll-target-group
   *
   * The CSS `scroll-target-group` property.
   *
   * @see https://drafts.csswg.org/css-overflow-5/#scroll-target-group
   *
   * @experimental
   */
  scrollTargetGroup?: StyleValueWithCondition<AnyString>
  /**
   * ### scroll-timeline
   *
   * The <code>animation-timeline</code>, <code>scroll-timeline</code>, and <code>view-timeline</code> CSS properties advance animations based on the user's scroll position.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-timeline
   */
  scrollTimeline?: StyleValueWithCondition<CSS.Property.ScrollTimeline>
  /**
   * ### scroll-timeline-axis
   *
   * The <code>animation-timeline</code>, <code>scroll-timeline</code>, and <code>view-timeline</code> CSS properties advance animations based on the user's scroll position.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-timeline-axis
   */
  scrollTimelineAxis?: StyleValueWithCondition<CSS.Property.ScrollTimelineAxis>
  /**
   * ### scroll-timeline-name
   *
   * The <code>animation-timeline</code>, <code>scroll-timeline</code>, and <code>view-timeline</code> CSS properties advance animations based on the user's scroll position.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-timeline-name
   */
  scrollTimelineName?: StyleValueWithCondition<CSS.Property.ScrollTimelineName>
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
  shadow?: StyleValueWithCondition<CSS.Property.BoxShadow, "shadows">
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
  shapeImageThreshold?: StyleValueWithCondition<CSS.Property.ShapeImageThreshold>
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
  shapeMargin?: StyleValueWithCondition<CSS.Property.ShapeMargin>
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
  shapeOutside?: StyleValueWithCondition<CSS.Property.ShapeOutside>
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
  shapeRendering?: StyleValueWithCondition<CSS.Property.ShapeRendering>
  /**
   * ### speak
   *
   * The <code>speak</code> CSS property sets whether or not text should be spoken.
   *
   * @baseline `Limited available`
   *
   * @see https://drafts.csswg.org/css-speech-1/#speaking-props-speak
   */
  speak?: StyleValueWithCondition<AnyString>
  /**
   * ### speak-as
   *
   * The <code>speak-as</code> CSS property sets how any element's content is spoken. Not to be confused with the <code>speak-as</code> descriptor of <code>@counter-style</code> at-rules.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/speak-as
   *
   * @experimental
   */
  speakAs?: StyleValueWithCondition<AnyString>
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
  stopColor?: StyleValueWithCondition<CSS.Property.StopColor>
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
  stopOpacity?: StyleValueWithCondition<CSS.Property.StopOpacity>
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
  stroke?: StyleValueWithCondition<CSS.Property.Stroke, "colors">
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
  strokeColor?: StyleValueWithCondition<AnyString>
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
  strokeDasharray?: StyleValueWithCondition<CSS.Property.StrokeDasharray>
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
  strokeDashoffset?: StyleValueWithCondition<
    CSS.Property.StrokeDashoffset | number
  >
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
  strokeLinecap?: StyleValueWithCondition<CSS.Property.StrokeLinecap>
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
  strokeLinejoin?: StyleValueWithCondition<CSS.Property.StrokeLinejoin>
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
  strokeMiterlimit?: StyleValueWithCondition<CSS.Property.StrokeMiterlimit>
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
  strokeOpacity?: StyleValueWithCondition<CSS.Property.StrokeOpacity>
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
  strokeWidth?: StyleValueWithCondition<CSS.Property.StrokeWidth | number>
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
  tableLayout?: StyleValueWithCondition<CSS.Property.TableLayout>
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
  tabSize?: StyleValueWithCondition<CSS.Property.TabSize>
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
  text?: StyleValueWithCondition<CSS.Property.FontSize | number, "fontSizes">
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
  textAlign?: StyleValueWithCondition<CSS.Property.TextAlign>
  /**
   * ### text-align-last
   *
   * The <code>text-align-last</code> CSS property sets the alignment of the last line of text before a forced line break.
   *
   * @baseline `Widely available`
   * @widely_available_date 2025-03-12
   * @newly_available_date 2022-09-12
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align-last
   */
  textAlignLast?: StyleValueWithCondition<CSS.Property.TextAlignLast>
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
  textAnchor?: StyleValueWithCondition<CSS.Property.TextAnchor>
  /**
   * ### text-autospace
   *
   * The <code>text-autospace</code> CSS property sets whether and how to insert spaces in inter-script text (such as when mixing Latin and Chinese characters) and around punctuation.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-autospace
   */
  textAutospace?: StyleValueWithCondition<AnyString>
  /**
   * ### text-box
   *
   * The <code>text-box</code> CSS property sets the spacing above and below text based on a font's typographic features. For example, <code>text-box: trim-both ex alphabetic</code> trims the top to the top of the letter x and the bottom to the bottom of most letters, without descenders.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-box
   */
  textBox?: StyleValueWithCondition<AnyString>
  /**
   * ### text-box-edge
   *
   * The <code>text-box</code> CSS property sets the spacing above and below text based on a font's typographic features. For example, <code>text-box: trim-both ex alphabetic</code> trims the top to the top of the letter x and the bottom to the bottom of most letters, without descenders.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-box-edge
   */
  textBoxEdge?: StyleValueWithCondition<AnyString>
  /**
   * ### text-box-trim
   *
   * The <code>text-box</code> CSS property sets the spacing above and below text based on a font's typographic features. For example, <code>text-box: trim-both ex alphabetic</code> trims the top to the top of the letter x and the bottom to the bottom of most letters, without descenders.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-box-trim
   */
  textBoxTrim?: StyleValueWithCondition<AnyString>
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
  textColor?: StyleValueWithCondition<CSS.Property.Color, "colors">
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
  textCombineUpright?: StyleValueWithCondition<CSS.Property.TextCombineUpright>
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
  textDecor?: StyleValueWithCondition<CSS.Property.TextDecoration>
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
  textDecoration?: StyleValueWithCondition<CSS.Property.TextDecoration>
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
  textDecorationColor?: StyleValueWithCondition<
    CSS.Property.TextDecorationColor,
    "colors"
  >
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
  textDecorationLine?: StyleValueWithCondition<CSS.Property.TextDecorationLine>
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
  textDecorationSkip?: StyleValueWithCondition<CSS.Property.TextDecorationSkip>
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
  textDecorationSkipInk?: StyleValueWithCondition<CSS.Property.TextDecorationSkipInk>
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
  textDecorationStyle?: StyleValueWithCondition<CSS.Property.TextDecorationStyle>
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
  textDecorationThickness?: StyleValueWithCondition<CSS.Property.TextDecorationThickness>
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
  textEmphasis?: StyleValueWithCondition<CSS.Property.TextEmphasis>
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
  textEmphasisColor?: StyleValueWithCondition<
    CSS.Property.TextEmphasisColor,
    "colors"
  >
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
  textEmphasisPosition?: StyleValueWithCondition<CSS.Property.TextEmphasisPosition>
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
  textEmphasisStyle?: StyleValueWithCondition<CSS.Property.TextEmphasisStyle>
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
  textIndent?: StyleValueWithCondition<CSS.Property.TextIndent>
  /**
   * ### text-justify
   *
   * The <code>text-justify</code> CSS property sets the justification method of text when <code>text-align: justify</code> is set.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-justify
   */
  textJustify?: StyleValueWithCondition<CSS.Property.TextJustify>
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
  textOrientation?: StyleValueWithCondition<CSS.Property.TextOrientation>
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
  textOverflow?: StyleValueWithCondition<CSS.Property.TextOverflow>
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
  textRendering?: StyleValueWithCondition<CSS.Property.TextRendering>
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
  textShadow?: StyleValueWithCondition<CSS.Property.TextShadow, "shadows">
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
  textSizeAdjust?: StyleValueWithCondition<CSS.Property.TextSizeAdjust>
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
  textSpacingTrim?: StyleValueWithCondition<AnyString>
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
  textTransform?: StyleValueWithCondition<CSS.Property.TextTransform>
  /**
   * ### text-underline-offset
   *
   * The <code>text-underline-offset</code> CSS property shifts underlines on text from the initial position by a given distance. The initial position is affected by the <code>text-underline-position</code> property.
   *
   * @baseline `Widely available`
   * @widely_available_date 2023-05-19
   * @newly_available_date 2020-11-19
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-underline-offset
   */
  textUnderlineOffset?: StyleValueWithCondition<CSS.Property.TextUnderlineOffset>
  /**
   * ### text-underline-position
   *
   * The <code>text-underline-position</code> CSS property sets the position of underlines on text. For example, <code>text-underline-position: under</code> places the underline below the text, avoiding crossing descenders. The underline may be further adjusted by the <code>text-underline-offset</code> property.
   *
   * @baseline `Widely available`
   * @widely_available_date 2023-01-28
   * @newly_available_date 2020-07-28
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-underline-position
   */
  textUnderlinePosition?: StyleValueWithCondition<CSS.Property.TextUnderlinePosition>
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
  textWrap?: StyleValueWithCondition<CSS.Property.TextWrap>
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
  textWrapMode?: StyleValueWithCondition<AnyString>
  /**
   * ### text-wrap-style
   *
   * The <code>text-wrap-style</code> CSS property sets how lines break in text that overflows the container. It can also be set with the <code>text-wrap</code> shorthand.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-wrap-style
   */
  textWrapStyle?: StyleValueWithCondition<AnyString>
  /**
   * ### timeline-scope
   *
   * The <code>animation-timeline</code>, <code>scroll-timeline</code>, and <code>view-timeline</code> CSS properties advance animations based on the user's scroll position.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/timeline-scope
   */
  timelineScope?: StyleValueWithCondition<CSS.Property.TimelineScope>
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
  top?: StyleValueWithCondition<CSS.Property.Top | number, "spaces">
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
  touchAction?: StyleValueWithCondition<CSS.Property.TouchAction>
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
  tracking?: StyleValueWithCondition<
    CSS.Property.LetterSpacing,
    "letterSpacings"
  >
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
  transform?: StyleValueWithCondition<CSS.Property.Transform>
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
  transformBox?: StyleValueWithCondition<CSS.Property.TransformBox>
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
  transformOrigin?: StyleValueWithCondition<CSS.Property.TransformOrigin>
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
  transformStyle?: StyleValueWithCondition<CSS.Property.TransformStyle>
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
  transitionBehavior?: StyleValueWithCondition<CSS.Property.TransitionBehavior>
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
  transitionDelay?: StyleValueWithCondition<CSS.Property.TransitionDelay>
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
  transitionDuration?: StyleValueWithCondition<
    CSS.Property.TransitionDuration,
    "durations"
  >
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
  transitionTimingFunction?: StyleValueWithCondition<
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
  unicodeBidi?: StyleValueWithCondition<CSS.Property.UnicodeBidi>
  /**
   * ### user-modify
   *
   * The CSS `user-modify` property.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/user-modify
   *
   * @deprecated
   */
  userModify?: StyleValueWithCondition<AnyString>
  /**
   * ### user-select
   *
   * The <code>user-select</code> CSS property controls which elements can be selected by the user.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/user-select
   */
  userSelect?: StyleValueWithCondition<CSS.Property.UserSelect>
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
  vectorEffect?: StyleValueWithCondition<CSS.Property.VectorEffect>
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
  verticalAlign?: StyleValueWithCondition<CSS.Property.VerticalAlign>
  /**
   * ### view-timeline
   *
   * The <code>animation-timeline</code>, <code>scroll-timeline</code>, and <code>view-timeline</code> CSS properties advance animations based on the user's scroll position.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/view-timeline
   */
  viewTimeline?: StyleValueWithCondition<CSS.Property.ViewTimeline>
  /**
   * ### view-timeline-axis
   *
   * The <code>animation-timeline</code>, <code>scroll-timeline</code>, and <code>view-timeline</code> CSS properties advance animations based on the user's scroll position.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/view-timeline-axis
   */
  viewTimelineAxis?: StyleValueWithCondition<CSS.Property.ViewTimelineAxis>
  /**
   * ### view-timeline-inset
   *
   * The <code>animation-timeline</code>, <code>scroll-timeline</code>, and <code>view-timeline</code> CSS properties advance animations based on the user's scroll position.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/view-timeline-inset
   */
  viewTimelineInset?: StyleValueWithCondition<CSS.Property.ViewTimelineInset>
  /**
   * ### view-timeline-name
   *
   * The <code>animation-timeline</code>, <code>scroll-timeline</code>, and <code>view-timeline</code> CSS properties advance animations based on the user's scroll position.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/view-timeline-name
   */
  viewTimelineName?: StyleValueWithCondition<CSS.Property.ViewTimelineName>
  /**
   * ### view-transition-class
   *
   * The <code>view-transition-class</code> CSS property sets a name that can be used to apply styles to multiple named view transition pseudo-elements.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/view-transition-class
   */
  viewTransitionClass?: StyleValueWithCondition<AnyString>
  /**
   * ### view-transition-group
   *
   * The CSS `view-transition-group` property.
   *
   * @see https://drafts.csswg.org/css-view-transitions-2/#view-transition-group-prop
   *
   * @experimental
   */
  viewTransitionGroup?: StyleValueWithCondition<AnyString>
  /**
   * ### view-transition-name
   *
   * View transitions allow you to create animated visual transitions between different states of a document.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/view-transition-name
   */
  viewTransitionName?: StyleValueWithCondition<CSS.Property.ViewTransitionName>
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
  visibility?: StyleValueWithCondition<CSS.Property.Visibility>
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
  w?: StyleValueWithCondition<CSS.Property.Width | number, "sizes">
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
  whiteSpace?: StyleValueWithCondition<CSS.Property.WhiteSpace>
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
  whiteSpaceCollapse?: StyleValueWithCondition<CSS.Property.WhiteSpaceCollapse>
  /**
   * ### widows
   *
   * The <code>widows</code> and <code>orphans</code> CSS properties set the minimum lines included in a text fragment created by page, column, or region breaks.
   *
   * @baseline `Limited available`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/widows
   */
  widows?: StyleValueWithCondition<CSS.Property.Widows>
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
  width?: StyleValueWithCondition<CSS.Property.Width | number, "sizes">
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
  willChange?: StyleValueWithCondition<CSS.Property.WillChange>
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
  wordBreak?: StyleValueWithCondition<CSS.Property.WordBreak>
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
  wordSpacing?: StyleValueWithCondition<CSS.Property.WordSpacing>
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
  writingMode?: StyleValueWithCondition<CSS.Property.WritingMode>
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
  x?: StyleValueWithCondition<AnyString>
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
  y?: StyleValueWithCondition<AnyString>
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
  z?: StyleValueWithCondition<CSS.Property.ZIndex, "zIndices">
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
  zIndex?: StyleValueWithCondition<CSS.Property.ZIndex, "zIndices">
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
  zoom?: StyleValueWithCondition<CSS.Property.Zoom>
  /**

*/
  colorMode?: StyleValueWithCondition<CSS.Property.ColorScheme>
  /**
   * Sets the value of `--contrast`.
   */
  contrast?: StyleValueWithCondition<AnyString>
  /**
   * Sets the value of `--drop-shadow`.
   */
  dropShadow?: StyleValueWithCondition<AnyString, "shadows">
  /**
   * The focus ring is used to identify the currently focused element.
   */
  focusRing?: StyleValueWithCondition<
    "inline" | "inside" | "mixed" | "none" | "outline" | "outside"
  >
  /**
   * Sets the value of `--focus-ring-color`.
   */
  focusRingColor?: StyleValueWithCondition<AnyString, "colors">
  /**
   * Sets the value of `--focus-ring-offset`.
   */
  focusRingOffset?: StyleValueWithCondition<AnyString | number, "spaces">
  /**
   * Sets the value of `--focus-ring-style`.
   */
  focusRingStyle?: StyleValueWithCondition<AnyString>
  /**
   * Sets the value of `--focus-ring-width`.
   */
  focusRingWidth?: StyleValueWithCondition<AnyString>
  /**
   * The focus ring is used to identify the currently focused element.
   */
  focusVisibleRing?: StyleValueWithCondition<
    "inline" | "inside" | "mixed" | "none" | "outline" | "outside"
  >
  /**
   * Sets the value of `--grayscale`.
   */
  grayscale?: StyleValueWithCondition<AnyString>
  /**
   * Sets the value of `--hue-rotate`.
   */
  hueRotate?: StyleValueWithCondition<AnyString>
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
  insetX?: StyleValueWithCondition<
    CSS.Property.Left | CSS.Property.Right | number,
    "spaces"
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
  insetY?: StyleValueWithCondition<
    CSS.Property.Bottom | CSS.Property.Top | number,
    "spaces"
  >
  /**
   * Sets the value of `--invert`.
   */
  invert?: StyleValueWithCondition<AnyString>
  /**
   * Used to visually truncate a text after a number of lines.
   */
  lineClamp?: StyleValueWithCondition<number>
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
  marginX?: StyleValueWithCondition<
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
  marginY?: StyleValueWithCondition<
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
  maxBoxSize?: StyleValueWithCondition<
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
  minBoxSize?: StyleValueWithCondition<
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
  mx?: StyleValueWithCondition<
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
  my?: StyleValueWithCondition<
    CSS.Property.MarginBottom | CSS.Property.MarginTop | number,
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
  paddingX?: StyleValueWithCondition<
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
  paddingY?: StyleValueWithCondition<
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
  px?: StyleValueWithCondition<
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
  py?: StyleValueWithCondition<
    CSS.Property.PaddingBottom | CSS.Property.PaddingTop | number,
    "spaces"
  >
  /**
   * Sets the value of `--rotate-x`.
   */
  rotateX?: StyleValueWithCondition<AnyString>
  /**
   * Sets the value of `--rotate-y`.
   */
  rotateY?: StyleValueWithCondition<AnyString>
  /**
   * Sets the value of `--rotate-z`.
   */
  rotateZ?: StyleValueWithCondition<AnyString>
  /**
   * Sets the value of `--saturate`.
   */
  saturate?: StyleValueWithCondition<AnyString>
  /**
   * Sets the value of `--scale-x`.
   */
  scaleX?: StyleValueWithCondition<AnyString>
  /**
   * Sets the value of `--scale-y`.
   */
  scaleY?: StyleValueWithCondition<AnyString>
  /**
   * Sets the value of `--scale-z`.
   */
  scaleZ?: StyleValueWithCondition<AnyString>
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
  scrollMarginX?: StyleValueWithCondition<
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
  scrollMarginY?: StyleValueWithCondition<
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
  scrollPaddingX?: StyleValueWithCondition<
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
  scrollPaddingY?: StyleValueWithCondition<
    CSS.Property.ScrollPaddingBottom | CSS.Property.ScrollPaddingTop | number,
    "spaces"
  >
  /**
   * Sets the value of `--sepia`.
   */
  sepia?: StyleValueWithCondition<AnyString>
  /**
   * Sets the value of `--skew-x`.
   */
  skewX?: StyleValueWithCondition<AnyString>
  /**
   * Sets the value of `--skew-y`.
   */
  skewY?: StyleValueWithCondition<AnyString>
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
  transition?: StyleValueWithCondition<
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
  transitionProperty?: StyleValueWithCondition<
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
  translateX?: StyleValueWithCondition<AnyString | number, "spaces">
  /**
   * Sets the value of `--translate-y`.
   */
  translateY?: StyleValueWithCondition<AnyString | number, "spaces">
  /**
   * Sets the value of `--translate-z`.
   */
  translateZ?: StyleValueWithCondition<AnyString | number>
  /**
   * If `true`, it clamps truncate a text after one line.
   */
  truncated?: StyleValueWithCondition<boolean>
  /**
   * ### container
   *
   * Container size queries with the <code>@container</code> at-rule apply styles to an element based on the dimensions of its container.
   *
   * @baseline `Widely available`
   * @widely_available_date 2025-08-14
   * @newly_available_date 2023-02-14
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/@container
   */
  _container?: {
    [key: string]: any
    name?: AnyString
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
    orientation?: "landscape" | "portrait" | AnyString
    query?: AnyString
    w?: CSS.Property.Width | number | ThemeTokens["sizes"]
    width?: CSS.Property.Width | number | ThemeTokens["sizes"]
  }[]
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
  _keyframes?: StyleValueWithCondition<
    AnyString | { [key: string]: CSSObject },
    "keyframes"
  >
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
  _landscape?: StyleValueWithCondition<CSSObject>
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
    type?: "all" | "print" | "screen" | "speech" | AnyString
    css?: CSSObject
    anyHover?: "hover" | "none" | AnyString
    anyPointer?: "coarse" | "fine" | "none" | AnyString
    aspectRatio?: CSS.Property.AspectRatio
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
    h?: CSS.Property.Height | number | ThemeTokens["sizes"]
    height?: CSS.Property.Height | number | ThemeTokens["sizes"]
    hover?: "hover" | "none" | AnyString
    invertedColors?: "inverted" | "none" | AnyString
    maxColor?: AnyString | number
    maxColorIndex?: AnyString | number
    maxDeviceAspectRatio?: CSS.Property.AspectRatio
    maxDeviceHeight?: CSS.Property.MaxHeight | number | ThemeTokens["sizes"]
    maxH?: CSS.Property.MaxHeight | number | ThemeTokens["sizes"]
    maxHeight?: CSS.Property.MaxHeight | number | ThemeTokens["sizes"]
    maxMonochrome?: AnyString | number
    maxResolution?: AnyString
    maxW?: CSS.Property.MaxWidth | number | ThemeTokens["sizes"]
    maxWidth?: CSS.Property.MaxWidth | number | ThemeTokens["sizes"]
    mazDeviceWidth?: CSS.Property.Width | number | ThemeTokens["sizes"]
    minColor?: AnyString | number
    minColorIndex?: AnyString | number
    minDeviceAspectRatio?: CSS.Property.AspectRatio
    minDeviceHeight?: CSS.Property.MinHeight | number | ThemeTokens["sizes"]
    minDeviceWidth?: CSS.Property.Width | number | ThemeTokens["sizes"]
    minH?: CSS.Property.MinHeight | number | ThemeTokens["sizes"]
    minHeight?: CSS.Property.MinHeight | number | ThemeTokens["sizes"]
    minMonochrome?: AnyString | number
    minResolution?: AnyString
    minW?: CSS.Property.MinWidth | number | ThemeTokens["sizes"]
    minWidth?: CSS.Property.MinWidth | number | ThemeTokens["sizes"]
    monochrome?: AnyString | number
    orientation?: "landscape" | "portrait" | AnyString
    overflowBlock?: "none" | "optional-paged" | "paged" | "scroll" | AnyString
    overflowInline?: "none" | "scroll" | AnyString
    pointer?: "coarse" | "fine" | "none" | AnyString
    prefersColorScheme?: "dark" | "light" | AnyString
    prefersContrast?: "custom" | "high" | "low" | "no-preference" | AnyString
    prefersReducedMotion?: "no-preference" | "reduce" | AnyString
    query?: AnyString
    resolution?: AnyString
    scan?: "interlace" | "progressive" | AnyString
    scripting?: "enabled" | "initial-only" | "none" | AnyString
    update?: "fast" | "none" | "slow" | AnyString
    videoDynamicRange?: "high" | "standard" | AnyString
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
  _mediaDark?: StyleValueWithCondition<CSSObject>
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
  _mediaLight?: StyleValueWithCondition<CSSObject>
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
  _mediaReduceMotion?: StyleValueWithCondition<CSSObject>
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
  _portrait?: StyleValueWithCondition<CSSObject>
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
  _print?: StyleValueWithCondition<CSSObject>
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
  _supports?: { css?: CSSObject; query?: AnyString }[]
}
