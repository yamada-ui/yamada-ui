import { page, render } from "#test/browser"
import { NumberInput } from "."

describe("<NumberInput />", () => {
  test("clamps value on blur if value exceeds max value", async () => {
    const { user } = await render(<NumberInput defaultValue={35} max={30} />)

    const numberInput = page.getByRole("spinbutton")
    await expect.element(numberInput).toHaveValue("35")

    await user.click(numberInput)
    numberInput.element().blur()

    await expect.element(numberInput).toHaveValue("30")
  })

  test("clamps value on blur if value is below min value", async () => {
    const { user } = await render(<NumberInput defaultValue={-5} min={0} />)

    const numberInput = page.getByRole("spinbutton")
    await expect.element(numberInput).toHaveValue("-5")

    await user.click(numberInput)
    numberInput.element().blur()

    await expect.element(numberInput).toHaveValue("0")
  })

  test("clears value on blur if value starts with E or e", async () => {
    const { user } = await render(<NumberInput />)

    const numberInput = page.getByRole("spinbutton")

    await user.type(numberInput, "e5")
    numberInput.element().blur()

    await expect.element(numberInput).toHaveValue("")
  })

  test("does not clamp value on blur when clampValueOnBlur is false", async () => {
    const { user } = await render(
      <NumberInput clampValueOnBlur={false} keepWithinRange={false} max={10} />,
    )

    const numberInput = page.getByRole("spinbutton")

    await user.type(numberInput, "50")
    numberInput.element().blur()

    await expect.element(numberInput).toHaveValue("50")
  })

  test("disables keep within range", async () => {
    const { user } = await render(
      <NumberInput defaultValue={15} keepWithinRange={false} max={30} />,
    )

    const numberInput = page.getByRole("spinbutton")

    await user.clear(numberInput)
    await user.type(numberInput, "35")

    await expect.element(numberInput).toHaveValue("35")
  })

  test("reflects value changes with keyboard operations", async () => {
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

  test("reflects value changes based on step with keyboard operations", async () => {
    const { user } = await render(<NumberInput defaultValue={10} step={5} />)

    const numberInput = page.getByRole("spinbutton")
    await expect.element(numberInput).toHaveValue("10")

    await user.tab()

    await user.keyboard("{ArrowUp}")
    await expect.element(numberInput).toHaveValue("15")

    await user.keyboard("{ArrowDown}")
    await expect.element(numberInput).toHaveValue("10")
  })

  test("reflects value changes with stepper elements", async () => {
    const { user } = await render(
      <NumberInput defaultValue={10} max={30} min={0} />,
    )

    const numberInput = page.getByRole("spinbutton")
    const incrementStepper = page.getByRole("button", { name: "Increase" })
    const decrementStepper = page.getByRole("button", { name: "Decrease" })

    await expect.element(numberInput).toHaveValue("10")

    await user.click(incrementStepper)
    await expect.element(numberInput).toHaveValue("11")

    await user.click(decrementStepper)
    await expect.element(numberInput).toHaveValue("10")
  })

  test("changes value on wheel when focused and allowMouseWheel is true", async () => {
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

  test("prevents invalid character input via keyboard", async () => {
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

  test("allows valid numeric characters via keyboard", async () => {
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

  test("does not change value when disabled and increment/decrement buttons are clicked", async () => {
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

  test("does not change value when readOnly and works with controlled value", async () => {
    const { user } = await render(<NumberInput defaultValue={10} readOnly />)

    const numberInput = page.getByRole("spinbutton")
    await expect.element(numberInput).toHaveValue("10")
    await expect.element(numberInput).toHaveProperty("readOnly", true)

    await user.tab()

    await user.keyboard("{ArrowUp}")
    await expect.element(numberInput).toHaveValue("10")

    await user.keyboard("{ArrowDown}")
    await expect.element(numberInput).toHaveValue("10")
  })

  test("does not focus input on change when focusInputOnChange is false", async () => {
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

  test("uses custom isValidCharacter function", async () => {
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

  test("increments value continuously on long press of increment button", async () => {
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

  test("decrements value continuously on long press of decrement button", async () => {
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

  test("stops spinning on pointer leave", async () => {
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

  test("does not change value on wheel when input is not focused", async () => {
    await render(<NumberInput allowMouseWheel defaultValue={10} />)

    const numberInput = page.getByRole("spinbutton")
    await expect.element(numberInput).toHaveValue("10")

    numberInput
      .element()
      .dispatchEvent(new WheelEvent("wheel", { bubbles: true, deltaY: -100 }))
    await expect.element(numberInput).toHaveValue("10")
  })

  test("does not change value on wheel when allowMouseWheel is false", async () => {
    await render(<NumberInput defaultValue={10} />)

    const numberInput = page.getByRole("spinbutton")
    await expect.element(numberInput).toHaveValue("10")

    numberInput.element().focus()

    numberInput
      .element()
      .dispatchEvent(new WheelEvent("wheel", { bubbles: true, deltaY: -100 }))
    await expect.element(numberInput).toHaveValue("10")
  })

  test("applies step ratio with shift key on wheel", async () => {
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

  test("applies step ratio with shift key on keyboard", async () => {
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

  test("does not prevent keydown when modifier keys are pressed", async () => {
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
})
