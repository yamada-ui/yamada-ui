import { act, renderHook, waitFor } from "#test"
import { usePopper, usePopperProps } from "."

describe("usePopper", () => {
  test("should return default refs and props getters", () => {
    const { result } = renderHook(() => usePopper())

    expect(result.current.refs).toBeDefined()
    expect(typeof result.current.getReferenceProps).toBe("function")
    expect(typeof result.current.getPopperProps).toBe("function")
  })

  test("should handle offset as an array [mainAxis, crossAxis]", () => {
    const offset: [number, number] = [10, 20]
    const { result } = renderHook(() => usePopper({ offset }))

    expect(result.current.refs).toBeDefined()
  })

  test("should handle gutter as a number when offset is not provided", () => {
    const { result } = renderHook(() => usePopper({ gutter: 16 }))

    expect(result.current.refs).toBeDefined()
  })

  test("should use custom whileElementsMounted function", () => {
    const customWhileMounted = vi.fn(() => () => {
      /* noop */
    })

    renderHook(() =>
      usePopper({
        whileElementsMounted: customWhileMounted,
      }),
    )

    expect(customWhileMounted).toBeDefined()
  })

  test("should fallback to autoUpdate when whileElementsMounted is not provided", () => {
    const { result } = renderHook(() =>
      usePopper({ autoUpdate: true, whileElementsMounted: undefined }),
    )

    expect(result.current.refs).toBeDefined()
  })

  test("should handle all feature flags being false", () => {
    const { result } = renderHook(() =>
      usePopper({
        autoUpdate: false,
        flip: false,
        gutter: 0,
        matchWidth: false,
        preventOverflow: false,
      }),
    )

    expect(result.current.refs).toBeDefined()
  })

  test("should handle undefined props in getters", () => {
    const { result } = renderHook(() => usePopper())

    const popperProps = result.current.getPopperProps()
    const refProps = result.current.getReferenceProps()

    expect(popperProps).toHaveProperty("ref")
    expect(refProps).toHaveProperty("ref")
  })

  test("should execute matchWidth apply function", async () => {
    const { result } = renderHook(() => usePopper({ matchWidth: true }))
    const referenceEl = document.createElement("div")
    const floatingEl = document.createElement("div")

    Object.defineProperty(referenceEl, "offsetWidth", { value: 200 })

    vi.spyOn(referenceEl, "getBoundingClientRect").mockReturnValue({
      bottom: 40,
      height: 40,
      left: 0,
      right: 200,
      top: 0,
      width: 200,
    } as DOMRect)

    act(() => {
      result.current.refs.setReference(referenceEl)
      result.current.refs.setFloating(floatingEl)
    })

    await waitFor(() => {
      expect(floatingEl.style.minWidth).toBe("200px")
    })
  })

  test("should include custom middleware when provided", () => {
    const customMiddleware = {
      name: "custom",
      fn: ({ x, y }: { x: number; y: number }) => ({ x, y }),
    }

    const { result } = renderHook(() =>
      usePopper({
        middleware: [customMiddleware],
      }),
    )

    expect(result.current.refs).toBeDefined()
  })

  test("should return autoUpdate when autoUpdateProp is true", () => {
    const { result } = renderHook(() => usePopper({ autoUpdate: true }))

    expect(result.current.refs).toBeDefined()
  })

  test("should handle matchWidth: true and set style to undefined", () => {
    const { result } = renderHook(() => usePopper({ matchWidth: true }))
    const popperProps = result.current.getPopperProps()

    expect(popperProps.style?.minWidth).toBeUndefined()
  })

  test("should merge external ref in getReferenceProps", () => {
    const { result } = renderHook(() => usePopper())
    const externalRef = { current: null }

    const props = result.current.getReferenceProps({
      ref: externalRef,
    })

    expect(props.ref).toBeDefined()
  })

  test("should merge custom styles and refs in getPopperProps", () => {
    const { result } = renderHook(() => usePopper())
    const customStyle = { backgroundColor: "red" }
    const externalRef = { current: null }

    const props = result.current.getPopperProps({
      ref: externalRef,
      style: customStyle,
    })

    expect(props.style).toMatchObject(customStyle)
    expect(props.style).toHaveProperty("minWidth", "max-content")
    expect(props.ref).toBeDefined()
  })

  test("should correctly split popper props using usePopperProps", () => {
    const props = {
      children: "test",
      color: "red",
      gutter: 12,
      placement: "bottom" as const,
    }

    const { result } = renderHook(() => usePopperProps(props))
    const [popper, rest] = result.current

    expect(popper).toHaveProperty("placement", "bottom")
    expect(popper).toHaveProperty("gutter", 12)
    expect(rest).not.toHaveProperty("placement")
    expect(rest).toHaveProperty("children", "test")
  })

  test("should omit specified keys in usePopperProps", () => {
    const props = {
      gutter: 8,
      placement: "top" as const,
    }

    const { result } = renderHook(() => usePopperProps(props, ["placement"]))
    const [popper] = result.current

    expect(popper).not.toHaveProperty("placement")
    expect(popper).toHaveProperty("gutter", 8)
  })
})
