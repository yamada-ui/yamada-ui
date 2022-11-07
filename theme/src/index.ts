import components from './components'
import { config } from './config'
import { globalStyle, resetStyle, layerStyles, textStyles } from './styles'
import tokens from './tokens'

export const defaultTheme = {
  styles: { globalStyle, resetStyle, layerStyles, textStyles },
  components,
  ...tokens,
}

export const defaultConfig = config

export type DefaultTheme = typeof defaultTheme
