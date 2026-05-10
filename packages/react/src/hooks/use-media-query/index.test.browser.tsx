import { page, renderHook } from "#test/browser"
import { useMediaQuery } from "."

describe("useMediaQuery", () => {
  test("returns true immediately when query matches on initial mount", async () => {
    await page.viewport(600, 800)

    const { result, unmount } = await renderHook(() =>
      useMediaQuery("(min-width: 500px)"),
    )

    expect(result.current).toBeTruthy()

    unmount()
  })

  test("returns the current match state and updates on viewport change", async () => {
    await page.viewport(400, 800)

    const { result, unmount } = await renderHook(() =>
      useMediaQuery("(min-width: 500px)"),
    )

    expect(result.current).toBeFalsy()

    await page.viewport(600, 800)

    await vi.waitFor(() => {
      expect(result.current).toBeTruthy()
    })

    unmount()
  })
})
