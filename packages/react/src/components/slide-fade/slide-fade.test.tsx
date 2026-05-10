import { a11y, render, screen } from "#test"
import { SlideFade } from "./slide-fade"

describe("<SlideFade />", () => {
  test("passes a11y check", async () => {
    await a11y(<SlideFade />)
  })

  test("sets `displayName` correctly", () => {
    expect(SlideFade.displayName).toBe("SlideFade")
  })

  test("sets `className` correctly", () => {
    render(<SlideFade data-testid="slide-fade">SlideFade</SlideFade>)

    expect(screen.getByTestId("slide-fade")).toHaveClass("ui-slide-fade")
  })

  test("renders HTML tag correctly", () => {
    render(<SlideFade data-testid="slide-fade">SlideFade</SlideFade>)

    expect(screen.getByTestId("slide-fade").tagName).toBe("DIV")
  })
})
