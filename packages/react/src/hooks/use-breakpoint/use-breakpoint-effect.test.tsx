import { page, renderHook } from "#test/browser"
import { useBreakpointEffect } from "./use-breakpoint-effect"

describe("useBreakpointEffect", () => {
  test("Executes callback when breakpoint changes", async () => {
    await page.viewport(600, 800)
    const callback = vi.fn()
    await renderHook(() => useBreakpointEffect(callback, []))
    await vi.waitFor(() => {
      expect(callback).toHaveBeenCalledWith("md")
    })
  })
})
