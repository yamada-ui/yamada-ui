import { render, screen } from "../../../test"
import { Separator } from "./separator"

describe("<Separator />", () => {
  test("renders separator correctly", () => {
    render(<Separator />)
  })

  test("sets `displayName` and `__ui__` correctly", () => {
    expect(Separator.displayName).toBe("Separator")
    expect(Separator.__ui__).toBe("Separator")
  })

  test("sets `className` correctly", () => {
    render(<Separator />)
    expect(screen.getByRole("separator")).toHaveClass("ui-separator")
  })

  test("renders HTML tag correctly", () => {
    render(<Separator />)
    expect(screen.getByRole("separator").tagName).toBe("HR")
  })
})
