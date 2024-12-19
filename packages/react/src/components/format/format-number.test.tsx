import { FormatNumber } from "."
import { a11y, render } from "../../../test"

describe("<FormatNumber />", () => {
  test("FormatNumber renders correctly", async () => {
    await a11y(<FormatNumber value={1000} />)
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
