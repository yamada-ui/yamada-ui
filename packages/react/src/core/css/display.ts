import type { TransformOptions } from "./utils"
import { visuallyHiddenAttributes } from "../../utils"

export function display(value: any, { prev }: TransformOptions) {
  switch (value) {
    case "center":
      return {
        display: "flex",
        placeContent: prev?.placeContent ?? "center",
        placeItems: prev?.placeItems ?? "center",
      }
    case "inline-center":
      return {
        display: "inline-flex",
        placeContent: prev?.placeContent ?? "center",
        placeItems: prev?.placeItems ?? "center",
      }
    case "hidden":
      return visuallyHiddenAttributes.style
    default:
      return value
  }
}
