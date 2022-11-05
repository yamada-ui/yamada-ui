import { ComponentStyle, isDefaultColor, mode } from '@yamada-ui/styled'
import { transparentizeColor, toneColor, getColor } from '@yamada-ui/utils'

export const Alert: ComponentStyle = {
  baseStyle: {
    container: {
      px: 4,
      py: 4,
      rounded: 'md',
    },
    icon: {
      flexShrink: 0,
      marginEnd: 3,
      boxSize: 5,
    },
    loading: {
      flexShrink: 0,
      marginEnd: 3,
      fontSize: 'xl',
    },
    title: {
      marginEnd: 2,
      fontWeight: 'bold',
      lineHeight: 5,
    },
    description: {
      lineHeight: 5,
    },
  },

  variants: {
    subtle: ({ theme: t, colorStyle: c = 'blue' }) => {
      const color = isDefaultColor(
        [toneColor(c, 500)(t), toneColor(c, 200)(t)],
        [`${c}.500`, `${c}.200`],
      )(c)

      return {
        container: {
          bg: isDefaultColor(
            [toneColor(c, 100)(t), transparentizeColor(toneColor(c, 200)(t), 0.16)(t)],
            [`${c}.100`, transparentizeColor(`${c}.200`, 0.16)(t)],
          )(c),
        },
        icon: { color },
        loading: { color },
      }
    },
    solid: ({ theme: t, colorStyle: c = 'blue' }) => ({
      container: {
        bg: isDefaultColor(
          [toneColor(c, 500)(t), toneColor(c, 200)(t)],
          [`${c}.500`, `${c}.200`],
        )(c),
        color: ['white', 'gray.900'],
      },
    }),
    'left-accent': ({ theme: t, colorScheme: s, colorStyle: c = 'blue' }) => {
      const color = isDefaultColor(
        mode(toneColor(c, 500)(t), toneColor(c, 200)(t))(s),
        mode(getColor(t, `${c}.500`), getColor(t, `${c}.200`))(s),
      )(c)

      return {
        container: {
          bg: isDefaultColor(
            [toneColor(c, 100)(t), transparentizeColor(toneColor(c, 200)(t), 0.16)(t)],
            [`${c}.100`, transparentizeColor(`${c}.200`, 0.16)(t)],
          )(c),
          pl: 3,
          borderLeft: `0.25rem solid ${color}`,
          rounded: 4,
        },
        icon: { color },
      }
    },
    'top-accent': ({ theme: t, colorScheme: s, colorStyle: c = 'blue' }) => {
      const color = isDefaultColor(
        mode(toneColor(c, 500)(t), toneColor(c, 200)(t))(s),
        mode(getColor(t, `${c}.500`), getColor(t, `${c}.200`))(s),
      )(c)

      return {
        container: {
          bg: isDefaultColor(
            [toneColor(c, 100)(t), transparentizeColor(toneColor(c, 200)(t), 0.16)(t)],
            [`${c}.100`, transparentizeColor(`${c}.200`, 0.16)(t)],
          )(c),
          pt: 3,
          borderTop: `0.25rem solid ${color}`,
          rounded: 4,
        },
        icon: { color },
      }
    },
  },

  defaultProps: {
    variant: 'subtle',
    colorStyle: 'blue',
  },
}
