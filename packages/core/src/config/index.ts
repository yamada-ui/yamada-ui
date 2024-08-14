import type { CSSObject } from "@emotion/react"
import {
  isObject,
  isArray,
  isNumber,
  getMemoizedObject as get,
} from "@yamada-ui/utils"
import type { Union, Dict } from "@yamada-ui/utils"
import type * as CSS from "csstype"
import { DEFAULT_VAR_PREFIX } from "../constant"
import type { ThemeToken } from "../theme"
import type { StyledTheme } from "../theme.types"
import { generateAnimation } from "./animation"
import { generateAtRule } from "./at-rule"
import { generateColorMix } from "./color-mix"
import { generateFilter } from "./filter"
import { generateGradient } from "./gradient"
import { generateTransform } from "./transform"
import type { Transform } from "./utils"
import {
  mode,
  keyframes,
  analyzeCSSValue,
  isCSSVar,
  tokenToCSSVar,
} from "./utils"

export {
  mode,
  keyframes,
  generateGradient,
  generateAnimation,
  generateAtRule,
  generateColorMix,
  generateTransform,
  generateFilter,
}

type CSSProperties = Union<
  | keyof CSS.StandardProperties
  | keyof CSS.SvgProperties
  | keyof CSS.ObsoleteProperties
>

export type StyleConfig = {
  static?: CSSObject
  isProcessResult?: boolean
  isProcessSkip?: boolean
  properties?:
    | CSSProperties
    | CSSProperties[]
    | ((theme: StyledTheme) => CSSProperties)
  token?: ThemeToken
  transform?: Transform
  /**
   * This is a property for documentation sites.
   *
   * @deprecated
   */
  isSkip?: boolean
}

export type StyleConfigs = Record<string, StyleConfig | true>

export const transforms = {
  var: (values: any[], theme: StyledTheme) =>
    values.reduce<Dict>((prev, { __prefix, name, token, value }) => {
      const prefix =
        __prefix ?? theme.__config?.var?.prefix ?? DEFAULT_VAR_PREFIX

      name = `--${prefix}-${name}`

      if (isObject(value)) {
        value = Object.entries(value).reduce<Dict>((prev, [key, value]) => {
          prev[key] = tokenToCSSVar(token, value)(theme)

          return prev
        }, {})
      } else if (isArray(value)) {
        value = value.map((value) => tokenToCSSVar(token, value)(theme))
      } else {
        value = tokenToCSSVar(token, value)(theme)
      }

      prev[name] = value

      return prev
    }, {}),
  token:
    (
      token: ThemeToken,
      transform?: Transform,
      compose?: Transform,
    ): Transform =>
    (value, theme, css) => {
      value = tokenToCSSVar(token, value)(theme)

      let result = transform?.(value, theme, css) ?? value

      if (compose) result = compose(result, theme, css)

      return result
    },
  styles:
    (prefix?: string): Transform =>
    (value, theme, _css, prev = {}) => {
      const resolvedCSS: Dict = {}

      const style = get<Dict>(
        theme,
        prefix ? `styles.${prefix}.${value}` : `styles.${value}`,
        {},
      )

      for (const prop in style) {
        const done = prop in prev && prev[prop] != null

        if (!done) resolvedCSS[prop] = style[prop]
      }

      return resolvedCSS
    },
  px: (value: any) => {
    if (value == null) return value

    const { isUnitless } = analyzeCSSValue(value)

    return isUnitless || isNumber(value) ? `${value}px` : value
  },
  deg: (value: any) => {
    if (isCSSVar(value) || value == null) return value

    const isUnitless = typeof value === "string" && !value.endsWith("deg")

    return isUnitless || isNumber(value) ? `${value}deg` : value
  },
  fraction:
    (transform?: Transform): Transform =>
    (value: any, ...rest) => {
      if (isNumber(value) && value <= 1) {
        value = `${value * 100}%`
      }

      if (transform) value = transform(value, ...rest)

      return value
    },
  isTruncated: (value: boolean) => {
    if (value === true) {
      return {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      }
    }
  },
  bgClip: (value: any) => {
    if (value === "text") {
      return { color: "transparent", backgroundClip: "text" }
    } else {
      return { backgroundClip: value }
    }
  },
  function:
    (func: string, transform?: Transform): Transform =>
    (value: any, ...rest) => {
      if (transform) value = transform(value, ...rest)

      return `${func}(${value})`
    },
  content: (value: any) => {
    if (isObject(value)) {
      return { content: "''", ...value }
    } else {
      return value
    }
  },
  colorMix: generateColorMix,
  gradient: generateGradient,
  animation: generateAnimation,
  transform: generateTransform,
  filter: generateFilter,
  media: generateAtRule("media"),
  container: generateAtRule("container"),
  supports: generateAtRule("supports"),
}

export type Transforms = keyof typeof transforms
