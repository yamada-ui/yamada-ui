import type { ThemeScheme } from "../../core"
import { act, renderHook } from "../../../test"
import { useTheme } from "./theme-provider"

describe("ThemeProvider", () => {
  test("provides a theme to child components", () => {
    const { result } = renderHook(() => useTheme())

    expect(result.current.theme.colors.blue["50"]).toBe("#e2edfd")
    expect(result.current.theme.fontSizes.md).toBe("1rem")
  })

  test("allows theme updates through changeThemeScheme", () => {
    const { rerender, result } = renderHook(() => useTheme())

    act(() => {
      result.current.changeThemeScheme("updated" as ThemeScheme)
    })

    rerender()

    expect(document.documentElement.dataset.theme).toBe("updated")
  })
})
