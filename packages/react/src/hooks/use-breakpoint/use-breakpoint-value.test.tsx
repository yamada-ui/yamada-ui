import { renderHook, system } from "#test"
import MatchMediaMock from "vitest-matchmedia-mock"
import { getBreakpointValue, useBreakpointValue } from "./use-breakpoint-value"

describe("useBreakpointValue", () => {
  let matchMediaMock: MatchMediaMock

  beforeAll(() => {
    matchMediaMock = new MatchMediaMock()
  })

  afterEach(() => {
    matchMediaMock.clear()
  })

  afterAll(() => {
    matchMediaMock.destroy()
  })

  test("Returns the value of the current breakpoint when base is md", () => {
    const { result } = renderHook(() => useBreakpointValue({ base: "md" }))

    expect(result.current).toBe("md")
  })
})

describe("getBreakpointValue", () => {
  let matchMediaMock: MatchMediaMock

  beforeAll(() => {
    matchMediaMock = new MatchMediaMock()
  })

  afterEach(() => {
    matchMediaMock.clear()
  })

  afterAll(() => {
    matchMediaMock.destroy()
  })

  test("Returns the value of base", () => {
    const { result } = renderHook(() => getBreakpointValue({ base: "md" }))

    expect(result.current(system, "md")).toBe("md")
  })

  test("warns when breakpoints keys array is empty", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(vi.fn())

    const emptySystem = {
      ...system,
      breakpoints: {
        ...system.breakpoints,
        keys: [],
      },
    } as typeof system

    const getValue = getBreakpointValue({ base: "value" })
    getValue(emptySystem, "base")

    expect(warnSpy).toHaveBeenCalledWith(
      "getBreakpointValue: `breakpoints` is undefined.",
    )

    warnSpy.mockRestore()
  })

  test("Returns the value of a specific breakpoint", () => {
    const getValue = getBreakpointValue({
      base: "base-value",
      md: "md-value",
      lg: "lg-value",
    })

    expect(getValue(system, "lg")).toBe("lg-value")
  })

  test("Falls back to a higher-priority breakpoint value", () => {
    const getValue = getBreakpointValue({
      base: "base-value",
      md: "md-value",
    })

    expect(getValue(system, "sm")).toBe("md-value")
  })

  test("Returns base value when no matching breakpoint is found", () => {
    const getValue = getBreakpointValue({
      base: "base-value",
    })

    expect(getValue(system, "base")).toBe("base-value")
  })

  test("Returns undefined when called with default empty values", () => {
    const getValue = getBreakpointValue()

    expect(getValue(system, "md")).toBeUndefined()
  })
})
