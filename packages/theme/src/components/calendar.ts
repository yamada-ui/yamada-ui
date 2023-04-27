import { ComponentMultiStyle, isDefaultColor } from '@yamada-ui/core'
import { toneColor, transparentizeColor } from '@yamada-ui/utils'

export const Calendar: ComponentMultiStyle = {
  baseStyle: {
    container: {
      gap: 'md',
    },
    header: {},
    label: {
      pointerEvents: 'none',
      _active: {
        pointerEvents: 'auto',
      },
    },
    labelIcon: {
      color: ['blackAlpha.500', 'whiteAlpha.500'],
    },
    control: {
      fontSize: '1.5em',
      _hidden: {
        opacity: 0,
        pointerEvents: 'none',
      },
    },
    prev: {},
    next: {},
    picker: {},
    year: {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
    month: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    button: {
      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed',
        boxShadow: 'none',
        _focusVisible: {
          boxShadow: '0 0 0 3px rgba(125, 125, 125, 0.6)',
        },
      },
    },
    date: {},
    weekday: {
      color: ['blackAlpha.700', 'whiteAlpha.700'],
      justifyContent: 'center',
      alignItems: 'center',
    },
    day: {
      _weekend: {
        color: ['red.400', 'red.300'],
      },
      _outside: {
        color: ['blackAlpha.400', 'whiteAlpha.400'],
      },
      _holiday: {
        color: ['red.400', 'red.300'],
      },
      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed',
        boxShadow: 'none',
        _focusVisible: {
          boxShadow: '0 0 0 3px rgba(125, 125, 125, 0.6)',
        },
      },
    },
  },

  variants: {
    solid: ({ theme: t, colorScheme: s, colorStyle: c = 'blue' }) => {
      const bg = isDefaultColor(
        [toneColor(c, 500)(t, s), transparentizeColor(toneColor(c, 500)(t, s), 0.6)(t, s)],
        [`${c}.500`, transparentizeColor(`${c}.500`, 0.6)(t, s)],
      )(c)

      const borderColor = isDefaultColor(
        [toneColor(c, 200)(t, s), transparentizeColor(toneColor(c, 200)(t, s), 0.6)(t, s)],
        [`${c}.200`, transparentizeColor(`${c}.200`, 0.6)(t, s)],
      )(c)

      return {
        button: {
          _selected: { bg, color: [`white`, `whiteAlpha.800`] },
        },
        day: {
          _today: { border: '1px solid', borderColor },
          _selected: {
            bg,
            color: [`white`, `whiteAlpha.800`],
            borderColor: ['transparent', 'transparent'],
          },
        },
      }
    },
    subtle: ({ theme: t, colorScheme: s, colorStyle: c = 'blue' }) => {
      const bg = isDefaultColor(
        [toneColor(c, 100)(t, s), transparentizeColor(toneColor(c, 200)(t, s), 0.16)(t, s)],
        [`${c}.100`, transparentizeColor(`${c}.200`, 0.16)(t, s)],
      )(c)

      const borderColor = isDefaultColor(
        [toneColor(c, 200)(t, s), transparentizeColor(toneColor(c, 200)(t, s), 0.6)(t, s)],
        [`${c}.200`, transparentizeColor(`${c}.200`, 0.6)(t, s)],
      )(c)

      const color = isDefaultColor(
        [toneColor(c, 800)(t, s), toneColor(c, 200)(t, s)],
        [`${c}.800`, `${c}.200`],
      )(c)

      return {
        button: { _selected: { bg, color } },
        day: {
          _today: { border: '1px solid', borderColor },
          _selected: { bg, color, borderColor: ['transparent', 'transparent'] },
        },
      }
    },
    unstyled: {
      container: {
        gap: 'inherit',
        fontSize: 'inherit',
      },
      picker: {
        w: 'auto',
      },
      label: {
        h: 'auto',
        pointerEvents: 'inherit',
        _hover: {
          bg: 'inherit',
        },
        _active: {
          bg: 'inherit',
          pointerEvents: 'inherit',
        },
      },
      labelIcon: {
        color: 'inherit',
      },
      control: {
        fontSize: 'inherit',
        w: 'auto',
        h: 'auto',
        _hover: {
          bg: 'inherit',
        },
        _active: {
          bg: 'inherit',
        },
        _hidden: {
          opacity: 'inherit',
          pointerEvents: 'inherit',
        },
      },
      button: {
        h: 'auto',
        _hover: {
          bg: 'inherit',
        },
        _active: {
          bg: 'inherit',
        },
        _disabled: {
          opacity: 'inherit',
          cursor: 'inherit',
          boxShadow: 'inherit',
          _focusVisible: {
            boxShadow: 'inherit',
          },
        },
      },
      weekday: {
        color: 'inherit',
        w: 'auto',
        h: 'auto',
      },
      day: {
        w: 'auto',
        h: 'auto',
        _hover: {
          bg: 'inherit',
        },
        _active: {
          bg: 'inherit',
        },
        _weekend: {
          color: 'inherit',
        },
        _outside: {
          color: 'inherit',
        },
        _holiday: {
          color: 'inherit',
        },
        _disabled: {
          opacity: 'inherit',
          cursor: 'inherit',
          boxShadow: 'inherit',
          _focusVisible: {
            boxShadow: 'inherit',
          },
        },
      },
    },
  },

  sizes: {
    sm: {
      container: {
        fontSize: 'xs',
      },
      picker: {
        w: 56,
      },
      label: {
        h: 8,
      },
      control: {
        fontSize: '1.25em',
        w: 8,
        h: 8,
      },
      button: {
        h: 8,
      },
      weekday: {
        w: 8,
        h: 8,
      },
      day: {
        w: 8,
        h: 8,
      },
    },
    md: {
      container: {
        fontSize: 'sm',
      },
      picker: {
        w: 70,
      },
      label: {
        h: 10,
      },
      control: {
        w: 10,
        h: 10,
      },
      button: {
        h: 10,
      },
      weekday: {
        w: 10,
        h: 10,
      },
      day: {
        w: 10,
        h: 10,
      },
    },
    lg: {
      container: {
        fontSize: 'md',
      },
      picker: {
        w: 84,
      },
      label: {
        h: 12,
      },
      control: {
        w: 12,
        h: 12,
      },
      button: {
        h: 12,
      },
      weekday: {
        w: 12,
        h: 12,
      },
      day: {
        w: 12,
        h: 12,
      },
    },
  },

  defaultProps: {
    size: 'md',
    variant: 'solid',
    colorStyle: 'blue',
  },
}
