import type { EmotionCSSObject, Union } from "@yamada-ui/react"
import type { CSSProperties } from "."

export interface StyleConfig {
  type?: string
  description?: string[]
  processResult?: boolean
  processSkip?: boolean
  properties?: Union<CSSProperties> | Union<CSSProperties>[]
  static?: EmotionCSSObject
}

export interface AtRuleConfig extends Omit<StyleConfig, "type"> {
  type?: string[]
}

export const additionalProps = {
  backdropBlur: {
    description: [
      "If `backdropBlur=auto`, sets the value of `--backdrop-blur`.",
    ],
    properties: "--backdrop-blur",
  },
  backdropBrightness: {
    description: [
      "If `backdropBlur=auto`, sets the value of `--backdrop-brightness`.",
    ],
    properties: "--backdrop-brightness",
  },
  backdropContrast: {
    description: [
      "If `backdropBlur=auto`, sets the value of `--backdrop-contrast`.",
    ],
    properties: "--backdrop-contrast",
  },
  backdropDropShadow: {
    description: [
      "If `backdropBlur=auto`, sets the value of `--backdrop-drop-shadow`.",
    ],
    properties: "--backdrop-drop-shadow",
  },
  backdropFilter: {
    type: `CSS.Property.BackdropFilter | "auto"`,
    description: [
      "The CSS `backdrop-filter` property.",
      "",
      "@see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter",
    ],
  },
  backdropGrayscale: {
    description: [
      "If `backdropBlur=auto`, sets the value of `--backdrop-grayscale`.",
    ],
    properties: "--backdrop-grayscale",
  },
  backdropHueRotate: {
    description: [
      "If `backdropBlur=auto`, sets the value of `--backdrop-hue-rotate`.",
    ],
    properties: "--backdrop-hue-rotate",
  },
  backdropInvert: {
    description: [
      "If `backdropBlur=auto`, sets the value of `--backdrop-invert`.",
    ],
    properties: "--backdrop-invert",
  },
  backdropSaturate: {
    description: [
      "If `backdropBlur=auto`, sets the value of `--backdrop-saturate`.",
    ],
    properties: "--backdrop-saturate",
  },
  backdropSepia: {
    description: [
      "If `backdropBlur=auto`, sets the value of `--backdrop-sepia`.",
    ],
    properties: "--backdrop-sepia",
  },
  blur: {
    description: ["If `filter=auto`, sets the value of `--blur`."],
    properties: "--blur",
  },
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
  brightness: {
    description: ["If `filter=auto`, sets the value of `--brightness`."],
    properties: "--brightness",
  },
  colorMode: {
    type: "CSS.Property.ColorScheme",
    description: [
      "The CSS `color-scheme` property.",
      "",
      "@see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme",
    ],
    properties: "colorScheme",
  },
  contrast: {
    description: ["If `filter=auto`, sets the value of `--contrast`."],
    properties: "--contrast",
  },
  dropShadow: {
    description: ["If `filter=auto`, sets the value of `--drop-shadow`."],
    properties: "--drop-shadow",
  },
  filter: {
    type: `CSS.Property.Filter | "auto"`,
    description: [
      "The CSS `filter` property.",
      "",
      "@see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/filter",
    ],
  },
  grayscale: {
    description: ["If `filter=auto`, sets the value of `--grayscale`."],
    properties: "--grayscale",
  },
  hueRotate: {
    description: ["If `filter=auto`, sets the value of `--hue-rotate`."],
    properties: "--hue-rotate",
  },
  insetX: { properties: ["left", "right"] },
  insetY: { properties: ["top", "bottom"] },
  invert: {
    description: ["If `filter=auto`, sets the value of `--invert`."],
    properties: "--invert",
  },
  marginX: { properties: ["marginInlineStart", "marginInlineEnd"] },
  marginY: { properties: ["marginTop", "marginBottom"] },
  maxBoxSize: { properties: ["maxWidth", "maxHeight"] },
  minBoxSize: { properties: ["minWidth", "minHeight"] },
  outline: {
    type: "CSS.Property.Filter | 'outside'| 'inside' | 'mixed'",
    description: [
      "The CSS `outline` property.",
      "",
      "@see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/outline",
    ],
    processResult: true,
  },
  paddingX: { properties: ["paddingInlineStart", "paddingInlineEnd"] },
  paddingY: { properties: ["paddingTop", "paddingBottom"] },
  rotate: {
    description: [
      "If `transform=auto` or `transform=auto-3d`, sets the value of `--rotate`.",
    ],
    properties: "--rotate",
  },
  saturate: {
    description: ["If `filter=auto`, sets the value of `--saturate`."],
    properties: "--saturate",
  },
  scale: {
    description: [
      "If `transform=auto` or `transform=auto-3d`, sets the value of `--scale-x` and `--scale-y`.",
    ],
    properties: ["--scale-x", "--scale-y"],
  },
  scaleX: {
    description: [
      "If `transform=auto` or `transform=auto-3d`, sets the value of `--scale-x`.",
    ],
    properties: "--scale-x",
  },
  scaleY: {
    description: [
      "If `transform=auto` or `transform=auto-3d`, sets the value of `--scale-y`.",
    ],
    properties: "--scale-y",
  },
  scrollMarginX: { properties: ["scrollMarginLeft", "scrollMarginRight"] },
  scrollMarginY: { properties: ["scrollMarginTop", "scrollMarginBottom"] },
  scrollPaddingX: { properties: ["scrollPaddingLeft", "scrollPaddingRight"] },
  scrollPaddingY: { properties: ["scrollPaddingTop", "scrollPaddingBottom"] },
  sepia: {
    description: ["If `filter=auto`, sets the value of `--sepia`."],
    properties: "--sepia",
  },
  skewX: {
    description: [
      "If `transform=auto` or `transform=auto-3d`, sets the value of `--skew-x`.",
    ],
    properties: "--skew-x",
  },
  skewY: {
    description: [
      "If `transform=auto` or `transform=auto-3d`, sets the value of `--skew-y`.",
    ],
    properties: "--skew-y",
  },
  translateX: {
    description: [
      "If `transform=auto` or `transform=auto-3d`, sets the value of `--translate-x`.",
    ],
    properties: "--translate-x",
  },
  translateY: {
    description: [
      "If `transform=auto` or `transform=auto-3d`, sets the value of `--translate-y`.",
    ],
    properties: "--translate-y",
  },
} as const satisfies { [key: string]: StyleConfig }

