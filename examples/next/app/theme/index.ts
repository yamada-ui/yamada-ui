import { COLOR_SCHEMES, extendConfig, extendTheme, ThemeSchemes } from '@yamada-ui/react'
import { customConfig } from './config'

export const customTheme = {
  colorSchemes: COLOR_SCHEMES,
  themeSchemes: COLOR_SCHEMES.reduce(
    (prev, colorScheme) => ({
      ...prev,
      [colorScheme]: {
        semantics: {
          colors: {
            primary: `${colorScheme}.500`,
            ...(colorScheme === 'violet' ? { secondary: 'fuchsia.500' } : {}),
          },
          colorSchemes: {
            primary: colorScheme,
            ...(colorScheme === 'violet' ? { secondary: 'fuchsia' } : {}),
          },
        },
      },
    }),
    {} as ThemeSchemes,
  ),
}

export const theme = extendTheme(customTheme)()
export const config = extendConfig(customConfig)

export default theme
