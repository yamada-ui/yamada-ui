import type { FC } from "react"
import type { ThemeConfig } from "../../core"
import { act, render, renderHook, screen, waitFor } from "#test"
import MatchMediaMock from "vitest-matchmedia-mock"
import { styled, ThemeProvider } from "../../core"
import { config as defaultConfig, theme as defaultTheme } from "../../theme"
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

  test("Returns 'base' when no media query matches", () => {
    const { result } = renderHook(() => useBreakpoint())
    expect(result.current).toBe("base")
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

  test("uses container identifier for query generation", () => {
    const containerRef = { current: document.createElement("div") }
    const config: ThemeConfig = {
      ...defaultConfig,
      breakpoint: {
        containerRef,
        identifier: "@container",
      },
    }

    const { result } = renderHook(() => useBreakpoint(), {
      providerProps: { config, theme: defaultTheme },
    })

    expect(result.current).toBe("base")
  })

  test("returns breakpoint with direction 'up' using ResizeObserver", () => {
    const defaultResizeObserver = global.ResizeObserver

    global.ResizeObserver = class ResizeObserver {
      constructor(cb: ResizeObserverCallback) {
        ;(() => {
          cb(
            [
              {
                contentRect: {
                  height: 0,
                  width: 500,
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
        direction: "up",
        identifier: "@container",
      },
    }

    const { result } = renderHook(() => useBreakpoint(), {
      providerProps: { config, theme: defaultTheme },
    })

    expect(result.current).not.toBe("base")

    global.ResizeObserver = defaultResizeObserver
  })

  test("cleans up ResizeObserver on unmount", () => {
    const defaultResizeObserver = global.ResizeObserver
    const disconnectMock = vi.fn()

    class MockResizeObserver {
      constructor(cb: ResizeObserverCallback) {
        ;(() => {
          cb(
            [
              {
                contentRect: {
                  height: 0,
                  width: 800,
                },
              },
            ] as ResizeObserverEntry[],
            this as unknown as ResizeObserver,
          )
        })()
      }
      observe = vi.fn()
      unobserve = vi.fn()
      disconnect = disconnectMock
    }

    global.ResizeObserver =
      MockResizeObserver as unknown as typeof ResizeObserver

    const containerRef = { current: document.createElement("div") }
    const config: ThemeConfig = {
      ...defaultConfig,
      breakpoint: {
        containerRef,
        identifier: "@container",
      },
    }

    const { unmount } = renderHook(() => useBreakpoint(), {
      providerProps: { config, theme: defaultTheme },
    })

    unmount()

    expect(disconnectMock).toHaveBeenCalledWith()

    global.ResizeObserver = defaultResizeObserver
  })

  test("calls cancelAnimationFrame on subsequent resize callbacks", () => {
    const defaultResizeObserver = global.ResizeObserver
    const cancelAnimationFrameSpy = vi.spyOn(window, "cancelAnimationFrame")
    let resizeCallback: ResizeObserverCallback = vi.fn()

    global.ResizeObserver = class ResizeObserver {
      constructor(cb: ResizeObserverCallback) {
        resizeCallback = cb
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

    renderHook(() => useBreakpoint(), {
      providerProps: { config, theme: defaultTheme },
    })

    act(() => {
      resizeCallback(
        [
          {
            contentRect: { height: 0, width: 1200 },
          },
        ] as ResizeObserverEntry[],
        {} as ResizeObserver,
      )
    })

    act(() => {
      resizeCallback(
        [
          {
            contentRect: { height: 0, width: 400 },
          },
        ] as ResizeObserverEntry[],
        {} as ResizeObserver,
      )
    })

    expect(cancelAnimationFrameSpy).toHaveBeenCalledWith(expect.any(Number))

    cancelAnimationFrameSpy.mockRestore()
    global.ResizeObserver = defaultResizeObserver
  })

  test("handles empty ResizeObserver entries gracefully", () => {
    const defaultResizeObserver = global.ResizeObserver
    let resizeCallback: ResizeObserverCallback = vi.fn()

    global.ResizeObserver = class ResizeObserver {
      constructor(cb: ResizeObserverCallback) {
        resizeCallback = cb
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

    const { result } = renderHook(() => useBreakpoint(), {
      providerProps: { config, theme: defaultTheme },
    })

    act(() => {
      resizeCallback([] as ResizeObserverEntry[], {} as ResizeObserver)
    })

    expect(result.current).toBe("base")

    global.ResizeObserver = defaultResizeObserver
  })

  test("does not observe when containerRef.current is null", () => {
    const defaultResizeObserver = global.ResizeObserver
    const observeMock = vi.fn()

    global.ResizeObserver = class ResizeObserver {
      constructor(_cb: ResizeObserverCallback) {
        void _cb
      }
      observe = observeMock
      unobserve = vi.fn()
      disconnect = vi.fn()
    }

    const containerRef = { current: null }
    const config: ThemeConfig = {
      ...defaultConfig,
      breakpoint: {
        containerRef: containerRef as any,
        identifier: "@container",
      },
    }

    renderHook(() => useBreakpoint(), {
      providerProps: { config, theme: defaultTheme },
    })

    expect(observeMock).not.toHaveBeenCalled()

    global.ResizeObserver = defaultResizeObserver
  })
})
