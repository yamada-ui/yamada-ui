import { a11y, render, screen } from "#test"
import { Wrap } from "./wrap"

describe("<Wrap />", () => {
  test("passes a11y test", async () => {
    await a11y(<Wrap>Wrap</Wrap>)
  })

  test("sets `displayName` correctly", () => {
    expect(Wrap.displayName).toBe("Wrap")
  })

  test("sets `className` correctly", () => {
    render(<Wrap>Wrap</Wrap>)
    expect(screen.getByText("Wrap")).toHaveClass("ui-wrap")
  })

  test("renders HTML tag correctly", () => {
    render(<Wrap>Wrap</Wrap>)
    expect(screen.getByText("Wrap").tagName).toBe("DIV")
  })
})
