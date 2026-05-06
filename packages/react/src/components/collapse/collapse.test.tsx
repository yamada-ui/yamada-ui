import { a11y, render, screen } from "#test"
import { Collapse } from "./collapse"

describe("<Collapse />", () => {
  test("renders component correctly", async () => {
    await a11y(<Collapse />)
  })

  test("sets `displayName` correctly", () => {
    expect(Collapse.displayName).toBe("Collapse")
  })

  test("sets `className` correctly", () => {
    render(<Collapse data-testid="collapse" />)

    expect(screen.getByTestId("collapse")).toHaveClass("ui-collapse")
  })

  test("renders HTML tag correctly", () => {
    render(<Collapse data-testid="collapse" />)

    expect(screen.getByTestId("collapse").tagName).toBe("DIV")
  })
})
