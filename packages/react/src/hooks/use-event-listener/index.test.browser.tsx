import { page, render, renderHook } from "#test/browser"
import { useEventListener, useEventListeners } from "./"

describe("useEventListener", () => {
  test("Adds event listener to target element", async () => {
    const { user } = await render(<button type="button">target</button>)
    const targetLocator = page.getByRole("button", { name: "target" })
    const target = targetLocator.element()
    const handler = vi.fn()

    await renderHook(() => useEventListener(target, "click", handler))
    await user.click(targetLocator)

    expect(handler).toHaveBeenCalledTimes(1)
  })

  test("Removes event listener when unmounted", async () => {
    const { user } = await render(<button type="button">target</button>)
    const targetLocator = page.getByRole("button", { name: "target" })
    const target = targetLocator.element()
    const handler = vi.fn()

    const { unmount } = await renderHook(() =>
      useEventListener(target, "click", handler),
    )

    unmount()

    await user.click(targetLocator)

    expect(handler).not.toHaveBeenCalled()
  })

  test("Removes event listener using returned cleanup function", async () => {
    const { user } = await render(<button type="button">target</button>)
    const targetLocator = page.getByRole("button", { name: "target" })
    const target = targetLocator.element()
    const handler = vi.fn()

    const { result } = await renderHook(() =>
      useEventListener(target, "click", handler),
    )

    const cleanup = result.current

    cleanup()

    await user.click(targetLocator)

    expect(handler).not.toHaveBeenCalled()
  })
})

describe("useEventListeners", () => {
  test("Adds and removes event listeners to multiple elements", async () => {
    const { user } = await render(
      <>
        <button type="button">target1</button>
        <button type="button">target2</button>
      </>,
    )

    const targetLocator1 = page.getByRole("button", { name: "target1" })
    const targetLocator2 = page.getByRole("button", { name: "target2" })
    const target1 = targetLocator1.element()
    const target2 = targetLocator2.element()

    const clickHandler1 = vi.fn()
    const clickHandler2 = vi.fn()

    const { result } = await renderHook(() => useEventListeners())
    const { add, remove } = result.current

    add(target1, "click", clickHandler1, false)
    add(target2, "click", clickHandler2, false)

    await user.click(targetLocator1)
    await user.click(targetLocator2)

    expect(clickHandler1).toHaveBeenCalledTimes(1)
    expect(clickHandler2).toHaveBeenCalledTimes(1)

    remove(target1, "click", clickHandler1, false)
    remove(target2, "click", clickHandler2, false)

    await user.click(targetLocator1)
    await user.click(targetLocator2)

    expect(clickHandler1).toHaveBeenCalledTimes(1)
    expect(clickHandler2).toHaveBeenCalledTimes(1)
  })
})
