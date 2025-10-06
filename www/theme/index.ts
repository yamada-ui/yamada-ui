import { DEFAULT_COLOR_SCHEMES, extendTheme } from "@yamada-ui/react"

export const theme = extendTheme({
  animations: {
    "fade-in": {
      direction: "alternate",
      duration: "1s",
      iterationCount: "infinite",
      keyframes: "fade-in",
      timingFunction: "linear",
    },
    gradient: {
      duration: "10s",
      iterationCount: "infinite",
      keyframes: {
        "0%": { bg: "red.500" },
        "20%": { bg: "green.500" },
        "40%": { bg: "purple.500" },
        "60%": { bg: "yellow.500" },
        "80%": { bg: "blue.500" },
        "100%": { bg: "red.500" },
      },
      timingFunction: "linear",
    },
    "slide-to-right-full": {
      duration: "moderate",
      fillMode: "forwards",
      keyframes: {
        "0%": { transform: "translateX(0%)" },
        "100%": { transform: "translateX(100%)" },
      },
      timingFunction: "ease-in-out",
    },
    "slide-to-right-full-reverse": {
      duration: "moderate",
      fillMode: "forwards",
      keyframes: {
        "0%": { transform: "translateX(100%)" },
        "100%": { transform: "translateX(0%)" },
      },
      timingFunction: "ease-in-out",
    },
  },
  fonts: {
    body: '"Inter", "Inter Fallback"',
    heading: '"Inter", "Inter Fallback"',
    mono: '"Geist Mono", "Geist Mono Fallback"',
  },
  styles: {
    globalStyle: {
      body: {
        "--root-header-height": "sizes.14",
        "--space": { base: "spaces.lg", md: "spaces.md" },
      },
      html: {
        scrollBehavior: "smooth",
      },
    },
  },
  themeSchemes: Object.fromEntries(
    DEFAULT_COLOR_SCHEMES.filter((colorScheme) => colorScheme !== "gray").map(
      (colorScheme) => [
        colorScheme,
        {
          semanticTokens: {
            colorSchemes: { primary: colorScheme },
          },
        },
      ],
    ),
  ),
})
