import { defineTheme } from "../core"
import { semanticTokens } from "./semantic-tokens"
import { styles } from "./styles"
import { tokens } from "./tokens"

export { config } from "./config"

/**
 * The default theme of Yamada UI.
 *
 * @see https://yamada-ui.com/docs/theming
 */
export const theme = defineTheme({
  styles,
  ...tokens,
  semanticTokens,
})
