import { ComponentMultiStyle, isDefaultColor } from '@yamada-ui/core'
import { transparentizeColor, toneColor, isGray } from '@yamada-ui/utils'

export const Pagination: ComponentMultiStyle = {
  baseStyle: {
    container: {
      _disabled: {
        cursor: 'not-allowed',
      },
    },
    inner: {
      flex: 1,
    },
    item: {
      px: 1,
      userSelect: 'none',
      color: ['blackAlpha.700', 'whiteAlpha.700'],
      rounded: 'md',
      transitionProperty: 'common',
      transitionDuration: 'slower',
      _selected: { pointerEvents: 'none' },
      _focus: {
        outline: 'none',
      },
      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed',
        boxShadow: 'none',
      },
      _hover: {
        _disabled: {
          bg: ['initial', 'initial'],
        },
      },
      _focusVisible: {
        boxShadow: 'outline',
      },
    },
    first: {},
    last: {},
    prev: {},
    next: {},
    dots: { pointerEvents: 'none' },
  },

  variants: {
    solid: ({ theme: t, colorMode: m, colorScheme: c = 'primary' }) => {
      const isAccessible = c === 'yellow' || c === 'cyan' || c === 'lime'

      return {
        item: {
          border: '1px solid',
          borderColor: 'border',
          _selected: {
            bg: isDefaultColor(
              [toneColor(c, 500)(t, m), toneColor(c, 200)(t, m)],
              isGray(c)
                ? [`${c}.200`, `${c}.700`]
                : [isAccessible ? `${c}.400` : `${c}.500`, `${c}.200`],
            )(c),
            borderColor: isDefaultColor(
              [toneColor(c, 500)(t, m), toneColor(c, 200)(t, m)],
              isGray(c)
                ? [`${c}.200`, `${c}.700`]
                : [isAccessible ? `${c}.400` : `${c}.500`, `${c}.200`],
            )(c),
            color: isGray(c)
              ? undefined
              : isDefaultColor(
                  [`white`, `gray.800`],
                  [isAccessible ? `black` : `white`, `gray.800`],
                )(c),
          },
          _hover: {
            bg: [`gray.200`, `whiteAlpha.100`],
            _disabled: {
              bg: ['initial', 'initial'],
            },
          },
          _active: {
            bg: [`gray.300`, `whiteAlpha.200`],
          },
        },
        dots: {
          border: '0',
        },
      }
    },
    outline: ({ theme: t, colorMode: m, colorScheme: c = 'primary' }) => {
      return {
        item: {
          border: '1px solid',
          borderColor: 'border',
          _selected: {
            bg: isGray(c) ? undefined : 'transparent',
            borderColor: isDefaultColor(
              [toneColor(c, 600)(t, m), toneColor(c, 300)(t, m)],
              isGray(c) ? [`${c}.500`, `${c}.400`] : [`${c}.600`, `${c}.300`],
            )(c),
            color: isDefaultColor(
              [toneColor(c, 600)(t, m), toneColor(c, 200)(t, m)],
              isGray(c) ? [`inherit`, `${c}.400`] : [`${c}.600`, `${c}.200`],
            )(c),
          },
          _hover: {
            bg: ['gray.200', 'whiteAlpha.100'],
            _disabled: {
              bg: ['initial', 'initial'],
            },
          },
          _active: {
            bg: [`gray.300`, `whiteAlpha.200`],
          },
        },
        dots: {
          border: '0',
        },
      }
    },
    ghost: ({ theme: t, colorMode: m, colorScheme: c = 'primary' }) => {
      return {
        item: {
          _selected: {
            bg: isGray(c) ? undefined : 'transparent',
            fontWeight: 'semibold',
            color: isDefaultColor(
              [toneColor(c, 600)(t, m), toneColor(c, 200)(t, m)],
              isGray(c) ? [`inherit`, `${c}.200`] : [`${c}.600`, `${c}.200`],
            )(c),
          },
          _hover: {
            bg: isDefaultColor(
              [
                toneColor(c, 100)(t, m),
                transparentizeColor(toneColor(c, 200)(t, m), 0.12)(t, m),
              ],
              isGray(c)
                ? [`${c}.200`, `whiteAlpha.200`]
                : [`${c}.100`, transparentizeColor(`${c}.200`, 0.12)(t, m)],
            )(c),
          },
          _active: {
            bg: isDefaultColor(
              [
                toneColor(c, 200)(t, m),
                transparentizeColor(toneColor(c, 200)(t, m), 0.24)(t, m),
              ],
              isGray(c)
                ? [`${c}.300`, `whiteAlpha.300`]
                : [`${c}.200`, transparentizeColor(`${c}.200`, 0.24)(t, m)],
            )(c),
          },
        },
      }
    },
    unstyled: {
      container: { gap: 0 },
      inner: { gap: 0 },
      item: { bg: 'none', color: 'inherit', minW: 'auto', minH: 'auto' },
    },
  },

  sizes: {
    xs: {
      container: {
        gap: 'xs',
      },
      inner: {
        gap: 'xs',
      },
      item: {
        minW: 6,
        minH: 6,
        fontSize: 'xs',
      },
    },
    sm: {
      container: {
        gap: 'xs',
      },
      inner: {
        gap: 'xs',
      },
      item: {
        minW: 7,
        minH: 7,
        fontSize: 'sm',
      },
    },
    md: {
      container: {
        gap: 'sm',
      },
      inner: {
        gap: 'sm',
      },
      item: {
        minW: 8,
        minH: 8,
        fontSize: 'md',
      },
    },
    lg: {
      container: {
        gap: 'sm',
      },
      inner: {
        gap: 'sm',
      },
      item: {
        minW: 10,
        minH: 10,
        fontSize: 'lg',
      },
    },
    xl: {
      container: {
        gap: 'md',
      },
      inner: {
        gap: 'md',
      },
      item: {
        minW: 12,
        minH: 12,
        fontSize: 'xl',
      },
    },
  },

  defaultProps: {
    variant: 'solid',
    size: 'md',
    colorScheme: 'primary',
  },
}
