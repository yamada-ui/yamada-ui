import { a11y, render, screen } from "#test"
import { Textarea } from "./"

describe("<Textarea />", () => {
  test("passes a11y checks", async () => {
    await a11y(<Textarea aria-label="Enter notes" defaultValue="hello" />)
  })

  test("disabled Textarea sets disabled attribute", () => {
    render(<Textarea disabled />)

    expect(screen.getByRole("textbox")).toBeDisabled()
  })

  test("read-only Textarea sets aria-readonly", () => {
    render(<Textarea readOnly />)

    expect(screen.getByRole("textbox")).toHaveAttribute("aria-readonly", "true")
  })

  test("invalid Textarea sets aria-invalid", () => {
    render(<Textarea invalid />)

    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true")
  })

  test("resize prop applies inline style", () => {
    render(<Textarea resize="none" />)

    expect(screen.getByRole("textbox")).toHaveStyle({ resize: "none" })
  })

  test("placeholder prop is forwarded", () => {
    render(<Textarea placeholder="text" />)

    expect(screen.getByRole("textbox")).toHaveAttribute("placeholder", "text")
  })

  test("rows prop is forwarded", () => {
    render(<Textarea rows={1} />)

    const textarea = screen.getByRole("textbox")
    if (!(textarea instanceof HTMLTextAreaElement))
      throw new Error("Expected HTMLTextAreaElement")

    expect(textarea.rows).toBe(1)
  })
})
