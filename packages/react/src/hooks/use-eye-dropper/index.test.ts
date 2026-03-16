import { renderHook } from "#test/browser"
import { useEyeDropper } from "./"

describe("useEyeDropper", () => {
  const defaultEyeDropper =
    "EyeDropper" in window
      ? (window as { [key: string]: unknown }).EyeDropper
      : undefined
  const hasDefaultEyeDropper = "EyeDropper" in window

  beforeEach(() => {
    Object.defineProperty(window, "EyeDropper", {
      configurable: true,
      value: class EyeDropperMock {
        open = vi.fn().mockResolvedValue({ sRGBHex: "#FFFFFF" })
      },
      writable: true,
    })
  })

  afterEach(() => {
    if (hasDefaultEyeDropper) {
      Object.defineProperty(window, "EyeDropper", {
        configurable: true,
        value: defaultEyeDropper,
        writable: true,
      })
    } else {
      Reflect.deleteProperty(window, "EyeDropper")
    }
  })

  test("When supported is true, EyeDropper exists in window", async () => {
    const { result } = await renderHook(() => useEyeDropper())
    expect(result.current.supported).toBeTruthy()
  })

  test("When supported is false, EyeDropper does not exist in window", async () => {
    Reflect.deleteProperty(window, "EyeDropper")
    const { result } = await renderHook(() => useEyeDropper())
    expect(result.current.supported).toBeFalsy()
  })

  test("When onOpen is called, if supported is true, EyeDropper.open is called", async () => {
    const { result } = await renderHook(() => useEyeDropper())
    const openResult = await result.current.onOpen()
    expect(openResult).toStrictEqual({ sRGBHex: "#FFFFFF" })
  })

  test("When onOpen is called, if supported is false, returns undefined", async () => {
    Reflect.deleteProperty(window, "EyeDropper")
    const { result } = await renderHook(() => useEyeDropper())
    const openResult = await result.current.onOpen()
    expect(openResult).toBeUndefined()
  })
})
