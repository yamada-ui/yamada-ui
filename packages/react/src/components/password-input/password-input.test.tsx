import type { PropsWithChildren, Ref } from "react"
import type { FieldContext as FieldContextValue } from "../field/field"
import { createElement } from "react"
import { vi } from "vitest"
import { a11y, render, renderHook, screen } from "#test"
import { FieldContext } from "../field/field"
import { PasswordInput, StrengthMeter } from "./"
import { usePasswordInput } from "./use-password-input"
import { useStrengthMeter } from "./use-strength-meter"

function invokeCallbackRef<T>(ref: Ref<T> | undefined, node: null | T) {
  if (typeof ref === "function") ref(node)
}

function invokeHandler<E>(handler: ((event: E) => void) | undefined, event: E) {
  handler?.(event)
}

function FieldWrapper({
  children,
  context,
}: PropsWithChildren<{ context: FieldContextValue }>) {
  return createElement(FieldContext, { value: context }, children)
}

describe("<PasswordInput />", () => {
  test("renders component correctly", async () => {
    await a11y(<PasswordInput placeholder="password" />)
  })

  test("sets `className` correctly", () => {
    render(<PasswordInput placeholder="password" />)

    const input = screen.getByPlaceholderText("password")
    const button = screen.getByRole("button")

    expect(input).toHaveClass("ui-password-input__field")
    expect(button).toHaveClass("ui-password-input__button")
    expect(input.parentElement).toHaveClass("ui-password-input__root")
  })
})

describe("<StrengthMeter />", () => {
  test("renders component correctly", async () => {
    await a11y(<StrengthMeter value={3} />)
  })

  test("sets `className` correctly", () => {
    render(<StrengthMeter data-testid="strengthMeter" value={3} />)

    const strengthMeter = screen.getByTestId("strengthMeter")

    expect(strengthMeter).toHaveClass("ui-strength-meter__root")
    expect(strengthMeter.children[0]).toHaveClass(
      "ui-strength-meter__indicators",
    )
    expect(strengthMeter.children[0]?.children[0]).toHaveClass(
      "ui-strength-meter__indicator",
    )
  })
})

