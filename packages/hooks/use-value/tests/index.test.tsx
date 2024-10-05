import type { StyledTheme } from "@yamada-ui/core"
import type { MatchMediaMock } from "@yamada-ui/test"
import { ColorModeProvider, ThemeProvider } from "@yamada-ui/core"
import { mocks, renderHook } from "@yamada-ui/test"
import { noop } from "@yamada-ui/utils"
import { getValue, useValue } from "../src"

describe("useValue", () => {
  const theme = {
    breakpoints: {
      sm: "30em",
      md: "48em",
      lg: "61em",
      xl: "80em",
      "2xl": "90em",
    },
  }

  let mock: MatchMediaMock

  beforeAll(() => {
    mock = mocks.matchMedia()
  })

  afterEach(() => {
    mock.clear()
  })

  test("Returns the base value when passing a responsive object", () => {
    const { result } = renderHook(() => useValue({ base: "base", md: "md" }), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>
          <ColorModeProvider>{children}</ColorModeProvider>
        </ThemeProvider>
      ),
    })
    expect(result.current).toBe("base")
  })

  test("Returns the correct breakpoint value based on the current screen width", () => {
    mock.useMediaQuery("(min-width: 481px) and (max-width: 768px)")

    const { result } = renderHook(() => useValue({ base: "base", md: "md" }), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>
          <ColorModeProvider>{children}</ColorModeProvider>
        </ThemeProvider>
      ),
    })

    expect(result.current).toBe("md")
  })

  test("Returns the correct value based on the current light mode", () => {
    const { result } = renderHook(() => useValue(["lightValue", "darkValue"]), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>
          <ColorModeProvider>{children}</ColorModeProvider>
        </ThemeProvider>
      ),
    })
    expect(result.current).toBe("lightValue")
  })

  test("Returns the correct value based on the current dark mode", () => {
    const { result } = renderHook(() => useValue(["lightValue", "darkValue"]), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>
          <ColorModeProvider colorMode="dark">{children}</ColorModeProvider>
        </ThemeProvider>
      ),
    })
    expect(result.current).toBe("darkValue")
  })

  test("Returns the same value when passing a normal value", () => {
    const { result } = renderHook(() => useValue("normalValue"), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>
          <ColorModeProvider>{children}</ColorModeProvider>
        </ThemeProvider>
      ),
    })
    expect(result.current).toBe("normalValue")
  })

  test("Returns the correct value when passing an array containing objects for breakpoints", () => {
    const { result } = renderHook(
      () =>
        useValue([
          { base: "light-base", md: "light-md" },
          { base: "dark-base", md: "dark-md" },
        ]),
      {
        wrapper: ({ children }) => (
          <ThemeProvider theme={theme}>
            <ColorModeProvider>{children}</ColorModeProvider>
          </ThemeProvider>
        ),
      },
    )
    expect(result.current).toBe("light-base")
  })

  test("Returns the correct value when passing an object containing arrays for color mode", () => {
    const { result } = renderHook(
      () =>
        useValue({
          base: ["base-light", "base-dark"],
          md: ["md-light", "md-dark"],
        }),
      {
        wrapper: ({ children }) => (
          <ThemeProvider theme={theme}>
            <ColorModeProvider>{children}</ColorModeProvider>
          </ThemeProvider>
        ),
      },
    )
    expect(result.current).toBe("base-light")
  })
})

describe("getValue", () => {
  const theme: StyledTheme = {
    breakpoints: {
      base: "9999px",
      sm: "30em",
      md: "48em",
      lg: "61em",
      xl: "80em",
      "2xl": "90em",
    },
    changeThemeScheme: noop,
    themeScheme: "base",
    __breakpoints: {
      isResponsive: () => false,
      keys: ["base", "2xl", "xl", "lg", "md", "sm"],
      queries: [
        {
          breakpoint: "base",
          maxW: undefined,
          maxWQuery: undefined,
          minMaxQuery: "@media screen and (min-width: 1441px)",
          minW: 1441,
          minWQuery: "@media screen and (min-width: 1441px)",
          query: undefined,
        },
        {
          breakpoint: "2xl",
          maxW: 1440,
          maxWQuery: "@media screen and (max-width: 1440px)",
          minMaxQuery:
            "@media screen and (min-width: 1281px) and (max-width: 1440px)",
          minW: 1281,
          minWQuery: "@media screen and (min-width: 1281px)",
          query: "@media screen and (max-width: 1440px)",
        },
        {
          breakpoint: "xl",
          maxW: 1280,
          maxWQuery: "@media screen and (max-width: 1280px)",
          minMaxQuery:
            "@media screen and (min-width: 977px) and (max-width: 1280px)",
          minW: 977,
          minWQuery: "@media screen and (min-width: 977px)",
          query: "@media screen and (max-width: 1280px)",
        },
        {
          breakpoint: "lg",
          maxW: 976,
          maxWQuery: "@media screen and (max-width: 976px)",
          minMaxQuery:
            "@media screen and (min-width: 769px) and (max-width: 976px)",
          minW: 769,
          minWQuery: "@media screen and (min-width: 769px)",
          query: "@media screen and (max-width: 976px)",
        },
        {
          breakpoint: "md",
          maxW: 768,
          maxWQuery: "@media screen and (max-width: 768px)",
          minMaxQuery:
            "@media screen and (min-width: 481px) and (max-width: 768px)",
          minW: 481,
          minWQuery: "@media screen and (min-width: 481px)",
          query: "@media screen and (max-width: 768px)",
        },
        {
          breakpoint: "sm",
          maxW: 480,
          maxWQuery: "@media screen and (max-width: 480px)",
          minMaxQuery: "@media screen and (max-width: 480px)",
          minW: undefined,
          minWQuery: undefined,
          query: "@media screen and (max-width: 480px)",
        },
      ],
    },
    __config: {},
    __cssMap: {},
    __cssVars: {},
  }

  let mock: MatchMediaMock

  beforeAll(() => {
    mock = mocks.matchMedia()
  })

  afterEach(() => {
    mock.clear()
  })

  test("Returns the base value when passed a responsive object", () => {
    const value = getValue({ base: "base", md: "md" })(theme, "light", "base")
    expect(value).toBe("base")
  })

  test("Returns the correct breakpoint value based on the current screen width", () => {
    mock.useMediaQuery("(min-width: 481px) and (max-width: 768px)")

    const value = getValue({ base: "base", md: "md" })(theme, "light", "md")
    expect(value).toBe("md")
  })

  test("Returns the correct value based on the current light mode", () => {
    const value = getValue(["lightValue", "darkValue"])(theme, "light", "base")
    expect(value).toBe("lightValue")
  })

  test("Returns the correct value based on the current dark mode", () => {
    const value = getValue(["lightValue", "darkValue"])(theme, "dark", "base")
    expect(value).toBe("darkValue")
  })

  test("Returns the same value when passed a normal value", () => {
    const value = getValue("normalValue")(theme, "light", "base")
    expect(value).toBe("normalValue")
  })

  test("Returns the correct value when passing an array containing objects for breakpoints", () => {
    const value = getValue([
      { base: "light-base", md: "light-md" },
      { base: "dark-base", md: "dark-md" },
    ])(theme, "light", "base")
    expect(value).toStrictEqual({ base: "light-base", md: "light-md" })
  })

  test("Returns the correct value when passing an object containing arrays for color mode", () => {
    const value = getValue({
      base: ["base-light", "base-dark"],
      md: ["md-light", "md-dark"],
    })(theme, "light", "base")
    expect(value).toBe("base-light")
  })
})
