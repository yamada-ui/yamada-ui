import { ComponentStyle } from '@yamada-ui/styled'

// https://github.com/chakra-ui/chakra-ui/blob/main/packages/components/theme/src/components/avatar.ts

export const Avatar: ComponentStyle = {
  baseStyle: {
    badge: {},
    container: {
      width: '12',
      height: '12',
      backgroundColor: 'white',
      borderRadius: 'full',
    },
    excessLabel: {},
    icon: {
      width: 'full',
      height: 'full',
    },
  },
}
