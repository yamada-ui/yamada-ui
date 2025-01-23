import { Textarea } from "."
import { a11y, render, screen } from "../../../test"

describe("<Textarea />", () => {
  test("Textarea renders correctly", async () => {
    await a11y(<Textarea aria-label="Enter notes" defaultValue="hello" />)
  })

  test("Disabled Textarea renders correctly", () => {
    render(<Textarea disabled />)

    expect(screen.getByRole("textbox")).toHaveAttribute("disabled")
  })

  test("Readonly Textarea renders correctly", () => {
    render(<Textarea readOnly />)

    expect(screen.getByRole("textbox")).toHaveAttribute("aria-readonly", "true")
  })

  test("Invalid Textarea renders correctly", () => {
    render(<Textarea invalid />)

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
  test("Rows Textarea renders correctly", () => {
    render(<Textarea rows={1} />)
    expect(screen.getByRole("textbox")).toHaveProperty("rows", 1)
  })

  test("Autosize Textarea renders correctly", () => {
    let fontsData =
      "fonts" in global.document ? global.document.fonts : undefined

    Object.defineProperty(global.document, "fonts", {
      value: {
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      },
      writable: true,
    })
    render(<Textarea autosize />)
    expect(screen.getByRole("textbox")).toHaveProperty("rows", 1)
    Object.defineProperty(global.document, "fonts", {
      value: fontsData,
      writable: true,
    })
  })
})
