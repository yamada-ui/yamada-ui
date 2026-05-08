import { a11y, render, screen } from "#test"
import { Rotate } from "./"

describe("<Rotate />", () => {
  test("should have displayName", () => {
    expect(Rotate.displayName).toBe("Rotate")
  })

  test("should have root className", () => {
    render(<Rotate from="ON" to="OFF" />)

    expect(screen.getByRole("button")).toHaveClass("ui-rotate")
  })

  test("should render button element", () => {
    render(<Rotate from="ON" to="OFF" />)

    expect(screen.getByRole("button").tagName).toBe("BUTTON")
  })

  test("renders component correctly", async () => {
    await a11y(<Rotate from="ON" to="OFF" />)
  })

  test("applies custom `aria-label`", () => {
    render(<Rotate aria-label="Toggle icon" from="ON" to="OFF" />)

    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-label",
      "Toggle icon",
    )
  })

  test("should be read only", () => {
    render(<Rotate from="ON" readOnly to="OFF" />)

    const button = screen.getByRole("button")
    expect(button).toHaveAttribute("data-readonly")
    expect(button).toHaveAttribute("data-value", "from")

    button.click()
    expect(button).toHaveAttribute("data-value", "from")
  })

  test("should be disabled", () => {
    render(<Rotate disabled from="ON" to="OFF" />)

    const button = screen.getByRole("button")
    expect(button).toHaveAttribute("data-disabled")
    expect(button).toHaveAttribute("data-value", "from")

    button.click()
    expect(button).toHaveAttribute("data-value", "from")
  })
})
