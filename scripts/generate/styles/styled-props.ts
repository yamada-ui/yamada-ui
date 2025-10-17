import type { CSSObject } from "@emotion/react"
import type { AnyString } from "@yamada-ui/utils"
import type { CSSProperties } from "."

export interface StyleConfig {
  type?: string
  description?: string[]
  important?: boolean
  properties?: (AnyString | CSSProperties)[]
  static?: CSSObject
  variableLength?: boolean
}

export const additionalProps = {
  borderBottomRadius: {
    properties: ["borderBottomLeftRadius", "borderBottomRightRadius"],
  },
  borderInlineEndRadius: {
    properties: ["borderEndStartRadius", "borderEndEndRadius"],
  },
  borderInlineStartRadius: {
    properties: ["borderStartStartRadius", "borderStartEndRadius"],
  },
  borderLeftRadius: {
    properties: ["borderTopLeftRadius", "borderBottomLeftRadius"],
  },
  borderRightRadius: {
    properties: ["borderTopRightRadius", "borderBottomRightRadius"],
  },
  borderTopRadius: {
    properties: ["borderTopLeftRadius", "borderTopRightRadius"],
  },
  borderX: { properties: ["borderLeft", "borderRight"] },
  borderY: { properties: ["borderTop", "borderBottom"] },
  boxSize: { properties: ["width", "height"] },
  colorMode: {
    type: "CSS.Property.ColorScheme",
    properties: ["colorScheme"],
  },
  display: {
    type: "CSS.Property.Display | 'center' | 'inline-center' | 'absolute-center' | 'hidden'",
  },
  insetX: { properties: ["left", "right"] },
  insetY: { properties: ["top", "bottom"] },
  marginX: { properties: ["marginInlineStart", "marginInlineEnd"] },
  marginY: { properties: ["marginTop", "marginBottom"] },
  maxBoxSize: { properties: ["maxWidth", "maxHeight"] },
  minBoxSize: { properties: ["minWidth", "minHeight"] },
  paddingX: { properties: ["paddingInlineStart", "paddingInlineEnd"] },
  paddingY: { properties: ["paddingTop", "paddingBottom"] },
  scrollMarginX: { properties: ["scrollMarginLeft", "scrollMarginRight"] },
  scrollMarginY: { properties: ["scrollMarginTop", "scrollMarginBottom"] },
  scrollPaddingX: { properties: ["scrollPaddingLeft", "scrollPaddingRight"] },
  scrollPaddingY: { properties: ["scrollPaddingTop", "scrollPaddingBottom"] },
  transition: {
    type: "CSS.Property.Transition | 'all' | 'common' | 'colors' | 'size' | 'position' | 'backgrounds' | 'opacity' | 'shadow'",
  },
  transitionProperty: {
    type: "CSS.Property.TransitionProperty | 'all' | 'common' | 'colors' | 'size' | 'position' | 'backgrounds' | 'opacity' | 'shadow'",
  },

  focusRing: {
    type: "'outside' | 'inside' | 'mixed' | 'outline' | 'inline' | 'none'",
    description: [
      "The focus ring is used to identify the currently focused element.",
    ],
  },
  focusRingColor: {
    description: ["Sets the value of `--focus-ring-color`."],
    properties: ["--focus-ring-color"],
  },
  focusRingOffset: {
    description: ["Sets the value of `--focus-ring-offset`."],
    properties: ["--focus-ring-offset"],
  },
  focusRingStyle: {
    description: ["Sets the value of `--focus-ring-style`."],
    properties: ["--focus-ring-style"],
  },
  focusRingWidth: {
    description: ["Sets the value of `--focus-ring-width`."],
    properties: ["--focus-ring-width"],
  },
  focusVisibleRing: {
    type: "'outside' | 'inside' | 'mixed' | 'outline' | 'inline' | 'none'",
    description: [
      "The focus ring is used to identify the currently focused element.",
    ],
  },

  blur: {
    description: ["Sets the value of `--blur`."],
    properties: ["--blur"],
  },
  brightness: {
    description: ["Sets the value of `--brightness`."],
    properties: ["--brightness"],
  },
  contrast: {
    description: ["Sets the value of `--contrast`."],
    properties: ["--contrast"],
  },
  dropShadow: {
    description: ["Sets the value of `--drop-shadow`."],
    properties: ["--drop-shadow"],
  },
  grayscale: {
    description: ["Sets the value of `--grayscale`."],
    properties: ["--grayscale"],
  },
  hueRotate: {
    description: ["Sets the value of `--hue-rotate`."],
    properties: ["--hue-rotate"],
  },
  invert: {
    description: ["Sets the value of `--invert`."],
    properties: ["--invert"],
  },
  saturate: {
    description: ["Sets the value of `--saturate`."],
    properties: ["--saturate"],
  },
  sepia: {
    description: ["Sets the value of `--sepia`."],
    properties: ["--sepia"],
  },

  backdropBlur: {
    description: ["Sets the value of `--backdrop-blur`."],
    properties: ["--backdrop-blur"],
  },
  backdropBrightness: {
    description: ["Sets the value of `--backdrop-brightness`."],
    properties: ["--backdrop-brightness"],
  },
  backdropContrast: {
    description: ["Sets the value of `--backdrop-contrast`."],
    properties: ["--backdrop-contrast"],
  },
  backdropDropShadow: {
    description: ["Sets the value of `--backdrop-drop-shadow`."],
    properties: ["--backdrop-drop-shadow"],
  },
  backdropGrayscale: {
    description: ["Sets the value of `--backdrop-grayscale`."],
    properties: ["--backdrop-grayscale"],
  },
  backdropHueRotate: {
    description: ["Sets the value of `--backdrop-hue-rotate`."],
    properties: ["--backdrop-hue-rotate"],
  },
  backdropInvert: {
    description: ["Sets the value of `--backdrop-invert`."],
    properties: ["--backdrop-invert"],
  },
  backdropSaturate: {
    description: ["Sets the value of `--backdrop-saturate`."],
    properties: ["--backdrop-saturate"],
  },
  backdropSepia: {
    description: ["Sets the value of `--backdrop-sepia`."],
    properties: ["--backdrop-sepia"],
  },

  rotateX: {
    description: ["Sets the value of `--rotate-x`."],
    properties: ["--rotate-x"],
  },
  rotateY: {
    description: ["Sets the value of `--rotate-y`."],
    properties: ["--rotate-y"],
  },
  rotateZ: {
    description: ["Sets the value of `--rotate-z`."],
    properties: ["--rotate-z"],
  },
  scaleX: {
    description: ["Sets the value of `--scale-x`."],
    properties: ["--scale-x"],
  },
  scaleY: {
    description: ["Sets the value of `--scale-y`."],
    properties: ["--scale-y"],
  },
  scaleZ: {
    description: ["Sets the value of `--scale-z`."],
    properties: ["--scale-z"],
  },
  skewX: {
    description: ["Sets the value of `--skew-x`."],
    properties: ["--skew-x"],
  },
  skewY: {
    description: ["Sets the value of `--skew-y`."],
    properties: ["--skew-y"],
  },
  translateX: {
    description: ["Sets the value of `--translate-x`."],
    properties: ["--translate-x"],
  },
  translateY: {
    description: ["Sets the value of `--translate-y`."],
    properties: ["--translate-y"],
  },
  translateZ: {
    type: "AnyString | number",
    description: ["Sets the value of `--translate-z`."],
    properties: ["--translate-z"],
  },
} as const satisfies { [key: string]: StyleConfig }

