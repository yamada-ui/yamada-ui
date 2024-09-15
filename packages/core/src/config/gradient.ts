import { isArray } from "@yamada-ui/utils"
import type { Transform } from "./utils"
import {
  getCSSFunction,
  globalValues,
  isCSSFunction,
  splitValues,
} from "./utils"

const directions: Record<string, string> = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left",
}

const directionValues = new Set(Object.values(directions))

export const gradient: Transform = (value, theme) => {
  if (value == null || globalValues.has(value)) return value

  const prevent = isCSSFunction(value)

  if (!prevent) return `url('${value}')`

  let { type, values } = getCSSFunction(value)

  if (!type || !values) return value

  type = type.includes("-gradient") ? type : `${type}-gradient`

  const [maybeDirection, ...colors] = splitValues(values)

  if (!colors.length) return value

  const direction =
    maybeDirection in directions ? directions[maybeDirection] : maybeDirection

  colors.unshift(direction)

  const computedValues = colors.map((_color) => {
    if (directionValues.has(_color)) return _color

    const i = _color.indexOf(" ")

    let [color, _ratio] =
      i !== -1 ? [_color.slice(0, i), _color.slice(i + 1)] : [_color]

    const ratio = isCSSFunction(_ratio) ? _ratio : _ratio && _ratio.split(" ")

    const token = `colors.${color}`

    color =
      theme.__cssMap && token in theme.__cssMap
        ? theme.__cssMap[token].ref
        : color

    if (ratio) {
      return [color, ...(isArray(ratio) ? ratio : [ratio])].join(" ")
    } else {
      return color
    }
  })

  return `${type}(${computedValues.join(", ")})`
}
