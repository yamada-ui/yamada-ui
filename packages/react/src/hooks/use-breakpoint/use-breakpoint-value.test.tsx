import { renderHook, system } from "#test"
import { noop } from "../../utils"
import { getBreakpointValue } from "./use-breakpoint-value"

describe("getBreakpointValue", () => {
  test("Returns the value of base", () => {
    const { result } = renderHook(() => getBreakpointValue({ base: "md" }))

    expect(result.current(system, "md")).toBe("md")
  })

  test("warns when breakpoints keys is empty", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(noop)
    const emptySystem = {
      ...system,
      breakpoints: { ...system.breakpoints, keys: [] },
    }

    const getValue = getBreakpointValue({ base: "test" })
    const result = getValue(emptySystem, "md")

    expect(warnSpy).toHaveBeenCalledWith(
      "getBreakpointValue: `breakpoints` is undefined.",
    )
    expect(result).toBe("test")

    warnSpy.mockRestore()
  })

  test("returns matching breakpoint value for current breakpoint", () => {
    const getValue = getBreakpointValue({
      base: "base-val",
      md: "md-val",
      lg: "lg-val",
    })
    const result = getValue(system, "lg")

    expect(result).toBe("lg-val")
  })
})
