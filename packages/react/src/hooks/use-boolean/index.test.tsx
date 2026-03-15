import { renderHook } from "#test/browser"
import { useBoolean } from "./"

describe("useBoolean", () => {
  test("initializes with false by default", async () => {
    const { result } = await renderHook(() => useBoolean())
    expect(result.current[0]).toBeFalsy()
  })

  test("initializes with the provided value", async () => {
    const { result } = await renderHook(() => useBoolean(true))
    expect(result.current[0]).toBeTruthy()
  })

  test("sets value to true when on is called", async () => {
    const { act, result } = await renderHook(() => useBoolean())

    expect(result.current[0]).toBeFalsy()

    await act(() => {
      result.current[1].on()
    })

    expect(result.current[0]).toBeTruthy()
  })

  test("sets value to false when off is called", async () => {
    const { act, result } = await renderHook(() => useBoolean(true))

    expect(result.current[0]).toBeTruthy()

    await act(() => {
      result.current[1].off()
    })

    expect(result.current[0]).toBeFalsy()
  })

  test("toggles value when toggle is called", async () => {
    const { act, result } = await renderHook(() => useBoolean())

    expect(result.current[0]).toBeFalsy()

    await act(() => {
      result.current[1].toggle()
    })

    expect(result.current[0]).toBeTruthy()

    await act(() => {
      result.current[1].toggle()
    })

    expect(result.current[0]).toBeFalsy()
  })

  test("on has no effect when already true", async () => {
    const { act, result } = await renderHook(() => useBoolean(true))

    await act(() => {
      result.current[1].on()
    })

    expect(result.current[0]).toBeTruthy()
  })

  test("off has no effect when already false", async () => {
    const { act, result } = await renderHook(() => useBoolean(false))

    await act(() => {
      result.current[1].off()
    })

    expect(result.current[0]).toBeFalsy()
  })
})
