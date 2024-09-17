import { isNumeric } from "@yamada-ui/utils"
import type { ThemeToken } from "../theme"
import {
  getCSSFunction,
  globalValues,
  isCSSFunction,
  splitValues,
} from "./utils"
import type { Transform } from "./utils"

const OPERATORS = ["+", "-", "*", "/"]

function getValue(
  value: string | undefined,
  fallbackValue: string = "",
): Transform {
  return function (token, theme, ...rest) {
    if (!value) return fallbackValue

    const prevent = isCSSFunction(value)

    if (prevent) {
      return generateCalc(token)(value, theme, ...rest)
    } else {
      if (isNumeric(value)) return value

      const resolvedToken = `${token}.${value}`

      return theme.__cssMap && resolvedToken in theme.__cssMap
        ? theme.__cssMap[resolvedToken].ref
        : value
    }
  }
}

function isOperator(value: string) {
  return new RegExp(`\\s[${OPERATORS.join("\\")}]\\s`).test(value)
}

export function generateCalc(token: ThemeToken): Transform {
  return function (value, theme, ...rest) {
    if (value == null || globalValues.has(value)) return value

    const prevent = isCSSFunction(value)

    if (!prevent) return value

    let { type, values } = getCSSFunction(value)

    if (!type || !values) return value

    switch (type) {
      case "calc": {
        const computedValues = splitValues(
          values,
          (char, prev, next) => isOperator(`${prev}${char}${next}`),
          true,
        ).map((value) => {
          if (OPERATORS.includes(value)) return value

          return getValue(value)(token, theme, ...rest)
        })

        return `calc(${computedValues.join(" ")})`
      }

      case "min":
      case "max": {
        let [firstValue, secondValue, ...otherValues] = splitValues(values)

        firstValue = getValue(firstValue, "100%")(token, theme, ...rest)
        secondValue = getValue(secondValue, "100%")(token, theme, ...rest)
        otherValues = otherValues.map((value) =>
          getValue(value)(token, theme, ...rest),
        )

        return (
          `${type}(` +
          `${firstValue}, ${secondValue}` +
          (otherValues.length ? `, ${otherValues.join(", ")}` : "") +
          ")"
        )
      }

      case "clamp": {
        let [min, preferred, max] = splitValues(values)

        if (!max) {
          max = preferred
          preferred = ""
        }

        min = getValue(min)(token, theme, ...rest)
        preferred = getValue(preferred, "100%")(token, theme, ...rest)
        max = getValue(max)(token, theme, ...rest)

        return `clamp(${min}, ${preferred}, ${max})`
      }

      case "minmax": {
        let [min, max] = splitValues(values)

        min = getValue(min)(token, theme, ...rest)
        max = getValue(max)(token, theme, ...rest)

        return `minmax(${min}, ${max})`
      }

      case "fit-content": {
        let [value] = splitValues(values)

        value = getValue(value)(token, theme, ...rest)

        return `fit-content(${value})`
      }

      default:
        return value
    }
  }
}
