import { a11y, render, screen } from "@yamada-ui/test"
import { Link, LinkBox, LinkOverlay } from "../src"

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

describe("<LinkOverlay />", () => {
  test("renders correctly", () => {
    render(
      <LinkOverlay href="https://hirotomoyamada.github.io/yamada-ui/?path=/docs/documents-welcome--docs">
        Welcome page
      </LinkOverlay>,
    )
    const link = screen.getByRole("link")

    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute(
      "href",
      "https://hirotomoyamada.github.io/yamada-ui/?path=/docs/documents-welcome--docs",
    )
    expect(link).toHaveTextContent("Welcome page")
  })

  test("opens link in a new tab when isExternal is true", () => {
    render(
      <LinkOverlay
        href="https://hirotomoyamada.github.io/yamada-ui/?path=/docs/documents-welcome--docs"
        isExternal
      >
        Welcome page
      </LinkOverlay>,
    )
    const link = screen.getByRole("link")

    expect(link).toHaveAttribute("target", "_blank")
    expect(link).toHaveAttribute("rel", "noopener")
  })

  test("applies custom className", () => {
    render(
      <LinkOverlay
        href="https://hirotomoyamada.github.io/yamada-ui/?path=/docs/documents-welcome--docs"
        className="custom-class"
      >
        Welcome page
      </LinkOverlay>,
    )
    const link = screen.getByRole("link")

    expect(link).toHaveClass("custom-class")
  })
})

describe("<LinkBox />", () => {
  test("renders correctly", () => {
    render(<LinkBox>Welcome page Box</LinkBox>)
    const box = screen.getByText("Welcome page Box")

    expect(box).toBeInTheDocument()
    expect(box).toHaveTextContent("Welcome page Box")
  })

  test("applies custom className", () => {
    render(<LinkBox className="custom-class">Welcome page Box</LinkBox>)
    const box = screen.getByText("Welcome page Box")

    expect(box).toHaveClass("custom-class")
  })
})
