import { extendConfig, extendTheme, UsageTheme, ThemeSchemes } from "@yamada-ui/react"
import { components } from "./components"
import { customConfig } from "./config"
import { semantics } from "./semantics"
import { globalStyle, resetStyle, layerStyles, textStyles, mdx, otherStyle } from "./styles"
import { tokens } from "./tokens"

const colorSchemes = [
  "gray",
  // 'zinc',
  // 'neutral',
  // 'stone',
  "red",
  "rose",
  "pink",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
]

export const customTheme: UsageTheme = {
  styles: { globalStyle, resetStyle, layerStyles, textStyles, otherStyle, mdx },
  semantics,
  components,
  themeSchemes: colorSchemes.reduce(
    (prev, colorScheme) => ({
      ...prev,
      [colorScheme]: {
        semantics: {
          colors: { primary: `${colorScheme}.500` },
          colorSchemes: { primary: colorScheme },
        },
      },
    }),
    {} as ThemeSchemes,
  ),
  colorSchemes,
  ...tokens,
}

export const theme = extendTheme(customTheme)()

export const config = extendConfig(customConfig)

export default theme
