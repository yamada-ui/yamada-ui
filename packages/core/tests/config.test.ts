import type { StyledTheme } from "../src"
import {
  transformTheme,
  generateAnimation,
  generateGradient,
  transforms,
  mode,
  keyframes,
  css,
} from "../src"

const theme = transformTheme(
  {
    sizes: {
      max: "max-content",
      min: "min-content",
      full: "100%",
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
    },
    spaces: {
      px: "1px",
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
    },
    colors: {
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
    },
    animations: {
      gradient1: {
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
        duration: "10s",
        iterationCount: "infinite",
        timingFunction: "linear",
      },
      gradient2: [
        {
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
          duration: "5s",
          iterationCount: "infinite",
          timingFunction: "linear",
        },
        {
          keyframes: {
            "0%": {
              transform: "translateX(400%)",
            },
            "100%": {
              transform: "translateX(0%)",
            },
          },
          duration: "slower",
          fillMode: "forwards",
          timingFunction: "ease-in-out",
        },
      ],
    },
    gradients: {
      primary: "linear(to-r, #7928CA, #FF0080)",
    },
    transitions: {
      property: {
        common:
          "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
        colors: "background-color, border-color, color, fill, stroke",
        dimensions: "width, height",
        position: "left, right, top, bottom",
        background: "background-color, background-image, background-position",
      },

      easing: {
        "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
        "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
        "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      },

      duration: {
        "ultra-fast": "50ms",
        faster: "100ms",
        fast: "150ms",
        normal: "200ms",
        slow: "300ms",
        slower: "400ms",
        "ultra-slow": "500ms",
      },
    },
  },
  {
    initialThemeScheme: "base",
    initialColorMode: "light",
    var: { prefix: "ui" },
    breakpoint: { direction: "down" },
  },
) as StyledTheme

describe("transforms", () => {
  test("var transform", () => {
    const result1 = transforms.var(
      [{ name: "space", token: "spaces", value: "4" }],
      theme,
    )
    const result2 = transforms.var(
      [{ name: "space", token: "spaces", value: { base: "4", md: "2" } }],
      theme,
    )
    const result3 = transforms.var(
      [{ name: "color", token: "colors", value: ["gray.500", "gray.300"] }],
      theme,
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
    const result = transforms.token("colors")("gray.500", theme, css)
    expect(result).toBe("var(--ui-colors-gray-500)")
  })

  test("styles transform", () => {
    const result = transforms.styles("textStyles")("gradient", theme, css)
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
    const result = transforms.fraction()(0.5, theme, css)
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
      color: "transparent",
      backgroundClip: "text",
    })
    expect(result2).toStrictEqual({
      backgroundClip: "content-box",
    })
  })

  test("function transform", () => {
    const result1 = transforms.function("translateX")("100px", theme, css)
    const result2 = transforms.function("translateX", transforms.px)(
      100,
      theme,
      css,
    )
    expect(result1).toBe("translateX(100px)")
    expect(result2).toBe("translateX(100px)")
  })

  test("transform transform", () => {
    const result1 = transforms.transform("auto", theme, css)
    const result2 = transforms.transform("auto-3d", theme, css)
    const result3 = transforms.transform(null, theme, css)
    expect(result1).toBe(
      "translateX(var(--ui-translate-x, 0)) translateY(var(--ui-translate-y, 0)) rotate(var(--ui-rotate, 0)) scaleX(var(--ui-scale-x, 1)) scaleY(var(--ui-scale-y, 1)) skewX(var(--ui-skew-x, 0)) skewY(var(--ui-skew-y, 0))",
    )
    expect(result2).toBe(
      "translate3d(var(--ui-translate-x, 0), var(--ui-translate-y, 0), 0) rotate(var(--ui-rotate, 0)) scaleX(var(--ui-scale-x, 1)) scaleY(var(--ui-scale-y, 1)) skewX(var(--ui-skew-x, 0)) skewY(var(--ui-skew-y, 0))",
    )
    expect(result3).toBeNull()
  })

  test("filter transform", () => {
    const result1 = transforms.filter("filter")("blur(5px)", theme, css)
    const result2 = transforms.filter("filter")("auto", theme, css)
    const result3 = transforms.filter("backdrop")("auto", theme, css)
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
      theme,
      css,
    )
    expect(result).toStrictEqual({
      "@media print ": { color: "black" },
    })
  })

  test("container transform", () => {
    const result1 = transforms.container(
      [{ name: "sm", css: { maxWidth: "640px" } }],
      theme,
      css,
    )
    const result2 = transforms.container(
      [{ name: "xl", maxWidth: "xl", css: { maxWidth: "640px" } }],
      theme,
      css,
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
      [{ query: "(display: grid)", css: { display: "grid" } }],
      theme,
      css,
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

describe("generateGradient", () => {
  test("returns linear gradient CSS string", () => {
    const result1 = generateGradient(
      "linear(to-r, #7928CA, #FF0080)",
      theme,
      css,
    )
    const result2 = generateGradient(
      "linear(to-r, #7928CA 30%, #FF0080)",
      theme,
      css,
    )
    const result3 = generateGradient(
      "linear(to-r, #7928CA calc(30% - 10px), #FF0080)",
      theme,
      css,
    )
    expect(result1).toBe("linear-gradient(to right, #7928CA, #FF0080)")
    expect(result2).toBe("linear-gradient(to right, #7928CA 30%, #FF0080)")
    expect(result3).toBe(
      "linear-gradient(to right, #7928CA calc(30% - 10px), #FF0080)",
    )
  })

  test("returns radial gradient CSS string", () => {
    const result = generateGradient(
      "radial(circle, #7928CA, #FF0080)",
      theme,
      css,
    )
    expect(result).toBe("radial-gradient(circle, #7928CA, #FF0080)")
  })

  test("returns original value if not a gradient", () => {
    expect(generateGradient("path/to/image.png", theme, css)).toBe(
      "url('path/to/image.png')",
    )
  })

  test("handles global and null values", () => {
    expect(generateGradient(null, theme, css)).toBeNull()
    expect(generateGradient("()", theme, css)).toBe("()")
    expect(generateGradient("inherit", theme, css)).toBe("inherit")
  })

  test("returns the value as is if the color is empty", () => {
    expect(generateGradient("linear()", theme, css)).toBe("linear()")
  })

  test("returns the value as is", () => {
    expect(
      generateGradient("radial-gradient(circle, #7928CA, #FF0080)", theme, css),
    ).toBe("radial-gradient(circle, #7928CA, #FF0080)")
  })

  test("If the value is incorrect, return the value as is.", () => {
    expect(generateGradient("()", theme, css)).toBe("()")
    expect(generateGradient("linear(to-r)", theme, css)).toBe("linear(to-r)")
  })

  test("returns the value as is the theme token", () => {
    expect(generateGradient("var(--ui-gradients-primary)", theme, css)).toBe(
      "var(--ui-gradients-primary)",
    )
  })
})

describe("generateAnimation", () => {
  test("returns animation CSS string for object notation", () => {
    const result = generateAnimation(
      {
        keyframes: {
          "0%": {
            transform: "translateX(400%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        duration: "slower",
        fillMode: "forwards",
        timingFunction: "ease-in-out",
      },
      theme,
      css,
    )
    expect(result).toMatch(
      /animation-.* var\(--ui-transitions-duration-slower\) var\(--ui-transitions-easing-ease-in-out\) 0s 1 normal forwards running/,
    )
  })

  test("returns animation CSS string for string notation", () => {
    const result = generateAnimation("gradient1", theme, css)
    expect(result).toBe("var(--ui-animations-gradient1)")
  })

  test("returns animation CSS multi string for string notation", () => {
    const result = generateAnimation("gradient1, gradient2", theme, css)
    expect(result).toBe(
      "var(--ui-animations-gradient1),var(--ui-animations-gradient2)",
    )
  })

  test("handles global values", () => {
    const result = generateAnimation("inherit", theme, css)
    expect(result).toBe("inherit")
  })

  test("returns original value if not an animation", () => {
    const result = generateAnimation("none", theme, css)
    expect(result).toBe("none")
  })
})
