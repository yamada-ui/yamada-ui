import { extendConfig, extendTheme, withDefaultColorScheme } from '@yamada-ui/react'
import { components } from './components'
import { customConfig } from './config'
import { semantics } from './semantics'
import { globalStyle, resetStyle, layerStyles, textStyles, mdx, otherStyle } from './styles'
import { tokens } from './tokens'
import configs from 'configs/site.json'

const { colorScheme } = configs

export const customTheme = {
  styles: { globalStyle, resetStyle, layerStyles, textStyles, otherStyle, mdx },
  semantics,
  components,
  ...tokens,
}

export const theme = extendTheme(customTheme, withDefaultColorScheme({ colorScheme }))()
export const config = extendConfig(customConfig)

export default theme
