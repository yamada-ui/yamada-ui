import { a11y, page, render } from "#test/browser"
import { FormatNumber } from "./format-number"

describe("<FormatNumber />", () => {
  test("renders component correctly", async () => {
    await a11y(<FormatNumber value={1000} />)
  })

  test("FormatNumber sets `displayName` correctly", () => {
    expect(FormatNumber.displayName).toBe("FormatNumber")
  })

  test("FormatNumber sets `className` correctly", async () => {
    await render(<FormatNumber data-testid="format" value={1000} />)
    await expect
      .element(page.getByTestId("format"))
      .toHaveClass("ui-format-number")
  })

  test("FormatNumber renders HTML tag correctly", async () => {
    await render(<FormatNumber data-testid="format" value={1000} />)
    expect(page.getByTestId("format").element().tagName).toBe("SPAN")
  })

  test("FormatNumber renders correctly with different values", async () => {
    await render(<FormatNumber value={1234.56} />)
    await expect.element(page.getByText("1,234.56")).toBeInTheDocument()
  })

  test("FormatNumber renders correctly with different locales", async () => {
    await render(<FormatNumber locale="de-DE" value={1234.56} />)
    await expect.element(page.getByText("1.234,56")).toBeInTheDocument()
  })

  test("FormatNumber renders correctly with additional intlOptions", async () => {
    await render(
      <FormatNumber style="currency" currency="USD" value={1234.56} />,
    )
    await expect.element(page.getByText("$1,234.56")).toBeInTheDocument()
  })
})
