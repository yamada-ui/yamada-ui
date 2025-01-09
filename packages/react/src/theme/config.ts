import type { ThemeConfig } from "../core"

export const config: ThemeConfig = {
  css: { varPrefix: "ui" },
  breakpoint: { direction: "down", identifier: "@media screen" },
  initialColorMode: "light",
  initialThemeScheme: "base",
}
