import { a11y, page, render } from "#test/browser"
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

  test("sets `displayName` correctly", () => {
    expect(Input.displayName).toBe("Input")
    expect(InputGroup.Root.name).toBe("InputGroupRoot")
    expect(InputGroup.Element.displayName).toBe("InputElement")
    expect(InputGroup.Addon.displayName).toBe("InputAddon")
  })

  test("sets `className` correctly", async () => {
    await render(
      <InputGroup.Root data-testid="input-group">
        <InputGroup.Element>Hello</InputGroup.Element>
        <Input />
        <InputGroup.Addon>World</InputGroup.Addon>
      </InputGroup.Root>,
    )
    await expect
      .element(page.getByTestId("input-group"))
      .toHaveClass("ui-group")
    await expect.element(page.getByRole("textbox")).toHaveClass("ui-input")
    await expect
      .element(page.getByText("Hello"))
      .toHaveClass("ui-input-element")
    await expect.element(page.getByText("World")).toHaveClass("ui-input-addon")
  })

  test("renders HTML tag correctly", async () => {
    await render(
      <InputGroup.Root data-testid="input-group">
        <InputGroup.Element>Hello</InputGroup.Element>
        <Input />
        <InputGroup.Addon>World</InputGroup.Addon>
      </InputGroup.Root>,
    )
    expect(page.getByTestId("input-group").element().tagName).toBe("DIV")
    expect(page.getByRole("textbox").element().tagName).toBe("INPUT")
    expect(page.getByText("Hello").element().tagName).toBe("DIV")
    expect(page.getByText("World").element().tagName).toBe("DIV")
  })

  test("Elements inside input render correctly", async () => {
    await render(
      <InputGroup.Root>
        <InputGroup.Element>Hello</InputGroup.Element>
        <Input />
        <InputGroup.Element>World</InputGroup.Element>
      </InputGroup.Root>,
    )

    await expect.element(page.getByText(/Hello/i)).toBeInTheDocument()
    await expect.element(page.getByText(/World/i)).toBeInTheDocument()
  })

  test("Elements inside input-addon render correctly", async () => {
    await render(
      <InputGroup.Root>
        <InputGroup.Addon>https:</InputGroup.Addon>
        <Input />
        <InputGroup.Addon>.com</InputGroup.Addon>
      </InputGroup.Root>,
    )

    await expect.element(page.getByText(/https:/i)).toBeInTheDocument()
    await expect.element(page.getByText(/\.com/i)).toBeInTheDocument()
  })

  test("Invalid input renders correctly", async () => {
    await render(<Input invalid />)

    const input = page.getByRole("textbox")
    await expect.element(input).toBeInvalid()
    await expect.element(input).toHaveAttribute("aria-invalid", "true")
  })

  test("Disabled input renders correctly", async () => {
    await render(<Input disabled />)

    await expect.element(page.getByRole("textbox")).toBeDisabled()
  })

  test("Readonly input renders correctly", async () => {
    await render(<Input readOnly />)

    await expect
      .element(page.getByRole("textbox"))
      .toHaveAttribute("aria-readonly", "true")
  })

  test("Input with native size renders correctly", async () => {
    await render(<Input htmlSize={4} />)

    await expect.element(page.getByRole("textbox")).toHaveAttribute("size", "4")
  })

  test("renders correctly with errorBorderColor", async () => {
    await render(<Input errorBorderColor="red.500" />)

    await expect.element(page.getByRole("textbox")).toBeInTheDocument()
  })

  test("renders correctly with focusBorderColor", async () => {
    await render(<Input focusBorderColor="blue.500" />)

    await expect.element(page.getByRole("textbox")).toBeInTheDocument()
  })
})
