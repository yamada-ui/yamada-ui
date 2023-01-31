import { ComponentMultiStyle } from '@yamada-ui/core'

export const Carousel: ComponentMultiStyle = {
  baseStyle: {
    container: {
      w: '100%',
    },
    inner: {},
    slide: ({ orientation: o }) => ({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      ...(o === 'vertical' ? { w: '100%' } : { h: '100%' }),
    }),
    control: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      rounded: 'full',
      bg: ['whiteAlpha.200', 'blackAlpha.200'],
      color: [`white`, `black`],
      transitionProperty: 'common',
      transitionDuration: 'slower',
      _focus: {
        outline: 'none',
      },
      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed',
        boxShadow: 'none',
      },
      _readOnly: {
        cursor: 'default',
      },
      _hover: {
        bg: ['whiteAlpha.300', 'blackAlpha.300'],
        _disabled: {
          bg: ['whiteAlpha.200', 'blackAlpha.200'],
        },
      },
      _active: {
        bg: [`whiteAlpha.400`, `blackAlpha.400`],
      },
      _focusVisible: {
        boxShadow: 'outline',
      },
    },
    prev: ({ orientation: o }) => ({
      ...(o === 'vertical'
        ? { left: '50%', top: '4', transform: 'translateX(-50%)' }
        : { top: '50%', left: '4', transform: 'translateY(-50%)' }),
    }),
    next: ({ orientation: o }) => ({
      ...(o === 'vertical'
        ? { left: '50%', bottom: '4', transform: 'translateX(-50%)' }
        : { top: '50%', right: '4', transform: 'translateY(-50%)' }),
    }),
    indicators: ({ orientation: o }) => ({
      gap: 'md',
      ...(o === 'vertical'
        ? {
            py: '4',
            h: '100%',
            top: '50%',
            right: '4',
            transform: 'translateY(-50%)',
          }
        : {
            px: '4',
            w: '100%',
            h: '2',
            left: '50%',
            bottom: '4',
            transform: 'translateX(-50%)',
          }),
    }),
    indicator: ({ orientation: o }) => ({
      rounded: 'full',
      bg: ['whiteAlpha.400', 'blackAlpha.400'],
      _hover: {
        bg: ['whiteAlpha.500', 'blackAlpha.500'],
      },
      _active: {
        bg: [`whiteAlpha.600`, `blackAlpha.600`],
      },
      _selected: {
        bg: [`whiteAlpha.700`, `blackAlpha.700`],
      },
      transitionProperty: 'common',
      transitionDuration: 'slower',
      ...(o === 'vertical' ? { h: '8', right: '4' } : { w: '8', bottom: '4' }),
    }),
  },

  sizes: {
    sm: {
      container: {
        h: 'sm',
      },
      indicators: ({ orientation: o }) => ({
        ...(o === 'vertical' ? { w: '1.5' } : { h: '1.5' }),
      }),
    },
    md: {
      container: {
        h: 'md',
      },
      indicators: ({ orientation: o }) => ({
        ...(o === 'vertical' ? { w: '1.5' } : { h: '1.5' }),
      }),
    },
    lg: {
      container: {
        h: 'lg',
      },
      indicators: ({ orientation: o }) => ({
        ...(o === 'vertical' ? { w: '2' } : { h: '2' }),
      }),
    },
    xl: {
      container: {
        h: 'xl',
      },
      indicators: ({ orientation: o }) => ({
        ...(o === 'vertical' ? { w: '2' } : { h: '2' }),
      }),
    },
  },

  defaultProps: {
    size: 'md',
  },
}
