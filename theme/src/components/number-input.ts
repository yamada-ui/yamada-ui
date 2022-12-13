import { ComponentStyle, mode } from '@yamada-ui/core'
import { getColor, isArray } from '@yamada-ui/utils'

export const NumberInput: ComponentStyle = {
  baseStyle: {
    container: {},
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
    addon: {},
    stepper: {
      borderStart: '1px solid',
      borderColor: 'inherit',
      color: ['blackAlpha.600', 'whiteAlpha.600'],
      _active: {
        bg: ['gray.200', 'whiteAlpha.300'],
      },
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
        stepper: {
          bg: 'transparent',
          border: 'none',
          _active: {
            bg: 'transparent',
            opacity: 0.7,
          },
          _last: {
            border: 'none',
          },
        },
      }
    },
    unstyled: {
      field: {
        bg: 'transparent',
        h: 'auto',
        px: '0',
      },
      stepper: {
        bg: 'transparent',
        border: 'none',
        _active: {
          bg: 'transparent',
        },
        _last: {
          border: 'none',
        },
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
      stepper: {
        fontSize: 'xs',
        _first: {
          borderTopEndRadius: 'sm',
        },
        _last: {
          borderBottomEndRadius: 'sm',
          mt: '-1px',
          borderTop: '1px solid',
          borderColor: 'inherit',
        },
      },
    },
    sm: {
      field: {
        fontSize: 'sm',
        px: '2',
        h: '8',
        rounded: 'sm',
      },
      stepper: {
        fontSize: 'sm',
        _first: {
          borderTopEndRadius: 'sm',
        },
        _last: {
          borderBottomEndRadius: 'sm',
          mt: '-1px',
          borderTop: '1px solid',
          borderColor: 'inherit',
        },
      },
    },
    md: {
      field: {
        fontSize: 'md',
        px: '3',
        h: '10',
        rounded: 'md',
      },
      stepper: {
        fontSize: 'md',
        _first: {
          borderTopEndRadius: 'md',
        },
        _last: {
          borderBottomEndRadius: 'md',
          mt: '-1px',
          borderTop: '1px solid',
          borderColor: 'inherit',
        },
      },
    },
    lg: {
      field: {
        fontSize: 'lg',
        px: '4',
        h: '12',
        rounded: 'md',
      },
      stepper: {
        fontSize: 'lg',
        _first: {
          borderTopEndRadius: 'md',
        },
        _last: {
          borderBottomEndRadius: 'md',
          mt: '-1px',
          borderTop: '1px solid',
          borderColor: 'inherit',
        },
      },
    },
  },

  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
}
