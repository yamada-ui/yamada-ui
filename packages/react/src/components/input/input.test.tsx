import { a11y, render, screen } from "#test"
import { Input, InputGroup } from "./"

describe("<Input />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <InputGroup.Root>
        <InputGroup.Element>Hello</InputGroup.Element>
        <Input />
        <InputGroup.Addon>World</InputGroup.Addon>
      </InputGroup.Root>,
      {
        axeOptions: {
          rules: {
            "color-contrast": { enabled: false },
            label: { enabled: false },
          },
        },
      },
    )
  })

  test("Elements inside input render correctly", () => {
    render(
      <InputGroup.Root>
        <InputGroup.Element>Hello</InputGroup.Element>
        <Input />
        <InputGroup.Element>World</InputGroup.Element>
      </InputGroup.Root>,
    )

    expect(screen.getByText(/Hello/i)).toBeInTheDocument()
    expect(screen.getByText(/World/i)).toBeInTheDocument()
  })

  test("Elements inside input-addon render correctly", () => {
    render(
      <InputGroup.Root>
        <InputGroup.Addon>https:</InputGroup.Addon>
        <Input />
        <InputGroup.Addon>.com</InputGroup.Addon>
      </InputGroup.Root>,
    )

    expect(screen.getByText(/https:/i)).toBeInTheDocument()
    expect(screen.getByText(/\.com/i)).toBeInTheDocument()
  })

  test("Invalid input renders correctly", () => {
    render(<Input invalid />)

    const input = screen.getByRole("textbox")
    expect(input).toBeInvalid()
    expect(input).toHaveAttribute("aria-invalid", "true")
  })

  test("Disabled input renders correctly", () => {
    render(<Input disabled />)

    expect(screen.getByRole("textbox")).toBeDisabled()
  })

  test("Readonly input renders correctly", () => {
    render(<Input readOnly />)

    expect(screen.getByRole("textbox")).toHaveAttribute("aria-readonly", "true")
  })

  test("Input with native size renders correctly", () => {
    render(<Input htmlSize={4} />)

    expect(screen.getByRole("textbox")).toHaveAttribute("size", "4")
  })

  test("renders correctly with errorBorderColor", () => {
    render(<Input errorBorderColor="red.500" />)

    expect(screen.getByRole("textbox")).toBeInTheDocument()
  })

  test("renders correctly with focusBorderColor", () => {
    render(<Input focusBorderColor="blue.500" />)

    expect(screen.getByRole("textbox")).toBeInTheDocument()
  })
})
