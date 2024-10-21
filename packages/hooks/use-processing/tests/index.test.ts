import { act, renderHook } from "@yamada-ui/test"
import { useProcessing } from "../src"

describe("useProcessing", () => {
  test("should initialize with the given initial state", () => {
    const { result } = renderHook(() => useProcessing(true))
    expect(result.current.isLoading).toBeTruthy()
  })

  test("should start processing", () => {
    const { result } = renderHook(() => useProcessing())

    act(() => {
      result.current.start()
    })

    expect(result.current.isLoading).toBeTruthy()
  })

  test("should finish processing", () => {
    const { result } = renderHook(() => useProcessing(true))

    act(() => {
      result.current.start()
      result.current.finish()
    })

    expect(result.current.isLoading).toBeFalsy()
  })

  test("should handle multiple starts and finishes correctly", () => {
    const { result } = renderHook(() => useProcessing(false))

    act(() => {
      result.current.start()
      result.current.start()
      result.current.finish()
    })

    expect(result.current.isLoading).toBeTruthy()

    act(() => {
      result.current.finish()
    })

    expect(result.current.isLoading).toBeFalsy()
  })
})
