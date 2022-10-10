import { ComponentStyle } from '../../types'

export const Divider: ComponentStyle = {
  baseStyle: {
    opacity: 0.6,
    borderColor: 'inherit',
  },

  variants: {
    solid: {
      borderStyle: 'solid',
    },
    dashed: {
      borderStyle: 'dashed',
    },
    dotted: {
      borderStyle: 'dotted',
    },
  },

  defaultProps: { variant: 'solid' },
}
