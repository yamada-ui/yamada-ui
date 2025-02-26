import type { CSSObject } from "../css"
import type { Transform } from "./utils"
import { isString } from "../../utils"

export function generateStyles(prefix?: string): Transform {
  return function (value, { prev = {}, theme }) {
    const result: CSSObject = {}

    let style: CSSObject = {}

    if (prefix) {
      style = theme.styles?.[prefix]?.[value] ?? {}
    } else if (isString(value)) {
      const [key, ...rest] = value.split(".")

      if (key) style = theme.styles?.[key]?.[rest.join(".")] ?? {}
    }

    for (const prop in style) {
      const done = prop in prev && prev[prop] != null

      if (!done) result[prop] = style[prop]
    }

    return result
  }
}
