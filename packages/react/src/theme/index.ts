import { defineTheme } from "../core"
import { config } from "./config"
import { semanticTokens } from "./semantic-tokens"
import { styles } from "./styles"
import { tokens } from "./tokens"

/**
 * The default theme of Yamada UI.
 *
 * @see Docs https://yamada-ui.com/styled-system/theming/default-theme
 */
export const defaultTheme = defineTheme({
  styles,
  ...tokens,
  semanticTokens,
})

export type DefaultTheme = typeof defaultTheme

export const defaultConfig = config

export type DefaultConfig = typeof defaultConfig
