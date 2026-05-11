import type { InfiniteScrollAreaProps } from "."
import { useRef, useState } from "react"
import { page, render, renderHook } from "#test/browser"
import { InfiniteScrollArea } from "."
import { noop } from "../../utils"
import { useInfiniteScroll } from "./use-infinite-scroll"

const realIntersectionObserver = globalThis.IntersectionObserver
const intersectionObserverSpy = vi.fn()

class IntersectionObserverWrapper extends realIntersectionObserver {
  constructor(
    cb: IntersectionObserverCallback,
    options?: IntersectionObserverInit,
  ) {
    intersectionObserverSpy(cb, options)
    super(cb, options)
  }
}

const getRootDiv = (container: Element) => {
  const root = container.firstChild
  if (!(root instanceof HTMLDivElement)) {
    throw new Error("Expected the rendered root to be an HTMLDivElement.")
  }
  return root
}

describe("<InfiniteScrollArea />", () => {
  beforeEach(() => {
    intersectionObserverSpy.mockClear()
    vi.stubGlobal("IntersectionObserver", IntersectionObserverWrapper)
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  test("sets default tabIndex on feed root for accessibility", async () => {
    await render(
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

    await expect
      .element(page.getByTestId("infinite-scroll-area"))
      .toHaveAttribute("tabindex", "0")
  })

  test("preserves explicit tabIndex on feed root", async () => {
    await render(
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

    await expect
      .element(page.getByTestId("infinite-scroll-area"))
      .toHaveAttribute("tabindex", "-1")
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

    await render(<MyComponent />)
    await expect.element(page.getByText("51")).toBeInTheDocument()
  })

  test("passes the rootRef to the IntersectionObserver when `reverse`", async () => {
    const MyComponent = ({
      reverse,
    }: Pick<InfiniteScrollAreaProps, "reverse">) => {
      const rootRef = useRef<HTMLDivElement>(null)

      return (
        <div ref={rootRef} data-testid="root">
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

    await render(<MyComponent reverse />)

    const rootElement = page.getByTestId("root").element()

    expect(intersectionObserverSpy).toHaveBeenLastCalledWith(
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
  beforeEach(() => {
    intersectionObserverSpy.mockClear()
    vi.stubGlobal("IntersectionObserver", IntersectionObserverWrapper)
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  test("does not call onLoad and is not finished by default", async () => {
    const mockOnLoad = vi.fn()
    const { result } = await renderHook(() =>
      useInfiniteScroll({
        onLoad: mockOnLoad,
      }),
    )

    expect(mockOnLoad).not.toHaveBeenCalled()
    expect(result.current.finish).toBeFalsy()
  })

  test("calls onLoad once when `initialLoad` is true", async () => {
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
          <div ref={rootRef} style={{ overflowY: "auto" }} data-testid="root">
            {!finish ? <div ref={ref} data-testid="trigger" /> : null}
          </div>
          <button data-testid="reset" onClick={() => resetRef.current()}>
            Reset
          </button>
        </>
      )
    }

    const { user } = await render(<MyComponent />)
    const root = page.getByTestId("root").element()

    if (!(root instanceof HTMLDivElement))
      throw new Error("Expected HTMLDivElement")

    const scrollTo = vi.spyOn(root, "scrollTo")

    await user.click(page.getByTestId("reset"))
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

    const { user } = await render(<MyComponent />)
    const scrollTo = vi.spyOn(window, "scrollTo")

    await user.click(page.getByTestId("reset"))
    expect(scrollTo).toHaveBeenCalledWith({ behavior: undefined, top: 0 })
  })

  test("scrolls the scrollable root to the bottom on reset when `reverse`", async () => {
    const MyComponent = () => {
      const rootRef = useRef<HTMLDivElement>(null)
      const resetRef = useRef<() => void>(noop)
      const { ref } = useInfiniteScroll({
        resetRef,
        reverse: true,
        rootRef,
        onLoad: vi.fn(),
      })

      return (
        <>
          <div
            ref={rootRef}
            style={{ maxHeight: "100px", overflow: "auto" }}
            data-testid="root"
          >
            <div ref={ref} style={{ height: "200px" }} data-testid="trigger" />
          </div>
          <button data-testid="reset" onClick={() => resetRef.current()}>
            Reset
          </button>
        </>
      )
    }

    const { user } = await render(<MyComponent />)
    const root = page.getByTestId("root").element()

    if (!(root instanceof HTMLDivElement))
      throw new Error("Expected HTMLDivElement")

    const scrollTo = vi.spyOn(root, "scrollTo")

    await user.click(page.getByTestId("reset"))
    expect(scrollTo).toHaveBeenCalledWith({
      behavior: undefined,
      top: root.scrollHeight,
    })
  })

  test("scrolls the scrollable root horizontally on reset when `reverse`", async () => {
    const MyComponent = () => {
      const rootRef = useRef<HTMLDivElement>(null)
      const resetRef = useRef<() => void>(noop)
      const { ref } = useInfiniteScroll({
        orientation: "horizontal",
        resetRef,
        reverse: true,
        rootRef,
        onLoad: vi.fn(),
      })

      return (
        <>
          <div
            ref={rootRef}
            style={{ maxWidth: "100px", overflowX: "auto" }}
            data-testid="root"
          >
            <div ref={ref} style={{ width: "200px" }} data-testid="trigger" />
          </div>
          <button data-testid="reset" onClick={() => resetRef.current()}>
            Reset
          </button>
        </>
      )
    }

    const { user } = await render(<MyComponent />)
    const root = page.getByTestId("root").element()

    if (!(root instanceof HTMLDivElement))
      throw new Error("Expected HTMLDivElement")

    const scrollTo = vi.spyOn(root, "scrollTo")

    await user.click(page.getByTestId("reset"))
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

    const { user } = await render(<MyComponent />)
    const scrollTo = vi.spyOn(window, "scrollTo")

    await user.click(page.getByTestId("reset"))
    expect(scrollTo).toHaveBeenCalledWith({ behavior: undefined, left: 0 })
  })

  test("does not observe when `disabled` is true", async () => {
    const observeSpy = vi.spyOn(IntersectionObserver.prototype, "observe")

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
    expect(observeSpy).not.toHaveBeenCalled()
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
        <div ref={rootRef} style={{ overflowY: "auto" }} data-testid="root">
          {!finish ? <div ref={ref} data-testid="trigger" /> : null}
        </div>
      )
    }

    const { container } = await render(<MyComponent />)
    const root = getRootDiv(container)

    await vi.waitFor(() => expect(root.tabIndex).toBe(0))
  })

  test("does not override an existing tabindex on the root", async () => {
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
    const root = getRootDiv(container)

    expect(root.tabIndex).toBe(-1)
  })
})
