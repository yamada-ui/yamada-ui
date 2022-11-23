import { ThemeConfig } from '@yamada-ui/styled'

export const config: ThemeConfig = {
  initialColorScheme: 'light',
  useSystemColorScheme: false,
  var: {
    prefix: 'ui',
  },
  notice: {
    options: {
      placement: 'top',
      duration: null,
      isClosable: true,
    },
  },
}
