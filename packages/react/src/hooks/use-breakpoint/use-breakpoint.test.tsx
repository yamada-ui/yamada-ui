import type { FC } from "react"
import type { ThemeConfig } from "../../core"
import { page, render, renderHook } from "#test/browser"
import { styled } from "../../core"
import { UIProvider } from "../../providers/ui-provider"
import { config as defaultConfig } from "../../theme"
import { useBreakpoint } from "./use-breakpoint"

describe("useBreakpoint", () => {
  afterEach(async () => {
    await page.viewport(1280, 720)
  })

  test("Returns the correct breakpoint based on the current screen width", async () => {
    await page.viewport(600, 800)
    const { result } = await renderHook(() => useBreakpoint())
    expect(result.current).toBe("md")
  })

  test("returns base when viewport is wider than largest breakpoint", async () => {
    await page.viewport(1600, 800)
    const { result } = await renderHook(() => useBreakpoint())
    expect(result.current).toBe("base")
  })

  test(
    "updates breakpoint when viewport changes",
    { timeout: 60000 },
    async () => {
      await page.viewport(1600, 800)

      const Component: FC = () => {
        const breakpoint = useBreakpoint()

        return <styled.p data-testid="bp">{breakpoint}</styled.p>
      }

      await render(<Component />)

      await expect.element(page.getByTestId("bp")).toHaveTextContent("base")

      await page.viewport(600, 800)

      await expect
        .element(page.getByTestId("bp"), { timeout: 30000 })
        .toHaveTextContent("md")
    },
  )

  test("renders correctly with direction up", async () => {
    const defaultResizeObserver = window.ResizeObserver

    window.ResizeObserver = class ResizeObserver {
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

    await render(
      <UIProvider config={config}>
        <Component />
      </UIProvider>,
      { withProvider: false },
    )

    await expect.element(page.getByTestId("bp")).toBeInTheDocument()

    window.ResizeObserver = defaultResizeObserver
  })

  test("renders correctly and updates breakpoint", async () => {
    const defaultResizeObserver = window.ResizeObserver

    window.ResizeObserver = class ResizeObserver {
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

    await render(
      <UIProvider config={config}>
        <Component />
      </UIProvider>,
      { withProvider: false },
    )

    await expect.element(page.getByText(/xl/)).toBeInTheDocument()

    window.ResizeObserver = defaultResizeObserver
  })

  test("observes container and calls disconnect on cleanup", async () => {
    const defaultResizeObserver = window.ResizeObserver
    const disconnectMock = vi.fn()
    const observeMock = vi.fn()

    window.ResizeObserver = class MockResizeObserver {
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

    const container = document.createElement("div")
    const containerRef = { current: container }
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

    const { unmount } = await render(
      <UIProvider config={config}>
        <Component />
      </UIProvider>,
      { withProvider: false },
    )

    await expect.poll(() => observeMock).toHaveBeenCalledWith(container)

    unmount()

    expect(disconnectMock).toHaveBeenCalledWith()

    window.ResizeObserver = defaultResizeObserver
  })

  test("ResizeObserver callback skips when entry is empty", async () => {
    const defaultResizeObserver = window.ResizeObserver
    let capturedCb: ResizeObserverCallback | undefined

    window.ResizeObserver = class MockResizeObserver {
      observe = vi.fn()
      unobserve = vi.fn()
      disconnect = vi.fn()

      constructor(cb: ResizeObserverCallback) {
        capturedCb = cb
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

    await render(
      <UIProvider config={config}>
        <Component />
      </UIProvider>,
      { withProvider: false },
    )

    const rafSpy = vi.spyOn(window, "requestAnimationFrame")

    capturedCb?.([] as unknown as ResizeObserverEntry[], {} as ResizeObserver)

    expect(rafSpy).not.toHaveBeenCalled()

    rafSpy.mockRestore()
    window.ResizeObserver = defaultResizeObserver
  })
})
