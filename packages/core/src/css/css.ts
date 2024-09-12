import type { Dict } from "@yamada-ui/utils"
import { isArray, isObject, isString, merge, runIfFunc } from "@yamada-ui/utils"
import type { StyleConfig } from "../config"
import { DEFAULT_VAR_PREFIX } from "../constant"
import type { PseudoProperty } from "../pseudos"
import { pseudos } from "../pseudos"
import type { ProcessSkipProperty, StyleProperty } from "../styles"
import { processSkipProperties, styles } from "../styles"
import type { StyledTheme } from "../theme.types"
import type { BreakpointQueries } from "./breakpoint"
import type { CSSObjectOrFunc, CSSUIObject } from "./css.types"

const isProcessSkip = (key: string) =>
  processSkipProperties.includes(key as ProcessSkipProperty)

const expandColorMode = (
  key: string,
  value: any[],
  queries: BreakpointQueries,
): Dict => {
  let computedCSS: Dict = {}

  if (isObject(value[0])) {
    computedCSS = expandResponsive(key, value[0], queries)
  } else {
    computedCSS[key] = value[0]
  }

  computedCSS[pseudos._dark] = { [key]: value[1] }

  return computedCSS
}

const expandResponsive = (
  key: string,
  value: Dict,
  queries: BreakpointQueries,
): Dict =>
  queries.reduce((prev, { breakpoint, query }) => {
    const breakpointValue = value[breakpoint]

    if (query) {
      if (breakpointValue) prev[query] = { [key]: breakpointValue }
    } else if (isArray(breakpointValue)) {
      prev = merge(prev, expandColorMode(key, breakpointValue, queries))
    } else {
      prev[key] = breakpointValue
    }

    return prev
  }, {} as Dict)

const expandCSS =
  (css: Dict) =>
  (theme: StyledTheme): Dict => {
    if (!theme.__breakpoints) return css

    const { isResponsive, queries } = theme.__breakpoints

    let computedCSS: Dict = {}

    for (let [key, value] of Object.entries(css)) {
      value = runIfFunc(value, theme)

      if (value == null) continue

      if (isArray(value) && !isProcessSkip(key)) {
        computedCSS = merge(computedCSS, expandColorMode(key, value, queries))

        continue
      }

      if (isObject(value) && isResponsive(value) && !isProcessSkip(key)) {
        computedCSS = merge(computedCSS, expandResponsive(key, value, queries))

        continue
      }

      computedCSS = merge(computedCSS, { [key]: value })
    }

    return computedCSS
  }

const parseVar = (value: any, theme: StyledTheme) => {
  if (isArray(value) || isObject(value)) {
    return value
  } else if (isString(value)) {
    const prefix = theme.__config?.var?.prefix ?? DEFAULT_VAR_PREFIX

    return value.replace(/\$([^,)/\s]+)/g, (_, value) => {
      if (isObject(theme.__cssMap) && value in theme.__cssMap) {
        return theme.__cssMap[value].ref
      } else {
        return `var(--${prefix}-${value})`
      }
    })
  } else {
    return value
  }
}

export const css =
  (cssOrFunc: CSSObjectOrFunc | CSSUIObject) =>
  (theme: StyledTheme, disableStyleProp?: (prop: string) => boolean) => {
    const createCSS = (
      cssOrFunc: CSSObjectOrFunc | CSSUIObject,
      isNested: boolean = false,
    ): Dict => {
      const cssObj = runIfFunc(cssOrFunc, theme)
      const computedCSS = expandCSS(cssObj)(theme)

      let resolvedCSS: Dict = {}

      for (let [prop, value] of Object.entries(computedCSS)) {
        if (disableStyleProp?.(prop)) continue

        value = runIfFunc(value, theme)
        value = parseVar(value, theme)

        if (value == null) continue

        if (prop in pseudos) prop = pseudos[prop as PseudoProperty]

        let style: StyleConfig | true | undefined =
          styles[prop as StyleProperty]

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

export type CSSFunction = typeof css
