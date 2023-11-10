import { CSSObject } from "@emotion/react"
import { isNumber, Union, Dict } from "@yamada-ui/utils"
import type * as CSS from "csstype"
import { ThemeToken } from "../theme"
import { StyledTheme } from "../theme.types"
import {
  analyzeCSSValue,
  isCSSFunction,
  tokenToCSSVar,
  generateGradient,
  globalValues,
  isCSSVar,
  generateTransform,
  generateFilter,
  generateAnimation,
} from "./utils"

type CSSProperties = Union<keyof CSS.Properties>

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

export const createTransform =
  ({
    token,
    transform,
    compose,
  }: {
    token: ThemeToken
    transform?: Transform
    compose?: Transform
  }): Transform =>
  (value, theme) => {
    value = tokenToCSSVar(token, value)(theme)

    let result = transform?.(value, theme) ?? value

    if (compose) result = compose(result, theme)

    return result
  }

export const createConfig =
  (token: ThemeToken, transform?: Transform) =>
  <T extends CSSProperties>(properties: T | T[]): ConfigProps => ({
    token,
    properties,
    transform: createTransform({
      token,
      transform,
    }),
  })

export const transforms = {
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
  fraction: (value: any) => {
    if (isNumber(value) && value <= 1) {
      return `${value * 100}%`
    } else {
      return value
    }
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
  bgImage: (value: any) => {
    if (value == null) return value

    if (!isCSSFunction(value) && !globalValues.has(value)) {
      return `url(${value})`
    } else {
      return value
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

export const configs = {
  color: createConfig("colors"),
  space: createConfig("spaces", transforms.px),
  radii: createConfig("radii", transforms.px),
  shadow: createConfig("shadows"),
  border: createConfig("borders"),
  size: createConfig("sizes", transforms.px),
  sizeTransform: createConfig("sizes", transforms.fraction),
  prop: (
    properties: ConfigProps["properties"],
    token?: ThemeToken,
    transform?: ConfigProps["transform"],
  ) =>
    token
      ? {
          properties,
          token,
          transform: createTransform({ token, transform }),
        }
      : {
          properties,
          token,
        },
  propTransform: (
    properties: ConfigProps["properties"],
    transform?: ConfigProps["transform"],
  ) => ({
    properties,
    transform,
  }),
  gradient: createConfig("gradients", transforms.gradient),
  blur: createConfig("blurs", transforms.function("blur")),
}
