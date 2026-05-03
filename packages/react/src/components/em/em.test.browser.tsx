import { a11y, page, render } from "#test/browser"
import { Em } from "./em"

describe("<Em />", () => {
  test("renders component correctly", async () => {
    await a11y(<Em>Unleash the Power</Em>)
  })

  test("sets `displayName` correctly", () => {
    expect(Em.displayName).toBe("Em")
  })

  test("sets `className` correctly", async () => {
    await render(<Em>Unleash the Power</Em>)

    await expect
      .element(page.getByText("Unleash the Power"))
      .toHaveClass("ui-em")
  })

  test("renders HTML tag correctly", async () => {
    await render(<Em>Unleash the Power</Em>)

    expect(page.getByText("Unleash the Power").element().tagName).toBe("EM")
  })
})
