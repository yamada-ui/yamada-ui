import { a11y, page, render } from "#test/browser"
import { Text } from "./text"

describe("<Text />", () => {
  test("renders component correctly", async () => {
    await a11y(<Text>Text</Text>)
  })

  test("sets `displayName` correctly", () => {
    expect(Text.displayName).toBe("Text")
  })

  test("sets `className` correctly", async () => {
    await render(<Text data-testid="text">Text</Text>)
    const text = page.getByTestId("text")
    await expect.element(text).toHaveClass("ui-text")
  })

  test("renders HTML tag correctly", async () => {
    await render(<Text data-testid="text">Text</Text>)
    const text = page.getByTestId("text")
    expect(text.element().tagName).toBe("P")
  })
})
