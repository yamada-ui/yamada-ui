import { a11y, page, render } from "#test/browser"
import { NumberInput } from "."

describe("<NumberInput />", () => {
  test("renders component correctly", async () => {
    await a11y(<NumberInput aria-label="Input number" />)
  })

  test("sets `displayName` correctly", () => {
    expect(NumberInput.displayName).toBe("NumberInputRoot")
  })

  test("render input with props", async () => {
    await render(
      <NumberInput size="md" variant="outline" placeholder="Enter a number" />,
    )

    const numberInput = page.getByRole("spinbutton")
    await expect.element(numberInput).toBeInTheDocument()
    expect(numberInput.element()).toHaveProperty(
      "placeholder",
      "Enter a number",
    )
  })

  test("should render input with default value", async () => {
    await render(<NumberInput defaultValue={20} max={30} min={5} step={5} />)

    const numberInput = page.getByRole("spinbutton")
    await expect.element(numberInput).toHaveValue("20")
    expect(numberInput.element()).toHaveProperty("step", "5")
    expect(numberInput.element()).toHaveProperty("min", "5")
    expect(numberInput.element()).toHaveProperty("max", "30")
  })

  test("should disable the input", async () => {
    await render(<NumberInput disabled />)

    const numberInput = page.getByRole("spinbutton")
    await expect.element(numberInput).toBeDisabled()
  })

  test("should render input with precision", async () => {
    await render(<NumberInput defaultValue={10} precision={2} step={0.2} />)

    const numberInput = page.getByRole("spinbutton")
    await expect.element(numberInput).toHaveValue("10.00")
  })

  test("should clamp value on blur if value exceeds max value", async () => {
    const { user } = await render(<NumberInput defaultValue={35} max={30} />)

    const numberInput = page.getByRole("spinbutton")
    await expect.element(numberInput).toHaveValue("35")

    await user.click(numberInput)
    numberInput.element().blur()
    await expect.element(numberInput).toHaveValue("30")
  })

  test("should clamp value on blur if value is below min value", async () => {
    const { user } = await render(<NumberInput defaultValue={-5} min={0} />)

    const numberInput = page.getByRole("spinbutton")
    await expect.element(numberInput).toHaveValue("-5")

    await user.click(numberInput)
    numberInput.element().blur()
    await expect.element(numberInput).toHaveValue("0")
  })

  test("should clear value on blur if value starts with E or e", async () => {
    const { user } = await render(<NumberInput />)

    const numberInput = page.getByRole("spinbutton")

    await user.click(numberInput)
    await user.keyboard("e5")
    numberInput.element().blur()

    await expect.element(numberInput).toHaveValue("")
  })

  test("should not clamp value on blur when clampValueOnBlur is false", async () => {
    const { user } = await render(
      <NumberInput clampValueOnBlur={false} keepWithinRange={false} max={10} />,
    )

    const numberInput = page.getByRole("spinbutton")

    await user.click(numberInput)
    await user.keyboard("50")
    numberInput.element().blur()

    await expect.element(numberInput).toHaveValue("50")
  })

  test("should disable keep within range", async () => {
    const { user } = await render(
      <NumberInput defaultValue={15} keepWithinRange={false} max={30} />,
    )

    const numberInput = page.getByRole("spinbutton")

    await user.clear(numberInput)
    await user.keyboard("35")

    await expect.element(numberInput).toHaveValue("35")
  })

  test("should render an invalid input", async () => {
    await render(<NumberInput invalid />)

    const numberInput = page.getByRole("spinbutton")
    await expect.element(numberInput).toHaveAttribute("aria-invalid", "true")
  })

  test("should render a custom stepper input", async () => {
    await render(
      <NumberInput
        decrementProps={{ children: "-", px: "xs" }}
        incrementProps={{ children: "+", px: "xs" }}
      />,
    )

    const plusButton = page.getByText(/\+/i)
    const minusButton = page.getByText(/-/i)
    await expect.element(plusButton).toBeInTheDocument()
    await expect.element(minusButton).toBeInTheDocument()
  })

  test("should correctly reflect value changes with keyboard operations", async () => {
    const { user } = await render(
      <NumberInput defaultValue={10} max={30} min={0} />,
    )

    const numberInput = page.getByRole("spinbutton")
    await expect.element(numberInput).toHaveValue("10")

    await user.tab()

    await user.keyboard("{ArrowUp}")
    await expect.element(numberInput).toHaveValue("11")

    await user.keyboard("{ArrowDown}")
    await expect.element(numberInput).toHaveValue("10")

    await user.keyboard("{Home}")
    await expect.element(numberInput).toHaveValue("0")

    await user.keyboard("{End}")
    await expect.element(numberInput).toHaveValue("30")
  })

  test("should correctly reflect value changes based on step with keyboard operations", async () => {
    const { user } = await render(<NumberInput defaultValue={10} step={5} />)

    const numberInput = page.getByRole("spinbutton")
    await expect.element(numberInput).toHaveValue("10")

    await user.tab()

    await user.keyboard("{ArrowUp}")
    await expect.element(numberInput).toHaveValue("15")

    await user.keyboard("{ArrowDown}")
    await expect.element(numberInput).toHaveValue("10")
  })

  test("should correctly reflect value changes with stepper elements", async () => {
    const { user } = await render(
      <NumberInput defaultValue={10} max={30} min={0} />,
    )

    const numberInput = page.getByRole("spinbutton")
    const incrementStepper = page.getByRole("button", {
      name: "Increase",
    })
    const decrementStepper = page.getByRole("button", {
      name: "Decrease",
    })

    await expect.element(numberInput).toHaveValue("10")

    await user.click(incrementStepper)
    await expect.element(numberInput).toHaveValue("11")

    await user.click(decrementStepper)
    await expect.element(numberInput).toHaveValue("10")
  })

  test("should change value on wheel when focused and allowMouseWheel is true", async () => {
    const { user } = await render(
      <NumberInput allowMouseWheel defaultValue={10} />,
    )

    const numberInput = page.getByRole("spinbutton")
    await expect.element(numberInput).toHaveValue("10")

    await user.tab()

    numberInput
      .element()
      .dispatchEvent(new WheelEvent("wheel", { bubbles: true, deltaY: -100 }))
    await expect.element(numberInput).toHaveValue("11")

    numberInput
      .element()
      .dispatchEvent(new WheelEvent("wheel", { bubbles: true, deltaY: 100 }))
    await expect.element(numberInput).toHaveValue("10")
  })

  test("should prevent invalid character input via keyboard", async () => {
    await render(<NumberInput defaultValue={10} />)

    const numberInput = page.getByRole("spinbutton")

    const preventDefaultSpy = vi.fn()
    const event = new KeyboardEvent("keydown", {
      key: "a",
      bubbles: true,
      cancelable: true,
    })
    Object.defineProperty(event, "preventDefault", { value: preventDefaultSpy })

    numberInput.element().dispatchEvent(event)

    expect(preventDefaultSpy).toHaveBeenCalledWith()
  })

  test("should allow valid numeric characters via keyboard", async () => {
    await render(<NumberInput defaultValue={10} />)

    const numberInput = page.getByRole("spinbutton")

    const preventDefaultSpy = vi.fn()
    const event = new KeyboardEvent("keydown", {
      key: "5",
      bubbles: true,
      cancelable: true,
    })
    Object.defineProperty(event, "preventDefault", { value: preventDefaultSpy })

    numberInput.element().dispatchEvent(event)

    expect(preventDefaultSpy).not.toHaveBeenCalled()
  })

  test("should not change value when disabled and increment/decrement buttons are clicked", async () => {
    await render(<NumberInput defaultValue={10} disabled />)

    const numberInput = page.getByRole("spinbutton")
    await expect.element(numberInput).toHaveValue("10")

    const incrementStepper = page.getByRole("button", { name: "Increase" })
    const decrementStepper = page.getByRole("button", { name: "Decrease" })

    incrementStepper
      .element()
      .dispatchEvent(
        new PointerEvent("pointerdown", { bubbles: true, button: 0 }),
      )
    await expect.element(numberInput).toHaveValue("10")

    decrementStepper
      .element()
      .dispatchEvent(
        new PointerEvent("pointerdown", { bubbles: true, button: 0 }),
      )
    await expect.element(numberInput).toHaveValue("10")
  })

  test("should not change value when readOnly and work with controlled value", async () => {
    const { user } = await render(<NumberInput defaultValue={10} readOnly />)

    const numberInput = page.getByRole("spinbutton")
    await expect.element(numberInput).toHaveValue("10")
    expect(numberInput.element()).toHaveProperty("readOnly", true)

    await user.tab()

    await user.keyboard("{ArrowUp}")
    await expect.element(numberInput).toHaveValue("10")

    await user.keyboard("{ArrowDown}")
    await expect.element(numberInput).toHaveValue("10")
  })

  test("should not focus input on change when focusInputOnChange is false", async () => {
    await render(<NumberInput defaultValue={10} focusInputOnChange={false} />)

    const numberInput = page.getByRole("spinbutton")
    const incrementStepper = page.getByRole("button", { name: "Increase" })

    incrementStepper
      .element()
      .dispatchEvent(
        new PointerEvent("pointerdown", { bubbles: true, button: 0 }),
      )
    incrementStepper
      .element()
      .dispatchEvent(new PointerEvent("pointerup", { bubbles: true }))

    await expect.element(numberInput).toHaveValue("11")
  })

  test("should use custom format and parse functions", async () => {
    await render(
      <NumberInput
        defaultValue={10}
        format={(val) => `$${val}`}
        parse={(val) => val.replace("$", "")}
      />,
    )

    const numberInput = page.getByRole("spinbutton")
    await expect.element(numberInput).toHaveValue("$10")
  })

  test("should use getAriaValueText for aria-valuetext", async () => {
    await render(
      <NumberInput
        defaultValue={10}
        getAriaValueText={(val) => `${val} items`}
      />,
    )

    const numberInput = page.getByRole("spinbutton")
    await expect
      .element(numberInput)
      .toHaveAttribute("aria-valuetext", "10 items")
  })

  test("should use custom isValidCharacter function", async () => {
    await render(
      <NumberInput
        defaultValue={10}
        isValidCharacter={(char) => /^[0-9]$/.test(char)}
      />,
    )

    const numberInput = page.getByRole("spinbutton")

    const preventDefaultSpy = vi.fn()
    const event = new KeyboardEvent("keydown", {
      key: ".",
      bubbles: true,
      cancelable: true,
    })
    Object.defineProperty(event, "preventDefault", { value: preventDefaultSpy })

    numberInput.element().dispatchEvent(event)

    expect(preventDefaultSpy).toHaveBeenCalledWith()
  })

  test("should increment value continuously on long press of increment button", async () => {
    await render(<NumberInput defaultValue={10} />)

    const numberInput = page.getByRole("spinbutton")
    const incrementStepper = page.getByRole("button", { name: "Increase" })

    await expect.element(numberInput).toHaveValue("10")

    incrementStepper
      .element()
      .dispatchEvent(
        new PointerEvent("pointerdown", { bubbles: true, button: 0 }),
      )

    await expect.element(numberInput).toHaveValue("11")

    await expect
      .poll(() => {
        const value = parseInt(
          numberInput.element().getAttribute("value") || "0",
          10,
        )

        return value
      })
      .toBeGreaterThan(11)

    incrementStepper
      .element()
      .dispatchEvent(new PointerEvent("pointerup", { bubbles: true }))
  })

  test("should decrement value continuously on long press of decrement button", async () => {
    await render(<NumberInput defaultValue={10} />)

    const numberInput = page.getByRole("spinbutton")
    const decrementStepper = page.getByRole("button", { name: "Decrease" })

    await expect.element(numberInput).toHaveValue("10")

    decrementStepper
      .element()
      .dispatchEvent(
        new PointerEvent("pointerdown", { bubbles: true, button: 0 }),
      )

    await expect.element(numberInput).toHaveValue("9")

    await expect
      .poll(() => {
        const value = parseInt(
          numberInput.element().getAttribute("value") || "0",
          10,
        )

        return value
      })
      .toBeLessThan(9)

    decrementStepper
      .element()
      .dispatchEvent(new PointerEvent("pointerup", { bubbles: true }))
  })

  test("should stop spinning on pointer leave", async () => {
    await render(<NumberInput defaultValue={10} />)

    const numberInput = page.getByRole("spinbutton")
    const incrementStepper = page.getByRole("button", { name: "Increase" })

    incrementStepper
      .element()
      .dispatchEvent(
        new PointerEvent("pointerdown", { bubbles: true, button: 0 }),
      )

    await expect.element(numberInput).toHaveValue("11")

    await expect
      .poll(() => {
        const value = parseInt(
          numberInput.element().getAttribute("value") || "0",
          10,
        )

        return value
      })
      .toBeGreaterThan(11)

    const valueAfterLeave = numberInput.element().getAttribute("value")

    incrementStepper
      .element()
      .dispatchEvent(new PointerEvent("pointerleave", { bubbles: true }))

    await expect.element(numberInput).toHaveValue(valueAfterLeave)
  })

  test("should not change value on wheel when input is not focused", async () => {
    await render(<NumberInput allowMouseWheel defaultValue={10} />)

    const numberInput = page.getByRole("spinbutton")
    await expect.element(numberInput).toHaveValue("10")

    numberInput
      .element()
      .dispatchEvent(new WheelEvent("wheel", { bubbles: true, deltaY: -100 }))
    await expect.element(numberInput).toHaveValue("10")
  })

  test("should not change value on wheel when allowMouseWheel is false", async () => {
    await render(<NumberInput defaultValue={10} />)

    const numberInput = page.getByRole("spinbutton")
    await expect.element(numberInput).toHaveValue("10")

    numberInput.element().focus()

    numberInput
      .element()
      .dispatchEvent(new WheelEvent("wheel", { bubbles: true, deltaY: -100 }))
    await expect.element(numberInput).toHaveValue("10")
  })

  test("should apply step ratio with shift key on wheel", async () => {
    await render(<NumberInput allowMouseWheel defaultValue={10} />)

    const numberInput = page.getByRole("spinbutton")

    numberInput.element().focus()

    numberInput.element().dispatchEvent(
      new WheelEvent("wheel", {
        bubbles: true,
        deltaY: -100,
        shiftKey: true,
      }),
    )
    await expect.element(numberInput).toHaveValue("20")
  })

  test("should apply step ratio with shift key on keyboard", async () => {
    await render(<NumberInput defaultValue={10} step={1} />)

    const numberInput = page.getByRole("spinbutton")

    numberInput.element().focus()

    numberInput.element().dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "ArrowUp",
        bubbles: true,
        shiftKey: true,
      }),
    )
    await expect.element(numberInput).toHaveValue("20")
  })

  test("should not prevent keydown when modifier keys are pressed", async () => {
    await render(<NumberInput defaultValue={10} />)

    const numberInput = page.getByRole("spinbutton")

    const preventDefaultSpy = vi.fn()
    const event = new KeyboardEvent("keydown", {
      key: "a",
      bubbles: true,
      cancelable: true,
      ctrlKey: true,
    })
    Object.defineProperty(event, "preventDefault", { value: preventDefaultSpy })

    numberInput.element().dispatchEvent(event)

    expect(preventDefaultSpy).not.toHaveBeenCalled()
  })

  test("should handle controlled value changes", async () => {
    const onChange = vi.fn()
    const { rerender } = await render(
      <NumberInput value={10} onChange={onChange} />,
    )

    const numberInput = page.getByRole("spinbutton")
    await expect.element(numberInput).toHaveValue("10")

    await rerender(<NumberInput value={20} onChange={onChange} />)
    await expect.element(numberInput).toHaveValue("20")
  })

  test("should combine multiple props and render all custom props correctly", async () => {
    await render(
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

    const numberInput = page.getByRole("spinbutton")
    await expect.element(numberInput).toHaveValue("15")
    expect(numberInput.element()).toHaveProperty("step", "5")
    expect(numberInput.element()).toHaveProperty("min", "0")
    expect(numberInput.element()).toHaveProperty("max", "100")
    await expect
      .element(numberInput)
      .toHaveAttribute("aria-label", "Custom label")
    await expect
      .element(numberInput)
      .toHaveAttribute("aria-describedby", "helper-text")
    await expect.element(page.getByTestId("root")).toBeInTheDocument()
    await expect.element(page.getByTestId("element")).toBeInTheDocument()
    await expect.element(page.getByTestId("control")).toBeInTheDocument()
    await expect.element(page.getByTestId("increment")).toBeInTheDocument()
    await expect.element(page.getByTestId("decrement")).toBeInTheDocument()
  })
})
