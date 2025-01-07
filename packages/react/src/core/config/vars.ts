import type { Dict } from "../../utils"
import type { CSSFunction } from "../css"
import type { ThemeToken } from "../theme"
import type { StyledTheme } from "../theme.types"
import { flattenObject, isArray, isObject, isUndefined } from "../../utils"
import { getVarName } from "../css"
import { colorMix } from "./color-mix"
import { tokenToVar } from "./utils"

function transformValue(token: ThemeToken, value: Dict) {
  return function (theme: StyledTheme) {
    if (token === "colors") value = colorMix(value, theme)

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
  return function (theme: StyledTheme) {
    const flattedObj = flattenObject(value)

    return Object.entries(flattedObj).reduce<Dict>((prev, [path, value]) => {
      const segments = path.split(".")

      if (isArray(value)) {
        value = value.map((value) => transformValue(token, value)(theme))
      } else {
        value = transformValue(token, value)(theme)
      }

      insertObject(prev, segments, value)

      return prev
    }, {})
  }
}

function replaceValue(token: ThemeToken | undefined, value: any) {
  return function (theme: StyledTheme) {
    if (!token) return value

    if (isObject(value)) {
      value = Object.entries(value).reduce<Dict>((prev, [key, value]) => {
        if (isObject(value)) {
          prev[key] = valueToToken(token, value)(theme)
        } else if (isArray(value)) {
          prev[key] = value.map((value) => {
            if (isObject(value)) {
              return valueToToken(token, value)(theme)
            } else {
              return transformValue(token, value)(theme)
            }
          })
        } else {
          prev[key] = transformValue(token, value)(theme)
        }

        return prev
      }, {})
    } else if (isArray(value)) {
      value = value.map((value) => {
        if (isObject(value)) {
          return valueToToken(token, value)(theme)
        } else {
          return transformValue(token, value)(theme)
        }
      })
    } else {
      value = transformValue(token, value)(theme)
    }

    return value
  }
}

export function vars(
  values: any,
  theme: StyledTheme,
  _css?: CSSFunction,
  _prev?: Dict,
) {
  if (!isArray(values)) return values

  return values.reduce<Dict>((prev, { name, token, value, __prefix }) => {
    name = getVarName(name, __prefix)(theme)

    prev[name] = replaceValue(token, value)(theme)

    return prev
  }, {})
}
