import { a11y, render, screen } from "#test"
import { FormatDateTime } from "./format-date-time"

describe("<FormatDateTime />", () => {
  test("renders component correctly", async () => {
    await a11y(<FormatDateTime value={new Date()} />)
  })

  test("sets `displayName` correctly", () => {
    expect(FormatDateTime.displayName).toBe("FormatDateTime")
  })

  test("sets `className` correctly", () => {
    render(<FormatDateTime data-testid="format" value={new Date()} />)
    expect(screen.getByTestId("format")).toHaveClass("ui-format-date-time")
  })

  test("renders HTML tag correctly", () => {
    render(<FormatDateTime data-testid="format" value={new Date()} />)
    expect(screen.getByTestId("format").tagName).toBe("SPAN")
  })

  test("FormatDateTime renders correctly", () => {
    render(<FormatDateTime value={new Date(2025, 9, 6)} />)
    expect(screen.getByText("10/6/2025")).toBeInTheDocument()
  })

  test("Locale renders correctly", () => {
    render(<FormatDateTime locale="de-DE" value={new Date(2025, 9, 6)} />)
    expect(screen.getByText("6.10.2025")).toBeInTheDocument()
  })
})
