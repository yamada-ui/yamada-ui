import { ComponentMultiStyle, isDefaultColor } from '@yamada-ui/core'
import { isUndefined, toneColor, transparentizeColor } from '@yamada-ui/utils'

export const SegmentedControl: ComponentMultiStyle = {
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
    basic: ({ theme: t, colorScheme: s, colorStyle: c }) => ({
      container: {
        rounded: 'lg',
      },
      active: {
        bg: isUndefined(c)
          ? ['whiteAlpha.700', 'whiteAlpha.100']
          : isDefaultColor(
              [toneColor(c, 500)(t, s), transparentizeColor(toneColor(c, 500)(t, s), 0.6)(t, s)],
              [`${c}.500`, transparentizeColor(`${c}.500`, 0.6)(t, s)],
            )(c),
        rounded: 'md',
      },
      button: {
        color: ['blackAlpha.700', 'whiteAlpha.700'],
        _hover: {
          color: [`blackAlpha.800`, `whiteAlpha.800`],
        },
        _checked: {
          color: [isUndefined(c) ? `blackAlpha.800` : `white`, `whiteAlpha.800`],
        },
      },
    }),
    rounded: ({ theme: t, colorScheme: s, colorStyle: c }) => ({
      container: {
        rounded: 'full',
      },
      active: {
        bg: isUndefined(c)
          ? ['whiteAlpha.700', 'whiteAlpha.100']
          : isDefaultColor(
              [toneColor(c, 500)(t, s), transparentizeColor(toneColor(c, 500)(t, s), 0.6)(t, s)],
              [`${c}.500`, transparentizeColor(`${c}.500`, 0.6)(t, s)],
            )(c),
        rounded: 'full',
      },
      button: {
        color: ['blackAlpha.700', 'whiteAlpha.700'],
        _hover: {
          color: [`blackAlpha.800`, `whiteAlpha.800`],
        },
        _checked: {
          color: [isUndefined(c) ? `blackAlpha.800` : `white`, `whiteAlpha.800`],
        },
      },
    }),
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
