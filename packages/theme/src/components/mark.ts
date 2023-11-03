import { ComponentStyle, mode } from '@yamada-ui/core'
import { transparentizeColor, getColor } from '@yamada-ui/utils'

export const Mark: ComponentStyle = {
  baseStyle: {
    px: '1',
    py: '1',
  },

  variants: {
    solid: ({ theme: t, colorMode: m, colorScheme: c = 'gray' }) => ({
      bg: [`${c}.500`, transparentizeColor(`${c}.500`, 0.6)(t, m)],
      color: [`white`, `whiteAlpha.800`],
    }),
    subtle: ({ theme: t, colorMode: m, colorScheme: c = 'gray' }) => ({
      bg: [`${c}.100`, transparentizeColor(`${c}.200`, 0.16)(t, m)],
      color: [`black`, `white`],
    }),
    outline: ({ theme: t, colorMode: m, colorScheme: c = 'gray' }) => {
      const color = mode(
        getColor(`${c}.500`)(t, m),
        transparentizeColor(`${c}.200`, 0.8)(t, m),
      )(m)

      return {
        color,
        boxShadow: `inset 0 0 0px 1px ${color}`,
      }
    },
    'text-accent': ({ theme: t, colorMode: m, colorScheme: c = 'gray' }) => ({
      color: [`${c}.500`, transparentizeColor(`${c}.200`, 0.8)(t, m)],
      p: 0,
    }),
    unstyled: {
      p: 0,
    },
  },

  defaultProps: {
    variant: 'subtle',
    colorScheme: 'secondary',
  },
}
