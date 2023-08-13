import { ComponentMultiStyle, isDefaultColor } from '@yamada-ui/core'
import { toneColor, transparentizeColor } from '@yamada-ui/utils'

export const Calendar: ComponentMultiStyle = {
  baseStyle: {
    container: {
      gap: 'md',
    },
    header: {},
    label: {},
    labelIcon: {
      color: ['blackAlpha.500', 'whiteAlpha.500'],
    },
    control: {
      fontSize: '1.25em',
      _hidden: {
        opacity: 0,
        pointerEvents: 'none',
      },
    },
    prev: {},
    next: {},
    content: {},
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
      userSelect: 'none',
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
    solid: ({ theme: t, colorMode: m, colorScheme: c = 'primary' }) => {
      const bg = isDefaultColor(
        [
          toneColor(c, 500)(t, m),
          transparentizeColor(toneColor(c, 500)(t, m), 0.6)(t, m),
        ],
        [`${c}.500`, transparentizeColor(`${c}.500`, 0.6)(t, m)],
      )(c)

      const borderColor = isDefaultColor(
        [
          toneColor(c, 200)(t, m),
          transparentizeColor(toneColor(c, 200)(t, m), 0.6)(t, m),
        ],
        [`${c}.200`, transparentizeColor(`${c}.200`, 0.6)(t, m)],
      )(c)

      return {
        button: {
          _selected: { bg, color: [`white`, `whiteAlpha.800`], _hover: { bg } },
        },
        day: {
          _today: { border: '1px solid', borderColor },
          _selected: {
            bg,
            color: [`white`, `whiteAlpha.800`],
            borderColor: ['transparent', 'transparent'],
            _hover: { bg },
          },
        },
      }
    },
    subtle: ({ theme: t, colorMode: m, colorScheme: c = 'primary' }) => {
      const bg = isDefaultColor(
        [
          toneColor(c, 100)(t, m),
          transparentizeColor(toneColor(c, 200)(t, m), 0.16)(t, m),
        ],
        [`${c}.100`, transparentizeColor(`${c}.200`, 0.16)(t, m)],
      )(c)

      const borderColor = isDefaultColor(
        [
          toneColor(c, 200)(t, m),
          transparentizeColor(toneColor(c, 200)(t, m), 0.6)(t, m),
        ],
        [`${c}.200`, transparentizeColor(`${c}.200`, 0.6)(t, m)],
      )(c)

      const color = isDefaultColor(
        [toneColor(c, 800)(t, m), toneColor(c, 200)(t, m)],
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
      content: {
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
        userSelect: 'auto',
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
      content: {
        w: 56,
      },
      label: {
        h: 8,
      },
      control: {
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
      content: {
        w: '17.5rem',
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
      content: {
        w: '21rem',
      },
      label: {
        h: 12,
      },
      control: {
        fontSize: '1.5em',
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
    full: {
      container: {
        w: 'full',
        fontSize: 'md',
      },
      content: {
        w: 'full',
      },
      label: {
        h: 12,
      },
      control: {
        fontSize: '1.5em',
        w: 12,
        h: 12,
      },
      button: {
        h: 12,
      },
      weekday: {
        w: 'full',
        h: 12,
      },
      day: {
        w: 'full',
        h: 12,
      },
    },
  },

  defaultProps: {
    size: 'md',
    variant: 'solid',
    colorScheme: 'primary',
  },
}
