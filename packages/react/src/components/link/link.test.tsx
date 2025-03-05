import { Link, LinkBox, LinkOverlay } from "."
import { a11y, render, screen } from "../../../test"

describe("<Link />", () => {
  test("passes a11y test", async () => {
    const url =
      "https://yamada-ui.github.io/yamada-ui/?path=/docs/documents-welcome--docs"
    await a11y(<Link href={url}>Welcome page</Link>)
  })

  test("sets `displayName` and `__ui__` correctly", () => {
    expect(Link.displayName).toBe("Link")
    expect(Link.__ui__).toBe("Link")
  })

  test("sets `className` correctly", () => {
    const url =
      "https://yamada-ui.github.io/yamada-ui/?path=/docs/documents-welcome--docs"
    render(<Link href={url}>Welcome page</Link>)
    expect(screen.getByRole("link")).toHaveClass("ui-link")
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
  test("renders correctly", async () => {
    const url =
      "https://yamada-ui.github.io/yamada-ui/?path=/docs/documents-welcome--docs"
    await a11y(
      <LinkBox>
        <LinkOverlay href={url}>Welcome page</LinkOverlay>
      </LinkBox>,
    )
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
})

describe("<LinkBox />", () => {
  test("passes a11y test", async () => {
    await a11y(<LinkBox>Link Box</LinkBox>)
  })

  test("sets `displayName` and `__ui__` correctly", () => {
    expect(LinkBox.displayName).toBe("LinkBoxRoot")
    expect(LinkBox.__ui__).toBe("LinkBoxRoot")
  })

  test("sets `className` correctly", () => {
    render(<LinkBox>Link Box</LinkBox>)
    expect(screen.getByText("Link Box")).toHaveClass("ui-link-box__root")
  })
})
