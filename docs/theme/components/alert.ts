import {
  ComponentMultiStyle,
  isDefaultColor,
  mode,
  shadeColor,
  toneColor,
  getColor,
} from '@yamada-ui/react'

export const Alert: ComponentMultiStyle = {
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
    basic: ({ theme: t, colorMode: m, colorScheme: c = 'primary' }) => {
      const color = isDefaultColor(
        mode(toneColor(c, 500)(t, m), toneColor(c, 200)(t, m))(m),
        mode(getColor(`${c}.500`)(t, m), getColor(`${c}.200`)(t, m))(m),
      )(c)

      return {
        container: {
          bg: ['white', 'black'],
          borderWidth: '1px',
        },
        icon: { color },
        loading: { color },
      }
    },
    subtle: ({ theme: t, colorMode: m, colorScheme: c = 'primary' }) => {
      const color = isDefaultColor(
        [toneColor(c, 400)(t, m), toneColor(c, 200)(t, m)],
        [`${c}.400`, `${c}.200`],
      )(c)

      return {
        container: {
          bg: isDefaultColor(
            [toneColor(c, 50)(t, m), shadeColor(toneColor(c, 100)(t, m), 78)(t, m)],
            [`${c}.100`, shadeColor(`${c}.100`, 78)(t, m)],
          )(c),
        },
        icon: { color },
        loading: { color },
      }
    },
    solid: ({ theme: t, colorMode: m, colorScheme: c = 'primary' }) => ({
      container: {
        bg: isDefaultColor(
          [toneColor(c, 500)(t, m), toneColor(c, 200)(t, m)],
          [`${c}.500`, `${c}.200`],
        )(c),
        color: ['white', 'gray.900'],
      },
    }),
    'island-accent': ({ theme: t, colorMode: m, colorScheme: c = 'primary' }) => {
      const color = isDefaultColor(
        mode(toneColor(c, 500)(t, m), toneColor(c, 200)(t, m))(m),
        mode(getColor(`${c}.500`)(t, m), getColor(`${c}.200`)(t, m))(m),
      )(c)

      return {
        container: {
          bg: ['white', 'black'],
          borderWidth: '1px',
          pl: 7,
          _before: {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: 3,
            transform: 'translateY(-50%)',
            w: 1,
            h: 'calc(100% - 1.5rem)',
            bg: color,
            rounded: 'full',
          },
        },
        icon: { color },
      }
    },
    'left-accent': ({ theme: t, colorMode: m, colorScheme: c = 'primary' }) => {
      const color = isDefaultColor(
        mode(toneColor(c, 500)(t, m), toneColor(c, 200)(t, m))(m),
        mode(getColor(`${c}.500`)(t, m), getColor(`${c}.200`)(t, m))(m),
      )(c)

      return {
        container: {
          bg: isDefaultColor(
            [toneColor(c, 100)(t, m), shadeColor(toneColor(c, 200)(t, m), 56)(t, m)],
            [`${c}.100`, shadeColor(`${c}.200`, 56)(t, m)],
          )(c),
          pl: 3,
          borderLeft: `0.25rem solid ${color}`,
          rounded: 4,
        },
        icon: { color },
      }
    },
    'top-accent': ({ theme: t, colorMode: m, colorScheme: c = 'primary' }) => {
      const color = isDefaultColor(
        mode(toneColor(c, 500)(t, m), toneColor(c, 200)(t, m))(m),
        mode(getColor(`${c}.500`)(t, m), getColor(`${c}.200`)(t, m))(m),
      )(c)

      return {
        container: {
          bg: isDefaultColor(
            [toneColor(c, 100)(t, m), shadeColor(toneColor(c, 200)(t, m), 56)(t, m)],
            [`${c}.100`, shadeColor(`${c}.200`, 56)(t, m)],
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
    variant: 'basic',
    colorScheme: 'primary',
  },
}
