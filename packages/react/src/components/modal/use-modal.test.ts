import { renderHook } from "#test"
import { useModal } from "./use-modal"

describe("useModal getRootProps", () => {
  test("merges hook rest with user props via mergeProps", () => {
    const { result } = renderHook(() =>
      useModal({
        id: "hook-id",
        className: "hook",
        "data-testid": "modal-root",
      }),
    )

    const merged = result.current.getRootProps({
      id: "user-id",
      className: "user",
    })

    expect(merged.id).toBe("user-id")
    expect(String(merged.className)).toContain("hook")
    expect(String(merged.className)).toContain("user")
    expect(merged["data-testid"]).toBe("modal-root")
  })

  test("treats null props as empty object", () => {
    const { result } = renderHook(() =>
      useModal({
        className: "hook",
      }),
    )

    const merged = result.current.getRootProps(
      null as unknown as Parameters<typeof result.current.getRootProps>[0],
    )

    expect(String(merged.className)).toContain("hook")
  })
})
