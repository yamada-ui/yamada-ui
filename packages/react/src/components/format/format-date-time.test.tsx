import { a11y, page, render } from "#test/browser"
import { FormatDateTime } from "./format-date-time"

describe("<FormatDateTime />", () => {
  test("renders component correctly", async () => {
    await a11y(<FormatDateTime value={new Date()} />)
  })

  test("sets `displayName` correctly", () => {
    expect(FormatDateTime.displayName).toBe("FormatDateTime")
  })

  test("sets `className` correctly", async () => {
    await render(<FormatDateTime data-testid="format" value={new Date()} />)
    await expect
      .element(page.getByTestId("format"))
      .toHaveClass("ui-format-date-time")
  })

  test("renders HTML tag correctly", async () => {
    await render(<FormatDateTime data-testid="format" value={new Date()} />)
    expect(page.getByTestId("format").element().tagName).toBe("SPAN")
  })

  test("FormatDateTime renders correctly", async () => {
    await render(<FormatDateTime value={new Date(2025, 9, 6)} />)
    await expect.element(page.getByText("10/6/2025")).toBeInTheDocument()
  })

  test("Locale renders correctly", async () => {
    await render(<FormatDateTime locale="de-DE" value={new Date(2025, 9, 6)} />)
    await expect.element(page.getByText("6.10.2025")).toBeInTheDocument()
  })
})
