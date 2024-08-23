import { generateCalc } from "./calc"
import {
  getCSSFunction,
  globalValues,
  isCSSFunction,
  splitValues,
  type Transform,
} from "./utils"

const repeats: Record<string, string> = {
  fill: "auto-fill",
  fit: "auto-fit",
}

export const grid: Transform = (value, theme, ...rest) => {
  if (value == null || globalValues.has(value)) return value

  const values = splitValues(value, (current) => current === " ")

  if (!values.length) return value

  const computedValues = values.map((value) => {
    const prevent = isCSSFunction(value)

    if (!prevent) {
      const token = `sizes.${value}`

      return token in theme.__cssMap ? theme.__cssMap[token].ref : value
    }

    const { type, values } = getCSSFunction(value)

    if (!type || !values) return value

    if (type === "repeat") {
      let [repeat, tracks] = splitValues(values)

      repeat = repeat in repeats ? repeats[repeat] : repeat
      tracks = grid(tracks, theme, ...rest)

      return `repeat(${repeat}, ${tracks})`
    } else {
      return generateCalc("sizes")(value, theme, ...rest)
    }
  })

  return computedValues.join(" ")
}
