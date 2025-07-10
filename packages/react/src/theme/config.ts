import { defineConfig } from "../core"

/**
 * The default config of Yamada UI.
 *
 * @see https://yamada-ui.com/styled-system/configure/default-config
 */
export const config = defineConfig({
  css: { varPrefix: "ui" },
  breakpoint: { direction: "down", identifier: "@media screen" },
  defaultColorMode: "light",
  defaultThemeScheme: "base",
  theme: { responsive: true },
})
