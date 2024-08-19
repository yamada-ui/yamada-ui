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

  let [color, ratio, ...rest] = value.split(" ").filter(Boolean)

  if (rest.length) return value

  const token = `colors.${color}`

  color = token in theme.__cssMap ? theme.__cssMap[token].ref : color

  if (ratio && !ratio.endsWith("%")) ratio = `${ratio}%`

  return !ratio ? color : `${color} ${ratio}`
}

export const colorMix: Transform = (value, theme) => {
  if (value == null || globalValues.has(value)) return value

  const prevent = isCSSFunction(value)

  if (!prevent) return value

  let { type, values } = getCSSFunction(value)

  if ((type !== "mix" && type !== "color-mix") || !values) return value

  type = type.startsWith("color-") ? type : `color-${type}`

  let [color2, color1, method] = splitValues(values).reverse()

  if (method) {
    method = method in methods ? methods[method] : method
  } else {
    method = DEFAULT_METHOD
  }

  color1 = getColor(color1, theme)
  color2 = getColor(color2, theme)

  return (
    `${type}(${method}` +
    (color1 ? `, ${color1}` : "") +
    (color2 ? `, ${color2}` : "") +
    ")"
  )
}
