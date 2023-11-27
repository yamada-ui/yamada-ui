import { a11y, render, screen } from "@yamada-ui/test"
import { Textarea } from "../src"

describe("<Textarea />", () => {
  test("Textarea renders correctly", async () => {
    const { container } = render(
      <Textarea aria-label="Enter notes" defaultValue="hello" />,
    )
    await a11y(container)
  })

  test("Disabled Textarea renders correctly", () => {
    render(<Textarea isDisabled />)

    expect(screen.getByRole("textbox")).toHaveAttribute("disabled")
  })

  test("Readonly Textarea renders correctly", () => {
    render(<Textarea isReadOnly />)

    expect(screen.getByRole("textbox")).toHaveAttribute("aria-readonly", "true")
  })

  test("Invalid Textarea renders correctly", () => {
    render(<Textarea isInvalid />)

    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true")
  })

  test("Resize Textarea renders correctly", () => {
    render(<Textarea resize="none" />)

    expect(screen.getByRole("textbox")).toHaveStyle({ resize: "none" })
  })

  test("Placeholder Textarea renders correctly", () => {
    render(<Textarea placeholder="text" />)

    expect(screen.getByRole("textbox")).toHaveAttribute("placeholder", "text")
  })
})
