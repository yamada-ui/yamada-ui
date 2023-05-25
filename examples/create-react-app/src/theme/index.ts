import components from './components'
import { globalStyle, resetStyle, layerStyles, textStyles } from './styles'
import tokens from './tokens'

export * from './config'

export const customTheme = {
  styles: { globalStyle, resetStyle, layerStyles, textStyles },
  components,
  ...tokens,
}
