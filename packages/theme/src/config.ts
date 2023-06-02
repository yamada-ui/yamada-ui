import { ThemeConfig } from '@yamada-ui/core'

export const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  date: {
    locale: 'en',
  },
  var: {
    prefix: 'ui',
  },
  notice: {
    options: {
      placement: 'top',
    },
  },
}
