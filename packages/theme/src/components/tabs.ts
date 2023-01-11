import { ComponentMultiStyle, isDefaultColor, mode } from '@yamada-ui/core'
import { getColor, toneColor, transparentizeColor } from '@yamada-ui/utils'

export const Tabs: ComponentMultiStyle = {
  baseStyle: {
    container: ({ orientation }) => ({
      display: 'flex',
      flexDirection: orientation === 'vertical' ? 'row' : 'column',
    }),
    tabList: ({ align, orientation }) => ({
      flexDirection: orientation === 'vertical' ? 'column' : 'row',
      justifyContent: align === 'center' ? align : `flex-${align}`,
    }),
    tab: ({ isFitted }) => ({
      flex: isFitted ? 1 : undefined,
      whiteSpace: 'nowrap',
      transitionProperty: 'common',
      transitionDuration: 'normal',
      _hover: { opacity: 0.7 },
      _focusVisible: {
        zIndex: 1,
        boxShadow: 'outline',
      },
      _selected: { _hover: { opacity: 1 } },
      _disabled: {
        cursor: 'not-allowed',
        opacity: 0.4,
      },
    }),
    tabPanels: {},
    tabPanel: {
      p: 'md',
    },
  },

  variants: {
    line: ({ theme: t, colorScheme: s, colorStyle: c = 'blue', orientation }) => {
      const isVertical = orientation === 'vertical'

      return {
        tabList: {
          borderColor: 'inherit',
          ...(isVertical ? { borderEndWidth: '1px' } : { borderBottomWidth: '1px' }),
        },
        tab: {
          borderColor: 'transparent',
          _selected: {
            color: isDefaultColor(
              [toneColor(c, 600)(t, s), toneColor(c, 300)(t, s)],
              [`${c}.600`, `${c}.300`],
            )(c),
            borderColor: 'currentColor',
          },
          _active: {
            bg: ['gray.200', 'whiteAlpha.300'],
          },
          _disabled: {
            _active: { bg: 'none' },
          },
          ...(isVertical
            ? { borderEndWidth: '1px', borderEndStyle: 'solid', marginEnd: '-1px' }
            : { borderBottomWidth: '1px', borderBottomStyle: 'solid', marginBottom: '-1px' }),
        },
      }
    },
    sticky: ({ theme: t, colorScheme: s, colorStyle: c = 'blue', orientation }) => {
      const isVertical = orientation === 'vertical'

      return {
        tabList: {
          borderColor: 'inherit',
          ...(isVertical ? { borderEndWidth: '1px' } : { borderBottomWidth: '1px' }),
        },
        tab: {
          borderColor: 'transparent',
          _selected: {
            color: isDefaultColor(
              [toneColor(c, 600)(t, s), toneColor(c, 300)(t, s)],
              [`${c}.600`, `${c}.300`],
            )(c),
            borderColor: 'inherit',
            ...(isVertical
              ? { borderEndColor: ['white', 'black'] }
              : { borderBottomColor: ['white', 'black'] }),
          },
          ...(isVertical
            ? {
                roundedLeft: 'md',
                borderWidth: '1px',
                borderStyle: 'solid',
                marginEnd: '-2px',
              }
            : {
                roundedTop: 'md',
                borderWidth: '1px',
                borderStyle: 'solid',
                marginBottom: '-2px',
              }),
        },
      }
    },
    'sticky-subtle': ({ theme: t, colorScheme: s, colorStyle: c = 'blue', orientation }) => {
      const isVertical = orientation === 'vertical'

      return {
        tabList: {
          borderColor: 'inherit',
          ...(isVertical ? { borderEndWidth: '1px' } : { borderBottomWidth: '1px' }),
        },
        tab: {
          borderColor: 'inherit',
          _notLast: {
            ...(isVertical ? { marginBottom: '-1px' } : { marginEnd: '-1px' }),
          },
          _selected: {
            bg: isDefaultColor(
              [toneColor(c, 100)(t, s), transparentizeColor(toneColor(c, 200)(t, s), 0.16)(t, s)],
              [`${c}.100`, transparentizeColor(`${c}.200`, 0.16)(t, s)],
            )(c),
            color: isDefaultColor(
              [toneColor(c, 800)(t, s), toneColor(c, 200)(t, s)],
              [`${c}.800`, `${c}.200`],
            )(c),
          },
          ...(isVertical
            ? {
                borderWidth: '1px',
                borderStyle: 'solid',
                marginEnd: '-1px',
              }
            : {
                borderWidth: '1px',
                borderStyle: 'solid',
                marginBottom: '-1px',
              }),
        },
      }
    },
    'sticky-solid': ({ theme: t, colorScheme: s, colorStyle: c = 'blue', orientation }) => {
      const isVertical = orientation === 'vertical'

      return {
        tabList: {
          borderColor: 'inherit',
          ...(isVertical ? { borderEndWidth: '1px' } : { borderBottomWidth: '1px' }),
        },
        tab: {
          borderColor: 'inherit',
          _notLast: {
            ...(isVertical ? { marginBottom: '-1px' } : { marginEnd: '-1px' }),
          },
          _selected: {
            bg: isDefaultColor(
              [toneColor(c, 500)(t, s), transparentizeColor(toneColor(c, 500)(t, s), 0.6)(t, s)],
              [`${c}.500`, transparentizeColor(`${c}.500`, 0.6)(t, s)],
            )(c),
            color: [`white`, `whiteAlpha.800`],
          },
          ...(isVertical
            ? {
                borderWidth: '1px',
                borderStyle: 'solid',
                marginEnd: '-1px',
              }
            : {
                borderWidth: '1px',
                borderStyle: 'solid',
                marginBottom: '-1px',
              }),
        },
      }
    },
    rounded: ({ theme: t, colorScheme: s, colorStyle: c = 'blue' }) => {
      const color = isDefaultColor(
        mode(toneColor(c, 500)(t, s), transparentizeColor(toneColor(c, 200)(t, s), 0.8)(t, s))(s),
        mode(getColor(`${c}.500`)(t, s), transparentizeColor(`${c}.200`, 0.8)(t, s))(s),
      )(c)

      return {
        tabList: { gap: 'sm' },
        tab: {
          borderRadius: 'full',
          fontWeight: 'semibold',
          _selected: {
            color,
            boxShadow: `inset 0 0 0px 1px ${color}`,
          },
        },
      }
    },
    'rounded-subtle': ({ theme: t, colorScheme: s, colorStyle: c = 'blue' }) => ({
      tabList: { gap: 'sm' },
      tab: {
        borderRadius: 'full',
        fontWeight: 'semibold',
        color: 'gray.600',
        _selected: {
          bg: isDefaultColor(
            [toneColor(c, 100)(t, s), transparentizeColor(toneColor(c, 200)(t, s), 0.16)(t, s)],
            [`${c}.100`, transparentizeColor(`${c}.200`, 0.16)(t, s)],
          )(c),
          color: isDefaultColor(
            [toneColor(c, 800)(t, s), toneColor(c, 200)(t, s)],
            [`${c}.800`, `${c}.200`],
          )(c),
        },
      },
    }),
    'rounded-solid': ({ theme: t, colorScheme: s, colorStyle: c = 'blue' }) => ({
      tabList: { gap: 'sm' },
      tab: {
        borderRadius: 'full',
        fontWeight: 'semibold',
        _selected: {
          bg: isDefaultColor(
            [toneColor(c, 500)(t, s), transparentizeColor(toneColor(c, 500)(t, s), 0.6)(t, s)],
            [`${c}.500`, transparentizeColor(`${c}.500`, 0.6)(t, s)],
          )(c),
          color: [`white`, `whiteAlpha.800`],
        },
      },
    }),
    unstyled: {},
  },

  sizes: {
    sm: {
      tab: {
        py: 1,
        px: 3,
        fontSize: 'sm',
      },
    },
    md: {
      tab: {
        fontSize: 'md',
        py: 2,
        px: 4,
      },
    },
    lg: {
      tab: {
        fontSize: 'lg',
        py: 3,
        px: 5,
      },
    },
  },

  defaultProps: {
    size: 'md',
    variant: 'line',
    colorStyle: 'blue',
  },
}
