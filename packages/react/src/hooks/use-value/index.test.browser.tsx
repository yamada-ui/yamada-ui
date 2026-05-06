import { page, renderHook } from "#test/browser"
import { useValue } from "./"

describe("useValue", () => {
  test("Returns the base value when passing a responsive object", async () => {
    await page.viewport(1500, 800)
    const { result } = await renderHook(() =>
      useValue({ base: "base", md: "md" }),
    )
    expect(result.current).toBe("base")
  })

  test("Returns the correct breakpoint value based on the current screen width", async () => {
    await page.viewport(600, 800)
    const { result } = await renderHook(() =>
      useValue({ base: "base", md: "md" }),
    )
    expect(result.current).toBe("md")
  })
})
