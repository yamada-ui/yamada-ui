import type { MatchMediaMock } from "@yamada-ui/test"
import { matchMedia } from "@yamada-ui/test"
import { renderHook } from "../../../test"
import { useBreakpointEffect } from "./use-breakpoint-effect"

describe("useBreakpointEffect", () => {
  let mock: MatchMediaMock

  beforeAll(() => {
    mock = matchMedia()
  })
  afterEach(() => {
    mock.clear()
  })

  test("Executes callback when breakpoint changes", () => {
    mock.useMediaQuery("(min-width: 481px) and (max-width: 768px)")
    const callback = vi.fn()
    renderHook(() => useBreakpointEffect(callback, []))
    expect(callback).toHaveBeenCalledWith("md")
  })
})
