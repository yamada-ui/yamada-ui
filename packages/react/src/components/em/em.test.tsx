import { a11y, render, screen } from "../../../test"
import { Em } from "./em"

describe("<Em />", () => {
  test("renders em correctly", async () => {
    await a11y(<Em>Unleash the Power</Em>)
  })

  test("sets `displayName` and `__ui__` correctly", () => {
    expect(Em.displayName).toBe("Em")
    expect(Em.__ui__).toBe("Em")
  })

  test("sets `className` correctly", () => {
    render(<Em>Unleash the Power</Em>)
    expect(screen.getByText("Unleash the Power")).toHaveClass("ui-em")
  })

  test("renders HTML tag correctly", () => {
    render(<Em>Unleash the Power</Em>)
    expect(screen.getByText("Unleash the Power").tagName).toBe("EM")
  })
})
