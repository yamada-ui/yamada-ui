import { renderHook } from "#test"
import { useFormatNumber } from "./use-format-number"

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
