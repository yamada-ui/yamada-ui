import { a11y, render, screen } from "../../../test"
import { Center } from "./center"

describe("<Center />", () => {
  test("passes a11y test", async () => {
    await a11y(<Center>Center</Center>)
  })

  test("sets `displayName` correctly", () => {
    expect(Center.displayName).toBe("Center")
  })

  test("sets `className` correctly", () => {
    render(<Center>Center</Center>)
    expect(screen.getByText("Center")).toHaveClass("ui-center")
  })

  test("renders HTML tag correctly", () => {
    render(<Center>Center</Center>)
    expect(screen.getByText("Center").tagName).toBe("DIV")
  })
})
