import { ui, ThemeProvider } from "@yamada-ui/core"
import type { StyledTheme } from "@yamada-ui/core"
import { extendConfig } from "@yamada-ui/react"
import type { MatchMediaMock } from "@yamada-ui/test"
import {
  act,
  mocks,
  render,
  renderHook,
  screen,
  waitFor,
} from "@yamada-ui/test"
import type { FC } from "react"
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

describe("useBreakpoint", () => {
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
                  width: 1200,
                  height: 0,
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
    const config = extendConfig({
      breakpoint: {
        containerRef,
        identifier: "@container",
      },
    })

    const Component: FC = () => {
      const breakpoint = useBreakpoint()

      return <ui.p>{breakpoint}</ui.p>
    }

    render(
      <ThemeProvider theme={theme} config={config}>
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

  test("Returns the state corresponding to the current breakpoint", async () => {
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

  test("Executes callback when breakpoint changes", async () => {
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

  test("Executes callback when breakpoint changes, skipping initial render", async () => {
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
