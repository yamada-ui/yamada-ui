import { ComponentStyle } from '@yamada-ui/styled'

export const Heading: ComponentStyle = {
  baseStyle: {
    fontFamily: 'heading',
    fontWeight: 'bold',
  },

  sizes: {
    '4xl': {
      fontSize: { base: '7xl', sm: '6xl' },
    },
    '3xl': {
      fontSize: { base: '6xl', sm: '5xl' },
    },
    '2xl': {
      fontSize: { base: '5xl', sm: '4xl' },
    },
    xl: {
      fontSize: { base: '4xl', sm: '3xl' },
    },
    lg: {
      fontSize: { base: '3xl', sm: '2xl' },
    },
    md: { fontSize: 'xl' },
    sm: { fontSize: 'md' },
    xs: { fontSize: 'sm' },
  },

  defaultProps: { size: 'xl' },
}
