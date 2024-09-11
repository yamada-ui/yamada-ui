import type { CSSObject, Keyframes } from "@emotion/react"
import { keyframes as emotionKeyframes } from "@emotion/react"
import type { Dict } from "@yamada-ui/utils"
import { isObject, isString } from "@yamada-ui/utils"
import type { ColorMode, CSSFunction } from "../css"
import type { ThemeToken } from "../theme"
import type { StyledTheme } from "../theme.types"

export type Transform = (
  value: any,
  theme: StyledTheme,
  css: CSSFunction,
  prev?: Dict,
) => any

export const globalValues = new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset",
])

export const isCSSFunction = (value: any) =>
  isString(value) && value.includes("(") && value.includes(")")

export const getCSSFunction = (value: any) => {
  const regex = /(^[a-z-A-Z]+)\((.*)\)/g
  const [, type, values] = regex.exec(value) ?? []

  return { type, values }
}

export const splitValues = (
  values: string,
  cb: (
    current: string,
    prev: string | undefined,
    next: string | undefined,
  ) => boolean = (current) => current === ",",
  addSeparator = false,
) => {
  const result = []

  let value = ""
  let depth = 0

  for (let i = 0; i < values.length; i++) {
    const current = values[i]
    const prev = values[i - 1]
    const next = values[i + 1]

    if (current === "(") depth++
    if (current === ")") depth--

    if (cb(current, prev, next) && depth === 0) {
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

export const isCSSVar = (value: string) => /^var\(--.+\)$/.test(value)

export const analyzeCSSValue = (value: any) => {
  let n = parseFloat(value.toString())
  const unit = value.toString().replace(String(n), "")

  return { isUnitless: !unit, value, unit }
}

export const tokenToVar =
  (token: ThemeToken, value: any) => (theme: StyledTheme) => {
    const match = isString(value)
      ? value.match(/fallback\(([^,)]+),?\s*([^]+)?\)/)
      : null

    const [, resolvedValue, fallbackValue] = match ?? []

    if (resolvedValue) value = resolvedValue

    const resolvedToken = `${token}.${value}`

    if (isObject(theme.__cssMap) && resolvedToken in theme.__cssMap) {
      return theme.__cssMap[resolvedToken].ref
    } else {
      return fallbackValue ?? value
    }
  }

export const mode =
  <L extends any, D extends any>(light: L, dark: D) =>
  (colorMode: ColorMode | undefined = "light"): L | D =>
    colorMode === "light" ? light : dark

export const keyframes = (...arg: CSSObject[]): Keyframes =>
  emotionKeyframes(...arg)

const combineFunctions =
  (a: Transform, b: Transform): Transform =>
  (value, ...args) =>
    b(a(value, ...args), ...args)

export const pipe = (...transformers: Transform[]) =>
  transformers.reduce(combineFunctions)
