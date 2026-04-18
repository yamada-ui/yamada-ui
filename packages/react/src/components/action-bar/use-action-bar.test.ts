import { renderHook } from "#test"
import { useActionBar } from "./use-action-bar"

describe("useActionBar getRootProps", () => {
  test("merges hook rest with user props via mergeProps", () => {
    const { result } = renderHook(() =>
      useActionBar({
        id: "hook-id",
        className: "hook",
        "data-testid": "bar-root",
      }),
    )

    const merged = result.current.getRootProps({
      id: "user-id",
      className: "user",
    })

    expect(merged.id).toBe("user-id")
    expect(String(merged.className)).toContain("hook")
    expect(String(merged.className)).toContain("user")
    expect(merged["data-testid"]).toBe("bar-root")
  })
})
