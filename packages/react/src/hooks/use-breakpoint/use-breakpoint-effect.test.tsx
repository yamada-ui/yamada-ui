import { renderHook } from "#test"
import MatchMediaMock from "vitest-matchmedia-mock"
import { useBreakpointEffect } from "./use-breakpoint-effect"

describe("useBreakpointEffect", () => {
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

  test("Executes callback when breakpoint changes", () => {
    matchMediaMock.useMediaQuery("(min-width: 481px) and (max-width: 768px)")
    const callback = vi.fn()
    renderHook(() => useBreakpointEffect(callback, []))
    expect(callback).toHaveBeenCalledWith("md")
  })
})
