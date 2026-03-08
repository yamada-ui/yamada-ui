import { act, renderHook } from "#test"
import { useMounted } from "."

describe("useMounted", () => {
  test("should return true after component is mounted and false after unmount", () => {
    const { result, unmount } = renderHook(() => useMounted())
    expect(result.current()).toBeTruthy()
    unmount()
    expect(result.current()).toBeFalsy()
  })

  test("should return mounted state when state is true", () => {
    const { result } = renderHook(() => useMounted({ state: true }))

    expect(result.current).toBeTruthy()
  })

  test("should return mounted state with delay when state is true and delay is set", () => {
    vi.useFakeTimers()

    try {
      const { result } = renderHook(() =>
        useMounted({ delay: 100, state: true }),
      )

      expect(result.current).toBeFalsy()

      act(() => {
        vi.advanceTimersByTime(100)
      })

      expect(result.current).toBeTruthy()
    } finally {
      vi.useRealTimers()
    }
  })
})
