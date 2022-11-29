import { ComponentStyle, isDefaultColor, mode } from '@yamada-ui/core'
import { shadeColor, toneColor, getColor } from '@yamada-ui/utils'

export const Alert: ComponentStyle = {
  baseStyle: {
    container: {
      px: 4,
      py: 3,
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
    subtle: ({ theme: t, colorScheme: s, colorStyle: c = 'blue' }) => {
      const color = isDefaultColor(
        [toneColor(c, 500)(t, s), toneColor(c, 200)(t, s)],
        [`${c}.500`, `${c}.200`],
      )(c)

      return {
        container: {
          bg: isDefaultColor(
            [toneColor(c, 100)(t, s), shadeColor(toneColor(c, 200)(t, s), 56)(t, s)],
            [`${c}.100`, shadeColor(`${c}.200`, 56)(t, s)],
          )(c),
        },
        icon: { color },
        loading: { color },
      }
    },
    solid: ({ theme: t, colorScheme: s, colorStyle: c = 'blue' }) => ({
      container: {
        bg: isDefaultColor(
          [toneColor(c, 500)(t, s), toneColor(c, 200)(t, s)],
          [`${c}.500`, `${c}.200`],
        )(c),
        color: ['white', 'gray.900'],
      },
    }),
    'left-accent': ({ theme: t, colorScheme: s, colorStyle: c = 'blue' }) => {
      const color = isDefaultColor(
        mode(toneColor(c, 500)(t, s), toneColor(c, 200)(t, s))(s),
        mode(getColor(`${c}.500`)(t, s), getColor(`${c}.200`)(t, s))(s),
      )(c)

      return {
        container: {
          bg: isDefaultColor(
            [toneColor(c, 100)(t, s), shadeColor(toneColor(c, 200)(t, s), 56)(t, s)],
            [`${c}.100`, shadeColor(`${c}.200`, 56)(t, s)],
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
        mode(toneColor(c, 500)(t, s), toneColor(c, 200)(t, s))(s),
        mode(getColor(`${c}.500`)(t, s), getColor(`${c}.200`)(t, s))(s),
      )(c)

      return {
        container: {
          bg: isDefaultColor(
            [toneColor(c, 100)(t, s), shadeColor(toneColor(c, 200)(t, s), 56)(t, s)],
            [`${c}.100`, shadeColor(`${c}.200`, 56)(t, s)],
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
