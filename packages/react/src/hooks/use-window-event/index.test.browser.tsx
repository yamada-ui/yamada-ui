import { renderHook } from "#test/browser"
import { useWindowEvent } from "./"

describe("useWindowEvent", () => {
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

  test("handles custom events", async () => {
    const eventType = "yamada:custom"
    const handler = vi.fn<(ev: CustomEvent) => void>()

    const { unmount } = await renderHook(() =>
      useWindowEvent(eventType, handler),
    )
    const event = new CustomEvent(eventType, { detail: { value: 1 } })

    window.dispatchEvent(event)

    expect(handler).toHaveBeenCalledExactlyOnceWith(event)

    unmount()
  })
})
