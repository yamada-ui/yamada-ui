import { a11y, render, screen } from "#test"
import { Group } from "./group"

describe("<Group />", () => {
  test("renders component correctly", async () => {
    await a11y(<Group>Group</Group>)
  })

  test("sets `displayName` correctly", () => {
    expect(Group.displayName).toBe("Group")
  })

  test("sets `className` correctly", () => {
    render(<Group data-testid="group">Group</Group>)
    expect(screen.getByTestId("group")).toHaveClass("ui-group")
  })

  test("renders HTML tag correctly", () => {
    render(<Group data-testid="group">Group</Group>)
    expect(screen.getByTestId("group").tagName).toBe("DIV")
  })
})
