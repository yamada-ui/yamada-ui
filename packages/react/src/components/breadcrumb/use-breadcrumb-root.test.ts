import { renderHook } from "#test"
import { useBreadcrumb } from "./use-breadcrumb"

describe("useBreadcrumb getRootProps", () => {
  test("merges aria-label, hook rest, and user props via mergeProps", () => {
    const { result } = renderHook(() =>
      useBreadcrumb({
        id: "hook-id",
        className: "hook",
        "data-testid": "bc-root",
        items: [],
      }),
    )

    const merged = result.current.getRootProps({
      id: "user-id",
      className: "user",
    })

    expect(merged["aria-label"]).toBeDefined()
    expect(merged.id).toBe("user-id")
    expect(String(merged.className)).toContain("hook")
    expect(String(merged.className)).toContain("user")
    expect(merged["data-testid"]).toBe("bc-root")
  })
})
