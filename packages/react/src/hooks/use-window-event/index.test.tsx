import { a11y, renderHook } from "#test/browser"
import { useWindowEvent } from "./"
import { Basic } from "./index.stories"

describe("useWindowEvent", () => {
  test("renders with no a11y violations", async () => {
    await a11y(<Basic />)
  })

  test("adds and removes an event listener to the window", async () => {
    const eventType = "resize"
    const handler = vi.fn()

    const { unmount } = await renderHook(() =>
      useWindowEvent(eventType, handler),
    )
    window.dispatchEvent(new Event(eventType))
    expect(handler).toHaveBeenCalledTimes(1)

    unmount()
    window.dispatchEvent(new Event(eventType))
    expect(handler).toHaveBeenCalledTimes(1)
  })
})
