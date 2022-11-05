import { ColorScheme } from '@yamada-ui/styled'
import { createdDom } from '@yamada-ui/utils'

const hasSupport = () => typeof Storage !== 'undefined'

export const storageKey = 'ui-scheme'

export type ColorSchemeManager = {
  get(initColorScheme?: ColorScheme): ColorScheme
  set(colorScheme: ColorScheme): void
  type: 'cookie' | 'localStorage'
}

export const localStorageManager: ColorSchemeManager = {
  get(initColorScheme: ColorScheme = 'light') {
    if (!hasSupport()) return initColorScheme

    try {
      const colorScheme = localStorage.getItem(storageKey) as ColorScheme

      return colorScheme ?? initColorScheme
    } catch (e) {
      return initColorScheme
    }
  },

  set(colorShcme: ColorScheme) {
    if (!hasSupport()) return

    try {
      localStorage.setItem(storageKey, colorShcme)
    } catch (e) {}
  },

  type: 'localStorage',
}

export const cookieStorageManager = (cookies = ''): ColorSchemeManager => ({
  get(initColorScheme: ColorScheme = 'light') {
    const match = cookies.match(new RegExp(`(^| )${storageKey}=([^;]+)`))

    return (match?.[2] ?? initColorScheme) as ColorScheme
  },

  set(colorShcme: ColorScheme) {
    document.cookie = `${storageKey}=${colorShcme}; max-age=31536000; path=/`
  },

  type: 'cookie',
})

export type RootManager = {
  get(): ColorScheme | undefined
  set(colorScheme: ColorScheme): void
}

export const rootManager: RootManager = {
  get: () =>
    (document.documentElement.style.getPropertyValue('color-scheme') ||
      document.documentElement.dataset.theme) as ColorScheme | undefined,

  set: (colorScheme: ColorScheme) => {
    const isBrowser = createdDom()

    if (isBrowser) {
      document.documentElement.style.setProperty('color-scheme', colorScheme)
      document.documentElement.setAttribute('data-theme', colorScheme)
    }
  },
}
