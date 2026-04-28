import type { PropsWithChildren } from "react"
import { createElement } from "react"
import { renderHook } from "#test"
import { noop } from "../../utils"
import { FieldContext } from "../field/field"
import { useNumberCounter } from "./use-number-counter"
import { useNumberInput } from "./use-number-input"

describe("number-input mergeProps", () => {
  test("useNumberCounter getButtonProps merges style and chains pointer handlers", () => {
    const leaveCalls: string[] = []
    const upCalls: string[] = []

    const hookLeave = vi.fn(() => {
      leaveCalls.push("hook")
    })
    const userIncrementLeave = vi.fn(() => {
      leaveCalls.push("increment-user")
    })
    const hookUp = vi.fn(() => {
      upCalls.push("hook")
    })
    const userIncrementUp = vi.fn(() => {
      upCalls.push("increment-user")
    })
    const userDecrementLeave = vi.fn(() => {
      leaveCalls.push("decrement-user")
    })
    const userDecrementUp = vi.fn(() => {
      upCalls.push("decrement-user")
    })
    const incrementPointerDown = vi.fn()
    const decrementPointerDown = vi.fn()
    const incrementPreventDefault = vi.fn()
    const decrementPreventDefault = vi.fn()

    const { result } = renderHook(
      () =>
        useNumberCounter({
          className: "hook",
          style: { color: "red" },
          decrement: noop,
          disabled: false,
          increment: noop,
          keepWithinRange: true,
          max: false,
          min: false,
          onPointerLeave: hookLeave,
          onPointerUp: hookUp,
        }),
      { withProvider: false },
    )

    const incrementProps = result.current.getIncrementProps({
      className: "user",
      style: { background: "blue" },
      onPointerDown: incrementPointerDown,
      onPointerLeave: userIncrementLeave,
      onPointerUp: userIncrementUp,
    })

    const decrementProps = result.current.getDecrementProps({
      onPointerDown: decrementPointerDown,
      onPointerLeave: userDecrementLeave,
      onPointerUp: userDecrementUp,
    })

    incrementProps.onPointerDown?.({
      button: 0,
      preventDefault: incrementPreventDefault,
    } as never)
    incrementProps.onPointerLeave?.({} as never)
    incrementProps.onPointerUp?.({} as never)

    decrementProps.onPointerDown?.({
      button: 0,
      preventDefault: decrementPreventDefault,
    } as never)
    decrementProps.onPointerLeave?.({} as never)
    decrementProps.onPointerUp?.({} as never)

    expect(String(incrementProps.className)).toContain("hook")
    expect(String(incrementProps.className)).toContain("user")
    expect(incrementProps.style).toMatchObject({
      background: "blue",
      color: "red",
    })

    expect(incrementPointerDown).toHaveBeenCalledTimes(1)
    expect(decrementPointerDown).toHaveBeenCalledTimes(1)
    expect(incrementPreventDefault).toHaveBeenCalledTimes(1)
    expect(decrementPreventDefault).toHaveBeenCalledTimes(1)

    expect(leaveCalls).toStrictEqual([
      "hook",
      "increment-user",
      "hook",
      "decrement-user",
    ])
    expect(upCalls).toStrictEqual([
      "hook",
      "increment-user",
      "hook",
      "decrement-user",
    ])
  })

  test("useNumberInput getInputProps merges refs and styles", () => {
    const hookRef = vi.fn()
    const userRef = vi.fn()

    const { result } = renderHook(
      () =>
        useNumberInput({
          ref: hookRef,
          style: { color: "red" },
          defaultValue: 0,
        }),
      { withProvider: false },
    )

    const merged = result.current.getInputProps({
      ref: userRef,
      style: { background: "blue" },
    })

    expect(typeof merged.ref).toBe("function")
    expect(merged.style).toMatchObject({ background: "blue", color: "red" })

    const node = document.createElement("input")

    ;(merged.ref as (instance: HTMLInputElement | null) => void)(node)

    expect(hookRef).toHaveBeenCalledTimes(1)
    expect(userRef).toHaveBeenCalledTimes(1)
  })

  test("useNumberInput getInputProps keeps blur and focus handler order", () => {
    const blurCalls: string[] = []
    const focusCalls: string[] = []

    const fieldBlur = vi.fn(() => {
      blurCalls.push("field")
    })
    const hookBlur = vi.fn(() => {
      blurCalls.push("hook")
    })
    const userBlur = vi.fn(() => {
      blurCalls.push("user")
    })

    const fieldFocus = vi.fn(() => {
      focusCalls.push("field")
    })
    const hookFocus = vi.fn(() => {
      focusCalls.push("hook")
    })
    const userFocus = vi.fn(() => {
      focusCalls.push("user")
    })

    const wrapper = ({ children }: PropsWithChildren) =>
      createElement(
        FieldContext,
        {
          value: {
            id: "field-id",
            disabled: false,
            errorMessageId: "error-id",
            focused: false,
            helperMessageId: "helper-id",
            invalid: false,
            labelId: "label-id",
            readOnly: false,
            replace: true,
            required: false,
            onBlur: fieldBlur,
            onFocus: fieldFocus,
          },
        },
        children,
      )

    const { result } = renderHook(
      () =>
        useNumberInput({
          defaultValue: 0,
          onBlur: hookBlur,
          onFocus: hookFocus,
        }),
      { withProvider: false, wrapper },
    )

    const merged = result.current.getInputProps({
      onBlur: userBlur,
      onFocus: userFocus,
    })

    merged.onBlur?.({} as never)
    merged.onFocus?.({
      currentTarget: { selectionEnd: 0, selectionStart: 0, value: "" },
    } as never)

    expect(blurCalls).toStrictEqual(["field", "hook", "user"])
    expect(focusCalls).toStrictEqual(["field", "hook", "user"])
  })
})
