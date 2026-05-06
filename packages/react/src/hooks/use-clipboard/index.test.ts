import { act, renderHook } from "#test"
import { useClipboard } from "./"

describe("useClipboard", () => {
  let defaultClipboardData: unknown
  let defaultClipboard: Clipboard

  beforeAll(() => {
    defaultClipboardData =
      "clipboardData" in window ? window.clipboardData : undefined
    defaultClipboard = window.navigator.clipboard

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

    Object.defineProperty(window.navigator, "clipboard", {
      value: {
        readText: vi.fn(() => clipboardData),
        writeText: vi.fn((data: string) => {
          clipboardData = data
        }),
      },
      writable: true,
    })
  })

  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  afterAll(() => {
    Object.defineProperty(window, "clipboardData", {
      value: defaultClipboardData,
      writable: true,
    })

    Object.defineProperty(window.navigator, "clipboard", {
      value: defaultClipboard,
      writable: true,
    })
  })

  test("copied is false initially", () => {
    const { result } = renderHook(() => useClipboard())
    expect(result.current.copied).toBeFalsy()
  })

  test("copied becomes true when text is copied", () => {
    const { result } = renderHook(() => useClipboard())
    act(() => {
      result.current.onCopy("Test Text")
    })
    expect(result.current.copied).toBeTruthy()
  })

  test("copied returns to false after the specified timeout", () => {
    const { result } = renderHook(() => useClipboard("", { timeout: 100 }))
    act(() => {
      result.current.onCopy("Test Text")
    })
    expect(result.current.copied).toBeTruthy()

    act(() => vi.advanceTimersByTime(100))

    expect(result.current.copied).toBeFalsy()
  })

  test("copied returns to false after the specified timeout with number", () => {
    const { result } = renderHook(() => useClipboard("", 100))
    act(() => {
      result.current.onCopy("Test Text")
    })
    expect(result.current.copied).toBeTruthy()

    act(() => vi.advanceTimersByTime(100))

    expect(result.current.copied).toBeFalsy()
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
