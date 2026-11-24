import type { ThemeConfig } from "../../core"
import { page, renderHook } from "#test/browser"
import { extendConfig, UIProvider } from "../../providers/ui-provider"
import { useUpdateBreakpointEffect } from "./use-update-breakpoint-effect"

describe("useUpdateBreakpointEffect", () => {
  test("reacts to breakpoint and direction changes, skipping initial render", async () => {
    await page.viewport(1500, 800)

    const callback = vi.fn()
    let config: ThemeConfig = {}

    const { rerender } = await renderHook(
      () => useUpdateBreakpointEffect(callback, []),
      { wrapper: (props) => <UIProvider config={config} {...props} /> },
    )

    expect(callback).not.toHaveBeenCalled()

    await page.viewport(768, 800)
    await rerender()

    await vi.waitFor(() => {
      expect(callback).toHaveBeenCalledWith("md", "down")
    })

    config = extendConfig({ breakpoint: { direction: "up" } })
    await rerender()

    await vi.waitFor(() => {
      expect(callback).toHaveBeenLastCalledWith("md", "up")
    })
  })
})
