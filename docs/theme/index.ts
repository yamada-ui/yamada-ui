import type { ThemeSchemes, UsageTheme } from "@yamada-ui/react"
import { COLOR_SCHEMES, extendConfig, extendTheme } from "@yamada-ui/react"
import { components } from "./components"
import { customConfig } from "./config"
import { semantics } from "./semantics"
import {
  globalStyle,
  layerStyles,
  mdx,
  otherStyle,
  resetStyle,
  textStyles,
} from "./styles"
import { tokens } from "./tokens"

export const customTheme: UsageTheme = {
  colorSchemes: COLOR_SCHEMES,
  components,
  semantics,
  styles: { globalStyle, layerStyles, mdx, otherStyle, resetStyle, textStyles },
  themeSchemes: COLOR_SCHEMES.reduce<ThemeSchemes>(
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
    {},
  ),
  ...tokens,
}

export const theme = extendTheme(customTheme)()

export const config = extendConfig(customConfig)

export default theme
