import { renderHook } from "#test"
import { useAccordion } from "./use-accordion"

describe("useAccordion getRootProps", () => {
  test("merges hook rest with user props via mergeProps", () => {
    const { result } = renderHook(() =>
      useAccordion({
        id: "hook-id",
        className: "hook",
        "data-testid": "acc-root",
      }),
    )

    const merged = result.current.getRootProps({
      id: "user-id",
      className: "user",
    })

    expect(merged.id).toBe("user-id")
    expect(String(merged.className)).toContain("hook")
    expect(String(merged.className)).toContain("user")
    expect(merged["data-testid"]).toBe("acc-root")
  })
})
