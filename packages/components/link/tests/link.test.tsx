import { a11y, render, screen } from "@yamada-ui/test"
import { Link } from "../src"

describe("<Link />", () => {
  test("Link renders correctly", async () => {
    const { container } = render(
      <Link href="https://hirotomoyamada.github.io/yamada-ui/?path=/docs/documents-welcome--docs">
        Welcome page
      </Link>,
    )
    await a11y(container)
  })

  test("should open link in a new tab", () => {
    render(
      <Link
        data-testid="Link"
        href="https://hirotomoyamada.github.io/yamada-ui/?path=/docs/documents-welcome--docs"
        isExternal
      >
        Welcome page
      </Link>,
    )
    const link = screen.getByTestId("Link")
    expect(link).toHaveAttribute("target", "_blank")
    expect(link).toHaveAttribute(
      "href",
      "https://hirotomoyamada.github.io/yamada-ui/?path=/docs/documents-welcome--docs",
    )
    expect(link).toHaveAttribute("rel", "noopener")
    expect(link).toHaveTextContent("Welcome page")
  })
})
