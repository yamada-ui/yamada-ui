import type { MatchMediaMock } from "@yamada-ui/test"
import { matchMedia } from "@yamada-ui/test"
import { act, renderHook } from "../../../test"
import { useUpdateBreakpointEffect } from "./use-update-breakpoint-effect"

describe("useUpdateBreakpointEffect", () => {
  let mock: MatchMediaMock

  beforeAll(() => {
    mock = matchMedia()
  })
  afterEach(() => {
    mock.clear()
  })

  test("Executes callback when breakpoint changes, skipping initial render", () => {
    mock.useMediaQuery("(min-width: 481px) and (max-width: 768px)")

    const callback = vi.fn()

    const { rerender } = renderHook(() =>
      useUpdateBreakpointEffect(callback, []),
    )

    expect(callback).not.toHaveBeenCalled()

    act(() => {
      mock.useMediaQuery("(min-width: 769px) and (max-width: 976px)")
      rerender()
    })

    expect(callback).toHaveBeenCalledWith("lg")
  })
})
