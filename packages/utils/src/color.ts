import type { Dict, StringLiteral } from "./index.types"
import * as c from "color2k"
import { isArray, isNumber, isObject } from "./assertion"
import { getMemoizedObject as get } from "./object"

type ThemeValue = number | string
type Breakpoint = "base" | StringLiteral
type ColorMode = "dark" | "light"

export type ColorFormat = "hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba"

export const SEMANTIC_COLOR_SCHEMES = [
  "mono",
  "primary",
  "secondary",
  "info",
  "success",
  "warning",
  "error",
  "link",
] as const

export const DEFAULT_COLOR_SCHEMES = [
  "gray",
  "neutral",
  "red",
  "rose",
  "pink",
  "flashy",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
] as const

export const COLOR_SCHEMES = [
  ...SEMANTIC_COLOR_SCHEMES,
  ...DEFAULT_COLOR_SCHEMES,
]

export const TONES = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
] as const

export function isGray(colorScheme: string) {
  return colorScheme === "gray" || colorScheme === "neutral"
}

export function isAccessible(colorScheme: string) {
  return (
    colorScheme === "yellow" || colorScheme === "cyan" || colorScheme === "lime"
  )
}

export function getColor(color: string, fallback = "#000000") {
  return function (
    theme: Dict = {},
    colorMode: ColorMode = "light",
    breakpoint: Breakpoint = "base",
  ) {
    const [token, tone] = color.split(".")

    if (tone) {
      const [, relatedToken] =
        Object.entries<string>(theme.semantics?.colorSchemes ?? {}).find(
          ([semanticToken]) => token === semanticToken,
        ) ?? []

      if (relatedToken) color = `${relatedToken}.${tone}`
    } else {
      const [, relatedColor] =
        Object.entries<string>(theme.semantics?.colors ?? {}).find(
          ([semanticToken]) => token === semanticToken,
        ) ?? []

      if (relatedColor) color = relatedColor
    }

    const hex = get<[ThemeValue, ThemeValue] | Dict<ThemeValue> | ThemeValue>(
      theme,
      `colors.${color}`,
      color,
    )

    try {
      if (isArray(hex)) {
        return c.toHex(String(hex[colorMode !== "dark" ? 0 : 1]))
      } else if (isObject(hex)) {
        return c.toHex(String(hex[breakpoint]))
      } else {
        return c.toHex(String(hex))
      }
    } catch {
      try {
        return c.toHex(fallback)
      } catch {
        return "#000000"
      }
    }
  }
}

export function lightenColor(color: string, amount: number) {
  return function (
    theme?: Dict,
    colorMode?: ColorMode,
    breakpoint?: Breakpoint,
  ) {
    const raw = getColor(color, color)(theme, colorMode, breakpoint)

    return c.toHex(c.lighten(raw, amount / 100))
  }
}

export function darkenColor(color: string, amount: number) {
  return function (
    theme?: Dict,
    colorMode?: ColorMode,
    breakpoint?: Breakpoint,
  ) {
    const raw = getColor(color, color)(theme, colorMode, breakpoint)

    return c.toHex(c.darken(raw, amount / 100))
  }
}

export function tintColor(color: string, amount: number) {
  return function (
    theme?: Dict,
    colorMode?: ColorMode,
    breakpoint?: Breakpoint,
  ) {
    const raw = getColor(color, color)(theme, colorMode, breakpoint)

    return c.toHex(c.mix(raw, "#fff", amount / 100))
  }
}

export function shadeColor(color: string, amount: number) {
  return function (
    theme?: Dict,
    colorMode?: ColorMode,
    breakpoint?: Breakpoint,
  ) {
    const raw = getColor(color, color)(theme, colorMode, breakpoint)

    return c.toHex(c.mix(raw, "#000", amount / 100))
  }
}

export function transparentizeColor(color: string, alpha: number) {
  return function (
    theme?: Dict,
    colorMode?: ColorMode,
    breakpoint?: Breakpoint,
  ) {
    const raw = getColor(color, color)(theme, colorMode, breakpoint)

    return c.transparentize(raw, 1 - alpha)
  }
}

export function randomColor({
  colors,
  string,
}: { colors?: string[]; string?: string } = {}) {
  const fallback = randomHex()

  if (string && colors) return randomColorFromList(string, colors) ?? fallback

  if (string && !colors) return randomColorFromString(string)

  if (colors && !string) return randomFromList(colors) ?? fallback

  return fallback
}

function randomHex() {
  return `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0")}`
}

function randomColorFromString(str: string) {
  let hash = 0

  if (str.length === 0) return hash.toString()

  for (let i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
    hash = hash & hash
  }

  let color = "#"

  for (let j = 0; j < 3; j += 1) {
    const value = (hash >> (j * 8)) & 255

    color += `00${value.toString(16)}`.substr(-2)
  }

  return color
}

function randomColorFromList(str: string, list: string[]) {
  let index = 0

  if (str.length === 0) return list[0]

  for (let i = 0; i < str.length; i += 1) {
    index = str.charCodeAt(i) + ((index << 5) - index)

    index = index & index
  }

  index = ((index % list.length) + list.length) % list.length

  return list[index]
}

function randomFromList(list: string[]) {
  return list[Math.floor(Math.random() * list.length)]
}

function getBrightness(color: string) {
  const [r, g, b] = c.parseToRgba(color)

  return (r * 299 + g * 587 + b * 114) / 1000
}

