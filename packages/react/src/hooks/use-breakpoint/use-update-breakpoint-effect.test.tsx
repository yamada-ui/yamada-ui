import MatchMediaMock from "vitest-matchmedia-mock"
import { act, renderHook } from "../../../test"
import { useUpdateBreakpointEffect } from "./use-update-breakpoint-effect"

describe("useUpdateBreakpointEffect", () => {
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

  test("Executes callback when breakpoint changes, skipping initial render", () => {
    matchMediaMock.useMediaQuery("(min-width: 481px) and (max-width: 768px)")

    const callback = vi.fn()

    const { rerender } = renderHook(() =>
      useUpdateBreakpointEffect(callback, []),
    )

    expect(callback).not.toHaveBeenCalled()

    act(() => {
      matchMediaMock.useMediaQuery("(min-width: 769px) and (max-width: 976px)")
      rerender()
    })

    expect(callback).toHaveBeenCalledWith("lg")
  })
})
