import { renderHook, waitFor } from "#test/browser"
import { useWindowEvent } from "./"

describe("useWindowEvent", () => {
  test("adds and removes an event listener to the window", async () => {
    const eventType = "resize"
    const handler = vi.fn()

    const { unmount } = await renderHook(() =>
      useWindowEvent(eventType, handler),
    )

    await waitFor(() => {
      window.dispatchEvent(new Event(eventType))
      expect(handler).toHaveBeenCalledTimes(1)
    })

    unmount()
    window.dispatchEvent(new Event(eventType))
    expect(handler).toHaveBeenCalledTimes(1)
  })
})
