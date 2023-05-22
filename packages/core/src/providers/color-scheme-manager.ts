import { ColorScheme } from '../css'
import { STORAGE_KEY } from './color-scheme-script'

const hasSupport = !!globalThis?.document

export type ColorSchemeManager = {
  type: 'cookie' | 'localStorage'
  ssr?: boolean
  get: (initColorScheme?: ColorScheme) => ColorScheme | undefined
  set: (colorScheme: ColorScheme | 'system') => void
}

export const createLocalStorageManager = (storageKey: string): ColorSchemeManager => ({
  ssr: false,
  type: 'localStorage',
  get(initColorScheme = 'light') {
    if (!hasSupport) return initColorScheme

    try {
      const colorScheme = localStorage.getItem(storageKey) as ColorScheme | null

      return colorScheme || initColorScheme
    } catch (e) {
      return initColorScheme
    }
  },

  set(colorShcme) {
    try {
      localStorage.setItem(storageKey, colorShcme)
    } catch (e) {}
  },
})

export const localStorageManager = createLocalStorageManager(STORAGE_KEY)

const parseCookie = (cookie: string, key: string): ColorScheme | undefined => {
  const match = cookie.match(new RegExp(`(^| )${key}=([^;]+)`))

  return match?.[2] as ColorScheme | undefined
}

export const createCookieStorageManager = (key: string, cookie?: string): ColorSchemeManager => ({
  ssr: !!cookie,
  type: 'cookie',
  get(initColorScheme: ColorScheme = 'light') {
    if (cookie) return parseCookie(cookie, key)

    if (!hasSupport) return initColorScheme

    return parseCookie(document.cookie, key) || initColorScheme
  },

  set(colorShcme: ColorScheme | 'system') {
    document.cookie = `${key}=${colorShcme}; max-age=31536000; path=/`
  },
})

export const cookieStorageManager = createCookieStorageManager(STORAGE_KEY)

export const cookieStorageManagerSSR = (cookie: string) =>
  createCookieStorageManager(STORAGE_KEY, cookie)
