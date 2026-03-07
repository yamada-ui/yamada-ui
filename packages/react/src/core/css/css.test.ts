import { styledTheme, system } from "#test"
import { getCondition } from "./conditions"
import { css } from "./css"

describe("css", () => {
  test("should return the correct token values", () => {
    const result = css(
      system,
      styledTheme,
    )({ color: "red", lineClamp: 1, px: "md" })
    expect(result).toStrictEqual({
      "--line-clamp": 1,
      color: "var(--ui-colors-red)",
      display: "-webkit-box",
      overflow: "hidden",
      paddingInlineEnd: "var(--ui-spaces-md)",
      paddingInlineStart: "var(--ui-spaces-md)",
      textOverflow: "ellipsis",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "var(--line-clamp)",
    })
  })
  test("should return the correct color-mix values", () => {
    const result = css(system, styledTheme)({ color: "tint(red.500, 50%)" })
    expect(result).toStrictEqual({
      "--mix-color": "color-mix(in srgb, var(--ui-colors-red-500) 50%, #fff)",
      color: "var(--mix-color, var(--ui-colors-red-500))",
    })
  })

  test("should return the correct responsive values", () => {
    const result = css(
      system,
      styledTheme,
    )({ color: { base: "red", md: "blue" } })
    expect(result).toStrictEqual({
      "@media screen and (max-width: 768px)": {
        color: "var(--ui-colors-blue)",
      },
      color: "var(--ui-colors-red)",
    })
  })

  test("should return the correct color mode values", () => {
    const result = css(system, styledTheme)({ color: ["red", "blue"] })
    expect(result).toStrictEqual({
      color: "var(--ui-colors-red)",
      [getCondition("_dark")]: {
        color: "var(--ui-colors-blue)",
      },
    })
  })

  test("should return the correct conditional values", () => {
    const result = css(
      system,
      styledTheme,
    )({ bg: { base: "red", _hover: "yellow" } })
    expect(result).toStrictEqual({
      background: "var(--ui-colors-red)",
      [getCondition("_hover")]: {
        background: "var(--ui-colors-yellow)",
      },
    })
  })

  test("should return the correct color mode and responsive values", () => {
    const result = css(
      system,
      styledTheme,
    )({
      bg: { base: ["blue", "red"], md: ["red", "blue"] },
      color: [
        { base: "red", md: "blue" },
        { base: "blue", md: "red" },
      ],
    })
    expect(result).toStrictEqual({
      background: "var(--ui-colors-blue)",
      color: "var(--ui-colors-red)",
      [getCondition("_dark")]: {
        background: "var(--ui-colors-red)",
        color: "var(--ui-colors-blue)",
        [system.breakpoints.getQuery("md")!]: {
          color: "var(--ui-colors-red)",
        },
      },
      [system.breakpoints.getQuery("md")!]: {
        background: "var(--ui-colors-red)",
        color: "var(--ui-colors-blue)",
        [getCondition("_dark")]: {
          background: "var(--ui-colors-blue)",
        },
      },
    })
  })

  test("should return the correct responsive and conditional values", () => {
    const result = css(
      system,
      styledTheme,
    )({
      bg: {
        base: { base: "red", _hover: "blue" },
        md: { base: "blue", _hover: "red" },
      },
    })
    expect(result).toStrictEqual({
      background: "var(--ui-colors-red)",
      [getCondition("_hover")]: {
        background: "var(--ui-colors-blue)",
      },
      [system.breakpoints.getQuery("md")!]: {
        background: "var(--ui-colors-blue)",
        [getCondition("_hover")]: {
          background: "var(--ui-colors-red)",
        },
      },
    })
  })

  test("should return the correct media query values", () => {
    const result = css(
      system,
      styledTheme,
    )({ _media: [{ css: { color: "red" }, maxW: "md" }] })
    expect(result).toStrictEqual({
      "@media (max-width: var(--ui-sizes-md))": {
        color: "var(--ui-colors-red)",
      },
    })
  })

  test("should return the correct animation values", () => {
    const result = css(
      system,
      styledTheme,
    )({
      _keyframes: { from: { opacity: 0 }, to: { opacity: 1 } },
    })
    expect(result.animationName).toMatch(/animation-.*/)
  })

  test("should return the correct important values", () => {
    const result = css(
      system,
      styledTheme,
    )({ bg: "blue !important", color: "red!" })
    expect(result).toStrictEqual({
      background: "var(--ui-colors-blue) !important",
      color: "var(--ui-colors-red) !important",
    })
  })

  test("should return the correct variable values", () => {
    const result = css(
      system,
      styledTheme,
    )({
      "--token-1": "colorScheme.solid",
      "--token-2": "colors.red",
      "--token-3": "spaces.md",
      "--token-4": "unknown",
    })
    expect(result).toStrictEqual({
      "--token-1": "var(--ui-colorScheme-solid)",
      "--token-2": "var(--ui-colors-red)",
      "--token-3": "var(--ui-spaces-md)",
      "--token-4": "unknown",
    })
  })

  test("should return the correct interpolation values", () => {
    const result = css(
      system,
      styledTheme,
    )({
      bg: "{colorScheme.solid}",
      border: "{sizes.px} solid {colors.red}",
      color: "{unknown, red}",
      p: "{unknown, spaces.md}",
    })
    expect(result).toStrictEqual({
      background: "var(--ui-colorScheme-solid)",
      border: "var(--ui-sizes-px) solid var(--ui-colors-red)",
      color: "var(--unknown, red)",
      padding: "var(--unknown, var(--ui-spaces-md))",
    })
  })

  test("handles nullable values", () => {
    const result = css(system, styledTheme)({ color: undefined })
    expect(result).toStrictEqual({})
  })

  test("handles empty conditional values", () => {
    const result = css(system, styledTheme)({ color: {} })
    expect(result).toStrictEqual({ color: "" })
  })
})