export const uiProps = {
  apply: {
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
    processResult: true,
  },
  layerStyle: {
    type: `StringLiteral, "layerStyles"`,
    description: ["Apply layer styles defined in `theme.layerStyles`."],
    processResult: true,
  },
  textStyle: {
    type: `StringLiteral, "textStyles"`,
    description: ["Apply text styles defined in `theme.textStyles`."],
    processResult: true,
  },
  colorScheme: {
    type: `ColorScheme`,
    description: ["Set color scheme variables."],
  },
  isTruncated: {
    type: "boolean",
    description: ["If `true`, it clamps truncate a text after one line."],
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
  vars: {
    type: "{ name: string; token?: ThemeToken, value?: Token<any> }[]",
    description: [
      "Set CSS variables.",
      "@experimental",
      "",
      "@example",
      "```jsx",
      "<Box",
      '  vars={[{ name:"space", token: "spaces", value: "md" }]',
      '  m="calc({space} * 2)"',
      ">",
      "  Box",
      "</Box>",
      "```",
    ],
    processSkip: true,
  },
} as const satisfies { [key: string]: StyleConfig }

export const atRuleProps = {
  _container: {
    type: [
      "name?: StringLiteral",
      "query?: StringLiteral",
      'w?: CSS.Property.Width | number | Theme["sizes"]',
      'width?: CSS.Property.Width | number | Theme["sizes"]',
      'minW?: CSS.Property.MinWidth | number | Theme["sizes"]',
      'minWidth?: CSS.Property.MinWidth | number | Theme["sizes"]',
      'maxW?: CSS.Property.MaxWidth | number | Theme["sizes"]',
      'maxWidth?: CSS.Property.MaxWidth | number | Theme["sizes"]',
      'h?: CSS.Property.Height | number | Theme["sizes"]',
      'height?: CSS.Property.Height | number | Theme["sizes"]',
      'minH?: CSS.Property.MinHeight | number | Theme["sizes"]',
      'minHeight?: CSS.Property.MinHeight | number | Theme["sizes"]',
      'maxH?: CSS.Property.MaxHeight | number | Theme["sizes"]',
      'maxHeight?: CSS.Property.MaxHeight | number | Theme["sizes"]',
      "aspectRatio?: CSS.Property.AspectRatio",
      "minAspectRatio?: CSS.Property.AspectRatio",
      "maxAspectRatio?: CSS.Property.AspectRatio",
      'blockSize?: CSS.Property.BlockSize | number | Theme["sizes"]',
      'minBlockSize?: CSS.Property.MinBlockSize | number | Theme["sizes"]',
      'maxBlockSize?: CSS.Property.MaxBlockSize | number | Theme["sizes"]',
      'inlineSize?: CSS.Property.InlineSize | number | Theme["sizes"]',
      'minInlineSize?: CSS.Property.MinInlineSize | number | Theme["sizes"]',
      'maxInlineSize?: CSS.Property.MaxInlineSize | number | Theme["sizes"]',
      'orientation?: "portrait" | "landscape" | StringLiteral',
      "css?: CSSObject",
      "[key: string]: any",
    ],
    description: [
      "The `@container` of CSS at-rule.",
      "@experimental",
      "",
      "@example",
      "```jsx",
      '<Box containerType="size">',
      '  <Text _container={[{ maxW: "1200px", css: { color: "red" } }]}>',
      "    Box",
      "  </Text>",
      "</Box>",
      "```",
    ],
    processSkip: true,
  },
  _media: {
    type: [
      'type?: "all" | "print" | "screen" | "speech" | StringLiteral',
      "query?: StringLiteral",
      'w?: CSS.Property.Width | number | Theme["sizes"]',
      'width?: CSS.Property.Width | number | Theme["sizes"]',
      'minW?: CSS.Property.MinWidth | number | Theme["sizes"]',
      'minWidth?: CSS.Property.MinWidth | number | Theme["sizes"]',
      'maxW?: CSS.Property.MaxWidth | number | Theme["sizes"]',
      'maxWidth?: CSS.Property.MaxWidth | number | Theme["sizes"]',
      'h?: CSS.Property.Height | number | Theme["sizes"]',
      'height?: CSS.Property.Height | number | Theme["sizes"]',
      'minH?: CSS.Property.MinHeight | number | Theme["sizes"]',
      'minHeight?: CSS.Property.MinHeight | number | Theme["sizes"]',
      'maxH?: CSS.Property.MaxHeight | number | Theme["sizes"]',
      'maxHeight?: CSS.Property.MaxHeight | number | Theme["sizes"]',
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
      'deviceHeight?: CSS.Property.Height | number | Theme["sizes"]',
      'minDeviceHeight?: CSS.Property.MinHeight | number | Theme["sizes"]',
      'maxDeviceHeight?: CSS.Property.MaxHeight | number | Theme["sizes"]',
      'deviceWidth?: CSS.Property.Width | number | Theme["sizes"]',
      'minDeviceWidth?: CSS.Property.Width | number | Theme["sizes"]',
      'mazDeviceWidth?: CSS.Property.Width | number | Theme["sizes"]',
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
    ],
    description: [
      "The `@media` of CSS at-rule.",
      "@experimental",
      "",
      "@example",
      "```jsx",
      "<Box",
      '  _media={[{ maxW: "1200px", css: { color: "red" } }]',
      ">",
      "  Box",
      "</Box>",
      "```",
    ],
    processSkip: true,
  },
  _supports: {
    type: ["query?: StringLiteral", "css?: CSSObject"],
    description: [
      "The `@supports` of CSS at-rule.",
      "@experimental",
      "",
      "@example",
      "```jsx",
      '<Box containerType="size">',
      '  <Text _supports={[{ display: "flex", css: { display: "flex" } }]}>',
      "    Box",
      "  </Text>",
      "</Box>",
      "```",
    ],
    processSkip: true,
  },
} as const satisfies { [key: string]: AtRuleConfig }
