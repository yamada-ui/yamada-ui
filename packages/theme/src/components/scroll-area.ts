import { ComponentMultiStyle } from '@yamada-ui/core'

export const ScrollArea: ComponentMultiStyle = {
  baseStyle: {
    container: {},
    scrollbar: {
      w: '3',
      h: '3',
    },
    track: {
      bg: 'transparent',
    },
    thumb: {
      bg: 'gray.500',
      border: '3px solid transparent',
      rounded: 'full',
      bgClip: 'padding-box',
    },
    button: {},
    corner: {
      bg: 'transparent',
    },
  },
}
