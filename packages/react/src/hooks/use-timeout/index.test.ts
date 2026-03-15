import { renderHook } from "#test/browser"
import { useTimeout } from "."

describe("useTimeout", () => {
  test("should call the callback after the specified delay", async () => {
    const callback = vi.fn()

    await renderHook(() => useTimeout(callback, 50))

    expect(callback).not.toHaveBeenCalled()

    await expect.poll(() => callback).toHaveBeenCalledTimes(1)
  })

  test("should not call the callback when delay is null", async () => {
    const callback = vi.fn()

    await renderHook(() => useTimeout(callback, null))

    await new Promise((resolve) => setTimeout(resolve, 100))

    expect(callback).not.toHaveBeenCalled()
  })

  test("should clear timeout on unmount", async () => {
    const callback = vi.fn()

    const { unmount } = await renderHook(() => useTimeout(callback, 50))

    unmount()

    await new Promise((resolve) => setTimeout(resolve, 100))

    expect(callback).not.toHaveBeenCalled()
  })

  test("should restart timeout when delay changes", async () => {
    const callback = vi.fn()

    const { rerender } = await renderHook(
      (props) => useTimeout(callback, props?.delay ?? null),
      { initialProps: { delay: 5000 } },
    )

    expect(callback).not.toHaveBeenCalled()

    await rerender({ delay: 50 })

    await expect.poll(() => callback).toHaveBeenCalledTimes(1)
  })
})
