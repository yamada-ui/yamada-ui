import type { Dict } from "../../utils"
import type { StyleConfig } from "../config"
import type { StyleProperty, VariableLengthProperty } from "../styles"
import type { StyledTheme, UsageTheme } from "../theme"
import type { Breakpoints } from "./breakpoint"
import type { CSSObjectOrFunction } from "./index.types"
import { isArray, isObject, isString, merge, runIfFn } from "../../utils"
import { conditions, getCondition } from "../conditions"
import { colorMix, isCSSToken } from "../config"
import { styles, variableLengthProperties } from "../styles"
import { getColorSchemeVar, getVar, transformInterpolation } from "./var"

function isVariableLength(key: string): boolean {
  return variableLengthProperties.includes(key as VariableLengthProperty)
}

function isImportant(value: any): boolean {
  return (
    isString(value) && (/\s*!important$/.test(value) || /\s*!$/.test(value))
  )
}

function omitImportant(value: any): string {
  return isString(value) ? value.replace(/(!important|!)$/, "").trim() : value
}

function insertImportant(value: any, style?: StyleConfig): any {
  if (isString(value)) {
    return value + " !important"
  } else if (isObject(value)) {
    if (!style?.properties) return value

    for (const property of style.properties) {
      value[property] += " !important"
    }
  }

  return value
}

function isConditionalObject(breakpoints: Breakpoints) {
  return function (value: any): boolean {
    if (!isObject(value)) return false

    const keys = Object.keys(value)

    if (!keys.length) return false

    if (!keys.includes("base")) return false

    return keys.every((key) => {
      return (
        breakpoints.isResponsiveKey(key) ||
        key.startsWith("@") ||
        key.startsWith("_")
      )
    })
  }
}

function transformColorModeArray(breakpoints: Breakpoints) {
  return function (key: string, [lightValue, darkValue]: any[]): Dict {
    let computedCSS: Dict = {}

    if (isConditionalObject(breakpoints)(lightValue)) {
      computedCSS = transformConditionalObject(breakpoints)(key, lightValue)
    } else {
      computedCSS[key] = lightValue
    }

    if (isConditionalObject(breakpoints)(darkValue)) {
      computedCSS[conditions._dark] = transformConditionalObject(breakpoints)(
        key,
        darkValue,
      )
    } else {
      computedCSS[conditions._dark] = { [key]: darkValue }
    }

    return computedCSS
  }
}

function transformConditionalObject(breakpoints: Breakpoints) {
  return function (key: string, value: Dict) {
    const conditionalKeys = Object.keys(value).filter(
      (key) => !breakpoints.isResponsiveKey(key),
    )

    const breakpointObj = breakpoints.queries.reduce<Dict>(
      (prev, { breakpoint, query }) => {
        const breakpointValue = value[breakpoint]

        if (breakpointValue) {
          if (isArray(breakpointValue)) {
            const colorModeValue = transformColorModeArray(breakpoints)(
              key,
              breakpointValue,
            )

            prev = merge(
              prev,
              query ? { [query]: colorModeValue } : colorModeValue,
            )
          } else if (isConditionalObject(breakpoints)(breakpointValue)) {
            const conditionalValue = transformConditionalObject(breakpoints)(
              key,
              breakpointValue,
            )

            prev = merge(
              prev,
              query ? { [query]: conditionalValue } : conditionalValue,
            )
          } else {
            prev = merge(
              prev,
              query
                ? { [query]: { [key]: breakpointValue } }
                : { [key]: breakpointValue },
            )
          }
        }

        return prev
      },
      {},
    )

    const additionalObj = conditionalKeys.reduce<Dict>(
      (prev, conditionalKey) => {
        const query = getCondition(conditionalKey)

        prev[query] = { [key]: value[conditionalKey] }

        return prev
      },
      {},
    )

    return { ...breakpointObj, ...additionalObj }
  }
}

