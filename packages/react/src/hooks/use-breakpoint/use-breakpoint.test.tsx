import type { MatchMediaMock } from "@yamada-ui/test"
import type { FC } from "react"
import type { StyledTheme, ThemeConfig } from "../../core"
import { matchMedia } from "@yamada-ui/test"
import { render, renderHook, screen, waitFor } from "../../../test"
import { ui } from "../../core"
import { ThemeProvider } from "../../providers/theme-provider"
import { noop } from "../../utils"
import { useBreakpoint } from "./use-breakpoint"

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
    mock = matchMedia()
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

  test("Outputs a warning message if theme is undefined", () => {
    const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(noop)

    renderHook(() => useBreakpoint(), { withProvider: false })

    expect(consoleWarnSpy).toHaveBeenCalledWith(
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
