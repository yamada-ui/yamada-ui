import { ComponentStyle } from '@yamada-ui/styled'

export const CloseButton: ComponentStyle = {
  baseStyle: {
    borderRadius: 'md',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
      boxShadow: 'none',
    },
    _hover: {
      bg: ['blackAlpha.100', 'whiteAlpha.100'],
      _disabled: {
        bg: ['initial', 'initial'],
      },
    },
    _active: {
      bg: ['blackAlpha.200', 'whiteAlpha.200'],
      _disabled: {
        bg: ['initial', 'initial'],
      },
    },
  },
  sizes: {
    sm: {
      boxSize: 6,
      fontSize: '2xs',
    },
    md: {
      boxSize: 8,
      fontSize: 'xs',
    },
    lg: {
      boxSize: 10,
      fontSize: 'md',
    },
  },
  defaultProps: {
    size: 'md',
  },
}
