import { page, renderHook } from "#test/browser"
import { useBreakpointValue } from "./use-breakpoint-value"

describe("useBreakpointValue", () => {
  test("Returns the value of the current breakpoint when base is md", async () => {
    await page.viewport(600, 800)

    const { result } = await renderHook(() =>
      useBreakpointValue({ base: "base", md: "md" }),
    )

    expect(result.current).toBe("md")
  })
})
