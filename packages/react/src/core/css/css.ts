import type { Dict } from "../../utils"
import type { StyleConfig } from "../config"
import type { PseudoProperty } from "../pseudos"
import type { StyleProperty, VariableLengthProperty } from "../styles"
import type { StyledTheme, UsageTheme } from "../theme"
import type { Breakpoints } from "./breakpoint"
import type { CSSObjectOrFunc } from "./index.types"
import { isArray, isObject, isString, merge, runIfFunc } from "../../utils"
import { colorMix } from "../config"
import { pseudos } from "../pseudos"
import { styles, variableLengthProperties } from "../styles"
import { getColorSchemeVar, getVar, transformInterpolation } from "./var"

function isVariableLength(key: string): boolean {
  return variableLengthProperties.includes(key as VariableLengthProperty)
}

function isImportant(value: any): boolean {
  return isString(value) && /\s*!important\s*/g.test(value)
}

function omitImportant(value: any): string {
  return isString(value) ? value.replace(/\s*!important\s*/g, "") : value
}

function insertImportant(value: any, style?: StyleConfig): any {
  if (isString(value)) {
    return value + " !important"
  } else if (isObject(value)) {
    if (!style?.properties) return value

    if (isArray(style.properties)) {
      for (const property of style.properties) {
        value[property] += " !important"
      }
    } else {
      value[style.properties] += " !important"
    }
  }

  return value
}

function isAdditionalObject(obj: Dict) {
  return function (breakpointKeys: string[]): boolean {
    const keys = Object.keys(obj)

    if (!keys.length) return false

    if (!keys.includes("base")) return false

    return keys.every((key) => {
      return (
        breakpointKeys.includes(key) ||
        key.startsWith("@") ||
        key.startsWith("_")
      )
    })
  }
}

function expandColorModeArray(
  key: string,
  value: any[],
  breakpoints: Breakpoints,
): Dict {
  let computedCSS: Dict = {}

  if (breakpoints.isResponsive(value[0])) {
    computedCSS = expandResponsiveObject(key, value[0], breakpoints)
  } else {
    computedCSS[key] = value[0]
  }

  computedCSS[pseudos._dark] = { [key]: value[1] }

  return computedCSS
}

function expandResponsiveObject(
  key: string,
  value: Dict,
  breakpoints: Breakpoints,
): Dict {
  return breakpoints.queries.reduce<Dict>((prev, { breakpoint, query }) => {
    const breakpointValue = value[breakpoint]

    if (query) {
      if (breakpointValue) prev[query] = { [key]: breakpointValue }
    } else if (isArray(breakpointValue)) {
      prev = merge(
        prev,
        expandColorModeArray(key, breakpointValue, breakpoints),
      )
    } else {
      prev[key] = breakpointValue
    }

    return prev
  }, {})
}

function expandAdditionalObject(
  key: string,
  value: Dict,
  breakpoints: Breakpoints,
) {
  return Object.entries(value).reduce<Dict>((prev, [query, value]) => {
    if (query === "base") {
      if (isArray(value)) {
        prev = merge(prev, expandColorModeArray(key, value, breakpoints))
      } else {
        prev[key] = value
      }
    } else {
      query =
        breakpoints.queries.find(({ breakpoint }) => breakpoint === query)
          ?.query ?? query

      if (isObject(value)) {
        prev = merge(prev, {
          [query]: expandResponsiveObject(key, value, breakpoints),
        })
      } else if (isArray(value)) {
        prev = merge(prev, {
          [query]: expandColorModeArray(key, value, breakpoints),
        })
      } else {
        prev[query] = { [key]: value }
      }
    }

    return prev
  }, {})
}

function expandCSS(css: Dict) {
  return function (theme: StyledTheme<UsageTheme>): Dict {
    if (!theme.__breakpoints) return css

    const { isResponsive, keys } = theme.__breakpoints

    let computedCSS: Dict = {}

    for (let [key, value] of Object.entries(css)) {
      value = runIfFunc(value, theme)

      if (value == null) continue

      if (!isVariableLength(key) && isArray(value)) {
        computedCSS = merge(
          computedCSS,
          expandColorModeArray(key, value, theme.__breakpoints),
        )

        continue
      }

      if (!isVariableLength(key) && isObject(value) && isResponsive(value)) {
        computedCSS = merge(
          computedCSS,
          expandResponsiveObject(key, value, theme.__breakpoints),
        )

        continue
      }

      if (
        !isVariableLength(key) &&
        isObject(value) &&
        isAdditionalObject(value)(keys)
      ) {
        computedCSS = merge(
          computedCSS,
          expandAdditionalObject(key, value, theme.__breakpoints),
        )

        continue
      }

      computedCSS = merge(computedCSS, { [key]: value })
    }

    return computedCSS
  }
}

function valueToVar(value: any, theme: StyledTheme<UsageTheme>) {
  return transformInterpolation(value, (value) => {
    if (value.includes("colorScheme.")) {
      return getColorSchemeVar(value)(theme)
    } else if (value.includes("colors.")) {
      return colorMix(value, { theme })
    } else {
      if (
        isObject(theme.__cssMap) &&
        value in theme.__cssMap &&
        theme.__cssMap[value]?.ref
      )
        return theme.__cssMap[value].ref

      return getVar(value)(theme)
    }
  })
}

function mergeCSS(
  prev: Dict,
  value: any,
  prop: string,
  properties?: string | string[],
) {
  if (properties) {
    if (isArray(properties)) {
      for (const property of properties) {
        prev[property] = prev[property] ?? {}
        prev[property] = merge(prev[property], value)
      }
    } else {
      prev[properties] = prev[properties] ?? {}
      prev[properties] = merge(prev[properties], value)
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
  properties?: string | string[],
) {
  if (properties) {
    if (isArray(properties)) {
      for (const property of properties) {
        prev[property] = value
      }
    } else {
      prev[properties] = value
    }
  } else {
    prev[prop] = value
  }

  return prev
}

export function css(theme: StyledTheme<UsageTheme>) {
  return function (cssOrFunc: CSSObjectOrFunc) {
    function createCSS(cssOrFunc: CSSObjectOrFunc): Dict {
      const cssObj = runIfFunc(cssOrFunc, theme)
      const computedCSS = expandCSS(cssObj)(theme)

      let prev: Dict = {}

      for (let [prop, value] of Object.entries(computedCSS)) {
        value = valueToVar(value, theme)

        if (value == null) continue

        if (prop in pseudos) prop = pseudos[prop as PseudoProperty]

        let style = styles[prop as StyleProperty] as
          | StyleConfig
          | true
          | undefined

        if (style === true) style = { properties: prop }

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

    return createCSS(cssOrFunc)
  }
}

export type CSSFunction = typeof css
