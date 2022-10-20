import { defaultColors } from '../'
import { ComponentStyle } from '@yamada-ui/styled'
import { transparentizeColor, toneColor } from '@yamada-ui/utils'

export const Button: ComponentStyle = {
  baseStyle: {
    lineHeight: 1.2,
    borderRadius: 'md',
    fontWeight: 'semibold',
    transitionProperty: 'common',
    transitionDuration: 'slower',
    _focus: {
      outline: 'none',
    },
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
      boxShadow: 'none',
    },
    _hover: {
      _disabled: {
        bg: ['initial', 'initial'],
      },
    },
  },

  variants: {
    solid: ({ theme, colorScheme: c }) => {
      if (c && defaultColors.includes(c)) {
        return {
          bg: [toneColor(c, 500)(theme), toneColor(c, 200)(theme)],
          color: [`white`, `gray.800`],
          _hover: {
            bg: [toneColor(c, 600)(theme), toneColor(c, 300)(theme)],
            _disabled: {
              bg: [toneColor(c, 500)(theme), toneColor(c, 200)(theme)],
            },
          },
          _active: { bg: [toneColor(c, 700)(theme), toneColor(c, 400)(theme)] },
        }
      } else if (c === 'gray') {
        return {
          bg: [`gray.100`, `whiteAlpha.200`],
          _hover: {
            bg: [`gray.200`, `whiteAlpha.300`],
            _disabled: {
              bg: [`gray.100`, `whiteAlpha.200`],
            },
          },
          _active: { bg: [`gray.300`, `whiteAlpha.400`] },
        }
      } else {
        const isAccessible = c === 'yellow' || c === 'cyan'

        return {
          bg: [isAccessible ? `${c}.400` : `${c}.500`, `${c}.200`],
          color: [isAccessible ? `black` : `white`, `gray.800`],
          _hover: {
            bg: [isAccessible ? `${c}.500` : `${c}.600`, `${c}.300`],
            _disabled: {
              bg: [isAccessible ? `${c}.400` : `${c}.500`, `${c}.200`],
            },
          },
          _active: { bg: [isAccessible ? `${c}.600` : `${c}.700`, `${c}.400`] },
        }
      }
    },
    outline: ({ theme, colorScheme: c }) => {
      if (c && defaultColors.includes(c)) {
        return {
          border: '1px solid',
          borderColor: [toneColor(c, 600)(theme), toneColor(c, 300)(theme)],
          color: [toneColor(c, 600)(theme), toneColor(c, 200)(theme)],
          bg: 'transparent',
          _hover: {
            bg: [
              toneColor(c, 50)(theme),
              transparentizeColor(toneColor(c, 200)(theme), 0.12)(theme),
            ],
          },
          _active: {
            bg: [
              toneColor(c, 100)(theme),
              transparentizeColor(toneColor(c, 200)(theme), 0.24)(theme),
            ],
          },
        }
      } else if (c === 'gray') {
        return {
          border: '1px solid',
          borderColor: [`gray.200`, `whiteAlpha.300`],
          color: [`inherit`, `whiteAlpha.900`],
          _hover: {
            bg: [`gray.100`, `whiteAlpha.200`],
          },
          _active: { bg: [`gray.200`, `whiteAlpha.300`] },
        }
      } else {
        return {
          border: '1px solid',
          borderColor: [`${c}.600`, `${c}.300`],
          color: [`${c}.600`, `${c}.200`],
          bg: 'transparent',
          _hover: {
            bg: [`${c}.50`, transparentizeColor(`${c}.200`, 0.12)(theme)],
          },
          _active: {
            bg: [`${c}.100`, transparentizeColor(`${c}.200`, 0.24)(theme)],
          },
        }
      }
    },
    link: ({ theme, colorScheme: c }) => {
      if (c && defaultColors.includes(c)) {
        return {
          padding: 0,
          height: 'auto',
          lineHeight: 'normal',
          verticalAlign: 'baseline',
          color: [toneColor(c, 500)(theme), toneColor(c, 200)(theme)],
          _hover: {
            textDecoration: 'underline',
            _disabled: {
              textDecoration: 'none',
            },
          },
          _active: {
            color: [toneColor(c, 700)(theme), toneColor(c, 500)(theme)],
            _disabled: {
              color: [toneColor(c, 500)(theme), toneColor(c, 200)(theme)],
            },
          },
        }
      } else {
        return {
          padding: 0,
          height: 'auto',
          lineHeight: 'normal',
          verticalAlign: 'baseline',
          color: [`${c}.500`, `${c}.200`],
          _hover: {
            textDecoration: 'underline',
            _disabled: {
              textDecoration: 'none',
            },
          },
          _active: {
            color: [`${c}.700`, `${c}.500`],
            _disabled: {
              color: [`${c}.500`, `${c}.200`],
            },
          },
        }
      }
    },
    ghost: ({ theme, colorScheme: c }) => {
      if (c && defaultColors.includes(c)) {
        return {
          color: [toneColor(c, 600)(theme), toneColor(c, 200)(theme)],
          bg: 'transparent',
          _hover: {
            bg: [
              toneColor(c, 50)(theme),
              transparentizeColor(toneColor(c, 200)(theme), 0.12)(theme),
            ],
          },
          _active: {
            bg: [
              toneColor(c, 100)(theme),
              transparentizeColor(toneColor(c, 200)(theme), 0.24)(theme),
            ],
          },
        }
      } else if (c === 'gray') {
        return {
          color: [`inherit`, `whiteAlpha.900`],
          _hover: {
            bg: [`gray.100`, `whiteAlpha.200`],
          },
          _active: { bg: [`gray.200`, `whiteAlpha.300`] },
        }
      } else {
        return {
          color: [`${c}.600`, `${c}.200`],
          bg: 'transparent',
          _hover: {
            bg: [`${c}.50`, transparentizeColor(`${c}.200`, 0.12)(theme)],
          },
          _active: {
            bg: [`${c}.100`, transparentizeColor(`${c}.200`, 0.24)(theme)],
          },
        }
      }
    },
    unstyled: {
      bg: 'none',
      color: 'inherit',
      display: 'inline',
      lineHeight: 'inherit',
      m: 0,
      p: 0,
    },
  },

  sizes: {
    xs: {
      h: 6,
      minW: 6,
      fontSize: 'xs',
      px: 2,
    },
    sm: {
      h: 8,
      minW: 8,
      fontSize: 'sm',
      px: 3,
    },
    md: {
      h: 10,
      minW: 10,
      fontSize: 'md',
      px: 4,
    },
    lg: {
      h: 12,
      minW: 12,
      fontSize: 'lg',
      px: 6,
    },
  },

  defaultProps: {
    variant: 'solid',
    size: 'md',
    colorScheme: 'gray',
  },
}
