import { ComponentStyle, mode } from '@yamada-ui/core'
import { getColor, isArray } from '@yamada-ui/utils'

export const Input: ComponentStyle = {
  baseStyle: {
    field: {
      width: '100%',
      minWidth: 0,
      outline: 0,
      position: 'relative',
      appearance: 'none',
      transitionProperty: 'common',
      transitionDuration: 'normal',
      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed',
      },
    },
  },

  variants: {
    outline: ({
      theme: t,
      colorScheme: s,
      focusBorderColor: fc = ['blue.500', 'blue.300'],
      errorBorderColor: ec = ['red.500', 'red.300'],
    }) => {
      const focusBorderColor = isArray(fc)
        ? mode(getColor(fc[0], fc[0])(t, s), getColor(fc[1], fc[1])(t, s))(s)
        : getColor(fc, fc)(t, s)
      const errorBorderColor = isArray(ec)
        ? mode(getColor(ec[0], ec[0])(t, s), getColor(ec[1], ec[1])(t, s))(s)
        : getColor(ec, ec)(t, s)

      return {
        field: {
          border: '1px solid',
          borderColor: 'inherit',
          bg: 'inherit',
          _hover: {
            borderColor: ['gray.300', 'whiteAlpha.400'],
          },
          _readOnly: {
            boxShadow: 'none !important',
            userSelect: 'all',
          },
          _focus: {
            zIndex: 1,
            borderColor: focusBorderColor,
            boxShadow: `0 0 0 1px ${focusBorderColor}`,
          },
          _invalid: {
            borderColor: errorBorderColor,
            boxShadow: `0 0 0 1px ${errorBorderColor}`,
          },
          _focusVisible: {
            zIndex: 1,
            borderColor: focusBorderColor,
            boxShadow: `0 0 0 1px ${focusBorderColor}`,
          },
        },
        addon: {
          border: '1px solid',
          borderColor: ['inherit', 'whiteAlpha.50'],
          bg: ['gray.100', 'whiteAlpha.300'],
        },
      }
    },
    filled: ({
      theme: t,
      colorScheme: s,
      focusBorderColor: fc = ['blue.500', 'blue.300'],
      errorBorderColor: ec = ['red.500', 'red.300'],
    }) => {
      const focusBorderColor = isArray(fc)
        ? mode(getColor(fc[0], fc[0])(t, s), getColor(fc[1], fc[1])(t, s))(s)
        : getColor(fc, fc)(t, s)
      const errorBorderColor = isArray(ec)
        ? mode(getColor(ec[0], ec[0])(t, s), getColor(ec[1], ec[1])(t, s))(s)
        : getColor(ec, ec)(t, s)

      return {
        field: {
          border: '2px solid',
          borderColor: 'transparent',
          bg: ['gray.100', 'whiteAlpha.50'],
          _hover: {
            bg: ['gray.200', 'whiteAlpha.100'],
          },
          _readOnly: {
            boxShadow: 'none !important',
            userSelect: 'all',
          },
          _focus: {
            bg: 'transparent',
            borderColor: focusBorderColor,
          },
          _invalid: {
            borderColor: errorBorderColor,
          },
          _focusVisible: {
            bg: 'transparent',
            borderColor: focusBorderColor,
          },
        },
        addon: {
          border: '2px solid transparent',
          bg: ['gray.100', 'whiteAlpha.50'],
        },
      }
    },
    flushed: ({
      theme: t,
      colorScheme: s,
      focusBorderColor: fc = ['blue.500', 'blue.300'],
      errorBorderColor: ec = ['red.500', 'red.300'],
    }) => {
      const focusBorderColor = isArray(fc)
        ? mode(getColor(fc[0], fc[0])(t, s), getColor(fc[1], fc[1])(t, s))(s)
        : getColor(fc, fc)(t, s)
      const errorBorderColor = isArray(ec)
        ? mode(getColor(ec[0], ec[0])(t, s), getColor(ec[1], ec[1])(t, s))(s)
        : getColor(ec, ec)(t, s)

      return {
        field: {
          borderBottom: '1px solid',
          borderColor: 'inherit',
          rounded: '0',
          px: '0',
          bg: 'transparent',
          _readOnly: {
            boxShadow: 'none !important',
            userSelect: 'all',
          },
          _focus: {
            borderColor: focusBorderColor,
            boxShadow: `0px 1px 0px 0px ${focusBorderColor}`,
          },
          _invalid: {
            borderColor: errorBorderColor,
            boxShadow: `0px 1px 0px 0px ${errorBorderColor}`,
          },
          _focusVisible: {
            borderColor: focusBorderColor,
            boxShadow: `0px 1px 0px 0px ${focusBorderColor}`,
          },
        },
        addon: {
          border: '2px solid',
          borderColor: 'inherit',
          bg: 'transparent',
          rounded: '0',
          px: '0',
        },
      }
    },
    unstyled: {
      field: {
        bg: 'transparent',
        h: 'auto',
        px: '0',
      },
      addon: {
        bg: 'transparent',
        h: 'auto',
        px: '0',
      },
    },
  },

  sizes: {
    xs: {
      field: {
        fontSize: 'xs',
        px: '2',
        h: '6',
        rounded: 'sm',
      },
      addon: {
        fontSize: 'xs',
        px: '2',
        h: '6',
        rounded: 'sm',
      },
    },
    sm: {
      field: {
        fontSize: 'sm',
        px: '2',
        h: '8',
        rounded: 'sm',
      },
      addon: {
        fontSize: 'sm',
        px: '2',
        h: '8',
        rounded: 'sm',
      },
    },
    md: {
      field: {
        fontSize: 'md',
        px: '3',
        h: '10',
        rounded: 'md',
      },
      addon: {
        fontSize: 'md',
        px: '3',
        h: '10',
        rounded: 'md',
      },
    },
    lg: {
      field: {
        fontSize: 'lg',
        px: '4',
        h: '12',
        rounded: 'md',
      },
      addon: {
        fontSize: 'lg',
        px: '4',
        h: '12',
        rounded: 'md',
      },
    },
  },

  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
}
