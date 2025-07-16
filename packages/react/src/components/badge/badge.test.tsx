import { a11y, render, screen } from "#test"
import { Badge } from "./"

describe("<Badge />", () => {
  test("passes a11y test", async () => {
    await a11y(<Badge>Badge</Badge>)
  })

  test("sets `displayName` correctly", () => {
    expect(Badge.displayName).toBe("Badge")
  })

  test("sets `className` correctly", () => {
    render(<Badge>Badge</Badge>)
    expect(screen.getByText("Badge")).toHaveClass("ui-badge")
  })

  test("renders HTML tag correctly", () => {
    render(<Badge>Badge</Badge>)
    expect(screen.getByText("Badge").tagName).toBe("SPAN")
  })
})
