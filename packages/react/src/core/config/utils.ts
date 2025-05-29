import type { Dict } from "../../utils"
import type { ColorMode, CSSFunction, CSSProperties } from "../css"
import type { StyledTheme, ThemeToken, UsageTheme } from "../theme"
import { isObject, isString, isUndefined } from "../../utils"
import { getColorSchemeVar, isColorScheme } from "../css"

export interface TransformOptions {
  theme: StyledTheme<UsageTheme>
  css?: CSSFunction
  fallback?: any
  prev?: Dict
  properties?: CSSProperties[]
}

export interface Transform {
  (value: any, options: TransformOptions): any
}

export const globalValues = new Set([
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

export function isCSSToken(theme: StyledTheme<UsageTheme>) {
  return function (value: any) {
    return (
      isObject(theme.__cssMap) &&
      value in theme.__cssMap &&
      !!theme.__cssMap[value]?.ref
    )
  }
}

export function analyzeCSSValue(value: any) {
  let n = parseFloat(value.toString())
  const unit = value.toString().replace(String(n), "")

  return { unit, unitless: !unit, value }
}

export function tokenToVar(theme: StyledTheme<UsageTheme>) {
  return function (token: ThemeToken, value: any, fallbackValue?: any) {
    if (isColorScheme(value)) return getColorSchemeVar(theme)(value)

    const resolvedToken = `${token}.${value}`

    if (isCSSToken(theme)(resolvedToken)) {
      return theme.__cssMap![resolvedToken]!.ref
    } else {
      return fallbackValue || value
    }
  }
}

export function mode<L, D>(light: L, dark: D) {
  return function (colorMode: ColorMode | undefined = "light"): D | L {
    return colorMode === "light" ? light : dark
  }
}

function combineFunctions(a: Transform, b: Transform): Transform {
  return function (value, ...args) {
    return b(a(value, ...args), ...args)
  }
}

export function pipe(...transformers: Transform[]) {
  return transformers.reduce(combineFunctions)
}
