import { renderHook } from "#test/browser"
import { usePopper, usePopperProps } from "."

describe("usePopper", () => {
  test("should return default refs and props getters", async () => {
    const { result } = await renderHook(() => usePopper())

    expect(result.current.refs).toBeDefined()
    expect(typeof result.current.getReferenceProps).toBe("function")
    expect(typeof result.current.getPopperProps).toBe("function")
  })

  test("should handle offset as an array [mainAxis, crossAxis]", async () => {
    const offset: [number, number] = [10, 20]
    const { result } = await renderHook(() => usePopper({ offset }))

    expect(result.current.refs).toBeDefined()
  })

  test("should handle gutter as a number when offset is not provided", async () => {
    const { result } = await renderHook(() => usePopper({ gutter: 16 }))

    expect(result.current.refs).toBeDefined()
  })

  test("should use custom whileElementsMounted function", async () => {
    const customWhileMounted = vi.fn(() => () => {
      /* noop */
    })

    await renderHook(() =>
      usePopper({
        whileElementsMounted: customWhileMounted,
      }),
    )

    expect(customWhileMounted).toBeDefined()
  })

  test("should fallback to autoUpdate when whileElementsMounted is not provided", async () => {
    const { result } = await renderHook(() =>
      usePopper({ autoUpdate: true, whileElementsMounted: undefined }),
    )

    expect(result.current.refs).toBeDefined()
  })

  test("should handle all feature flags being false", async () => {
    const { result } = await renderHook(() =>
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

  test("should handle undefined props in getters", async () => {
    const { result } = await renderHook(() => usePopper())

    const popperProps = result.current.getPopperProps()
    const refProps = result.current.getReferenceProps()

    expect(popperProps).toHaveProperty("ref")
    expect(refProps).toHaveProperty("ref")
  })

  test("should execute matchWidth apply function", async () => {
    const { act, result } = await renderHook(() =>
      usePopper({ matchWidth: true }),
    )
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

    await act(() => {
      result.current.refs.setReference(referenceEl)
      result.current.refs.setFloating(floatingEl)
    })

    await expect.poll(() => floatingEl.style.minWidth).toBe("200px")
  })

  test("should include custom middleware when provided", async () => {
    const customMiddleware = {
      name: "custom",
      fn: ({ x, y }: { x: number; y: number }) => ({ x, y }),
    }

    const { result } = await renderHook(() =>
      usePopper({
        middleware: [customMiddleware],
      }),
    )

    expect(result.current.refs).toBeDefined()
  })

  test("should return autoUpdate when autoUpdateProp is true", async () => {
    const { result } = await renderHook(() => usePopper({ autoUpdate: true }))

    expect(result.current.refs).toBeDefined()
  })

  test("should handle matchWidth: true and set style to undefined", async () => {
    const { result } = await renderHook(() => usePopper({ matchWidth: true }))
    const popperProps = result.current.getPopperProps()

    expect(popperProps.style?.minWidth).toBeUndefined()
  })

  test("should merge external ref in getReferenceProps", async () => {
    const { result } = await renderHook(() => usePopper())
    const externalRef = { current: null }

    const props = result.current.getReferenceProps({
      ref: externalRef,
    })

    expect(props.ref).toBeDefined()
  })

  test("should merge custom styles and refs in getPopperProps", async () => {
    const { result } = await renderHook(() => usePopper())
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

  test("should correctly split popper props using usePopperProps", async () => {
    const props = {
      children: "test",
      color: "red",
      gutter: 12,
      placement: "bottom" as const,
    }

    const { result } = await renderHook(() => usePopperProps(props))
    const [popper, rest] = result.current

    expect(popper).toHaveProperty("placement", "bottom")
    expect(popper).toHaveProperty("gutter", 12)
    expect(rest).not.toHaveProperty("placement")
    expect(rest).toHaveProperty("children", "test")
  })

  test("should omit specified keys in usePopperProps", async () => {
    const props = {
      gutter: 8,
      placement: "top" as const,
    }

    const { result } = await renderHook(() =>
      usePopperProps(props, ["placement"]),
    )
    const [popper] = result.current

    expect(popper).not.toHaveProperty("placement")
    expect(popper).toHaveProperty("gutter", 8)
  })
})
