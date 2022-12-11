import { ComponentStyle, isDefaultColor } from '@yamada-ui/core'
import { toneColor } from '@yamada-ui/utils'

export const Radio: ComponentStyle = {
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
      rounded: 'full',
      color: 'white',
      _checked: {
        _before: {
          content: `""`,
          display: 'inline-block',
          w: '70%',
          h: '70%',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          rounded: 'full',
          bg: isDefaultColor(
            [toneColor(c, 500)(t, s), toneColor(c, 200)(t, s)],
            [`${c}.500`, `${c}.200`],
          )(c),
        },
        _hover: {
          _before: {
            bg: isDefaultColor(
              [toneColor(c, 600)(t, s), toneColor(c, 300)(t, s)],
              [`${c}.600`, `${c}.300`],
            )(c),
          },
        },
        _disabled: {
          borderColor: ['gray.200', 'transparent'],
          _before: {
            bg: 'gray.200',
          },
          _dark: {
            _before: {
              bg: 'whiteAlpha.300',
            },
          },
        },
      },
      _disabled: {
        bg: ['gray.100', 'whiteAlpha.100'],
        borderColor: ['gray.100', 'transparent'],
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
      icon: { boxSize: '3' },
      label: { fontSize: 'sm' },
    },
    md: {
      icon: { boxSize: '4' },
      label: { fontSize: 'md' },
    },
    lg: {
      icon: { boxSize: '5' },
      label: { fontSize: 'lg' },
    },
  },

  defaultProps: {
    size: 'md',
    colorStyle: 'blue',
  },
}
