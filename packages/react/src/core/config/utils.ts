import type { CSSObject, Keyframes } from "@emotion/react"
import type { Dict } from "../../utils"
import type { ColorMode, CSSFunction } from "../css"
import type { ThemeToken } from "../theme"
import type { StyledTheme } from "../theme.types"
import { keyframes as emotionKeyframes } from "@emotion/react"
import { isObject, isString, isUndefined } from "../../utils"
import { getVar } from "../css"

export interface TransformOptions {
  theme: StyledTheme
  css?: CSSFunction
  prev?: Dict
  properties?: string | string[]
}

export interface Transform {
  (value: any, options: TransformOptions): any
}

export const globalValues = new Set([
  "-moz-initial",
  "inherit",
  "initial",
  "none",
  "revert",
  "unset",
])

export function isCSSFunction(value: any) {
  return isString(value) && value.includes("(") && value.includes(")")
}

export function getCSSFunction(value: any) {
  const regex = /(^[a-z-A-Z]+)\((.*)\)/g
  const [, type, values] = regex.exec(value) ?? []

  return { type, values }
}

export function splitValues(
  values: string,
  cb: (
    current: string,
    prev: string | undefined,
    next: string | undefined,
  ) => boolean = (current) => current === ",",
  addSeparator = false,
) {
  const result = []

  let value = ""
  let depth = 0

  for (let i = 0; i < values.length; i++) {
    const current = values[i]
    const prev = values[i - 1]
    const next = values[i + 1]

    if (current === "(") depth++
    if (current === ")") depth--

    if (!isUndefined(current) && cb(current, prev, next) && depth === 0) {
      if (value) result.push(value.trim())

      if (addSeparator) result.push(current)

      value = ""
    } else {
      value += current
    }
  }

  if (value) result.push(value.trim())

  return result.filter(Boolean)
}

export function isCSSVar(value: string) {
  return /^var\(--.+\)$/.test(value)
}

export function analyzeCSSValue(value: any) {
  let n = parseFloat(value.toString())
  const unit = value.toString().replace(String(n), "")

  return { isUnitless: !unit, unit, value }
}

export function tokenToVar(token: ThemeToken, value: any) {
  return function (theme: StyledTheme) {
    const match = isString(value)
      ? value.match(/fallback\(([^,)]+),?\s*([^]+)?\)/)
      : null

    const [, pickedValue, fallbackValue] = match ?? []

    if (pickedValue) value = pickedValue

    if (isString(value) && value.startsWith("colorScheme.")) {
      const [, token] = value.split(".")
      const [resolvedToken, percent] = token?.split("/") ?? []

      return `${getVar(`colorScheme-${resolvedToken}`)(theme)}${percent ? `/${percent}` : ""}`
    }

    const resolvedToken = `${token}.${value}`

    if (isObject(theme.__cssMap) && resolvedToken in theme.__cssMap) {
      return theme.__cssMap[resolvedToken]?.ref
    } else {
      return fallbackValue ?? value
    }
  }
}

export function mode<L, D>(light: L, dark: D) {
  return function (colorMode: ColorMode | undefined = "light"): D | L {
    return colorMode === "light" ? light : dark
  }
}

export function keyframes(...arg: CSSObject[]): Keyframes {
  return emotionKeyframes(...arg)
}

function combineFunctions(a: Transform, b: Transform): Transform {
  return function (value, ...args) {
    return b(a(value, ...args), ...args)
  }
}

export function pipe(...transformers: Transform[]) {
  return transformers.reduce(combineFunctions)
}
