import { a11y, render, screen } from "#test"
import { motion } from "./factory"
import { Motion } from "./motion"

describe("<Motion />", () => {
  test("renders component correctly", async () => {
    await a11y(<Motion />)
  })

  test("applies custom `aria-label`", () => {
    render(
      <Motion as="button" aria-label="Toggle layout" data-testid="motion" />,
    )

    expect(screen.getByTestId("motion")).toHaveAttribute(
      "aria-label",
      "Toggle layout",
    )
  })

  test("sets `displayName` correctly", () => {
    expect(Motion.name).toBe("Motion")
  })

  test("sets `className` correctly", () => {
    render(<Motion data-testid="motion" />)
    expect(screen.getByTestId("motion")).toHaveClass("ui-motion")
  })

  test("renders HTML tag correctly", () => {
    render(<Motion data-testid="motion" />)
    expect(screen.getByTestId("motion").tagName).toBe("DIV")
  })

  test("renders motion component created via factory function call", () => {
    const MotionSpan = motion("span")

    render(<MotionSpan data-testid="factory-motion">test</MotionSpan>)

    expect(screen.getByTestId("factory-motion").tagName).toBe("SPAN")
  })
})
