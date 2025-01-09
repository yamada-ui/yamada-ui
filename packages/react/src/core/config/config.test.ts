import type { StyledTheme } from "../theme.types"
import { css } from "../css"
import { transformTheme } from "../theme"
import { animation } from "./animation"
import { generateCalc } from "./calc"
import { colorMix } from "./color-mix"
import { gradient } from "./gradient"
import { transforms } from "./index"
import { keyframes, mode, pipe } from "./utils"

const theme = transformTheme(
  {
    animations: {
      gradient1: {
        duration: "10s",
        iterationCount: "infinite",
        keyframes: {
          "0%": {
            bg: "red.500",
          },
          "20%": {
            bg: "green.500",
          },
          "40%": {
            bg: "purple.500",
          },
          "60%": {
            bg: "yellow.500",
          },
          "80%": {
            bg: "blue.500",
          },
          "100%": {
            bg: "red.500",
          },
        },
        timingFunction: "linear",
      },
      gradient2: [
        {
          duration: "5s",
          iterationCount: "infinite",
          keyframes: {
            "0%": {
              bg: "red.500",
            },
            "50%": {
              bg: "yellow.500",
            },
            "100%": {
              bg: "red.500",
            },
          },
          timingFunction: "linear",
        },
        {
          duration: "slower",
          fillMode: "forwards",
          keyframes: {
            "0%": {
              transform: "translateX(400%)",
            },
            "100%": {
              transform: "translateX(0%)",
            },
          },
          timingFunction: "ease-in-out",
        },
      ],
    },
    colors: {
      blackAlpha: {
        50: "rgba(0, 0, 0, 0.04)",
        100: "rgba(0, 0, 0, 0.06)",
        200: "rgba(0, 0, 0, 0.08)",
        300: "rgba(0, 0, 0, 0.16)",
        400: "rgba(0, 0, 0, 0.24)",
        500: "rgba(0, 0, 0, 0.36)",
        600: "rgba(0, 0, 0, 0.48)",
        700: "rgba(0, 0, 0, 0.64)",
        800: "rgba(0, 0, 0, 0.80)",
        900: "rgba(0, 0, 0, 0.92)",
        950: "rgba(0, 0, 0, 0.96)",
      },
      blue: {
        50: "#e2edfd",
        100: "#cfe0fc",
        200: "#adcbfa",
        300: "#8bb5f8",
        400: "#659cf6",
        500: "#4387f4",
        600: "#186bf2",
        700: "#0c59d4",
        800: "#0a47a9",
        900: "#07357d",
        950: "#062c6a",
      },
      gray: {
        50: "#dedfe3",
        100: "#d3d5da",
        200: "#b7bbc3",
        300: "#9ea3ae",
        400: "#828997",
        500: "#6b7280",
        600: "#565c67",
        700: "#434851",
        800: "#2e3138",
        900: "#1c1e21",
        950: "#101113",
      },
      green: {
        50: "#e0f5e6",
        100: "#d0f1d9",
        200: "#a9e5b9",
        300: "#86da9c",
        400: "#5fce7d",
        500: "#3cc360",
        600: "#31a04f",
        700: "#28813f",
        800: "#1d5e2e",
        900: "#133e1f",
        950: "#0d2b15",
      },
      red: {
        50: "#fdeae8",
        100: "#fbd9d5",
        200: "#f6b2ac",
        300: "#f28c82",
        400: "#ee6a5d",
        500: "#ea4334",
        600: "#de2817",
        700: "#b42013",
        800: "#8a190f",
        900: "#66120b",
        950: "#530f09",
      },
      whiteAlpha: {
        50: "rgba(255, 255, 255, 0.04)",
        100: "rgba(255, 255, 255, 0.06)",
        200: "rgba(255, 255, 255, 0.08)",
        300: "rgba(255, 255, 255, 0.16)",
        400: "rgba(255, 255, 255, 0.24)",
        500: "rgba(255, 255, 255, 0.36)",
        600: "rgba(255, 255, 255, 0.48)",
        700: "rgba(255, 255, 255, 0.64)",
        800: "rgba(255, 255, 255, 0.80)",
        900: "rgba(255, 255, 255, 0.92)",
        950: "rgba(255, 255, 255, 0.96)",
      },
    },
    gradients: {
      primary: "linear(to-r, #7928CA, #FF0080)",
    },
    sizes: {
      "9xs": "1rem",
      "8xs": "1.5rem",
      "7xs": "2rem",
      "6xs": "3rem",
      "5xs": "4.5rem",
      "4xs": "6rem",
      "3xs": "7.5rem",
      "2xs": "10rem",
      xs: "15rem",
      sm: "20rem",
      md: "24rem",
      lg: "28rem",
      xl: "32rem",
      "2xl": "36rem",
      "3xl": "42rem",
      "4xl": "48rem",
      "5xl": "56rem",
      "6xl": "64rem",
      "7xl": "72rem",
      "8xl": "80rem",
      "9xl": "90rem",
      full: "100%",
      max: "max-content",
      min: "min-content",
    },
    spaces: {
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
      px: "1px",
    },
    transitions: {
      duration: {
        "ultra-fast": "50ms",
        faster: "100ms",
        fast: "150ms",
        normal: "200ms",
        slow: "300ms",
        slower: "400ms",
        "ultra-slow": "500ms",
      },

      easing: {
        "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
        "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
        "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
      },

      property: {
        background: "background-color, background-image, background-position",
        colors: "background-color, border-color, color, fill, stroke",
        common:
          "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
        dimensions: "width, height",
        position: "left, right, top, bottom",
      },
    },
  },
  {
    css: { varPrefix: "ui" },
    breakpoint: { direction: "down" },
    initialColorMode: "light",
    initialThemeScheme: "base",
  },
) as StyledTheme

