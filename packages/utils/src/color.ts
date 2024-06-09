import * as c from "color2k"
import { isArray, isNumber } from "./assertion"
import type { Dict } from "./index.types"
import { getMemoizedObject as get } from "./object"

type ColorMode = "light" | "dark"

export type ColorFormat = "hex" | "hexa" | "rgba" | "rgb" | "hsl" | "hsla"

export const tones = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
] as const

export const isGray = (colorScheme: string) =>
  colorScheme === "gray" || colorScheme === "neutral"

export const isAccessible = (colorScheme: string) =>
  colorScheme === "yellow" || colorScheme === "cyan" || colorScheme === "lime"

export const getColor =
  (color: string, fallback: string = "#000000") =>
  (theme: Dict = {}, colorMode?: ColorMode) => {
    const [token, hue] = color.split(".")

    const [, relatedToken] =
      Object.entries<string>(theme.semantics?.colorSchemes ?? {}).find(
        ([semanticToken]) => token === semanticToken,
      ) ?? []

    if (relatedToken) color = `${relatedToken}.${hue}`

    const hex = get<
      string | number | [string | number, string | number] | undefined
    >(theme, `colors.${color}`, color)

    try {
      if (isArray(hex)) {
        return c.toHex(String(colorMode !== "dark" ? hex[0] : hex[1]))
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

export const lightenColor =
  (color: string, amount: number) => (theme?: Dict, colorMode?: ColorMode) => {
    const raw = getColor(color, color)(theme, colorMode)

    return c.toHex(c.lighten(raw, amount / 100))
  }

export const darkenColor =
  (color: string, amount: number) => (theme?: Dict, colorMode?: ColorMode) => {
    const raw = getColor(color, color)(theme, colorMode)

    return c.toHex(c.darken(raw, amount / 100))
  }

export const tintColor =
  (color: string, amount: number) => (theme?: Dict, colorMode?: ColorMode) => {
    const raw = getColor(color, color)(theme, colorMode)

    return c.toHex(c.mix(raw, "#fff", amount / 100))
  }

export const shadeColor =
  (color: string, amount: number) => (theme?: Dict, colorMode?: ColorMode) => {
    const raw = getColor(color, color)(theme, colorMode)

    return c.toHex(c.mix(raw, "#000", amount / 100))
  }

export const transparentizeColor =
  (color: string, alpha: number) => (theme?: Dict, colorMode?: ColorMode) => {
    const raw = getColor(color, color)(theme, colorMode)

    return c.transparentize(raw, 1 - alpha)
  }

export const randomColor = ({
  string,
  colors,
}: { string?: string; colors?: string[] } = {}) => {
  const fallback = randomHex()

  if (string && colors) return randomColorFromList(string, colors)

  if (string && !colors) return randomColorFromString(string)

  if (colors && !string) return randomFromList(colors)

  return fallback
}

const randomHex = () =>
  `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0")}`

const randomColorFromString = (str: string) => {
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

const randomColorFromList = (str: string, list: string[]) => {
  let index = 0

  if (str.length === 0) return list[0]

  for (let i = 0; i < str.length; i += 1) {
    index = str.charCodeAt(i) + ((index << 5) - index)

    index = index & index
  }

  index = ((index % list.length) + list.length) % list.length

  return list[index]
}

const randomFromList = (list: string[]) =>
  list[Math.floor(Math.random() * list.length)]

const getBrightness = (color: string) => {
  const [r, g, b] = c.parseToRgba(color)

  return (r * 299 + g * 587 + b * 114) / 1000
}

export const isTone =
  (color: string) => (theme?: Dict, colorMode?: ColorMode) => {
    const raw = theme ? getColor(color)(theme, colorMode) : color

    const brightness = getBrightness(raw)

    const isDark = brightness < 128

    return isDark ? "dark" : "light"
  }

export const isLight =
  (color: string) => (theme?: Dict, colorMode?: ColorMode) =>
    isTone(color)(theme, colorMode) === "dark"

export const isDark =
  (color: string) => (theme?: Dict, colorMode?: ColorMode) =>
    isTone(color)(theme, colorMode) === "light"

export const convertColor =
  (color: string, fallback?: string) =>
  (format: ColorFormat): string | undefined => {
    try {
      const isAlpha = format.endsWith("a")

      if (/^[0-9a-fA-F]{6}$/.test(color)) color = "#" + color

      if (format.startsWith("hex")) {
        let hexa = c.toHex(color)

        if (isAlpha) {
          if (hexa.length === 7) hexa += "ff"
        } else {
          hexa = hexa.replace(/(?<=^#([0-9a-fA-F]{6}))[0-9a-fA-F]{2}$/, "")
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

export const calcFormat = (color: string): ColorFormat => {
  if (color.startsWith("hsl")) {
    return color.startsWith("hsla") ? "hsla" : "hsl"
  } else if (color.startsWith("rgb")) {
    return color.startsWith("rgba") ? "rgba" : "rgb"
  } else {
    return color.length === 9 ? "hexa" : "hex"
  }
}

export const getAlpha = (color: string) => c.parseToRgba(color)[3]

export const alphaToHex = (a: number) => {
  if (0 > a) a = 0
  if (1 < a) a = 1

  return Math.round(a * 255)
    .toString(16)
    .padStart(2, "0")
}

export const parseToRgba = (color: string, fallback?: string) => {
  try {
    if (/^[0-9a-fA-F]{6}$/.test(color)) color = "#" + color

    return c.parseToRgba(color)
  } catch {
    if (fallback) return c.parseToRgba(fallback)
  }
}

export const parseToHsla = (color: string, fallback?: string) => {
  try {
    if (/^[0-9a-fA-F]{6}$/.test(color)) color = "#" + color

    return c.parseToHsla(color)
  } catch {
    if (fallback) return c.parseToHsla(fallback)
  }
}

export const parseToHsv = (
  color: string,
  fallback?: string,
): [number, number, number, number] => {
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

export const rgbaTo =
  ([r, g, b, a]: [number, number, number, number], fallback?: string) =>
  (format: ColorFormat = "hex") =>
    convertColor(c.rgba(r, g, b, a), fallback)(format)

export const hslaTo =
  ([h, s, l, a]: [number, number, number, number], fallback?: string) =>
  (format: ColorFormat = "hex") =>
    convertColor(c.hsla(h, s, l, a), fallback)(format)

export const hsvTo =
  ([h, s, v, a]: [number, number, number, number?], fallback?: string) =>
  (format: ColorFormat = "hex"): string | undefined => {
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

export const sameColor = (
  color: string | undefined,
  comparison: string | undefined,
) => {
  if (!color) return false
  if (!comparison) return false

  const a = parseToRgba(color) ?? []
  const b = parseToRgba(comparison) ?? []

  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3]
}
