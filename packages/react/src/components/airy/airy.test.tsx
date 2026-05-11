import { a11y, render, screen } from "#test"
import { Airy } from "."

describe("<Airy />", () => {
  test("renders component correctly", async () => {
    await a11y(<Airy from="ON" to="OFF" />)
  })

  test("applies custom `aria-label`", () => {
    render(<Airy aria-label="Toggle navigation" from="ON" to="OFF" />)

    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-label",
      "Toggle navigation",
    )
  })

  test("should be disabled", () => {
    render(<Airy disabled from="ON" to="OFF" />)

    const button = screen.getByRole("button")
    expect(button).toHaveAttribute("data-disabled")
    expect(button).toBeDisabled()
    expect(screen.getByText("ON")).toBeInTheDocument()
  })
})
