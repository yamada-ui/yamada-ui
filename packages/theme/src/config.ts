import { ThemeConfig } from '@yamada-ui/core'

export const config: ThemeConfig = {
  initialColorScheme: 'light',
  useSystemColorScheme: false,
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
