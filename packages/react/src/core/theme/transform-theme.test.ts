import type { ThemeConfig, UsageTheme } from "../theme.types"
import { transformTheme } from "."
import { TONES } from "../../utils"
import { pseudos } from "../pseudos"

describe("transformTheme", () => {
  const theme: UsageTheme = {
    animations: {
      gradient: {
        duration: "10s",
        iterationCount: "infinite",
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
        timingFunction: "linear",
      },
      resizeHeight: {
        duration: "10s",
        iterationCount: "infinite",
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
        timingFunction: "linear",
      },
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
    breakpoints: {
      sm: "30em",
      md: "48em",
      lg: "61em",
      xl: "80em",
      "2xl": "90em",
    },
    colors: {
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
      border: ["#dcdcde", "#434248"],
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
    },
    gradients: {
      blue: {
        base: "linear(to-r, blue.300, green.400)",
        md: "linear(to-r, blue.100, green.200)",
        lg: "linear(to-r, blue.200, green.300)",
      },
      green: [
        "linear(to-r, green.200, green.500)",
        "linear(to-r, green.100, green.300)",
      ],
      orange: "linear(to-r, {colors.orange.200}, {yamada})",
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
    },
    semantics: {
      animations: {
        banner: "gradient",
        dot: [
          "gradient",
          {
            duration: "10s",
            iterationCount: "infinite",
            keyframes: {
              "0%": {
                transform: "translateX(0%)",
              },
              "100%": {
                transform: "translateX(400%)",
              },
            },
            timingFunction: "linear",
          },
        ],
        hero: ["gradient", "resizeHeight"],
        resizeWidth: {
          duration: "10s",
          iterationCount: "infinite",
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
          timingFunction: "linear",
        },
      },
      colors: {
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
        primary: ["blue.500", "red.500"],
        secondary: "green.500",
      },
      colorSchemes: {
        primary: ["blue", "red"],
        secondary: "green",
        tertiary: "pink",
      },
      gradients: {
        banner: ["green", "red"],
        hero: "blue",
        pink: "linear(to-r, pink.200, pink.500)",
      },
      spaces: {
        sm: { base: "2", sm: "1" },
        md: { base: "3", sm: "2" },
        lg: { base: "4", sm: "3" },
      },
    },
    sizes: {
      xs: "15rem",
      sm: "20rem",
      md: "24rem",
      lg: "28rem",
      full: "100%",
    },
    spaces: {
      1: { base: "0.25rem", md: "0.125rem" },
      2: { base: "0.5rem", md: "0.25rem" },
      3: { base: "0.75rem", md: "0.375rem" },
      4: { base: "1rem", md: "0.5rem" },
    },
    themeSchemes: {
      blue: {
        colors: {
          border: ["blue", "cyan"],
        },
      },
      red: {
        colors: {
          border: ["{colors.red.500}", "pink"],
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
    blue: "[data-theme=blue] &:not([data-theme]), &[data-theme=blue]",
    red: "[data-theme=red] &:not([data-theme]), &[data-theme=red]",
  }

  test("applies responsive theme schemes correctly", () => {
    const { __cssMap, __cssVars } = transformTheme(theme, config)
    expect(__cssMap["spaces.1"]).toStrictEqual({
      ref: "var(--ui-spaces-1)",
      var: "--ui-spaces-1",
    })
    expect(__cssMap["spaces.2"]).toStrictEqual({
      ref: "var(--ui-spaces-2)",
      var: "--ui-spaces-2",
    })
    expect(__cssMap["spaces.3"]).toStrictEqual({
      ref: "var(--ui-spaces-3)",
      var: "--ui-spaces-3",
    })
    expect(__cssMap["spaces.4"]).toStrictEqual({
      ref: "var(--ui-spaces-4)",
      var: "--ui-spaces-4",
    })
    expect(__cssMap["sizes.full"]).toStrictEqual({
      ref: "var(--ui-sizes-full)",
      var: "--ui-sizes-full",
    })
    expect(__cssMap["sizes.xs"]).toStrictEqual({
      ref: "var(--ui-sizes-xs)",
      var: "--ui-sizes-xs",
    })
    expect(__cssMap["sizes.sm"]).toStrictEqual({
      ref: "var(--ui-sizes-sm)",
      var: "--ui-sizes-sm",
    })
    expect(__cssMap["sizes.md"]).toStrictEqual({
      ref: "var(--ui-sizes-md)",
      var: "--ui-sizes-md",
    })
    expect(__cssMap["sizes.lg"]).toStrictEqual({
      ref: "var(--ui-sizes-lg)",
      var: "--ui-sizes-lg",
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
      ref: "var(--ui-colors-border)",
      var: "--ui-colors-border",
    })
    expect(__cssVars["--ui-colors-border"]).toBe("#dcdcde")
    expect(__cssVars[pseudos._dark]["--ui-colors-border"]).toBe("#434248")
  })

  test("applies responsive and color mode theme schemes correctly", () => {
    const { __cssMap, __cssVars } = transformTheme(theme, config)
    expect(__cssMap["borders.md"]).toStrictEqual({
      ref: "var(--ui-borders-md)",
      var: "--ui-borders-md",
    })
    expect(__cssMap["borders.lg"]).toStrictEqual({
      ref: "var(--ui-borders-lg)",
      var: "--ui-borders-lg",
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
      ref: "var(--ui-spaces-sm)",
      var: "--ui-spaces-sm",
    })
    expect(__cssMap["spaces.md"]).toStrictEqual({
      ref: "var(--ui-spaces-md)",
      var: "--ui-spaces-md",
    })
    expect(__cssMap["spaces.lg"]).toStrictEqual({
      ref: "var(--ui-spaces-lg)",
      var: "--ui-spaces-lg",
    })
    expect(__cssMap["colors.primary"]).toStrictEqual({
      ref: "var(--ui-colors-primary)",
      var: "--ui-colors-primary",
    })
    expect(__cssMap["colors.secondary"]).toStrictEqual({
      ref: "var(--ui-colors-secondary)",
      var: "--ui-colors-secondary",
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
        ref: `var(--ui-colors-pink-${tone})`,
        var: `--ui-colors-pink-${tone}`,
      })
      expect(__cssVars).haveOwnProperty(`--ui-colors-pink-${tone}`)
    })
    TONES.forEach((tone) => {
      expect(__cssMap[`colors.primary.${tone}`]).toStrictEqual({
        ref: `var(--ui-colors-primary-${tone})`,
        var: `--ui-colors-primary-${tone}`,
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
        ref: `var(--ui-colors-secondary-${tone})`,
        var: `--ui-colors-secondary-${tone}`,
      })
      expect(__cssVars[`--ui-colors-secondary-${tone}`]).toBe(
        `var(--ui-colors-green-${tone})`,
      )
    })
    TONES.forEach((tone) => {
      expect(__cssMap[`colors.tertiary.${tone}`]).toStrictEqual({
        ref: `var(--ui-colors-tertiary-${tone})`,
        var: `--ui-colors-tertiary-${tone}`,
      })
      expect(__cssVars[`--ui-colors-tertiary-${tone}`]).toBe(
        `var(--ui-colors-pink-${tone})`,
      )
    })
  })

  test("applies gradient theme schemes correctly", () => {
    const { __cssMap, __cssVars } = transformTheme(theme, config)
    expect(__cssMap["gradients.blue"]).toStrictEqual({
      ref: "var(--ui-gradients-blue)",
      var: "--ui-gradients-blue",
    })
    expect(__cssMap["gradients.green"]).toStrictEqual({
      ref: "var(--ui-gradients-green)",
      var: "--ui-gradients-green",
    })
    expect(__cssMap["gradients.red"]).toStrictEqual({
      ref: "var(--ui-gradients-red)",
      var: "--ui-gradients-red",
    })
    expect(__cssMap["gradients.hero"]).toStrictEqual({
      ref: "var(--ui-gradients-hero)",
      var: "--ui-gradients-hero",
    })
    expect(__cssMap["gradients.banner"]).toStrictEqual({
      ref: "var(--ui-gradients-banner)",
      var: "--ui-gradients-banner",
    })
    expect(__cssMap["gradients.pink"]).toStrictEqual({
      ref: "var(--ui-gradients-pink)",
      var: "--ui-gradients-pink",
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
      ref: "var(--ui-gradients-orange)",
      var: "--ui-gradients-orange",
    })
    expect(__cssVars["--ui-gradients-orange"]).toBe(
      "linear-gradient(to right, var(--ui-colors-orange-200), var(--ui-yamada))",
    )
  })

  test("applies animation theme schemes correctly", () => {
    const { __cssMap, __cssVars } = transformTheme(theme, config)
    expect(__cssMap["animations.gradient"]).toStrictEqual({
      ref: "var(--ui-animations-gradient)",
      var: "--ui-animations-gradient",
    })
    expect(__cssMap["animations.resizeHeight"]).toStrictEqual({
      ref: "var(--ui-animations-resizeHeight)",
      var: "--ui-animations-resizeHeight",
    })
    expect(__cssMap["animations.dot"]).toStrictEqual({
      ref: "var(--ui-animations-dot)",
      var: "--ui-animations-dot",
    })
    expect(__cssMap["animations.resizeWidth"]).toStrictEqual({
      ref: "var(--ui-animations-resizeWidth)",
      var: "--ui-animations-resizeWidth",
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
      ref: "var(--ui-colors-border)",
      var: "--ui-colors-border",
    })
    expect(__cssMap["colors.border"]).toStrictEqual({
      ref: "var(--ui-colors-border)",
      var: "--ui-colors-border",
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