export function transformConditionalValue(theme: StyledTheme<UsageTheme>) {
  return function (key: string, value: any) {
    const breakpoints = theme.__breakpoints

    if (!breakpoints) return { [key]: value }

    if (isArray(value)) {
      return transformColorModeArray(breakpoints)(key, value)
    } else if (isConditionalObject(breakpoints)(value)) {
      return transformConditionalObject(breakpoints)(key, value)
    } else {
      return { [key]: value }
    }
  }
}

function expandCSS(theme: StyledTheme<UsageTheme>) {
  return function (css: Dict): Dict {
    let computedCSS: Dict = {}

    for (let [key, value] of Object.entries(css)) {
      value = runIfFn(value, theme)

      if (value == null) continue

      if (!isVariableLength(key)) {
        computedCSS = merge(
          computedCSS,
          transformConditionalValue(theme)(key, value),
        )
      } else {
        computedCSS = merge(computedCSS, { [key]: value })
      }
    }

    return computedCSS
  }
}

function valueToVar(theme: StyledTheme<UsageTheme>) {
  return function (prop: string, value: any) {
    const result = transformInterpolation(
      value,
      function (value: string, fallbackValue?: string) {
        if (value.includes("colorScheme.")) {
          return getColorSchemeVar(theme)(value)
        } else if (value.includes("colors.")) {
          return colorMix(value, { fallback: fallbackValue, theme })
        } else if (isCSSToken(theme)(value)) {
          return theme.__cssMap![value]!.ref
        } else {
          return getVar(value.replace(".", "-"), fallbackValue)
        }
      },
    )

    if (prop.startsWith("--") && isString(result)) {
      if (result.includes("colorScheme.")) {
        return getColorSchemeVar(theme)(result)
      } else if (result.includes("colors.")) {
        return colorMix(result, { theme })
      } else if (isCSSToken(theme)(result)) {
        return theme.__cssMap![result]!.ref
      } else {
        return result
      }
    } else {
      return result
    }
  }
}

function mergeCSS(prev: Dict, value: any, prop: string, properties?: string[]) {
  if (properties) {
    for (const property of properties) {
      prev[property] = prev[property] ?? {}
      prev[property] = merge(prev[property], value)
    }
  } else {
    prev[prop] = prev[prop] ?? {}
    prev[prop] = merge(prev[prop], value)
  }

  return prev
}

function insertCSS(
  prev: Dict,
  value: any,
  prop: string,
  properties?: string[],
) {
  if (properties) {
    for (const property of properties) {
      prev[property] = value
    }
  } else {
    prev[prop] = value
  }

  return prev
}

export function getStyle(prop: string) {
  const style = styles[prop as StyleProperty] as StyleConfig | true | undefined

  return style === true ? { properties: [prop] } : style
}

export function css(theme: StyledTheme<UsageTheme>) {
  return function (cssOrFn: CSSObjectOrFunction) {
    function createCSS(cssOrFn: CSSObjectOrFunction): Dict {
      const cssObj = runIfFn(cssOrFn, theme)
      const computedCSS = expandCSS(theme)(cssObj)

      let prev: Dict = {}

      for (let [prop, value] of Object.entries(computedCSS)) {
        value = valueToVar(theme)(prop, value)

        if (value == null) continue

        prop = getCondition(prop)

        const style = getStyle(prop)
        const options = { css, prev, properties: style?.properties, theme }

        if (isObject(value)) {
          value = style?.transform?.(value, options) ?? value

          if (isObject(value)) {
            prev = mergeCSS(prev, createCSS(value), prop, style?.properties)
          } else {
            prev = insertCSS(prev, value, prop, style?.properties)
          }

          continue
        }

        const important = isImportant(value)

        value = omitImportant(value)
        value = style?.transform?.(value, options) ?? value

        if (important) value = insertImportant(value, style)

        if (style?.static) prev = merge(prev, style.static)

        if (isObject(value)) {
          prev = merge(prev, createCSS(value))

          continue
        }

        prev = insertCSS(prev, value, prop, style?.properties)
      }

      return prev
    }

    return createCSS(cssOrFn)
  }
}

export type CSSFunction = typeof css
