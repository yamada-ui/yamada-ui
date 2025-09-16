import type { Dict } from "../../utils"
import type { ColorMode, System, ThemeToken, UsageTheme } from "../system"
import type { StyleConfig } from "./config"
import type { CSSFunction } from "./css"
import type { CSSProperties } from "./index.types"
import { isObject, isString, isUndefined } from "../../utils"
import { getColorSchemeVar, isColorScheme } from "../system"

export interface TransformOptions {
  system: System
  css?: CSSFunction
  fallback?: any
  prev?: Dict
  properties?: CSSProperties[]
  theme?: UsageTheme
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

export function isCSSToken({ cssMap }: System) {
  return function (value: any) {
    return isObject(cssMap) && value in cssMap && !!cssMap[value]?.ref
  }
}

export function isImportant(value: any): boolean {
  return (
    isString(value) && (/\s*!important$/.test(value) || /\s*!$/.test(value))
  )
}

export function omitImportant(value: any): string {
  return isString(value) ? value.replace(/(!important|!)$/, "").trim() : value
}

export function insertImportant(value: any, style?: StyleConfig): any {
  if (isString(value)) {
    return value + " !important"
  } else if (isObject(value)) {
    if (style?.important) {
      return Object.fromEntries(
        Object.entries(value).map(([key, value]) => [
          key,
          value + " !important",
        ]),
      )
    } else {
      if (!style?.properties) return value

      for (const property of style.properties) {
        value[property] += " !important"
      }
    }
  }

  return value
}

export function analyzeCSSValue(value: any) {
  let n = parseFloat(value.toString())
  const unit = value.toString().replace(String(n), "")

  return { unit, unitless: !unit, value }
}

export function tokenToVar(system: System) {
  return function (token: ThemeToken, value: any, fallbackValue?: any) {
    if (isColorScheme(value)) return getColorSchemeVar(system)(value)

    const resolvedToken = `${token}.${value}`

    if (isCSSToken(system)(resolvedToken)) {
      return system.cssMap![resolvedToken]!.ref
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
