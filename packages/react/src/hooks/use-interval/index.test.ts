import { renderHook } from "#test/browser"
import { useInterval } from "."

describe("useInterval", () => {
  test("should call the callback repeatedly at the specified interval", async () => {
    const callback = vi.fn()

    await renderHook(() => useInterval(callback, 50))

    await expect
      .poll(() => callback.mock.calls.length)
      .toBeGreaterThanOrEqual(2)
  })

  test("should not call the callback when delay is null", async () => {
    const callback = vi.fn()

    await renderHook(() => useInterval(callback, null))

    await new Promise((resolve) => setTimeout(resolve, 100))

    expect(callback).not.toHaveBeenCalled()
  })

  test("should use the latest callback", async () => {
    const firstCallback = vi.fn()
    const secondCallback = vi.fn()

    const { rerender } = await renderHook(
      (props) => useInterval(props?.callback ?? firstCallback, 50),
      { initialProps: { callback: firstCallback } },
    )

    await expect
      .poll(() => firstCallback.mock.calls.length)
      .toBeGreaterThanOrEqual(1)

    await rerender({ callback: secondCallback })

    await expect
      .poll(() => secondCallback.mock.calls.length)
      .toBeGreaterThanOrEqual(1)
  })

  test("should reset interval when delay changes", async () => {
    const callback = vi.fn()

    const { rerender } = await renderHook(
      (props) => useInterval(callback, props?.delay ?? null),
      { initialProps: { delay: 5000 } },
    )

    await new Promise((resolve) => setTimeout(resolve, 100))

    expect(callback).not.toHaveBeenCalled()

    await rerender({ delay: 50 })

    await expect
      .poll(() => callback.mock.calls.length)
      .toBeGreaterThanOrEqual(1)
  })

  test("should clear interval on unmount", async () => {
    const callback = vi.fn()

    const { unmount } = await renderHook(() => useInterval(callback, 50))

    await expect
      .poll(() => callback.mock.calls.length)
      .toBeGreaterThanOrEqual(1)

    const callCount = callback.mock.calls.length

    unmount()

    await new Promise((resolve) => setTimeout(resolve, 100))

    expect(callback).toHaveBeenCalledTimes(callCount)
  })
})
