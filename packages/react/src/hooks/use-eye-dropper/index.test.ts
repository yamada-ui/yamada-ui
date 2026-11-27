import { renderHook } from "#test"
import { useEyeDropper } from "./"

describe("useEyeDropper", () => {
  test("When supported is true, EyeDropper exists in window", () => {
    vi.stubGlobal(
      "EyeDropper",
      class EyeDropperMock {
        open = vi.fn().mockResolvedValue({ sRGBHex: "#FFFFFF" })
      },
    )
    const { result } = renderHook(() => useEyeDropper())
    expect(result.current.supported).toBeTruthy()
  })

  test("When supported is false, EyeDropper does not exist in window", () => {
    const { result } = renderHook(() => useEyeDropper())
    expect(result.current.supported).toBeFalsy()
  })

  test("When onOpen is called, if supported is true, EyeDropper.open is called", async () => {
    vi.stubGlobal(
      "EyeDropper",
      class EyeDropperMock {
        open = vi.fn().mockResolvedValue({ sRGBHex: "#FFFFFF" })
      },
    )
    const { result } = renderHook(() => useEyeDropper())
    const openResult = await result.current.onOpen()
    expect(openResult).toStrictEqual({ sRGBHex: "#FFFFFF" })
  })

  test("When onOpen is called, if supported is false, returns undefined", async () => {
    const { result } = renderHook(() => useEyeDropper())
    const openResult = await result.current.onOpen()
    expect(openResult).toBeUndefined()
  })
})
