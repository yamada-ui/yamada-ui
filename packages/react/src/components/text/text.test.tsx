import { a11y, render, screen } from "../../../test"
import { Text } from "./text"

describe("<Text />", () => {
  test("renders text correctly", async () => {
    await a11y(<Text>Text</Text>)
  })

  test("sets `displayName` and `__ui__` correctly", () => {
    expect(Text.displayName).toBe("Text")
    expect(Text.__styled__).toBe("Text")
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

  test("as - prop works correctly", () => {
    render(
      <Text as="a" href="www.google.com">
        Text
      </Text>,
    )

    const link = screen.getByRole("link", { name: /Text/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", "www.google.com")
  })
})
