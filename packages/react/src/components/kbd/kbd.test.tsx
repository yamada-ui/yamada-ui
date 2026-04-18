import { a11y, page, render } from "#test/browser"
import { Kbd } from "."

describe("<Kbd />", () => {
  test("renders component correctly", async () => {
    await a11y(<Kbd>enter</Kbd>)
  })

  test("sets `displayName` correctly", () => {
    expect(Kbd.displayName).toBe("Kbd")
  })

  test("sets `className` correctly", async () => {
    await render(<Kbd>enter</Kbd>)

    await expect.element(page.getByText("enter")).toHaveClass("ui-kbd")
  })

  test("renders HTML tag correctly", async () => {
    await render(<Kbd>enter</Kbd>)

    expect(page.getByText("enter").element().tagName).toBe("KBD")
  })
})
