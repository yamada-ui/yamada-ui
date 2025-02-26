import type { Dict } from "../../utils"
import type { ThemeToken } from "../theme"
import type { TransformOptions } from "./utils"
import { flattenObject, isArray, isObject, isUndefined } from "../../utils"
import { getVarName } from "../css"
import { colorMix } from "./color-mix"
import { tokenToVar } from "./utils"

function transformValue({ theme, ...rest }: TransformOptions) {
  return function (token: ThemeToken, value: Dict) {
    if (token === "colors") value = colorMix(value, { theme, ...rest })

    return tokenToVar(theme)(token, value)
  }
}

function insertObject(obj: Dict, segments: string[], value: any): any {
  if (segments.length === 0) return value

  const [head, ...rest] = segments

  if (!isUndefined(head)) obj[head] = insertObject(obj[head] ?? {}, rest, value)

  return obj
}

function valueToToken(options: TransformOptions) {
  return function (token: ThemeToken, value: Dict) {
    const flattedObj = flattenObject(value)

    return Object.entries(flattedObj).reduce<Dict>((prev, [path, value]) => {
      const segments = path.split(".")

      if (isArray(value)) {
        value = value.map((value) => transformValue(options)(token, value))
      } else {
        value = transformValue(options)(token, value)
      }

      insertObject(prev, segments, value)

      return prev
    }, {})
  }
}

function replaceValue(options: TransformOptions) {
  return function (token: ThemeToken | undefined, value: any) {
    if (!token) return value

    if (isObject(value)) {
      value = Object.entries(value).reduce<Dict>((prev, [key, value]) => {
        if (isObject(value)) {
          prev[key] = valueToToken(options)(token, value)
        } else if (isArray(value)) {
          prev[key] = value.map((value) => {
            if (isObject(value)) {
              return valueToToken(options)(token, value)
            } else {
              return transformValue(options)(token, value)
            }
          })
        } else {
          prev[key] = transformValue(options)(token, value)
        }

        return prev
      }, {})
    } else if (isArray(value)) {
      value = value.map((value) => {
        if (isObject(value)) {
          return valueToToken(options)(token, value)
        } else {
          return transformValue(options)(token, value)
        }
      })
    } else {
      value = transformValue(options)(token, value)
    }

    return value
  }
}

export function vars(values: any, { theme, ...rest }: TransformOptions) {
  if (!isArray(values)) return values

  return values.reduce<Dict>((prev, { name, token, value }) => {
    name = getVarName(theme)(name)

    prev[name] = replaceValue({ theme, ...rest })(token, value)

    return prev
  }, {})
}
