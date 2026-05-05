import type { PropsWithChildren } from "react"
import { createElement } from "react"
import { a11y, render, renderHook, screen } from "#test"
import { NumberInput } from "."
import { noop } from "../../utils"
import { FieldContext } from "../field/field"
import { Group } from "../group"
import { useNumberCounter } from "./use-number-counter"
import { useNumberInput } from "./use-number-input"

describe("<NumberInput />", () => {
  test("renders component correctly", async () => {
    await a11y(<NumberInput aria-label="Input number" />)
  })

  test("should merge groupItemProps and rootProps without overwriting style", () => {
    render(
      <Group>
        <NumberInput
          aria-label="Input number"
          rootProps={{ style: { marginRight: "3px" } }}
        />
      </Group>,
    )

    const input = screen.getByRole("spinbutton")
    const root = input.closest(".ui-group")

    expect(root).not.toBeNull()
    expect(root).toHaveStyle({ marginRight: "3px" })
    expect(root).toHaveAttribute(
      "style",
      expect.stringContaining("--group-count: 1"),
    )
    expect(root).toHaveAttribute(
      "style",
      expect.stringContaining("--group-index: 0"),
    )
  })

  test("renders input with props", () => {
    render(
      <NumberInput size="md" variant="outline" placeholder="Enter a number" />,
    )

    expect(screen.getByRole("spinbutton")).toHaveAttribute(
      "placeholder",
      "Enter a number",
    )
  })

  test("renders input with default value, min, max, and step", () => {
    render(<NumberInput defaultValue={20} max={30} min={5} step={5} />)

    const input = screen.getByRole("spinbutton")
    expect(input).toHaveValue("20")
    expect(input).toHaveProperty("step", "5")
    expect(input).toHaveProperty("min", "5")
    expect(input).toHaveProperty("max", "30")
  })

  test("disables the input when disabled is true", () => {
    render(<NumberInput disabled />)

    expect(screen.getByRole("spinbutton")).toBeDisabled()
  })

  test("renders input with precision", () => {
    render(<NumberInput defaultValue={10} precision={2} step={0.2} />)

    expect(screen.getByRole("spinbutton")).toHaveValue("10.00")
  })

  test("renders an invalid input", () => {
    render(<NumberInput invalid />)

    expect(screen.getByRole("spinbutton")).toBeInvalid()
  })

  test("renders a custom stepper input", () => {
    render(
      <NumberInput
        decrementProps={{ children: "-", px: "xs" }}
        incrementProps={{ children: "+", px: "xs" }}
      />,
    )

    expect(screen.getByText(/\+/i)).toBeInTheDocument()
    expect(screen.getByText(/-/i)).toBeInTheDocument()
  })

  test("uses custom format and parse functions", () => {
    render(
      <NumberInput
        defaultValue={10}
        format={(val) => `$${val}`}
        parse={(val) => val.replace("$", "")}
      />,
    )

    expect(screen.getByRole("spinbutton")).toHaveValue("$10")
  })

  test("uses getAriaValueText for aria-valuetext", () => {
    render(
      <NumberInput
        defaultValue={10}
        getAriaValueText={(val) => `${val} items`}
      />,
    )

    expect(screen.getByRole("spinbutton")).toHaveAttribute(
      "aria-valuetext",
      "10 items",
    )
  })

  test("reflects controlled value changes", () => {
    const onChange = vi.fn()
    const { rerender } = render(<NumberInput value={10} onChange={onChange} />)

    expect(screen.getByRole("spinbutton")).toHaveValue("10")

    rerender(<NumberInput value={20} onChange={onChange} />)
    expect(screen.getByRole("spinbutton")).toHaveValue("20")
  })

  test("combines multiple props and renders all custom props correctly", () => {
    render(
      <NumberInput
        className="custom-class"
        colorScheme="primary"
        aria-describedby="helper-text"
        aria-label="Custom label"
        defaultValue={15}
        disabled={false}
        max={100}
        min={0}
        placeholder="Enter number"
        readOnly={false}
        step={5}
        controlProps={{ "data-testid": "control" }}
        decrementProps={{ "data-testid": "decrement" }}
        elementProps={{ "data-testid": "element" }}
        incrementProps={{ "data-testid": "increment" }}
        rootProps={{ "data-testid": "root" }}
      />,
    )

    const input = screen.getByRole("spinbutton")
    expect(input).toHaveValue("15")
    expect(input).toHaveProperty("step", "5")
    expect(input).toHaveProperty("min", "0")
    expect(input).toHaveProperty("max", "100")
    expect(input).toHaveAttribute("aria-label", "Custom label")
    expect(input).toHaveAttribute("aria-describedby", "helper-text")
    expect(screen.getByTestId("root")).toBeInTheDocument()
    expect(screen.getByTestId("element")).toBeInTheDocument()
    expect(screen.getByTestId("control")).toBeInTheDocument()
    expect(screen.getByTestId("increment")).toBeInTheDocument()
    expect(screen.getByTestId("decrement")).toBeInTheDocument()
  })
})

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
