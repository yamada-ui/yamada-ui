import type { ConditionSelector, Transforms } from "@yamada-ui/react"
import type { Properties } from "."
import { tokens } from "./tokens"

type TransformProperties = ConditionSelector | Properties

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

  keyframes: ["keyframes"],

  bgClip: ["backgroundClip"],

  content: ["&::before", "&::after"],

  style: [
    { args: [], properties: "apply" },
    { args: ["layerStyles"], properties: "layerStyle" },
    { args: ["textStyles"], properties: "textStyle" },
  ],

  truncated: ["truncated"],

  colorScheme: ["colorScheme"],

  focusRing: [
    {
      args: ["&:is(:focus, [data-focus])"],
      properties: "focusRing",
    },
    {
      args: ["&:is(:focus-visible, [data-focus-visible])"],
      properties: "focusVisibleRing",
    },
  ],

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

  deg: [
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skewX",
    "skewY",
    "hueRotate",
    "backdropHueRotate",
  ],

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
    { args: ["skewX"], properties: "skewX" },
    { args: ["skewY"], properties: "skewY" },
    { args: ["rotateX"], properties: "rotateX" },
    { args: ["rotateY"], properties: "rotateY" },
    { args: ["rotateZ"], properties: "rotateZ" },
    { args: ["scaleX"], properties: "scaleX" },
    { args: ["scaleY"], properties: "scaleY" },
    { args: ["scaleZ"], properties: "scaleZ" },
    { args: ["translateX"], properties: "translateX" },
    { args: ["translateY"], properties: "translateY" },
    { args: ["translateZ"], properties: "translateZ" },
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

  transform: [
    "skewX",
    "skewY",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scaleX",
    "scaleY",
    "scaleZ",
    "translateX",
    "translateY",
    "translateZ",
  ],

  filter: [
    { args: [], properties: "blur" },
    { args: [], properties: "brightness" },
    { args: [], properties: "contrast" },
    { args: [], properties: "dropShadow" },
    { args: [], properties: "grayscale" },
    { args: [], properties: "hueRotate" },
    { args: [], properties: "invert" },
    { args: [], properties: "saturate" },
    { args: [], properties: "sepia" },
    { args: ["backdropFilter"], properties: "backdropBlur" },
    { args: ["backdropFilter"], properties: "backdropBrightness" },
    { args: ["backdropFilter"], properties: "backdropContrast" },
    { args: ["backdropFilter"], properties: "backdropDropShadow" },
    { args: ["backdropFilter"], properties: "backdropGrayscale" },
    { args: ["backdropFilter"], properties: "backdropHueRotate" },
    { args: ["backdropFilter"], properties: "backdropInvert" },
    { args: ["backdropFilter"], properties: "backdropSaturate" },
    { args: ["backdropFilter"], properties: "backdropSepia" },
  ],

  transition: [
    { args: [], properties: "transition" },
    { args: ["property"], properties: "transitionProperty" },
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
