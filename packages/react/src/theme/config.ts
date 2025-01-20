import { defineConfig } from "../core"

/**
 * The default config of Yamada UI.
 *
 * @see Docs https://yamada-ui.com/styled-system/configure/default-config
 */
export const config = defineConfig({
  css: { varPrefix: "ui" },
  breakpoint: { direction: "down", identifier: "@media screen" },
  initialColorMode: "light",
  initialThemeScheme: "base",
  theme: { responsive: true },
})
