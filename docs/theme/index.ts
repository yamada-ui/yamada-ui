import { extendConfig, extendTheme, withDefaultColorScheme } from '@yamada-ui/react'
import { components } from './components'
import { customConfig } from './config'
import { globalStyle, resetStyle, layerStyles, textStyles, mdx } from './styles'
import { tokens } from './tokens'
import { colorScheme } from 'configs/site.json'

export const customTheme = {
  styles: { globalStyle, resetStyle, layerStyles, textStyles, mdx },
  components,
  ...tokens,
  semantics: {
    colors: {
      muted: ['blackAlpha.700', 'whiteAlpha.700'],
    },
  },
}

export const theme = extendTheme(customTheme, withDefaultColorScheme({ colorScheme }))()
export const config = extendConfig(customConfig)

export default theme
