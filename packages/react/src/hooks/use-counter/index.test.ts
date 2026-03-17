import { renderHook } from "#test/browser"
import { useCounter } from "./index"

describe("useCounter", () => {
  test("initial state", async () => {
    const { result } = await renderHook(() => useCounter({ defaultValue: 5 }))
    expect(result.current.value).toBe("5")
    expect(result.current.valueAsNumber).toBe(5)
  })

  test("not initial state", async () => {
    const { result } = await renderHook(() => useCounter())
    expect(result.current.value).toBe("")
    expect(result.current.valueAsNumber).toBeNaN()
  })

  test("increment and decrement functionality", async () => {
    const { act, result } = await renderHook(() =>
      useCounter({ defaultValue: 5, step: 2 }),
    )

    await act(() => {
      result.current.increment()
    })
    expect(result.current.valueAsNumber).toBe(7)

    await act(() => {
      result.current.decrement()
    })
    expect(result.current.valueAsNumber).toBe(5)
  })

  test("increment and decrement functionality with not step", async () => {
    const { act, result } = await renderHook(() =>
      useCounter({ defaultValue: 5 }),
    )

    await act(() => {
      result.current.increment()
    })
    expect(result.current.valueAsNumber).toBe(6)

    await act(() => {
      result.current.decrement()
    })
    expect(result.current.valueAsNumber).toBe(5)
  })

  test("min and max constraints", async () => {
    const { act, result } = await renderHook(() =>
      useCounter({ defaultValue: 5, max: 10, min: 0 }),
    )

    await act(() => {
      result.current.decrement(10)
    })
    expect(result.current.valueAsNumber).toBe(0)

    await act(() => {
      result.current.increment(20)
    })
    expect(result.current.valueAsNumber).toBe(10)
  })

  test("reset functionality", async () => {
    const { act, result } = await renderHook(() =>
      useCounter({ defaultValue: 5 }),
    )

    await act(() => {
      result.current.increment(5)
    })
    expect(result.current.valueAsNumber).toBe(10)

    await act(() => {
      result.current.reset()
    })
    expect(result.current.valueAsNumber).toBe(5)
  })

  test("reset functionality with not state", async () => {
    const { act, result } = await renderHook(() => useCounter())

    await act(() => {
      result.current.increment(5)
    })
    expect(result.current.valueAsNumber).toBe(5)

    await act(() => {
      result.current.reset()
    })
    expect(result.current.valueAsNumber).toBeNaN()

    await act(() => {
      result.current.decrement(5)
    })
    expect(result.current.valueAsNumber).toBe(-5)

    await act(() => {
      result.current.reset()
    })
    expect(result.current.valueAsNumber).toBeNaN()
  })

  test("precision functionality", async () => {
    const { act, result } = await renderHook(() =>
      useCounter({ defaultValue: 5.123, precision: 2 }),
    )

    await act(() => {
      result.current.increment(0.007)
    })
    expect(result.current.value).toBe("5.13")
  })

  test("when keepWithinRange is false", async () => {
    const { act, result } = await renderHook(() =>
      useCounter({ defaultValue: 5, keepWithinRange: false, max: 10 }),
    )

    await act(() => {
      result.current.increment(10)
    })
    expect(result.current.valueAsNumber).toBe(15)
  })

  test("cast functionality", async () => {
    const { act, result } = await renderHook(() =>
      useCounter({ defaultValue: 5, precision: 2, step: 1 }),
    )

    await act(() => {
      result.current.cast("3.14159")
    })

    expect(result.current.value).toBe("3.14")
  })
})
