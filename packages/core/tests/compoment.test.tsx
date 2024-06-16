import { renderHook } from "@yamada-ui/test"
import {
  ThemeProvider,
  useComponentStyle,
  useMultiComponentStyle,
} from "../src"

const theme1 = {
  breakpoints: {
    sm: "30em",
    md: "48em",
    lg: "61em",
    xl: "80em",
    "2xl": "90em",
  },
  components: {
    Button: {
      baseStyle: {
        padding: "8px 12px",
        borderRadius: "4px",
      },
      variants: {
        solid: {
          bg: "blue.500",
          color: "white",
        },
        outline: {
          border: "1px solid",
          borderColor: "blue.500",
          color: "blue.500",
        },
      },
      sizes: {
        sm: {
          fontSize: "sm",
          padding: "4px 8px",
        },
        md: {
          fontSize: "md",
          padding: "8px 12px",
        },
      },
      defaultProps: {
        size: "md",
        variant: "solid",
      },
    },
  },
}

const theme2 = {
  breakpoints: {
    sm: "30em",
    md: "48em",
    lg: "61em",
    xl: "80em",
    "2xl": "90em",
  },
  components: {
    Button: {
      baseStyle: {
        container: { padding: "8px 12px", borderRadius: "4px" },
      },
      variants: {
        solid: {
          container: { bg: "blue.500", color: "white" },
        },
        outline: {
          container: {
            border: "1px solid",
            borderColor: "blue.500",
            color: "blue.500",
          },
        },
      },
      sizes: {
        sm: {
          container: { fontSize: "sm", padding: "4px 8px" },
        },
        md: {
          container: { fontSize: "md", padding: "8px 12px" },
        },
      },
      defaultProps: {
        size: "md",
        variant: "solid",
      },
    },
  },
}

