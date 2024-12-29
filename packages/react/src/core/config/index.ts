import type { CSSObject } from "@emotion/react"
import type * as CSS from "csstype"
import type { Union } from "../../utils"
import type { ThemeToken } from "../theme"
import type { Transform } from "./utils"
import { isNumber, isObject } from "../../utils"
import { animation } from "./animation"
import { generateAtRule } from "./at-rule"
import { generateCalc } from "./calc"
import { colorMix } from "./color-mix"
import { colorScheme } from "./color-scheme"
import { generateFilter } from "./filter"
import { generateFunction } from "./function"
import { gradient } from "./gradient"
import { grid } from "./grid"
import { generateStyles } from "./styles"
import { generateToken } from "./token"
import { transform } from "./transform"
import { analyzeCSSValue, isCSSVar, keyframes, mode } from "./utils"
import { vars } from "./vars"

export { animation, gradient, keyframes, mode }

type CSSProperties = Union<
  | keyof CSS.ObsoleteProperties
  | keyof CSS.StandardProperties
  | keyof CSS.SvgProperties
>

export interface StyleConfig {
  processResult?: boolean
  processSkip?: boolean
  properties?: CSSProperties | CSSProperties[]
  static?: CSSObject
  token?: ThemeToken
  transform?: Transform
}

export interface StyleConfigs {
  [key: string]: StyleConfig | true
}

export const transforms = {
  colorScheme,
  animation,
  bgClip: (value: any) => {
    if (value === "text") {
      return { backgroundClip: "text", color: "transparent" }
    } else {
      return { backgroundClip: value }
    }
  },
  calc: generateCalc,
  colorMix,
  container: generateAtRule("container"),
  content: (value: any) => {
    if (isObject(value)) {
      return { content: "''", ...value }
    } else {
      return value
    }
  },
  deg: (value: any) => {
    if (isCSSVar(value) || value == null) return value

    const isUnitless = typeof value === "string" && !value.endsWith("deg")

    return isUnitless || isNumber(value) ? `${value}deg` : value
  },
  filter: generateFilter,
  fraction: (value: any) => {
    if (isNumber(value) && value <= 1) value = `${value * 100}%`

    return value
  },
  function: generateFunction,
  gradient,
  grid,
  isTruncated: (value: boolean) => {
    if (value) {
      return {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      }
    }
  },
  media: generateAtRule("media"),
  px: (value: any) => {
    if (value == null) return value

    const { isUnitless } = analyzeCSSValue(value)

    return isUnitless || isNumber(value) ? `${value}px` : value
  },
  styles: generateStyles,
  supports: generateAtRule("supports"),
  token: generateToken,
  transform,
  vars,
}

export type Transforms = keyof typeof transforms
