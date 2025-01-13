import type { PseudoSelector, Transforms } from "@yamada-ui/react"
import type { Properties } from "."
import { tokens } from "./tokens"

type TransformProperties = Properties | PseudoSelector

export interface TransformOptions {
  transform: Transforms
  args?: string[]
}

interface TransformValue {
  properties: TransformProperties
  args?: string[]
}

type TransformProps = {
  [key in Transforms]?: (TransformProperties | TransformValue)[]
}

export const transformProps: TransformProps = {
  colorMix: tokens.colors,

  gradient: tokens.gradients,

  animation: tokens.animations,

  bgClip: ["backgroundClip"],

  transform: ["transform"],

  filter: [
    { args: [], properties: "filter" },
    { args: ["backdrop"], properties: "backdropFilter" },
  ],

  content: ["&::before", "&::after"],

  styles: [
    { args: [], properties: "apply" },
    { args: ["layerStyles"], properties: "layerStyle" },
    { args: ["textStyles"], properties: "textStyle" },
  ],

  vars: ["vars"],

  isTruncated: ["isTruncated"],

  colorScheme: ["colorScheme"],

  outline: ["outline"],

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
    { args: ["blur"], properties: "blur" },
    { args: ["brightness"], properties: "brightness" },
    { args: ["contrast"], properties: "contrast" },
    { args: ["drop-shadow"], properties: "dropShadow" },
    { args: ["grayscale"], properties: "grayscale" },
    { args: ["hue-rotate"], properties: "hueRotate" },
    { args: ["invert"], properties: "invert" },
    { args: ["saturate"], properties: "saturate" },
    { args: ["sepia"], properties: "sepia" },
    { args: ["blur"], properties: "backdropBlur" },
    { args: ["brightness"], properties: "backdropBrightness" },
    { args: ["contrast"], properties: "backdropContrast" },
    { args: ["drop-shadow"], properties: "backdropDropShadow" },
    { args: ["grayscale"], properties: "backdropGrayscale" },
    { args: ["hue-rotate"], properties: "backdropHueRotate" },
    { args: ["invert"], properties: "backdropInvert" },
    { args: ["saturate"], properties: "backdropSaturate" },
    { args: ["sepia"], properties: "backdropSepia" },
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
            "gridAutoColumns",
            "gridAutoRows",
            "gridTemplateColumns",
            "gridTemplateRows",
          ].includes(properties),
      )
      .map((properties) => ({ args: ["sizes"], properties })) ?? []),
    ...(tokens.spaces?.map((properties) => ({
      args: ["spaces"],
      properties,
    })) ?? []),
    ...(tokens.radii?.map((properties) => ({ args: ["radii"], properties })) ??
      []),
    ...(tokens.fontSizes?.map((properties) => ({
      args: ["fontSizes"],
      properties,
    })) ?? []),
  ],
}

export const transformMap = Object.entries(transformProps).reduce<{
  [key in TransformProperties]?: TransformOptions[]
}>((prev, [_transform, list]) => {
  const transform = _transform as Transforms

  list.forEach((item) => {
    if (typeof item === "string") {
      prev[item] ??= []
      prev[item].push({ transform })
    } else {
      const { args, properties } = item

      prev[properties] ??= []
      prev[properties].push({ args, transform })
    }
  })

  return prev
}, {})
