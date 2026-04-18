import { renderHook } from "#test"
import { useAvatarGroup } from "./use-avatar-group"

describe("useAvatarGroup getRootProps", () => {
  test("merges role, hook rest, and user props via mergeProps", () => {
    const { result } = renderHook(() =>
      useAvatarGroup({
        id: "hook-id",
        className: "hook",
        "data-testid": "group-root",
        children: [],
      }),
    )

    const merged = result.current.getRootProps({
      id: "user-id",
      className: "user",
    })

    expect(merged.role).toBe("group")
    expect(merged.id).toBe("user-id")
    expect(String(merged.className)).toContain("hook")
    expect(String(merged.className)).toContain("user")
    expect(merged["data-testid"]).toBe("group-root")
  })
})
