import { renderHook, act, render } from "@yamada-ui/test"
import {
  GlobalStyle,
  ResetStyle,
  THEME_SCHEME_STORAGE_KEY,
  ThemeProvider,
  ThemeSchemeScript,
  createThemeSchemeManager,
  themeSchemeManager,
  transformTheme,
  useTheme,
} from "../src"

const theme = {
  styles: {
    resetStyle: {
      body: {
        margin: 0,
        padding: 0,
      },
    },
    globalStyle: {
      body: {
        fontFamily: "Arial",
      },
    },
  },
  colors: {
    primary: "#0070f3",
    secondary: "#ff4081",
  },
  fontSizes: {
    sm: "0.875rem",
    md: "1rem",
    lg: "1.25rem",
  },
}

describe("ThemeProvider", () => {
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

    const { result, rerender } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => (
        <ThemeProvider
          theme={theme}
          config={{ initialThemeScheme: themeScheme }}
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

describe("themeModeManager", () => {
  describe("localStorage", () => {
    beforeEach(() => {
      localStorage.clear()
    })

    test("gets initial theme scheme", () => {
      const manager = themeSchemeManager.localStorage
      expect(manager.get()()).toBe("base")
    })

    test("sets and gets theme scheme", () => {
      const manager = themeSchemeManager.localStorage
      manager.set("green")()
      expect(manager.get()()).toBe("green")
    })

    test("returns default value if invalid value is in localStorage", () => {
      localStorage.setItem("colorMode", "invalid")
      const manager = themeSchemeManager.localStorage
      expect(manager.get()()).toBe("base")
    })
  })

  describe("cookieStorage", () => {
    const originalDocumentCookie = document.cookie

    afterEach(() => {
      document.cookie = originalDocumentCookie
    })

    test("gets initial theme scheme", () => {
      const manager = themeSchemeManager.cookieStorage
      expect(manager.get()()).toBe("base")
    })

    test("sets and gets theme scheme", () => {
      const manager = themeSchemeManager.cookieStorage
      manager.set("red")()
      expect(manager.get()()).toBe("red")
    })
  })

  describe("ssr", () => {
    test("gets theme scheme from cookie", () => {
      const cookie = `${THEME_SCHEME_STORAGE_KEY}=blue`
      const manager = themeSchemeManager.ssr(cookie)
      expect(manager.get()(THEME_SCHEME_STORAGE_KEY)).toBe("blue")
    })
  })

  describe("createThemeSchemeManager", () => {
    test("creates manager with localStorage type", () => {
      const manager = createThemeSchemeManager("local")
      expect(manager.type).toBe("localStorage")
    })

    test("creates manager with cookie type", () => {
      const manager = createThemeSchemeManager("cookie")
      expect(manager.type).toBe("cookie")
    })

    test("creates manager with ssr type", () => {
      const manager = createThemeSchemeManager("ssr", "colorMode=dark")
      expect(manager.type).toBe("cookie")
      expect(manager.ssr).toBeTruthy()
    })
  })
})

describe("ThemeSchemeScript", () => {
  test("sets the correct theme scheme on initial render", () => {
    render(<ThemeSchemeScript initialThemeScheme="green" />)

    const scriptTag = document.getElementById("ui-theme-script")

    expect(scriptTag?.textContent).toContain(
      `!(function(){try{var a=function(c){var o=document.documentElement;return o.dataset.theme=c,c},m='green',e='ui-theme-scheme',t=localStorage.getItem(e);t?a(t):localStorage.setItem(e, a(m))}catch(a){}})();`,
    )
  })

  test("change cookie mode", () => {
    render(<ThemeSchemeScript type="cookie" />)

    const scriptTag = document.getElementById("ui-theme-script")

    expect(scriptTag?.textContent).toContain(
      `!(function(){try{var a=function(c){var o=document.documentElement;return o.dataset.theme=c,c},h='base',r='ui-theme-scheme',t=document.cookie.match(new RegExp('(^| )'.concat(r,'=([^;]+)'))),c=t?t[2]:null;c?a(c):(document.cookie=''.concat(r,'=').concat(a(h),'; max-age=31536000; path=/'))}catch(a){}})();`,
    )
  })
})

describe("transformTheme", () => {
  const themeWithSchemes = {
    breakpoints: {
      sm: "30em",
      md: "48em",
      lg: "61em",
      xl: "80em",
      "2xl": "90em",
    },
    themeSchemes: {
      dark: {
        colors: {
          background: "black",
          text: "white",
        },
      },
      light: {
        colors: {
          background: "white",
          text: "black",
        },
      },
    },
  }

  test("applies nested theme schemes correctly", () => {
    const transformedTheme = transformTheme(themeWithSchemes)

    const expectCssVarsDark =
      "[data-theme=dark] &:not([data-theme]), &[data-theme=dark]"
    const expectCssVarsLight =
      "[data-theme=light] &:not([data-theme]), &[data-theme=light]"

    expect(transformedTheme.__cssVars).toHaveProperty(expectCssVarsDark)
    expect(transformedTheme.__cssVars[expectCssVarsDark]).toStrictEqual({
      "--ui-colors-background": "black",
      "--ui-colors-text": "white",
    })

    expect(transformedTheme.__cssVars).toHaveProperty(expectCssVarsLight)
    expect(transformedTheme.__cssVars[expectCssVarsLight]).toStrictEqual({
      "--ui-colors-background": "white",
      "--ui-colors-text": "black",
    })
  })

  test("provides correct CSS variables for nested themes", () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={themeWithSchemes}>{children}</ThemeProvider>
      ),
    })

    const cssVars = result.current.theme.__cssVars

    const expectCssVarsDark =
      "[data-theme=dark] &:not([data-theme]), &[data-theme=dark]"
    const expectCssVarsLight =
      "[data-theme=light] &:not([data-theme]), &[data-theme=light]"

    expect(cssVars).toHaveProperty(expectCssVarsDark)
    expect(cssVars[expectCssVarsDark]).toStrictEqual({
      "--ui-colors-background": "black",
      "--ui-colors-text": "white",
    })

    expect(cssVars).toHaveProperty(expectCssVarsLight)
    expect(cssVars[expectCssVarsLight]).toStrictEqual({
      "--ui-colors-background": "white",
      "--ui-colors-text": "black",
    })
  })
})
