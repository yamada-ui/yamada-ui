import { a11y, screen } from "../../../test"
import { render } from "../../../test"
import { Heading } from "./heading"

describe("<Heading />", () => {
  test("renders heading correctly", async () => {
    await a11y(<Heading>Heading</Heading>)
  })

  test("sets `displayName` and `__styled__` correctly", () => {
    expect(Heading.displayName).toBe("Heading")
    expect(Heading.__styled__).toBe("Heading")
  })

  test("sets `className` correctly", () => {
    render(<Heading>Heading</Heading>)
    expect(screen.getByText("Heading")).toHaveClass("ui-heading")
  })

  test("renders HTML tag correctly", () => {
    render(<Heading>Heading</Heading>)
    expect(screen.getByText("Heading").tagName).toBe("H1")
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
