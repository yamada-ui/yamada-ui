import { ComponentStyle, isDefaultColor } from '@yamada-ui/core'
import { shadeColor, toneColor } from '@yamada-ui/utils'

export const Indicator: ComponentStyle = {
  baseStyle: ({ withBorder }) => ({
    zIndex: 'kurillin',
    rounded: 'full',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    outline: 0,
    whiteSpace: 'nowrap',
    ...(withBorder
      ? {
          borderWidth: '0.2em',
          borderColor: ['white', 'black'],
        }
      : {}),
  }),

  sizes: {
    sm: { minH: 2, minW: 2, fontSize: 'xs', px: 1, lineHeight: 1.6 },
    md: { minH: 3, minW: 3, fontSize: 'sm', px: 1.5, lineHeight: 1.5 },
    lg: { minH: 4, minW: 4, fontSize: 'md', px: 2, lineHeight: 1.4 },
  },

  variants: {
    solid: ({ theme: t, colorMode: m, colorScheme: c = 'primary' }) => ({
      bg: isDefaultColor(
        [toneColor(c, 500)(t, m), toneColor(c, 200)(t, m)],
        [`${c}.500`, `${c}.200`],
      )(c),
      color: ['white', 'gray.900'],
    }),

    subtle: ({ theme: t, colorMode: m, colorScheme: c = 'primary' }) => ({
      bg: isDefaultColor(
        [
          toneColor(c, 100)(t, m),
          shadeColor(toneColor(c, 200)(t, m), 56)(t, m),
        ],
        [`${c}.100`, shadeColor(`${c}.200`, 56)(t, m)],
      )(c),
      color: isDefaultColor(
        [toneColor(c, 500)(t, m), toneColor(c, 200)(t, m)],
        [`${c}.500`, `${c}.200`],
      )(c),
    }),
  },

  defaultProps: {
    size: 'md',
    variant: 'solid',
    colorScheme: 'primary',
  },
}
