import { ComponentStyle } from '@yamada-ui/styled'

export const Popover: ComponentStyle = {
  baseStyle: {
    container: {
      rounded: 'md',
      bg: ['white', 'black'],
      border: '1px solid',
      borderColor: 'inherit',
      color: 'inherit',
      boxShadow: 'sm',
      zIndex: 'ginyu',
    },
    closeButton: {
      top: '2',
      right: '2',
    },
    header: {
      pt: 'sm',
      px: 'sm',
      gap: 'sm',
    },
    body: {
      my: 'sm',
      px: 'sm',
      gap: 'sm',
    },
    footer: {
      px: 'sm',
      pb: 'sm',
      gap: 'sm',
    },
  },
}
