import { renderHook } from "#test"
import { createRef } from "react"
import { useAccordion } from "./use-accordion"

describe("useAccordion getRootProps", () => {
  test("merges hook rest with user props via mergeProps", () => {
    const hookRef = createRef<HTMLDivElement>()
    const userRef = createRef<HTMLDivElement>()
    const hookOnClick = vi.fn()
    const userOnClick = vi.fn()
    const { result } = renderHook(() =>
      useAccordion({
        id: "hook-id",
        ref: hookRef,
        className: "hook",
        style: { color: "red" },
        "data-testid": "acc-root",
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
    const node = document.createElement("div")
    const event = { type: "click" } as any

    expect(typeof merged.ref).toBe("function")
    ;(merged.ref as (node: HTMLDivElement | null) => void)(node)
    merged.onClick?.(event)

    expect(merged.id).toBe("user-id")
    expect(String(merged.className)).toContain("hook")
    expect(String(merged.className)).toContain("user")
    expect(merged.style).toStrictEqual({
      backgroundColor: "blue",
      color: "red",
    })
    expect(hookRef.current).toBe(node)
    expect(userRef.current).toBe(node)
    expect(hookOnClick).toHaveBeenCalledWith(event)
    expect(userOnClick).toHaveBeenCalledWith(event)
    expect(merged["data-testid"]).toBe("acc-root")
  })
})
