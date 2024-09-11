import type { PseudoSelector, Transforms } from "@yamada-ui/react"
import { tokens } from "./tokens"
import type { Properties } from "."

type TransformProperties = Properties | PseudoSelector

export type TransformOptions = {
  transform: Transforms
  args?: string[]
}

type TransformValue = {
  properties: TransformProperties
  args?: string[]
}

type TransformProps = Partial<
  Record<Transforms, (TransformProperties | TransformValue)[]>
>

export const transformProps: TransformProps = {
  colorMix: tokens.colors,
  gradient: tokens.gradients,
  animation: tokens.animations,
  bgClip: ["backgroundClip"],
  transform: ["transform"],
  filter: [
    { properties: "filter", args: [] },
    { properties: "backdropFilter", args: ["backdrop"] },
  ],
  content: ["&::before", "&::after"],
  styles: [
    { properties: "apply", args: [] },
    { properties: "layerStyle", args: ["layerStyles"] },
    { properties: "textStyle", args: ["textStyles"] },
  ],
  vars: ["vars"],
  isTruncated: ["isTruncated"],
  media: ["_media"],
  container: ["_container"],
  supports: ["_supports"],
  fraction: tokens.sizes,
  px: [
    ...(tokens.fontSizes ?? []),
    ...(tokens.spaces ?? []),
    ...(tokens.radii ?? []),
    ...(tokens.sizes ?? []),
    ...(tokens.borders ?? []),
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
    "borderImageWidth",
    "columnRule",
    "columnRuleWidth",
    "maskBorderWidth",
    "outlineWidth",
    "scrollbarWidth",
    "strokeWidth",
  ],
  deg: ["rotate", "skewX", "skewY", "hueRotate", "backdropHueRotate"],
  function: [
    { properties: "blur", args: ["blur"] },
    { properties: "brightness", args: ["brightness"] },
    { properties: "contrast", args: ["contrast"] },
    { properties: "dropShadow", args: ["drop-shadow"] },
    { properties: "grayscale", args: ["grayscale"] },
    { properties: "hueRotate", args: ["hue-rotate"] },
    { properties: "invert", args: ["invert"] },
    { properties: "saturate", args: ["saturate"] },
    { properties: "sepia", args: ["sepia"] },
    { properties: "backdropBlur", args: ["blur"] },
    { properties: "backdropBrightness", args: ["brightness"] },
    { properties: "backdropContrast", args: ["contrast"] },
    { properties: "backdropDropShadow", args: ["drop-shadow"] },
    { properties: "backdropGrayscale", args: ["grayscale"] },
    { properties: "backdropHueRotate", args: ["hue-rotate"] },
    { properties: "backdropInvert", args: ["invert"] },
    { properties: "backdropSaturate", args: ["saturate"] },
    { properties: "backdropSepia", args: ["sepia"] },
  ],
  grid: [
    "gridTemplateColumns",
    "gridTemplateRows",
    "gridAutoColumns",
    "gridAutoRows",
  ],
  calc: [
    ...(tokens.sizes
      ?.filter(
        (properties) =>
          ![
            "gridTemplateColumns",
            "gridTemplateRows",
            "gridAutoColumns",
            "gridAutoRows",
          ].includes(properties),
      )
      .map((properties) => ({ properties, args: ["sizes"] })) ?? []),
    ...(tokens.spaces?.map((properties) => ({
      properties,
      args: ["spaces"],
    })) ?? []),
    ...(tokens.radii?.map((properties) => ({ properties, args: ["radii"] })) ??
      []),
    ...(tokens.fontSizes?.map((properties) => ({
      properties,
      args: ["fontSizes"],
    })) ?? []),
  ],
}

export const transformMap = Object.entries(transformProps).reduce(
  (prev, [_transform, list]) => {
    const transform = _transform as Transforms

    list.forEach((item) => {
      if (typeof item === "string") {
        prev[item] ??= []
        prev[item].push({ transform })
      } else {
        const { properties, args } = item

        prev[properties] ??= []
        prev[properties].push({ transform, args })
      }
    })

    return prev
  },
  {} as Record<TransformProperties, TransformOptions[]>,
)
