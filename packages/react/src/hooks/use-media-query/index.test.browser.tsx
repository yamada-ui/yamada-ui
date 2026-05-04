import { page, renderHook } from "#test/browser"
import { useMediaQuery } from "."

describe("useMediaQuery", () => {
  test("should return true when media query matches", async () => {
    await page.viewport(600, 800)

    const { result } = await renderHook(() =>
      useMediaQuery("(min-width: 500px)"),
    )

    expect(result.current).toBeTruthy()
  })

  test("should update when media query match status changes", async () => {
    await page.viewport(400, 800)

    const { result } = await renderHook(() =>
      useMediaQuery("(min-width: 500px)"),
    )

    expect(result.current).toBeFalsy()

    await page.viewport(600, 800)

    await vi.waitFor(() => {
      expect(result.current).toBeTruthy()
    })
  })
})
