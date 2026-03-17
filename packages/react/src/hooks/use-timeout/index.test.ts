import { renderHook } from "#test/browser"
import { useTimeout } from "."

describe("useTimeout", () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  test("should call the callback after the specified delay", async () => {
    const callback = vi.fn()

    await renderHook(() => useTimeout(callback, 50))

    expect(callback).not.toHaveBeenCalled()

    vi.advanceTimersByTime(50)

    expect(callback).toHaveBeenCalledTimes(1)
  })

  test("should not call the callback before the specified delay", async () => {
    const callback = vi.fn()

    await renderHook(() => useTimeout(callback, 50))

    vi.advanceTimersByTime(49)

    expect(callback).not.toHaveBeenCalled()
  })

  test("should not call the callback when delay is null", async () => {
    const callback = vi.fn()

    await renderHook(() => useTimeout(callback, null))

    vi.advanceTimersByTime(500)

    expect(callback).not.toHaveBeenCalled()
  })

  test("should clear timeout on unmount", async () => {
    const callback = vi.fn()

    const { unmount } = await renderHook(() => useTimeout(callback, 50))

    unmount()

    vi.advanceTimersByTime(100)

    expect(callback).not.toHaveBeenCalled()
  })

  test("should restart timeout when delay changes", async () => {
    const callback = vi.fn()

    const { rerender } = await renderHook(
      (props) => useTimeout(callback, props?.delay ?? null),
      { initialProps: { delay: 5000 } },
    )

    vi.advanceTimersByTime(500)

    expect(callback).not.toHaveBeenCalled()

    await rerender({ delay: 50 })

    vi.advanceTimersByTime(50)

    expect(callback).toHaveBeenCalledTimes(1)
  })

  test("should only call the callback once", async () => {
    const callback = vi.fn()

    await renderHook(() => useTimeout(callback, 50))

    vi.advanceTimersByTime(500)

    expect(callback).toHaveBeenCalledTimes(1)
  })
})
