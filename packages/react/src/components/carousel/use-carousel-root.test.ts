import { renderHook } from "#test"
import { useCarousel } from "./use-carousel"

describe("useCarousel getRootProps", () => {
  test("merges hook defaults with user props via mergeProps", () => {
    const { result } = renderHook(() =>
      useCarousel({
        id: "hook-id",
        className: "hook",
        "data-testid": "carousel-root",
      }),
    )

    const merged = result.current.getRootProps({
      id: "user-id",
      className: "user",
    })

    expect(merged.id).toBe("user-id")
    expect(String(merged.className)).toContain("hook")
    expect(String(merged.className)).toContain("user")
    expect(merged["data-testid"]).toBe("carousel-root")
    expect(merged["aria-roledescription"]).toBe("carousel")
  })
})