export function isTone(color: string) {
  return function (
    theme?: Dict,
    colorMode?: ColorMode,
    breakpoint?: Breakpoint,
  ) {
    const raw = theme ? getColor(color)(theme, colorMode, breakpoint) : color

    const brightness = getBrightness(raw)

    const isDark = brightness < 128

    return isDark ? "dark" : "light"
  }
}

export function isLight(color: string) {
  return function (theme?: Dict, colorMode?: ColorMode) {
    return isTone(color)(theme, colorMode) === "dark"
  }
}

export function isDark(color: string) {
  return function (theme?: Dict, colorMode?: ColorMode) {
    return isTone(color)(theme, colorMode) === "light"
  }
}

export function convertColor(color: string, fallback?: string) {
  return function (format: ColorFormat): string | undefined {
    try {
      const isAlpha = format.endsWith("a")

      if (/^[0-9a-fA-F]{6}$/.test(color)) color = "#" + color

      if (format.startsWith("hex")) {
        let hexa = c.toHex(color)

        if (isAlpha) {
          if (hexa.length === 7) hexa += "ff"
        } else {
          hexa = hexa.replace(/^#(?:[0-9a-fA-F]{6})[0-9a-fA-F]{2}$/, "$1")
        }

        return hexa
      } else if (format.startsWith("hsl")) {
        let hsla = c.toHsla(color)

        if (!isAlpha) {
          hsla = hsla.replace(/hsla/, "hsl")
          hsla = hsla.replace(/,\s*\d+(\.\d+)?\)$/, ")")
        }

        return hsla
      } else {
        let rgba = c.toRgba(color)

        if (!isAlpha) {
          rgba = rgba.replace(/rgba/, "rgb")
          rgba = rgba.replace(/,\s*\d+(\.\d+)?\)$/, ")")
        }

        return rgba
      }
    } catch {
      if (fallback) return convertColor(fallback)(format)
    }
  }
}

export function calcFormat(color: string): ColorFormat {
  if (color.startsWith("hsl")) {
    return color.startsWith("hsla") ? "hsla" : "hsl"
  } else if (color.startsWith("rgb")) {
    return color.startsWith("rgba") ? "rgba" : "rgb"
  } else {
    return color.length === 9 ? "hexa" : "hex"
  }
}

export function getAlpha(color: string) {
  return c.parseToRgba(color)[3]
}

export function alphaToHex(a: number) {
  if (0 > a) a = 0
  if (1 < a) a = 1

  return Math.round(a * 255)
    .toString(16)
    .padStart(2, "0")
}

export function parseToRgba(color: string, fallback?: string) {
  try {
    if (/^[0-9a-fA-F]{6}$/.test(color)) color = "#" + color

    return c.parseToRgba(color)
  } catch {
    if (fallback) return c.parseToRgba(fallback)
  }
}

export function parseToHsla(color: string, fallback?: string) {
  try {
    if (/^[0-9a-fA-F]{6}$/.test(color)) color = "#" + color

    return c.parseToHsla(color)
  } catch {
    if (fallback) return c.parseToHsla(fallback)
  }
}

export function parseToHsv(
  color: string,
  fallback?: string,
): [number, number, number, number] {
  let [r, g, b, a] = parseToRgba(color, fallback) ?? [255, 255, 255, 1]

  r = r / 255
  g = g / 255
  b = b / 255

  const [min, max] = [Math.min(r, g, b), Math.max(r, g, b)]
  const delta = max - min

  let [h, v, s] = [0, max, max == 0 ? 0 : delta / max]

  switch (min) {
    case max:
      h = 0
      break

    case r:
      h = 60 * ((b - g) / delta) + 180
      break

    case g:
      h = 60 * ((r - b) / delta) + 300
      break

    case b:
      h = 60 * ((g - r) / delta) + 60
      break
  }

  return [h, s, v, a]
}

export function rgbaTo(
  [r, g, b, a]: [number, number, number, number],
  fallback?: string,
) {
  return function (format: ColorFormat = "hex") {
    return convertColor(c.rgba(r, g, b, a), fallback)(format)
  }
}

export function hslaTo(
  [h, s, l, a]: [number, number, number, number],
  fallback?: string,
) {
  return function (format: ColorFormat = "hex") {
    return convertColor(c.hsla(h, s, l, a), fallback)(format)
  }
}

export function hsvTo(
  [h, s, v, a]: [number, number, number, number?],
  fallback?: string,
) {
  return function (format: ColorFormat = "hex"): string | undefined {
    h = h / 60

    let rgb: [number, number, number] = [v, v, v]

    let i = Math.floor(h)
    let f = h - i
    let p = v * (1 - s)
    let q = v * (1 - s * f)
    let t = v * (1 - s * (1 - f))

    switch (i) {
      case 0:
      case 6:
        rgb = [v, t, p]
        break

      case 1:
        rgb = [q, v, p]
        break

      case 2:
        rgb = [p, v, t]
        break

      case 3:
        rgb = [p, q, v]
        break

      case 4:
        rgb = [t, p, v]
        break

      case 5:
        rgb = [v, p, q]
        break
    }

    let color = `rgb(${rgb.map((v) => Math.round(v * 255)).join(", ")})`

    if (isNumber(a)) color = color.replace(/\)$/, `, ${a})`)

    return convertColor(color, fallback)(format)
  }
}

export function sameColor(
  color: string | undefined,
  comparison: string | undefined,
) {
  if (!color) return false
  if (!comparison) return false

  const a = parseToRgba(color) ?? []
  const b = parseToRgba(comparison) ?? []

  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3]
}