describe("transforms", () => {
  test("var transform", () => {
    const result1 = transforms.vars(
      [{ name: "space", token: "spaces", value: "4" }],
      { theme },
    )
    const result2 = transforms.vars(
      [{ name: "space", token: "spaces", value: { base: "4", md: "2" } }],
      { theme },
    )
    const result3 = transforms.vars(
      [{ name: "color", token: "colors", value: ["gray.500", "gray.300"] }],
      { theme },
    )
    expect(result1).toStrictEqual({
      "--ui-space": "var(--ui-spaces-4)",
    })
    expect(result2).toStrictEqual({
      "--ui-space": {
        base: "var(--ui-spaces-4)",
        md: "var(--ui-spaces-2)",
      },
    })
    expect(result3).toStrictEqual({
      "--ui-color": ["var(--ui-colors-gray-500)", "var(--ui-colors-gray-300)"],
    })
  })

  test("token transform", () => {
    const result = transforms.token("colors")("gray.500", { css, theme })
    expect(result).toBe("var(--ui-colors-gray-500)")
  })

  test("styles transform", () => {
    const result = transforms.styles("textStyles")("gradient", { css, theme })
    expect(result).toStrictEqual({})
  })

  test("px transform", () => {
    const result1 = transforms.px(10)
    const result2 = transforms.px(null)
    expect(result1).toBe("10px")
    expect(result2).toBeNull()
  })

  test("deg transform", () => {
    const result1 = transforms.deg(45)
    const result2 = transforms.deg(null)
    const result3 = transforms.deg("45")
    const result4 = transforms.deg("45deg")
    expect(result1).toBe("45deg")
    expect(result2).toBeNull()
    expect(result3).toBe("45deg")
    expect(result4).toBe("45deg")
  })

  test("fraction transform", () => {
    const result = transforms.fraction(0.5)
    expect(result).toBe("50%")
  })

  test("isTruncated transform", () => {
    const result = transforms.isTruncated(true)
    expect(result).toStrictEqual({
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    })
  })

  test("bgClip transform", () => {
    const result1 = transforms.bgClip("text")
    const result2 = transforms.bgClip("content-box")
    expect(result1).toStrictEqual({
      backgroundClip: "text",
      color: "transparent",
    })
    expect(result2).toStrictEqual({
      backgroundClip: "content-box",
    })
  })

  test("function transform", () => {
    const result1 = transforms.function("translateX")("100px", { css, theme })
    const result2 = pipe(transforms.px, transforms.function("translateX"))(
      100,
      { css, theme },
    )
    expect(result1).toBe("translateX(100px)")
    expect(result2).toBe("translateX(100px)")
  })

  test("transform transform", () => {
    const result1 = transforms.transform("auto", { css, theme })
    const result2 = transforms.transform("auto-3d", { css, theme })
    const result3 = transforms.transform(null, { css, theme })
    expect(result1).toBe(
      "translateX(var(--ui-translate-x, 0)) translateY(var(--ui-translate-y, 0)) rotate(var(--ui-rotate, 0)) scaleX(var(--ui-scale-x, 1)) scaleY(var(--ui-scale-y, 1)) skewX(var(--ui-skew-x, 0)) skewY(var(--ui-skew-y, 0))",
    )
    expect(result2).toBe(
      "translate3d(var(--ui-translate-x, 0), var(--ui-translate-y, 0), 0) rotate(var(--ui-rotate, 0)) scaleX(var(--ui-scale-x, 1)) scaleY(var(--ui-scale-y, 1)) skewX(var(--ui-skew-x, 0)) skewY(var(--ui-skew-y, 0))",
    )
    expect(result3).toBeNull()
  })

  test("filter transform", () => {
    const result1 = transforms.filter("filter")("blur(5px)", { css, theme })
    const result2 = transforms.filter("filter")("auto", { css, theme })
    const result3 = transforms.filter("backdrop")("auto", { css, theme })
    expect(result1).toBe("blur(5px)")
    expect(result2).toBe(
      "var(--ui-blur, /*!*/ /*!*/) var(--ui-brightness, /*!*/ /*!*/) var(--ui-contrast, /*!*/ /*!*/) var(--ui-drop-shadow, /*!*/ /*!*/) var(--ui-grayscale, /*!*/ /*!*/) var(--ui-hue-rotate, /*!*/ /*!*/) var(--ui-invert, /*!*/ /*!*/) var(--ui-opacity, /*!*/ /*!*/) var(--ui-saturate, /*!*/ /*!*/) var(--ui-sepia, /*!*/ /*!*/)",
    )
    expect(result3).toBe(
      "var(--ui-backdrop-blur, /*!*/ /*!*/) var(--ui-backdrop-brightness, /*!*/ /*!*/) var(--ui-backdrop-contrast, /*!*/ /*!*/) var(--ui-backdrop-drop-shadow, /*!*/ /*!*/) var(--ui-backdrop-grayscale, /*!*/ /*!*/) var(--ui-backdrop-hue-rotate, /*!*/ /*!*/) var(--ui-backdrop-invert, /*!*/ /*!*/) var(--ui-backdrop-opacity, /*!*/ /*!*/) var(--ui-backdrop-saturate, /*!*/ /*!*/) var(--ui-backdrop-sepia, /*!*/ /*!*/)",
    )
  })

  test("media transform", () => {
    const result = transforms.media(
      [{ type: "print", css: { color: "black" } }],
      { css, theme },
    )
    expect(result).toStrictEqual({
      "@media print ": { color: "black" },
    })
  })

  test("container transform", () => {
    const result1 = transforms.container(
      [{ name: "sm", css: { maxWidth: "640px" } }],
      { css, theme },
    )
    const result2 = transforms.container(
      [{ name: "xl", css: { maxWidth: "640px" }, maxWidth: "xl" }],
      { css, theme },
    )
    expect(result1).toStrictEqual({
      "@container sm ": { maxWidth: "640px" },
    })
    expect(result2).toStrictEqual({
      "@container xl (max-width: var(--ui-sizes-xl))": { maxWidth: "640px" },
    })
  })

  test("supports transform", () => {
    const result = transforms.supports(
      [{ css: { display: "grid" }, query: "(display: grid)" }],
      { css, theme },
    )
    expect(result).toStrictEqual({
      "@supports  (display: grid)": { display: "grid" },
    })
  })
})

