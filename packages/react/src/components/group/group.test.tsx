import { a11y, page, render } from "#test/browser"
import { Group } from "./group"

describe("<Group />", () => {
  test("renders component correctly", async () => {
    await a11y(<Group>Group</Group>)
  })

  test("sets `displayName` correctly", () => {
    expect(Group.displayName).toBe("Group")
  })

  test("sets `className` correctly", async () => {
    await render(<Group data-testid="group">Group</Group>)

    await expect.element(page.getByTestId("group")).toHaveClass("ui-group")
  })

  test("renders HTML tag correctly", async () => {
    await render(<Group data-testid="group">Group</Group>)

    expect(page.getByTestId("group").element().tagName).toBe("DIV")
  })
})
