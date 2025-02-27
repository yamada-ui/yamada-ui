import { a11y, render, screen } from "../../../test"
import { Mark } from "./"

describe("<Mark />", () => {
  test("passes a11y test", async () => {
    await a11y(<Mark>Mark</Mark>)
  })

  test("sets `displayName` and `__ui__` correctly", () => {
    expect(Mark.displayName).toBe("Mark")
    expect(Mark.__ui__).toBe("Mark")
  })

  test("sets `className` correctly", () => {
    render(<Mark>Mark</Mark>)
    expect(screen.getByText("Mark")).toHaveClass("ui-mark")
  })

  test("renders HTML tag correctly", () => {
    render(<Mark>Mark</Mark>)
    expect(screen.getByText("Mark").tagName).toBe("MARK")
  })
})
