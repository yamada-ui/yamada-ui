import type { MatchMediaMock } from "@yamada-ui/test"
import type { StyledTheme } from "../../core"
import { matchMedia } from "@yamada-ui/test"
import { renderHook } from "../../../test"
import { ThemeProvider } from "../../providers/theme-provider"
import { noop } from "../../utils"
import { getBreakpointValue, useBreakpointValue } from "./use-breakpoint-value"

const theme: StyledTheme = {
  breakpoints: {
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

describe("useBreakpointValue", () => {
  let mock: MatchMediaMock

  beforeAll(() => {
    mock = matchMedia()
  })
  afterEach(() => {
    mock.clear()
  })

  test("Returns the value of the current breakpoint when base is md", () => {
    const { result } = renderHook(() => useBreakpointValue({ base: "md" }), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      ),
    })

    expect(result.current).toBe("md")
  })
})

describe("getBreakpointValue", () => {
  let mock: MatchMediaMock

  beforeAll(() => {
    mock = matchMedia()
  })
  afterEach(() => {
    mock.clear()
  })

  test("Returns the value of base", () => {
    const { result } = renderHook(() => getBreakpointValue({ base: "md" }), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      ),
    })

    expect(result.current(theme, "md")).toBe("md")
  })

  test("Outputs a warning message if theme is undefined", () => {
    const theme = undefined as unknown as StyledTheme

    const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(noop)

    renderHook(() => getBreakpointValue({ base: "md" })(theme, "base"), {
      withProvider: false,
    })

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "getBreakpointValue: `theme` is undefined.",
    )
  })

  test("Outputs a warning message if breakpoints are undefined", () => {
    const theme = {} as StyledTheme

    const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(noop)

    renderHook(() => getBreakpointValue({ base: "md" })(theme, "base"), {
      withProvider: false,
    })
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "getBreakpointValue: `breakpoints` is undefined.",
    )
  })
})
