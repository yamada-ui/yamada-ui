import type { CSSObject } from "@emotion/styled"
import type { CSSProperties } from "../css"
import type { ThemeToken } from "../theme"
import type { Transform } from "./utils"
import { isNumber, isObject } from "../../utils"
import { animation, insertKeyframes, keyframes } from "./animation"
import { generateAtRule } from "./at-rule"
import { generateCalc } from "./calc"
import { colorMix } from "./color-mix"
import { colorScheme } from "./color-scheme"
import { generateFilter } from "./filter"
import { focusRingStyle, generateFocusRing } from "./focus-ring"
import { generateFunction } from "./function"
import { gradient } from "./gradient"
import { grid } from "./grid"
import { generateStyles } from "./styles"
import { generateToken } from "./token"
import { transform } from "./transform"
import { generateTransition } from "./transition"
import { analyzeCSSValue, isCSSToken, isCSSVar } from "./utils"

export {
  animation,
  colorMix,
  focusRingStyle,
  gradient,
  insertKeyframes,
  isCSSToken,
  isCSSVar,
  keyframes,
}

export interface StyleConfig {
  properties?: CSSProperties[]
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
  bgClip: (value, { prev }) => {
    if (value === "text") {
      prev ??= {}
      prev.color ??= "transparent"

      return value
    } else {
      return value
    }
  },
  calc: generateCalc,
  colorMix,
  container: generateAtRule("container"),
  content: (value) => {
    if (isObject(value)) {
      return { content: "''", ...value }
    } else {
      return value
    }
  },
  deg: (value) => {
    if (isCSSVar(value) || value == null) return value

    const isUnitless = typeof value === "string" && !value.endsWith("deg")

    return isUnitless || isNumber(value) ? `${value}deg` : value
  },
  filter: generateFilter,
  focusRing: generateFocusRing,
  fraction: (value) => {
    if (isNumber(value) && value <= 1) value = `${value * 100}%`

    return value
  },
  function: generateFunction,
  gradient,
  grid,
  keyframes,
  media: generateAtRule("media"),
  px: (value) => {
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
} satisfies { [key: string]: Transform }

export type Transforms = keyof typeof transforms
