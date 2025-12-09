import { page, render } from "#browser-test"
import { Badge } from "../"

describe("<Badge />", () => {
  test("sets `displayName` correctly", () => {
    expect(Badge.displayName).toBe("Badge")
  })

  test("sets `className` correctly", async () => {
    render(<Badge>Badge</Badge>)

    const badge = page.getByText("Badge")
    await expect.element(badge).toHaveClass("ui-badge")
  })

  test("renders HTML tag correctly", () => {
    render(<Badge>Badge</Badge>)

    const badge = page.getByText("Badge")
    expect(badge.element().tagName).toBe("SPAN")
  })
})
