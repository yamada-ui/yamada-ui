import type { PseudoSelectors, Transforms, Union } from "@yamada-ui/react"
import { tokens } from "./tokens"
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
  fraction: tokens.sizes?.map((properties) => ({
    properties,
    transform: "px",
  })),
  content: ["&::before", "&::after"],
  bgClip: ["backgroundClip"],
  colorMix: tokens.colors,
  gradient: tokens.gradients,
  animation: tokens.animations,
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
