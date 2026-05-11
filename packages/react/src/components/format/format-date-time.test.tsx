import { a11y, render, renderHook, screen } from "#test"
import { FormatDateTime } from "./format-date-time"
import { useFormatDateTime } from "./use-format-date-time"

describe("<FormatDateTime />", () => {
  test("renders component correctly", async () => {
    await a11y(<FormatDateTime value={new Date()} />)
  })

  test("renders with locale correctly", () => {
    render(<FormatDateTime locale="de-DE" value={new Date(2025, 9, 6)} />)
    expect(screen.getByText("6.10.2025")).toBeInTheDocument()
  })
})

describe("useFormatDateTime", () => {
  test("formats date time correctly", () => {
    const { result } = renderHook(() => useFormatDateTime(new Date(2025, 9, 6)))
    expect(result.current).toBe("10/6/2025")
  })

  test("formats date time with different locales correctly", () => {
    const { result: resultDE } = renderHook(() =>
      useFormatDateTime(new Date(2025, 9, 6), { locale: "de-DE" }),
    )
    const { result: resultJP } = renderHook(() =>
      useFormatDateTime(new Date(2025, 9, 6), { locale: "ja-JP" }),
    )

    expect(resultDE.current).toBe("6.10.2025")
    expect(resultJP.current).toBe("2025/10/6")
  })
})
