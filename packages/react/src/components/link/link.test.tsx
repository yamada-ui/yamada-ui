import { a11y, render, screen } from "#test"
import { Link } from "."

describe("<Link />", () => {
  test("should set display name", () => {
    expect(Link.displayName).toBe("Link")
  })

  test("renders component correctly", async () => {
    await a11y(<Link href="https://yamada-ui.com">Link</Link>)
  })

  test("should render anchor element with default class", () => {
    render(<Link href="https://yamada-ui.com">Link</Link>)

    const link = screen.getByRole("link")

    expect(link).toBeInstanceOf(HTMLAnchorElement)
    expect(link).toHaveClass("ui-link")
  })

  test("should open link in a new tab", () => {
    render(
      <Link href="https://yamada-ui.com" external>
        Link
      </Link>,
    )

    const link = screen.getByRole("link")

    expect(link).toHaveAttribute("target", "_blank")
    expect(link).toHaveAttribute("rel", "noopener")
  })
})
