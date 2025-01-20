import type { CSSObject } from "@emotion/react"
import type * as CSS from "csstype"
import type { Union } from "../../utils"
import type { ThemeToken } from "../theme"
import type { Transform } from "./utils"
import { isNumber, isObject } from "../../utils"
import { animation, insertKeyframes, keyframes } from "./animation"
import { generateAtRule } from "./at-rule"
import { generateCalc } from "./calc"
import { colorMix } from "./color-mix"
import { colorScheme } from "./color-scheme"
import { generateFilter } from "./filter"
import { generateFunction } from "./function"
import { gradient } from "./gradient"
import { grid } from "./grid"
import { outline } from "./outline"
import { generateStyles } from "./styles"
import { generateToken } from "./token"
import { transform } from "./transform"
import { generateTransition } from "./transition"
import { analyzeCSSValue, isCSSVar } from "./utils"
import { vars } from "./vars"

export { animation, colorMix, gradient, insertKeyframes, keyframes }

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
  keyframes,
  media: generateAtRule("media"),
  outline,
  px: (value: any) => {
    if (value == null) return value

    const { unitless } = analyzeCSSValue(value)

    return unitless || isNumber(value) ? `${value}px` : value
  },
  styles: generateStyles,
  supports: generateAtRule("supports"),
  token: generateToken,
  transform,
  transition: generateTransition,
  truncated: (value: boolean) => {
    if (value) {
      return {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      }
    }
  },
  vars,
}

export type Transforms = keyof typeof transforms
