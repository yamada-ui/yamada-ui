import type { MatchMediaMock } from "@yamada-ui/test"
import { matchMedia } from "@yamada-ui/test"
import { renderHook } from "../../../test"
import { useBreakpointState } from "./use-breakpoint-state"

describe("useBreakpointState", () => {
  let mock: MatchMediaMock

  beforeAll(() => {
    mock = matchMedia()
  })
  afterEach(() => {
    mock.clear()
  })

  test("Returns the state corresponding to the current breakpoint", () => {
    mock.useMediaQuery("(min-width: 481px) and (max-width: 768px)")
    const { result } = renderHook(() =>
      useBreakpointState({ base: "base", md: "md" }),
    )
    expect(result.current[0]).toBe("md")
  })
})
