import { a11y, render, screen } from "#test"
import { Separator } from "./separator"

describe("<Separator />", () => {
  test("sets displayName correctly", () => {
    expect(Separator.displayName).toBe("Separator")
  })

  test("sets className correctly", () => {
    render(<Separator />)

    expect(screen.getByRole("separator")).toHaveClass("ui-separator")
  })

  test("renders HTML tag correctly", () => {
    render(<Separator />)

    expect(screen.getByRole("separator").tagName).toBe("HR")
  })

  test("renders component correctly", async () => {
    await a11y(<Separator />)
  })
})
