import { a11y, render, screen } from "#test"
import { NumberInput } from "."

describe("<NumberInput />", () => {
  test("renders component correctly", async () => {
    await a11y(<NumberInput aria-label="Input number" />)
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
