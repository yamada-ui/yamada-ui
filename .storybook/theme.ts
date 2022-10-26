import { defaultTheme } from '@yamada-ui/react'

const baseTheme = {
  brandTitle: 'Yamada UI',
  brandUrl: 'https://github.com/hirotomoyamada/yamada-ui',
  brandImage: 'https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/yamada-ui.png',

  colorPrimary: defaultTheme.colors.green['500'],
  colorSecondary: defaultTheme.colors.blue['500'],

  appBorderRadius: 8,

  fontBase: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  fontCode: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,

  barSelectedColor: defaultTheme.colors.blue['500'],

  inputBorderRadius: 6,
}

export const UITheme = {
  light: {
    ...baseTheme,
    base: 'light',
    appBg: defaultTheme.colors.white,
    textColor: defaultTheme.colors.black,
    textInverseColor: defaultTheme.colors.black,
  },
  dark: {
    ...baseTheme,
    base: 'dark',
    textColor: defaultTheme.colors.white,
    textInverseColor: defaultTheme.colors.white,
  },
}
