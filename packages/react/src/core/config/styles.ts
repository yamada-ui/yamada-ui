import type { Dict } from "../../utils"
import type { CSSObject } from "../css"
import type { Transform } from "./utils"
import { getMemoizedObject as get } from "../../utils"

export function generateStyles(prefix?: string): Transform {
  return function (value, { prev = {}, theme }) {
    const computedStyle: CSSObject = {}

    let style = get<Dict>(
      theme,
      prefix ? `styles.${prefix}.${value}` : `styles.${value}`,
      {},
    )

    if ("base" in style) style = style.base

    for (const prop in style) {
      const done = prop in prev && prev[prop] != null

      if (!done) computedStyle[prop] = style[prop]
    }

    return computedStyle
  }
}
