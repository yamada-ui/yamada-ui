import { renderHook } from "#test"
import { useActionBar } from "./use-action-bar"

describe("useActionBar getRootProps", () => {
  test("merges hook rest with user props via mergeProps", () => {
    const hookRef = vi.fn()
    const userRef = vi.fn()
    const callOrder: string[] = []
    const hookOnClick = vi.fn(() => {
      callOrder.push("hook")
    })
    const userOnClick = vi.fn(() => {
      callOrder.push("user")
    })
    const { result } = renderHook(() =>
      useActionBar({
        id: "hook-id",
        ref: hookRef,
        className: "hook",
        style: { color: "red" },
        "data-testid": "bar-root",
        onClick: hookOnClick,
      }),
    )

    const merged = result.current.getRootProps({
      id: "user-id",
      ref: userRef,
      className: "user",
      style: { backgroundColor: "blue" },
      onClick: userOnClick,
    })

    expect(merged.id).toBe("user-id")
    expect(String(merged.className)).toContain("hook")
    expect(String(merged.className)).toContain("user")
    expect(merged["data-testid"]).toBe("bar-root")
    expect(merged.style).toMatchObject({
      backgroundColor: "blue",
      color: "red",
    })

    const element = document.createElement("div")
    expect(merged.ref).toBeTypeOf("function")
    merged.ref?.(element)

    expect(hookRef).toHaveBeenCalledWith(element)
    expect(userRef).toHaveBeenCalledWith(element)

    const event = new MouseEvent("click")
    merged.onClick?.(event as never)

    expect(hookOnClick).toHaveBeenCalledWith(event)
    expect(userOnClick).toHaveBeenCalledWith(event)
    expect(callOrder).toStrictEqual(["hook", "user"])
  })
})
