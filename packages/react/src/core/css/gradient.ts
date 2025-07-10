import type { TransformOptions } from "./utils"
import { isArray, isUndefined } from "../../utils"
import {
  getCSSFunction,
  globalValues,
  isCSSFunction,
  isCSSToken,
  splitValues,
} from "./utils"

const directions: { [key: string]: string } = {
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-br": "to bottom right",
  "to-l": "to left",
  "to-r": "to right",
  "to-t": "to top",
  "to-tl": "to top left",
  "to-tr": "to top right",
}

const directionValues = new Set(Object.values(directions))

export function gradient(value: any, { system }: TransformOptions) {
  if (value == null || globalValues.has(value)) return value

  const prevent = isCSSFunction(value)

  if (!prevent) return `url('${value}')`

  let { type, values } = getCSSFunction(value)

  if (!type || !values) return value

  type = type.includes("-gradient") ? type : `${type}-gradient`

  const [maybeDirection, ...colors] = splitValues(values)

  if (!colors.length) return value

  const direction =
    maybeDirection && maybeDirection in directions
      ? directions[maybeDirection]
      : maybeDirection

  if (!isUndefined(direction)) colors.unshift(direction)

  const computedValues = colors.map((_color) => {
    if (isUndefined(_color)) return _color

    if (directionValues.has(_color)) return _color

    const i = _color.indexOf(" ")

    let [color, _ratio] =
      i !== -1 ? [_color.slice(0, i), _color.slice(i + 1)] : [_color]

    const ratio = isCSSFunction(_ratio) ? _ratio : _ratio?.split(" ")

    const token = `colors.${color}`

    color = isCSSToken(system)(token) ? system.cssMap![token]!.ref : color

    if (ratio) {
      return [color, ...(isArray(ratio) ? ratio : [ratio])].join(" ")
    } else {
      return color
    }
  })

  return `${type}(${computedValues.join(", ")})`
}
