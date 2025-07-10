import { a11y, render } from "../../../test"
import { FormatNumber } from "./format-number"

describe("<FormatNumber />", () => {
  test("FormatNumber renders correctly", async () => {
    await a11y(<FormatNumber value={1000} />)
  })

  test("FormatNumber sets `displayName` correctly", () => {
    expect(FormatNumber.displayName).toBe("FormatNumber")
  })

  test("FormatNumber sets `className` correctly", () => {
    const { getByTestId } = render(
      <FormatNumber data-testid="format" value={1000} />,
    )
    expect(getByTestId("format")).toHaveClass("ui-format-number")
  })

  test("FormatNumber renders HTML tag correctly", () => {
    const { getByTestId } = render(
      <FormatNumber data-testid="format" value={1000} />,
    )
    expect(getByTestId("format").tagName).toBe("SPAN")
  })

  test("FormatNumber renders correctly with different values", () => {
    const { getByText } = render(<FormatNumber value={1234.56} />)
    expect(getByText("1,234.56")).toBeInTheDocument()
  })

  test("FormatNumber renders correctly with different locales", () => {
    const { getByText } = render(
      <FormatNumber locale="de-DE" value={1234.56} />,
    )
    expect(getByText("1.234,56")).toBeInTheDocument()
  })

  test("FormatNumber renders correctly with additional intlOptions", () => {
    const { getByText } = render(
      <FormatNumber style="currency" currency="USD" value={1234.56} />,
    )
    expect(getByText("$1,234.56")).toBeInTheDocument()
  })
})
