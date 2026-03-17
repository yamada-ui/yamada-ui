import { renderHook } from "#test/browser"
import { useInterval } from "."

describe("useInterval", () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  test("should call the callback repeatedly at the specified interval", async () => {
    const callback = vi.fn()

    await renderHook(() => useInterval(callback, 50))

    vi.advanceTimersByTime(500)

    expect(callback).toHaveBeenCalledTimes(10)
  })

  test("should not call the callback before the specified delay", async () => {
    const callback = vi.fn()

    await renderHook(() => useInterval(callback, 50))

    vi.advanceTimersByTime(49)

    expect(callback).not.toHaveBeenCalled()
  })

  test("should not call the callback when delay is null", async () => {
    const callback = vi.fn()

    await renderHook(() => useInterval(callback, null))

    vi.advanceTimersByTime(500)

    expect(callback).not.toHaveBeenCalled()
  })

  test("should use the latest callback", async () => {
    const firstCallback = vi.fn()
    const secondCallback = vi.fn()

    const { rerender } = await renderHook(
      (props) => useInterval(props?.callback ?? firstCallback, 50),
      { initialProps: { callback: firstCallback } },
    )

    vi.advanceTimersByTime(500)

    expect(firstCallback).toHaveBeenCalledTimes(10)

    await rerender({ callback: secondCallback })

    vi.advanceTimersByTime(500)

    expect(firstCallback).toHaveBeenCalledTimes(10)
    expect(secondCallback).toHaveBeenCalledTimes(10)
  })

  test("should reset interval when delay changes", async () => {
    const callback = vi.fn()

    const { rerender } = await renderHook(
      (props) => useInterval(callback, props?.delay ?? null),
      { initialProps: { delay: 5000 } },
    )

    vi.advanceTimersByTime(500)

    expect(callback).not.toHaveBeenCalled()

    await rerender({ delay: 50 })

    vi.advanceTimersByTime(500)

    expect(callback).toHaveBeenCalledTimes(10)
  })

  test("should clear interval on unmount", async () => {
    const callback = vi.fn()

    const { unmount } = await renderHook(() => useInterval(callback, 50))

    vi.advanceTimersByTime(500)

    expect(callback).toHaveBeenCalledTimes(10)

    unmount()

    vi.advanceTimersByTime(500)

    expect(callback).toHaveBeenCalledTimes(10)
  })
})
