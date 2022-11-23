import { ThemeConfig } from '@yamada-ui/styled'

export const config: ThemeConfig = {
  initialColorScheme: 'light',
  useSystemColorScheme: false,
  var: {
    prefix: 'ui',
  },
  toast: {
    options: {
      placement: 'top',
      variant: 'subtle',
      duration: null,
      isClosable: true,
    },
  },
}
