import {
  extendConfig,
  extendTheme,
  withDefaultColorScheme,
  withDefaultVariant,
} from '@yamada-ui/react'
import { components } from './components'
import { customConfig } from './config'
import { globalStyle, resetStyle, layerStyles, textStyles, mdx } from './styles'
import { tokens } from './tokens'
import configs from 'configs/site.json'

const { colorScheme } = configs

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

export const theme = extendTheme(
  customTheme,
  withDefaultColorScheme({ colorScheme }),
  withDefaultVariant({ variant: 'subtle', components: ['Alert'] }),
)()
export const config = extendConfig(customConfig)

export default theme
