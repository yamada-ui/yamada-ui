import { ComponentMultiStyle, mode } from '@yamada-ui/core'
import { getColor, isArray } from '@yamada-ui/utils'

export const Editable: ComponentMultiStyle = {
  baseStyle: {
    container: {
      w: 'full',
    },
    preview: {
      rounded: 'md',
      p: '1',
      transitionProperty: 'common',
      transitionDuration: 'normal',
    },
    input: ({
      theme: t,
      colorScheme: s,
      focusBorderColor: fc = ['blue.500', 'blue.300'],
      errorBorderColor: ec = ['red.500', 'red.300'],
    }) => ({
      rounded: 'md',
      p: '1',
      w: 'full',
      transitionProperty: 'common',
      transitionDuration: 'normal',
      _placeholder: { opacity: 0.6 },
      _focus: {
        zIndex: 1,
        boxShadow: `0 0 0 1px ${
          isArray(fc)
            ? mode(getColor(fc[0], fc[0])(t, s), getColor(fc[1], fc[1])(t, s))(s)
            : getColor(fc, fc)(t, s)
        }`,
      },
      _invalid: {
        boxShadow: `0 0 0 1px ${
          isArray(ec)
            ? mode(getColor(ec[0], ec[0])(t, s), getColor(ec[1], ec[1])(t, s))(s)
            : getColor(ec, ec)(t, s)
        }`,
      },
      _focusVisible: {
        zIndex: 1,
        boxShadow: `0 0 0 1px ${
          isArray(fc)
            ? mode(getColor(fc[0], fc[0])(t, s), getColor(fc[1], fc[1])(t, s))(s)
            : getColor(fc, fc)(t, s)
        }`,
      },
    }),
    textarea: ({
      theme: t,
      colorScheme: s,
      focusBorderColor: fc = ['blue.500', 'blue.300'],
      errorBorderColor: ec = ['red.500', 'red.300'],
    }) => ({
      boxSizing: 'content-box',
      rounded: 'md',
      p: '1',
      w: 'full',
      h: 'calc(1em * 1.5)',
      transitionProperty: 'common',
      transitionDuration: 'normal',
      _placeholder: { opacity: 0.6 },
      _focus: {
        zIndex: 1,
        boxShadow: `0 0 0 1px ${
          isArray(fc)
            ? mode(getColor(fc[0], fc[0])(t, s), getColor(fc[1], fc[1])(t, s))(s)
            : getColor(fc, fc)(t, s)
        }`,
      },
      _invalid: {
        boxShadow: `0 0 0 1px ${
          isArray(ec)
            ? mode(getColor(ec[0], ec[0])(t, s), getColor(ec[1], ec[1])(t, s))(s)
            : getColor(ec, ec)(t, s)
        }`,
      },
      _focusVisible: {
        zIndex: 1,
        boxShadow: `0 0 0 1px ${
          isArray(fc)
            ? mode(getColor(fc[0], fc[0])(t, s), getColor(fc[1], fc[1])(t, s))(s)
            : getColor(fc, fc)(t, s)
        }`,
      },
    }),
  },
}
