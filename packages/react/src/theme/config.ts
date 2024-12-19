import type { ThemeConfig } from "../core"

export const config: ThemeConfig = {
  breakpoint: { direction: "down", identifier: "@media screen" },
  initialColorMode: "light",
  initialThemeScheme: "base",
  var: { prefix: "ui" },
}
