import type { BreakpointDirection } from "../../core"
import { page, renderHook } from "#test/browser"
import { extendConfig } from "../../providers/ui-provider"
import { useBreakpointValue } from "./use-breakpoint-value"

describe("useBreakpointValue", () => {
  test("Returns the value of the current breakpoint when base is md", async () => {
    await page.viewport(600, 800)

    const { result } = await renderHook(() =>
      useBreakpointValue({ base: "base", md: "md" }),
    )

    expect(result.current).toBe("md")
  })

  test.each([undefined, "up"] as const)(
    "resolves callback values with direction %s",
    async (direction) => {
      await page.viewport(600, 800)

      const values = vi.fn((direction: BreakpointDirection) => ({
        base: direction,
        md: "md",
      }))
      const { result } = await renderHook(() => useBreakpointValue(values), {
        providerProps: {
          config: direction ? extendConfig({ breakpoint: { direction } }) : {},
        },
      })

      expect(values).toHaveBeenCalledWith(direction ?? "down")
      expect(result.current).toBe(direction === "up" ? "up" : "md")
    },
  )
})
