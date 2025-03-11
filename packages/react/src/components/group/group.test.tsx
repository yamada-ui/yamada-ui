import { a11y, render, screen } from "../../../test"
import { Group } from "./group"

describe("<Group />", () => {
  test("passes a11y test", async () => {
    await a11y(<Group>Group</Group>)
  })

  test("sets `displayName` and `__ui__` correctly", () => {
    expect(Group.displayName).toBe("Group")
    expect(Group.__ui__).toBe("Group")
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
