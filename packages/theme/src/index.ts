import components from './components'
import { config } from './config'
import { semantics } from './semantics'
import { globalStyle, resetStyle, layerStyles, textStyles } from './styles'
import tokens from './tokens'

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

export type DefaultTheme = typeof defaultTheme

export default defaultTheme
