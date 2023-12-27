import components from "./components"
import { config } from "./config"
import { semantics } from "./semantics"
import { globalStyle, resetStyle, layerStyles, textStyles } from "./styles"
import tokens from "./tokens"

export const defaultTheme = {
  styles: { globalStyle, resetStyle, layerStyles, textStyles },
  semantics,
  components,
  ...tokens,
}

export const baseTheme = {
  styles: { globalStyle, resetStyle, layerStyles, textStyles },
  semantics,
  ...tokens,
}

export const defaultConfig = config

/**
 * The default theme of Yamada UI.
 *
 * @see Docs https://yamada-ui.com/styled-system/theming/default-theme
 */
export type DefaultTheme = typeof defaultTheme

/**
 * The base theme of Yamada UI. It is except for Component's styles.
 */
export type BaseTheme = typeof baseTheme

export default defaultTheme