export const styledProps = {
  apply: {
    type: `AnyString, "apply"`,
    description: ["Apply other styles defined in `theme.styles`."],
    important: true,
  },
  layerStyle: {
    type: `AnyString, "layerStyles"`,
    description: ["Apply layer styles defined in `theme.layerStyles`."],
    important: true,
  },
  textStyle: {
    type: `AnyString, "textStyles"`,
    description: ["Apply text styles defined in `theme.textStyles`."],
    important: true,
  },
  colorScheme: {
    type: `AnyString | ColorScheme`,
    description: ["Set color scheme variables."],
    important: true,
  },
  lineClamp: {
    type: "number",
    description: ["Used to visually truncate a text after a number of lines."],
    properties: ["--line-clamp"],
    static: {
      display: "-webkit-box",
      overflow: "hidden",
      textOverflow: "ellipsis",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "var(--line-clamp)",
    },
  },
  truncated: {
    type: "boolean",
    description: ["If `true`, it clamps truncate a text after one line."],
  },
} as const satisfies { [key: string]: StyleConfig }

export const atRuleProps = {
  _container: {
    type: `{ ${[
      "name?: AnyString",
      "query?: AnyString",
      'w?: CSS.Property.Width | number | ThemeTokens["sizes"]',
      'width?: CSS.Property.Width | number | ThemeTokens["sizes"]',
      'minW?: CSS.Property.MinWidth | number | ThemeTokens["sizes"]',
      'minWidth?: CSS.Property.MinWidth | number | ThemeTokens["sizes"]',
      'maxW?: CSS.Property.MaxWidth | number | ThemeTokens["sizes"]',
      'maxWidth?: CSS.Property.MaxWidth | number | ThemeTokens["sizes"]',
      'h?: CSS.Property.Height | number | ThemeTokens["sizes"]',
      'height?: CSS.Property.Height | number | ThemeTokens["sizes"]',
      'minH?: CSS.Property.MinHeight | number | ThemeTokens["sizes"]',
      'minHeight?: CSS.Property.MinHeight | number | ThemeTokens["sizes"]',
      'maxH?: CSS.Property.MaxHeight | number | ThemeTokens["sizes"]',
      'maxHeight?: CSS.Property.MaxHeight | number | ThemeTokens["sizes"]',
      "aspectRatio?: CSS.Property.AspectRatio",
      "minAspectRatio?: CSS.Property.AspectRatio",
      "maxAspectRatio?: CSS.Property.AspectRatio",
      'blockSize?: CSS.Property.BlockSize | number | ThemeTokens["sizes"]',
      'minBlockSize?: CSS.Property.MinBlockSize | number | ThemeTokens["sizes"]',
      'maxBlockSize?: CSS.Property.MaxBlockSize | number | ThemeTokens["sizes"]',
      'inlineSize?: CSS.Property.InlineSize | number | ThemeTokens["sizes"]',
      'minInlineSize?: CSS.Property.MinInlineSize | number | ThemeTokens["sizes"]',
      'maxInlineSize?: CSS.Property.MaxInlineSize | number | ThemeTokens["sizes"]',
      'orientation?: "portrait" | "landscape" | AnyString',
      "css?: CSSObject",
      "[key: string]: any",
    ].join(";")}}[]`,
    variableLength: true,
  },
  _keyframes: {
    type: "AnyString | { [key: string]: CSSObject }",
    properties: ["animationName"],
  },
  _landscape: {
    type: "CSSObject",
    properties: ["@media (orientation: landscape)"],
  },
  _media: {
    type: `{ ${[
      'type?: "all" | "print" | "screen" | "speech" | AnyString',
      "query?: AnyString",
      'w?: CSS.Property.Width | number | ThemeTokens["sizes"]',
      'width?: CSS.Property.Width | number | ThemeTokens["sizes"]',
      'minW?: CSS.Property.MinWidth | number | ThemeTokens["sizes"]',
      'minWidth?: CSS.Property.MinWidth | number | ThemeTokens["sizes"]',
      'maxW?: CSS.Property.MaxWidth | number | ThemeTokens["sizes"]',
      'maxWidth?: CSS.Property.MaxWidth | number | ThemeTokens["sizes"]',
      'h?: CSS.Property.Height | number | ThemeTokens["sizes"]',
      'height?: CSS.Property.Height | number | ThemeTokens["sizes"]',
      'minH?: CSS.Property.MinHeight | number | ThemeTokens["sizes"]',
      'minHeight?: CSS.Property.MinHeight | number | ThemeTokens["sizes"]',
      'maxH?: CSS.Property.MaxHeight | number | ThemeTokens["sizes"]',
      'maxHeight?: CSS.Property.MaxHeight | number | ThemeTokens["sizes"]',
      'anyHover?: "none" | "hover" | AnyString',
      'anyPointer?: "none" | "coarse" | "fine" | AnyString',
      "aspectRatio?: CSS.Property.AspectRatio",
      "color?: number | AnyString",
      "minColor?: number | AnyString",
      "maxColor?: number | AnyString",
      'colorGamut?: "srgb" | "p3" | "rec2020" | AnyString',
      "colorIndex?: number | AnyString",
      "minColorIndex?: number | AnyString",
      "maxColorIndex?: number | AnyString",
      "deviceAspectRatio?: CSS.Property.AspectRatio",
      "minDeviceAspectRatio?: CSS.Property.AspectRatio",
      "maxDeviceAspectRatio?: CSS.Property.AspectRatio",
      'deviceHeight?: CSS.Property.Height | number | ThemeTokens["sizes"]',
      'minDeviceHeight?: CSS.Property.MinHeight | number | ThemeTokens["sizes"]',
      'maxDeviceHeight?: CSS.Property.MaxHeight | number | ThemeTokens["sizes"]',
      'deviceWidth?: CSS.Property.Width | number | ThemeTokens["sizes"]',
      'minDeviceWidth?: CSS.Property.Width | number | ThemeTokens["sizes"]',
      'mazDeviceWidth?: CSS.Property.Width | number | ThemeTokens["sizes"]',
      'displayMode?: "browser" | "fullscreen" | "minimal-ui" | "picture-in-picture" | "standalone" | "window-controls-overlay" | AnyString',
      'dynamicRange?: "standard" | "high" | AnyString',
      'forcedColors?: "none" | "active" | AnyString',
      'grid?: 0 | 1 | "AnyString"',
      'hover?: "none" | "hover" | AnyString',
      'invertedColors?: "none" | "inverted" | AnyString',
      "monochrome?: number | AnyString",
      "minMonochrome?: number | AnyString",
      "maxMonochrome?: number | AnyString",
      'orientation?: "portrait" | "landscape" | AnyString',
      'overflowBlock?: "none" | "scroll" | "paged" | "optional-paged" | AnyString',
      'overflowInline?: "none" | "scroll" | AnyString',
      'pointer?: "none" | "coarse" | "fine" | AnyString',
      'prefersColorScheme?: "light" | "dark" | AnyString',
      'prefersContrast?: "no-preference" | "high" | "low" | "custom" | AnyString',
      'prefersReducedMotion?: "no-preference" | "reduce" | AnyString',
      "resolution?: AnyString",
      "minResolution?: AnyString",
      "maxResolution?: AnyString",
      'scan?: "interlace" | "progressive" | AnyString',
      'scripting?: "none" | "initial-only" | "enabled" | AnyString',
      'update?: "none" | "slow" | "fast" | AnyString',
      'videoDynamicRange?: "standard" | "high" | AnyString',
      "css?: CSSObject",
      "[key: string]: any",
    ].join(";")} }[]`,
    variableLength: true,
  },
  _mediaDark: {
    type: "CSSObject",
    properties: ["@media (prefers-color-scheme: dark)"],
  },
  _mediaLight: {
    type: "CSSObject",
    properties: ["@media (prefers-color-scheme: light)"],
  },
  _mediaReduceMotion: {
    type: "CSSObject",
    properties: ["@media (prefers-reduced-motion: reduce)"],
  },
  _portrait: {
    type: "CSSObject",
    properties: ["@media (orientation: portrait)"],
  },
  _print: {
    type: "CSSObject",
    properties: ["@media print"],
  },
  _supports: {
    type: `{ ${["query?: AnyString", "css?: CSSObject"].join(";")} }[]`,
    variableLength: true,
  },
} as const satisfies { [key: string]: StyleConfig }
