import { a11y, page, render } from "#test/browser"
import { Textarea } from "./"

describe("<Textarea />", () => {
  test("renders component correctly", async () => {
    await a11y(<Textarea aria-label="Enter notes" defaultValue="hello" />)
  })

  test("sets `displayName` correctly", () => {
    expect(Textarea.displayName).toBe("Textarea")
  })

  test("sets `className` correctly", async () => {
    await render(<Textarea />)
    await expect.element(page.getByRole("textbox")).toHaveClass("ui-textarea")
  })

  test("renders HTML tag correctly", async () => {
    await render(<Textarea />)
    expect(page.getByRole("textbox").element().tagName).toBe("TEXTAREA")
  })

  test("Disabled Textarea renders correctly", async () => {
    await render(<Textarea disabled />)
    await expect.element(page.getByRole("textbox")).toHaveAttribute("disabled")
  })

  test("Read-Only Textarea renders correctly", async () => {
    await render(<Textarea readOnly />)
    await expect
      .element(page.getByRole("textbox"))
      .toHaveAttribute("aria-readonly", "true")
  })

  test("Invalid Textarea renders correctly", async () => {
    await render(<Textarea invalid />)
    await expect
      .element(page.getByRole("textbox"))
      .toHaveAttribute("aria-invalid", "true")
  })

  test("Resize Textarea renders correctly", async () => {
    await render(<Textarea resize="none" />)
    await expect.element(page.getByRole("textbox")).toHaveStyle({
      resize: "none",
    })
  })

  test("Placeholder Textarea renders correctly", async () => {
    await render(<Textarea placeholder="text" />)
    await expect
      .element(page.getByRole("textbox"))
      .toHaveAttribute("placeholder", "text")
  })
  test("Rows Textarea renders correctly", async () => {
    await render(<Textarea rows={1} />)
    const textarea = page.getByRole("textbox").element() as HTMLTextAreaElement
    expect(textarea.rows).toBe(1)
  })

  test("Autosize Textarea renders correctly", async () => {
    let fontsData = "fonts" in document ? document.fonts : undefined

    Object.defineProperty(document, "fonts", {
      value: {
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      },
      writable: true,
    })
    await render(<Textarea autosize />)
    await expect
      .poll(() => (page.getByRole("textbox").element() as HTMLTextAreaElement).rows)
      .toBe(2)
    Object.defineProperty(document, "fonts", {
      value: fontsData,
      writable: true,
    })
  })
})