describe("utils", () => {
  test("mode", () => {
    const result1 = mode("lightValue", "darkValue")("light")
    const result2 = mode("lightValue", "darkValue")("dark")
    expect(result1).toBe("lightValue")
    expect(result2).toBe("darkValue")
  })

  test("keyframes", () => {
    const { name, styles } = keyframes({
      "0%": {
        transform: "translateX(400%)",
      },
      "100%": {
        transform: "translateX(0%)",
      },
    })
    expect(name).toMatch(/animation-.*/)
    expect(styles).toMatch(
      /@keyframes animation-.*\{0%\{transform:translateX\(400%\);\}100%\{transform:translateX\(0%\);\}\}/,
    )
  })
})

describe("color-mix", () => {
  test("returns color-mix CSS string", () => {
    const result1 = colorMix("mix(red.500, blue.500)", { theme })
    const result2 = colorMix("color-mix(red.500, blue.500)", { theme })
    const result3 = colorMix("mix(in srgb, green.500 50, #000000)", { theme })
    const result4 = colorMix("mix(in lab, red.500 80%, blue.500 20%)", {
      theme,
    })
    const result5 = colorMix("mix(in srgb, green.500 50, #000000)", { theme })
    expect(result1).toBe(
      "color-mix(in srgb, var(--ui-colors-red-500), var(--ui-colors-blue-500))",
    )
    expect(result2).toBe(
      "color-mix(in srgb, var(--ui-colors-red-500), var(--ui-colors-blue-500))",
    )
    expect(result3).toBe(
      "color-mix(in srgb, var(--ui-colors-green-500) 50%, #000000)",
    )
    expect(result4).toBe(
      "color-mix(in lab, var(--ui-colors-red-500) 80%, var(--ui-colors-blue-500) 20%)",
    )
    expect(result5).toBe(
      "color-mix(in srgb, var(--ui-colors-green-500) 50%, #000000)",
    )
  })

  test("returns tint CSS string", () => {
    const result1 = colorMix("shade(red.500, 50%)", { theme })
    const result2 = colorMix("shade(green, 50)", { theme })
    const result3 = colorMix("shade(rgb(255, 0, 0), 50%)", { theme })
    expect(result1).toBe(
      "color-mix(in srgb, var(--ui-colors-red-500) 50%, #000)",
    )
    expect(result2).toBe("color-mix(in srgb, green 50%, #000)")
    expect(result3).toBe("color-mix(in srgb, rgb(255, 0, 0) 50%, #000)")
  })

  test("returns shade CSS string", () => {
    const result1 = colorMix("tint(red.500, 50%)", { theme })
    const result2 = colorMix("tint(green, 50)", { theme })
    const result3 = colorMix("tint(rgb(255, 0, 0), 50%)", { theme })
    expect(result1).toBe(
      "color-mix(in srgb, var(--ui-colors-red-500) 50%, #fff)",
    )
    expect(result2).toBe("color-mix(in srgb, green 50%, #fff)")
    expect(result3).toBe("color-mix(in srgb, rgb(255, 0, 0) 50%, #fff)")
  })

  test("returns transparentize CSS string", () => {
    const result1 = colorMix("transparentize(red.500, 50%)", { theme })
    const result2 = colorMix("transparentize(green, 50)", { theme })
    const result3 = colorMix("transparentize(rgb(255, 0, 0), 50%)", { theme })
    expect(result1).toBe(
      "color-mix(in srgb, var(--ui-colors-red-500) 50%, transparent)",
    )
    expect(result2).toBe("color-mix(in srgb, green 50%, transparent)")
    expect(result3).toBe("color-mix(in srgb, rgb(255, 0, 0) 50%, transparent)")
  })

  test("returns tone CSS string", () => {
    const result1 = colorMix("tone(red.500, 300)", { theme })
    const result2 = colorMix("tone(red.500, 500)", { theme })
    const result3 = colorMix("tone(red.500, 700)", { theme })
    expect(result1).toBe(
      "color-mix(in srgb, var(--ui-colors-red-500) 60%, #fff)",
    )
    expect(result2).toBe("var(--ui-colors-red-500)")
    expect(result3).toBe(
      "color-mix(in srgb, var(--ui-colors-red-500) 60%, #000)",
    )
  })
})

