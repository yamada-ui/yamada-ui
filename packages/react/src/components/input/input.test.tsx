import { a11y, render, screen } from "../../../test"
import { Input, InputGroup } from "./"

describe("<Input />", () => {
  test("passes a11y test", async () => {
    await a11y(<Input />, {
      axeOptions: {
        rules: {
          label: { enabled: false },
        },
      },
    })
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
