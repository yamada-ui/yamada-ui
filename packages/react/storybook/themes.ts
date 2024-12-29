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
    appBg: colors.white[950],
    appContentBg: colors.white[950],
    barBg: colors.white[950],
    barTextColor: colors.blackAlpha[700],
    textColor: colors.black[950],
    textInverseColor: colors.black[700],
  },
  dark: {
    ...themes.dark,
    brandImage:
      "https://raw.githubusercontent.com/yamada-ui/yamada-ui/main/logo/logo-white@2x.png",
    ...sharedTheme,
    base: "dark",
    appBg: colors.black[950],
    appContentBg: colors.black[950],
    barBg: colors.black[950],
    barTextColor: colors.whiteAlpha[700],
    textColor: colors.white[950],
    textInverseColor: colors.white[700],
  },
}
