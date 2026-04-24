import { a11y, page, render } from "#test/browser"
import { Mark } from "./"

describe("<Mark />", () => {
  test("renders component correctly", async () => {
    await a11y(<Mark>Mark</Mark>)
  })

  test("sets `displayName` correctly", () => {
    expect(Mark.displayName).toBe("Mark")
  })

  test("sets `className` correctly", async () => {
    await render(<Mark>Mark</Mark>)

    await expect.element(page.getByText("Mark")).toHaveClass("ui-mark")
  })

  test("renders HTML tag correctly", async () => {
    await render(<Mark>Mark</Mark>)

    expect(page.getByText("Mark").element().tagName).toBe("MARK")
  })
})
