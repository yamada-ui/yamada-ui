import {
  toHex,
  parseToRgba,
  transparentize,
  mix,
  darken,
  lighten,
  toRgba,
  toHsla,
} from "color2k"
import type { Dict } from "."
import { getMemoizedObject as get, isArray, isNumber } from "."

type ColorMode = "light" | "dark"

export type ColorFormat = "hex" | "hexa" | "rgba" | "rgb" | "hsl" | "hsla"

export const hues = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
] as const

export const isGray = (colorScheme: string) =>
  colorScheme === "gray" || colorScheme === "neutral"

export const isAccessible = (colorScheme: string) =>
  colorScheme === "yellow" || colorScheme === "cyan" || colorScheme === "lime"

export const getColor =
  (color: string, fallback?: string) =>
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
        return toHex(String(colorMode !== "dark" ? hex[0] : hex[1]))
      } else {
        return toHex(String(hex))
      }
    } catch {
      return fallback ?? "#000000"
    }
  }

export const lightenColor =
  (color: string, amount: number) => (theme?: Dict, colorMode?: ColorMode) => {
    const raw = getColor(color, color)(theme, colorMode)

    return toHex(lighten(raw, amount / 100))
  }

export const darkenColor =
  (color: string, amount: number) => (theme?: Dict, colorMode?: ColorMode) => {
    const raw = getColor(color, color)(theme, colorMode)

    return toHex(darken(raw, amount / 100))
  }

export const tintColor =
  (color: string, amount: number) => (theme?: Dict, colorMode?: ColorMode) => {
    const raw = getColor(color, color)(theme, colorMode)

    return toHex(mix(raw, "#fff", amount / 100))
  }

export const shadeColor =
  (color: string, amount: number) => (theme?: Dict, colorMode?: ColorMode) => {
    const raw = getColor(color, color)(theme, colorMode)

    return toHex(mix(raw, "#000", amount / 100))
  }

export const transparentizeColor =
  (color: string, alpha: number) => (theme?: Dict, colorMode?: ColorMode) => {
    const raw = getColor(color, color)(theme, colorMode)

    return transparentize(raw, 1 - alpha)
  }

export const toneColor =
  (
    color: string,
    hue: (typeof hues)[number],
    lCoef: number = 0.94,
    dCoef: number = 0.86,
  ) =>
  (theme?: Dict, colorMode?: ColorMode) => {
    if (hue < 50 || 950 < hue) return color

    let raw = color

    if (theme && colorMode) getColor(color, color)(theme, colorMode)

    const coef = hue < 500 ? lCoef : dCoef
    const amount = (500 - hue) * 0.001 * coef

    return toHex(lighten(raw, amount))
  }

export const toneColors = (
  color: string,
  lCoef: number = 0.94,
  dCoef: number = 0.86,
) => {
  const colors: Record<string, string> = {}

  hues.forEach((hue) => {
    const coef = hue < 500 ? lCoef : dCoef

    const amount = (500 - hue) * 0.001 * coef

    colors[hue] = toHex(lighten(color, amount))
  })

  return colors
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
  const [r, g, b] = parseToRgba(color)

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

export const convertColor = (color: string, format: ColorFormat) => {
  const isAlpha = format.endsWith("a")

  if (format.startsWith("hex")) {
    let hexa = toHex(color)

    if (isAlpha) {
      if (hexa.length === 7) hexa += "ff"
    } else {
      hexa = hexa.replace(/(?<=^#([0-9a-fA-F]{6}))[0-9a-fA-F]{2}$/, "")
    }

    return hexa
  } else if (format.startsWith("hsl")) {
    let hsla = toHsla(color)

    if (!isAlpha) hsla = hsla.replace(/,\s*\d+(\.\d+)?\)$/, ")")

    return hsla
  } else {
    let rgba = toRgba(color)

    if (!isAlpha) rgba = rgba.replace(/,\s*\d+(\.\d+)?\)$/, ")")

    return rgba
  }
}

export const calcFormat = (color: string): ColorFormat => {
  if (color.startsWith("#")) {
    return color.length === 9 ? "hexa" : "hex"
  } else if (color.startsWith("hsl")) {
    return color.endsWith("a") ? "hsla" : "hsl"
  } else {
    return color.endsWith("a") ? "rgba" : "rgb"
  }
}

export const getAlpha = (color: string) => parseToRgba(color)[3]

export const alphaToHex = (a: number) => {
  if (0 > a) a = 0
  if (1 < a) a = 1

  return Math.round(a * 255)
    .toString(16)
    .padStart(2, "0")
}

export const toHsv = (color: string): [number, number, number, number] => {
  let [r, g, b, a] = parseToRgba(color)

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

export const hsvTo =
  (h: number, s: number, v: number, a?: number) =>
  (format: ColorFormat = "hex"): string => {
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

    return convertColor(color, format)
  }
