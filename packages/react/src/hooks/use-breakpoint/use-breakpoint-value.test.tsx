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
})
