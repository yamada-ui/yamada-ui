import { renderHook } from "#test"
import { useFormatByte } from "./use-format-byte"

describe("useFormatByte", () => {
  test("formats bytes correctly", () => {
    const { result } = renderHook(() =>
      useFormatByte(1024, { locale: "en-US" }),
    )
    expect(result.current).toBe("1.02 kB")
  })

  test("formats different sizes correctly", () => {
    const { result: result50 } = renderHook(() =>
      useFormatByte(50, { locale: "en-US" }),
    )
    const { result: result5000 } = renderHook(() =>
      useFormatByte(5000, { locale: "en-US" }),
    )
    const { result: result5000000 } = renderHook(() =>
      useFormatByte(5000000, { locale: "en-US" }),
    )
    const { result: result5000000000 } = renderHook(() =>
      useFormatByte(5000000000, { locale: "en-US" }),
    )

    expect(result50.current).toBe("50 byte")
    expect(result5000.current).toBe("5 kB")
    expect(result5000000.current).toBe("5 MB")
    expect(result5000000000.current).toBe("5 GB")
  })

  test("formats bits correctly", () => {
    const { result } = renderHook(() =>
      useFormatByte(1450, { locale: "en-US", unit: "bit" }),
    )
    expect(result.current).toBe("1.45 kb")
  })

  test("formats with different locales correctly", () => {
    const { result: resultDE } = renderHook(() =>
      useFormatByte(1450, { locale: "de-DE" }),
    )
    const { result: resultCN } = renderHook(() =>
      useFormatByte(1450, { locale: "zh-CN" }),
    )

    expect(resultDE.current).toBe("1,45 kB")
    expect(resultCN.current).toBe("1.45 kB")
  })

  test("formats with different unit displays correctly", () => {
    const { result: resultShort } = renderHook(() =>
      useFormatByte(50300, { locale: "en-US", unitDisplay: "short" }),
    )
    const { result: resultLong } = renderHook(() =>
      useFormatByte(50300, { locale: "en-US", unitDisplay: "long" }),
    )
    const { result: resultNarrow } = renderHook(() =>
      useFormatByte(50300, { locale: "en-US", unitDisplay: "narrow" }),
    )

    expect(resultShort.current).toBe("50.3 kB")
    expect(resultLong.current).toBe("50.3 kilobytes")
    expect(resultNarrow.current).toBe("50.3kB")
  })

  test("formats NaN bytes correctly", () => {
    const { result } = renderHook(() =>
      useFormatByte(Number.NaN, { locale: "en-US" }),
    )
    expect(result.current).toBe("0 byte")
  })

  test("formats 0 bytes correctly", () => {
    const { result } = renderHook(() => useFormatByte(0, { locale: "en-US" }))
    expect(result.current).toBe("0 byte")
  })
})
