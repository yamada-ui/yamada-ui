import { ComponentStyle, isDefaultColor, mode } from '@yamada-ui/core'
import { transparentizeColor, toneColor, isArray, getColor } from '@yamada-ui/utils'

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
    _focusVisible: {
      boxShadow: 'outline',
    },
  },

  variants: {
    solid: ({
      theme: t,
      colorScheme: s,
      colorStyle: c = 'gray',
      errorBorderColor: ec = ['red.500', 'red.300'],
    }) => {
      const isGray = c === 'gray'
      const isAccessible = c === 'yellow' || c === 'cyan'
      const errorBorderColor = isArray(ec)
        ? mode(getColor(ec[0], ec[0])(t, s), getColor(ec[1], ec[1])(t, s))(s)
        : getColor(ec, ec)(t, s)

      return {
        bg: isDefaultColor(
          [toneColor(c, 500)(t, s), toneColor(c, 200)(t, s)],
          isGray
            ? [`gray.100`, `whiteAlpha.200`]
            : [isAccessible ? `${c}.400` : `${c}.500`, `${c}.200`],
        )(c),
        color: isDefaultColor(
          [`white`, `gray.800`],
          isGray ? undefined : [isAccessible ? `black` : `white`, `gray.800`],
        )(c),
        _hover: {
          bg: isDefaultColor(
            [toneColor(c, 600)(t, s), toneColor(c, 300)(t, s)],
            isGray
              ? [`gray.200`, `whiteAlpha.300`]
              : [isAccessible ? `${c}.500` : `${c}.600`, `${c}.300`],
          )(c),
          _disabled: {
            bg: isDefaultColor(
              [toneColor(c, 500)(t, s), toneColor(c, 200)(t, s)],
              isGray
                ? [`gray.100`, `whiteAlpha.200`]
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
            [toneColor(c, 700)(t, s), toneColor(c, 400)(t, s)],
            isGray
              ? [`gray.300`, `whiteAlpha.400`]
              : [isAccessible ? `${c}.600` : `${c}.700`, `${c}.400`],
          )(c),
        },
      }
    },
    outline: ({
      theme: t,
      colorScheme: s,
      colorStyle: c = 'gray',
      errorBorderColor: ec = ['red.500', 'red.300'],
    }) => {
      const isGray = c === 'gray'
      const errorBorderColor = isArray(ec)
        ? mode(getColor(ec[0], ec[0])(t, s), getColor(ec[1], ec[1])(t, s))(s)
        : getColor(ec, ec)(t, s)

      return {
        border: '1px solid',
        borderColor: isDefaultColor(
          [toneColor(c, 600)(t, s), toneColor(c, 300)(t, s)],
          isGray ? [`gray.200`, `whiteAlpha.300`] : [`${c}.600`, `${c}.300`],
        )(c),
        color: isDefaultColor(
          [toneColor(c, 600)(t, s), toneColor(c, 200)(t, s)],
          isGray ? [`inherit`, `whiteAlpha.900`] : [`${c}.600`, `${c}.200`],
        )(c),
        bg: isGray ? undefined : 'transparent',
        _hover: {
          bg: isDefaultColor(
            [toneColor(c, 50)(t, s), transparentizeColor(toneColor(c, 200)(t, s), 0.12)(t, s)],
            isGray
              ? [`gray.100`, `whiteAlpha.200`]
              : [`${c}.50`, transparentizeColor(`${c}.200`, 0.12)(t, s)],
          )(c),
        },
        _invalid: {
          borderColor: errorBorderColor,
          boxShadow: `0 0 0 1px ${errorBorderColor}`,
        },
        _active: {
          bg: isDefaultColor(
            [toneColor(c, 100)(t, s), transparentizeColor(toneColor(c, 200)(t, s), 0.24)(t, s)],
            isGray
              ? [`gray.200`, `whiteAlpha.300`]
              : [`${c}.100`, transparentizeColor(`${c}.200`, 0.24)(t, s)],
          )(c),
        },
      }
    },
    link: ({ theme: t, colorScheme: s, colorStyle: c = 'gray' }) => ({
      padding: 0,
      height: 'auto',
      lineHeight: 'normal',
      verticalAlign: 'baseline',
      color: isDefaultColor(
        [toneColor(c, 500)(t, s), toneColor(c, 200)(t, s)],
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
          [toneColor(c, 700)(t, s), toneColor(c, 500)(t, s)],
          [`${c}.700`, `${c}.500`],
        )(c),
        _disabled: {
          color: isDefaultColor(
            [toneColor(c, 500)(t, s), toneColor(c, 200)(t, s)],
            [`${c}.500`, `${c}.200`],
          )(c),
        },
      },
    }),
    ghost: ({
      theme: t,
      colorScheme: s,
      colorStyle: c = 'gray',
      errorBorderColor: ec = ['red.500', 'red.300'],
    }) => {
      const isGray = c === 'gray'
      const errorBorderColor = isArray(ec)
        ? mode(getColor(ec[0], ec[0])(t, s), getColor(ec[1], ec[1])(t, s))(s)
        : getColor(ec, ec)(t, s)

      return {
        color: isDefaultColor(
          [toneColor(c, 600)(t, s), toneColor(c, 200)(t, s)],
          isGray ? [`inherit`, `whiteAlpha.900`] : [`${c}.600`, `${c}.200`],
        )(c),
        bg: isGray ? undefined : 'transparent',
        _hover: {
          bg: isDefaultColor(
            [toneColor(c, 50)(t, s), transparentizeColor(toneColor(c, 200)(t, s), 0.12)(t, s)],
            isGray
              ? [`gray.100`, `whiteAlpha.200`]
              : [`${c}.50`, transparentizeColor(`${c}.200`, 0.12)(t, s)],
          )(c),
        },
        _invalid: {
          border: '1px solid',
          borderColor: errorBorderColor,
          boxShadow: `0 0 0 1px ${errorBorderColor}`,
        },
        _active: {
          bg: isDefaultColor(
            [toneColor(c, 100)(t, s), transparentizeColor(toneColor(c, 200)(t, s), 0.24)(t, s)],
            isGray
              ? [`gray.200`, `whiteAlpha.300`]
              : [`${c}.100`, transparentizeColor(`${c}.200`, 0.24)(t, s)],
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
    colorStyle: 'gray',
  },
}
