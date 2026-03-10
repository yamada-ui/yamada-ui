import { a11y, act, fireEvent, render, screen, waitFor } from "#test"
import { NumberInput } from "."

describe("<NumberInput />", () => {
  test("renders component correctly", async () => {
    await a11y(<NumberInput aria-label="Input number" />)
  })

  test("sets `displayName` correctly", () => {
    expect(NumberInput.displayName).toBe("NumberInputRoot")
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

  test("should change value on wheel when focused and allowMouseWheel is true", async () => {
    const { user } = render(<NumberInput allowMouseWheel defaultValue={10} />)

    const numberInput = await screen.findByRole("spinbutton")
    expect(numberInput).toHaveValue("10")

    await user.tab()

    fireEvent.wheel(numberInput, { deltaY: -100 })
    expect(numberInput).toHaveValue("11")

    fireEvent.wheel(numberInput, { deltaY: 100 })
    expect(numberInput).toHaveValue("10")
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

  test("should not change value when readOnly and work with controlled value", async () => {
    const { user } = render(<NumberInput defaultValue={10} readOnly />)

    const numberInput = await screen.findByRole("spinbutton")
    expect(numberInput).toHaveValue("10")
    expect(numberInput).toHaveProperty("readOnly", true)

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

  test("should handle controlled value changes", async () => {
    const onChange = vi.fn()
    const { rerender } = render(<NumberInput value={10} onChange={onChange} />)

    const numberInput = await screen.findByRole("spinbutton")
    expect(numberInput).toHaveValue("10")

    rerender(<NumberInput value={20} onChange={onChange} />)
    expect(numberInput).toHaveValue("20")
  })

  test("should combine multiple props and render all custom props correctly", async () => {
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

    const numberInput = await screen.findByRole("spinbutton")
    expect(numberInput).toHaveValue("15")
    expect(numberInput).toHaveProperty("step", "5")
    expect(numberInput).toHaveProperty("min", "0")
    expect(numberInput).toHaveProperty("max", "100")
    expect(numberInput).toHaveAttribute("aria-label", "Custom label")
    expect(numberInput).toHaveAttribute("aria-describedby", "helper-text")
    expect(screen.getByTestId("root")).toBeInTheDocument()
    expect(screen.getByTestId("element")).toBeInTheDocument()
    expect(screen.getByTestId("control")).toBeInTheDocument()
    expect(screen.getByTestId("increment")).toBeInTheDocument()
    expect(screen.getByTestId("decrement")).toBeInTheDocument()
  })

  test("should not increment beyond max when at max boundary with stepper", async () => {
    const { user } = render(
      <NumberInput defaultValue={30} max={30} min={0} keepWithinRange />,
    )

    const numberInput = await screen.findByRole("spinbutton")
    const incrementStepper = screen.getByRole("button", { name: "Increase" })

    expect(numberInput).toHaveValue("30")
    expect(incrementStepper).toBeDisabled()

    await user.click(incrementStepper)
    expect(numberInput).toHaveValue("30")
  })

  test("should not decrement below min when at min boundary with stepper", async () => {
    const { user } = render(
      <NumberInput defaultValue={0} max={30} min={0} keepWithinRange />,
    )

    const numberInput = await screen.findByRole("spinbutton")
    const decrementStepper = screen.getByRole("button", { name: "Decrease" })

    expect(numberInput).toHaveValue("0")
    expect(decrementStepper).toBeDisabled()

    await user.click(decrementStepper)
    expect(numberInput).toHaveValue("0")
  })

  test("should apply ctrl key step ratio for finer increments", async () => {
    render(<NumberInput defaultValue={10} step={1} precision={1} />)

    const numberInput = screen.getByRole("spinbutton")
    act(() => {
      numberInput.focus()
    })

    fireEvent.keyDown(numberInput, { key: "ArrowUp", ctrlKey: true })
    expect(numberInput).toHaveValue("10.1")
  })

  test("should apply meta key step ratio for finer increments", async () => {
    render(<NumberInput defaultValue={10} step={1} precision={1} />)

    const numberInput = screen.getByRole("spinbutton")
    act(() => {
      numberInput.focus()
    })

    fireEvent.keyDown(numberInput, { key: "ArrowUp", metaKey: true })
    expect(numberInput).toHaveValue("10.1")
  })

  test("should apply ctrl key step ratio for finer decrements", async () => {
    render(<NumberInput defaultValue={10} step={1} precision={1} />)

    const numberInput = screen.getByRole("spinbutton")
    act(() => {
      numberInput.focus()
    })

    fireEvent.keyDown(numberInput, { key: "ArrowDown", ctrlKey: true })
    expect(numberInput).toHaveValue("9.9")
  })

  test("should handle format and parse with programmatic input", async () => {
    render(
      <NumberInput
        defaultValue={12.5}
        format={(val) => `$${Number(val).toFixed(2)}`}
        parse={(val) => val.replace(/[$,]/g, "")}
      />,
    )

    const numberInput = await screen.findByRole("spinbutton")
    expect(numberInput).toHaveValue("$12.50")

    fireEvent.change(numberInput, { target: { value: "25.99" } })
    fireEvent.blur(numberInput)
    expect(numberInput).toHaveValue("$25.99")
  })

  test("should call onChange when value changes", async () => {
    const onChange = vi.fn()
    const { user } = render(
      <NumberInput defaultValue={10} onChange={onChange} />,
    )

    const numberInput = await screen.findByRole("spinbutton")
    await user.clear(numberInput)
    await user.type(numberInput, "25")

    expect(onChange).toHaveBeenCalled()
  })

  test("should not update on blur when value is empty", async () => {
    const { user } = render(<NumberInput />)

    const numberInput = await screen.findByRole("spinbutton")
    await user.click(numberInput)
    fireEvent.blur(numberInput)

    expect(numberInput).toHaveValue("")
  })

  test("should restore selection on focus after change", async () => {
    const { user } = render(<NumberInput defaultValue={123} />)

    const numberInput = await screen.findByRole("spinbutton")
    await user.click(numberInput)
    await user.type(numberInput, "4")
    fireEvent.blur(numberInput)
    await user.click(numberInput)

    expect(numberInput).toHaveValue("1234")
  })

  test("should handle stepper with non-zero button (right click)", async () => {
    render(<NumberInput defaultValue={10} />)

    const numberInput = screen.getByRole("spinbutton")
    const incrementStepper = screen.getByRole("button", { name: "Increase" })

    fireEvent.pointerDown(incrementStepper, { button: 1 })
    expect(numberInput).toHaveValue("10")
  })

  test("should clamp value when both min and max are exceeded on blur", async () => {
    render(<NumberInput defaultValue={100} min={0} max={50} />)

    const numberInput = await screen.findByRole("spinbutton")
    expect(numberInput).toHaveValue("100")

    fireEvent.blur(numberInput)
    expect(numberInput).toHaveValue("50")
  })

  test("should handle value at exact min on blur", async () => {
    render(<NumberInput defaultValue={0} min={0} max={100} />)

    const numberInput = await screen.findByRole("spinbutton")
    fireEvent.blur(numberInput)
    expect(numberInput).toHaveValue("0")
  })

  test("should handle value at exact max on blur", async () => {
    render(<NumberInput defaultValue={100} min={0} max={100} />)

    const numberInput = await screen.findByRole("spinbutton")
    fireEvent.blur(numberInput)
    expect(numberInput).toHaveValue("100")
  })

  test("should handle decimal step increments", async () => {
    const { user } = render(
      <NumberInput defaultValue={1} step={0.1} precision={1} />,
    )

    const numberInput = await screen.findByRole("spinbutton")
    await user.tab()

    await user.keyboard("{arrowup}")
    expect(numberInput).toHaveValue("1.1")

    await user.keyboard("{arrowup}")
    expect(numberInput).toHaveValue("1.2")

    await user.keyboard("{arrowdown}")
    expect(numberInput).toHaveValue("1.1")
  })

  test("should handle invalid input and clamp on blur", async () => {
    const { user } = render(<NumberInput min={0} max={100} />)

    const numberInput = await screen.findByRole("spinbutton")
    await user.click(numberInput)
    await user.type(numberInput, "abc")
    fireEvent.blur(numberInput)

    expect(numberInput).toHaveValue("")
  })

  test("should allow plus and minus in isValidCharacter", async () => {
    render(<NumberInput defaultValue={10} />)

    const numberInput = screen.getByRole("spinbutton")

    const preventDefaultSpy = vi.fn()
    const plusEvent = new KeyboardEvent("keydown", {
      key: "+",
      bubbles: true,
      cancelable: true,
    })
    Object.defineProperty(plusEvent, "preventDefault", {
      value: preventDefaultSpy,
    })
    numberInput.dispatchEvent(plusEvent)
    expect(preventDefaultSpy).not.toHaveBeenCalled()

    const minusEvent = new KeyboardEvent("keydown", {
      key: "-",
      bubbles: true,
      cancelable: true,
    })
    Object.defineProperty(minusEvent, "preventDefault", {
      value: vi.fn(),
    })
    numberInput.dispatchEvent(minusEvent)
  })

  test("should allow period in isValidCharacter", async () => {
    render(<NumberInput defaultValue={10} />)

    const numberInput = screen.getByRole("spinbutton")

    const preventDefaultSpy = vi.fn()
    const event = new KeyboardEvent("keydown", {
      key: ".",
      bubbles: true,
      cancelable: true,
    })
    Object.defineProperty(event, "preventDefault", { value: preventDefaultSpy })

    numberInput.dispatchEvent(event)
    expect(preventDefaultSpy).not.toHaveBeenCalled()
  })

  test("should not change value when readonly and stepper is clicked", async () => {
    render(<NumberInput defaultValue={10} readOnly />)

    const numberInput = screen.getByRole("spinbutton")
    const incrementStepper = screen.getByRole("button", { name: "Increase" })
    const decrementStepper = screen.getByRole("button", { name: "Decrease" })

    fireEvent.pointerDown(incrementStepper, { button: 0 })
    expect(numberInput).toHaveValue("10")

    fireEvent.pointerDown(decrementStepper, { button: 0 })
    expect(numberInput).toHaveValue("10")
  })

  test("should render with custom increment and decrement button children", async () => {
    render(
      <NumberInput
        incrementProps={{ children: "▲" }}
        decrementProps={{ children: "▼" }}
      />,
    )

    expect(screen.getByText("▲")).toBeInTheDocument()
    expect(screen.getByText("▼")).toBeInTheDocument()
  })
})
