import { themes } from "@storybook/theming"
import { defaultTheme } from "../src"

const fonts = defaultTheme.fonts
const colors = defaultTheme.colors
const semanticColors = defaultTheme.semanticTokens.colors

const sharedTheme = {
  appBorderRadius: 0,
  barSelectedColor: colors.blue[500],
  brandTitle: "Yamada UI",
  brandUrl: "https://github.com/yamada-ui/yamada-ui",
  colorPrimary: colors.violet[500],
  colorSecondary: colors.blue[500],
  fontBase: fonts.body,
  fontCode: fonts.mono,
}

export const customThemes = {
  light: {
    ...themes.light,
    brandImage:
      "https://raw.githubusercontent.com/yamada-ui/yamada-ui/main/logo/logo-black@2x.png",
    ...sharedTheme,
    base: "light",
    appBg: semanticColors.bg.panel[0],
    appContentBg: semanticColors.bg.base[0],
    barBg: semanticColors.bg.panel[0],
    barTextColor: semanticColors.fg.base[0],
    textColor: semanticColors.fg.base[0],
    textInverseColor: semanticColors.fg.base[0],
    textMutedColor: "#7f7f7f",
  },
  dark: {
    ...themes.dark,
    brandImage:
      "https://raw.githubusercontent.com/yamada-ui/yamada-ui/main/logo/logo-white@2x.png",
    ...sharedTheme,
    base: "dark",
    appBg: semanticColors.bg.panel[1],
    appContentBg: semanticColors.bg.base[1],
    barBg: semanticColors.bg.panel[1],
    barTextColor: semanticColors.fg.base[1],
    textColor: semanticColors.fg.base[1],
    textInverseColor: semanticColors.fg.base[1],
    textMutedColor: "#999999",
  },
}
