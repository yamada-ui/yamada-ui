import { act, renderHook } from "#test"
import { usePrevious } from "."

describe("usePrevious", () => {
  test("returns undefined on first render", () => {
    const { result } = renderHook(() => usePrevious("initial"))

    expect(result.current).toBeUndefined()
  })

  test("returns previous value after re-render", () => {
    const { rerender, result } = renderHook(({ value }) => usePrevious(value), {
      initialProps: { value: "first" },
    })

    expect(result.current).toBeUndefined()

    act(() => {
      rerender({ value: "second" })
    })

    expect(result.current).toBe("first")

    act(() => {
      rerender({ value: "third" })
    })

    expect(result.current).toBe("second")
  })

  test("returns previous value when re-rendered with same value", () => {
    const { rerender, result } = renderHook(({ value }) => usePrevious(value), {
      initialProps: { value: "same" },
    })

    expect(result.current).toBeUndefined()

    act(() => {
      rerender({ value: "same" })
    })

    expect(result.current).toBe("same")
  })
})
