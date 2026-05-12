import { useRef } from "react"
import { page, render, renderHook } from "#test/browser"
import { noop } from "../../utils"
import { useInfiniteScroll } from "./use-infinite-scroll"

describe("useInfiniteScroll", () => {
  test("does not call onLoad and is not finished by default", async () => {
    const mockOnLoad = vi.fn()
    const { result } = await renderHook(() =>
      useInfiniteScroll({ onLoad: mockOnLoad }),
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
            {!finish ? <div ref={ref} /> : null}
          </div>
          <button onClick={() => resetRef.current()}>Reset</button>
        </>
      )
    }

    const { user } = await render(<MyComponent />)
    const root = page.getByTestId("root").element() as HTMLDivElement
    const scrollTo = vi.spyOn(root, "scrollTo")

    await user.click(page.getByRole("button", { name: "Reset" }))
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
            {!finish ? <div ref={ref} /> : null}
          </div>
          <button onClick={() => resetRef.current()}>Reset</button>
        </>
      )
    }

    const { user } = await render(<MyComponent />)
    const scrollTo = vi.spyOn(window, "scrollTo")

    await user.click(page.getByRole("button", { name: "Reset" }))
    expect(scrollTo).toHaveBeenCalledWith({ behavior: undefined, top: 0 })
  })

  test("scrolls the scrollable root to the bottom on reset when `reverse`", async () => {
    const MyComponent = () => {
      const rootRef = useRef<HTMLDivElement>(null)
      const resetRef = useRef<() => void>(noop)
      const { ref, finish } = useInfiniteScroll({
        resetRef,
        reverse: true,
        rootRef,
        onLoad: noop,
      })

      return (
        <>
          <div
            ref={rootRef}
            style={{ maxHeight: "100px", overflow: "auto" }}
            data-testid="root"
          >
            {!finish ? <div ref={ref} style={{ height: "200px" }} /> : null}
          </div>
          <button onClick={() => resetRef.current()}>Reset</button>
        </>
      )
    }

    const { user } = await render(<MyComponent />)
    const root = page.getByTestId("root").element() as HTMLDivElement
    const scrollTo = vi.spyOn(root, "scrollTo")

    await user.click(page.getByRole("button", { name: "Reset" }))
    expect(scrollTo).toHaveBeenCalledWith({
      behavior: undefined,
      top: root.scrollHeight,
    })
  })

  test("scrolls the scrollable root horizontally on reset when `reverse`", async () => {
    const MyComponent = () => {
      const rootRef = useRef<HTMLDivElement>(null)
      const resetRef = useRef<() => void>(noop)
      const { ref, finish } = useInfiniteScroll({
        orientation: "horizontal",
        resetRef,
        reverse: true,
        rootRef,
        onLoad: noop,
      })

      return (
        <>
          <div
            ref={rootRef}
            style={{ maxWidth: "100px", overflowX: "auto" }}
            data-testid="root"
          >
            {!finish ? <div ref={ref} style={{ width: "200px" }} /> : null}
          </div>
          <button onClick={() => resetRef.current()}>Reset</button>
        </>
      )
    }

    const { user } = await render(<MyComponent />)
    const root = page.getByTestId("root").element() as HTMLDivElement
    const scrollTo = vi.spyOn(root, "scrollTo")

    await user.click(page.getByRole("button", { name: "Reset" }))
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
            {!finish ? <div ref={ref} /> : null}
          </div>
          <button onClick={() => resetRef.current()}>Reset</button>
        </>
      )
    }

    const { user } = await render(<MyComponent />)
    const scrollTo = vi.spyOn(window, "scrollTo")

    await user.click(page.getByRole("button", { name: "Reset" }))
    expect(scrollTo).toHaveBeenCalledWith({ behavior: undefined, left: 0 })
  })

  test("does not observe when `disabled` is true", async () => {
    const observeSpy = vi.spyOn(IntersectionObserver.prototype, "observe")

    const MyComponent = () => {
      const rootRef = useRef<HTMLDivElement>(null)
      const resetRef = useRef<() => void>(noop)
      const { ref, finish } = useInfiniteScroll({
        disabled: true,
        resetRef,
        rootRef,
        onLoad: noop,
      })

      return (
        <>
          <div ref={rootRef} style={{ overflowY: "auto" }}>
            {!finish ? <div ref={ref} /> : null}
          </div>
          <button onClick={() => resetRef.current()}>Reset</button>
        </>
      )
    }

    const { user } = await render(<MyComponent />)
    await user.click(page.getByRole("button", { name: "Reset" }))
    expect(observeSpy).not.toHaveBeenCalled()

    observeSpy.mockRestore()
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
          {!finish ? <div ref={ref} /> : null}
        </div>
      )
    }

    await render(<MyComponent />)

    await expect
      .element(page.getByTestId("root"))
      .toHaveAttribute("tabindex", "0")
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
        <div
          ref={rootRef}
          style={{ overflowY: "auto" }}
          data-testid="root"
          tabIndex={-1}
        >
          {!finish ? <div ref={ref} /> : null}
        </div>
      )
    }

    await render(<MyComponent />)

    await expect
      .element(page.getByTestId("root"))
      .toHaveAttribute("tabindex", "-1")
  })
})
