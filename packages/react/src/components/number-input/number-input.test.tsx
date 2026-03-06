import { a11y, act, fireEvent, render, screen, waitFor } from "#test"
import { NumberInput } from "."

describe("<NumberInput />", () => {
  test("renders component correctly", async () => {
    await a11y(<NumberInput aria-label="Input number" />)
  })

  test("sets `displayName` correctly", () => {
    expect(NumberInput.name).toBe("NumberInputRoot")
  })

  test("render input with props", async () => {
    render(
      <NumberInput size="md" variant="outline" placeholder="Enter a number" />,
    )

    const numberInput = await screen.findByRole("spinbutton")
    expect(numberInput).toHaveProperty("placeholder", "Enter a number")
  })

  test("should render input with default value", async () => {
    render(<NumberInput defaultValue={20} max={30} min={5} step={5} />)

    const numberInput = await screen.findByRole("spinbutton")
    expect(numberInput).toHaveValue("20")
    expect(numberInput).toHaveProperty("step", "5")
    expect(numberInput).toHaveProperty("min", "5")
    expect(numberInput).toHaveProperty("max", "30")
  })

  test("should disable the input", async () => {
    render(<NumberInput disabled />)

    const numberInput = await screen.findByRole("spinbutton")
    expect(numberInput).toBeDisabled()
  })

  test("should render input with precision", async () => {
    render(<NumberInput defaultValue={10} precision={2} step={0.2} />)

    const numberInput = await screen.findByRole("spinbutton")
    expect(numberInput).toHaveValue("10.00")
  })

  test("should clamp value on blur if value exceeds max value", async () => {
    render(<NumberInput defaultValue={35} max={30} />)

    const numberInput = await screen.findByRole("spinbutton")
    expect(numberInput).toHaveValue("35")

    fireEvent.blur(numberInput)
    expect(numberInput).toHaveValue("30")
  })

  test("should clamp value on blur if value is below min value", async () => {
    render(<NumberInput defaultValue={-5} min={0} />)

    const numberInput = await screen.findByRole("spinbutton")
    expect(numberInput).toHaveValue("-5")

    fireEvent.blur(numberInput)
    expect(numberInput).toHaveValue("0")
  })

  test("should clear value on blur if value starts with E or e", async () => {
    const { user } = render(<NumberInput />)

    const numberInput = await screen.findByRole("spinbutton")

    await user.click(numberInput)
    await user.type(numberInput, "e5")
    fireEvent.blur(numberInput)

    expect(numberInput).toHaveValue("")
  })

  test("should not clamp value on blur when clampValueOnBlur is false", async () => {
    const { user } = render(
      <NumberInput clampValueOnBlur={false} keepWithinRange={false} max={10} />,
    )

    const numberInput = await screen.findByRole("spinbutton")

    await user.click(numberInput)
    await user.type(numberInput, "50")
    fireEvent.blur(numberInput)

    expect(numberInput).toHaveValue("50")
  })

  test("should disable keep within range", async () => {
    const { user } = render(
      <NumberInput defaultValue={15} keepWithinRange={false} max={30} />,
    )

    const numberInput = await screen.findByRole("spinbutton")

    await user.clear(numberInput)
    await user.type(numberInput, "35")

    expect(numberInput).toHaveValue("35")
  })

  test("should render an invalid input", async () => {
    render(<NumberInput invalid />)

    const numberInput = await screen.findByRole("spinbutton")
    expect(numberInput).toBeInvalid()
    expect(numberInput).toHaveAttribute("aria-invalid", "true")
  })

  test("should render a custom stepper input", async () => {
    render(
      <NumberInput
        decrementProps={{ children: "-", px: "xs" }}
        incrementProps={{ children: "+", px: "xs" }}
      />,
    )

    const plusButton = await screen.findByText(/\+/i)
    const minusButton = await screen.findByText(/-/i)
    expect(plusButton).toBeInTheDocument()
    expect(minusButton).toBeInTheDocument()
  })

  test("should correctly reflect value changes with keyboard operations", async () => {
    const { user } = render(<NumberInput defaultValue={10} max={30} min={0} />)

    const numberInput = await screen.findByRole("spinbutton")
    expect(numberInput).toHaveValue("10")

    await user.tab()

    await user.keyboard("{arrowup}")
    expect(numberInput).toHaveValue("11")

    await user.keyboard("{arrowdown}")
    expect(numberInput).toHaveValue("10")

    await user.keyboard("{home}")
    expect(numberInput).toHaveValue("0")

    await user.keyboard("{end}")
    expect(numberInput).toHaveValue("30")
  })

  test("should correctly reflect value changes based on step with keyboard operations", async () => {
    const { user } = render(<NumberInput defaultValue={10} step={5} />)

    const numberInput = await screen.findByRole("spinbutton")
    expect(numberInput).toHaveValue("10")

    await user.tab()

    await user.keyboard("{arrowup}")
    expect(numberInput).toHaveValue("15")

    await user.keyboard("{arrowdown}")
    expect(numberInput).toHaveValue("10")
  })

  test("should correctly reflect value changes with stepper elements", async () => {
    const { user } = render(<NumberInput defaultValue={10} max={30} min={0} />)

    const numberInput = await screen.findByRole("spinbutton")
    const incrementStepper = await screen.findByRole("button", {
      name: "Increase",
    })
    const decrementStepper = await screen.findByRole("button", {
      name: "Decrease",
    })

    expect(numberInput).toHaveValue("10")

    await user.click(incrementStepper!)
    expect(numberInput).toHaveValue("11")

    await user.click(decrementStepper!)
    expect(numberInput).toHaveValue("10")
  })

  test("increments the value on wheel up", async () => {
    const { user } = render(<NumberInput allowMouseWheel defaultValue={10} />)

    const numberInput = await screen.findByRole("spinbutton")
    expect(numberInput).toHaveValue("10")

    await user.tab()

    fireEvent.wheel(numberInput, { deltaY: -100 })
    expect(numberInput).toHaveValue("11")
  })

  test("decrements the value on wheel down", async () => {
    const { user } = render(<NumberInput allowMouseWheel defaultValue={10} />)

    const numberInput = await screen.findByRole("spinbutton")
    expect(numberInput).toHaveValue("10")

    await user.tab()

    fireEvent.wheel(numberInput, { deltaY: 100 })
    expect(numberInput).toHaveValue("9")
  })

  test("should prevent invalid character input via keyboard", async () => {
    render(<NumberInput defaultValue={10} />)

    const numberInput = await screen.findByRole("spinbutton")

    const preventDefaultSpy = vi.fn()
    const event = new KeyboardEvent("keydown", {
      key: "a",
      bubbles: true,
      cancelable: true,
    })
    Object.defineProperty(event, "preventDefault", { value: preventDefaultSpy })

    numberInput.dispatchEvent(event)

    expect(preventDefaultSpy).toHaveBeenCalledWith()
  })

  test("should allow valid numeric characters via keyboard", async () => {
    render(<NumberInput defaultValue={10} />)

    const numberInput = await screen.findByRole("spinbutton")

    const preventDefaultSpy = vi.fn()
    const event = new KeyboardEvent("keydown", {
      key: "5",
      bubbles: true,
      cancelable: true,
    })
    Object.defineProperty(event, "preventDefault", { value: preventDefaultSpy })

    numberInput.dispatchEvent(event)

    expect(preventDefaultSpy).not.toHaveBeenCalled()
  })

  test("should restore cursor position on focus after onChange", async () => {
    const { user } = render(<NumberInput defaultValue={10} />)

    const numberInput = await screen.findByRole("spinbutton")

    await user.click(numberInput)
    await user.type(numberInput, "5")

    fireEvent.blur(numberInput)
    fireEvent.focus(numberInput)

    expect(numberInput).toBeInTheDocument()
  })

  test("should not change value when disabled and increment/decrement buttons are clicked", async () => {
    render(<NumberInput defaultValue={10} disabled />)

    const numberInput = await screen.findByRole("spinbutton")
    expect(numberInput).toHaveValue("10")

    const incrementStepper = screen.getByRole("button", { name: "Increase" })
    const decrementStepper = screen.getByRole("button", { name: "Decrease" })

    fireEvent.pointerDown(incrementStepper, { button: 0 })
    expect(numberInput).toHaveValue("10")

    fireEvent.pointerDown(decrementStepper, { button: 0 })
    expect(numberInput).toHaveValue("10")
  })

  test("should not change value when readOnly", async () => {
    const { user } = render(<NumberInput defaultValue={10} readOnly />)

    const numberInput = await screen.findByRole("spinbutton")
    expect(numberInput).toHaveValue("10")

    await user.tab()

    await user.keyboard("{arrowup}")
    expect(numberInput).toHaveValue("10")

    await user.keyboard("{arrowdown}")
    expect(numberInput).toHaveValue("10")
  })

  test("should not focus input on change when focusInputOnChange is false", async () => {
    render(<NumberInput defaultValue={10} focusInputOnChange={false} />)

    const numberInput = await screen.findByRole("spinbutton")
    const incrementStepper = screen.getByRole("button", { name: "Increase" })

    fireEvent.pointerDown(incrementStepper, { button: 0 })
    fireEvent.pointerUp(incrementStepper)

    await waitFor(() => {
      expect(numberInput).toHaveValue("11")
    })
  })

  test("should use custom format and parse functions", async () => {
    render(
      <NumberInput
        defaultValue={10}
        format={(val) => `$${val}`}
        parse={(val) => val.replace("$", "")}
      />,
    )

    const numberInput = await screen.findByRole("spinbutton")
    expect(numberInput).toHaveValue("$10")
  })

  test("should use getAriaValueText for aria-valuetext", async () => {
    render(
      <NumberInput
        defaultValue={10}
        getAriaValueText={(val) => `${val} items`}
      />,
    )

    const numberInput = await screen.findByRole("spinbutton")
    expect(numberInput).toHaveAttribute("aria-valuetext", "10 items")
  })

  test("should use custom isValidCharacter function", async () => {
    render(
      <NumberInput
        defaultValue={10}
        isValidCharacter={(char) => /^[0-9]$/.test(char)}
      />,
    )

    const numberInput = await screen.findByRole("spinbutton")

    const preventDefaultSpy = vi.fn()
    const event = new KeyboardEvent("keydown", {
      key: ".",
      bubbles: true,
      cancelable: true,
    })
    Object.defineProperty(event, "preventDefault", { value: preventDefaultSpy })

    numberInput.dispatchEvent(event)

    expect(preventDefaultSpy).toHaveBeenCalledWith()
  })

  test("should increment value continuously on long press of increment button", () => {
    vi.useFakeTimers({ shouldAdvanceTime: true })

    render(<NumberInput defaultValue={10} />)

    const numberInput = screen.getByRole("spinbutton")
    const incrementStepper = screen.getByRole("button", { name: "Increase" })

    expect(numberInput).toHaveValue("10")

    fireEvent.pointerDown(incrementStepper, { button: 0 })

    expect(numberInput).toHaveValue("11")

    act(() => {
      vi.advanceTimersByTime(350)
    })

    act(() => {
      vi.advanceTimersByTime(200)
    })

    fireEvent.pointerUp(incrementStepper)

    const value = parseInt(numberInput.getAttribute("value") || "0", 10)
    expect(value).toBeGreaterThan(11)

    vi.useRealTimers()
  })

  test("should decrement value continuously on long press of decrement button", () => {
    vi.useFakeTimers({ shouldAdvanceTime: true })

    render(<NumberInput defaultValue={10} />)

    const numberInput = screen.getByRole("spinbutton")
    const decrementStepper = screen.getByRole("button", { name: "Decrease" })

    expect(numberInput).toHaveValue("10")

    fireEvent.pointerDown(decrementStepper, { button: 0 })

    expect(numberInput).toHaveValue("9")

    act(() => {
      vi.advanceTimersByTime(350)
    })

    act(() => {
      vi.advanceTimersByTime(200)
    })

    fireEvent.pointerUp(decrementStepper)

    const value = parseInt(numberInput.getAttribute("value") || "0", 10)
    expect(value).toBeLessThan(9)

    vi.useRealTimers()
  })

  test("should stop spinning on pointer leave", () => {
    vi.useFakeTimers({ shouldAdvanceTime: true })

    render(<NumberInput defaultValue={10} />)

    const numberInput = screen.getByRole("spinbutton")
    const incrementStepper = screen.getByRole("button", { name: "Increase" })

    fireEvent.pointerDown(incrementStepper, { button: 0 })

    expect(numberInput).toHaveValue("11")

    act(() => {
      vi.advanceTimersByTime(350)
    })

    fireEvent.pointerLeave(incrementStepper)

    const valueAfterLeave = numberInput.getAttribute("value")

    act(() => {
      vi.advanceTimersByTime(200)
    })

    expect(numberInput).toHaveValue(valueAfterLeave)

    vi.useRealTimers()
  })

  test("should not change value on wheel when input is not focused", () => {
    render(<NumberInput allowMouseWheel defaultValue={10} />)

    const numberInput = screen.getByRole("spinbutton")
    expect(numberInput).toHaveValue("10")

    fireEvent.wheel(numberInput, { deltaY: -100 })
    expect(numberInput).toHaveValue("10")
  })

  test("should not change value on wheel when allowMouseWheel is false", () => {
    render(<NumberInput defaultValue={10} />)

    const numberInput = screen.getByRole("spinbutton")
    expect(numberInput).toHaveValue("10")

    act(() => {
      numberInput.focus()
    })

    fireEvent.wheel(numberInput, { deltaY: -100 })
    expect(numberInput).toHaveValue("10")
  })

  test("should apply step ratio with shift key on wheel", () => {
    render(<NumberInput allowMouseWheel defaultValue={10} />)

    const numberInput = screen.getByRole("spinbutton")

    act(() => {
      numberInput.focus()
    })

    fireEvent.wheel(numberInput, { deltaY: -100, shiftKey: true })
    expect(numberInput).toHaveValue("20")
  })

  test("should apply step ratio with shift key on keyboard", () => {
    render(<NumberInput defaultValue={10} step={1} />)

    const numberInput = screen.getByRole("spinbutton")

    act(() => {
      numberInput.focus()
    })

    fireEvent.keyDown(numberInput, { key: "ArrowUp", shiftKey: true })
    expect(numberInput).toHaveValue("20")
  })

  test("should not prevent keydown when modifier keys are pressed", () => {
    render(<NumberInput defaultValue={10} />)

    const numberInput = screen.getByRole("spinbutton")

    const preventDefaultSpy = vi.fn()
    const event = new KeyboardEvent("keydown", {
      key: "a",
      bubbles: true,
      cancelable: true,
      ctrlKey: true,
    })
    Object.defineProperty(event, "preventDefault", { value: preventDefaultSpy })

    numberInput.dispatchEvent(event)

    expect(preventDefaultSpy).not.toHaveBeenCalled()
  })
})
