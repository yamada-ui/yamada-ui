import { browserRender, page } from "#browser-test"
import { a11y } from "#test"
import { Badge } from "./"

describe("<Badge />", () => {
  test.todo("renders component correctly", async () => {
    await a11y(<Badge>Badge</Badge>)
  })

  test("sets `displayName` correctly", () => {
    expect(Badge.displayName).toBe("Badge")
  })

  test("sets `className` correctly", async () => {
    browserRender(<Badge>Badge</Badge>)

    const badge = page.getByText("Badge")
    await expect.element(badge).toHaveClass("ui-badge")
  })

  test("renders HTML tag correctly", () => {
    browserRender(<Badge>Badge</Badge>)

    const badge = page.getByText("Badge")
    expect(badge.element().tagName).toBe("SPAN")
  })
})
