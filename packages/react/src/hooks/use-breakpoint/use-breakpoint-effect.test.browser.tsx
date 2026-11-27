import type { ThemeConfig } from "../../core"
import { page, renderHook } from "#test/browser"
import { extendConfig, UIProvider } from "../../providers/ui-provider"
import { useBreakpointEffect } from "./use-breakpoint-effect"

describe("useBreakpointEffect", () => {
  test("executes callback with the direction and reacts to direction changes", async () => {
    await page.viewport(768, 800)
    const callback = vi.fn()
    let config: ThemeConfig = {}
    const { rerender } = await renderHook(
      () => useBreakpointEffect(callback, []),
      { wrapper: (props) => <UIProvider config={config} {...props} /> },
    )
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
