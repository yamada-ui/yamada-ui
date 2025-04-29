import type { FC } from "react"
import type { ThemeConfig } from "../../core"
import MatchMediaMock from "vitest-matchmedia-mock"
import { render, renderHook, screen, waitFor } from "../../../test"
import { styled } from "../../core"
import { ThemeProvider } from "../../providers/theme-provider"
import { defaultConfig, defaultTheme } from "../../theme"
import { noop } from "../../utils"
import { useBreakpoint } from "./use-breakpoint"

describe("useBreakpoint", () => {
  let matchMediaMock: MatchMediaMock

  beforeAll(() => {
    matchMediaMock = new MatchMediaMock()
  })

  afterEach(() => {
    matchMediaMock.clear()
  })

  afterAll(() => {
    matchMediaMock.destroy()
  })

  test("Returns the correct breakpoint based on the current screen width", () => {
    matchMediaMock.useMediaQuery("(min-width: 481px) and (max-width: 768px)")
    const { result } = renderHook(() => useBreakpoint())
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
      ...defaultConfig,
      breakpoint: {
        containerRef,
        identifier: "@container",
      },
    }

    const Component: FC = () => {
      const breakpoint = useBreakpoint()

      return <styled.p>{breakpoint}</styled.p>
    }

    render(
      <ThemeProvider config={config} theme={defaultTheme}>
        <styled.div ref={containerRef} containerType="inline-size">
          <Component />
        </styled.div>
      </ThemeProvider>,
    )

    waitFor(() => {
      expect(screen.getByText(/xl/)).toBeInTheDocument()
    })

    global.ResizeObserver = defaultResizeObserver
  })
})
