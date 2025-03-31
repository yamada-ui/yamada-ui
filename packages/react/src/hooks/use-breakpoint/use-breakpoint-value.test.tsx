import type { StyledTheme } from "../../core"
import MatchMediaMock from "vitest-matchmedia-mock"
import { renderHook, styledTheme } from "../../../test"
import { noop } from "../../utils"
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

    expect(result.current(styledTheme, "md")).toBe("md")
  })

  test("Outputs a warning message if theme is undefined", () => {
    const theme = undefined as unknown as StyledTheme

    const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(noop)

    renderHook(() => getBreakpointValue({ base: "md" })(theme, "base"), {
      withProvider: false,
    })

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "getBreakpointValue: `theme` is undefined.",
    )
  })

  test("Outputs a warning message if breakpoints are undefined", () => {
    const theme = {} as StyledTheme

    const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(noop)

    renderHook(() => getBreakpointValue({ base: "md" })(theme, "base"), {
      withProvider: false,
    })
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "getBreakpointValue: `breakpoints` is undefined.",
    )
  })
})
