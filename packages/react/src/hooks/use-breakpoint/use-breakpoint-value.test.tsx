import { page, renderHook, system } from "#test/browser"
import { noop } from "../../utils"
import { getBreakpointValue, useBreakpointValue } from "./use-breakpoint-value"

describe("useBreakpointValue", () => {
  afterEach(async () => {
    await page.viewport(1280, 720)
  })

  test("Returns the value of the current breakpoint when base is md", async () => {
    const { result } = await renderHook(() =>
      useBreakpointValue({ base: "md" }),
    )
    expect(result.current).toBe("md")
  })
})

describe("getBreakpointValue", () => {
  test("Returns the value of base", async () => {
    const { result } = await renderHook(() =>
      getBreakpointValue({ base: "md" }),
    )
    expect(result.current(system, "md")).toBe("md")
  })

  test("warns when breakpoints keys is empty", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(noop)
    const emptySystem = {
      ...system,
      breakpoints: { ...system.breakpoints, keys: [] },
    }

    const getValue = getBreakpointValue({ base: "test" })
    const result = getValue(emptySystem as any, "md")

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
