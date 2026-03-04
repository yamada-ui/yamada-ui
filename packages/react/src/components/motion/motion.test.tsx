import { a11y, render, screen } from "#test"
import { Motion } from "./motion"

describe("<Motion />", () => {
  test("renders component correctly", async () => {
    await a11y(<Motion />)
  })

  test("applies custom `aria-label`", () => {
    render(
      <Motion as="button" aria-label="Toggle layout" data-testid="motion" />,
    )

    expect(screen.getByTestId("motion")).toHaveAttribute(
      "aria-label",
      "Toggle layout",
    )
  })

  test("sets `displayName` correctly", () => {
    expect(Motion.name).toBe("Motion")
  })

  test("sets `className` correctly", () => {
    render(<Motion data-testid="motion" />)
    expect(screen.getByTestId("motion")).toHaveClass("ui-motion")
  })

  test("renders HTML tag correctly", () => {
    render(<Motion data-testid="motion" />)
    expect(screen.getByTestId("motion").tagName).toBe("DIV")
  })
})
