import { renderHook } from "#test/browser"
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

  test("copied is false initially", async () => {
    const { result } = await renderHook(() => useClipboard())
    expect(result.current.copied).toBeFalsy()
  })

  test("copied becomes true when text is copied", async () => {
    const { act, result } = await renderHook(() => useClipboard())
    await act(() => {
      result.current.onCopy("Test Text")
    })
    expect(result.current.copied).toBeTruthy()
  })

  test("copied returns to false after the default timeout", async () => {
    const { act, result } = await renderHook(() =>
      useClipboard("", { timeout: 100 }),
    )
    await act(() => {
      result.current.onCopy("Test Text")
    })
    expect(result.current.copied).toBeTruthy()

    await expect.poll(() => result.current.copied).toBeFalsy()
  })

  test("copied returns to false after the specified timeout", async () => {
    const { act, result } = await renderHook(() =>
      useClipboard("", { timeout: 100 }),
    )
    await act(() => {
      result.current.onCopy("Test Text")
    })
    expect(result.current.copied).toBeTruthy()

    await expect.poll(() => result.current.copied).toBeFalsy()
  })

  test("copied returns to false after the specified timeout with number", async () => {
    const { act, result } = await renderHook(() => useClipboard("", 100))
    await act(() => {
      result.current.onCopy("Test Text")
    })
    expect(result.current.copied).toBeTruthy()

    await expect.poll(() => result.current.copied).toBeFalsy()
  })

  test("value is updated when new value is copied", async () => {
    const { act, result } = await renderHook(() => useClipboard())
    await act(() => {
      result.current.onCopy("New Text")
    })
    expect(result.current.value).toBe("New Text")
  })

  test("If a non-string value is attempted to be copied, the current value is copied", async () => {
    const { act, result } = await renderHook(() =>
      useClipboard("Initial Value"),
    )
    await act(() => {
      result.current.onCopy({ obj: "object" })
    })
    expect(result.current.value).toBe("Initial Value")
  })
})
