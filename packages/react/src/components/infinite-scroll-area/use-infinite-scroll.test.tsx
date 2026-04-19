import { page, render, renderHook } from "#test/browser"
import { useRef } from "react"
import { noop } from "../../utils"
import { useInfiniteScroll } from "./use-infinite-scroll"

describe("useInfiniteScroll", () => {
  const defaultIntersectionObserver = globalThis.IntersectionObserver
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

  test("should not be finish and not called onLoad", async () => {
    const mockOnLoad = vi.fn()
    const { result } = await renderHook(() =>
      useInfiniteScroll({
        onLoad: mockOnLoad,
      }),
    )

    expect(mockOnLoad).not.toHaveBeenCalled()
    expect(result.current.finish).toBeFalsy()
  })

  test("should be called onLoad when initial loaded", async () => {
    const mockOnLoad = vi.fn().mockImplementation(({ finish }) => {
      finish()
    })
    const { result } = await renderHook(() =>
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

    const { container, user } = await render(<MyComponent />)
    const root = container.firstChild as HTMLDivElement
    const scrollTo = vi.spyOn(root, "scrollTo")

    await user.click(page.getByTestId("reset"))
    expect(scrollTo).toHaveBeenCalledWith({ behavior: undefined, top: 0 })
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

    const { user } = await render(<MyComponent />)
    const scrollTo = vi.spyOn(window, "scrollTo")

    await user.click(page.getByTestId("reset"))
    expect(scrollTo).toHaveBeenCalledWith({ behavior: undefined, top: 0 })
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
          <div ref={rootRef} style={{ maxHeight: "100px", overflow: "auto" }}>
            {!finish ? (
              <div
                ref={ref}
                style={{ height: "200px" }}
                data-testid="trigger"
              />
            ) : null}
          </div>
          <button data-testid="reset" onClick={() => resetRef.current()}>
            Reset
          </button>
        </>
      )
    }

    const { container, user } = await render(<MyComponent />)
    const root = container.firstChild as HTMLDivElement
    const scrollTo = vi.spyOn(root, "scrollTo")

    await user.click(page.getByTestId("reset"))
    expect(scrollTo).toHaveBeenCalledWith({
      behavior: undefined,
      top: root.scrollHeight,
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
          <div ref={rootRef} style={{ maxWidth: "100px", overflowX: "auto" }}>
            {!finish ? (
              <div ref={ref} style={{ width: "200px" }} data-testid="trigger" />
            ) : null}
          </div>
          <button data-testid="reset" onClick={() => resetRef.current()}>
            Reset
          </button>
        </>
      )
    }

    const { container, user } = await render(<MyComponent />)
    const root = container.firstChild as HTMLDivElement
    const scrollTo = vi.spyOn(root, "scrollTo")

    await user.click(page.getByTestId("reset"))
    expect(scrollTo).toHaveBeenCalledWith({
      behavior: undefined,
      left: root.scrollWidth,
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

    const { user } = await render(<MyComponent />)
    const scrollTo = vi.spyOn(window, "scrollTo")

    await user.click(page.getByTestId("reset"))
    expect(scrollTo).toHaveBeenCalledWith({ behavior: undefined, left: 0 })
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

    const { user } = await render(<MyComponent />)
    await user.click(page.getByTestId("reset"))
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

    const { container } = await render(<MyComponent />)
    const root = container.firstChild as HTMLDivElement

    await expect.poll(() => root.tabIndex).toBe(0)
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

    const { container } = await render(<MyComponent />)
    const root = container.firstChild as HTMLDivElement

    await expect.poll(() => root.tabIndex).toBe(-1)
  })
})
