import { render, screen } from "@yamada-ui/test"
import type { Dict } from "@yamada-ui/utils"
import type { FC } from "react"
import type { MockInstance } from "vitest"
import type { StyledTheme } from "../src"
import { css, transformTheme, useCSS, ui } from "../src"

const theme = transformTheme(
  {
    fontSizes: {
      "2xs": "0.625rem",
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2rem",
      "5xl": "2.25rem",
      "6xl": "3rem",
      "7xl": "3.75rem",
      "8xl": "4.5rem",
      "9xl": "6rem",
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
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
    breakpoints: {
      sm: "30em",
      md: "48em",
      lg: "61em",
      xl: "80em",
      "2xl": "90em",
    },
    styles: {
      layerStyles: {
        muted: { bg: "gray.500" },
      },
      textStyles: {
        gradient: {
          w: "full",
          fontSize: "5xl",
          bgGradient: "linear(to-l, #7928CA, #FF0080)",
          bgClip: "text",
        },
      },
      heading: {
        "2xl": { fontSize: "2xl" },
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

describe("CSS", () => {
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
    const result = css({
      display: "block",
      color: "gray.500",
      fontSize: "md",
      mx: "4",
    })(theme)

    expect(result).toStrictEqual({
      display: "block",
      color: "var(--ui-colors-gray-500)",
      fontSize: "var(--ui-fontSizes-md)",
      marginInlineEnd: "var(--ui-spaces-4)",
      marginInlineStart: "var(--ui-spaces-4)",
    })
  })

  test("returns system props responsive styles", () => {
    const result = css({
      fontSize: { base: "md", md: "sm" },
    })(theme)

    expect(result).toStrictEqual({
      "@media screen and (max-width: 768px)": {
        fontSize: "var(--ui-fontSizes-sm)",
      },
      fontSize: "var(--ui-fontSizes-md)",
    })
  })

  test("returns system props color-mode styles", () => {
    const result = css({
      color: ["blackAlpha.500", "whiteAlpha.500"],
    })(theme)

    expect(result).toStrictEqual({
      ".ui-dark &:not([data-mode]), [data-mode=dark] &:not([data-mode]), &[data-mode=dark]":
        {
          color: "var(--ui-colors-whiteAlpha-500)",
        },
      color: "var(--ui-colors-blackAlpha-500)",
    })
  })

  test("returns nested system props styles", () => {
    const result = css({
      color: "gray.500",
      _hover: {
        color: "gray.300",
      },
    })(theme)

    expect(result).toStrictEqual({
      "&:hover, &[data-hover]": {
        color: "var(--ui-colors-gray-300)",
      },
      color: "var(--ui-colors-gray-500)",
    })
  })

  test("works with functional arguments", () => {
    const result = css((t: Dict) => ({
      color: t.colors?.gray?.[500],
    }))(theme)

    expect(result).toStrictEqual({
      color: "#6b7280",
    })
  })

  test("supports functional values", () => {
    const result = css({
      color: (t: Dict) => t.colors?.gray?.[500],
    })(theme)

    expect(result).toStrictEqual({
      color: "#6b7280",
    })
  })

  test("returns omitted style prop", () => {
    const result = css({
      color: "gray.500",
      fontSize: "md",
    })(theme, (prop) => prop === "color")

    expect(result).toStrictEqual({
      fontSize: "var(--ui-fontSizes-md)",
    })
  })

  test("returns omitted undefined value", () => {
    const result = css({
      color: "gray.500",
      fontSize: undefined,
    })(theme)

    expect(result).toStrictEqual({
      color: "var(--ui-colors-gray-500)",
    })
  })

  test("returns line clamp", () => {
    const result = css({
      lineClamp: 1,
    })(theme)

    expect(result).toStrictEqual({
      "--ui-line-clamp": 1,
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "var(--ui-line-clamp)",
      display: "-webkit-box",
      overflow: "hidden",
      textOverflow: "ellipsis",
    })
  })

  test("returns css var", () => {
    const result = css({
      vars: [{ name: "space", token: "spaces", value: "4" }],
    })(theme)

    expect(result).toStrictEqual({
      "--ui-space": "var(--ui-spaces-4)",
    })
  })

  test("returns apply", () => {
    const result = css({
      apply: "heading.2xl",
    })(theme)

    expect(result).toStrictEqual({
      fontSize: "var(--ui-fontSizes-2xl)",
    })
  })

  test("returns layer styles", () => {
    const result = css({
      layerStyle: "muted",
    })(theme)

    expect(result).toStrictEqual({
      background: "var(--ui-colors-gray-500)",
    })
  })

  test("returns text styles", () => {
    const result = css({
      textStyle: "gradient",
    })(theme)

    expect(result).toStrictEqual({
      backgroundClip: "text",
      backgroundImage: "linear-gradient(to left, #7928CA, #FF0080)",
      color: "transparent",
      fontSize: "var(--ui-fontSizes-5xl)",
      width: "full",
    })
  })

  test("returns interpolation", () => {
    const result = css({
      p: "$spaces.4 $spaces.4",
      m: "$hoge",
    })(theme)

    expect(result).toStrictEqual({
      padding: "var(--ui-spaces-4) var(--ui-spaces-4)",
      margin: "var(--ui-hoge)",
    })
  })
})

describe("useCSS", () => {
  test("returns styles with theme values", async () => {
    const Component: FC = () => {
      const className = useCSS({
        display: "block",
        color: "gray.500",
        fontSize: "md",
        mx: "4",
      })

      return <ui.div data-testid="component" className={className} />
    }

    render(<Component />)

    expect(screen.getByTestId("component")).toHaveStyle({
      display: "block",
      color: "var(--ui-colors-gray-500)",
      fontSize: "var(--ui-fontSizes-md)",
      marginInlineEnd: "var(--ui-spaces-4)",
      marginInlineStart: "var(--ui-spaces-4)",
    })
  })

  test("supports functional values", () => {
    const Component: FC = () => {
      const className = useCSS({
        color: (t: Dict) => t.colors?.gray?.[500],
      })

      return <ui.div data-testid="component" className={className} />
    }

    render(<Component />)

    expect(screen.getByTestId("component")).toHaveStyle({
      color: "#6b7280",
    })
  })
})
