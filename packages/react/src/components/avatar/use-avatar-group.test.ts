import { renderHook } from "#test"
import { useAvatarGroup } from "./use-avatar-group"

describe("useAvatarGroup getRootProps", () => {
  test("merges root props and keeps role fixed to group", () => {
    const hookOnClick = vi.fn()
    const userOnClick = vi.fn()
    const hookRef = vi.fn()
    const userRef = vi.fn()

    const { result } = renderHook(
      () =>
        useAvatarGroup({
          id: "hook-id",
          ref: hookRef,
          className: "hook",
          style: { backgroundColor: "tomato" },
          "data-testid": "group-root",
          children: [],
          role: "presentation",
          onClick: hookOnClick,
        }),
      { withProvider: false },
    )

    const merged = result.current.getRootProps({
      id: "user-id",
      ref: userRef,
      className: "user",
      style: { color: "white" },
      role: "toolbar",
      onClick: userOnClick,
    })

    expect(merged.role).toBe("group")
    expect(merged.id).toBe("user-id")
    expect(String(merged.className)).toContain("hook")
    expect(String(merged.className)).toContain("user")
    expect(merged.style).toMatchObject({
      backgroundColor: "tomato",
      color: "white",
    })
    expect(merged["data-testid"]).toBe("group-root")

    const node = document.createElement("div")

    expect(merged.ref).toBeTypeOf("function")
    ;(merged.ref as (node: HTMLDivElement | null) => void)(node)

    expect(hookRef).toHaveBeenCalledWith(node)
    expect(userRef).toHaveBeenCalledWith(node)

    merged.onClick?.({} as any)

    expect(hookOnClick).toHaveBeenCalledTimes(1)
    expect(userOnClick).toHaveBeenCalledTimes(1)
  })
})
