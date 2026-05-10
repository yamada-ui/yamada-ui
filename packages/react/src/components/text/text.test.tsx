import { a11y, render, screen } from "#test"
import { Text } from "./text"

describe("<Text />", () => {
  test("sets displayName correctly", () => {
    expect(Text.displayName).toBe("Text")
  })

  test("sets className correctly", () => {
    render(<Text>Text</Text>)

    expect(screen.getByText("Text")).toHaveClass("ui-text")
  })

  test("renders HTML tag correctly", () => {
    render(<Text>Text</Text>)

    expect(screen.getByText("Text").tagName).toBe("P")
  })

  test("renders component correctly", async () => {
    await a11y(<Text>Text</Text>)
  })
})
