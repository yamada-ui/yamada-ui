import type { Dict } from "../../utils"
import type { CSSObject } from "./index.types"
import type { TransformOptions } from "./utils"

export function transform(value: any, { prev, properties }: TransformOptions) {
  const result: Dict = {}

  properties?.forEach((property) => {
    result.transform = [prev?.transform ?? "", `var(${property})`].join(" ")
    result[property] = value
  })

  return result as CSSObject
}
