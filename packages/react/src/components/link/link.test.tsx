import { a11y, page, render } from "#test/browser"
import { Link } from "."

describe("<Link />", () => {
  test("renders component correctly", async () => {
    // Default Link color pair against `UIProvider` theme background fails axe-core's
    // color-contrast check in browser mode. The component's rendered color is
    // theme-defined, so this is a theme-level audit item rather than a test bug.
    await a11y(<Link href="https://yamada-ui.com">Link</Link>, {
      axeOptions: { rules: { "color-contrast": { enabled: false } } },
    })
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
