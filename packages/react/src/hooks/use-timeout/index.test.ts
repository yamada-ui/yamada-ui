import { act, renderHook } from "#test"
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

    renderHook(() => useTimeout(callback, 1000))

    expect(callback).not.toHaveBeenCalled()

    act(() => {
      vi.advanceTimersByTime(1000)
    })

    expect(callback).toHaveBeenCalledTimes(1)
  })

  test("should not call the callback when delay is null", () => {
    const callback = vi.fn()

    renderHook(() => useTimeout(callback, null))

    act(() => {
      vi.advanceTimersByTime(5000)
    })

    expect(callback).not.toHaveBeenCalled()
  })

  test("should clear timeout on unmount", () => {
    const callback = vi.fn()

    const { unmount } = renderHook(() => useTimeout(callback, 1000))

    unmount()

    act(() => {
      vi.advanceTimersByTime(1000)
    })

    expect(callback).not.toHaveBeenCalled()
  })

  test("should restart timeout when delay changes", () => {
    const callback = vi.fn()

    const { rerender } = renderHook(
      ({ delay }) => useTimeout(callback, delay),
      { initialProps: { delay: 1000 as null | number } },
    )

    act(() => {
      vi.advanceTimersByTime(500)
    })

    expect(callback).not.toHaveBeenCalled()

    rerender({ delay: 2000 })

    act(() => {
      vi.advanceTimersByTime(1500)
    })

    expect(callback).not.toHaveBeenCalled()

    act(() => {
      vi.advanceTimersByTime(500)
    })

    expect(callback).toHaveBeenCalledTimes(1)
  })
})
