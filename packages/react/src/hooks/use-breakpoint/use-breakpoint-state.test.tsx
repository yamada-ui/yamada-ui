import { page, renderHook } from "#test/browser"
import { useBreakpointState } from "./use-breakpoint-state"

describe("useBreakpointState", () => {
  afterEach(async () => {
    await page.viewport(1280, 720)
  })

  test("Returns the state corresponding to the current breakpoint", async () => {
    await page.viewport(600, 800)
    const { result } = await renderHook(() =>
      useBreakpointState({ base: "base", md: "md" }),
    )
    expect(result.current[0]).toBe("md")
  })
})
