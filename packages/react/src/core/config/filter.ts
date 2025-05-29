import type { Dict } from "../../utils"
import type { CSSObject } from "../css"
import type { Transform } from "./utils"

export function generateFilter(
  type: "backdropFilter" | "filter" = "filter",
): Transform {
  return function (value, { prev, properties }) {
    const result: Dict = {}

    properties?.forEach((property) => {
      result[type] = [prev?.[type] ?? "", `var(${property})`].join(" ")
      result[property] = value
    })

    return result as CSSObject
  }
}
