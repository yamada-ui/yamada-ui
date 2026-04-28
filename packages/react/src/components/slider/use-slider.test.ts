import type { PropsWithChildren, Ref } from "react"
import type { FieldContext as FieldContextValue } from "../field/field"
import { createElement, createRef } from "react"
import { vi } from "vitest"
import { renderHook } from "#test"
import { FieldContext } from "../field/field"
import { useSlider } from "./use-slider"

function invokeCallbackRef<T>(ref: Ref<T> | undefined, node: null | T) {
  if (typeof ref === "function") ref(node)
}

function invokeHandler<E>(handler: ((event: E) => void) | undefined, event: E) {
  handler?.(event)
}

describe("useSlider", () => {
  test("getRootProps merges className style and focus handlers", () => {
    const fieldOnBlur = vi.fn()
    const fieldOnFocus = vi.fn()
    const hookOnBlur = vi.fn()
    const hookOnFocus = vi.fn()
    const userOnBlur = vi.fn()
    const userOnFocus = vi.fn()
    const userRef = createRef<HTMLDivElement>()
    const context: FieldContextValue = {
      id: "field-id",
      disabled: false,
      errorMessageId: "field-error-id",
      focused: false,
      helperMessageId: "field-helper-id",
      invalid: false,
      labelId: "field-label-id",
      readOnly: false,
      replace: true,
      required: false,
      onBlur: fieldOnBlur,
      onFocus: fieldOnFocus,
    }
    const wrapper = ({ children }: PropsWithChildren) =>
      createElement(FieldContext, { value: context }, children)
    const { result } = renderHook(
      () =>
        useSlider({
          className: "hook",
          style: { color: "red" },
          onBlur: hookOnBlur,
          onFocus: hookOnFocus,
        }),
      { withProvider: false, wrapper },
    )
    const merged = result.current.getRootProps({
      ref: userRef,
      className: "user",
      style: { backgroundColor: "blue" },
      onBlur: userOnBlur,
      onFocus: userOnFocus,
    })
    const node = document.createElement("div")
    const focusEvent = new FocusEvent("focus")
    const blurEvent = new FocusEvent("blur")

    expect(typeof merged.ref).toBe("function")
    invokeCallbackRef(merged.ref, node)
    invokeHandler(merged.onFocus, focusEvent as never)
    invokeHandler(merged.onBlur, blurEvent as never)

    expect(userRef.current).toBe(node)
    expect(String(merged.className)).toContain("hook")
    expect(String(merged.className)).toContain("user")
    expect(merged.style).toMatchObject({
      "--range-end": "0%",
      "--range-start": "0%",
      backgroundColor: "blue",
      color: "red",
    })
    expect(fieldOnFocus).toHaveBeenCalledWith(focusEvent)
    expect(hookOnFocus).toHaveBeenCalledWith(focusEvent)
    expect(userOnFocus).toHaveBeenCalledWith(focusEvent)
    expect(fieldOnBlur).toHaveBeenCalledWith(blurEvent)
    expect(hookOnBlur).toHaveBeenCalledWith(blurEvent)
    expect(userOnBlur).toHaveBeenCalledWith(blurEvent)
  })

  test("getInputProps composes hook ref and user ref", () => {
    const hookRef = createRef<HTMLInputElement>()
    const userRef = createRef<HTMLInputElement>()
    const { result } = renderHook(() => useSlider({ ref: hookRef }), {
      withProvider: false,
    })
    const props = result.current.getInputProps({ ref: userRef })
    const node = document.createElement("input")

    expect(typeof props.ref).toBe("function")
    invokeCallbackRef(props.ref, node)

    expect(hookRef.current).toBe(node)
    expect(userRef.current).toBe(node)
  })
})
