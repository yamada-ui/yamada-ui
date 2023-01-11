import { isArray, isObject, merge, runIfFunc, Dict } from '@yamada-ui/utils'
import {
  CSSObjectOrFunc,
  CSSUIObject,
  CSSUIProps,
  StyledTheme,
  BreakpointQueries,
  styles,
  pseudos,
  ConfigProps,
} from '..'

const expandColorScheme = (key: string, value: any[]): Dict => ({
  [key]: value[0],
  [pseudos._dark]: {
    [key]: value[1],
  },
})

const expandResponsive = (key: string, value: Dict, queries: BreakpointQueries): Dict =>
  Object.entries(value).reduce((css, [breakpointKey, breakpointValue]) => {
    if (breakpointKey === 'base') {
      css[key] = breakpointValue
    } else {
      const query = queries.find(({ breakpoint }) => breakpoint === breakpointKey)?.maxWQuery

      if (query) css[query] = { [key]: breakpointValue }
    }

    return css
  }, {} as Dict)

const expandCSS =
  (css: CSSUIProps | CSSUIObject) =>
  (theme: StyledTheme<Dict>): Dict => {
    if (!theme.__breakpoints) return css

    const { isResponsive, queries } = theme.__breakpoints

    let computedCSS: Dict = {}

    for (let [key, value] of Object.entries(css)) {
      value = runIfFunc(value, theme)

      if (value == null) continue

      if (isArray(value)) {
        computedCSS = merge(computedCSS, expandColorScheme(key, value))

        continue
      }

      if (isObject(value) && isResponsive(value)) {
        computedCSS = merge(computedCSS, expandResponsive(key, value, queries))

        continue
      }

      computedCSS[key] = value
    }

    return computedCSS
  }

export const getCSS = (options: {
  theme: StyledTheme<Dict>
  styles: Dict
  pseudos: Dict
}): ((cssOrFunc: CSSObjectOrFunc | CSSUIObject, nested?: boolean) => Dict) => {
  const { theme, styles = {}, pseudos = {} } = options

  const createCSS = (cssOrFunc: CSSObjectOrFunc | CSSUIObject, nested: boolean = false): Dict => {
    const _css = runIfFunc(cssOrFunc, theme)
    const css = expandCSS(_css)(theme)

    let computedCSS: Dict = {}

    for (let [key, value] of Object.entries(css)) {
      value = runIfFunc(value, theme)

      if (value == null) continue

      if (key in pseudos) key = pseudos[key]

      let style: ConfigProps | undefined | true = styles[key]

      if (style === true) style = { property: key }

      if (isObject(value)) {
        computedCSS[key] = computedCSS[key] ?? {}
        computedCSS[key] = merge(computedCSS[key], createCSS(value, true))

        continue
      }

      value = style?.transform?.(value, theme) ?? value

      value = style?.processResult ? createCSS(value, true) : value

      if (!nested && style?.static) {
        const staticStyles = runIfFunc(style.static, theme)

        computedCSS = merge(computedCSS, staticStyles)
      }

      const property = runIfFunc(style?.property, theme)

      if (property) {
        if (isArray(property)) {
          for (const _property of property) {
            computedCSS[_property] = value
          }

          continue
        } else if (isObject(value)) {
          computedCSS = merge(computedCSS, value)

          continue
        } else {
          computedCSS[property] = value

          continue
        }
      }

      if (isObject(value)) {
        computedCSS = merge(computedCSS, value)

        continue
      }

      computedCSS[key] = value
    }

    return computedCSS
  }

  return createCSS
}

export const css =
  (cssObject: CSSObjectOrFunc | CSSUIObject) =>
  (theme: StyledTheme<Dict>): Dict =>
    getCSS({
      theme,
      styles,
      pseudos,
    })(cssObject)
