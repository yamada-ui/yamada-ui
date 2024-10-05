import type { StyledTheme, ThemeConfig } from "@yamada-ui/core"
import type { MatchMediaMock } from "@yamada-ui/test"
import type { FC } from "react"
import { ThemeProvider, ui } from "@yamada-ui/core"
import {
  act,
  mocks,
  render,
  renderHook,
  screen,
  waitFor,
} from "@yamada-ui/test"
import { noop } from "@yamada-ui/utils"
import {
  getBreakpointValue,
  useBreakpoint,
  useBreakpointEffect,
  useBreakpointState,
  useBreakpointValue,
  useUpdateBreakpointEffect,
} from "../src"

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

describe("useBreakpoint", () => {
  let mock: MatchMediaMock

  beforeAll(() => {
    mock = mocks.matchMedia()
  })

  afterEach(() => {
    mock.clear()
  })

  test("Returns the correct breakpoint based on the current screen width", () => {
    mock.useMediaQuery("(min-width: 481px) and (max-width: 768px)")

    const { result } = renderHook(() => useBreakpoint(), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      ),
    })

    expect(result.current).toBe("md")
  })

  test("Throws error if theme is undefined", () => {
    let error: Error | undefined

    try {
      renderHook(() => useBreakpoint(), { withProvider: false })
    } catch (e) {
      if (e instanceof Error) error = e
    }

    expect(error).toBeDefined()
    expect(error?.message).toBe(
      "useBreakpoint: `breakpoints` is undefined. Seems you forgot to put theme in `breakpoints`",
    )
  })

  test("renders correctly and updates breakpoint", () => {
    const defaultResizeObserver = global.ResizeObserver

    global.ResizeObserver = class ResizeObserver {
      constructor(cb: ResizeObserverCallback) {
        ;(() => {
          cb(
            [
              {
                contentRect: {
                  height: 0,
                  width: 1200,
                },
              },
            ] as ResizeObserverEntry[],
            this,
          )
        })()
      }
      observe = vi.fn()
      unobserve = vi.fn()
      disconnect = vi.fn()
    }

    const containerRef = { current: document.createElement("div") }
    const config: ThemeConfig = {
      breakpoint: {
        containerRef,
        identifier: "@container",
      },
    }

    const Component: FC = () => {
      const breakpoint = useBreakpoint()

      return <ui.p>{breakpoint}</ui.p>
    }

    render(
      <ThemeProvider config={config} theme={theme}>
        <ui.div ref={containerRef} containerType="inline-size">
          <Component />
        </ui.div>
      </ThemeProvider>,
    )

    waitFor(() => {
      expect(screen.getByText(/xl/)).toBeInTheDocument()
    })

    global.ResizeObserver = defaultResizeObserver
  })
})

describe("useBreakpointValue", () => {
  let mock: MatchMediaMock

  beforeAll(() => {
    mock = mocks.matchMedia()
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
    mock = mocks.matchMedia()
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

  test("throws an error if theme is undefined", () => {
    const theme = undefined as unknown as StyledTheme
    let error: Error | undefined

    try {
      renderHook(() => getBreakpointValue({ base: "md" })(theme, "base"), {
        withProvider: false,
      })
    } catch (e) {
      if (e instanceof Error) error = e
    }

    expect(error).toBeDefined()
    expect(error?.message).toBe("getBreakpointValue: `theme` is undefined.")
  })

  test("throws an error if breakpoints are undefined", () => {
    const theme = {} as StyledTheme
    let error: Error | undefined

    try {
      renderHook(() => getBreakpointValue({ base: "md" })(theme, "base"), {
        withProvider: false,
      })
    } catch (e) {
      if (e instanceof Error) error = e
    }

    expect(error).toBeDefined()
    expect(error?.message).toBe(
      "getBreakpointValue: `breakpoints` is undefined.",
    )
  })
})

describe("useBreakpointState", () => {
  let mock: MatchMediaMock

  beforeAll(() => {
    mock = mocks.matchMedia()
  })
  afterEach(() => {
    mock.clear()
  })

  test("Returns the state corresponding to the current breakpoint", () => {
    mock.useMediaQuery("(min-width: 481px) and (max-width: 768px)")

    const { result } = renderHook(
      () => useBreakpointState({ base: "base", md: "md" }),
      {
        wrapper: ({ children }) => (
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        ),
      },
    )

    expect(result.current[0]).toBe("md")
  })
})

describe("useBreakpointEffect", () => {
  let mock: MatchMediaMock

  beforeAll(() => {
    mock = mocks.matchMedia()
  })
  afterEach(() => {
    mock.clear()
  })

  test("Executes callback when breakpoint changes", () => {
    mock.useMediaQuery("(min-width: 481px) and (max-width: 768px)")

    const callback = vi.fn()

    renderHook(() => useBreakpointEffect(callback, []), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      ),
    })

    expect(callback).toHaveBeenCalledWith("md")
  })
})

describe("useUpdateBreakpointEffect", () => {
  let mock: MatchMediaMock

  beforeAll(() => {
    mock = mocks.matchMedia()
  })
  afterEach(() => {
    mock.clear()
  })

  test("Executes callback when breakpoint changes, skipping initial render", () => {
    mock.useMediaQuery("(min-width: 481px) and (max-width: 768px)")

    const callback = vi.fn()

    const { rerender } = renderHook(
      () => useUpdateBreakpointEffect(callback, []),
      {
        wrapper: ({ children }) => (
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        ),
      },
    )

    expect(callback).not.toHaveBeenCalled()

    act(() => {
      mock.useMediaQuery("(min-width: 769px) and (max-width: 976px)")
      rerender()
    })

    expect(callback).toHaveBeenCalledWith("lg")
  })
})
