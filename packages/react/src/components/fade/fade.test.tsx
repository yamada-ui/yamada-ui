import { a11y, render, screen } from "#test"
import { Fade } from "./fade"

describe("<Fade />", () => {
  test("renders component correctly", async () => {
    await a11y(<Fade />, { withProvider: false })
  })

  test("should have displayName", () => {
    expect(Fade.displayName).toBe("Fade")
  })

  test("should render className and tagName", () => {
    render(<Fade>Fade</Fade>)

    const element = screen.getByText("Fade")

    expect(element).toHaveClass("ui-fade")
    expect(element.tagName).toBe("DIV")
  })
})
