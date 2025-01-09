import type { Dict } from "../../utils"
import type { ThemeToken } from "../theme"
import type { TransformOptions } from "./utils"
import { flattenObject, isArray, isObject, isUndefined } from "../../utils"
import { getVarName } from "../css"
import { colorMix } from "./color-mix"
import { tokenToVar } from "./utils"

function transformValue(token: ThemeToken, value: Dict) {
  return function ({ theme, ...rest }: TransformOptions) {
    if (token === "colors") value = colorMix(value, { theme, ...rest })

    return tokenToVar(token, value)(theme)
  }
}

function insertObject(obj: Dict, segments: string[], value: any): any {
  if (segments.length === 0) return value

  const [head, ...rest] = segments

  if (!isUndefined(head)) obj[head] = insertObject(obj[head] ?? {}, rest, value)

  return obj
}

function valueToToken(token: ThemeToken, value: Dict) {
  return function (options: TransformOptions) {
    const flattedObj = flattenObject(value)

    return Object.entries(flattedObj).reduce<Dict>((prev, [path, value]) => {
      const segments = path.split(".")

      if (isArray(value)) {
        value = value.map((value) => transformValue(token, value)(options))
      } else {
        value = transformValue(token, value)(options)
      }

      insertObject(prev, segments, value)

      return prev
    }, {})
  }
}

function replaceValue(token: ThemeToken | undefined, value: any) {
  return function (options: TransformOptions) {
    if (!token) return value

    if (isObject(value)) {
      value = Object.entries(value).reduce<Dict>((prev, [key, value]) => {
        if (isObject(value)) {
          prev[key] = valueToToken(token, value)(options)
        } else if (isArray(value)) {
          prev[key] = value.map((value) => {
            if (isObject(value)) {
              return valueToToken(token, value)(options)
            } else {
              return transformValue(token, value)(options)
            }
          })
        } else {
          prev[key] = transformValue(token, value)(options)
        }

        return prev
      }, {})
    } else if (isArray(value)) {
      value = value.map((value) => {
        if (isObject(value)) {
          return valueToToken(token, value)(options)
        } else {
          return transformValue(token, value)(options)
        }
      })
    } else {
      value = transformValue(token, value)(options)
    }

    return value
  }
}

export function vars(values: any, { theme, ...rest }: TransformOptions) {
  if (!isArray(values)) return values

  return values.reduce<Dict>((prev, { name, token, value, __prefix }) => {
    name = getVarName(name, __prefix)(theme)

    prev[name] = replaceValue(token, value)({ theme, ...rest })

    return prev
  }, {})
}
