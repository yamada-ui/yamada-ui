import { render, renderHook, waitFor } from "#test"
import { useRef } from "react"
import { noop } from "../../utils"
import { useInfiniteScroll } from "./use-infinite-scroll"

describe("useInfiniteScroll", () => {
  const defaultIntersectionObserver = global.IntersectionObserver
  const IntersectionObserverMock = vi.fn(function IntersectionObserverMock(
    this: {
      disconnect: () => void
      observe: (el: Element) => void
      takeRecords: () => void
      unobserve: (el: Element) => void
    },
    cb: (entries: IntersectionObserverEntry[]) => void,
  ) {
    this.disconnect = noop
    this.observe = (el: Element) => {
      cb([{ target: el, isIntersecting: true } as IntersectionObserverEntry])
    }
    this.takeRecords = noop
    this.unobserve = noop
  })

  beforeEach(() => {
    vi.stubGlobal("IntersectionObserver", IntersectionObserverMock)
  })

  afterEach(() => {
    vi.stubGlobal("IntersectionObserver", defaultIntersectionObserver)
  })
  test("should not be finish and not called onLoad", () => {
    const mockOnLoad = vi.fn()
    const { result } = renderHook(() =>
      useInfiniteScroll({
        onLoad: mockOnLoad,
      }),
    )

    expect(mockOnLoad).not.toHaveBeenCalled()
    expect(result.current.finish).toBeFalsy()
  })

  test("should be called onLoad when initial loaded", () => {
    const mockOnLoad = vi.fn().mockImplementation(({ finish }) => {
      finish()
    })
    const { result } = renderHook(() =>
      useInfiniteScroll({
        initialLoad: true,
        onLoad: mockOnLoad,
      }),
    )

    expect(mockOnLoad).toHaveBeenCalledExactlyOnceWith({
      finish: expect.any(Function),
      index: 0,
    })
    expect(result.current.finish).toBeTruthy()
  })

  test("should be called onReset scroll to root", async () => {
    const MyComponent = () => {
      const mockOnLoad = vi.fn().mockImplementation(({ finish }) => {
        finish()
      })
      const rootRef = useRef<HTMLDivElement>(null)
      const resetRef = useRef<() => void>(noop)
      const { ref, finish } = useInfiniteScroll({
        resetRef,
        rootRef,
        onLoad: mockOnLoad,
      })

      return (
        <>
          <div ref={rootRef} style={{ overflowY: "auto" }}>
            {!finish ? <div ref={ref} data-testid="trigger" /> : null}
          </div>
          <button data-testid="reset" onClick={() => resetRef.current()}>
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
      const mockOnLoad = vi.fn().mockImplementation(({ finish }) => {
        finish()
      })
      const resetRef = useRef<() => void>(noop)
      const { ref, finish } = useInfiniteScroll({
        resetRef,
        onLoad: mockOnLoad,
      })

      return (
        <>
          <div style={{ overflowY: "auto" }}>
            {!finish ? <div ref={ref} data-testid="trigger" /> : null}
          </div>
          <button data-testid="reset" onClick={() => resetRef.current()}>
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

  test("should be called onReset reverse scroll to root", async () => {
    const MyComponent = () => {
      const mockOnLoad = vi.fn().mockImplementation(({ finish }) => {
        finish()
      })
      const rootRef = useRef<HTMLDivElement>(null)
      const resetRef = useRef<() => void>(noop)
      const { ref, finish } = useInfiniteScroll({
        resetRef,
        reverse: true,
        rootRef,
        onLoad: mockOnLoad,
      })

      return (
        <>
          <div ref={rootRef} style={{ overflow: "auto" }}>
            {!finish ? <div ref={ref} data-testid="trigger" /> : null}
          </div>
          <button data-testid="reset" onClick={() => resetRef.current()}>
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

  test("should be called onReset horizontal reverse scroll to root", async () => {
    const MyComponent = () => {
      const mockOnLoad = vi.fn().mockImplementation(({ finish }) => {
        finish()
      })
      const rootRef = useRef<HTMLDivElement>(null)
      const resetRef = useRef<() => void>(noop)
      const { ref, finish } = useInfiniteScroll({
        orientation: "horizontal",
        resetRef,
        reverse: true,
        rootRef,
        onLoad: mockOnLoad,
      })

      return (
        <>
          <div ref={rootRef} style={{ overflowX: "auto" }}>
            {!finish ? <div ref={ref} data-testid="trigger" /> : null}
          </div>
          <button data-testid="reset" onClick={() => resetRef.current()}>
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

  test("should be called onReset horizontal scroll to body", async () => {
    const MyComponent = () => {
      const mockOnLoad = vi.fn().mockImplementation(({ finish }) => {
        finish()
      })
      const resetRef = useRef<() => void>(noop)
      const { ref, finish } = useInfiniteScroll({
        orientation: "horizontal",
        resetRef,
        onLoad: mockOnLoad,
      })

      return (
        <>
          <div style={{ overflowX: "auto" }}>
            {!finish ? <div ref={ref} data-testid="trigger" /> : null}
          </div>
          <button data-testid="reset" onClick={() => resetRef.current()}>
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
        cb([{ target: el, isIntersecting: true }])
      }),
      takeRecords: vi.fn(),
      unobserve: vi.fn(),
    }))
    vi.stubGlobal("IntersectionObserver", IntersectionObserverMock)

    const MyComponent = () => {
      const mockOnLoad = vi.fn().mockImplementation(({ finish }) => {
        finish()
      })
      const rootRef = useRef<HTMLDivElement>(null)
      const resetRef = useRef<() => void>(noop)
      const { ref, finish } = useInfiniteScroll({
        disabled: true,
        resetRef,
        rootRef,
        onLoad: mockOnLoad,
      })

      return (
        <>
          <div ref={rootRef} style={{ overflowY: "auto" }}>
            {!finish ? <div ref={ref} data-testid="trigger" /> : null}
          </div>
          <button data-testid="reset" onClick={() => resetRef.current()}>
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

  test("should add tabIndex=0 to scrollable root when missing", async () => {
    const MyComponent = () => {
      const mockOnLoad = vi.fn().mockImplementation(({ finish }) => {
        finish()
      })
      const rootRef = useRef<HTMLDivElement>(null)
      const { ref, finish } = useInfiniteScroll({
        rootRef,
        onLoad: mockOnLoad,
      })

      return (
        <div ref={rootRef} style={{ overflowY: "auto" }}>
          {!finish ? <div ref={ref} data-testid="trigger" /> : null}
        </div>
      )
    }

    const { container } = render(<MyComponent />)
    const root = container.firstChild as HTMLDivElement

    await waitFor(() => {
      expect(root.tabIndex).toBe(0)
    })
  })

  test("should not override existing tabindex on root", async () => {
    const MyComponent = () => {
      const mockOnLoad = vi.fn().mockImplementation(({ finish }) => {
        finish()
      })
      const rootRef = useRef<HTMLDivElement>(null)
      const { ref, finish } = useInfiniteScroll({
        rootRef,
        onLoad: mockOnLoad,
      })

      return (
        <div ref={rootRef} style={{ overflowY: "auto" }} tabIndex={-1}>
          {!finish ? <div ref={ref} data-testid="trigger" /> : null}
        </div>
      )
    }

    const { container } = render(<MyComponent />)
    const root = container.firstChild as HTMLDivElement

    await waitFor(() => {
      expect(root.tabIndex).toBe(-1)
    })
  })
})
