import { ComponentStyle } from '../../types'

export const Heading: ComponentStyle = {
  baseStyle: {
    fontFamily: 'heading',
    fontWeight: 'bold',
  },
  sizes: {
    '4xl': {},
    xl: {
      fontSize: '4xl',
    },
  },
  defaultProps: { size: 'xl' },
}
