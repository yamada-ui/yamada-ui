import MatchMediaMock from "vitest-matchmedia-mock"
import { renderHook } from "@/test"
import { useBreakpointState } from "./use-breakpoint-state"

describe("useBreakpointState", () => {
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

  test("Returns the state corresponding to the current breakpoint", () => {
    matchMediaMock.useMediaQuery("(min-width: 481px) and (max-width: 768px)")
    const { result } = renderHook(() =>
      useBreakpointState({ base: "base", md: "md" }),
    )
    expect(result.current[0]).toBe("md")
  })
})
