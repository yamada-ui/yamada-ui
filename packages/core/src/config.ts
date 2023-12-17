import type { CSSObject, Keyframes } from "@emotion/react"
import { keyframes as emotionKeyframes } from "@emotion/react"
import { StyleSheet } from "@emotion/sheet"
import type { Union, Dict } from "@yamada-ui/utils"
import {
  isNumber,
  getMemoizedObject as get,
  isArray,
  isObject,
  isString,
  createdDom,
} from "@yamada-ui/utils"
import type * as CSS from "csstype"
import type { ColorMode } from "./css"
import { css } from "./css"
import type { ThemeToken } from "./theme"
import type { StyledTheme } from "./theme.types"

type CSSProperties = Union<
  | keyof CSS.StandardProperties
  | keyof CSS.SvgProperties
  | keyof CSS.ObsoleteProperties
>

export type Transform = (value: any, theme: StyledTheme, css?: Dict) => any

export type ConfigProps = {
  static?: CSSObject
  isProcessResult?: boolean
  properties?:
    | CSSProperties
    | CSSProperties[]
    | ((theme: StyledTheme) => CSSProperties)
  token?: ThemeToken
  transform?: Transform
}

export type Configs = Record<string, ConfigProps | true>

const styleSheet = createdDom()
  ? new StyleSheet({ key: "css", container: document.head })
  : undefined

const directions: Record<string, string> = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left",
}

const transformValues = [
  "rotate(var(--ui-rotate, 0))",
  "scaleX(var(--ui-scale-x, 1))",
  "scaleY(var(--ui-scale-y, 1))",
  "skewX(var(--ui-skew-x, 0))",
  "skewY(var(--ui-skew-y, 0))",
]

const directionValues = new Set(Object.values(directions))

const globalValues = new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset",
])

const isCSSFunction = (value: any) =>
  isString(value) && value.includes("(") && value.includes(")")

const isCSSVar = (value: string) => /^var\(--.+\)$/.test(value)

const analyzeCSSValue = (value: any) => {
  let n = parseFloat(value.toString())
  const unit = value.toString().replace(String(n), "")

  return { isUnitless: !unit, value, unit }
}

const tokenToCSSVar =
  (token: ThemeToken, value: any) => (theme: StyledTheme) => {
    const resolvedToken = `${token}.${value}`

    if (isObject(theme.__cssMap) && resolvedToken in theme.__cssMap) {
      return theme.__cssMap[resolvedToken].ref
    } else {
      return value
    }
  }

export const generateGradient: Transform = (value, theme) => {
  if (value == null || globalValues.has(value)) return value

  const prevent = isCSSFunction(value)

  if (!prevent) return `url('${value}')`

  const regex = /(^[a-z-A-Z]+)\((.*)\)/g
  const [, _type, _values] = regex.exec(value) ?? []

  if (!_type || !_values) return value

  const type = _type.includes("-gradient") ? _type : `${_type}-gradient`

  const [maybeDirection, ...colors] = _values
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean)

  if (!colors.length) return value

  const direction =
    maybeDirection in directions ? directions[maybeDirection] : maybeDirection

  colors.unshift(direction)

  const values = colors.map((_color) => {
    if (directionValues.has(_color)) return _color

    const i = _color.indexOf(" ")

    let [color, _ratio] =
      i !== -1 ? [_color.slice(0, i), _color.slice(i + 1)] : [_color]

    const ratio = isCSSFunction(_ratio) ? _ratio : _ratio && _ratio.split(" ")

    const token = `colors.${color}`

    color = token in theme.__cssMap ? theme.__cssMap[token].ref : color

    if (ratio) {
      return [color, ...(isArray(ratio) ? ratio : [ratio])].join(" ")
    } else {
      return color
    }
  })

  return `${type}(${values.join(", ")})`
}

const transformAnimationValue = (value: Dict) =>
  Object.entries(value).reduce((prev, [key, value]) => {
    if (key === "duration") {
      prev["animationDuration"] = value
    } else if (key === "timingFunction") {
      prev["animationTimingFunction"] = value
    } else {
      prev[key] = value
    }

    return prev
  }, {} as Dict)

