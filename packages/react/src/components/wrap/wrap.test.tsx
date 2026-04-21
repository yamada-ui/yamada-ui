import { a11y, page, render } from "#test/browser"
import { Wrap } from "./wrap"

describe("<Wrap />", () => {
  test("renders component correctly", async () => {
    await a11y(<Wrap>Wrap</Wrap>)
  })

  test("sets `displayName` correctly", () => {
    expect(Wrap.displayName).toBe("Wrap")
  })

  test("sets `className` correctly", async () => {
    await render(<Wrap>Wrap</Wrap>)
    await expect.element(page.getByText("Wrap")).toHaveClass("ui-wrap")
  })

  test("renders HTML tag correctly", async () => {
    await render(<Wrap>Wrap</Wrap>)
    expect(page.getByText("Wrap").element().tagName).toBe("DIV")
  })
})
