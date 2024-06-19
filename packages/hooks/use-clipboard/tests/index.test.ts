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
        setData: vi.fn((data: string) => {
          clipboardData = data
        }),
        clearData: vi.fn(() => {
          clipboardData = ""
        }),
      },
      writable: true,
    })

    Object.defineProperty(global.navigator, "clipboard", {
      value: {
        writeText: vi.fn((data: string) => {
          clipboardData = data
        }),
        readText: vi.fn(() => clipboardData),
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

  test("hasCopied becomes true when text is copied", async () => {
    const { result } = renderHook(() => useClipboard())
    await act(async () => {
      result.current.onCopy("Test Text")
    })
    expect(result.current.hasCopied).toBeTruthy()
  })

  test("hasCopied returns to false after the default timeout", async () => {
    const { result } = renderHook(() => useClipboard(""))
    await act(async () => {
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

  test("hasCopied returns to false after the specified timeout", async () => {
    const { result } = renderHook(() => useClipboard("", { timeout: 2000 }))
    await act(async () => {
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

  test("hasCopied returns to false after the specified timeout with number", async () => {
    const { result } = renderHook(() => useClipboard("", 2000))
    await act(async () => {
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

  test("value is updated when new value is copied", async () => {
    const { result } = renderHook(() => useClipboard())
    await act(async () => {
      result.current.onCopy("New Text")
    })
    expect(result.current.value).toBe("New Text")
  })

  test("If a non-string value is attempted to be copied, the current value is copied", async () => {
    const { result } = renderHook(() => useClipboard("Initial Value"))
    await act(async () => {
      result.current.onCopy({ obj: "object" })
    })
    expect(result.current.value).toBe("Initial Value")
  })
})
