import { a11y, render, screen } from "../../../test"
import { Bleed } from "./bleed"

describe("<Bleed />", () => {
  test("passes a11y test", async () => {
    await a11y(<Bleed>Box</Bleed>)
  })

  test("sets `displayName` and `__ui__` correctly", () => {
    expect(Bleed.displayName).toBe("Bleed")
    expect(Bleed.__ui__).toBe("Bleed")
  })

  test("sets `className` correctly", () => {
    render(<Bleed>Box</Bleed>)
    expect(screen.getByText("Box")).toHaveClass("ui-bleed")
  })

  test("renders HTML tag correctly", () => {
    render(<Bleed>Box</Bleed>)
    expect(screen.getByText("Box").tagName).toBe("DIV")
  })
})
