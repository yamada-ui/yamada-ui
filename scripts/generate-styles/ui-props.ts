import type { EmotionCSSObject, Union } from "@yamada-ui/react"
import type { CSSProperties } from "."

export interface StyleConfig {
  type?: string
  description?: string[]
  properties?: Union<CSSProperties> | Union<CSSProperties>[]
  static?: EmotionCSSObject
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
    properties: "colorScheme",
  },
  insetX: { properties: ["left", "right"] },
  insetY: { properties: ["top", "bottom"] },
  marginX: { properties: ["marginInlineStart", "marginInlineEnd"] },
  marginY: { properties: ["marginTop", "marginBottom"] },
  maxBoxSize: { properties: ["maxWidth", "maxHeight"] },
  minBoxSize: { properties: ["minWidth", "minHeight"] },
  outline: {
    type: "CSS.Property.Outline | 'outside' | 'inside' | 'mixed'",
  },
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
    properties: "--focus-ring-color",
  },
  focusRingOffset: {
    description: ["Sets the value of `--focus-ring-offset`."],
    properties: "--focus-ring-offset",
  },
  focusRingStyle: {
    description: ["Sets the value of `--focus-ring-style`."],
    properties: "--focus-ring-style",
  },
  focusRingWidth: {
    description: ["Sets the value of `--focus-ring-width`."],
    properties: "--focus-ring-width",
  },
  focusVisibleRing: {
    type: "'outside' | 'inside' | 'mixed' | 'outline' | 'inline' | 'none'",
    description: [
      "The focus ring is used to identify the currently focused element.",
    ],
  },

  blur: {
    description: ["Sets the value of `--blur`."],
    properties: "--blur",
  },
  brightness: {
    description: ["Sets the value of `--brightness`."],
    properties: "--brightness",
  },
  contrast: {
    description: ["Sets the value of `--contrast`."],
    properties: "--contrast",
  },
  dropShadow: {
    description: ["Sets the value of `--drop-shadow`."],
    properties: "--drop-shadow",
  },
  grayscale: {
    description: ["Sets the value of `--grayscale`."],
    properties: "--grayscale",
  },
  hueRotate: {
    description: ["Sets the value of `--hue-rotate`."],
    properties: "--hue-rotate",
  },
  invert: {
    description: ["Sets the value of `--invert`."],
    properties: "--invert",
  },
  saturate: {
    description: ["Sets the value of `--saturate`."],
    properties: "--saturate",
  },
  sepia: {
    description: ["Sets the value of `--sepia`."],
    properties: "--sepia",
  },

  backdropBlur: {
    description: ["Sets the value of `--backdrop-blur`."],
    properties: "--backdrop-blur",
  },
  backdropBrightness: {
    description: ["Sets the value of `--backdrop-brightness`."],
    properties: "--backdrop-brightness",
  },
  backdropContrast: {
    description: ["Sets the value of `--backdrop-contrast`."],
    properties: "--backdrop-contrast",
  },
  backdropDropShadow: {
    description: ["Sets the value of `--backdrop-drop-shadow`."],
    properties: "--backdrop-drop-shadow",
  },
  backdropGrayscale: {
    description: ["Sets the value of `--backdrop-grayscale`."],
    properties: "--backdrop-grayscale",
  },
  backdropHueRotate: {
    description: ["Sets the value of `--backdrop-hue-rotate`."],
    properties: "--backdrop-hue-rotate",
  },
  backdropInvert: {
    description: ["Sets the value of `--backdrop-invert`."],
    properties: "--backdrop-invert",
  },
  backdropSaturate: {
    description: ["Sets the value of `--backdrop-saturate`."],
    properties: "--backdrop-saturate",
  },
  backdropSepia: {
    description: ["Sets the value of `--backdrop-sepia`."],
    properties: "--backdrop-sepia",
  },

  rotateX: {
    description: ["Sets the value of `--rotate-x`."],
    properties: "--rotate-x",
  },
  rotateY: {
    description: ["Sets the value of `--rotate-y`."],
    properties: "--rotate-y",
  },
  rotateZ: {
    description: ["Sets the value of `--rotate-z`."],
    properties: "--rotate-z",
  },
  scaleX: {
    description: ["Sets the value of `--scale-x`."],
    properties: "--scale-x",
  },
  scaleY: {
    description: ["Sets the value of `--scale-y`."],
    properties: "--scale-y",
  },
  scaleZ: {
    description: ["Sets the value of `--scale-z`."],
    properties: "--scale-z",
  },
  skewX: {
    description: ["Sets the value of `--skew-x`."],
    properties: "--skew-x",
  },
  skewY: {
    description: ["Sets the value of `--skew-y`."],
    properties: "--skew-y",
  },
  translateX: {
    description: ["Sets the value of `--translate-x`."],
    properties: "--translate-x",
  },
  translateY: {
    description: ["Sets the value of `--translate-y`."],
    properties: "--translate-y",
  },
  translateZ: {
    description: ["Sets the value of `--translate-z`."],
    properties: "--translate-z",
  },
} as const satisfies { [key: string]: StyleConfig }

