import { a11y, render, screen } from "../../../test"
import { Motion } from "./motion"

describe("<Motion />", () => {
  test("passes a11y test", async () => {
    await a11y(<Motion />)
  })

  test("sets `displayName` and `__styled__` correctly", () => {
    expect(Motion.displayName).toBe("Motion")
    expect(Motion.__styled__).toBe("Motion")
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
