import { a11y, page, render } from "#test/browser"
import { Separator } from "./separator"

describe("<Separator />", () => {
  test("renders component correctly", async () => {
    await a11y(<Separator />)
  })

  test("sets `displayName` correctly", () => {
    expect(Separator.displayName).toBe("Separator")
  })

  test("sets `className` correctly", async () => {
    await render(<Separator />)

    await expect
      .element(page.getByRole("separator"))
      .toHaveClass("ui-separator")
  })

  test("renders HTML tag correctly", async () => {
    await render(<Separator />)

    expect(page.getByRole("separator").element().tagName).toBe("HR")
  })
})
