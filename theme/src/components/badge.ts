import { ComponentStyle, mode, isDefaultColor } from '@yamada-ui/styled'
import { transparentizeColor, toneColor, getColor } from '@yamada-ui/utils'

export const Badge: ComponentStyle = {
  baseStyle: {
    px: 1,
    textTransform: 'uppercase',
    fontSize: 'xs',
    borderRadius: 'sm',
    fontWeight: 'bold',
  },

  variants: {
    solid: ({ theme: t, colorScheme: c = 'gray' }) => ({
      bg: isDefaultColor(
        [toneColor(c, 500)(t), transparentizeColor(toneColor(c, 500)(t), 0.6)(t)],
        [`${c}.500`, transparentizeColor(`${c}.500`, 0.6)(t)],
      )(c),
      color: [`white`, `whiteAlpha.800`],
    }),
    subtle: ({ theme: t, colorScheme: c = 'gray' }) => ({
      bg: isDefaultColor(
        [toneColor(c, 100)(t), transparentizeColor(toneColor(c, 200)(t), 0.16)(t)],
        [`${c}.100`, transparentizeColor(`${c}.200`, 0.16)(t)],
      )(c),
      color: isDefaultColor(
        [toneColor(c, 800)(t), toneColor(c, 200)(t)],
        [`${c}.800`, `${c}.200`],
      )(c),
    }),
    outline: ({ theme: t, scheme, colorScheme: c = 'gray' }) => {
      const color = isDefaultColor(
        mode(toneColor(c, 500)(t), transparentizeColor(toneColor(c, 200)(t), 0.8)(t))(scheme),
        mode(getColor(t, `${c}.500`), transparentizeColor(`${c}.200`, 0.8)(t))(scheme),
      )(c)

      return {
        color,
        boxShadow: `inset 0 0 0px 1px ${color}`,
      }
    },
  },

  defaultProps: {
    variant: 'subtle',
    colorScheme: 'gray',
  },
}
