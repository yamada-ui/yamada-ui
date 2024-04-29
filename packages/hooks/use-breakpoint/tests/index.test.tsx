import { ThemeProvider } from "@yamada-ui/core"
import type { StyledTheme } from "@yamada-ui/core"
import type { MatchMediaMock } from "@yamada-ui/test"
import { mocks, renderHook } from "@yamada-ui/test"
import { getBreakpointValue, useBreakpoint, useBreakpointValue } from "../src"

describe("useBreakpoint", () => {
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

  test("Returns the correct breakpoint based on the current screen width", async () => {
    mock.useMediaQuery("(min-width: 481px) and (max-width: 768px)")

    const { result } = renderHook(() => useBreakpoint(), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      ),
    })

    expect(result.current).toBe("md")
  })
})
describe("useBreakpointValue", () => {
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

  test("Returns the value of the current breakpoint when base is md", async () => {
    const { result } = renderHook(() => useBreakpointValue({ base: "md" }), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      ),
    })

    expect(result.current).toBe("md")
  })
})
describe("getBreakpointValue", () => {
  const theme: StyledTheme = {
    breakpoints: {
      sm: "30em",
      md: "48em",
      lg: "61em",
      xl: "80em",
      "2xl": "90em",
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

  test("Returns the value of base", async () => {
    const { result } = renderHook(() => getBreakpointValue({ base: "md" }), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      ),
    })

    expect(result.current(theme, "md")).toBe("md")
  })
})
