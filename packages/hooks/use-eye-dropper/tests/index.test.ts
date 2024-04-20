import { renderHook } from "@yamada-ui/test"
import { useEyeDropper } from "../src"

type WindowWithEyeDropper = Window &
  typeof globalThis & {
    EyeDropper: any
  }

describe("useEyeDropper", () => {
  const defaultEyeDropper =
    "EyeDropper" in window ? window.EyeDropper : undefined

  beforeEach(() => {
    Object.defineProperty(window, "EyeDropper", {
      value: vi.fn().mockImplementation(() => ({
        open: vi.fn().mockResolvedValue({ sRGBHex: "#FFFFFF" }),
      })),
      writable: true,
      configurable: true,
    })
  })

  afterEach(() => {
    ;(window as WindowWithEyeDropper).EyeDropper = defaultEyeDropper
  })

  test("When supported is true, EyeDropper exists in window", () => {
    const { result } = renderHook(() => useEyeDropper())
    expect(result.current.supported).toBeTruthy()
  })

  test("When supported is false, EyeDropper does not exist in window", () => {
    delete (window as WindowWithEyeDropper).EyeDropper
    const { result } = renderHook(() => useEyeDropper())
    expect(result.current.supported).toBeFalsy()
  })

  test("When onOpen is called, if supported is true, EyeDropper.open is called", async () => {
    const { result } = renderHook(() => useEyeDropper())
    const openResult = await result.current.onOpen()
    expect(openResult).toStrictEqual({ sRGBHex: "#FFFFFF" })
  })

  test("When onOpen is called, if supported is false, returns undefined", async () => {
    delete (window as WindowWithEyeDropper).EyeDropper
    const { result } = renderHook(() => useEyeDropper())
    const openResult = await result.current.onOpen()
    expect(openResult).toBeUndefined()
  })
})
