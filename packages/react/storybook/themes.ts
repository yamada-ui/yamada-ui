import type { Dict } from "../src"
import { themes } from "@storybook/theming"
import { defaultTheme } from "../src"

const fonts = defaultTheme.fonts as Dict
const colors = defaultTheme.colors as Dict

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
    appBg: colors.white,
    appContentBg: colors.white,
    barBg: colors.white,
    barTextColor: colors.blackAlpha[500],
    textColor: colors.black,
    textInverseColor: colors.black,
  },
  dark: {
    ...themes.dark,
    brandImage:
      "https://raw.githubusercontent.com/yamada-ui/yamada-ui/main/logo/logo-white@2x.png",
    ...sharedTheme,
    base: "dark",
    appBg: colors.black,
    appContentBg: colors.black,
    barBg: colors.black,
    barTextColor: colors.whiteAlpha[500],
    textColor: colors.white,
    textInverseColor: colors.white,
  },
}
