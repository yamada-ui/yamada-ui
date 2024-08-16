import type { StyledTheme } from "../theme.types"
import { globalValues, isCSSFunction, type Transform } from "./utils"

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

export const generateColorMix: Transform = (value, theme) => {
  if (value == null || globalValues.has(value)) return value

  const prevent = isCSSFunction(value)

  if (!prevent) return value

  const regex = /(^[a-z-A-Z]+)\((.*)\)/g
  const [, _type, values] = regex.exec(value) ?? []

  if ((_type !== "mix" && _type !== "color-mix") || !values) return value

  const type = _type.startsWith("color-") ? _type : `color-${_type}`

  let [color2, color1, method] = values
    .split(",")
    .map((arg) => arg.trim())
    .filter(Boolean)
    .reverse()

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
