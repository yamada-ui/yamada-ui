import * as c from "color2k"
import {
  getColor,
  lightenColor,
  darkenColor,
  transparentizeColor,
  tintColor,
  shadeColor,
  randomColor,
  isTone,
  isLight,
  isDark,
  convertColor,
  calcFormat,
  getAlpha,
  parseToRgba,
  parseToHsla,
  parseToHsv,
  rgbaTo,
  hslaTo,
  hsvTo,
  sameColor,
} from "../src/color"

const defaultTheme = {
  colors: {
    gray: {
      500: "#6b7280",
    },
  },
}

describe("Color", () => {
  test("getColor returns correct color", () => {
    expect(getColor("gray.500")(defaultTheme)).toBe("#6b7280")
    expect(getColor("unknown-token", "#ff0000")(defaultTheme)).toBe("#ff0000")
    expect(getColor("unknown-token")()).toBe("#000000")
  })

  test("lightenColor lightens the color", () => {
    const color = "#008000"
    expect(lightenColor(color, 20)()).toBe(c.toHex(c.lighten(color, 0.2)))
  })

  test("darkenColor darkens the color", () => {
    const color = "#008000"
    expect(darkenColor(color, 20)()).toBe(c.toHex(c.darken(color, 0.2)))
  })

  test("transparentizeColor changes the alpha channel", () => {
    const color = "#ff0000"
    expect(transparentizeColor(color, 0.5)()).toBe(c.transparentize(color, 0.5))
  })

  test("tintColor mixes the color with white", () => {
    const color = "#008000"
    expect(tintColor(color, 20)()).toBe(c.toHex(c.mix(color, "#fff", 0.2)))
  })

  test("shadeColor mixes the color with black", () => {
    const color = "#008000"
    expect(shadeColor(color, 20)()).toBe(c.toHex(c.mix(color, "#000", 0.2)))
  })

  test("randomColor generates a valid hex color", () => {
    const color = randomColor()
    expect(/^#[0-9A-F]{6}$/i.test(color)).toBeTruthy()
  })

  test("isTone returns 'dark' or 'light'", () => {
    expect(isTone("#000000")()).toBe("dark")
    expect(isTone("#ffffff")()).toBe("light")
  })

  test("isLight returns false for dark colors", () => {
    expect(isLight("#000000")()).toBeTruthy()
  })

  test("isDark returns false for light colors", () => {
    expect(isDark("#ffffff")()).toBeTruthy()
  })

  test("convertColor converts colors correctly", () => {
    const hexColor = "#008000"
    expect(convertColor(hexColor)("hex")).toBe(hexColor)
    expect(convertColor(hexColor)("rgb")).toBe("rgb(0, 128, 0)")
  })

  test("calcFormat returns the correct format", () => {
    expect(calcFormat("#008000ff")).toBe("hexa")
    expect(calcFormat("rgb(0, 128, 0)")).toBe("rgb")
  })

  test("getAlpha returns the alpha channel", () => {
    expect(getAlpha("rgba(0, 128, 0, 0.5)")).toBe(0.5)
  })

  test("parseToRgba parses colors to RGBA format", () => {
    expect(parseToRgba("#008000")).toStrictEqual([0, 128, 0, 1])
  })

  test("parseToHsla parses colors to HSLA format", () => {
    const [h, s, l, a] = parseToHsla("#008000") ?? []
    expect(h).toBeCloseTo(120)
    expect(s).toBeCloseTo(1)
    expect(l).toBeCloseTo(0.25)
    expect(a).toBe(1)
  })

  test("parseToHsv parses colors to HSV format", () => {
    const [h, s, v, a] = parseToHsv("#008000")
    expect(h).toBeCloseTo(120)
    expect(s).toBeCloseTo(1)
    expect(v).toBeCloseTo(0.5)
    expect(a).toBe(1)
  })

  test("rgbaTo converts RGBA to specified format", () => {
    expect(rgbaTo([0, 128, 0, 1])("hex")).toBe("#008000")
  })

  test("hslaTo converts HSLA to specified format", () => {
    expect(hslaTo([120, 1, 0.25, 1])("hex")).toBe("#008000")
  })

  test("hsvTo converts HSV to specified format", () => {
    expect(hsvTo([120, 1, 0.5])("hex")).toBe("#008000")
  })

  test("sameColor checks if two colors are the same", () => {
    expect(sameColor("#008000", "#008000")).toBeTruthy()
    expect(sameColor("#008000", "#FF0000")).toBeFalsy()
  })
})
