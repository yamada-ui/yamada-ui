import { act, renderHook } from "#test"
import { useCounter } from "./index"

describe("useCounter", () => {
  test("initial state", () => {
    const { result } = renderHook(() => useCounter({ defaultValue: 5 }))
    expect(result.current.value).toBe("5")
    expect(result.current.valueAsNumber).toBe(5)
  })

  test("not initial state", () => {
    const { result } = renderHook(() => useCounter())
    expect(result.current.value).toBe("")
    expect(result.current.valueAsNumber).toBeNaN()
  })

  test("increment and decrement functionality", () => {
    const { result } = renderHook(() =>
      useCounter({ defaultValue: 5, step: 2 }),
    )

    act(() => {
      result.current.increment()
    })
    expect(result.current.valueAsNumber).toBe(7)

    act(() => {
      result.current.decrement()
    })
    expect(result.current.valueAsNumber).toBe(5)
  })

  test("increment and decrement functionality with not step", () => {
    const { result } = renderHook(() => useCounter({ defaultValue: 5 }))

    act(() => {
      result.current.increment()
    })
    expect(result.current.valueAsNumber).toBe(6)

    act(() => {
      result.current.decrement()
    })
    expect(result.current.valueAsNumber).toBe(5)
  })

  test("min and max constraints", () => {
    const { result } = renderHook(() =>
      useCounter({ defaultValue: 5, max: 10, min: 0 }),
    )

    act(() => {
      result.current.decrement(10)
    })
    expect(result.current.valueAsNumber).toBe(0)

    act(() => {
      result.current.increment(20)
    })
    expect(result.current.valueAsNumber).toBe(10)
  })

  test("reset functionality", () => {
    const { result } = renderHook(() => useCounter({ defaultValue: 5 }))

    act(() => {
      result.current.increment(5)
    })
    expect(result.current.valueAsNumber).toBe(10)

    act(() => {
      result.current.reset()
    })
    expect(result.current.valueAsNumber).toBe(5)
  })

  test("reset functionality with not state", () => {
    const { result } = renderHook(() => useCounter())

    act(() => {
      result.current.increment(5)
    })
    expect(result.current.valueAsNumber).toBe(5)

    act(() => {
      result.current.reset()
    })
    expect(result.current.valueAsNumber).toBeNaN()

    act(() => {
      result.current.decrement(5)
    })
    expect(result.current.valueAsNumber).toBe(-5)

    act(() => {
      result.current.reset()
    })
    expect(result.current.valueAsNumber).toBeNaN()
  })

  test("precision functionality", () => {
    const { result } = renderHook(() =>
      useCounter({ defaultValue: 5.123, precision: 2 }),
    )

    act(() => {
      result.current.increment(0.007)
    })
    expect(result.current.value).toBe("5.13")
  })

  test("when keepWithinRange is false", () => {
    const { result } = renderHook(() =>
      useCounter({ defaultValue: 5, keepWithinRange: false, max: 10 }),
    )

    act(() => {
      result.current.increment(10)
    })
    expect(result.current.valueAsNumber).toBe(15)
  })

  test("cast functionality", () => {
    const { result } = renderHook(() =>
      useCounter({ defaultValue: 5, precision: 2, step: 1 }),
    )

    act(() => {
      result.current.cast("3.14159")
    })

    expect(result.current.value).toBe("3.14")
  })
})
