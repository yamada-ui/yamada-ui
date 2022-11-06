import components from './components'
import { config } from './config'
import { globalStyle, layerStyles, textStyles } from './styles'
import tokens from './tokens'

export const defaultTheme = {
  styles: { globalStyle, layerStyles, textStyles },
  components,
  ...tokens,
}

export const defaultConfig = config

export type DefaultTheme = typeof defaultTheme

export { resetStyle } from './styles'
