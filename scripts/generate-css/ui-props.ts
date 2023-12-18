import type { CSSObject, Union } from "@yamada-ui/react"
import type { TransformOptions } from "./transform-props"
import type { CSSProperties } from "."

type UIProps = Partial<Record<string, UIOptions>>

export type UIOptions = {
  static?: CSSObject
  isProcessResult?: boolean
  properties?: Union<CSSProperties> | Union<CSSProperties>[]
  transform?: TransformOptions
  type?: string
  description?: string[]
  isSkip?: boolean
}

const createUIProps = <T extends UIProps>(props: T) => props

export const uiProps = createUIProps({
  marginX: { properties: ["marginInlineStart", "marginInlineEnd"] },
  marginY: { properties: ["marginTop", "marginBottom"] },
  paddingX: { properties: ["paddingInlineStart", "paddingInlineEnd"] },
  paddingY: { properties: ["paddingTop", "paddingBottom"] },
  scrollMarginX: { properties: ["scrollMarginLeft", "scrollMarginRight"] },
  scrollMarginY: { properties: ["scrollMarginTop", "scrollMarginBottom"] },
  scrollPaddingX: { properties: ["scrollPaddingLeft", "scrollPaddingRight"] },
  scrollPaddingY: { properties: ["scrollPaddingTop", "scrollPaddingBottom"] },
  insetX: { properties: ["left", "right"] },
  insetY: { properties: ["top", "bottom"] },
  borderY: { properties: ["borderTop", "borderBottom"] },
  borderX: { properties: ["borderLeft", "borderRight"] },
  borderTopRadius: {
    properties: ["borderTopLeftRadius", "borderTopRightRadius"],
  },
  borderBottomRadius: {
    properties: ["borderBottomLeftRadius", "borderBottomRightRadius"],
  },
  borderRightRadius: {
    properties: ["borderTopRightRadius", "borderBottomRightRadius"],
  },
  borderLeftRadius: {
    properties: ["borderTopLeftRadius", "borderBottomLeftRadius"],
  },
  borderInlineStartRadius: {
    properties: ["borderStartStartRadius", "borderStartEndRadius"],
  },
  borderInlineEndRadius: {
    properties: ["borderEndStartRadius", "borderEndEndRadius"],
  },
  boxSize: { properties: ["width", "height"] },
  translateX: {
    properties: "--ui-translate-x",
    description: [
      "If `transform=auto` or `transform=auto-3d`, sets the value of `--ui-translate-x`.",
    ],
  },
  translateY: {
    properties: "--ui-translate-y",
    description: [
      "If `transform=auto` or `transform=auto-3d`, sets the value of `--ui-translate-y`.",
    ],
  },
  scale: {
    properties: ["--ui-scale-x", "--ui-scale-y"],
    description: [
      "If `transform=auto` or `transform=auto-3d`, sets the value of `--ui-scale-x` and `--ui-scale-y`.",
    ],
  },
  scaleX: {
    properties: "--ui-scale-x",
    description: [
      "If `transform=auto` or `transform=auto-3d`, sets the value of `--ui-scale-x`.",
    ],
  },
  scaleY: {
    properties: "--ui-scale-y",
    description: [
      "If `transform=auto` or `transform=auto-3d`, sets the value of `--ui-scale-y`.",
    ],
  },
  rotate: {
    properties: "--ui-rotate",
    description: [
      "If `transform=auto` or `transform=auto-3d`, sets the value of `--ui-rotate`.",
    ],
  },
  skewX: {
    properties: "--ui-skew-x",
    description: [
      "If `transform=auto` or `transform=auto-3d`, sets the value of `--ui-skew-x`.",
    ],
  },
  skewY: {
    properties: "--ui-skew-y",
    description: [
      "If `transform=auto` or `transform=auto-3d`, sets the value of `--ui-skew-y`.",
    ],
  },
  filter: {
    transform: { transform: "filter" },
    type: `CSS.Property.Filter | "auto"`,
    description: ["The CSS `filter` property."],
  },
  blur: {
    properties: "--ui-blur",
    transform: { transform: "function", args: `"blur"` },
    description: ["If `filter=auto`, sets the value of `--ui-blur`."],
  },
  brightness: {
    properties: "--ui-brightness",
    transform: { transform: "function", args: `"brightness"` },
    description: ["If `filter=auto`, sets the value of `--ui-brightness`."],
  },
  contrast: {
    properties: "--ui-contrast",
    transform: { transform: "function", args: `"contrast"` },
    description: ["If `filter=auto`, sets the value of `--ui-contrast`."],
  },
  dropShadow: {
    properties: "--ui-drop-shadow",
    transform: { transform: "function", args: `"drop-shadow"` },
    description: ["If `filter=auto`, sets the value of `--ui-drop-shadow`."],
  },
  grayscale: {
    properties: "--ui-grayscale",
    transform: { transform: "function", args: `"grayscale"` },
    description: ["If `filter=auto`, sets the value of `--ui-grayscale`."],
  },
  hueRotate: {
    properties: "--ui-hue-rotate",
    transform: { transform: "function", args: `"hue-rotate", transforms.deg` },
    description: ["If `filter=auto`, sets the value of `--ui-hue-rotate`."],
  },
  invert: {
    properties: "--ui-invert",
    transform: { transform: "function", args: `"invert"` },
    description: ["If `filter=auto`, sets the value of `--ui-invert`."],
  },
  saturate: {
    properties: "--ui-saturate",
    transform: { transform: "function", args: `"saturate"` },
    description: ["If `filter=auto`, sets the value of `--ui-saturate`."],
  },
  sepia: {
    properties: "--ui-sepia",
    transform: { transform: "function", args: `"sepia"` },
    description: ["If `filter=auto`, sets the value of `--ui-sepia`."],
  },
  backdropFilter: {
    transform: { transform: "filter", args: `"backdrop"` },
    type: `CSS.Property.BackdropFilter | "auto"`,
    description: ["The CSS `backdrop-filter` property."],
  },
  backdropBlur: {
    properties: "--ui-backdrop-blur",
    transform: { transform: "function", args: `"blur"` },
    description: [
      "If `backdropBlur=auto`, sets the value of `--ui-backdrop-blur`.",
    ],
  },
  backdropBrightness: {
    properties: "--ui-backdrop-brightness",
    transform: { transform: "function", args: `"brightness"` },
    description: [
      "If `backdropBlur=auto`, sets the value of `--ui-backdrop-brightness`.",
    ],
  },
  backdropContrast: {
    properties: "--ui-backdrop-contrast",
    transform: { transform: "function", args: `"contrast"` },
    description: [
      "If `backdropBlur=auto`, sets the value of `--ui-backdrop-contrast`.",
    ],
  },
  backdropDropShadow: {
    properties: "--ui-backdrop-drop-shadow",
    transform: { transform: "function", args: `"drop-shadow"` },
    description: [
      "If `backdropBlur=auto`, sets the value of `--ui-backdrop-drop-shadow`.",
    ],
  },
  backdropGrayscale: {
    properties: "--ui-backdrop-grayscale",
    transform: { transform: "function", args: `"grayscale"` },
    description: [
      "If `backdropBlur=auto`, sets the value of `--ui-backdrop-grayscale`.",
    ],
  },
  backdropHueRotate: {
    properties: "--ui-backdrop-hue-rotate",
    transform: { transform: "function", args: `"hue-rotate", transforms.deg` },
    description: [
      "If `backdropBlur=auto`, sets the value of `--ui-backdrop-hue-rotate`.",
    ],
  },
  backdropInvert: {
    properties: "--ui-backdrop-invert",
    transform: { transform: "function", args: `"invert"` },
    description: [
      "If `backdropBlur=auto`, sets the value of `--ui-backdrop-invert`.",
    ],
  },
  backdropSaturate: {
    properties: "--ui-backdrop-saturate",
    transform: { transform: "function", args: `"saturate"` },
    description: [
      "If `backdropBlur=auto`, sets the value of `--ui-backdrop-saturate`.",
    ],
  },
  backdropSepia: {
    properties: "--ui-backdrop-sepia",
    transform: { transform: "function", args: `"sepia"` },
    description: [
      "If `backdropBlur=auto`, sets the value of `--ui-backdrop-sepia`.",
    ],
  },
  noOfLines: {
    static: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "var(--ui-line-clamp)",
    },
    properties: "--ui-line-clamp",
    type: "number",
    description: ["Used to visually truncate a text after a number of lines."],
    isSkip: true,
  },
  isTruncated: {
    transform: "isTruncated",
    type: "boolean",
    description: ["If `true`, it clamps truncate a text after one line."],
    isSkip: true,
  },
  layerStyle: {
    isProcessResult: true,
    transform: { transform: "styles", args: `"layerStyles"` },
    type: `StringLiteral, "layerStyles"`,
    description: ["Apply layer styles defined in `theme.layerStyles`."],
    isSkip: true,
  },
  textStyle: {
    isProcessResult: true,
    transform: { transform: "styles", args: `"textStyles"` },
    type: `StringLiteral, "textStyles"`,
    description: ["Apply text styles defined in `theme.textStyles`."],
    isSkip: true,
  },
  apply: {
    isProcessResult: true,
    transform: { transform: "styles" },
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
    isSkip: true,
  },
})
