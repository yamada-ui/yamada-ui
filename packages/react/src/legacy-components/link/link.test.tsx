import { Link, LinkBox, LinkOverlay } from "."
import { a11y, render, screen } from "../../../test"

describe("<Link />", () => {
  test("Link renders correctly", async () => {
    const url =
      "https://yamada-ui.github.io/yamada-ui/?path=/docs/documents-welcome--docs"
    const { container } = render(<Link href={url}>Welcome page</Link>)
    await a11y(container)
  })

  test("should open link in a new tab", () => {
    const url =
      "https://yamada-ui.github.io/yamada-ui/?path=/docs/documents-welcome--docs"
    render(
      <Link href={url} data-testid="Link" external>
        Welcome page
      </Link>,
    )
    const link = screen.getByTestId("Link")
    expect(link).toHaveAttribute("target", "_blank")
    expect(link).toHaveAttribute("href", url)
    expect(link).toHaveAttribute("rel", "noopener")
    expect(link).toHaveTextContent("Welcome page")
  })
})

describe("<LinkOverlay />", () => {
  test("renders correctly", () => {
    const url =
      "https://yamada-ui.github.io/yamada-ui/?path=/docs/documents-welcome--docs"
    render(
      <LinkBox>
        <LinkOverlay href={url}>Welcome page</LinkOverlay>
      </LinkBox>,
    )
    const link = screen.getByRole("link")

    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", url)
    expect(link).toHaveTextContent("Welcome page")
  })

  test("opens link in a new tab when external is true", () => {
    const url =
      "https://yamada-ui.github.io/yamada-ui/?path=/docs/documents-welcome--docs"
    render(
      <LinkBox>
        <LinkOverlay href={url} external>
          Welcome page
        </LinkOverlay>
      </LinkBox>,
    )
    const link = screen.getByRole("link")

    expect(link).toHaveAttribute("target", "_blank")
    expect(link).toHaveAttribute("rel", "noopener")
  })

  test("applies custom className", () => {
    const url =
      "https://yamada-ui.github.io/yamada-ui/?path=/docs/documents-welcome--docs"
    render(
      <LinkBox>
        <LinkOverlay href={url} className="custom-class">
          Welcome page
        </LinkOverlay>
      </LinkBox>,
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
