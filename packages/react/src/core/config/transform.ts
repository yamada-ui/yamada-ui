import type { CSSObject } from "../css"
import type { TransformOptions } from "./utils"
import { toArray } from "../../utils"

export function transform(value: any, { prev, properties }: TransformOptions) {
  const result: CSSObject = {}

  toArray(properties).forEach((property) => {
    result.transform = [prev?.transform ?? "", `var(${property})`].join(" ")
    result[property] = value
  })

  return result
}
