import { renderHook } from "#test"
import { useTimeout } from "."

describe("useTimeout", () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  test("should call the callback after the specified delay", () => {
    const callback = vi.fn()

    renderHook(() => useTimeout(callback, 50))

    expect(callback).not.toHaveBeenCalled()

    vi.advanceTimersByTime(50)

    expect(callback).toHaveBeenCalledTimes(1)
  })

  test("should not call the callback when delay is null", () => {
    const callback = vi.fn()

    renderHook(() => useTimeout(callback, null))

    vi.advanceTimersByTime(50)

    expect(callback).not.toHaveBeenCalled()
  })

  test("should clear timeout on unmount", () => {
    const callback = vi.fn()

    const { unmount } = renderHook(() => useTimeout(callback, 50))

    unmount()

    vi.advanceTimersByTime(50)

    expect(callback).not.toHaveBeenCalled()
  })

  test("should restart timeout when delay changes", () => {
    const callback = vi.fn()

    const { rerender } = renderHook(
      ({ delay }: { delay: null | number }) => useTimeout(callback, delay),
      { initialProps: { delay: 5000 } },
    )

    expect(callback).not.toHaveBeenCalled()

    rerender({ delay: 50 })

    vi.advanceTimersByTime(50)

    expect(callback).toHaveBeenCalledTimes(1)
  })
})
