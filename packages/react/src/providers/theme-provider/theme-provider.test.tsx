import { act, renderHook } from "../../../test"
import { defaultTheme } from "../../theme"
import { ThemeProvider, useTheme } from "./theme-provider"

describe("ThemeProvider", () => {
  test("provides a theme to child components", () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
      ),
    })

    expect(result.current.theme.colors.blue["50"]).toBe("#e2edfd")
    expect(result.current.theme.fontSizes.md).toBe("1rem")
  })

  test("allows theme updates through changeThemeScheme", () => {
    let themeScheme = "light"

    const { rerender, result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => (
        <ThemeProvider
          config={{ initialThemeScheme: themeScheme }}
          theme={defaultTheme}
        >
          {children}
        </ThemeProvider>
      ),
    })

    act(() => {
      result.current.changeThemeScheme("dark")
    })

    themeScheme = "dark"
    rerender()

    expect(document.documentElement.dataset.theme).toBe("dark")
  })
})
