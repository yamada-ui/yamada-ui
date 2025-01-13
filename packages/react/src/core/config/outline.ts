import type { CSSObject } from "../css"
import type { TransformOptions } from "./utils"

function getStyle(value: any): CSSObject {
  switch (value) {
    case "outside":
      return {
        outlineColor: "$colorScheme.outline",
        outlineOffset: "2px",
        outlineStyle: "solid",
        outlineWidth: "2px",
      }

    case "inside":
      return {
        borderColor: "$colorScheme.outline",
        outlineColor: "$colorScheme.outline",
        outlineOffset: "-2px",
        outlineStyle: "solid",
        outlineWidth: "2px",
      }

    case "mixed":
      return {
        borderColor: "$colorScheme.outline",
        outlineColor: "$colorScheme.outline/60",
        outlineStyle: "solid",
        outlineWidth: "2px",
      }

    default:
      return {}
  }
}

export function outline(value: any, { prev = {} }: TransformOptions) {
  const computedStyle: CSSObject = {}

  const style = getStyle(value)

  for (const prop in style) {
    const done = prop in prev && prev[prop] != null

    if (!done) computedStyle[prop] = style[prop]
  }

  return computedStyle
}
