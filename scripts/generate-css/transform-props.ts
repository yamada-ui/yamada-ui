import type { PseudoSelectors, Transforms, Union } from "@yamada-ui/react"
import type { CSSProperties, UIProperties } from "."

export type TransformOptions =
  | Transforms
  | {
      transform: Transforms
      additionalTransform?: Union<Transforms>
      args?: string
    }

type TransformProp = {
  properties: CSSProperties | UIProperties
  transform: Union<Transforms>
}

type TransformProps = Partial<
  Record<
    Transforms,
    (CSSProperties | UIProperties | TransformProp | PseudoSelectors)[]
  >
>

export const transformProps: TransformProps = {
  px: [
    "fontSize",
    "margin",
    "marginTop",
    "marginBlockStart",
    "marginRight",
    "marginInlineEnd",
    "marginBottom",
    "marginBlockEnd",
    "marginLeft",
    "marginInlineStart",
    "marginInline",
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
    "paddingInline",
    "paddingBlock",
    "marginX",
    "marginY",
    "paddingX",
    "paddingY",
    "gap",
    "rowGap",
    "columnGap",
    "gridColumnGap",
    "gridRowGap",
    "flexBasis",
    "scrollMargin",
    "scrollMarginTop",
    "scrollMarginBottom",
    "scrollMarginLeft",
    "scrollMarginRight",
    "scrollMarginX",
    "scrollMarginY",
    "scrollPadding",
    "scrollPaddingTop",
    "scrollPaddingBottom",
    "scrollPaddingLeft",
    "scrollPaddingRight",
    "scrollPaddingX",
    "scrollPaddingY",
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
    "translateX",
    "translateY",
    "borderRadius",
    "borderTopRightRadius",
    "borderTopLeftRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
    "borderTopRadius",
    "borderBottomRadius",
    "borderRightRadius",
    "borderLeftRadius",
    "borderStartStartRadius",
    "borderStartEndRadius",
    "borderEndStartRadius",
    "borderEndEndRadius",
    "borderInlineStartRadius",
    "borderInlineEndRadius",
    "border",
    "borderTop",
    "borderLeft",
    "borderBottom",
    "borderRight",
    "borderInline",
    "borderInlineStart",
    "borderInlineEnd",
    "borderBlock",
    "borderBlockStart",
    "borderBlockEnd",
    "borderWidth",
    "borderTopWidth",
    "borderLeftWidth",
    "borderBottomWidth",
    "borderRightWidth",
    "borderInlineWidth",
    "borderInlineStartWidth",
    "borderInlineEndWidth",
    "borderBlockWidth",
    "borderBlockStartWidth",
    "borderBlockEndWidth",
    "borderImage",
    "borderImageWidth",
    "columnRule",
    "columnRuleWidth",
    "columnWidth",
    "containIntrinsicWidth",
    "maskBorderWidth",
    "outlineWidth",
    "scrollbarWidth",
    "strokeWidth",
  ],
  fraction: [
    { properties: "width", transform: "px" },
    { properties: "inlineSize", transform: "px" },
    { properties: "height", transform: "px" },
    { properties: "backfaceVisibility", transform: "px" },
    { properties: "blockSize", transform: "px" },
    { properties: "minWidth", transform: "px" },
    { properties: "minInlineSize", transform: "px" },
    { properties: "minHeight", transform: "px" },
    { properties: "minBlockSize", transform: "px" },
    { properties: "maxWidth", transform: "px" },
    { properties: "maxInlineSize", transform: "px" },
    { properties: "maxHeight", transform: "px" },
    { properties: "maxBlockSize", transform: "px" },
    { properties: "boxSize", transform: "px" },
    { properties: "minBoxSize", transform: "px" },
    { properties: "maxBoxSize", transform: "px" },
  ],
  content: ["&::before", "&::after"],
  bgClip: ["backgroundClip"],
  colorMix: [
    "color",
    "fill",
    "floodColor",
    "lightingColor",
    "stroke",
    "background",
    "backgroundColor",
    "caretColor",
    "accentColor",
    "outlineColor",
    "textDecorationColor",
    "textEmphasisColor",
    "outlineColor",
    "scrollbarColor",
    "borderColor",
    "borderTopColor",
    "borderLeftColor",
    "borderBottomColor",
    "borderRightColor",
    "borderInlineColor",
    "borderInlineStartColor",
    "borderInlineEndColor",
    "borderBlockColor",
    "borderBlockStartColor",
    "borderBlockEndColor",
    "columnRuleColor",
  ],
  gradient: [
    "backgroundImage",
    "borderImageSource",
    "listStyleImage",
    "maskImage",
  ],
  animation: ["animation"],
  transform: ["transform"],
  deg: ["rotate", "skewX", "skewY"],
}

export const transformMap = Object.entries(transformProps).reduce(
  (prev, [key, list]) => {
    list.forEach((item) => {
      if (typeof item === "string") {
        prev[item] = key as Transforms
      } else {
        const { properties, transform } = item
        prev[properties] = {
          transform: key as Transforms,
          additionalTransform: transform,
        }
      }
    })

    return prev
  },
  {} as Record<
    CSSProperties | UIProperties | PseudoSelectors,
    TransformOptions
  >,
)
