import components from './components'
import { config } from './config'
import { globalStyle, resetStyle, layerStyles, textStyles } from './styles'
import tokens from './tokens'

export const defaultTheme = {
  styles: { globalStyle, resetStyle, layerStyles, textStyles },
  components,
  ...tokens,
}

export const baseTheme = {
  styles: { globalStyle, resetStyle, layerStyles, textStyles },
  ...tokens,
}

export const defaultConfig = config

export type DefaultTheme = typeof defaultTheme

export default defaultTheme
