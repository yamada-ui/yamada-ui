import { ComponentMultiStyle } from '@yamada-ui/core'

export const Breadcrumb: ComponentMultiStyle = {
  baseStyle: {
    container: {},
    item: {},
    link: {
      transitionProperty: 'common',
      transitionDuration: 'fast',
      transitionTimingFunction: 'ease-out',
      cursor: 'pointer',
      textDecoration: 'none',
      outline: 'none',
      color: 'inherit',
      _hover: {
        textDecoration: 'underline',
      },
      _focusVisible: {
        boxShadow: 'outline',
      },
    },
    separator: {},
  },
}
