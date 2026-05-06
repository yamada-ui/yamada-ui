import { a11y, render, renderHook, screen } from "#test"
import { FormatNumber } from "./format-number"
import { useFormatNumber } from "./use-format-number"

describe("<FormatNumber />", () => {
  test("should have displayName", () => {
    expect(FormatNumber.displayName).toBe("FormatNumber")
  })

  test("should have className", () => {
    render(<FormatNumber data-testid="format-number" value={1000} />)
    expect(screen.getByTestId("format-number")).toHaveClass("ui-format-number")
  })

  test("should render span tag", () => {
    render(<FormatNumber data-testid="format-number" value={1000} />)
    expect(screen.getByTestId("format-number").tagName).toBe("SPAN")
  })

  test("renders component correctly", async () => {
    await a11y(<FormatNumber value={1000} />)
  })

  test("renders correctly with different values", () => {
    render(<FormatNumber value={1234.56} />)
    expect(screen.getByText("1,234.56")).toBeInTheDocument()
  })

  test("renders correctly with different locales", () => {
    render(<FormatNumber locale="de-DE" value={1234.56} />)
    expect(screen.getByText("1.234,56")).toBeInTheDocument()
  })

  test("renders correctly with additional intlOptions", () => {
    render(<FormatNumber style="currency" currency="USD" value={1234.56} />)
    expect(screen.getByText("$1,234.56")).toBeInTheDocument()
  })
})

describe("useFormatNumber", () => {
  test("formats number correctly", () => {
    const { result } = renderHook(() =>
      useFormatNumber(1000, { locale: "en-US" }),
    )
    expect(result.current).toBe("1,000")
  })

  test("formats number with options correctly", () => {
    const { result } = renderHook(() =>
      useFormatNumber(1000, {
        style: "currency",
        currency: "USD",
        locale: "en-US",
      }),
    )
    expect(result.current).toBe("$1,000.00")
  })

  test("formats number with different locales correctly", () => {
    const { result: resultDE } = renderHook(() =>
      useFormatNumber(1000, { locale: "de-DE" }),
    )
    const { result: resultJP } = renderHook(() =>
      useFormatNumber(1000, { locale: "ja-JP" }),
    )

    expect(resultDE.current).toBe("1.000")
    expect(resultJP.current).toBe("1,000")
  })

  test("formats number with different styles correctly", () => {
    const { result: resultPercent } = renderHook(() =>
      useFormatNumber(0.25, { style: "percent", locale: "en-US" }),
    )
    const { result: resultUnit } = renderHook(() =>
      useFormatNumber(100, {
        style: "unit",
        locale: "en-US",
        unit: "kilometer",
      }),
    )

    expect(resultPercent.current).toBe("25%")
    expect(resultUnit.current).toBe("100 km")
  })
})