export const uiProps = {
  apply: {
    type: `StringLiteral, "apply"`,
    description: [
      "Apply other styles defined in `theme.styles`.",
      "",
      "@example",
      "```jsx",
      "<Box apply='mdx.h1'>Box</Box>",
      "```",
      "",
      "This will apply styles defined in `theme.styles.mdx.h1`",
    ],
  },
  layerStyle: {
    type: `StringLiteral, "layerStyles"`,
    description: ["Apply layer styles defined in `theme.layerStyles`."],
  },
  textStyle: {
    type: `StringLiteral, "textStyles"`,
    description: ["Apply text styles defined in `theme.textStyles`."],
  },
  colorScheme: {
    type: `ColorScheme`,
    description: ["Set color scheme variables."],
  },
  lineClamp: {
    type: "number",
    description: ["Used to visually truncate a text after a number of lines."],
    properties: "--line-clamp",
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
  vars: {
    type: "{ name: string; token?: ThemeToken, value?: CSSToken<any> }[]",
    description: ["Set CSS variables."],
    variableLength: true,
  },
} as const satisfies { [key: string]: StyleConfig }

export const atRuleProps = {
  keyframes: {
    type: "StringLiteral | { [key: string]: CSSObject }",
    properties: "animationName",
  },
  _container: {
    type: `{ ${[
      "name?: StringLiteral",
      "query?: StringLiteral",
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
      'orientation?: "portrait" | "landscape" | StringLiteral',
      "css?: CSSObject",
      "[key: string]: any",
    ].join(";")}}[]`,
    variableLength: true,
  },
  _landscape: {
    type: "CSSObject",
    properties: "@media (orientation: landscape)",
  },
  _media: {
    type: `{ ${[
      'type?: "all" | "print" | "screen" | "speech" | StringLiteral',
      "query?: StringLiteral",
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
      'anyHover?: "none" | "hover" | StringLiteral',
      'anyPointer?: "none" | "coarse" | "fine" | StringLiteral',
      "aspectRatio?: CSS.Property.AspectRatio",
      "color?: number | StringLiteral",
      "minColor?: number | StringLiteral",
      "maxColor?: number | StringLiteral",
      'colorGamut?: "srgb" | "p3" | "rec2020" | StringLiteral',
      "colorIndex?: number | StringLiteral",
      "minColorIndex?: number | StringLiteral",
      "maxColorIndex?: number | StringLiteral",
      "deviceAspectRatio?: CSS.Property.AspectRatio",
      "minDeviceAspectRatio?: CSS.Property.AspectRatio",
      "maxDeviceAspectRatio?: CSS.Property.AspectRatio",
      'deviceHeight?: CSS.Property.Height | number | ThemeTokens["sizes"]',
      'minDeviceHeight?: CSS.Property.MinHeight | number | ThemeTokens["sizes"]',
      'maxDeviceHeight?: CSS.Property.MaxHeight | number | ThemeTokens["sizes"]',
      'deviceWidth?: CSS.Property.Width | number | ThemeTokens["sizes"]',
      'minDeviceWidth?: CSS.Property.Width | number | ThemeTokens["sizes"]',
      'mazDeviceWidth?: CSS.Property.Width | number | ThemeTokens["sizes"]',
      'displayMode?: "browser" | "fullscreen" | "minimal-ui" | "picture-in-picture" | "standalone" | "window-controls-overlay" | StringLiteral',
      'dynamicRange?: "standard" | "high" | StringLiteral',
      'forcedColors?: "none" | "active" | StringLiteral',
      'grid?: 0 | 1 | "StringLiteral"',
      'hover?: "none" | "hover" | StringLiteral',
      'invertedColors?: "none" | "inverted" | StringLiteral',
      "monochrome?: number | StringLiteral",
      "minMonochrome?: number | StringLiteral",
      "maxMonochrome?: number | StringLiteral",
      'orientation?: "portrait" | "landscape" | StringLiteral',
      'overflowBlock?: "none" | "scroll" | "paged" | "optional-paged" | StringLiteral',
      'overflowInline?: "none" | "scroll" | StringLiteral',
      'pointer?: "none" | "coarse" | "fine" | StringLiteral',
      'prefersColorScheme?: "light" | "dark" | StringLiteral',
      'prefersContrast?: "no-preference" | "high" | "low" | "custom" | StringLiteral',
      'prefersReducedMotion?: "no-preference" | "reduce" | StringLiteral',
      "resolution?: StringLiteral",
      "minResolution?: StringLiteral",
      "maxResolution?: StringLiteral",
      'scan?: "interlace" | "progressive" | StringLiteral',
      'scripting?: "none" | "initial-only" | "enabled" | StringLiteral',
      'update?: "none" | "slow" | "fast" | StringLiteral',
      'videoDynamicRange?: "standard" | "high" | StringLiteral',
      "css?: CSSObject",
      "[key: string]: any",
    ].join(";")} }[]`,
    variableLength: true,
  },
  _mediaDark: {
    type: "CSSObject",
    properties: "@media (prefers-color-scheme: dark)",
  },
  _mediaLight: {
    type: "CSSObject",
    properties: "@media (prefers-color-scheme: light)",
  },
  _mediaReduceMotion: {
    type: "CSSObject",
    properties: "@media (prefers-reduced-motion: reduce)",
  },
  _portrait: {
    type: "CSSObject",
    properties: "@media (orientation: portrait)",
  },
  _print: {
    type: "CSSObject",
    properties: "@media print",
  },
  _supports: {
    type: `{ ${["query?: StringLiteral", "css?: CSSObject"].join(";")} }[]`,
    variableLength: true,
  },
} as const satisfies { [key: string]: StyleConfig }
