import type { Dict } from "@yamada-ui/utils"
import { getMemoizedObject as get } from "@yamada-ui/utils"
import type { Transform } from "./utils"

export function generateStyles(prefix?: string): Transform {
  return function (value, theme, _css, prev = {}) {
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
