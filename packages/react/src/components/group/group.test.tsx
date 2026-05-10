import { a11y, render, screen } from "#test"
import { Group } from "./group"

describe("<Group />", () => {
  test("renders component correctly", async () => {
    await a11y(<Group>Group</Group>)
  })

  test("sets `displayName` correctly", () => {
    expect(Group.displayName).toBe("Group")
  })

  test("sets root class and default tag correctly", () => {
    render(<Group>Group</Group>)

    const group = screen.getByRole("group")

    expect(group).toHaveClass("ui-group")
    expect(group.tagName).toBe("DIV")
  })
})
