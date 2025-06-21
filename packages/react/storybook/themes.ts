import { create } from "storybook/theming"

const sharedTheme = {
  appBorderRadius: 0,
  barSelectedColor: "#4387f4",
  brandTitle: "Yamada UI",
  brandUrl: "https://github.com/yamada-ui/yamada-ui",
  colorPrimary: "#895af6",
  colorSecondary: "#4387f4",
  fontBase:
    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", "游ゴシック体", YuGothic, "YuGothic M", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  fontCode:
    'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
}

export const themes = {
  light: create({
    ...sharedTheme,
    base: "light",
    appBg: "#ffffff",
    appContentBg: "#fafafa",
    barBg: "#ffffff",
    barTextColor: "#171717",
    brandImage:
      "https://raw.githubusercontent.com/yamada-ui/yamada-ui/main/logo/logo-black@2x.png",
    textColor: "#171717",
    textInverseColor: "#171717",
    textMutedColor: "#7f7f7f",
  }),
  dark: create({
    ...sharedTheme,
    base: "dark",
    appBg: "#121212",
    appContentBg: "#0a0b0b",
    barBg: "#121212",
    barTextColor: "#ededed",
    brandImage:
      "https://raw.githubusercontent.com/yamada-ui/yamada-ui/main/logo/logo-white@2x.png",
    textColor: "#ededed",
    textInverseColor: "#ededed",
    textMutedColor: "#999999",
  }),
}
