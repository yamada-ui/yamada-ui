import { page, renderHook } from "#test/browser"
import { useBreakpointEffect } from "./use-breakpoint-effect"

describe("useBreakpointEffect", () => {
  afterEach(async () => {
    await page.viewport(1280, 720)
  })

  test("Executes callback when breakpoint changes", async () => {
    await page.viewport(600, 800)
    const callback = vi.fn()
    await renderHook(() => useBreakpointEffect(callback, []))
    await expect.poll(() => callback).toHaveBeenCalledWith("md")
    await expect.poll(() => callback).toHaveBeenCalledTimes(1)
  })
})
