import type { MockInstance } from "vitest"
import type { Dict } from "../../utils"
import type { StyledTheme } from "../theme"
import { defaultConfig, defaultTheme } from "../../theme"
import { pseudos } from "../pseudos"
import { transformTheme } from "../theme"
import { css } from "./css"

const theme = transformTheme(
  {
    ...defaultTheme,
    styles: {
      heading: {
        "2xl": { fontSize: "2xl" },
      },
      layerStyles: {
        muted: { bg: "gray.500" },
      },
      textStyles: {
        gradient: {
          bgClip: "text",
          bgGradient: "linear(to-l, #7928CA, #FF0080)",
          fontSize: "5xl",
          w: "full",
        },
      },
    },
  },
  defaultConfig,
) as StyledTheme

describe("css", () => {
  let getComputedStyleMock: MockInstance

  beforeEach(() => {
    getComputedStyleMock = vi
      .spyOn(window, "getComputedStyle")
      .mockImplementation(
        () =>
          ({
            fontSize: "16px",
          }) as CSSStyleDeclaration,
      )
  })

  afterEach(() => {
    getComputedStyleMock.mockRestore()
  })

  test("returns system props styles", () => {
    const result = css(theme)({
      color: "gray.500",
      display: "block",
      fontSize: "md",
      mx: "4",
    })

    expect(result).toStrictEqual({
      color: "var(--ui-colors-gray-500)",
      display: "block",
      fontSize: "var(--ui-fontSizes-md)",
      marginInlineEnd: "var(--ui-spaces-4)",
      marginInlineStart: "var(--ui-spaces-4)",
    })
  })

  test("returns system props responsive styles", () => {
    const result = css(theme)({
      fontSize: { base: "md", md: "sm" },
    })

    expect(result).toStrictEqual({
      "@media screen and (max-width: 768px)": {
        fontSize: "var(--ui-fontSizes-sm)",
      },
      fontSize: "var(--ui-fontSizes-md)",
    })
  })

  test("returns system props color-mode styles", () => {
    const result = css(theme)({
      color: ["blackAlpha.500", "whiteAlpha.500"],
    })

    expect(result).toStrictEqual({
      ".ui-dark &:not([data-mode]), [data-mode=dark] &:not([data-mode]), &[data-mode=dark]":
        {
          color: "var(--ui-colors-whiteAlpha-500)",
        },
      color: "var(--ui-colors-blackAlpha-500)",
    })
  })

  test("returns nested system props styles", () => {
    const result = css(theme)({
      color: "gray.500",
      _hover: {
        color: "gray.300",
      },
    })

    expect(result).toStrictEqual({
      color: "var(--ui-colors-gray-500)",
      [pseudos._hover]: {
        color: "var(--ui-colors-gray-300)",
      },
    })
  })

  test("works with functional arguments", () => {
    const result = css(theme)((t: Dict) => ({
      color: t.colors?.gray?.[500],
    }))

    expect(result).toStrictEqual({
      color: "#737373",
    })
  })

  test("returns omitted undefined value", () => {
    const result = css(theme)({
      color: "gray.500",
      fontSize: undefined,
    })

    expect(result).toStrictEqual({
      color: "var(--ui-colors-gray-500)",
    })
  })

  test("returns line clamp", () => {
    const result = css(theme)({
      lineClamp: 1,
    })

    expect(result).toStrictEqual({
      "--line-clamp": 1,
      display: "-webkit-box",
      overflow: "hidden",
      textOverflow: "ellipsis",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "var(--line-clamp)",
    })
  })

  test("returns css var", () => {
    const result = css(theme)({
      vars: [{ name: "space", token: "spaces", value: "4" }],
    })

    expect(result).toStrictEqual({
      "--ui-space": "var(--ui-spaces-4)",
    })
  })

  test("returns apply", () => {
    const result = css(theme)({
      apply: "heading.2xl",
    })

    expect(result).toStrictEqual({
      fontSize: "var(--ui-fontSizes-2xl)",
    })
  })

  test("returns layer styles", () => {
    const result = css(theme)({
      layerStyle: "muted",
    })

    expect(result).toStrictEqual({
      background: "var(--ui-colors-gray-500)",
    })
  })

  test("returns text styles", () => {
    const result = css(theme)({
      textStyle: "gradient",
    })

    expect(result).toStrictEqual({
      backgroundClip: "text",
      backgroundImage: "linear-gradient(to left, #7928CA, #FF0080)",
      color: "transparent",
      fontSize: "var(--ui-fontSizes-5xl)",
      width: "var(--ui-sizes-full)",
    })
  })

  test("returns interpolation", () => {
    const result = css(theme)({
      m: "{yamada}",
      p: "{spaces.4} {spaces.4}",
    })

    expect(result).toStrictEqual({
      margin: "var(--ui-yamada)",
      padding: "var(--ui-spaces-4) var(--ui-spaces-4)",
    })
  })
})
