import { a11y, fireEvent, render, screen } from "#test"
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
})
