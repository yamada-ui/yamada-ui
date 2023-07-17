import { defaultTheme } from '@yamada-ui/react'

const baseTheme = {
  brandTitle: 'Yamada UI',
  brandUrl: 'https://github.com/hirotomoyamada/yamada-ui',
  brandImage:
    'https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/logo-colored@2x.png',
  colorPrimary: defaultTheme.colors.secondary,
  colorSecondary: defaultTheme.colors.primary,
  appBorderRadius: 0,
  fontBase: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  fontCode: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
  barSelectedColor: defaultTheme.colors.primary,
}

export const UITheme = {
  light: {
    ...baseTheme,
    base: 'light',
    appBg: defaultTheme.colors.white,
    appContentBg: defaultTheme.colors.white,
    barBg: defaultTheme.colors.white,
    textColor: defaultTheme.colors.black,
    textInverseColor: defaultTheme.colors.black,
    barTextColor: defaultTheme.colors.blackAlpha[500],
  },
  dark: {
    ...baseTheme,
    base: 'dark',
    appContentBg: defaultTheme.colors.black,
    appBg: defaultTheme.colors.black,
    barBg: defaultTheme.colors.black,
    textColor: defaultTheme.colors.white,
    textInverseColor: defaultTheme.colors.white,
    barTextColor: defaultTheme.colors.whiteAlpha[500],
  },
}
