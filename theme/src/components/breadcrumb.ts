import { ComponentStyle } from '@yamada-ui/styled'

export const Breadcrumb: ComponentStyle = {
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
    },
    separator: {},
  },
}
