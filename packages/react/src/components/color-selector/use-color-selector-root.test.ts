import { renderHook } from "#test"
import { useColorSelector } from "./use-color-selector"

describe("useColorSelector getRootProps", () => {
  test("merges data attributes and user props via mergeProps", () => {
    const { result } = renderHook(() =>
      useColorSelector({
        id: "hook-id",
        className: "hook",
        "data-testid": "color-root",
        value: "#ff0000",
      }),
    )

    const merged = result.current.getRootProps({
      id: "user-id",
      className: "user",
    })

    expect(merged.id).toBe("user-id")
    expect(String(merged.className)).toContain("hook")
    expect(String(merged.className)).toContain("user")
    expect(merged["data-testid"]).toBe("color-root")
  })
})
