import type { StyledTheme } from "@yamada-ui/core"
import { ThemeProvider, ColorModeProvider } from "@yamada-ui/core"
import type { MatchMediaMock } from "@yamada-ui/test"
import { renderHook, mocks } from "@yamada-ui/test"

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

  test("Returns the correct breakpoint value based on the current screen width", async () => {
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
})

describe("getValue", () => {
  const theme: StyledTheme = {
    themeScheme: "base",
    changeThemeScheme: noop,
    breakpoints: {
      sm: "30em",
      md: "48em",
      lg: "61em",
      xl: "80em",
      "2xl": "90em",
      base: "9999px",
    },
    __config: {},
    __cssVars: {},
    __cssMap: {},
    __breakpoints: {
      keys: ["base", "2xl", "xl", "lg", "md", "sm"],
      isResponsive: () => false,
      queries: [
        {
          breakpoint: "base",
          minW: 1441,
          maxW: undefined,
          query: undefined,
          maxWQuery: undefined,
          minWQuery: "@media screen and (min-width: 1441px)",
          minMaxQuery: "@media screen and (min-width: 1441px)",
        },
        {
          breakpoint: "2xl",
          minW: 1281,
          maxW: 1440,
          query: "@media screen and (max-width: 1440px)",
          maxWQuery: "@media screen and (max-width: 1440px)",
          minWQuery: "@media screen and (min-width: 1281px)",
          minMaxQuery:
            "@media screen and (min-width: 1281px) and (max-width: 1440px)",
        },
        {
          breakpoint: "xl",
          minW: 977,
          maxW: 1280,
          query: "@media screen and (max-width: 1280px)",
          maxWQuery: "@media screen and (max-width: 1280px)",
          minWQuery: "@media screen and (min-width: 977px)",
          minMaxQuery:
            "@media screen and (min-width: 977px) and (max-width: 1280px)",
        },
        {
          breakpoint: "lg",
          minW: 769,
          maxW: 976,
          query: "@media screen and (max-width: 976px)",
          maxWQuery: "@media screen and (max-width: 976px)",
          minWQuery: "@media screen and (min-width: 769px)",
          minMaxQuery:
            "@media screen and (min-width: 769px) and (max-width: 976px)",
        },
        {
          breakpoint: "md",
          minW: 481,
          maxW: 768,
          query: "@media screen and (max-width: 768px)",
          maxWQuery: "@media screen and (max-width: 768px)",
          minWQuery: "@media screen and (min-width: 481px)",
          minMaxQuery:
            "@media screen and (min-width: 481px) and (max-width: 768px)",
        },
        {
          breakpoint: "sm",
          minW: undefined,
          maxW: 480,
          query: "@media screen and (max-width: 480px)",
          maxWQuery: "@media screen and (max-width: 480px)",
          minWQuery: undefined,
          minMaxQuery: "@media screen and (max-width: 480px)",
        },
      ],
    },
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
})
