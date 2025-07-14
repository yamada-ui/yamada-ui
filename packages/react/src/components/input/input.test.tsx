import { a11y, render, screen } from "#test"
import { Input, InputGroup } from "./"

describe("<Input />", () => {
  test("passes a11y test", async () => {
    await a11y(
      <InputGroup.Root>
        <InputGroup.Element>Hello</InputGroup.Element>
        <Input />
        <InputGroup.Addon>World</InputGroup.Addon>
      </InputGroup.Root>,
      {
        axeOptions: {
          rules: {
            label: { enabled: false },
          },
        },
      },
    )
  })

  test("sets `displayName` correctly", () => {
    expect(Input.displayName).toBe("Input")
    expect(InputGroup.Root.name).toBe("InputGroupRoot")
    expect(InputGroup.Element.displayName).toBe("InputElement")
    expect(InputGroup.Addon.displayName).toBe("InputAddon")
  })

  test("sets `className` correctly", () => {
    render(
      <InputGroup.Root data-testid="input-group">
        <InputGroup.Element>Hello</InputGroup.Element>
        <Input />
        <InputGroup.Addon>World</InputGroup.Addon>
      </InputGroup.Root>,
    )
    expect(screen.getByTestId("input-group")).toHaveClass("ui-group")
    expect(screen.getByRole("textbox")).toHaveClass("ui-input")
    expect(screen.getByText("Hello")).toHaveClass("ui-input-element")
    expect(screen.getByText("World")).toHaveClass("ui-input-addon")
  })

  test("renders HTML tag correctly", () => {
    render(
      <InputGroup.Root data-testid="input-group">
        <InputGroup.Element>Hello</InputGroup.Element>
        <Input />
        <InputGroup.Addon>World</InputGroup.Addon>
      </InputGroup.Root>,
    )
    expect(screen.getByTestId("input-group").tagName).toBe("DIV")
    expect(screen.getByRole("textbox").tagName).toBe("INPUT")
    expect(screen.getByText("Hello").tagName).toBe("DIV")
    expect(screen.getByText("World").tagName).toBe("DIV")
  })

  test("Elements inside input render correctly", async () => {
    render(
      <InputGroup.Root>
        <InputGroup.Element>Hello</InputGroup.Element>
        <Input />
        <InputGroup.Element>World</InputGroup.Element>
      </InputGroup.Root>,
    )

    const hello = await screen.findByText(/Hello/i)
    const world = await screen.findByText(/World/i)
    expect(hello).toBeInTheDocument()
    expect(world).toBeInTheDocument()
  })

  test("Elements inside input-addon render correctly", async () => {
    render(
      <InputGroup.Root>
        <InputGroup.Addon>https:</InputGroup.Addon>
        <Input />
        <InputGroup.Addon>.com</InputGroup.Addon>
      </InputGroup.Root>,
    )

    const scheme = await screen.findByText(/https:/i)
    const tld = await screen.findByText(/\.com/i)
    expect(scheme).toBeInTheDocument()
    expect(tld).toBeInTheDocument()
  })

  test("Invalid input renders correctly", async () => {
    render(<Input invalid />)

    const input = await screen.findByRole("textbox")
    expect(input).toBeInvalid()
    expect(input).toHaveAttribute("aria-invalid", "true")
  })

  test("Disabled input renders correctly", async () => {
    render(<Input disabled />)

    const input = await screen.findByRole("textbox")
    expect(input).toBeDisabled()
  })

  test("Readonly input renders correctly", async () => {
    render(<Input readOnly />)

    const input = await screen.findByRole("textbox")
    expect(input).toHaveAttribute("aria-readonly", "true")
  })

  test("Input with native size renders correctly", async () => {
    render(<Input htmlSize={4} />)

    const input = await screen.findByRole("textbox")
    expect(input).toHaveAttribute("size", "4")
  })
})
