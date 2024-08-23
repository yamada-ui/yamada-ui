import type { StyledTheme } from "../theme.types"
import {
  getCSSFunction,
  globalValues,
  isCSSFunction,
  splitValues,
  type Transform,
} from "./utils"

const DEFAULT_METHOD = "in srgb"

const methods: Record<string, string> = {
  srgb: "in srgb",
  "srgb-linear": "in srgb-linear",
  "display-p3": "in display-p3",
  "a98-rgb": "in a98-rgb",
  "prophoto-rgb": "in prophoto-rgb",
  rec2020: "in rec2020",
  lab: "in lab",
  oklab: "in oklab",
  xyz: "in xyz",
  "xyz-d50": "in xyz-d50",
  "xyz-d65": "in xyz-d65",
}

const getColor = (value: string | undefined, theme: StyledTheme) => {
  if (!value) return ""

  let [color, percent, ...rest] = value.split(" ").filter(Boolean)

  if (rest.length) return value

  const token = `colors.${color}`

  color = token in theme.__cssMap ? theme.__cssMap[token].ref : color

  if (percent && !percent.endsWith("%")) percent = `${percent}%`

  return !percent ? color : `${color} ${percent}`
}

export const colorMix: Transform = (value, theme) => {
  if (value == null || globalValues.has(value)) return value

  const prevent = isCSSFunction(value)

  if (!prevent) return value

  const { type, values } = getCSSFunction(value)

  if (!values) return value

  switch (type) {
    case "mix":
    case "color-mix": {
      let [color2, color1, method] = splitValues(values).reverse()

      if (method) {
        method = method in methods ? methods[method] : method
      } else {
        method = DEFAULT_METHOD
      }

      color1 = getColor(color1, theme)
      color2 = getColor(color2, theme)

      return (
        `color-mix(${method}` +
        (color1 ? `, ${color1}` : "") +
        (color2 ? `, ${color2}` : "") +
        ")"
      )
    }

    case "tint":
    case "shade":
    case "transparentize": {
      const [color, percent] = splitValues(values)

      const color1 = getColor(`${color} ${percent}`, theme)
      const color2 =
        type === "transparentize"
          ? "transparent"
          : type === "tint"
            ? "#fff"
            : "#000"

      return `color-mix(${DEFAULT_METHOD}, ${color1}, ${color2})`
    }

    case "tone": {
      const [color, tone] = splitValues(values)

      const color1 = getColor(color, theme)

      if (!tone) return color1

      let ratio = parseInt(tone) || 500

      if (ratio < 50 && 950 < ratio) ratio = 500

      if (ratio === 500) return color1

      const color2 = ratio < 500 ? "#fff" : "#000"

      const percent = `${100 - (Math.abs(ratio - 500) * 2) / 10}%`

      return `color-mix(${DEFAULT_METHOD}, ${color1} ${percent}, ${color2})`
    }

    default:
      return value
  }
}
