import type { StyledTheme } from "../theme.types"
import type { TransformOptions } from "./utils"
import { isArray } from "@yamada-ui/utils"
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

function createVariable(
  value: string,
  fallbackValue?: string,
  properties?: string | string[],
) {
  if (!properties) return value

  const key =
    "--mix-" + (isArray(properties) ? properties.join("-") : properties)

  const result = { [key]: value }

  if (isArray(properties)) {
    properties.forEach((property) => {
      result[property] = fallbackValue
        ? `var(${key}, ${fallbackValue})`
        : `var(${key})`
    })
  } else {
    result[properties] = fallbackValue
      ? `var(${key}, ${fallbackValue})`
      : `var(${key})`
  }

  return result
}

export function colorMix(value: any, { properties, theme }: TransformOptions) {
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

      return createVariable(
        `color-mix(${method}` +
          (color1 ? `, ${color1}` : "") +
          (color2 ? `, ${color2}` : "") +
          ")",
        color1,
        properties,
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

      return createVariable(
        `color-mix(${DEFAULT_METHOD}, ${color1}, ${color2})`,
        color1,
        properties,
      )
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

      return createVariable(
        `color-mix(${DEFAULT_METHOD}, ${color1} ${percent}, ${color2})`,
        color1,
        properties,
      )
    }

    default: {
      if (!values.includes("/")) return value

      const [color, percent] = values.split("/")
      const color1 = getColor(`${color} ${percent}`, theme)

      return createVariable(
        `color-mix(${DEFAULT_METHOD}, ${color1}, transparent)`,
        color1,
        properties,
      )
    }
  }
}
