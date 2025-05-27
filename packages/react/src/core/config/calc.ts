import type { ThemeToken } from "../theme"
import type { Transform } from "./utils"
import { isNumeric } from "../../utils"
import {
  getCSSFunction,
  globalValues,
  isCSSFunction,
  isCSSToken,
  splitValues,
} from "./utils"

const OPERATORS = ["+", "-", "*", "/"]

function getValue(value: string | undefined, fallbackValue = ""): Transform {
  return function (token, { theme, ...rest }) {
    if (!value) return fallbackValue

    const prevent = isCSSFunction(value)

    if (prevent) {
      return generateCalc(token)(value, { theme, ...rest })
    } else {
      if (isNumeric(value)) return value

      const resolvedToken = `${token}.${value}`

      if (isCSSToken(theme)(resolvedToken)) {
        return theme.__cssMap![resolvedToken]!.ref
      } else {
        return value
      }
    }
  }
}

function isOperator(value: string) {
  return new RegExp(`\\s[${OPERATORS.join("\\")}]\\s`).test(value)
}

export function generateCalc(token: ThemeToken): Transform {
  return function (value, options) {
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
          if (value && OPERATORS.includes(value)) return value

          return getValue(value)(token, options)
        })

        return `calc(${computedValues.join(" ")})`
      }

      case "min":
      case "max": {
        let [firstValue, secondValue, ...otherValues] = splitValues(values)

        firstValue = getValue(firstValue, "100%")(token, options)
        secondValue = getValue(secondValue, "100%")(token, options)
        otherValues = otherValues.map((value) =>
          getValue(value)(token, options),
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

        min = getValue(min)(token, options)
        preferred = getValue(preferred, "100%")(token, options)
        max = getValue(max)(token, options)

        return `clamp(${min}, ${preferred}, ${max})`
      }

      case "minmax": {
        let [min, max] = splitValues(values)

        min = getValue(min)(token, options)
        max = getValue(max)(token, options)

        return `minmax(${min}, ${max})`
      }

      case "fit-content": {
        let [value] = splitValues(values)

        value = getValue(value)(token, options)

        return `fit-content(${value})`
      }

      default:
        return value
    }
  }
}
