import { a11y, page, render } from "#test/browser"
import { Link } from "."

describe("<Link />", () => {
  test("renders component correctly", async () => {
    await a11y(<Link href="https://yamada-ui.com">Link</Link>)
  })

  test("sets `displayName` correctly", () => {
    expect(Link.displayName).toBe("Link")
  })

  test("sets `className` correctly", async () => {
    await render(<Link href="https://yamada-ui.com">Link</Link>)

    await expect.element(page.getByRole("link")).toHaveClass("ui-link")
  })

  test("renders HTML tag correctly", async () => {
    await render(<Link href="https://yamada-ui.com">Link</Link>)

    const link = page.getByRole("link").element()

    expect(link).toBeInstanceOf(HTMLAnchorElement)
  })

  test("should open link in a new tab", async () => {
    await render(
      <Link href="https://yamada-ui.com" external>
        Link
      </Link>,
    )

    const link = page.getByRole("link")

    await expect.element(link).toHaveAttribute("target", "_blank")
    await expect.element(link).toHaveAttribute("rel", "noopener")
  })
})