describe("usePasswordInput", () => {
  test("getInputProps composes refs without duplicate callback calls", () => {
    const rootRef = vi.fn()
    const userRef = vi.fn()
    const { result } = renderHook(() => usePasswordInput({ ref: rootRef }), {
      withProvider: false,
    })
    const merged = result.current.getInputProps({ ref: userRef })
    const node = document.createElement("input")

    expect(typeof merged.ref).toBe("function")
    invokeCallbackRef(merged.ref, node)
    invokeCallbackRef(merged.ref, null)

    expect(rootRef).toHaveBeenCalledTimes(2)
    expect(userRef).toHaveBeenCalledTimes(2)
    expect(rootRef).toHaveBeenNthCalledWith(1, node)
    expect(rootRef).toHaveBeenNthCalledWith(2, null)
    expect(userRef).toHaveBeenNthCalledWith(1, node)
    expect(userRef).toHaveBeenNthCalledWith(2, null)
  })

  test("getInputProps preserves field-first blur and focus handler order", () => {
    const order: string[] = []
    const fieldOnBlur = vi.fn(() => order.push("field:blur"))
    const fieldOnFocus = vi.fn(() => order.push("field:focus"))
    const hookOnBlur = vi.fn(() => order.push("hook:blur"))
    const hookOnFocus = vi.fn(() => order.push("hook:focus"))
    const userOnBlur = vi.fn(() => order.push("user:blur"))
    const userOnFocus = vi.fn(() => order.push("user:focus"))
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
      FieldWrapper({ children, context })
    const { result } = renderHook(
      () => usePasswordInput({ onBlur: hookOnBlur, onFocus: hookOnFocus }),
      { withProvider: false, wrapper },
    )
    const merged = result.current.getInputProps({
      onBlur: userOnBlur,
      onFocus: userOnFocus,
    })
    const blurEvent = new FocusEvent("blur")
    const focusEvent = new FocusEvent("focus")

    invokeHandler(merged.onBlur, blurEvent as never)
    invokeHandler(merged.onFocus, focusEvent as never)

    expect(order).toStrictEqual([
      "field:blur",
      "hook:blur",
      "user:blur",
      "field:focus",
      "hook:focus",
      "user:focus",
    ])
  })

  test("getInputProps keeps preventDefault short-circuit behavior for blur", () => {
    const fieldOnBlur = vi.fn()
    const hookOnBlur = vi.fn((ev: { preventDefault: () => void }) =>
      ev.preventDefault(),
    )
    const userOnBlur = vi.fn()
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
      onFocus: vi.fn(),
    }
    const wrapper = ({ children }: PropsWithChildren) =>
      FieldWrapper({ children, context })
    const { result } = renderHook(
      () => usePasswordInput({ onBlur: hookOnBlur }),
      { withProvider: false, wrapper },
    )
    const merged = result.current.getInputProps({ onBlur: userOnBlur })
    const event = {
      defaultPrevented: false,
      preventDefault() {
        this.defaultPrevented = true
      },
    }

    invokeHandler(merged.onBlur, event as never)

    expect(fieldOnBlur).toHaveBeenCalledTimes(1)
    expect(hookOnBlur).toHaveBeenCalledTimes(1)
    expect(userOnBlur).not.toHaveBeenCalled()
  })

  test("getInputProps keeps per-call event overwrite for onChange and onKeyDown", () => {
    const rootOnChange = vi.fn()
    const rootOnKeyDown = vi.fn()
    const userOnChange = vi.fn()
    const userOnKeyDown = vi.fn()
    const { result } = renderHook(
      () =>
        usePasswordInput({
          onChange: rootOnChange,
          onKeyDown: rootOnKeyDown,
        }),
      { withProvider: false },
    )
    const merged = result.current.getInputProps({
      onChange: userOnChange,
      onKeyDown: userOnKeyDown,
    })
    const changeEvent = new Event("change")
    const keyDownEvent = new KeyboardEvent("keydown", { key: "Enter" })

    invokeHandler(merged.onChange, changeEvent as never)
    invokeHandler(merged.onKeyDown, keyDownEvent as never)

    expect(rootOnChange).not.toHaveBeenCalled()
    expect(rootOnKeyDown).not.toHaveBeenCalled()
    expect(userOnChange).toHaveBeenCalledWith(changeEvent)
    expect(userOnKeyDown).toHaveBeenCalledWith(keyDownEvent)
  })

  test("getInputProps merges className style css and allows aria/data overrides", () => {
    const { result } = renderHook(
      () =>
        usePasswordInput({
          className: "root",
          css: { color: "red" },
          style: { color: "red" },
          invalid: true,
        } as never),
      { withProvider: false },
    )
    const merged = result.current.getInputProps({
      className: "user",
      css: { fontSize: "md" },
      style: { backgroundColor: "blue" },
      "aria-invalid": false,
      "data-invalid": "override",
    } as never)

    expect(String(merged.className)).toContain("root")
    expect(String(merged.className)).toContain("user")
    expect(merged.style).toStrictEqual({
      backgroundColor: "blue",
      color: "red",
    })
    expect((merged as { css?: unknown }).css).toStrictEqual([
      { color: "red" },
      { fontSize: "md" },
    ])
    expect(merged["aria-invalid"]).toBeFalsy()
    expect(merged["data-invalid"]).toBe("override")
  })
})

describe("useStrengthMeter", () => {
  test("getRootProps merges className style css and composes event handlers", () => {
    const rootOnKeyDown = vi.fn()
    const userOnKeyDown = vi.fn()
    const { result } = renderHook(
      () =>
        useStrengthMeter({
          className: "root",
          css: { color: "red" },
          style: { color: "red" },
          value: 2,
          onKeyDown: rootOnKeyDown,
        } as never),
      { withProvider: false },
    )
    const merged = result.current.getRootProps({
      className: "user",
      css: { fontSize: "sm" },
      style: { backgroundColor: "blue" },
      "aria-label": "custom meter",
      onKeyDown: userOnKeyDown,
    } as never)
    const event = new KeyboardEvent("keydown", { key: "Enter" })

    invokeHandler(merged.onKeyDown, event as never)

    expect(String(merged.className)).toContain("root")
    expect(String(merged.className)).toContain("user")
    expect(merged.style).toStrictEqual({
      backgroundColor: "blue",
      color: "red",
    })
    expect((merged as { css?: unknown }).css).toStrictEqual([
      { color: "red" },
      { fontSize: "sm" },
    ])
    expect(merged["aria-label"]).toBe("custom meter")
    expect(rootOnKeyDown).toHaveBeenCalledWith(event)
    expect(userOnKeyDown).toHaveBeenCalledWith(event)
  })
})
