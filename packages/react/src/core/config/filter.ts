import type { CSSObject } from "../css"
import type { Transform } from "./utils"
import { toArray } from "../../utils"

export function generateFilter(
  type: "backdropFilter" | "filter" = "filter",
): Transform {
  return function (value, { prev, properties }) {
    const style: CSSObject = {}

    toArray(properties).forEach((property) => {
      style[type] = [prev?.[type] ?? "", `var(${property})`].join(" ")
      style[property] = value
    })

    return style
  }
}
