import { a11y, render, screen } from "@yamada-ui/test"
import { Heading, Text } from "../src"

describe("<Heading />", () => {
  test("renders heading correctly", async () => {
    await a11y(<Heading>Heading</Heading>)
  })

  test("as - prop works correctly", () => {
    render(
      <Heading as="a" href="www.google.com">
        Heading
      </Heading>,
    )

    const link = screen.getByRole("link", { name: /Heading/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", "www.google.com")
  })
})

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
