import { defineConfig } from "../core"

/**
 * The default config of Yamada UI.
 *
 * @see https://yamada-ui.com/docs/theming/configuration/overview
 */
export const config = defineConfig({
  css: { varPrefix: "ui" },
  breakpoint: { direction: "down", identifier: "@media screen" },
  defaultColorMode: "light",
  defaultThemeScheme: "base",
  notice: { duration: 5000 },
  theme: { responsive: true },
})
