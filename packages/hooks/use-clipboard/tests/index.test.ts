import { act, renderHook, waitFor } from "@yamada-ui/test"
import { useClipboard } from "../src"

describe("useClipboard", () => {
  let defaultClipboardData: unknown
  let defaultClipboard: Clipboard

  beforeAll(() => {
    defaultClipboardData =
      "clipboardData" in window ? window.clipboardData : undefined
    defaultClipboard = global.navigator.clipboard

    let clipboardData = ""

    Object.defineProperty(window, "clipboardData", {
      value: {
        clearData: vi.fn(() => {
          clipboardData = ""
        }),
        setData: vi.fn((data: string) => {
          clipboardData = data
        }),
      },
      writable: true,
    })

    Object.defineProperty(global.navigator, "clipboard", {
      value: {
        readText: vi.fn(() => clipboardData),
        writeText: vi.fn((data: string) => {
          clipboardData = data
        }),
      },
      writable: true,
    })
  })

  afterAll(() => {
    Object.defineProperty(window, "clipboardData", {
      value: defaultClipboardData,
      writable: true,
    })

    Object.defineProperty(global.navigator, "clipboard", {
      value: defaultClipboard,
      writable: true,
    })
  })

  test("hasCopied is false initially", () => {
    const { result } = renderHook(() => useClipboard())
    expect(result.current.hasCopied).toBeFalsy()
  })

  test("hasCopied becomes true when text is copied", () => {
    const { result } = renderHook(() => useClipboard())
    act(() => {
      result.current.onCopy("Test Text")
    })
    expect(result.current.hasCopied).toBeTruthy()
  })

  test("hasCopied returns to false after the default timeout", () => {
    const { result } = renderHook(() => useClipboard(""))
    act(() => {
      result.current.onCopy("Test Text")
    })
    expect(result.current.hasCopied).toBeTruthy()

    waitFor(
      () => {
        expect(result.current.hasCopied).toBeFalsy()
      },
      { timeout: 1500 },
    )
  })

  test("hasCopied returns to false after the specified timeout", () => {
    const { result } = renderHook(() => useClipboard("", { timeout: 2000 }))
    act(() => {
      result.current.onCopy("Test Text")
    })
    expect(result.current.hasCopied).toBeTruthy()

    waitFor(
      () => {
        expect(result.current.hasCopied).toBeFalsy()
      },
      { timeout: 2000 },
    )
  })

  test("hasCopied returns to false after the specified timeout with number", () => {
    const { result } = renderHook(() => useClipboard("", 2000))
    act(() => {
      result.current.onCopy("Test Text")
    })
    expect(result.current.hasCopied).toBeTruthy()

    waitFor(
      () => {
        expect(result.current.hasCopied).toBeFalsy()
      },
      { timeout: 2000 },
    )
  })

  test("value is updated when new value is copied", () => {
    const { result } = renderHook(() => useClipboard())
    act(() => {
      result.current.onCopy("New Text")
    })
    expect(result.current.value).toBe("New Text")
  })

  test("If a non-string value is attempted to be copied, the current value is copied", () => {
    const { result } = renderHook(() => useClipboard("Initial Value"))
    act(() => {
      result.current.onCopy({ obj: "object" })
    })
    expect(result.current.value).toBe("Initial Value")
  })
})
