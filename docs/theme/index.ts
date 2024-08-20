import type { UsageTheme, ThemeSchemes } from "@yamada-ui/react"
import { COLOR_SCHEMES, extendConfig, extendTheme } from "@yamada-ui/react"
import { components } from "./components"
import { customConfig } from "./config"
import { semantics } from "./semantics"
import {
  globalStyle,
  resetStyle,
  layerStyles,
  textStyles,
  mdx,
  otherStyle,
} from "./styles"
import { tokens } from "./tokens"

export const customTheme: UsageTheme = {
  styles: { globalStyle, resetStyle, layerStyles, textStyles, otherStyle, mdx },
  semantics,
  components,
  themeSchemes: COLOR_SCHEMES.reduce(
    (prev, colorScheme) => ({
      ...prev,
      [colorScheme]: {
        semantics: {
          colors: {
            primary: `${colorScheme}.500`,
            ...(colorScheme === "violet" ? { secondary: "fuchsia.500" } : {}),
          },
          colorSchemes: {
            primary: colorScheme,
            ...(colorScheme === "violet" ? { secondary: "fuchsia" } : {}),
          },
        },
      },
    }),
    {} as ThemeSchemes,
  ),
  colorSchemes: COLOR_SCHEMES,
  ...tokens,
}

export const theme = extendTheme(customTheme)()

export const config = extendConfig(customConfig)

export default theme
