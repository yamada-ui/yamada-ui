import { render, renderHook, waitFor } from "@yamada-ui/test"
import { useRef } from "react"
import { useInfiniteScroll } from "../src"

describe("useInfiniteScroll", () => {
  const defaultIntersectionObserver = global.IntersectionObserver
  const IntersectionObserverMock = vi.fn((cb) => ({
    disconnect: vi.fn(),
    observe: vi.fn().mockImplementation((el) => {
      cb([{ isIntersecting: true, target: el }])
    }),
    takeRecords: vi.fn(),
    unobserve: vi.fn(),
  }))

  beforeEach(() => {
    vi.stubGlobal("IntersectionObserver", IntersectionObserverMock)
  })

  afterEach(() => {
    vi.stubGlobal("IntersectionObserver", defaultIntersectionObserver)
  })
  test("should not be finish and not called onLoad", async () => {
    const mockOnLoad = vi.fn()
    const { result } = renderHook(() =>
      useInfiniteScroll({
        onLoad: mockOnLoad,
      }),
    )

    expect(mockOnLoad).not.toHaveBeenCalled()
    expect(result.current.isFinish).toBeFalsy()
  })

  test("should be called onLoad when initial loaded", async () => {
    const mockOnLoad = vi.fn().mockImplementation(async ({ finish }) => {
      finish()
    })
    const { result } = renderHook(() =>
      useInfiniteScroll({
        onLoad: mockOnLoad,
        initialLoad: true,
      }),
    )

    expect(mockOnLoad).toHaveBeenCalledWith({
      finish: expect.any(Function),
      index: 0,
    })
    expect(result.current.isFinish).toBeTruthy()
  })

  test("should be called onReset scroll to root", async () => {
    const MyComponent = () => {
      const mockOnLoad = vi.fn().mockImplementation(async ({ finish }) => {
        finish()
      })
      const rootRef = useRef<HTMLDivElement>(null)
      const resetRef = useRef<() => void>(() => {})
      const { ref, isFinish } = useInfiniteScroll({
        onLoad: mockOnLoad,
        rootRef,
        resetRef,
      })

      return (
        <>
          <div ref={rootRef} style={{ overflowY: "auto" }}>
            {!isFinish ? <div ref={ref} data-testid="trigger" /> : null}
          </div>
          <button onClick={() => resetRef.current()} data-testid="reset">
            Reset
          </button>
        </>
      )
    }

    const { container, getByTestId, user } = render(<MyComponent />)
    const root = container.firstChild as HTMLDivElement
    vi.spyOn(root, "scrollTo").mockImplementation(() => {
      root.scrollTop = 100
    })
    const reset = getByTestId("reset")
    await user.click(reset)

    await waitFor(() => {
      expect(root.scrollTop).toBe(100)
    })
  })

  test("should be called onReset scroll to body", async () => {
    const MyComponent = () => {
      const mockOnLoad = vi.fn().mockImplementation(async ({ finish }) => {
        finish()
      })
      const resetRef = useRef<() => void>(() => {})
      const { ref, isFinish } = useInfiniteScroll({
        onLoad: mockOnLoad,
        resetRef,
      })

      return (
        <>
          <div style={{ overflowY: "auto" }}>
            {!isFinish ? <div ref={ref} data-testid="trigger" /> : null}
          </div>
          <button onClick={() => resetRef.current()} data-testid="reset">
            Reset
          </button>
        </>
      )
    }

    const { getByTestId, user } = render(<MyComponent />)
    vi.spyOn(window, "scrollTo").mockImplementation(() => {
      document.body.scrollTop = 100
    })
    const reset = getByTestId("reset")
    await user.click(reset)

    await waitFor(() => {
      expect(document.body.scrollTop).toBe(100)
    })
  })

  test("should be called onReset reverse scrooll to root", async () => {
    const MyComponent = () => {
      const mockOnLoad = vi.fn().mockImplementation(async ({ finish }) => {
        finish()
      })
      const rootRef = useRef<HTMLDivElement>(null)
      const resetRef = useRef<() => void>(() => {})
      const { ref, isFinish } = useInfiniteScroll({
        onLoad: mockOnLoad,
        rootRef,
        resetRef,
        isReverse: true,
      })

      return (
        <>
          <div ref={rootRef} style={{ overflow: "auto" }}>
            {!isFinish ? <div ref={ref} data-testid="trigger" /> : null}
          </div>
          <button onClick={() => resetRef.current()} data-testid="reset">
            Reset
          </button>
        </>
      )
    }

    const { container, getByTestId, user } = render(<MyComponent />)
    const root = container.firstChild as HTMLDivElement
    vi.spyOn(root, "scrollTo").mockImplementation(() => {
      root.scrollTop = 100
    })
    const reset = getByTestId("reset")
    await user.click(reset)

    await waitFor(() => {
      expect(root.scrollTop).toBe(100)
    })
  })

  test("should be called onReset horizontal reverse scrooll to root", async () => {
    const MyComponent = () => {
      const mockOnLoad = vi.fn().mockImplementation(async ({ finish }) => {
        finish()
      })
      const rootRef = useRef<HTMLDivElement>(null)
      const resetRef = useRef<() => void>(() => {})
      const { ref, isFinish } = useInfiniteScroll({
        onLoad: mockOnLoad,
        rootRef,
        resetRef,
        isReverse: true,
        orientation: "horizontal",
      })

      return (
        <>
          <div ref={rootRef} style={{ overflowX: "auto" }}>
            {!isFinish ? <div ref={ref} data-testid="trigger" /> : null}
          </div>
          <button onClick={() => resetRef.current()} data-testid="reset">
            Reset
          </button>
        </>
      )
    }

    const { container, getByTestId, user } = render(<MyComponent />)
    const root = container.firstChild as HTMLDivElement
    vi.spyOn(root, "scrollTo").mockImplementation(() => {
      root.scrollLeft = 100
    })
    const reset = getByTestId("reset")
    await user.click(reset)

    await waitFor(() => {
      expect(root.scrollLeft).toBe(100)
    })
  })

  test("should be called onReset horizontal scrooll to body", async () => {
    const MyComponent = () => {
      const mockOnLoad = vi.fn().mockImplementation(async ({ finish }) => {
        finish()
      })
      const resetRef = useRef<() => void>(() => {})
      const { ref, isFinish } = useInfiniteScroll({
        onLoad: mockOnLoad,
        resetRef,
        orientation: "horizontal",
      })

      return (
        <>
          <div style={{ overflowX: "auto" }}>
            {!isFinish ? <div ref={ref} data-testid="trigger" /> : null}
          </div>
          <button onClick={() => resetRef.current()} data-testid="reset">
            Reset
          </button>
        </>
      )
    }

    const { getByTestId, user } = render(<MyComponent />)
    vi.spyOn(window, "scrollTo").mockImplementation(() => {
      document.body.scrollLeft = 100
    })
    const reset = getByTestId("reset")
    await user.click(reset)

    await waitFor(() => {
      expect(document.body.scrollLeft).toBe(100)
    })
  })

  test("should be cannot infinite-scroll is disabled", async () => {
    const mockObserve = vi.fn()
    const IntersectionObserverMock = vi.fn((cb) => ({
      disconnect: vi.fn(),
      observe: mockObserve.mockImplementation((el) => {
        cb([{ isIntersecting: true, target: el }])
      }),
      takeRecords: vi.fn(),
      unobserve: vi.fn(),
    }))
    vi.stubGlobal("IntersectionObserver", IntersectionObserverMock)

    const MyComponent = () => {
      const mockOnLoad = vi.fn().mockImplementation(async ({ finish }) => {
        finish()
      })
      const rootRef = useRef<HTMLDivElement>(null)
      const resetRef = useRef<() => void>(() => {})
      const { ref, isFinish } = useInfiniteScroll({
        onLoad: mockOnLoad,
        rootRef,
        resetRef,
        isDisabled: true,
      })

      return (
        <>
          <div ref={rootRef} style={{ overflowY: "auto" }}>
            {!isFinish ? <div ref={ref} data-testid="trigger" /> : null}
          </div>
          <button onClick={() => resetRef.current()} data-testid="reset">
            Reset
          </button>
        </>
      )
    }

    const { getByTestId, user } = render(<MyComponent />)
    const reset = getByTestId("reset")
    await user.click(reset)
    expect(mockObserve).not.toHaveBeenCalled()
  })
})
