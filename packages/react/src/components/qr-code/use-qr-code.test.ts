import type { Ref } from "react"
import { createRef } from "react"
import { vi } from "vitest"
import { renderHook } from "#test"
import { useQrCode } from "./use-qr-code"

function invokeCallbackRef<T>(ref: Ref<T> | undefined, node: null | T) {
  if (typeof ref === "function") ref(node)
}

function invokeHandler<E>(handler: ((event: E) => void) | undefined, event: E) {
  handler?.(event)
}

describe("useQrCode", () => {
  test("getRootProps merges hook props and user props via mergeProps", () => {
    const hookRef = createRef<HTMLDivElement>()
    const userRef = createRef<HTMLDivElement>()
    const hookOnClick = vi.fn()
    const userOnClick = vi.fn()
    const { result } = renderHook(
      () =>
        useQrCode({
          ref: hookRef,
          className: "hook",
          style: { color: "red" },
          value: "https://yamada-ui.com",
          onClick: hookOnClick,
        }),
      { withProvider: false },
    )

    const merged = result.current.getRootProps({
      ref: userRef,
      className: "user",
      style: { backgroundColor: "blue" },
      onClick: userOnClick,
    })
    const node = document.createElement("div")
    const event = new MouseEvent("click")

    expect(typeof merged.ref).toBe("function")
    invokeCallbackRef(merged.ref, node)
    invokeHandler(merged.onClick, event as never)

    expect(String(merged.className)).toContain("hook")
    expect(String(merged.className)).toContain("user")
    expect(merged.style).toStrictEqual({
      backgroundColor: "blue",
      color: "red",
    })
    expect(hookRef.current).toBe(node)
    expect(userRef.current).toBe(node)
    expect(hookOnClick).toHaveBeenCalledTimes(1)
    expect(userOnClick).toHaveBeenCalledTimes(1)
    expect(hookOnClick).toHaveBeenCalledWith(event)
    expect(userOnClick).toHaveBeenCalledWith(event)
  })
})
