import { a11y, screen } from "../../../test"
import { render } from "../../../test"
import { Heading } from "./heading"

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
