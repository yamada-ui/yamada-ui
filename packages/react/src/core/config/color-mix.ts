import type { Dict } from "../../utils"
import type { CSSFunction } from "../css"
import type { StyledTheme } from "../theme.types"
import {
  getCSSFunction,
  globalValues,
  isCSSFunction,
  splitValues,
} from "./utils"

const DEFAULT_METHOD = "in srgb"

const methods: { [key: string]: string } = {
  "a98-rgb": "in a98-rgb",
  "display-p3": "in display-p3",
  lab: "in lab",
  oklab: "in oklab",
  "prophoto-rgb": "in prophoto-rgb",
  rec2020: "in rec2020",
  srgb: "in srgb",
  "srgb-linear": "in srgb-linear",
  xyz: "in xyz",
  "xyz-d50": "in xyz-d50",
  "xyz-d65": "in xyz-d65",
}

function getColor(value: string | undefined, theme: StyledTheme) {
  if (!value) return ""

  let [color, percent, ...rest] = value.split(" ").filter(Boolean)

  if (rest.length) return value

  const token = `colors.${color}`

  color =
    theme.__cssMap && token in theme.__cssMap
      ? theme.__cssMap[token]?.ref
      : color?.startsWith(`--`)
        ? `var(${color})`
        : color

  if (percent && !percent.endsWith("%")) percent = `${percent}%`

  return !percent ? color : `${color} ${percent}`
}

export function colorMix(
  value: any,
  theme: StyledTheme,
  _css?: CSSFunction,
  _prev?: Dict,
) {
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

    default: {
      if (!values.includes("/")) return value

      const [color, percent] = values.split("/")

      const color1 = getColor(`${color} ${percent}`, theme)

      return `color-mix(${DEFAULT_METHOD}, ${color1}, transparent)`
    }
  }
}
