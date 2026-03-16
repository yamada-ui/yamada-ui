import { renderHook } from "#test/browser"
import { useProcessing } from "./"

describe("useProcessing", () => {
  test("should initialize with the given initial state", async () => {
    const { result } = await renderHook(() => useProcessing(true))
    expect(result.current.loading).toBeTruthy()
  })

  test("should start processing", async () => {
    const { act, result } = await renderHook(() => useProcessing())

    await act(() => {
      result.current.start()
    })

    expect(result.current.loading).toBeTruthy()
  })

  test("should finish processing", async () => {
    const { act, result } = await renderHook(() => useProcessing(true))

    await act(() => {
      result.current.start()
      result.current.finish()
    })

    expect(result.current.loading).toBeFalsy()
  })

  test("should handle multiple starts and finishes correctly", async () => {
    const { act, result } = await renderHook(() => useProcessing(false))

    await act(() => {
      result.current.start()
      result.current.start()
      result.current.finish()
    })

    expect(result.current.loading).toBeTruthy()

    await act(() => {
      result.current.finish()
    })

    expect(result.current.loading).toBeFalsy()
  })
})
