import { page, renderHook } from "#test/browser"
import { useUpdateBreakpointEffect } from "./use-update-breakpoint-effect"

describe("useUpdateBreakpointEffect", () => {
  afterEach(async () => {
    await page.viewport(1280, 720)
  })

  test("Executes callback when breakpoint changes, skipping initial render", async () => {
    await page.viewport(600, 800)

    const callback = vi.fn()

    const { act } = await renderHook(() =>
      useUpdateBreakpointEffect(callback, []),
    )

    expect(callback).not.toHaveBeenCalled()

    await act(async () => {
      await page.viewport(900, 800)
    })

    await expect.poll(() => callback).toHaveBeenCalledWith("lg")
    await expect.poll(() => callback).toHaveBeenCalledTimes(1)
  })
})
