import { DEFAULT_COLOR_SCHEMES, extendTheme } from "@yamada-ui/react"

export const theme = extendTheme({
  fonts: {
    body: "'Inter', 'Inter Fallback'",
    heading: "'Inter', 'Inter Fallback'",
    mono: "'Geist Mono', 'Geist Mono Fallback'",
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
