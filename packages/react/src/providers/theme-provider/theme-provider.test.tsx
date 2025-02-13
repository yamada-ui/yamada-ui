import type { UsageTheme } from "../../core"
import { render } from "../../../test"
import { act, renderHook } from "../../../test"
import {
  GlobalStyle,
  ResetStyle,
  ThemeProvider,
  useTheme,
} from "./theme-provider"

describe("ThemeProvider", () => {
  const theme: UsageTheme = {
    colors: {
      primary: "#0070f3",
      secondary: "#ff4081",
    },
    fontSizes: {
      sm: "0.875rem",
      md: "1rem",
      lg: "1.25rem",
    },
    styles: {
      globalStyle: {
        body: {
          fontFamily: "Arial",
        },
      },
      resetStyle: {
        body: {
          margin: 0,
          padding: 0,
        },
      },
    },
  }

  test("provides a theme to child components", () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      ),
    })

    expect(result.current.theme.colors.primary).toBe("#0070f3")
    expect(result.current.theme.fontSizes.md).toBe("1rem")
  })

  test("allows theme updates through changeThemeScheme", () => {
    let themeScheme = "light"

    const { rerender, result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => (
        <ThemeProvider
          config={{ initialThemeScheme: themeScheme }}
          theme={theme}
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

  test("ResetStyle applies the expected styles", () => {
    render(
      <ThemeProvider theme={theme}>
        <ResetStyle />
      </ThemeProvider>,
      { withProvider: false },
    )

    expect(document.body).toHaveStyle(`margin: 0; padding: 0;`)
  })

  test("GlobalStyle applies the expected styles", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyle />
      </ThemeProvider>,
      { withProvider: false },
    )

    expect(document.body).toHaveStyle(`font-family: Arial;`)
  })
})
