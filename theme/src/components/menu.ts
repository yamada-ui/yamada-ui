import { ComponentStyle } from '@yamada-ui/core'

export const Menu: ComponentStyle = {
  baseStyle: {
    button: {
      transitionProperty: 'common',
      transitionDuration: 'normal',
    },
    list: {
      rounded: 'md',
      minW: 'xs',
      py: '2',
      bg: ['white', 'black'],
      border: '1px solid',
      borderColor: 'inherit',
      color: 'inherit',
      boxShadow: ['sm', 'dark-lg'],
      zIndex: 1,
    },
    item: {
      py: '1.5',
      px: '3',
      transitionProperty: 'background',
      transitionDuration: 'ultra-fast',
      transitionTimingFunction: 'ease-in',
      _focus: {
        bg: ['gray.100', 'whiteAlpha.100'],
      },
      _active: {
        bg: ['gray.200', 'whiteAlpha.200'],
      },
      _expanded: {
        bg: ['gray.100', 'whiteAlpha.300'],
      },
      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed',
      },
    },
    icon: {},
    command: {
      opacity: 0.6,
    },
    divider: {
      my: '2',
      borderBottomWidth: '1px',
      borderColor: 'inherit',
    },
    group: {},
    groupTitle: {
      py: '1.5',
      px: '3',
      fontSize: 'sm',
      fontWeight: 'semibold',
      color: ['blackAlpha.600', 'whiteAlpha.600'],
    },
  },
}
