import {
  ComponentMultiStyle,
  isDefaultColor,
  UIMultiStyle,
} from '@yamada-ui/core'
import { transparentizeColor, toneColor } from '@yamada-ui/utils'

export const Table: ComponentMultiStyle = {
  baseStyle: {
    container: {},
    table: {
      h: '100%',
      fontVariantNumeric: 'lining-nums tabular-nums',
      borderCollapse: 'collapse',
    },
    tr: {
      _disabled: {
        cursor: 'not-allowed',
        opacity: 0.4,
        _hover: {
          bg: ['initial', 'initial'],
        },
      },
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
    sortIcon: {},
    resizeSeparator: {},
    pagingControl: {
      gridTemplateColumns: '1fr 5fr 1fr',
    },
  },

  variants: {
    simple: (({
      theme: t,
      colorMode: m,
      colorScheme: c = 'gray',
      withBorder,
      withColumnBorders,
      highlightOnSelected,
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
          ...(withColumnBorders
            ? { _notLast: { borderRightWidth: '1px' } }
            : {}),
        },
        td: {
          borderBottomWidth: '1px',

          '&[data-is-numeric=true]': {
            textAlign: 'end',
          },
          ...(withColumnBorders
            ? { _notLast: { borderRightWidth: '1px' } }
            : {}),
        },
        caption: {
          color: ['gray.600', 'gray.100'],
        },
        tbody: {
          tr: {
            ...(highlightOnSelected
              ? {
                  _selected: {
                    bg: isDefaultColor(
                      [
                        transparentizeColor(toneColor(c, 50)(t, m), 0.6)(t, m),
                        transparentizeColor(toneColor(c, 100)(t, m), 0.24)(
                          t,
                          m,
                        ),
                      ],
                      isGray
                        ? [`gray.100`, `whiteAlpha.200`]
                        : [
                            transparentizeColor(`${c}.50`, 0.6)(t, m),
                            transparentizeColor(`${c}.100`, 0.24)(t, m),
                          ],
                    )(c),
                  },
                }
              : {}),
            ...(highlightOnHover
              ? {
                  cursor: 'pointer',
                  transitionProperty: 'common',
                  transitionDuration: 'slow',
                  _hover: {
                    bg: isDefaultColor(
                      [
                        transparentizeColor(toneColor(c, 100)(t, m), 0.6)(t, m),
                        transparentizeColor(toneColor(c, 200)(t, m), 0.24)(
                          t,
                          m,
                        ),
                      ],
                      isGray
                        ? [`gray.200`, `whiteAlpha.300`]
                        : [
                            transparentizeColor(`${c}.100`, 0.6)(t, m),
                            transparentizeColor(`${c}.200`, 0.24)(t, m),
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
      colorMode: m,
      colorScheme: c = 'gray',
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
          ...(withColumnBorders
            ? { _notLast: { borderRightWidth: '1px' } }
            : {}),
        },
        td: {
          borderBottomWidth: '1px',

          '&[data-is-numeric=true]': {
            textAlign: 'end',
          },
          ...(withColumnBorders
            ? { _notLast: { borderRightWidth: '1px' } }
            : {}),
        },
        caption: {
          color: ['gray.600', 'gray.100'],
        },
        tbody: {
          tr: {
            _odd: {
              bg: isDefaultColor(
                [
                  toneColor(c, 50)(t, m),
                  transparentizeColor(toneColor(c, 200)(t, m), 0.12)(t, m),
                ],
                isGray
                  ? [`gray.100`, `whiteAlpha.200`]
                  : [`${c}.50`, transparentizeColor(`${c}.200`, 0.12)(t, m)],
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
                        transparentizeColor(toneColor(c, 100)(t, m), 0.6)(t, m),
                        transparentizeColor(toneColor(c, 200)(t, m), 0.24)(
                          t,
                          m,
                        ),
                      ],
                      isGray
                        ? [`gray.200`, `whiteAlpha.300`]
                        : [
                            transparentizeColor(`${c}.100`, 0.6)(t, m),
                            transparentizeColor(`${c}.200`, 0.24)(t, m),
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
      container: {
        gap: 2,
      },
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
      sortIcon: {
        right: 2,
      },
      pagingControl: {
        gap: 2,
      },
    },
    md: {
      container: {
        gap: 4,
      },
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
      sortIcon: {
        right: 3,
      },
      pagingControl: {
        gap: 4,
      },
    },
    lg: {
      container: {
        gap: 6,
      },
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
      sortIcon: {
        right: 4,
      },
      pagingControl: {
        gap: 6,
      },
    },
    xl: {
      container: {
        gap: 8,
      },
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
      sortIcon: {
        right: 6,
      },
      pagingControl: {
        gap: 8,
      },
    },
  },

  defaultProps: {
    variant: 'simple',
    size: 'md',
    colorScheme: 'gray',
  },
}
