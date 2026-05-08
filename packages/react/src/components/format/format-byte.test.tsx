import { a11y, render, renderHook, screen } from "#test"
import { FormatByte } from "./format-byte"
import { useFormatByte } from "./use-format-byte"

describe("<FormatByte />", () => {
  test("should have displayName", () => {
    expect(FormatByte.displayName).toBe("FormatByte")
  })

  test("should have className", () => {
    render(<FormatByte data-testid="format-byte" value={1024} />)
    expect(screen.getByTestId("format-byte")).toHaveClass("ui-format-byte")
  })

  test("should render span tag", () => {
    render(<FormatByte data-testid="format-byte" value={1024} />)
    expect(screen.getByTestId("format-byte").tagName).toBe("SPAN")
  })

  test("renders component correctly", async () => {
    await a11y(<FormatByte value={1024} />)
  })

  test("renders correctly", () => {
    render(<FormatByte locale="en-US" value={1024} />)
    expect(screen.getByText("1.02 kB")).toBeInTheDocument()
  })

  test("renders different sizes correctly", () => {
    render(
      <>
        <FormatByte value={50} />
        <FormatByte value={5000} />
        <FormatByte value={5000000} />
        <FormatByte value={5000000000} />
      </>,
    )
    expect(screen.getByText("50 byte")).toBeInTheDocument()
    expect(screen.getByText("5 kB")).toBeInTheDocument()
    expect(screen.getByText("5 MB")).toBeInTheDocument()
    expect(screen.getByText("5 GB")).toBeInTheDocument()
  })

  test("renders with locale correctly", () => {
    render(<FormatByte locale="de-DE" value={1450} />)
    expect(screen.getByText("1,45 kB")).toBeInTheDocument()
  })

  test("renders with unitDisplay correctly", () => {
    render(
      <>
        <FormatByte locale="en-US" unitDisplay="short" value={50300} />
        <FormatByte locale="en-US" unitDisplay="long" value={50300} />
        <FormatByte locale="en-US" unitDisplay="narrow" value={50300} />
      </>,
    )
    expect(screen.getByText("50.3 kB")).toBeInTheDocument()
    expect(screen.getByText("50.3 kilobytes")).toBeInTheDocument()
    expect(screen.getByText("50.3kB")).toBeInTheDocument()
  })
})

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
