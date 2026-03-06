import type { FC } from "react"
import type { ThemeConfig } from "../../core"
import { render, renderHook, screen, waitFor } from "#test"
import MatchMediaMock from "vitest-matchmedia-mock"
import { styled } from "../../core"
import { UIProvider } from "../../providers/ui-provider"
import { config as defaultConfig } from "../../theme"
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

  test("returns base when no queries match", () => {
    const { result } = renderHook(() => useBreakpoint())
    expect(result.current).toBe("base")
  })

  test("renders correctly with direction up", async () => {
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

    const Component: FC = () => {
      const breakpoint = useBreakpoint()

      return <styled.p data-testid="bp">{breakpoint}</styled.p>
    }

    render(
      <UIProvider config={config}>
        <Component />
      </UIProvider>,
      { withProvider: false },
    )

    await waitFor(() => {
      expect(screen.getByTestId("bp")).toBeInTheDocument()
    })

    global.ResizeObserver = defaultResizeObserver
  })

  test("renders correctly and updates breakpoint", async () => {
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
      <UIProvider config={config}>
        <Component />
      </UIProvider>,
      { withProvider: false },
    )

    await waitFor(() => {
      expect(screen.getByText(/xl/)).toBeInTheDocument()
    })

    global.ResizeObserver = defaultResizeObserver
  })

  test("observes container and calls disconnect on cleanup", async () => {
    const defaultResizeObserver = global.ResizeObserver
    const disconnectMock = vi.fn()
    const observeMock = vi.fn()

    global.ResizeObserver = class MockResizeObserver {
      disconnect = disconnectMock
      observe = observeMock
      unobserve = vi.fn()

      constructor(cb: ResizeObserverCallback) {
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
      }
    } as unknown as typeof ResizeObserver

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

      return <styled.p data-testid="bp">{breakpoint}</styled.p>
    }

    const { unmount } = render(
      <UIProvider config={config}>
        <Component />
      </UIProvider>,
      { withProvider: false },
    )

    await waitFor(() => {
      expect(observeMock).toHaveBeenCalledWith()
    })

    unmount()

    expect(disconnectMock).toHaveBeenCalledWith()

    global.ResizeObserver = defaultResizeObserver
  })

  test("ResizeObserver callback skips requestAnimationFrame when entry is empty", () => {
    const defaultResizeObserver = global.ResizeObserver
    const cafMock = vi.fn()
    const originalCaf = window.cancelAnimationFrame
    window.cancelAnimationFrame = cafMock

    global.ResizeObserver = class ResizeObserver {
      constructor(cb: ResizeObserverCallback) {
        ;(() => {
          cb([] as unknown as ResizeObserverEntry[], this)
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

      return <styled.p data-testid="bp">{breakpoint}</styled.p>
    }

    render(
      <UIProvider config={config}>
        <Component />
      </UIProvider>,
      { withProvider: false },
    )

    expect(cafMock).not.toHaveBeenCalled()

    global.ResizeObserver = defaultResizeObserver
    window.cancelAnimationFrame = originalCaf
  })

  test("returns base when container is set and getBreakpoint is called without width", () => {
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

      return <styled.p data-testid="bp">{breakpoint}</styled.p>
    }

    render(
      <UIProvider config={config}>
        <Component />
      </UIProvider>,
      { withProvider: false },
    )

    expect(screen.getByTestId("bp").textContent).toBe("base")
  })
})