describe("calc", () => {
  test("returns calc CSS string", () => {
    const calc = generateCalc("sizes")
    const result1 = calc("calc(lg / 2)", { css, theme })
    const result2 = calc("calc(lg - calc(2xs * 2))", { css, theme })
    expect(result1).toBe("calc(var(--ui-sizes-lg) / 2)")
    expect(result2).toBe(
      "calc(var(--ui-sizes-lg) - calc(var(--ui-sizes-2xs) * 2))",
    )
  })

  test("returns min CSS string", () => {
    const calc = generateCalc("sizes")
    const result1 = calc("min(100%, lg)", { css, theme })
    const result2 = calc("min(100%, calc(md + md))", { css, theme })
    expect(result1).toBe("min(100%, var(--ui-sizes-lg))")
    expect(result2).toBe(
      "min(100%, calc(var(--ui-sizes-md) + var(--ui-sizes-md)))",
    )
  })

  test("returns max CSS string", () => {
    const calc = generateCalc("sizes")
    const result1 = calc("max(100%, lg)", { css, theme })
    const result2 = calc("max(100%, calc(md + md))", { css, theme })
    expect(result1).toBe("max(100%, var(--ui-sizes-lg))")
    expect(result2).toBe(
      "max(100%, calc(var(--ui-sizes-md) + var(--ui-sizes-md)))",
    )
  })

  test("returns clamp CSS string", () => {
    const calc = generateCalc("sizes")
    const result1 = calc("clamp(md, 100%, xl)", { css, theme })
    const result2 = calc("clamp(md, 100%, calc(md + md))", { css, theme })
    const result3 = calc("clamp(md, lg)", { css, theme })
    expect(result1).toBe("clamp(var(--ui-sizes-md), 100%, var(--ui-sizes-xl))")
    expect(result2).toBe(
      "clamp(var(--ui-sizes-md), 100%, calc(var(--ui-sizes-md) + var(--ui-sizes-md)))",
    )
    expect(result3).toBe("clamp(var(--ui-sizes-md), 100%, var(--ui-sizes-lg))")
  })

  test("returns minmax CSS string", () => {
    const calc = generateCalc("sizes")
    const result1 = calc("minmax(md, xl)", { css, theme })
    expect(result1).toBe("minmax(var(--ui-sizes-md), var(--ui-sizes-xl))")
  })

  test("returns fit-content CSS string", () => {
    const calc = generateCalc("sizes")
    const result1 = calc("fit-content(xl)", { css, theme })
    expect(result1).toBe("fit-content(var(--ui-sizes-xl))")
  })
})

