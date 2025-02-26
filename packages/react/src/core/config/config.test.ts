import type { StyledTheme } from "../theme"
import { defaultConfig, defaultTheme } from "../../theme"
import { css } from "../css"
import { transformTheme } from "../theme"
import { animation } from "./animation"
import { generateCalc } from "./calc"
import { colorMix } from "./color-mix"
import { gradient } from "./gradient"
import { transforms } from "./index"
import { pipe } from "./utils"

const theme = transformTheme(
  {
    ...defaultTheme,
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
    gradients: {
      primary: "linear(to-r, #7928CA, #FF0080)",
    },
  },
  defaultConfig,
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

  test("truncated transform", () => {
    const result = transforms.truncated(true)
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

  test.todo("transform transform")

  test.todo("filter transform")

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
    expect(result2).toBe("color-mix(in srgb, var(--ui-colors-green) 50%, #000)")
    expect(result3).toBe("color-mix(in srgb, rgb(255, 0, 0) 50%, #000)")
  })

  test("returns shade CSS string", () => {
    const result1 = colorMix("tint(red.500, 50%)", { theme })
    const result2 = colorMix("tint(green, 50)", { theme })
    const result3 = colorMix("tint(rgb(255, 0, 0), 50%)", { theme })
    expect(result1).toBe(
      "color-mix(in srgb, var(--ui-colors-red-500) 50%, #fff)",
    )
    expect(result2).toBe("color-mix(in srgb, var(--ui-colors-green) 50%, #fff)")
    expect(result3).toBe("color-mix(in srgb, rgb(255, 0, 0) 50%, #fff)")
  })

  test("returns transparentize CSS string", () => {
    const result1 = colorMix("transparentize(red.500, 50%)", { theme })
    const result2 = colorMix("transparentize(green, 50)", { theme })
    const result3 = colorMix("transparentize(rgb(255, 0, 0), 50%)", { theme })
    expect(result1).toBe(
      "color-mix(in srgb, var(--ui-colors-red-500) 50%, transparent)",
    )
    expect(result2).toBe(
      "color-mix(in srgb, var(--ui-colors-green) 50%, transparent)",
    )
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
      /animation-.* var\(--ui-durations-slower\) var\(--ui-easings-ease-in-out\) 0s 1 normal forwards running/,
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
