import { extendConfig, extendTheme } from '@yamada-ui/react'
import components from './components'
import { globalStyle, resetStyle, layerStyles, textStyles } from './styles'
import tokens from './tokens'
import { customConfig } from './config'

export const customTheme = {
  styles: { globalStyle, resetStyle, layerStyles, textStyles },
  components,
  ...tokens,
}

export const theme = extendTheme(customTheme)()
export const config = extendConfig(customConfig)

export default theme
