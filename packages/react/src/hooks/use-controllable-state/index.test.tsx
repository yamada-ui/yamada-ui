import { renderHook } from "#test"
import { useControllableEventState, useControllableState } from "./"

describe("useControllableEventState", () => {
  test("returns defaultValue in uncontrolled mode", () => {
    const { result } = renderHook(() =>
      useControllableEventState<string, HTMLInputElement>({
        defaultValue: "initial",
      }),
    )

    expect(result.current[0]).toBe("initial")
  })

  test("prioritizes value over defaultValue in controlled mode", () => {
    const { result } = renderHook(() =>
      useControllableEventState<string, HTMLInputElement>({
        defaultValue: "initial",
        value: "controlled",
      }),
    )

    expect(result.current[0]).toBe("controlled")
  })
})

describe("useControllableState", () => {
  test("returns defaultValue in uncontrolled mode", () => {
    const { result } = renderHook(() =>
      useControllableState<string>({
        defaultValue: "initial",
      }),
    )

    expect(result.current[0]).toBe("initial")
  })

  test("prioritizes value over defaultValue in controlled mode", () => {
    const { result } = renderHook(() =>
      useControllableState<string>({
        defaultValue: "initial",
        value: "controlled",
      }),
    )

    expect(result.current[0]).toBe("controlled")
  })
})
