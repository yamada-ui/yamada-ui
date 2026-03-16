import { renderHook } from "#test/browser"
import { usePrevious } from "."

describe("usePrevious", () => {
  test("returns undefined on first render", async () => {
    const { result } = await renderHook(() => usePrevious("initial"))

    expect(result.current).toBeUndefined()
  })

  test("returns previous value after re-render", async () => {
    const { rerender, result } = await renderHook(
      (props) => usePrevious(props?.value ?? "first"),
      {
        initialProps: { value: "first" },
      },
    )

    expect(result.current).toBeUndefined()

    await rerender({ value: "second" })

    expect(result.current).toBe("first")

    await rerender({ value: "third" })

    expect(result.current).toBe("second")
  })

  test("returns previous value when re-rendered with same value", async () => {
    const { rerender, result } = await renderHook(
      (props) => usePrevious(props?.value ?? "same"),
      {
        initialProps: { value: "same" },
      },
    )

    expect(result.current).toBeUndefined()

    await rerender({ value: "same" })

    expect(result.current).toBe("same")
  })
})
