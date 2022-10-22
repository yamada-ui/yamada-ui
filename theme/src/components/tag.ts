import { defaultColors } from '../'
import { ComponentStyle } from '@yamada-ui/styled'
import { transparentizeColor, toneColor, getColor } from '@yamada-ui/utils'

export const Tag: ComponentStyle = {
  baseStyle: {
    container: {
      outline: 0,
      fontWeight: 'medium',
      lineHeight: 1.2,
      borderRadius: 'md',
      _focusVisible: {
        boxShadow: 'outline',
      },
    },
    label: {
      lineHeight: 1.8,
      overflow: 'visible',
    },
    closeButton: {
      transitionProperty: 'common',
      transitionDuration: 'normal',
      borderRadius: 'full',
      opacity: 0.5,
      _disabled: {
        opacity: 0.4,
      },
      _focusVisible: {
        boxShadow: 'outline',
        bg: 'rgba(0, 0, 0, 0.14)',
      },
      _hover: {
        opacity: 0.8,
        _disabled: {
          opacity: 0.4,
          cursor: 'not-allowed',
        },
      },
      _active: {
        opacity: 1,
      },
    },
  },

  sizes: {
    sm: {
      container: { minH: '5', minW: '5', fontSize: 'xs', px: '2' },
    },
    md: {
      container: { minH: '6', minW: '6', fontSize: 'sm', px: '2' },
    },
    lg: {
      container: { minH: '8', minW: '8', fontSize: 'md', px: '3' },
    },
  },

  variants: {
    solid: ({ theme, colorScheme: c }) => {
      if (c && defaultColors.includes(c)) {
        return {
          container: {
            bg: [
              toneColor(c, 500)(theme),
              transparentizeColor(toneColor(c, 500)(theme), 0.6)(theme),
            ],
            color: [`white`, `whiteAlpha.800`],
          },
        }
      } else {
        return {
          container: {
            bg: [`${c}.500`, transparentizeColor(`${c}.500`, 0.6)(theme)],
            color: [`white`, `whiteAlpha.800`],
          },
        }
      }
    },
    subtle: ({ theme, colorScheme: c }) => {
      if (c && defaultColors.includes(c)) {
        return {
          container: {
            bg: [
              toneColor(c, 100)(theme),
              transparentizeColor(toneColor(c, 200)(theme), 0.16)(theme),
            ],
            color: [toneColor(c, 800)(theme), toneColor(c, 200)(theme)],
          },
        }
      } else {
        return {
          container: {
            bg: [`${c}.100`, transparentizeColor(`${c}.200`, 0.16)(theme)],
            color: [`${c}.800`, `${c}.200`],
          },
        }
      }
    },
    outline: ({ theme, scheme, colorScheme: c }) => {
      if (c && defaultColors.includes(c)) {
        const color =
          scheme === 'light'
            ? toneColor(c, 500)(theme)
            : transparentizeColor(toneColor(c, 200)(theme), 0.8)(theme)

        return {
          container: { color, boxShadow: `inset 0 0 0px 1px ${color}` },
        }
      } else {
        const color =
          scheme === 'light'
            ? getColor(theme, `${c}.500`)
            : transparentizeColor(`${c}.200`, 0.8)(theme)

        return {
          container: { color, boxShadow: `inset 0 0 0px 1px ${color}` },
        }
      }
    },
  },

  defaultProps: {
    size: 'md',
    variant: 'subtle',
    colorScheme: 'gray',
  },
}
