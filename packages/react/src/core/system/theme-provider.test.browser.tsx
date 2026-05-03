import type { ThemeScheme } from "./index.types"
import { renderHook } from "#test/browser"
import { useTheme } from "./theme-provider"

describe("ThemeProvider", () => {
  test("provides a theme to child components", async () => {
    const { result } = await renderHook(() => useTheme())

    expect(result.current.theme.colors.blue["50"]).toBe("#e2edfd")
    expect(result.current.theme.fontSizes.md).toBe("1rem")
  })

  test("allows theme updates through changeThemeScheme", async () => {
    const { act, rerender, result } = await renderHook(() => useTheme())

    await act(() => {
      result.current.changeThemeScheme("updated" as ThemeScheme)
    })

    await rerender()

    expect(document.documentElement.dataset.theme).toBe("updated")
  })
})
