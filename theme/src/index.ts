import components from './components'
import { config } from './config'
import { globalStyle, layerStyles, textStyles } from './styles'
import tokens from './tokens'

export const defaultTheme = {
  styles: { globalStyle, layerStyles, textStyles },
  components,
  config,
  ...tokens,
}

export type DefaultTheme = typeof defaultTheme

export { resetStyle } from './styles'
export type { Config } from './config'
export { defaultColors } from './tokens'
