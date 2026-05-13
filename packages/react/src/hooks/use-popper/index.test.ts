import { renderHook } from "#test"
import { usePopperProps } from "."

describe("usePopperProps", () => {
  test("should correctly split popper props using usePopperProps", () => {
    const props = {
      children: "test",
      color: "red",
      gutter: 12,
      placement: "bottom" as const,
    }

    const { result } = renderHook(() => usePopperProps(props))
    const [popper, rest] = result.current

    expect(popper).toHaveProperty("placement", "bottom")
    expect(popper).toHaveProperty("gutter", 12)
    expect(rest).not.toHaveProperty("placement")
    expect(rest).toHaveProperty("children", "test")
  })

  test("should omit specified keys in usePopperProps", () => {
    const props = {
      gutter: 8,
      placement: "top" as const,
    }

    const { result } = renderHook(() => usePopperProps(props, ["placement"]))
    const [popper] = result.current

    expect(popper).not.toHaveProperty("placement")
    expect(popper).toHaveProperty("gutter", 8)
  })
})
