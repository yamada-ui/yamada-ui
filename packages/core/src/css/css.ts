import type { Dict } from "@yamada-ui/utils"
import { isArray, isObject, merge, runIfFunc } from "@yamada-ui/utils"
import type { ConfigProps } from "../config"
import { pseudos } from "../pseudos"
import { processSkipProperties, styles } from "../styles"
import type { StyledTheme } from "../theme.types"
import type { BreakpointQueries } from "./breakpoint"
import type { CSSObjectOrFunc, CSSUIObject } from "./css.types"

const isProcessSkip = (key: string) => processSkipProperties.includes(key)

const expandColorMode = (key: string, value: any[]): Dict => ({
  [key]: value[0],
  [pseudos._dark]: {
    [key]: value[1],
  },
})

const expandResponsive = (
  key: string,
  value: Dict,
  queries: BreakpointQueries,
): Dict =>
  queries.reduce((prev, { breakpoint, query }) => {
    const breakpointValue = value[breakpoint]

    if (query) {
      if (breakpointValue) prev[query] = { [key]: breakpointValue }
    } else {
      prev[key] = value[breakpoint]
    }

    return prev
  }, {} as Dict)

const expandCSS =
  (css: Dict, isNested: boolean) =>
  (theme: StyledTheme): Dict => {
    if (!theme.__breakpoints) return css

    const { isResponsive, queries } = theme.__breakpoints

    let computedCSS: Dict = {}

    for (let [key, value] of Object.entries(css)) {
      value = runIfFunc(value, theme)

      if (value == null) continue

      if (isArray(value) && !(isProcessSkip(key) && !isNested)) {
        computedCSS = merge(computedCSS, expandColorMode(key, value))

        continue
      }

      if (
        isObject(value) &&
        isResponsive(value) &&
        !(isProcessSkip(key) && !isNested)
      ) {
        computedCSS = merge(computedCSS, expandResponsive(key, value, queries))

        continue
      }

      computedCSS[key] = value
    }

    return computedCSS
  }

const getCSS = ({
  theme,
  styles = {},
  pseudos = {},
  disableStyleProp,
}: {
  theme: StyledTheme
  styles: Dict
  pseudos: Dict
  disableStyleProp?: (prop: string) => boolean
}): ((cssOrFunc: CSSObjectOrFunc | CSSUIObject) => Dict) => {
  const createCSS = (
    cssOrFunc: CSSObjectOrFunc | CSSUIObject,
    isNested: boolean = false,
  ): Dict => {
    const cssObject = runIfFunc(cssOrFunc, theme)
    const computedCSS = expandCSS(cssObject, isNested)(theme)

    let resolvedCSS: Dict = {}

    for (let [prop, value] of Object.entries(computedCSS)) {
      if (disableStyleProp?.(prop)) continue

      value = runIfFunc(value, theme)

      if (value == null) continue

      if (prop in pseudos) prop = pseudos[prop]

      let style: ConfigProps | undefined | true = styles[prop]

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

  return createCSS
}

export const css =
  (cssOrFunc: CSSObjectOrFunc | CSSUIObject) =>
  (theme: StyledTheme, disableStyleProp?: (prop: string) => boolean): Dict =>
    getCSS({
      theme,
      styles,
      pseudos,
      disableStyleProp,
    })(cssOrFunc)
