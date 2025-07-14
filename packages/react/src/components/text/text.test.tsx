import { a11y, render, screen } from "#test"
import { Text } from "./text"

describe("<Text />", () => {
  test("renders text correctly", async () => {
    await a11y(<Text>Text</Text>)
  })

  test("sets `displayName` correctly", () => {
    expect(Text.displayName).toBe("Text")
  })

  test("sets `className` correctly", () => {
    render(<Text data-testid="text">Text</Text>)
    const el = screen.getByTestId("text")
    expect(el).toHaveClass("ui-text")
  })

  test("renders HTML tag correctly", () => {
    render(<Text data-testid="text">Text</Text>)
    const el = screen.getByTestId("text")
    expect(el.tagName).toBe("P")
  })
})
