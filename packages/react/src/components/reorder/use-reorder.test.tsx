import { act, renderHook } from "#test"
import { useReorder } from "./"

describe("useReorder", () => {
  test("when reorder receives a new order then it updates values and calls onChange", () => {
    const onChange = vi.fn()

    const { result } = renderHook(() =>
      useReorder({
        items: [{ value: "a" }, { value: "b" }],
        onChange,
      }),
    )

    act(() => {
      result.current.getRootProps().onReorder(["b", "a"])
    })

    expect(result.current.values).toStrictEqual(["b", "a"])
    expect(onChange).toHaveBeenCalledExactlyOnceWith(["b", "a"])
  })

  test("when order changes then mouseUp calls onCompleteChange with latest values", () => {
    const onCompleteChange = vi.fn()

    const { result } = renderHook(() =>
      useReorder({
        items: [{ value: "a" }, { value: "b" }],
        onCompleteChange,
      }),
    )

    act(() => {
      result.current.getRootProps().onReorder(["b", "a"])
    })

    act(() => {
      result.current.getRootProps().onMouseUp?.({} as any)
    })

    expect(onCompleteChange).toHaveBeenCalledExactlyOnceWith(["b", "a"])
    expect(result.current.values).toStrictEqual(["b", "a"])
  })

  test("when order does not change then mouseUp does not call onCompleteChange", () => {
    const onCompleteChange = vi.fn()

    const { result } = renderHook(() =>
      useReorder({
        items: [{ value: "a" }, { value: "b" }],
        onCompleteChange,
      }),
    )

    act(() => {
      result.current.getRootProps().onMouseUp?.({} as any)
    })

    expect(onCompleteChange).not.toHaveBeenCalled()
    expect(result.current.values).toStrictEqual(["a", "b"])
  })
})
