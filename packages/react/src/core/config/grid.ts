import type { TransformOptions } from "./utils"
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

export function grid(value: any, { theme, ...rest }: TransformOptions) {
  if (value == null || globalValues.has(value)) return value

  const values = splitValues(value, (current) => current === " ")

  if (!values.length) return value

  const computedValues = values.map((value): string => {
    const prevent = isCSSFunction(value)

    if (!prevent) {
      const token = `sizes.${value}`

      return theme.__cssMap && token in theme.__cssMap
        ? (theme.__cssMap[token]?.ref ?? value)
        : value
    }

    const { type, values } = getCSSFunction(value)

    if (!type || !values) return value

    if (type === "repeat") {
      let [repeat, tracks] = splitValues(values)

      repeat = repeat && repeat in repeats ? repeats[repeat] : repeat
      tracks = grid(tracks, { theme, ...rest })

      return `repeat(${repeat}, ${tracks})`
    } else {
      return generateCalc("sizes")(value, { theme, ...rest })
    }
  })

  return computedValues.join(" ")
}
