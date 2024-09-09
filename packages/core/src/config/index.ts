import type { CSSObject } from "@emotion/react"
import { isObject, isNumber } from "@yamada-ui/utils"
import type { Union } from "@yamada-ui/utils"
import type * as CSS from "csstype"
import type { ThemeToken } from "../theme"
import type { StyledTheme } from "../theme.types"
import { animation } from "./animation"
import { generateAtRule } from "./at-rule"
import { generateCalc } from "./calc"
import { colorMix } from "./color-mix"
import { generateFilter } from "./filter"
import { generateFunction } from "./function"
import { gradient } from "./gradient"
import { grid } from "./grid"
import { generateStyles } from "./styles"
import { generateToken } from "./token"
import { transform } from "./transform"
import type { Transform } from "./utils"
import { mode, keyframes, analyzeCSSValue, isCSSVar } from "./utils"
import { vars } from "./vars"

export { mode, keyframes, gradient, animation }

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
}

export type StyleConfigs = Record<string, StyleConfig | true>

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
    if (isNumber(value) && value <= 1) value = `${value * 100}%`

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
  content: (value: any) => {
    if (isObject(value)) {
      return { content: "''", ...value }
    } else {
      return value
    }
  },
  vars,
  grid,
  colorMix,
  gradient,
  animation,
  transform,
  token: generateToken,
  styles: generateStyles,
  calc: generateCalc,
  filter: generateFilter,
  function: generateFunction,
  media: generateAtRule("media"),
  container: generateAtRule("container"),
  supports: generateAtRule("supports"),
}

export type Transforms = keyof typeof transforms
