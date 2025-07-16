import { renderHook } from "#test"
import { useWindowEvent } from "./"

describe("useWindowEvent", () => {
  test("adds and removes an event listener to the window", () => {
    const eventType = "resize"
    const handler = vi.fn()

    const { unmount } = renderHook(() => useWindowEvent(eventType, handler))
    window.dispatchEvent(new Event(eventType))
    expect(handler).toHaveBeenCalledTimes(1)

    unmount()
    window.dispatchEvent(new Event(eventType))
    expect(handler).toHaveBeenCalledTimes(1)
  })
})
