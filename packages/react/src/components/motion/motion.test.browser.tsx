import { a11y, page, render } from "#test/browser"
import { motion } from "./factory"
import { Motion } from "./motion"

describe("<Motion />", () => {
  test("renders component correctly", async () => {
    await a11y(<Motion />)
  })

  test("applies custom `aria-label`", async () => {
    await render(
      <Motion as="button" aria-label="Toggle layout" data-testid="motion" />,
    )

    await expect
      .element(page.getByTestId("motion"))
      .toHaveAttribute("aria-label", "Toggle layout")
  })

  test("sets `displayName` correctly", () => {
    expect(Motion.name).toBe("Motion")
  })

  test("sets `className` correctly", async () => {
    await render(<Motion data-testid="motion" />)

    await expect.element(page.getByTestId("motion")).toHaveClass("ui-motion")
  })

  test("renders HTML tag correctly", async () => {
    await render(<Motion data-testid="motion" />)

    expect(page.getByTestId("motion").element().tagName).toBe("DIV")
  })

  test("renders motion component created via factory function call", async () => {
    const MotionSpan = motion("span")

    await render(<MotionSpan data-testid="factory-motion">test</MotionSpan>)

    expect(page.getByTestId("factory-motion").element().tagName).toBe("SPAN")
  })
})
