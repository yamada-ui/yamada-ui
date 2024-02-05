import { a11y, render, screen, fireEvent } from "@yamada-ui/test"
import { NumberInput } from "../src"

describe("<NumberInput />", () => {
  test("NumberInput renders correctly", async () => {
    const { container } = render(<NumberInput aria-label="number-input" />)
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
        aria-label="number-input"
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
        aria-label="number-input"
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
})