export const generateAnimation: Transform = (value, theme) => {
  if (value == null || globalValues.has(value)) return value

  if (isObject(value)) {
    const {
      keyframes,
      animationDuration = "0s",
      animationTimingFunction = "ease",
      delay = "0s",
      iterationCount = "1",
      direction = "normal",
      fillMode = "none",
      playState = "running",
    } = css(transformAnimationValue(value))(theme)
    const { name, styles } = emotionKeyframes(keyframes)

    styleSheet?.insert(styles)

    return `${name} ${animationDuration} ${animationTimingFunction} ${delay} ${iterationCount} ${direction} ${fillMode} ${playState}`
  } else if (value.includes(",")) {
    value = value
      .split(",")
      .map((value: string) => {
        value = value.trim()

        value = tokenToCSSVar("animations", value)(theme)

        return value
      })
      .join(",")

    return value
  } else {
    value = tokenToCSSVar("animations", value)(theme)

    return value
  }
}

const generateTransform: Transform = (value) => {
  if (value === "auto")
    return [
      "translateX(var(--ui-translate-x, 0))",
      "translateY(var(--ui-translate-y, 0))",
      ...transformValues,
    ].join(" ")

  if (value === "auto-3d")
    return [
      "translate3d(var(--ui-translate-x, 0), var(--ui-translate-y, 0), 0)",
      ...transformValues,
    ].join(" ")

  return value
}

const generateFilter =
  (type: "filter" | "backdrop" = "filter"): Transform =>
  (value) => {
    if (value !== "auto") return value

    if (type === "filter") {
      return [
        "var(--ui-blur, /*!*/ /*!*/)",
        "var(--ui-brightness, /*!*/ /*!*/)",
        "var(--ui-contrast, /*!*/ /*!*/)",
        "var(--ui-drop-shadow, /*!*/ /*!*/)",
        "var(--ui-grayscale, /*!*/ /*!*/)",
        "var(--ui-hue-rotate, /*!*/ /*!*/)",
        "var(--ui-invert, /*!*/ /*!*/)",
        "var(--ui-opacity, /*!*/ /*!*/)",
        "var(--ui-saturate, /*!*/ /*!*/)",
        "var(--ui-sepia, /*!*/ /*!*/)",
      ].join(" ")
    } else {
      return [
        "var(--ui-backdrop-blur, /*!*/ /*!*/)",
        "var(--ui-backdrop-brightness, /*!*/ /*!*/)",
        "var(--ui-backdrop-contrast, /*!*/ /*!*/)",
        "var(--ui-backdrop-drop-shadow, /*!*/ /*!*/)",
        "var(--ui-backdrop-grayscale, /*!*/ /*!*/)",
        "var(--ui-backdrop-hue-rotate, /*!*/ /*!*/)",
        "var(--ui-backdrop-invert, /*!*/ /*!*/)",
        "var(--ui-backdrop-opacity, /*!*/ /*!*/)",
        "var(--ui-backdrop-saturate, /*!*/ /*!*/)",
        "var(--ui-backdrop-sepia, /*!*/ /*!*/)",
      ].join(" ")
    }
  }

export const mode =
  <L extends any, D extends any>(light: L, dark: D) =>
  (colorMode: ColorMode | undefined = "light"): L | D =>
    colorMode === "light" ? light : dark

export const keyframes = (...arg: CSSObject[]): Keyframes =>
  emotionKeyframes(...arg)

export type Transforms = keyof typeof transforms

export const transforms = {
  token:
    (
      token: ThemeToken,
      transform?: Transform,
      compose?: Transform,
    ): Transform =>
    (value, theme) => {
      value = tokenToCSSVar(token, value)(theme)

      let result = transform?.(value, theme) ?? value

      if (compose) result = compose(result, theme)

      return result
    },
  styles:
    (prefix?: string): Transform =>
    (value, theme, css = {}) => {
      const resolvedCSS: Dict = {}

      const style = get<Dict>(
        theme,
        prefix ? `styles.${prefix}.${value}` : `styles.${value}`,
        {},
      )

      for (const prop in style) {
        const done = prop in css && css[prop] != null

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
  gradient: generateGradient,
  animation: generateAnimation,
  transform: generateTransform,
  filter: generateFilter,
}
