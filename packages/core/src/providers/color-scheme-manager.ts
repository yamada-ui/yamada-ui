import { ColorMode } from '../css'
import { STORAGE_KEY } from './color-scheme-script'

const hasSupport = !!globalThis?.document

export type ColorModeManager = {
  type: 'cookie' | 'localStorage'
  ssr?: boolean
  get: (initColorMode?: ColorMode) => ColorMode | undefined
  set: (colorMode: ColorMode | 'system') => void
}

export const createLocalStorageManager = (storageKey: string): ColorModeManager => ({
  ssr: false,
  type: 'localStorage',
  get(initColorMode = 'light') {
    if (!hasSupport) return initColorMode

    try {
      const colorMode = localStorage.getItem(storageKey) as ColorMode | null

      return colorMode || initColorMode
    } catch (e) {
      return initColorMode
    }
  },

  set(colorShcme) {
    try {
      localStorage.setItem(storageKey, colorShcme)
    } catch (e) {}
  },
})

export const localStorageManager = createLocalStorageManager(STORAGE_KEY)

const parseCookie = (cookie: string, key: string): ColorMode | undefined => {
  const match = cookie.match(new RegExp(`(^| )${key}=([^;]+)`))

  return match?.[2] as ColorMode | undefined
}

export const createCookieStorageManager = (key: string, cookie?: string): ColorModeManager => ({
  ssr: !!cookie,
  type: 'cookie',
  get(initColorMode: ColorMode = 'light') {
    if (cookie) return parseCookie(cookie, key)

    if (!hasSupport) return initColorMode

    return parseCookie(document.cookie, key) || initColorMode
  },

  set(colorShcme: ColorMode | 'system') {
    document.cookie = `${key}=${colorShcme}; max-age=31536000; path=/`
  },
})

export const cookieStorageManager = createCookieStorageManager(STORAGE_KEY)

export const cookieStorageManagerSSR = (cookie: string) =>
  createCookieStorageManager(STORAGE_KEY, cookie)
