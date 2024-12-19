import type { Dict } from "../../utils"
import type { StyleConfig } from "../config"
import type { PseudoProperty } from "../pseudos"
import type { ProcessSkipProperty, StyleProperty } from "../styles"
import type { StyledTheme } from "../theme.types"
import type { BreakpointQueries } from "./breakpoint"
import type { CSSObjectOrFunc, CSSUIObject } from "./css.types"
import { isArray, isObject, isString, merge, runIfFunc } from "../../utils"
import { DEFAULT_VAR_PREFIX } from "../constant"
import { pseudos } from "../pseudos"
import { processSkipProperties, styles } from "../styles"

function isProcessSkip(key: string): boolean {
  return processSkipProperties.includes(key as ProcessSkipProperty)
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
  queries: BreakpointQueries,
): Dict {
  let computedCSS: Dict = {}

  if (isObject(value[0])) {
    computedCSS = expandResponsiveObject(key, value[0], queries)
  } else {
    computedCSS[key] = value[0]
  }

  computedCSS[pseudos._dark] = { [key]: value[1] }

  return computedCSS
}

function expandResponsiveObject(
  key: string,
  value: Dict,
  queries: BreakpointQueries,
): Dict {
  return queries.reduce<Dict>((prev, { breakpoint, query }) => {
    const breakpointValue = value[breakpoint]

    if (query) {
      if (breakpointValue) prev[query] = { [key]: breakpointValue }
    } else if (isArray(breakpointValue)) {
      prev = merge(prev, expandColorModeArray(key, breakpointValue, queries))
    } else {
      prev[key] = breakpointValue
    }

    return prev
  }, {})
}

function expandAdditionalObject(
  key: string,
  value: Dict,
  queries: BreakpointQueries,
) {
  return Object.entries(value).reduce<Dict>((prev, [query, value]) => {
    if (query === "base") {
      if (isArray(value)) {
        prev = merge(prev, expandColorModeArray(key, value, queries))
      } else {
        prev[key] = value
      }
    } else {
      query =
        queries.find(({ breakpoint }) => breakpoint === query)?.query ?? query

      if (isObject(value)) {
        prev = merge(prev, {
          [query]: expandResponsiveObject(key, value, queries),
        })
      } else if (isArray(value)) {
        prev = merge(prev, {
          [query]: expandColorModeArray(key, value, queries),
        })
      } else {
        prev[query] = { [key]: value }
      }
    }

    return prev
  }, {})
}

function expandCSS(css: Dict) {
  return function (theme: StyledTheme): Dict {
    if (!theme.__breakpoints) return css

    const { isResponsive, keys, queries } = theme.__breakpoints

    let computedCSS: Dict = {}

    for (let [key, value] of Object.entries(css)) {
      value = runIfFunc(value, theme)

      if (value == null) continue

      if (isArray(value) && !isProcessSkip(key)) {
        computedCSS = merge(
          computedCSS,
          expandColorModeArray(key, value, queries),
        )

        continue
      }

      if (isObject(value) && isResponsive(value) && !isProcessSkip(key)) {
        computedCSS = merge(
          computedCSS,
          expandResponsiveObject(key, value, queries),
        )

        continue
      }

      if (
        isObject(value) &&
        isAdditionalObject(value)(keys) &&
        !isProcessSkip(key)
      ) {
        computedCSS = merge(
          computedCSS,
          expandAdditionalObject(key, value, queries),
        )

        continue
      }

      computedCSS = merge(computedCSS, { [key]: value })
    }

    return computedCSS
  }
}

function valueToVar(value: any, theme: StyledTheme) {
  if (isArray(value) || isObject(value)) {
    return value
  } else if (isString(value)) {
    const prefix = theme.__config?.var?.prefix ?? DEFAULT_VAR_PREFIX

    return value.replace(/\$([^,)/\s]+)/g, (_, value) => {
      if (isObject(theme.__cssMap) && value in theme.__cssMap) {
        if (theme.__cssMap[value]?.ref) return theme.__cssMap[value].ref
      }

      return `var(--${prefix}-${value})`
    })
  } else {
    return value
  }
}

export function css(cssOrFunc: CSSObjectOrFunc | CSSUIObject) {
  return function (
    theme: StyledTheme,
    disableStyleProp?: (prop: string) => boolean,
  ) {
    function createCSS(
      cssOrFunc: CSSObjectOrFunc | CSSUIObject,
      isNested = false,
    ): Dict {
      const cssObj = runIfFunc(cssOrFunc, theme)
      const computedCSS = expandCSS(cssObj)(theme)

      let resolvedCSS: Dict = {}

      for (let [prop, value] of Object.entries(computedCSS)) {
        if (disableStyleProp?.(prop)) continue

        value = runIfFunc(value, theme)
        value = valueToVar(value, theme)

        if (value == null) continue

        if (prop in pseudos) prop = pseudos[prop as PseudoProperty]

        let style = styles[prop as StyleProperty] as
          | StyleConfig
          | true
          | undefined

        if (style === true) style = { properties: prop }

        if (isObject(value) && !style?.isProcessSkip) {
          value = style?.transform?.(value, theme, css, resolvedCSS) ?? value

          resolvedCSS[prop] = resolvedCSS[prop] ?? {}
          resolvedCSS[prop] = merge(resolvedCSS[prop], createCSS(value, true))

          continue
        }

        value = style?.transform?.(value, theme, css, resolvedCSS) ?? value

        if (style?.isProcessResult || style?.isProcessSkip)
          value = createCSS(value, true)

        if (!isNested && style?.static) {
          const staticStyles = runIfFunc(style.static, theme)

          resolvedCSS = merge(resolvedCSS, staticStyles)
        }

        const properties = runIfFunc(style?.properties, theme)

        if (properties) {
          if (isArray(properties)) {
            for (const property of properties) {
              resolvedCSS[property] = value
            }

            continue
          } else if (isObject(value)) {
            resolvedCSS = merge(resolvedCSS, value)

            continue
          } else {
            resolvedCSS[properties] = value

            continue
          }
        }

        if (isObject(value)) {
          resolvedCSS = merge(resolvedCSS, value)

          continue
        }

        resolvedCSS[prop] = value
      }

      return resolvedCSS
    }

    return createCSS(cssOrFunc)
  }
}

export type CSSFunction = typeof css
