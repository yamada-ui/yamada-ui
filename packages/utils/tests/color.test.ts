import * as c from "color2k"
import {
  alphaToHex,
  calcFormat,
  convertColor,
  darkenColor,
  getAlpha,
  getColor,
  hslaTo,
  hsvTo,
  isDark,
  isLight,
  isTone,
  lightenColor,
  parseToHsla,
  parseToHsv,
  parseToRgba,
  randomColor,
  rgbaTo,
  sameColor,
  shadeColor,
  tintColor,
  transparentizeColor,
} from "../src/color"

const defaultTheme = {
  colors: {
    gray: {
      500: "#6b7280",
    },
    red: {
      500: ["#ea4334", "#ec5648"],
    },
  },
}

describe("Color", () => {
  test("getColor returns correct color", () => {
    expect(getColor("gray.500")(defaultTheme)).toBe("#6b7280")
  })

  test("getColor returns correct fallback color", () => {
    expect(getColor("unknown-token", "#ff0000")(defaultTheme)).toBe("#ff0000")
    expect(getColor("unknown-token", "unknown-token")()).toBe("#000000")
  })

  test("getColor returns correct light and dark color", () => {
    expect(getColor("red.500")(defaultTheme, "light")).toBe("#ea4334")
    expect(getColor("red.500")(defaultTheme, "dark")).toBe("#ec5648")
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
    const colors = [
      "#dedfe3",
      "#d3d5da",
      "#b7bbc3",
      "#9ea3ae",
      "#828997",
      "#6b7280",
      "#565c67",
      "#434851",
      "#2e3138",
      "#1c1e21",
      "#101113",
    ]

    const color1 = randomColor()
    const color2 = randomColor({ string: "Hirotomo Yamada" })
    const color3 = randomColor({ colors })
    const color4 = randomColor({ colors, string: "Hirotomo Yamada" })

    expect(/^#[0-9A-F]{6}$/i.test(color1)).toBeTruthy()
    expect(color2).toBe("#7e967c")
    expect(colors.includes(color3)).toBeTruthy()
    expect(color4).toBe("#6b7280")
  })

  test("randomColor returns correct fallback color", () => {
    const colors = [
      "#dedfe3",
      "#d3d5da",
      "#b7bbc3",
      "#9ea3ae",
      "#828997",
      "#6b7280",
      "#565c67",
      "#434851",
      "#2e3138",
      "#1c1e21",
      "#101113",
    ]

    const color1 = randomColor({ string: "" })
    const color2 = randomColor({ colors, string: "" })

    expect(/^#[0-9A-F]{6}$/i.test(color1)).toBeTruthy()
    expect(colors.includes(color2)).toBeTruthy()
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
    expect(convertColor(hexColor)("hsl")).toBe("hsl(120, 100%, 25%)")
  })

  test("convertColor automatically prepends # to the value", () => {
    const hexColor = "008000"
    expect(convertColor(hexColor)("hex")).toBe("#" + hexColor)
  })

  test("convertColor converts colors with alpha correctly", () => {
    const hexColor = "#008000"
    expect(convertColor(hexColor)("hexa")).toBe(hexColor + "ff")
    expect(convertColor(hexColor)("rgba")).toBe("rgba(0, 128, 0, 1)")
    expect(convertColor(hexColor)("hsla")).toBe("hsla(120, 100%, 25%, 1)")
  })

  test("convertColor returns correct fallback color", () => {
    expect(convertColor("unknown-color", "#ff0000")("hex")).toBe("#ff0000")
  })

  test("calcFormat returns the correct format", () => {
    expect(calcFormat("#008000")).toBe("hex")
    expect(calcFormat("#008000ff")).toBe("hexa")
    expect(calcFormat("rgb(0, 128, 0)")).toBe("rgb")
    expect(calcFormat("rgba(0, 128, 0, 1)")).toBe("rgba")
    expect(calcFormat("hsl(120, 100%, 25%)")).toBe("hsl")
    expect(calcFormat("hsla(120, 100%, 25%, 1)")).toBe("hsla")
  })

  test("getAlpha returns the alpha channel", () => {
    expect(getAlpha("rgba(0, 128, 0, 0.5)")).toBe(0.5)
  })

  test("alphaToHex parses alpha value", () => {
    expect(alphaToHex(255)).toBe("ff")
    expect(alphaToHex(-1)).toBe("00")
  })

  test("parseToRgba parses colors to RGBA format", () => {
    expect(parseToRgba("#008000")).toStrictEqual([0, 128, 0, 1])
    expect(parseToRgba("008000")).toStrictEqual([0, 128, 0, 1])
  })

  test("parseToRgba returns correct fallback color", () => {
    expect(parseToRgba("unknown-color", "#008000")).toStrictEqual([
      0, 128, 0, 1,
    ])
  })

  test("parseToHsla parses colors to HSLA format", () => {
    const [h1, s1, l1, a1] = parseToHsla("#008000") ?? []
    expect(h1).toBeCloseTo(120)
    expect(s1).toBeCloseTo(1)
    expect(l1).toBeCloseTo(0.25)
    expect(a1).toBe(1)

    const [h2, s2, l2, a2] = parseToHsla("008000") ?? []
    expect(h2).toBeCloseTo(120)
    expect(s2).toBeCloseTo(1)
    expect(l2).toBeCloseTo(0.25)
    expect(a2).toBe(1)
  })

  test("parseToHsla returns correct fallback color", () => {
    const [h, s, l, a] = parseToHsla("unknown-color", "#008000") ?? []
    expect(h).toBeCloseTo(120)
    expect(s).toBeCloseTo(1)
    expect(l).toBeCloseTo(0.25)
    expect(a).toBe(1)
  })

  test("parseToHsv parses colors to HSV format", () => {
    const [h1, s1, v1, a1] = parseToHsv("#00ffff")
    expect(h1).toBeCloseTo(180)
    expect(s1).toBeCloseTo(1)
    expect(v1).toBeCloseTo(1)
    expect(a1).toBe(1)

    const [h2, s2, v2, a2] = parseToHsv("#ff00ff")
    expect(h2).toBeCloseTo(300)
    expect(s2).toBeCloseTo(1)
    expect(v2).toBeCloseTo(1)
    expect(a2).toBe(1)

    const [h3, s3, v3, a3] = parseToHsv("#ffff00")
    expect(h3).toBeCloseTo(60)
    expect(s3).toBeCloseTo(1)
    expect(v3).toBeCloseTo(1)
    expect(a3).toBe(1)
  })

  test("rgbaTo converts RGBA to specified format", () => {
    expect(rgbaTo([0, 128, 0, 1])("hex")).toBe("#008000")
  })

  test("hslaTo converts HSLA to specified format", () => {
    expect(hslaTo([120, 1, 0.25, 1])("hex")).toBe("#008000")
  })

  test("hsvTo converts HSV to specified format", () => {
    expect(hsvTo([0, 0.5, 1])("rgb")).toBe("rgb(255, 128, 128)")
    expect(hsvTo([60, 0.5, 1])("rgb")).toBe("rgb(255, 255, 128)")
    expect(hsvTo([120, 0.5, 1])("rgb")).toBe("rgb(128, 255, 128)")
    expect(hsvTo([180, 0.5, 1])("rgb")).toBe("rgb(128, 255, 255)")
    expect(hsvTo([240, 0.5, 1])("rgb")).toBe("rgb(128, 128, 255)")
    expect(hsvTo([300, 0.5, 1])("rgb")).toBe("rgb(255, 128, 255)")
    expect(hsvTo([360, 0.5, 1])("rgb")).toBe("rgb(255, 128, 128)")
  })

  test("should handle the alpha channel correctly", () => {
    expect(hsvTo([0, 0.5, 1, 0.5])("rgba")).toBe("rgba(255, 128, 128, 0.5)")
  })

  test("sameColor checks if two colors are the same", () => {
    expect(sameColor("#008000", "#008000")).toBeTruthy()
    expect(sameColor("#008000", "#FF0000")).toBeFalsy()
  })
})
