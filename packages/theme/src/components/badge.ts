import { ComponentStyle, mode } from '@yamada-ui/core'
import { transparentizeColor, getColor, isGray } from '@yamada-ui/utils'

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
      bg: [`${c}.500`, transparentizeColor(`${c}.500`, 0.6)(t, m)],
      color: [`white`, `whiteAlpha.800`],
    }),
    subtle: ({ theme: t, colorMode: m, colorScheme: c = 'primary' }) => ({
      bg: [
        isGray(c) ? `${c}.200` : `${c}.100`,
        transparentizeColor(`${c}.200`, 0.16)(t, m),
      ],
      color: [`${c}.800`, `${c}.200`],
    }),
    outline: ({ theme: t, colorMode: m, colorScheme: c = 'primary' }) => {
      const color = mode(
        getColor(`${c}.500`)(t, m),
        transparentizeColor(`${c}.200`, 0.8)(t, m),
      )(m)

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