describe("useComponentStyle", () => {
  beforeAll(() => {
    vi.spyOn(window, "getComputedStyle").mockImplementation(
      () =>
        ({
          fontSize: "16px",
        }) as CSSStyleDeclaration,
    )
  })

  afterAll(() => {
    vi.spyOn(window, "getComputedStyle").mockRestore()
  })

  test("returns the correct styles for a component", () => {
    const { result } = renderHook(() => useComponentStyle("Button", {}), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme1}>{children}</ThemeProvider>
      ),
    })

    expect(result.current[0]).toStrictEqual({
      padding: "8px 12px",
      borderRadius: "4px",
      bg: "blue.500",
      fontSize: "md",
      color: "white",
    })
  })

  test("overrides default props with provided props", () => {
    const { result } = renderHook(
      () => useComponentStyle("Button", { variant: "outline", size: "sm" }),
      {
        wrapper: ({ children }) => (
          <ThemeProvider theme={theme1}>{children}</ThemeProvider>
        ),
      },
    )

    expect(result.current[0]).toStrictEqual({
      padding: "4px 8px",
      borderRadius: "4px",
      border: "1px solid",
      borderColor: "blue.500",
      fontSize: "sm",
      color: "blue.500",
    })
  })

  test("returns dark mode styles.", () => {
    const { result } = renderHook(
      () =>
        useComponentStyle("Button", {
          variant: ["solid", "outline"],
          size: "sm",
        }),
      {
        wrapper: ({ children }) => (
          <ThemeProvider theme={theme1}>{children}</ThemeProvider>
        ),
      },
    )

    expect(result.current[0]).toStrictEqual({
      padding: "4px 8px",
      borderRadius: "4px",
      fontSize: "sm",
      ".ui-light &:not([data-mode]), [data-mode=light] &:not([data-mode]), &[data-mode=light]":
        { bg: "blue.500", color: "white" },
      ".ui-dark &:not([data-mode]), [data-mode=dark] &:not([data-mode]), &[data-mode=dark]":
        { border: "1px solid", borderColor: "blue.500", color: "blue.500" },
    })
  })

  test("returns responsive styles", () => {
    const { result } = renderHook(
      () =>
        useComponentStyle("Button", {
          variant: { base: "solid", md: "outline" },
          size: "sm",
        }),
      {
        wrapper: ({ children }) => (
          <ThemeProvider theme={theme1}>{children}</ThemeProvider>
        ),
      },
    )

    expect(result.current[0]).toStrictEqual({
      padding: "4px 8px",
      borderRadius: "4px",
      fontSize: "sm",
      "@media screen and (min-width: 769px)": {
        bg: "blue.500",
        color: "white",
      },
      "@media screen and (max-width: 768px)": {
        border: "1px solid",
        borderColor: "blue.500",
        color: "blue.500",
      },
    })
  })

  test("returns base styles when only 'base' key is provided in responsive object", () => {
    const { result } = renderHook(
      () =>
        useComponentStyle("Button", {
          variant: { base: "solid" },
          size: { base: "sm" },
        }),
      {
        wrapper: ({ children }) => (
          <ThemeProvider theme={theme1}>{children}</ThemeProvider>
        ),
      },
    )

    expect(result.current[0]).toStrictEqual({
      bg: "blue.500",
      color: "white",
      fontSize: "sm",
      padding: "4px 8px",
      borderRadius: "4px",
    })
  })

  test("applies size styles correctly", () => {
    const { result } = renderHook(
      () => useComponentStyle("Button", { size: "sm" }),
      {
        wrapper: ({ children }) => (
          <ThemeProvider theme={theme1}>{children}</ThemeProvider>
        ),
      },
    )

    expect(result.current[0]).toStrictEqual({
      fontSize: "sm",
      padding: "4px 8px",
      borderRadius: "4px",
      bg: "blue.500",
      color: "white",
    })
  })

  test("returns correct styles for multiple breakpoints", () => {
    const { result } = renderHook(
      () =>
        useComponentStyle("Button", {
          variant: { sm: "solid", md: "outline", lg: "solid" },
          size: { sm: "sm", md: "md", lg: "lg" },
        }),
      {
        wrapper: ({ children }) => (
          <ThemeProvider theme={theme1}>{children}</ThemeProvider>
        ),
      },
    )

    expect(result.current[0]).toStrictEqual({
      padding: "8px 12px",
      borderRadius: "4px",
      "@media screen and (min-width: 977px)": {},
      "@media screen and (min-width: 769px) and (max-width: 976px)": {
        bg: "blue.500",
        color: "white",
      },
      "@media screen and (min-width: 481px) and (max-width: 768px)": {
        fontSize: "md",
        padding: "8px 12px",
        border: "1px solid",
        borderColor: "blue.500",
        color: "blue.500",
      },
      "@media screen and (max-width: 480px)": {
        fontSize: "sm",
        padding: "4px 8px",
        bg: "blue.500",
        color: "white",
      },
    })
  })

  test("returns correct styles for color modes", () => {
    const { result } = renderHook(
      () =>
        useComponentStyle("Button", {
          colorMode: "dark",
          variant: "solid",
          size: "md",
        }),
      {
        wrapper: ({ children }) => (
          <ThemeProvider theme={theme1}>{children}</ThemeProvider>
        ),
      },
    )

    expect(result.current[0]).toStrictEqual({
      padding: "8px 12px",
      borderRadius: "4px",
      bg: "blue.500",
      fontSize: "md",
      color: "white",
    })
  })
})

describe("useMultiComponentStyle", () => {
  test("returns the correct styles for multi-variant components", () => {
    const { result } = renderHook(
      () => useMultiComponentStyle("Button", { variant: "solid", size: "sm" }),
      {
        wrapper: ({ children }) => (
          <ThemeProvider theme={theme2}>{children}</ThemeProvider>
        ),
      },
    )

    expect(result.current[0]).toStrictEqual({
      container: {
        bg: "blue.500",
        borderRadius: "4px",
        color: "white",
        fontSize: "sm",
        padding: "4px 8px",
      },
    })
  })
})
