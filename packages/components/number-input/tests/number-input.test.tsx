import { a11y, render, screen, fireEvent, act } from "@yamada-ui/test"
import { NumberInput } from "../src"

describe("<NumberInput />", () => {
  test("NumberInput renders correctly", async () => {
    const { container } = render(<NumberInput aria-label="Input number" />)
    await a11y(container)
  })

  test("render input with props", () => {
    render(
      <>
        <NumberInput
          data-testid="NumberInput"
          placeholder="Enter a number"
          size="md"
          variant="outline"
        />
      </>,
    )
    expect(screen.getByTestId("NumberInput")).toHaveProperty(
      "placeholder",
      "Enter a number",
    )
  })

  test("should render input with default value", () => {
    render(
      <NumberInput
        data-testid="NumberInput"
        aria-label="Input number"
        defaultValue={20}
        step={5}
        min={5}
        max={30}
      />,
    )
    const input = screen.getByTestId("NumberInput")
    expect(input).toHaveValue("20")
    expect(input).toHaveProperty("step", "5")
    expect(input).toHaveProperty("min", "5")
    expect(input).toHaveProperty("max", "30")
  })

  test("should disable the input", () => {
    render(
      <NumberInput
        data-testid="NumberInput"
        aria-label="Input number"
        disabled
      />,
    )
    expect(screen.getByTestId("NumberInput")).toHaveProperty("disabled", true)
  })

  test("should render input with precision", () => {
    render(
      <NumberInput
        data-testid="NumberInput"
        defaultValue={10}
        precision={2}
        step={0.2}
      />,
    )
    expect(screen.getByTestId("NumberInput")).toHaveValue("10.00")
  })

  test("should clamp value on blur if value exceeds max value", () => {
    render(<NumberInput data-testid="NumberInput" defaultValue={35} max={30} />)
    expect(screen.getByTestId("NumberInput")).toHaveValue("35")
    fireEvent.blur(screen.getByTestId("NumberInput"))
    expect(screen.getByTestId("NumberInput")).toHaveValue("30")
  })

  test("should disable keep within range", () => {
    render(
      <NumberInput
        data-testid="NumberInput"
        defaultValue={15}
        max={30}
        keepWithinRange={false}
      />,
    )
    fireEvent.input(screen.getByTestId("NumberInput"), {
      target: {
        value: "35",
      },
    })
    expect(screen.getByTestId("NumberInput")).toHaveValue("35")
  })

  test("should render an invalid input", () => {
    render(<NumberInput data-testid="NumberInput" isInvalid />)
    expect(screen.getByTestId("NumberInput")).toHaveAttribute(
      "aria-invalid",
      "true",
    )
  })

  test("should render a custom stepper input", () => {
    render(
      <NumberInput
        data-testid="NumberInput"
        incrementProps={{ px: "xs", children: "+" }}
        decrementProps={{ px: "xs", children: "-" }}
      />,
    )
    expect(screen.getByText("+")).toBeInTheDocument()
    expect(screen.getByText("-")).toBeInTheDocument()
  })

  test("should correctly reflect value changes with keyboard operations", async () => {
    render(
      <NumberInput
        data-testid="NumberInput"
        defaultValue={10}
        min={0}
        max={30}
      />,
    )
    const el = screen.getByTestId("NumberInput")
    expect(el).toHaveValue("10")
    await act(async () => {
      fireEvent.focus(el)
      fireEvent.keyDown(el, { key: "ArrowUp" })
    })
    expect(el).toHaveValue("11")
    await act(async () => {
      fireEvent.keyDown(el, { key: "ArrowDown" })
    })
    expect(el).toHaveValue("10")
    await act(async () => {
      fireEvent.keyDown(el, { key: "Home" })
    })
    expect(el).toHaveValue("0")
    await act(async () => {
      fireEvent.keyDown(el, { key: "End" })
    })
    expect(el).toHaveValue("30")
  })

  test("should correctly reflect value changes based on step with keyboard operations", async () => {
    render(<NumberInput data-testid="NumberInput" defaultValue={10} step={5} />)
    const el = screen.getByTestId("NumberInput")
    expect(el).toHaveValue("10")
    await act(async () => {
      fireEvent.focus(el)
      fireEvent.keyDown(el, { key: "ArrowUp" })
    })
    expect(el).toHaveValue("15")
    await act(async () => {
      fireEvent.keyDown(el, { key: "ArrowDown" })
    })
    expect(el).toHaveValue("10")
  })

  test("should correctly reflect value changes with stepper elements", async () => {
    const { user } = render(
      <NumberInput
        data-testid="NumberInput"
        defaultValue={10}
        min={0}
        max={30}
      />,
    )
    const el = screen.getByTestId("NumberInput")
    const incrementStepperEl = document.querySelector(
      ".ui-number-input__stepper--up",
    )
    const decrementStepperEl = document.querySelector(
      ".ui-number-input__stepper--down",
    )
    expect(el).toHaveValue("10")
    await user.pointer([{ target: incrementStepperEl!, keys: "[MouseLeft>]" }])
    expect(el).toHaveValue("11")
    await user.pointer([{ target: decrementStepperEl!, keys: "[MouseLeft>]" }])
    expect(el).toHaveValue("10")
  })

  test("increments the value on wheel up", async () => {
    const { user, getByTestId } = render(
      <NumberInput
        data-testid="NumberInput"
        defaultValue={10}
        allowMouseWheel
      />,
    )
    const el = getByTestId("NumberInput")
    expect(el).toHaveValue("10")
    await user.tab()
    await act(async () => {
      fireEvent.wheel(el, { deltaY: -100 })
    })
    expect(el).toHaveValue("11")
  })

  test("decrements the value on wheel down", async () => {
    const { user, getByTestId } = render(
      <NumberInput
        data-testid="NumberInput"
        defaultValue={10}
        allowMouseWheel
      />,
    )
    const el = getByTestId("NumberInput")
    expect(el).toHaveValue("10")
    await user.tab()
    await act(async () => {
      fireEvent.wheel(el, { deltaY: 100 })
    })
    expect(el).toHaveValue("9")
  })
})
