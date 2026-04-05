import { page, renderHook } from "#test/browser"
import { useUpdateBreakpointEffect } from "./use-update-breakpoint-effect"

describe("useUpdateBreakpointEffect", () => {
  test("Executes callback when breakpoint changes, skipping initial render", async () => {
    await page.viewport(600, 800)

    const callback = vi.fn()

    const { rerender } = await renderHook(() =>
      useUpdateBreakpointEffect(callback, []),
    )

    expect(callback).not.toHaveBeenCalled()

    await page.viewport(900, 800)
    await rerender()

    await vi.waitFor(() => {
      expect(callback).toHaveBeenCalledWith("lg")
    })
  })
})
