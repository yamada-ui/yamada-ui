import type { System } from "../system"
import type { TransformOptions } from "./utils"
import { isArray, isString } from "../../utils"
import { getColorSchemeVar, isColorScheme } from "../system"
import { getCSSFunction, globalValues, splitValues, tokenToVar } from "./utils"

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

function getColor(system: System) {
  return function (value: string | undefined, fallbackColor?: string) {
    if (!isString(value) || !value) return ""

    let [color, percent, ...rest] = value.split(" ").filter(Boolean)

    if (rest.length) return value

    if (color?.startsWith("colors.")) color = color.replace("colors.", "")

    if (isColorScheme(color)) {
      color = getColorSchemeVar(system)(color)
    } else {
      color = tokenToVar(system)("colors", color, fallbackColor)
    }

    if (percent && !percent.endsWith("%")) percent = `${percent}%`

    return !percent ? color : `${color} ${percent}`
  }
}

function omitPercent(value?: string) {
  if (value?.endsWith("%")) return value.replace(/\d{1,3}%$/, "")

  return value
}

function createVariable(
  value: string,
  fallbackValue?: string,
  properties?: string[],
) {
  if (!properties) return value

  const key =
    "--mix-" + (isArray(properties) ? properties.join("-") : properties)

  const result = { [key]: value }

  properties.forEach((property) => {
    result[property] = fallbackValue
      ? `var(${key}, ${fallbackValue})`
      : `var(${key})`
  })

  return result
}

export function colorMix(
  value: any,
  { fallback, properties, system }: TransformOptions,
) {
  if (value == null || globalValues.has(value)) return value

  if (isString(value) && value.includes("/")) {
    const [color, percent] = value.split("/")

    value = `transparentize(${color}, ${percent})`
  }

  const { type, values } = getCSSFunction(value)

  if (!values) return getColor(system)(value, fallback)

  switch (type) {
    case "mix":
    case "color-mix": {
      let [color2, color1, method] = splitValues(values).reverse()

      if (method) {
        method = method in methods ? methods[method] : method
      } else {
        method = DEFAULT_METHOD
      }

      color1 = getColor(system)(color1, fallback)
      color2 = getColor(system)(color2, fallback)

      return createVariable(
        `color-mix(${method}` +
          (color1 ? `, ${color1}` : "") +
          (color2 ? `, ${color2}` : "") +
          ")",
        omitPercent(color1),
        properties,
      )
    }

    case "tint":
    case "shade":
    case "transparentize": {
      const [color, percent] = splitValues(values)

      const color1 = getColor(system)(
        percent ? `${color} ${percent}` : color,
        fallback,
      )
      const color2 =
        type === "transparentize"
          ? "transparent"
          : type === "tint"
            ? "#fff"
            : "#000"

      return createVariable(
        `color-mix(${DEFAULT_METHOD}, ${color1}, ${color2})`,
        omitPercent(color1),
        properties,
      )
    }

    case "tone": {
      const [color, tone] = splitValues(values)

      const color1 = getColor(system)(color, fallback)

      if (!tone) return color1

      let ratio = parseInt(tone) || 500

      if (ratio < 50 && 950 < ratio) ratio = 500
      if (ratio === 500) return color1

      const color2 = ratio < 500 ? "#fff" : "#000"
      const percent = `${100 - (Math.abs(ratio - 500) * 2) / 10}%`

      return createVariable(
        `color-mix(${DEFAULT_METHOD}, ${color1} ${percent}, ${color2})`,
        omitPercent(color1),
        properties,
      )
    }

    default: {
      return value
    }
  }
}
