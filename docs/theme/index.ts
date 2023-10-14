import { Dict, extendConfig, extendTheme, withDefaultColorScheme } from '@yamada-ui/react'
import { components } from './components'
import { customConfig } from './config'
import { semantics } from './semantics'
import { globalStyle, resetStyle, layerStyles, textStyles, mdx, otherStyle } from './styles'
import { tokens } from './tokens'

const colorSchemes = [
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'rose',
  'pink',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
]

export const commonTheme = {
  styles: { globalStyle, resetStyle, layerStyles, textStyles, otherStyle, mdx },
  semantics,
  components,
  colorSchemes,
  ...tokens,
}

export const theme = colorSchemes.reduce((prev, colorScheme) => {
  prev[colorScheme] = extendTheme(
    commonTheme,
    {
      semantics: {
        colors: { primary: `${colorScheme}.500` },
        colorSchemes: {
          primary: colorScheme,
        },
      },
    },
    withDefaultColorScheme({ colorScheme: 'primary' }),
  )()

  return prev
}, {} as Dict)

export const config = extendConfig(customConfig)

export default theme
