import type { CSSObject, Keyframes } from "@emotion/react"
import { keyframes as emotionKeyframes } from "@emotion/react"
import type { Dict } from "@yamada-ui/utils"
import { isObject, isString } from "@yamada-ui/utils"
import type { ColorMode, CSSObjectOrFunc, CSSUIObject } from "../css"
import type { ThemeToken } from "../theme"
import type { StyledTheme } from "../theme.types"

export type Transform = (
  value: any,
  theme: StyledTheme,
  css: (
    cssObject: CSSObjectOrFunc | CSSUIObject,
  ) => (theme: StyledTheme) => Dict,
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

export const isCSSVar = (value: string) => /^var\(--.+\)$/.test(value)

export const analyzeCSSValue = (value: any) => {
  let n = parseFloat(value.toString())
  const unit = value.toString().replace(String(n), "")

  return { isUnitless: !unit, value, unit }
}

export const tokenToCSSVar =
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
