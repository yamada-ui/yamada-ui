import { ComponentMultiStyle, isDefaultColor, UIMultiStyle } from '@yamada-ui/core'
import { transparentizeColor, toneColor } from '@yamada-ui/utils'

export const Table: ComponentMultiStyle = {
  baseStyle: {
    table: {
      w: '100%',
      fontVariantNumeric: 'lining-nums tabular-nums',
      borderCollapse: 'collapse',
    },
    th: {
      fontFamily: 'heading',
      fontWeight: 'bold',
      textAlign: 'start',
      textTransform: 'uppercase',
      letterSpacing: 'wider',
    },
    td: {
      textAlign: 'start',
    },
    caption: {
      fontFamily: 'heading',
      fontWeight: 'medium',
      textAlign: 'center',
    },
  },

  variants: {
    simple: (({
      theme: t,
      colorScheme: s,
      colorStyle: c = 'gray',
      withBorder,
      withColumnBorders,
      highlightOnHover,
    }) => {
      const isGray = c === 'gray'

      return {
        table: {
          ...(withBorder ? { borderWidth: '1px' } : {}),
        },
        th: {
          color: ['gray.600', 'gray.400'],
          borderBottomWidth: '1px',

          '&[data-is-numeric=true]': {
            textAlign: 'end',
          },
          ...(withColumnBorders ? { _notFirst: { borderLeftWidth: '1px' } } : {}),
        },
        td: {
          borderBottomWidth: '1px',

          '&[data-is-numeric=true]': {
            textAlign: 'end',
          },
          ...(withColumnBorders ? { _notFirst: { borderLeftWidth: '1px' } } : {}),
        },
        caption: {
          color: ['gray.600', 'gray.100'],
        },
        tbody: {
          tr: {
            ...(highlightOnHover
              ? {
                  cursor: 'pointer',
                  transitionProperty: 'common',
                  transitionDuration: 'slow',
                  _hover: {
                    bg: isDefaultColor(
                      [
                        transparentizeColor(toneColor(c, 100)(t, s), 0.6)(t, s),
                        transparentizeColor(toneColor(c, 200)(t, s), 0.24)(t, s),
                      ],
                      isGray
                        ? [`gray.200`, `whiteAlpha.300`]
                        : [
                            transparentizeColor(`${c}.100`, 0.6)(t, s),
                            transparentizeColor(`${c}.200`, 0.24)(t, s),
                          ],
                    )(c),
                  },
                }
              : {}),
          },
        },
        tfoot: {
          tr: {
            _last: {
              th: { borderBottomWidth: 0 },
            },
          },
        },
      }
    }) as UIMultiStyle,
    striped: (({
      theme: t,
      colorScheme: s,
      colorStyle: c = 'gray',
      withBorder,
      withColumnBorders,
      highlightOnHover,
    }) => {
      const isGray = c === 'gray'

      return {
        table: {
          ...(withBorder ? { borderWidth: '1px' } : {}),
        },
        th: {
          color: ['gray.600', 'gray.400'],
          borderBottomWidth: '1px',

          '&[data-is-numeric=true]': {
            textAlign: 'end',
          },
          ...(withColumnBorders ? { _notFirst: { borderLeftWidth: '1px' } } : {}),
        },
        td: {
          borderBottomWidth: '1px',

          '&[data-is-numeric=true]': {
            textAlign: 'end',
          },
          ...(withColumnBorders ? { _notFirst: { borderLeftWidth: '1px' } } : {}),
        },
        caption: {
          color: ['gray.600', 'gray.100'],
        },
        tbody: {
          tr: {
            _odd: {
              bg: isDefaultColor(
                [toneColor(c, 50)(t, s), transparentizeColor(toneColor(c, 200)(t, s), 0.12)(t, s)],
                isGray
                  ? [`gray.100`, `whiteAlpha.200`]
                  : [`${c}.50`, transparentizeColor(`${c}.200`, 0.12)(t, s)],
              )(c),
            },
            ...(highlightOnHover
              ? {
                  cursor: 'pointer',
                  transitionProperty: 'common',
                  transitionDuration: 'slow',
                  _hover: {
                    bg: isDefaultColor(
                      [
                        transparentizeColor(toneColor(c, 100)(t, s), 0.6)(t, s),
                        transparentizeColor(toneColor(c, 200)(t, s), 0.24)(t, s),
                      ],
                      isGray
                        ? [`gray.200`, `whiteAlpha.300`]
                        : [
                            transparentizeColor(`${c}.100`, 0.6)(t, s),
                            transparentizeColor(`${c}.200`, 0.24)(t, s),
                          ],
                    )(c),
                  },
                }
              : {}),
          },
        },
        tfoot: {
          tr: {
            _last: {
              th: { borderBottomWidth: 0 },
            },
          },
        },
      }
    }) as UIMultiStyle,
    unstyled: {},
  },

  sizes: {
    sm: {
      th: {
        px: 2,
        py: 1,
        fontSize: 'xs',
        lineHeight: 5,
      },
      td: {
        px: 2,
        py: 1,
        fontSize: 'xs',
        lineHeight: 5,
      },
      caption: {
        mt: 1,
        px: 2,
        py: 1,
        fontSize: 'xs',
      },
    },
    md: {
      th: {
        px: 3,
        py: 2,
        fontSize: 'sm',
        lineHeight: 5,
      },
      td: {
        px: 3,
        py: 2,
        fontSize: 'sm',
        lineHeight: 5,
      },
      caption: {
        mt: 2,
        px: 3,
        py: 2,
        fontSize: 'sm',
      },
    },
    lg: {
      th: {
        px: 4,
        py: 3,
        lineHeight: 6,
      },
      td: {
        px: 4,
        py: 3,
        lineHeight: 6,
      },
      caption: {
        mt: 3,
        px: 4,
        py: 3,
      },
    },
    xl: {
      th: {
        px: 6,
        py: 4,
        fontSize: 'lg',
        lineHeight: 6,
      },
      td: {
        px: 6,
        py: 4,
        fontSize: 'lg',
        lineHeight: 6,
      },
      caption: {
        mt: 4,
        px: 6,
        py: 4,
        fontSize: 'lg',
      },
    },
  },

  defaultProps: {
    variant: 'simple',
    size: 'md',
    colorStyle: 'gray',
  },
}
