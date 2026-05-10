import { render, screen } from "@testing-library/react"
import { a11y } from "#test"
import { FadeScale } from "./fade-scale"

describe("<FadeScale />", () => {
  test("renders component correctly", async () => {
    await a11y(<FadeScale />)
  })

  test("sets `displayName` correctly", () => {
    expect(FadeScale.displayName).toBe("FadeScale")
  })

  test("sets `className` correctly", () => {
    render(<FadeScale>FadeScale</FadeScale>)
    expect(screen.getByText("FadeScale")).toHaveClass("fade-scale")
  })

  test("renders HTML tag correctly", () => {
    render(<FadeScale>FadeScale</FadeScale>)
    expect(screen.getByText("FadeScale").tagName).toBe("DIV")
  })
})
