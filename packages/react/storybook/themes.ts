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
    appBg: "#ffffff",
    appContentBg: "#ffffff",
    barBg: "#ffffff",
    barTextColor: "#171717",
    textColor: "#171717",
    textInverseColor: "#171717",
    textMutedColor: "#7f7f7f",
  },
  dark: {
    ...themes.dark,
    brandImage:
      "https://raw.githubusercontent.com/yamada-ui/yamada-ui/main/logo/logo-white@2x.png",
    ...sharedTheme,
    base: "dark",
    appBg: "#0d0d0d",
    appContentBg: "#0d0d0d",
    barBg: "#0d0d0d",
    barTextColor: "#ededed",
    textColor: "#ededed",
    textInverseColor: "#ededed",
    textMutedColor: "#999999",
  },
}
