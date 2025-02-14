import { a11y, render, screen } from "../../../test"
import { Text } from "./text"

describe("<Text />", () => {
  test("renders text correctly", async () => {
    await a11y(<Text>Text</Text>)
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
