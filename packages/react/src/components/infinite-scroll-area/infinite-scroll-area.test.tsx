import type { InfiniteScrollAreaProps } from "."
import { useRef, useState } from "react"
import { a11y, render, renderHook, screen } from "#test"
import { InfiniteScrollArea } from "."
import { noop } from "../../utils"
import { useInfiniteScroll } from "./use-infinite-scroll"

describe("<InfiniteScrollArea />", () => {
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

  beforeAll(() => {
    vi.stubGlobal("IntersectionObserver", IntersectionObserverMock)
  })

  afterAll(() => {
    vi.stubGlobal("IntersectionObserver", defaultIntersectionObserver)
  })

  test("passes a11y checks", async () => {
    await a11y(
      <InfiniteScrollArea loading={<>Loading…</>}>
        {Array(50)
          .fill(0)
          .map((_, index) => (
            <div key={index} role="article">
              {index}
            </div>
          ))}
      </InfiniteScrollArea>,
    )
  })

  test("sets `displayName` correctly", () => {
    expect(InfiniteScrollArea.displayName).toBe("InfiniteScrollAreaRoot")
  })

  test("sets `className` correctly", () => {
    const { container } = render(
      <InfiniteScrollArea loading={<>Loading…</>}>
        {Array(50)
          .fill(0)
          .map((_, index) => (
            <div key={index}>{index}</div>
          ))}
      </InfiniteScrollArea>,
    )
    expect(container.firstChild).toHaveClass("ui-infinite-scroll-area__root")
  })

  test("renders HTML tag correctly", () => {
    const { container } = render(
      <InfiniteScrollArea loading={<>Loading…</>}>
        {Array(50)
          .fill(0)
          .map((_, index) => (
            <div key={index}>{index}</div>
          ))}
      </InfiniteScrollArea>,
    )
    expect(container.firstChild?.nodeName).toBe("DIV")
  })

  test("sets default tabIndex on feed root for accessibility", () => {
    render(
      <InfiniteScrollArea
        data-testid="infinite-scroll-area"
        loading={<>Loading…</>}
      >
        {Array(50)
          .fill(0)
          .map((_, index) => (
            <div key={index}>{index}</div>
          ))}
      </InfiniteScrollArea>,
    )

    expect(screen.getByTestId("infinite-scroll-area")).toHaveAttribute(
      "tabindex",
      "0",
    )
  })

  test("preserves explicit tabIndex on feed root", () => {
    render(
      <InfiniteScrollArea
        data-testid="infinite-scroll-area"
        loading={<>Loading…</>}
        tabIndex={-1}
      >
        {Array(50)
          .fill(0)
          .map((_, index) => (
            <div key={index}>{index}</div>
          ))}
      </InfiniteScrollArea>,
    )

    expect(screen.getByTestId("infinite-scroll-area")).toHaveAttribute(
      "tabindex",
      "-1",
    )
  })

  test("renders with `initialLoad` correctly", async () => {
    const MyComponent = () => {
      const [count, setCount] = useState<number>(50)

      return (
        <InfiniteScrollArea
          initialLoad
          loading={<>Loading…</>}
          onLoad={({ finish, index }) => {
            setCount((prev) => prev + 50)

            if (index >= 5) finish()
          }}
        >
          {Array(count)
            .fill(0)
            .map((_, index) => (
              <div key={index}>{index}</div>
            ))}
        </InfiniteScrollArea>
      )
    }

    render(<MyComponent />)
    await expect(screen.findByText("51")).resolves.toBeInTheDocument()
  })

  test("passes the rootRef to the IntersectionObserver when `reverse`", () => {
    const MyComponent = ({
      reverse,
    }: Pick<InfiniteScrollAreaProps, "reverse">) => {
      const rootRef = useRef<HTMLDivElement>(null)

      return (
        <div ref={rootRef}>
          <InfiniteScrollArea
            loading={<>Loading…</>}
            reverse={reverse}
            rootRef={rootRef}
          >
            {Array(50)
              .fill(0)
              .map((_, index) => (
                <div key={index}>{index}</div>
              ))}
          </InfiniteScrollArea>
        </div>
      )
    }

    const { container } = render(<MyComponent reverse />)

    const rootElement = container.firstElementChild
    expect(IntersectionObserverMock).toHaveBeenLastCalledWith(
      expect.any(Function),
      {
        root: rootElement,
        rootMargin: undefined,
        threshold: undefined,
      },
    )
  })
})

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

  const getRootDiv = (container: HTMLElement) => {
    const root = container.firstChild
    if (!(root instanceof HTMLDivElement)) {
      throw new Error("Expected the rendered root to be an HTMLDivElement.")
    }
    return root
  }

  test("does not call onLoad and is not finished by default", () => {
    const mockOnLoad = vi.fn()
    const { result } = renderHook(() =>
      useInfiniteScroll({
        onLoad: mockOnLoad,
      }),
    )

    expect(mockOnLoad).not.toHaveBeenCalled()
    expect(result.current.finish).toBeFalsy()
  })

  test("calls onLoad once when `initialLoad` is true", () => {
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

  test("scrolls the scrollable root to the top on reset", async () => {
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

    const { container, user } = render(<MyComponent />)
    const root = getRootDiv(container)
    const scrollTo = vi.spyOn(root, "scrollTo")

    await user.click(screen.getByTestId("reset"))
    expect(scrollTo).toHaveBeenCalledWith({ behavior: undefined, top: 0 })
  })

  test("scrolls the body to the top on reset when no scrollable root exists", async () => {
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

    const { user } = render(<MyComponent />)
    const scrollTo = vi.spyOn(window, "scrollTo")

    await user.click(screen.getByTestId("reset"))
    expect(scrollTo).toHaveBeenCalledWith({ behavior: undefined, top: 0 })
  })

  test("scrolls the scrollable root to the bottom on reset when `reverse`", async () => {
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

    const { container, user } = render(<MyComponent />)
    const root = getRootDiv(container)
    const scrollTo = vi.spyOn(root, "scrollTo")

    await user.click(screen.getByTestId("reset"))
    expect(scrollTo).toHaveBeenCalledWith({
      behavior: undefined,
      top: root.scrollHeight,
    })
  })

  test("scrolls the scrollable root horizontally on reset when `reverse`", async () => {
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

    const { container, user } = render(<MyComponent />)
    const root = getRootDiv(container)
    const scrollTo = vi.spyOn(root, "scrollTo")

    await user.click(screen.getByTestId("reset"))
    expect(scrollTo).toHaveBeenCalledWith({
      behavior: undefined,
      left: root.scrollWidth,
    })
  })

  test("scrolls the body horizontally on reset when no scrollable root exists", async () => {
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

    const { user } = render(<MyComponent />)
    const scrollTo = vi.spyOn(window, "scrollTo")

    await user.click(screen.getByTestId("reset"))
    expect(scrollTo).toHaveBeenCalledWith({ behavior: undefined, left: 0 })
  })

  test("does not observe when `disabled` is true", async () => {
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

    const { user } = render(<MyComponent />)
    await user.click(screen.getByTestId("reset"))
    expect(mockObserve).not.toHaveBeenCalled()
  })

  test("adds tabIndex=0 to a scrollable root that has none", async () => {
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
    const root = getRootDiv(container)

    await vi.waitFor(() => expect(root.tabIndex).toBe(0))
  })

  test("does not override an existing tabindex on the root", () => {
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
    const root = getRootDiv(container)

    expect(root.tabIndex).toBe(-1)
  })
})
