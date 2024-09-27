import { renderHook, act, render } from "@yamada-ui/test"
import { TONES } from "@yamada-ui/utils"
import type { ThemeConfig, UsageTheme } from "../src"
import {
  GlobalStyle,
  ResetStyle,
  THEME_SCHEME_STORAGE_KEY,
  ThemeProvider,
  ThemeSchemeScript,
  createThemeSchemeManager,
  pseudos,
  themeSchemeManager,
  transformTheme,
  useTheme,
} from "../src"

describe("ThemeProvider", () => {
  const theme: UsageTheme = {
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

  test("provides a theme to child components", () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      ),
    })

    expect(result.current.theme.colors?.primary).toBe("#0070f3")
    expect(result.current.theme.fontSizes?.md).toBe("1rem")
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
  const theme: UsageTheme = {
    breakpoints: {
      sm: "30em",
      md: "48em",
      lg: "61em",
      xl: "80em",
      "2xl": "90em",
    },
    borders: {
      md: [
        { base: "2px solid #000", sm: "1px solid #000" },
        { base: "2px solid #FFF", sm: "1px solid #FFF" },
      ],
      lg: {
        base: ["3px solid #000", "3px solid #FFF"],
        sm: ["2px solid #000", "2px solid #FFF"],
      },
    },
    colors: {
      border: ["#dcdcde", "#434248"],
      red: {
        50: "#fdeae8",
        100: "#fbd9d5",
        200: "#f6b2ac",
        300: "#f28c82",
        400: "#ee6a5d",
        500: "#ea4334",
        600: "#de2817",
        700: "#b42013",
        800: "#8a190f",
        900: "#66120b",
        950: "#530f09",
      },
      blue: {
        50: "#e2edfd",
        100: "#cfe0fc",
        200: "#adcbfa",
        300: "#8bb5f8",
        400: "#659cf6",
        500: "#4387f4",
        600: "#186bf2",
        700: "#0c59d4",
        800: "#0a47a9",
        900: "#07357d",
        950: "#062c6a",
      },
      green: {
        50: "#e0f5e6",
        100: "#d0f1d9",
        200: "#a9e5b9",
        300: "#86da9c",
        400: "#5fce7d",
        500: "#3cc360",
        600: "#31a04f",
        700: "#28813f",
        800: "#1d5e2e",
        900: "#133e1f",
        950: "#0d2b15",
      },
      orange: {
        50: "#fef0e6",
        100: "#fee4d2",
        200: "#fdc7a1",
        300: "#fbac74",
        400: "#fa9247",
        500: "#f97415",
        600: "#e06106",
        700: "#b34d05",
        800: "#863a03",
        900: "#5e2902",
        950: "#461e02",
      },
    },
    spaces: {
      1: { base: "0.25rem", md: "0.125rem" },
      2: { base: "0.5rem", md: "0.25rem" },
      3: { base: "0.75rem", md: "0.375rem" },
      4: { base: "1rem", md: "0.5rem" },
    },
    sizes: {
      full: "100%",
      xs: "15rem",
      sm: "20rem",
      md: "24rem",
      lg: "28rem",
    },
    gradients: {
      blue: {
        base: "linear(to-r, blue.300, green.400)",
        lg: "linear(to-r, blue.200, green.300)",
        md: "linear(to-r, blue.100, green.200)",
      },
      green: [
        "linear(to-r, green.200, green.500)",
        "linear(to-r, green.100, green.300)",
      ],
      red: [
        {
          base: "linear(to-r, red.200, red.500)",
          sm: "linear(to-r, red.100, red.300)",
        },
        {
          base: "linear(to-r, red.300, red.600)",
          sm: "linear(to-r, red.200, red.400)",
        },
      ],
      orange: "linear(to-r, $colors.orange.200, $hoge)",
    },
    animations: {
      gradient: {
        keyframes: {
          "0%": {
            bg: "red.500",
          },
          "25%": {
            bg: "green.500",
          },
          "50%": {
            bg: "blue.500",
          },
          "75%": {
            bg: "green.500",
          },
          "100%": {
            bg: "red.500",
          },
        },
        duration: "10s",
        iterationCount: "infinite",
        timingFunction: "linear",
      },
      resizeHeight: {
        keyframes: {
          "0%": {
            h: "xs",
          },
          "50%": {
            h: "md",
          },
          "100%": {
            h: "xs",
          },
        },
        duration: "10s",
        iterationCount: "infinite",
        timingFunction: "linear",
      },
    },
    semantics: {
      spaces: {
        sm: { base: "2", sm: "1" },
        md: { base: "3", sm: "2" },
        lg: { base: "4", sm: "3" },
      },
      colors: {
        primary: ["blue.500", "red.500"],
        secondary: "green.500",
        pink: {
          50: "#fde8ed",
          100: "#fcd9e3",
          200: "#f9b9ca",
          300: "#f693ad",
          400: "#f37295",
          500: "#f0517c",
          600: "#ec275c",
          700: "#d81347",
          800: "#ae0f39",
          900: "#880c2d",
          950: "#710a25",
        },
      },
      gradients: {
        hero: "blue",
        banner: ["green", "red"],
        pink: "linear(to-r, pink.200, pink.500)",
      },
      animations: {
        hero: ["gradient", "resizeHeight"],
        banner: "gradient",
        dot: [
          "gradient",
          {
            keyframes: {
              "0%": {
                transform: "translateX(0%)",
              },
              "100%": {
                transform: "translateX(400%)",
              },
            },
            duration: "10s",
            iterationCount: "infinite",
            timingFunction: "linear",
          },
        ],
        resizeWidth: {
          keyframes: {
            "0%": {
              w: "full",
            },
            "50%": {
              w: "50%",
            },
            "100%": {
              w: "full",
            },
          },
          duration: "10s",
          iterationCount: "infinite",
          timingFunction: "linear",
        },
      },
      colorSchemes: {
        primary: ["blue", "red"],
        secondary: "green",
        tertiary: "pink",
      },
    },
    themeSchemes: {
      red: {
        colors: {
          border: ["$colors.red.500", "pink"],
        },
      },
      blue: {
        colors: {
          border: ["blue", "cyan"],
        },
      },
    },
  }

  const config: ThemeConfig = {
    theme: { responsive: true },
  }

  const queries = {
    sm: "@media screen and (max-width: 480px)",
    md: "@media screen and (max-width: 768px)",
    lg: "@media screen and (max-width: 976px)",
  }

  const themeQueries = {
    red: "[data-theme=red] &:not([data-theme]), &[data-theme=red]",
    blue: "[data-theme=blue] &:not([data-theme]), &[data-theme=blue]",
  }

  test("applies responsive theme schemes correctly", () => {
    const { __cssMap, __cssVars } = transformTheme(theme, config)
    expect(__cssMap["spaces.1"]).toStrictEqual({
      var: "--ui-spaces-1",
      ref: "var(--ui-spaces-1)",
    })
    expect(__cssMap["spaces.2"]).toStrictEqual({
      var: "--ui-spaces-2",
      ref: "var(--ui-spaces-2)",
    })
    expect(__cssMap["spaces.3"]).toStrictEqual({
      var: "--ui-spaces-3",
      ref: "var(--ui-spaces-3)",
    })
    expect(__cssMap["spaces.4"]).toStrictEqual({
      var: "--ui-spaces-4",
      ref: "var(--ui-spaces-4)",
    })
    expect(__cssMap["sizes.full"]).toStrictEqual({
      var: "--ui-sizes-full",
      ref: "var(--ui-sizes-full)",
    })
    expect(__cssMap["sizes.xs"]).toStrictEqual({
      var: "--ui-sizes-xs",
      ref: "var(--ui-sizes-xs)",
    })
    expect(__cssMap["sizes.sm"]).toStrictEqual({
      var: "--ui-sizes-sm",
      ref: "var(--ui-sizes-sm)",
    })
    expect(__cssMap["sizes.md"]).toStrictEqual({
      var: "--ui-sizes-md",
      ref: "var(--ui-sizes-md)",
    })
    expect(__cssMap["sizes.lg"]).toStrictEqual({
      var: "--ui-sizes-lg",
      ref: "var(--ui-sizes-lg)",
    })
    expect(__cssVars["--ui-spaces-1"]).toBe("0.25rem")
    expect(__cssVars["--ui-spaces-2"]).toBe("0.5rem")
    expect(__cssVars["--ui-spaces-3"]).toBe("0.75rem")
    expect(__cssVars["--ui-spaces-4"]).toBe("1rem")
    expect(__cssVars["--ui-sizes-full"]).toBe("100%")
    expect(__cssVars["--ui-sizes-xs"]).toBe("15rem")
    expect(__cssVars["--ui-sizes-sm"]).toBe("20rem")
    expect(__cssVars["--ui-sizes-md"]).toBe("24rem")
    expect(__cssVars["--ui-sizes-lg"]).toBe("28rem")
    expect(__cssVars[queries.md]["--ui-spaces-1"]).toBe("0.125rem")
    expect(__cssVars[queries.md]["--ui-spaces-2"]).toBe("0.25rem")
    expect(__cssVars[queries.md]["--ui-spaces-3"]).toBe("0.375rem")
    expect(__cssVars[queries.md]["--ui-spaces-4"]).toBe("0.5rem")
  })

  test("applies color mode theme schemes correctly", () => {
    const { __cssMap, __cssVars } = transformTheme(theme, config)
    expect(__cssMap["colors.border"]).toStrictEqual({
      var: "--ui-colors-border",
      ref: "var(--ui-colors-border)",
    })
    expect(__cssVars["--ui-colors-border"]).toBe("#dcdcde")
    expect(__cssVars[pseudos._dark]["--ui-colors-border"]).toBe("#434248")
  })

  test("applies responsive and color mode theme schemes correctly", () => {
    const { __cssMap, __cssVars } = transformTheme(theme, config)
    expect(__cssMap["borders.md"]).toStrictEqual({
      var: "--ui-borders-md",
      ref: "var(--ui-borders-md)",
    })
    expect(__cssMap["borders.lg"]).toStrictEqual({
      var: "--ui-borders-lg",
      ref: "var(--ui-borders-lg)",
    })
    expect(__cssVars["--ui-borders-md"]).toBe("2px solid #000")
    expect(__cssVars[queries.sm]["--ui-borders-md"]).toBe("1px solid #000")
    expect(__cssVars[pseudos._dark]["--ui-borders-md"]).toBe("2px solid #FFF")
    expect(__cssVars[pseudos._dark][queries.sm]["--ui-borders-md"]).toBe(
      "1px solid #FFF",
    )
    expect(__cssVars["--ui-borders-lg"]).toBe("3px solid #000")
    expect(__cssVars[pseudos._dark]["--ui-borders-lg"]).toBe("3px solid #FFF")
    expect(__cssVars[queries.sm]["--ui-borders-lg"]).toBe("2px solid #000")
    expect(__cssVars[queries.sm][pseudos._dark]["--ui-borders-lg"]).toBe(
      "2px solid #FFF",
    )
  })

  test("applies semantic theme schemes correctly", () => {
    const { __cssMap, __cssVars } = transformTheme(theme, config)
    expect(__cssMap["spaces.sm"]).toStrictEqual({
      var: "--ui-spaces-sm",
      ref: "var(--ui-spaces-sm)",
    })
    expect(__cssMap["spaces.md"]).toStrictEqual({
      var: "--ui-spaces-md",
      ref: "var(--ui-spaces-md)",
    })
    expect(__cssMap["spaces.lg"]).toStrictEqual({
      var: "--ui-spaces-lg",
      ref: "var(--ui-spaces-lg)",
    })
    expect(__cssMap["colors.primary"]).toStrictEqual({
      var: "--ui-colors-primary",
      ref: "var(--ui-colors-primary)",
    })
    expect(__cssMap["colors.secondary"]).toStrictEqual({
      var: "--ui-colors-secondary",
      ref: "var(--ui-colors-secondary)",
    })
    expect(__cssVars["--ui-spaces-sm"]).toBe("var(--ui-spaces-2)")
    expect(__cssVars["--ui-spaces-md"]).toBe("var(--ui-spaces-3)")
    expect(__cssVars["--ui-spaces-lg"]).toBe("var(--ui-spaces-4)")
    expect(__cssVars["--ui-colors-primary"]).toBe("var(--ui-colors-blue-500)")
    expect(__cssVars["--ui-colors-secondary"]).toBe(
      "var(--ui-colors-green-500)",
    )
    expect(__cssVars[queries.sm]["--ui-spaces-sm"]).toBe("var(--ui-spaces-1)")
    expect(__cssVars[queries.sm]["--ui-spaces-md"]).toBe("var(--ui-spaces-2)")
    expect(__cssVars[queries.sm]["--ui-spaces-lg"]).toBe("var(--ui-spaces-3)")
    expect(__cssVars[pseudos._dark]["--ui-colors-primary"]).toBe(
      "var(--ui-colors-red-500)",
    )
    TONES.forEach((tone) => {
      expect(__cssMap[`colors.pink.${tone}`]).toStrictEqual({
        var: `--ui-colors-pink-${tone}`,
        ref: `var(--ui-colors-pink-${tone})`,
      })
      expect(__cssVars).haveOwnProperty(`--ui-colors-pink-${tone}`)
    })
    TONES.forEach((tone) => {
      expect(__cssMap[`colors.primary.${tone}`]).toStrictEqual({
        var: `--ui-colors-primary-${tone}`,
        ref: `var(--ui-colors-primary-${tone})`,
      })
      expect(__cssVars[`--ui-colors-primary-${tone}`]).toBe(
        `var(--ui-colors-blue-${tone})`,
      )
      expect(__cssVars[pseudos._dark][`--ui-colors-primary-${tone}`]).toBe(
        `var(--ui-colors-red-${tone})`,
      )
    })
    TONES.forEach((tone) => {
      expect(__cssMap[`colors.secondary.${tone}`]).toStrictEqual({
        var: `--ui-colors-secondary-${tone}`,
        ref: `var(--ui-colors-secondary-${tone})`,
      })
      expect(__cssVars[`--ui-colors-secondary-${tone}`]).toBe(
        `var(--ui-colors-green-${tone})`,
      )
    })
    TONES.forEach((tone) => {
      expect(__cssMap[`colors.tertiary.${tone}`]).toStrictEqual({
        var: `--ui-colors-tertiary-${tone}`,
        ref: `var(--ui-colors-tertiary-${tone})`,
      })
      expect(__cssVars[`--ui-colors-tertiary-${tone}`]).toBe(
        `var(--ui-colors-pink-${tone})`,
      )
    })
  })

  test("applies gradient theme schemes correctly", () => {
    const { __cssMap, __cssVars } = transformTheme(theme, config)
    expect(__cssMap["gradients.blue"]).toStrictEqual({
      var: "--ui-gradients-blue",
      ref: "var(--ui-gradients-blue)",
    })
    expect(__cssMap["gradients.green"]).toStrictEqual({
      var: "--ui-gradients-green",
      ref: "var(--ui-gradients-green)",
    })
    expect(__cssMap["gradients.red"]).toStrictEqual({
      var: "--ui-gradients-red",
      ref: "var(--ui-gradients-red)",
    })
    expect(__cssMap["gradients.hero"]).toStrictEqual({
      var: "--ui-gradients-hero",
      ref: "var(--ui-gradients-hero)",
    })
    expect(__cssMap["gradients.banner"]).toStrictEqual({
      var: "--ui-gradients-banner",
      ref: "var(--ui-gradients-banner)",
    })
    expect(__cssMap["gradients.pink"]).toStrictEqual({
      var: "--ui-gradients-pink",
      ref: "var(--ui-gradients-pink)",
    })
    expect(__cssVars["--ui-gradients-blue"]).toBe(
      "linear-gradient(to right, var(--ui-colors-blue-300), var(--ui-colors-green-400))",
    )
    expect(__cssVars[queries.lg]["--ui-gradients-blue"]).toBe(
      "linear-gradient(to right, var(--ui-colors-blue-200), var(--ui-colors-green-300))",
    )
    expect(__cssVars[queries.md]["--ui-gradients-blue"]).toBe(
      "linear-gradient(to right, var(--ui-colors-blue-100), var(--ui-colors-green-200))",
    )
    expect(__cssVars["--ui-gradients-green"]).toBe(
      "linear-gradient(to right, var(--ui-colors-green-200), var(--ui-colors-green-500))",
    )
    expect(__cssVars[pseudos._dark]["--ui-gradients-green"]).toBe(
      "linear-gradient(to right, var(--ui-colors-green-100), var(--ui-colors-green-300))",
    )
    expect(__cssVars["--ui-gradients-red"]).toBe(
      "linear-gradient(to right, var(--ui-colors-red-200), var(--ui-colors-red-500))",
    )
    expect(__cssVars[queries.sm]["--ui-gradients-red"]).toBe(
      "linear-gradient(to right, var(--ui-colors-red-100), var(--ui-colors-red-300))",
    )
    expect(__cssVars[pseudos._dark]["--ui-gradients-red"]).toBe(
      "linear-gradient(to right, var(--ui-colors-red-300), var(--ui-colors-red-600))",
    )
    expect(__cssVars[pseudos._dark][queries.sm]["--ui-gradients-red"]).toBe(
      "linear-gradient(to right, var(--ui-colors-red-200), var(--ui-colors-red-400))",
    )
    expect(__cssVars["--ui-gradients-hero"]).toBe("var(--ui-gradients-blue)")
    expect(__cssVars["--ui-gradients-banner"]).toBe("var(--ui-gradients-green)")
    expect(__cssVars[pseudos._dark]["--ui-gradients-banner"]).toBe(
      "var(--ui-gradients-red)",
    )
    expect(__cssVars["--ui-gradients-pink"]).toBe(
      "linear-gradient(to right, var(--ui-colors-pink-200), var(--ui-colors-pink-500))",
    )
  })

  test("applies interpolation theme token", () => {
    const { __cssMap, __cssVars } = transformTheme(theme, config)
    expect(__cssMap["gradients.orange"]).toStrictEqual({
      var: "--ui-gradients-orange",
      ref: "var(--ui-gradients-orange)",
    })
    expect(__cssVars["--ui-gradients-orange"]).toBe(
      "linear-gradient(to right, var(--ui-colors-orange-200), var(--ui-hoge))",
    )
  })

  test("applies animation theme schemes correctly", () => {
    const { __cssMap, __cssVars } = transformTheme(theme, config)
    expect(__cssMap["animations.gradient"]).toStrictEqual({
      var: "--ui-animations-gradient",
      ref: "var(--ui-animations-gradient)",
    })
    expect(__cssMap["animations.resizeHeight"]).toStrictEqual({
      var: "--ui-animations-resizeHeight",
      ref: "var(--ui-animations-resizeHeight)",
    })
    expect(__cssMap["animations.dot"]).toStrictEqual({
      var: "--ui-animations-dot",
      ref: "var(--ui-animations-dot)",
    })
    expect(__cssMap["animations.resizeWidth"]).toStrictEqual({
      var: "--ui-animations-resizeWidth",
      ref: "var(--ui-animations-resizeWidth)",
    })
    expect(__cssVars["--ui-animations-gradient"]).toMatch(
      /animation-.* 10s linear 0s infinite normal none running/,
    )
    expect(__cssVars["--ui-animations-resizeHeight"]).toMatch(
      /animation-.* 10s linear 0s infinite normal none running/,
    )
    expect(__cssVars["--ui-animations-resizeWidth"]).toMatch(
      /animation-.* 10s linear 0s infinite normal none running/,
    )
    expect(__cssVars["--ui-animations-hero"]).toBe(
      "var(--ui-animations-gradient),var(--ui-animations-resizeHeight)",
    )
    expect(__cssVars["--ui-animations-banner"]).toBe(
      "var(--ui-animations-gradient)",
    )
    expect(__cssVars["--ui-animations-dot"]).toMatch(
      /var\(--ui-animations-gradient\),animation-.* 10s linear 0s infinite normal none running/,
    )
  })

  test("applies nested theme schemes correctly", () => {
    const { __cssMap, __cssVars } = transformTheme(theme, config)

    expect(__cssVars).toHaveProperty(themeQueries.red)
    expect(__cssVars).toHaveProperty(themeQueries.blue)
    expect(__cssMap["colors.border"]).toStrictEqual({
      var: "--ui-colors-border",
      ref: "var(--ui-colors-border)",
    })
    expect(__cssMap["colors.border"]).toStrictEqual({
      var: "--ui-colors-border",
      ref: "var(--ui-colors-border)",
    })
    expect(__cssVars[themeQueries.red]["--ui-colors-border"]).toBe(
      "var(--ui-colors-red-500)",
    )
    expect(
      __cssVars[themeQueries.red][pseudos._dark]["--ui-colors-border"],
    ).toBe("pink")
    expect(__cssVars[themeQueries.blue]["--ui-colors-border"]).toBe("blue")
    expect(
      __cssVars[themeQueries.blue][pseudos._dark]["--ui-colors-border"],
    ).toBe("cyan")
  })
})