import { ComponentStyle, isDefaultColor } from '@yamada-ui/core'
import { toneColor } from '@yamada-ui/utils'

export const Checkbox: ComponentStyle = {
  baseStyle: {
    container: {
      _readOnly: { cursor: 'auto' },
      _disabled: { cursor: 'not-allowed' },
    },
    icon: ({ theme: t, colorScheme: s, colorStyle: c = 'blue' }) => ({
      transitionProperty: 'box-shadow',
      transitionDuration: 'normal',
      border: '2px solid',
      borderColor: 'inherit',
      color: 'white',
      _checked: {
        bg: isDefaultColor(
          [toneColor(c, 500)(t, s), toneColor(c, 200)(t, s)],
          [`${c}.500`, `${c}.200`],
        )(c),
        borderColor: isDefaultColor(
          [toneColor(c, 500)(t, s), toneColor(c, 200)(t, s)],
          [`${c}.500`, `${c}.200`],
        )(c),
        color: ['white', 'gray.900'],
        _hover: {
          bg: isDefaultColor(
            [toneColor(c, 600)(t, s), toneColor(c, 300)(t, s)],
            [`${c}.600`, `${c}.300`],
          )(c),
          borderColor: isDefaultColor(
            [toneColor(c, 600)(t, s), toneColor(c, 300)(t, s)],
            [`${c}.600`, `${c}.300`],
          )(c),
        },
        _disabled: {
          borderColor: ['gray.200', 'transparent'],
          bg: ['gray.200', 'whiteAlpha.300'],
          color: ['gray.500', 'whiteAlpha.500'],
        },
      },
      _indeterminate: {
        bg: isDefaultColor(
          [toneColor(c, 500)(t, s), toneColor(c, 200)(t, s)],
          [`${c}.500`, `${c}.200`],
        )(c),
        borderColor: isDefaultColor(
          [toneColor(c, 500)(t, s), toneColor(c, 200)(t, s)],
          [`${c}.500`, `${c}.200`],
        )(c),
        color: ['white', 'gray.900'],
      },
      _disabled: {
        bg: ['gray.100', 'whiteAlpha.100'],
        borderColor: ['gray.100', 'transparent'],
      },
      _focusVisible: {
        boxShadow: 'outline',
      },
      _invalid: {
        borderColor: ['red.500', 'red.300'],
      },
    }),
    label: {
      userSelect: 'none',
      _disabled: { opacity: 0.4 },
    },
  },

  sizes: {
    sm: {
      icon: { boxSize: '3', rounded: 'sm', fontSize: '3xs' },
      label: { fontSize: 'sm' },
    },
    md: {
      icon: { boxSize: '4', rounded: 'base', fontSize: '2xs' },
      label: { fontSize: 'md' },
    },
    lg: {
      icon: { boxSize: '5', rounded: 'base', fontSize: '2xs' },
      label: { fontSize: 'lg' },
    },
  },

  defaultProps: {
    size: 'md',
    colorStyle: 'blue',
  },
}
