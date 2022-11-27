import { ComponentStyle, mode, isDefaultColor } from '@yamada-ui/styled'
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
    solid: ({ theme: t, colorScheme: s, colorStyle: c = 'gray' }) => ({
      bg: isDefaultColor(
        [toneColor(c, 500)(t, s), transparentizeColor(toneColor(c, 500)(t, s), 0.6)(t, s)],
        [`${c}.500`, transparentizeColor(`${c}.500`, 0.6)(t, s)],
      )(c),
      color: [`white`, `whiteAlpha.800`],
    }),
    subtle: ({ theme: t, colorScheme: s, colorStyle: c = 'gray' }) => ({
      bg: isDefaultColor(
        [toneColor(c, 100)(t, s), transparentizeColor(toneColor(c, 200)(t, s), 0.16)(t, s)],
        [`${c}.100`, transparentizeColor(`${c}.200`, 0.16)(t, s)],
      )(c),
      color: isDefaultColor(
        [toneColor(c, 800)(t, s), toneColor(c, 200)(t, s)],
        [`${c}.800`, `${c}.200`],
      )(c),
    }),
    outline: ({ theme: t, colorScheme: s, colorStyle: c = 'gray' }) => {
      const color = isDefaultColor(
        mode(toneColor(c, 500)(t, s), transparentizeColor(toneColor(c, 200)(t, s), 0.8)(t, s))(s),
        mode(getColor(`${c}.500`)(t, s), transparentizeColor(`${c}.200`, 0.8)(t, s))(s),
      )(c)

      return {
        color,
        boxShadow: `inset 0 0 0px 1px ${color}`,
      }
    },
  },

  defaultProps: {
    variant: 'subtle',
    colorStyle: 'gray',
  },
}
