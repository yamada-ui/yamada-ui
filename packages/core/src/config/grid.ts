import type { Dict } from "@yamada-ui/utils"
import type { CSSFunction } from "../css"
import type { StyledTheme } from "../theme.types"
import { generateCalc } from "./calc"
import {
  getCSSFunction,
  globalValues,
  isCSSFunction,
  splitValues,
} from "./utils"

const repeats: { [key: string]: string } = {
  fill: "auto-fill",
  fit: "auto-fit",
}

export function grid(
  value: any,
  theme: StyledTheme,
  css: CSSFunction,
  prev?: Dict,
) {
  if (value == null || globalValues.has(value)) return value

  const values = splitValues(value, (current) => current === " ")

  if (!values.length) return value

  const computedValues = values.map((value) => {
    const prevent = isCSSFunction(value)

    if (!prevent) {
      const token = `sizes.${value}`

      return theme.__cssMap && token in theme.__cssMap
        ? theme.__cssMap[token].ref
        : value
    }

    const { type, values } = getCSSFunction(value)

    if (!type || !values) return value

    if (type === "repeat") {
      let [repeat, tracks] = splitValues(values)

      repeat = repeat in repeats ? repeats[repeat] : repeat
      tracks = grid(tracks, theme, css, prev)

      return `repeat(${repeat}, ${tracks})`
    } else {
      return generateCalc("sizes")(value, theme, css, prev)
    }
  })

  return computedValues.join(" ")
}
