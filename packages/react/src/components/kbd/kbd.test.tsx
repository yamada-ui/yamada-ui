import { Kbd } from "."
import { a11y, render, screen } from "../../../test"

describe("<Kbd />", () => {
  test("Kbd renders a11y correctly", async () => {
    await a11y(<Kbd>enter</Kbd>)
  })

  test("sets `displayName` and `__styled__` correctly", () => {
    expect(Kbd.displayName).toBe("Kbd")
    expect(Kbd.__styled__).toBe("Kbd")
  })

  test("sets `className` correctly", () => {
    render(<Kbd>enter</Kbd>)
    expect(screen.getByText("enter")).toHaveClass("ui-kbd")
  })

  test("renders HTML tag correctly", () => {
    render(<Kbd>enter</Kbd>)
    expect(screen.getByText("enter").tagName).toBe("KBD")
  })
})
