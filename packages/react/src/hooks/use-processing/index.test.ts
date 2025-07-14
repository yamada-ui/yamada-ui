import { act, renderHook } from "#test"
import { useProcessing } from "./"

describe("useProcessing", () => {
  test("should initialize with the given initial state", () => {
    const { result } = renderHook(() => useProcessing(true))
    expect(result.current.loading).toBeTruthy()
  })

  test("should start processing", () => {
    const { result } = renderHook(() => useProcessing())

    act(() => {
      result.current.start()
    })

    expect(result.current.loading).toBeTruthy()
  })

  test("should finish processing", () => {
    const { result } = renderHook(() => useProcessing(true))

    act(() => {
      result.current.start()
      result.current.finish()
    })

    expect(result.current.loading).toBeFalsy()
  })

  test("should handle multiple starts and finishes correctly", () => {
    const { result } = renderHook(() => useProcessing(false))

    act(() => {
      result.current.start()
      result.current.start()
      result.current.finish()
    })

    expect(result.current.loading).toBeTruthy()

    act(() => {
      result.current.finish()
    })

    expect(result.current.loading).toBeFalsy()
  })
})
