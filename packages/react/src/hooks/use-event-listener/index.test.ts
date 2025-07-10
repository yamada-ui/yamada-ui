import { renderHook } from "../../../test"
import { useEventListener, useEventListeners } from "./"

describe("useEventListener", () => {
  test("Adds event listener to target element", () => {
    const target = document.createElement("div")
    const handler = vi.fn()

    renderHook(() => useEventListener(target, "click", handler))

    const clickEvent = new MouseEvent("click")
    target.dispatchEvent(clickEvent)

    expect(handler).toHaveBeenCalledTimes(1)
  })

  test("Removes event listener when unmounted", () => {
    const target = document.createElement("div")
    const handler = vi.fn()

    const { unmount } = renderHook(() =>
      useEventListener(target, "click", handler),
    )
    unmount()

    const clickEvent = new MouseEvent("click")
    target.dispatchEvent(clickEvent)

    expect(handler).not.toHaveBeenCalled()
  })

  test("Removes event listener using returned cleanup function", () => {
    const target = document.createElement("div")
    const handler = vi.fn()

    const { result } = renderHook(() =>
      useEventListener(target, "click", handler),
    )
    const cleanup = result.current

    cleanup()

    const clickEvent = new MouseEvent("click")
    target.dispatchEvent(clickEvent)

    expect(handler).not.toHaveBeenCalled()
  })
})

describe("useEventListeners", () => {
  test("Adds and removes event listeners to multiple elements", () => {
    const { result } = renderHook(() => useEventListeners())
    const { add, remove } = result.current

    const target1 = document.createElement("button")
    const target2 = document.createElement("input")

    const clickHandler1 = vi.fn()
    const clickHandler2 = vi.fn()

    add(target1, "click", clickHandler1, false)
    add(target2, "click", clickHandler2, false)

    const clickEvent1 = new MouseEvent("click")
    const clickEvent2 = new MouseEvent("click")

    target1.dispatchEvent(clickEvent1)
    target2.dispatchEvent(clickEvent2)

    expect(clickHandler1).toHaveBeenCalledTimes(1)
    expect(clickHandler2).toHaveBeenCalledTimes(1)

    remove(target1, "click", clickHandler1, false)
    remove(target2, "click", clickHandler2, false)

    target1.dispatchEvent(clickEvent1)
    target2.dispatchEvent(clickEvent2)

    expect(clickHandler1).toHaveBeenCalledTimes(1)
    expect(clickHandler2).toHaveBeenCalledTimes(1)
  })
})
