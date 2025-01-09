import type { Dict } from "../../utils"
import type { Transform } from "./utils"
import { getMemoizedObject as get } from "../../utils"

export function generateStyles(prefix?: string): Transform {
  return function (value, { prev = {}, theme }) {
    const resolvedCSS: Dict = {}

    const style = get<Dict>(
      theme,
      prefix ? `styles.${prefix}.${value}` : `styles.${value}`,
      {},
    )

    for (const prop in style) {
      const done = prop in prev && prev[prop] != null

      if (!done) resolvedCSS[prop] = style[prop]
    }

    return resolvedCSS
  }
}
