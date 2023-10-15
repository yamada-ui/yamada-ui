import { defaultTheme } from '@yamada-ui/react'

const baseTheme = {
  brandTitle: 'Yamada UI',
  brandUrl: 'https://github.com/hirotomoyamada/yamada-ui',
  brandImage:
    'https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/logo-colored@2x.png',

  // Colors
  colorPrimary: defaultTheme.colors.green[500],
  colorSecondary: defaultTheme.colors.blue[500],

  // UI
  appBorderRadius: 0,

  // Toolbar default and active colors
  barSelectedColor: defaultTheme.colors.blue[500],

  // Typography
  fontBase: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  fontCode: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
}

export const UITheme = {
  light: {
    ...baseTheme,
    base: 'light',

    // UI
    appBg: defaultTheme.colors.white,
    appContentBg: defaultTheme.colors.white,

    // Toolbar default and active colors
    barBg: defaultTheme.colors.white,
    barTextColor: defaultTheme.colors.blackAlpha[500],

    // Text colors
    textColor: defaultTheme.colors.black,
    textInverseColor: defaultTheme.colors.black,
  },
  dark: {
    ...baseTheme,
    base: 'dark',

    // UI
    appContentBg: defaultTheme.colors.black,
    appBg: defaultTheme.colors.black,

    // Toolbar default and active colors
    barBg: defaultTheme.colors.black,
    barTextColor: defaultTheme.colors.whiteAlpha[500],

    // Text colors
    textColor: defaultTheme.colors.white,
    textInverseColor: defaultTheme.colors.white,
  },
}
