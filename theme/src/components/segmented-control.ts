import { ComponentStyle } from '@yamada-ui/core'

export const SegmentedControl: ComponentStyle = {
  baseStyle: {
    container: {
      p: '1',
      bg: ['blackAlpha.200', 'whiteAlpha.50'],
      _readOnly: { cursor: 'auto' },
      _disabled: { cursor: 'not-allowed' },
    },
    active: {
      transitionProperty: 'common',
      transitionDuration: 'normal',
      boxShadow: 'md',
    },
    button: {
      transitionProperty: 'common',
      transitionDuration: 'slower',
      fontWeight: 'semibold',
      whiteSpace: 'nowrap',
      _focusVisible: {
        boxShadow: 'outline',
      },
      _readOnly: { cursor: 'auto' },
      _disabled: { opacity: 0.4, cursor: 'not-allowed' },
    },
  },

  variants: {
    basic: {
      container: {
        rounded: 'md',
      },
      active: {
        bg: ['whiteAlpha.700', 'whiteAlpha.100'],
        rounded: 'md',
      },
      button: {
        color: ['blackAlpha.700', 'whiteAlpha.700'],
        _hover: {
          color: ['black', 'white'],
        },
        _checked: {
          color: ['black', 'white'],
        },
      },
    },
    'basic-subtle': ({ theme: t, colorScheme: s, colorStyle: c = 'blue' }) => ({}),
    'basic-solid': ({ theme: t, colorScheme: s, colorStyle: c = 'blue' }) => ({}),
    rounded: {
      container: {
        rounded: 'full',
      },
      active: {
        bg: ['whiteAlpha.700', 'whiteAlpha.100'],
        rounded: 'full',
      },
      button: {
        color: ['blackAlpha.700', 'whiteAlpha.700'],
        _hover: {
          color: ['black', 'white'],
        },
        _checked: {
          color: ['black', 'white'],
        },
      },
    },
    'rounded-subtle': ({ theme: t, colorScheme: s, colorStyle: c = 'blue' }) => ({}),
    'rounded-solid': ({ theme: t, colorScheme: s, colorStyle: c = 'blue' }) => ({}),
  },

  sizes: {
    sm: {
      container: { minW: 'xs' },
      button: { py: '1', px: '2', fontSize: 'sm' },
    },
    md: {
      container: { minW: 'sm' },
      button: { py: '1.5', px: '3', fontSize: 'md' },
    },
    lg: {
      container: { minW: 'md' },
      button: { py: '2', px: '4' },
    },
  },

  defaultProps: {
    variant: 'basic',
    size: 'md',
  },
}
