import { renderHook } from "#test"
import { noop } from "../../utils"
import { useNumberCounter } from "./use-number-counter"
import { useNumberInput } from "./use-number-input"

describe("number-input mergeProps", () => {
  test("useNumberCounter getButtonProps merges rest and user props", () => {
    const { result } = renderHook(() =>
      useNumberCounter({
        id: "hook-id",
        className: "hook",
        decrement: noop,
        disabled: false,
        increment: noop,
        keepWithinRange: true,
        max: 10,
        min: 0,
      }),
    )

    const merged = result.current.getIncrementProps({
      id: "user-id",
      className: "user",
    })

    expect(merged.id).toBe("user-id")
    expect(String(merged.className)).toContain("hook")
    expect(String(merged.className)).toContain("user")
  })

  test("useNumberInput getInputProps merges field and user props", () => {
    const { result } = renderHook(() =>
      useNumberInput({
        id: "hook-id",
        className: "hook",
        "data-testid": "ni-input",
        defaultValue: 0,
      }),
    )

    const merged = result.current.getInputProps({
      id: "user-id",
      className: "user",
    })

    expect(merged.id).toBe("user-id")
    expect(String(merged.className)).toContain("hook")
    expect(String(merged.className)).toContain("user")
    expect(merged["data-testid"]).toBe("ni-input")
  })
})