describe("gradient", () => {
  test("returns linear gradient CSS string", () => {
    const result1 = gradient("linear(to-r, #7928CA, #FF0080)", { css, theme })
    const result2 = gradient("linear(to-r, #7928CA 30%, #FF0080)", {
      css,
      theme,
    })
    const result3 = gradient(
      "linear(to-r, #7928CA calc(30% - 10px), #FF0080)",
      { css, theme },
    )
    expect(result1).toBe("linear-gradient(to right, #7928CA, #FF0080)")
    expect(result2).toBe("linear-gradient(to right, #7928CA 30%, #FF0080)")
    expect(result3).toBe(
      "linear-gradient(to right, #7928CA calc(30% - 10px), #FF0080)",
    )
  })

  test("returns radial gradient CSS string", () => {
    const result = gradient("radial(circle, #7928CA, #FF0080)", { css, theme })
    expect(result).toBe("radial-gradient(circle, #7928CA, #FF0080)")
  })

  test("returns original value if not a gradient", () => {
    expect(gradient("path/to/image.png", { css, theme })).toBe(
      "url('path/to/image.png')",
    )
  })

  test("handles global and null values", () => {
    expect(gradient(null, { css, theme })).toBeNull()
    expect(gradient("()", { css, theme })).toBe("()")
    expect(gradient("inherit", { css, theme })).toBe("inherit")
  })

  test("returns the value as is if the color is empty", () => {
    expect(gradient("linear()", { css, theme })).toBe("linear()")
  })

  test("returns the value as is", () => {
    expect(
      gradient("radial-gradient(circle, #7928CA, #FF0080)", { css, theme }),
    ).toBe("radial-gradient(circle, #7928CA, #FF0080)")
  })

  test("If the value is incorrect, return the value as is.", () => {
    expect(gradient("()", { css, theme })).toBe("()")
    expect(gradient("linear(to-r)", { css, theme })).toBe("linear(to-r)")
  })

  test("returns the value as is the theme token", () => {
    expect(gradient("var(--ui-gradients-primary)", { css, theme })).toBe(
      "var(--ui-gradients-primary)",
    )
  })
})

describe("animation", () => {
  test("returns animation CSS string for object notation", () => {
    const result = animation(
      {
        duration: "slower",
        fillMode: "forwards",
        keyframes: {
          "0%": {
            transform: "translateX(400%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        timingFunction: "ease-in-out",
      },
      { css, theme },
    )
    expect(result).toMatch(
      /animation-.* var\(--ui-transitions-duration-slower\) var\(--ui-transitions-easing-ease-in-out\) 0s 1 normal forwards running/,
    )
  })

  test("returns animation CSS string for string notation", () => {
    const result = animation("gradient1", { css, theme })
    expect(result).toBe("var(--ui-animations-gradient1)")
  })

  test("returns animation CSS multi string for string notation", () => {
    const result = animation("gradient1, gradient2", { css, theme })
    expect(result).toBe(
      "var(--ui-animations-gradient1),var(--ui-animations-gradient2)",
    )
  })

  test("handles global values", () => {
    const result = animation("inherit", { css, theme })
    expect(result).toBe("inherit")
  })

  test("returns original value if not an animation", () => {
    const result = animation("none", { css, theme })
    expect(result).toBe("none")
  })
})
