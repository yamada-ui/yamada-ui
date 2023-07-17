import { ComponentStyle, mode, isDefaultColor } from '@yamada-ui/core'
import { transparentizeColor, toneColor, getColor } from '@yamada-ui/utils'

export const Badge: ComponentStyle = {
  baseStyle: {
    px: 1,
    textTransform: 'uppercase',
    fontSize: 'xs',
    rounded: 'sm',
    fontWeight: 'bold',
  },

  variants: {
    solid: ({ theme: t, colorMode: m, colorScheme: c = 'primary' }) => ({
      bg: isDefaultColor(
        [
          toneColor(c, 500)(t, m),
          transparentizeColor(toneColor(c, 500)(t, m), 0.6)(t, m),
        ],
        [`${c}.500`, transparentizeColor(`${c}.500`, 0.6)(t, m)],
      )(c),
      color: [`white`, `whiteAlpha.800`],
    }),
    subtle: ({ theme: t, colorMode: m, colorScheme: c = 'primary' }) => ({
      bg: isDefaultColor(
        [
          toneColor(c, 100)(t, m),
          transparentizeColor(toneColor(c, 200)(t, m), 0.16)(t, m),
        ],
        [`${c}.100`, transparentizeColor(`${c}.200`, 0.16)(t, m)],
      )(c),
      color: isDefaultColor(
        [toneColor(c, 800)(t, m), toneColor(c, 200)(t, m)],
        [`${c}.800`, `${c}.200`],
      )(c),
    }),
    outline: ({ theme: t, colorMode: m, colorScheme: c = 'primary' }) => {
      const color = isDefaultColor(
        mode(
          toneColor(c, 500)(t, m),
          transparentizeColor(toneColor(c, 200)(t, m), 0.8)(t, m),
        )(m),
        mode(
          getColor(`${c}.500`)(t, m),
          transparentizeColor(`${c}.200`, 0.8)(t, m),
        )(m),
      )(c)

      return {
        color,
        boxShadow: `inset 0 0 0px 1px ${color}`,
      }
    },
  },

  defaultProps: {
    variant: 'subtle',
    colorScheme: 'primary',
  },
}
