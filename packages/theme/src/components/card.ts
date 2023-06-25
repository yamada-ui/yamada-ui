import { ComponentMultiStyle, isDefaultColor } from '@yamada-ui/core'
import { toneColor, transparentizeColor } from '@yamada-ui/utils'

export const Card: ComponentMultiStyle = {
  baseStyle: {
    container: {},
    header: {},
    body: {
      flex: '1',
    },
    footer: {},
  },

  variants: {
    elevated: {
      container: {
        boxShadow: ['md', 'dark-md'],
      },
    },
    outline: {
      container: {
        borderWidth: '1px',
      },
    },
    solid: ({ theme: t, colorMode: m, colorScheme: c = 'primary' }) => ({
      container: {
        bg: isDefaultColor(
          [toneColor(c, 500)(t, m), transparentizeColor(toneColor(c, 500)(t, m), 0.6)(t, m)],
          [`${c}.500`, transparentizeColor(`${c}.500`, 0.6)(t, m)],
        )(c),
        color: [`white`, `whiteAlpha.800`],
      },
    }),
    subtle: ({ theme: t, colorMode: m, colorScheme: c = 'primary' }) => ({
      container: {
        bg: isDefaultColor(
          [toneColor(c, 100)(t, m), transparentizeColor(toneColor(c, 200)(t, m), 0.16)(t, m)],
          [`${c}.100`, transparentizeColor(`${c}.200`, 0.16)(t, m)],
        )(c),
      },
    }),
    unstyled: {
      container: { rounded: 0 },
      header: { p: 0 },
      body: { p: 0 },
      footer: { p: 0 },
    },
  },

  sizes: {
    sm: {
      container: { rounded: 'base' },
      header: { pt: 'sm', px: 'sm', gap: 'sm' },
      body: { py: 'sm', px: 'sm', gap: 'sm' },
      footer: { pb: 'sm', px: 'sm', gap: 'sm' },
    },
    md: {
      container: { rounded: 'md' },
      header: { pt: 'md', px: 'md', gap: 'md' },
      body: { py: 'md', px: 'md', gap: 'md' },
      footer: { pb: 'md', px: 'md', gap: 'md' },
    },
    normal: {
      container: { rounded: 'lg' },
      header: { pt: 'normal', px: 'normal', gap: 'normal' },
      body: { py: 'normal', px: 'normal', gap: 'normal' },
      footer: { pb: 'normal', px: 'normal', gap: 'normal' },
    },
    lg: {
      container: { rounded: 'xl' },
      header: { pt: 'lg', px: 'lg', gap: 'lg' },
      body: { py: 'lg', px: 'lg', gap: 'lg' },
      footer: { pb: 'lg', px: 'lg', gap: 'lg' },
    },
  },

  defaultProps: {
    variant: 'elevated',
    colorScheme: 'primary',
    size: 'md',
  },
}
