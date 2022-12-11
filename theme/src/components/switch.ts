import { ComponentStyle, isDefaultColor } from '@yamada-ui/core'
import { toneColor, transparentizeColor } from '@yamada-ui/utils'

export const Switch: ComponentStyle = {
  baseStyle: {
    container: {
      _readOnly: { cursor: 'auto' },
      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed',
      },
    },
    track: {
      rounded: 'full',
      bg: ['gray.300', 'whiteAlpha.200'],
      transitionProperty: 'common',
      transitionDuration: 'fast',
      _checked: {
        justifyContent: 'flex-end',
      },
    },
    thumb: {
      rounded: 'inherit',
      bg: 'white',
    },
    label: {
      userSelect: 'none',
    },
  },

  variants: {
    thick: ({ theme: t, colorScheme: s, colorStyle: c = 'blue' }) => ({
      track: {
        p: '1',
        _checked: {
          bg: isDefaultColor(
            [toneColor(c, 500)(t, s), toneColor(c, 400)(t, s)],
            [`${c}.500`, `${c}.400`],
          )(c),
        },
      },
    }),
    thin: ({ theme: t, colorScheme: s, colorStyle: c = 'blue' }) => ({
      track: {
        _checked: {
          bg: isDefaultColor(
            [
              transparentizeColor(toneColor(c, 400)(t, s), 0.7),
              transparentizeColor(toneColor(c, 200)(t, s), 0.6),
            ],
            [transparentizeColor(`${c}.400`, 0.7), transparentizeColor(`${c}.200`, 0.6)],
          )(c),
        },
      },
      thumb: {
        boxShadow: 'dark-md',
        _checked: {
          bg: isDefaultColor(
            [toneColor(c, 500)(t, s), toneColor(c, 400)(t, s)],
            [`${c}.500`, `${c}.400`],
          )(c),
        },
      },
    }),
  },

  sizes: {
    sm: ({ variant: v }) => ({
      track: {
        w: '6',
        h: v === 'thin' ? '2' : undefined,
      },
      thumb: {
        w: '3',
        h: '3',
      },
      label: { fontSize: 'sm' },
    }),
    md: ({ variant: v }) => ({
      track: {
        w: '8',
        h: v === 'thin' ? '3' : undefined,
      },
      thumb: {
        w: '4',
        h: '4',
      },
      label: { fontSize: 'md' },
    }),
    lg: ({ variant: v }) => ({
      track: {
        w: '10',
        h: v === 'thin' ? '4' : undefined,
      },
      thumb: {
        w: '5',
        h: '5',
      },
      label: { fontSize: 'lg' },
    }),
  },

  defaultProps: {
    size: 'md',
    variant: 'thick',
    colorStyle: 'blue',
  },
}
