import { ComponentStyle, isDefaultColor, mode } from '@yamada-ui/core'
import {
  transparentizeColor,
  toneColor,
  isArray,
  getColor,
  isGray,
} from '@yamada-ui/utils'

export const Button: ComponentStyle = {
  baseStyle: {
    lineHeight: 1.2,
    rounded: 'md',
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
    _readOnly: {
      cursor: 'default',
    },
    _hover: {
      _disabled: {
        bg: ['initial', 'initial'],
      },
    },
    _active: {
      _disabled: {
        bg: ['initial', 'initial'],
      },
    },
    _focusVisible: {
      boxShadow: 'outline',
    },
  },

  variants: {
    solid: ({
      theme: t,
      colorMode: m,
      colorScheme: c = 'gray',
      errorBorderColor: ec = ['red.500', 'red.300'],
    }) => {
      const isAccessible = c === 'yellow' || c === 'cyan' || c === 'lime'
      const errorBorderColor = isArray(ec)
        ? mode(getColor(ec[0], ec[0])(t, m), getColor(ec[1], ec[1])(t, m))(m)
        : getColor(ec, ec)(t, m)

      return {
        bg: isDefaultColor(
          [toneColor(c, 500)(t, m), toneColor(c, 200)(t, m)],
          isGray(c)
            ? [`${c}.200`, `${c}.700`]
            : [isAccessible ? `${c}.400` : `${c}.500`, `${c}.200`],
        )(c),
        color: isDefaultColor(
          [`white`, `gray.800`],
          isGray(c)
            ? undefined
            : [isAccessible ? `black` : `white`, `gray.800`],
        )(c),
        _hover: {
          bg: isDefaultColor(
            [toneColor(c, 600)(t, m), toneColor(c, 300)(t, m)],
            isGray(c)
              ? [`${c}.300`, `${c}.600`]
              : [isAccessible ? `${c}.500` : `${c}.600`, `${c}.300`],
          )(c),
          _disabled: {
            bg: isDefaultColor(
              [toneColor(c, 500)(t, m), toneColor(c, 200)(t, m)],
              isGray(c)
                ? [`${c}.200`, `${c}.200`]
                : [isAccessible ? `${c}.400` : `${c}.500`, `${c}.200`],
            )(c),
          },
        },
        _invalid: {
          border: '1px solid',
          borderColor: errorBorderColor,
          boxShadow: `0 0 0 1px ${errorBorderColor}`,
        },
        _active: {
          bg: isDefaultColor(
            [toneColor(c, 700)(t, m), toneColor(c, 400)(t, m)],
            isGray(c)
              ? [`${c}.400`, `${c}.500`]
              : [isAccessible ? `${c}.600` : `${c}.700`, `${c}.400`],
          )(c),
          _disabled: {
            bg: isDefaultColor(
              [toneColor(c, 500)(t, m), toneColor(c, 200)(t, m)],
              isGray(c)
                ? [`${c}.200`, `${c}.200`]
                : [isAccessible ? `${c}.400` : `${c}.500`, `${c}.200`],
            )(c),
          },
        },
      }
    },
    outline: ({
      theme: t,
      colorMode: m,
      colorScheme: c = 'gray',
      errorBorderColor: ec = ['red.500', 'red.300'],
    }) => {
      const errorBorderColor = isArray(ec)
        ? mode(getColor(ec[0], ec[0])(t, m), getColor(ec[1], ec[1])(t, m))(m)
        : getColor(ec, ec)(t, m)

      return {
        border: '1px solid',
        borderColor: isDefaultColor(
          [toneColor(c, 600)(t, m), toneColor(c, 300)(t, m)],
          isGray(c) ? [`${c}.200`, `${c}.400`] : [`${c}.600`, `${c}.300`],
        )(c),
        color: isDefaultColor(
          [toneColor(c, 600)(t, m), toneColor(c, 200)(t, m)],
          isGray(c) ? [`inherit`, `${c}.400`] : [`${c}.600`, `${c}.200`],
        )(c),
        bg: isGray(c) ? undefined : 'transparent',
        _hover: {
          bg: isDefaultColor(
            [
              toneColor(c, 50)(t, m),
              transparentizeColor(toneColor(c, 200)(t, m), 0.12)(t, m),
            ],
            isGray(c)
              ? [`${c}.100`, `whiteAlpha.200`]
              : [`${c}.50`, transparentizeColor(`${c}.200`, 0.12)(t, m)],
          )(c),
        },
        _invalid: {
          borderColor: errorBorderColor,
          boxShadow: `0 0 0 1px ${errorBorderColor}`,
        },
        _active: {
          bg: isDefaultColor(
            [
              toneColor(c, 100)(t, m),
              transparentizeColor(toneColor(c, 200)(t, m), 0.24)(t, m),
            ],
            isGray(c)
              ? [`${c}.200`, `whiteAlpha.300`]
              : [`${c}.100`, transparentizeColor(`${c}.200`, 0.24)(t, m)],
          )(c),
        },
      }
    },
    link: ({ theme: t, colorMode: m, colorScheme: c = 'gray' }) => ({
      padding: 0,
      height: 'auto',
      lineHeight: 'normal',
      verticalAlign: 'baseline',
      color: isDefaultColor(
        [toneColor(c, 500)(t, m), toneColor(c, 200)(t, m)],
        [`${c}.500`, `${c}.200`],
      )(c),
      _hover: {
        textDecoration: 'underline',
        _disabled: {
          textDecoration: 'none',
        },
      },
      _active: {
        color: isDefaultColor(
          [toneColor(c, 700)(t, m), toneColor(c, 500)(t, m)],
          [`${c}.700`, `${c}.500`],
        )(c),
        _disabled: {
          color: isDefaultColor(
            [toneColor(c, 500)(t, m), toneColor(c, 200)(t, m)],
            [`${c}.500`, `${c}.200`],
          )(c),
        },
      },
    }),
    ghost: ({
      theme: t,
      colorMode: m,
      colorScheme: c = 'gray',
      errorBorderColor: ec = ['red.500', 'red.300'],
    }) => {
      const errorBorderColor = isArray(ec)
        ? mode(getColor(ec[0], ec[0])(t, m), getColor(ec[1], ec[1])(t, m))(m)
        : getColor(ec, ec)(t, m)

      return {
        color: isDefaultColor(
          [toneColor(c, 600)(t, m), toneColor(c, 200)(t, m)],
          isGray(c) ? [`inherit`, `${c}.200`] : [`${c}.600`, `${c}.200`],
        )(c),
        bg: isGray(c) ? undefined : 'transparent',
        _hover: {
          bg: isDefaultColor(
            [
              toneColor(c, 100)(t, m),
              transparentizeColor(toneColor(c, 200)(t, m), 0.12)(t, m),
            ],
            isGray(c)
              ? [`${c}.200`, `whiteAlpha.200`]
              : [`${c}.100`, transparentizeColor(`${c}.200`, 0.12)(t, m)],
          )(c),
        },
        _invalid: {
          border: '1px solid',
          borderColor: errorBorderColor,
          boxShadow: `0 0 0 1px ${errorBorderColor}`,
        },
        _active: {
          bg: isDefaultColor(
            [
              toneColor(c, 200)(t, m),
              transparentizeColor(toneColor(c, 200)(t, m), 0.24)(t, m),
            ],
            isGray(c)
              ? [`${c}.300`, `whiteAlpha.300`]
              : [`${c}.200`, transparentizeColor(`${c}.200`, 0.24)(t, m)],
          )(c),
        },
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
