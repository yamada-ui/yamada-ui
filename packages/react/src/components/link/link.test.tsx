import { Link } from "."
import { a11y, render, screen } from "../../../test"

describe("<Link />", () => {
  test("passes a11y test", async () => {
    await a11y(<Link href="https://yamada-ui.com">Link</Link>)
  })

  test("sets `displayName` and `__ui__` correctly", () => {
    expect(Link.displayName).toBe("Link")
    expect(Link.__ui__).toBe("Link")
  })

  test("sets `className` correctly", () => {
    render(<Link href="https://yamada-ui.com">Link</Link>)
    expect(screen.getByRole("link")).toHaveClass("ui-link")
  })

  test("renders HTML tag correctly", () => {
    render(<Link href="https://yamada-ui.com">Link</Link>)
    expect(screen.getByRole("link").tagName).toBe("A")
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
