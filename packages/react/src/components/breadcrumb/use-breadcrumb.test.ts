import type { Ref } from "react"
import { renderHook } from "#test"
import { useBreadcrumb } from "./use-breadcrumb"

function invokeCallbackRef<T>(ref: Ref<T> | undefined, node: null | T) {
  if (typeof ref === "function") ref(node)
}

function invokeHandler<E>(handler: ((event: E) => void) | undefined, event: E) {
  handler?.(event)
}

describe("useBreadcrumb getRootProps", () => {
  test("merges aria-label, hook rest, and user props via mergeProps", () => {
    const { result } = renderHook(
      () =>
        useBreadcrumb({
          id: "hook-id",
          className: "hook",
          "data-testid": "bc-root",
          items: [],
        }),
      { withProvider: false },
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

  test("merges style from hook props and user props", () => {
    const { result } = renderHook(
      () =>
        useBreadcrumb({
          style: { color: "red" },
          items: [],
        }),
      { withProvider: false },
    )

    const merged = result.current.getRootProps({
      style: { fontSize: "16px" },
    })

    expect(merged.style).toStrictEqual({ color: "red", fontSize: "16px" })
  })

  test("chains event handlers from hook props and user props", () => {
    const onClickFromHook = vi.fn()
    const onClickFromUser = vi.fn()

    const { result } = renderHook(
      () =>
        useBreadcrumb({
          items: [],
          onClick: onClickFromHook,
        }),
      { withProvider: false },
    )

    const merged = result.current.getRootProps({
      onClick: onClickFromUser,
    })

    invokeHandler(merged.onClick, undefined as never)

    expect(onClickFromHook).toHaveBeenCalledWith(undefined)
    expect(onClickFromUser).toHaveBeenCalledWith(undefined)
  })

  test("merges refs from hook props and user props", () => {
    const refFromHook = vi.fn()
    const refFromUser = vi.fn()
    const node = document.createElement("nav")

    const { result } = renderHook(
      () =>
        useBreadcrumb({
          ref: refFromHook,
          items: [],
        }),
      { withProvider: false },
    )

    const merged = result.current.getRootProps({
      ref: refFromUser,
    })

    invokeCallbackRef(merged.ref, node)

    expect(refFromHook).toHaveBeenCalledWith(node)
    expect(refFromUser).toHaveBeenCalledWith(node)
  })
})
