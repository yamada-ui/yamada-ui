import { ThemeScheme } from '../theme.types'
import { THEME_SCHEME_STORAGE_KEY } from './theme-script'

const hasSupport = !!globalThis?.document

export type ThemeSchemeManager = {
  type: 'cookie' | 'localStorage'
  ssr?: boolean
  get: (initialThemeScheme?: ThemeScheme) => ThemeScheme | undefined
  set: (themeScheme: ThemeScheme) => void
}

const createLocalStorage = (storageKey: string): ThemeSchemeManager => ({
  ssr: false,
  type: 'localStorage',
  get: (initThemeScheme) => {
    if (!hasSupport) return initThemeScheme

    try {
      const themeScheme = localStorage.getItem(storageKey) as ThemeScheme | null

      return themeScheme || initThemeScheme
    } catch (e) {
      return initThemeScheme
    }
  },

  set: (themeScheme) => {
    try {
      localStorage.setItem(storageKey, String(themeScheme))
    } catch (e) {}
  },
})

const parseCookie = (cookie: string, key: string): ThemeScheme | undefined => {
  const match = cookie.match(new RegExp(`(^| )${key}=([^;]+)`))

  return match?.[2] as ThemeScheme | undefined
}

const createCookieStorage = (
  key: string,
  cookie?: string,
): ThemeSchemeManager => ({
  ssr: !!cookie,
  type: 'cookie',
  get: (initThemeScheme) => {
    if (cookie) return parseCookie(cookie, key)

    if (!hasSupport) return initThemeScheme

    return parseCookie(document.cookie, key) || initThemeScheme
  },

  set: (themeScheme) => {
    document.cookie = `${key}=${themeScheme}; max-age=31536000; path=/`
  },
})

const cookieStorageSSR = (cookie: string) =>
  createCookieStorage(THEME_SCHEME_STORAGE_KEY, cookie)

export const themeSchemeManager = {
  localStorage: createLocalStorage(THEME_SCHEME_STORAGE_KEY),
  cookieStorage: createCookieStorage(THEME_SCHEME_STORAGE_KEY),
  createLocalStorage,
  cookieStorageSSR,
  createCookieStorage,
}
