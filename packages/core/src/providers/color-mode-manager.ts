import type { ColorMode } from "../css"
import { COLOR_MODE_STORAGE_KEY } from "./color-mode-script"

const hasSupport = !!globalThis?.document

export type ColorModeManager = {
  type: "cookie" | "localStorage"
  ssr?: boolean
  get: (initColorMode?: ColorMode | "system") => ColorMode | "system"
  set: (colorMode: ColorMode | "system") => void
}

const createLocalStorageManager = (storageKey: string): ColorModeManager => ({
  ssr: false,
  type: "localStorage",
  get: (initColorMode = "light") => {
    if (!hasSupport) return initColorMode

    try {
      const colorMode = localStorage.getItem(storageKey) as ColorMode | null

      return colorMode || initColorMode
    } catch (e) {
      return initColorMode
    }
  },

  set: (colorMode) => {
    try {
      localStorage.setItem(storageKey, colorMode)
    } catch (e) {}
  },
})

const parseCookie = (cookie: string, key: string): ColorMode | undefined => {
  const match = cookie.match(new RegExp(`(^| )${key}=([^;]+)`))

  return match?.[2] as ColorMode | undefined
}

const createCookieStorageManager = (
  key: string,
  cookie?: string,
): ColorModeManager => ({
  ssr: !!cookie,
  type: "cookie",
  get: (initColorMode = "light") => {
    if (cookie) return parseCookie(cookie, key) || initColorMode

    if (!hasSupport) return initColorMode

    return parseCookie(document.cookie, key) || initColorMode
  },

  set: (colorMode) => {
    document.cookie = `${key}=${colorMode}; max-age=31536000; path=/`
  },
})

export const createColorModeManager = (
  type: "local" | "cookie" | "ssr" = "local",
  cookie?: string,
) => {
  switch (type) {
    case "cookie":
    case "ssr":
      return createCookieStorageManager(COLOR_MODE_STORAGE_KEY, cookie)

    default:
      return createLocalStorageManager(COLOR_MODE_STORAGE_KEY)
  }
}

export const colorModeLocalStorageManager = createLocalStorageManager(
  COLOR_MODE_STORAGE_KEY,
)
export const colorModeCookieStorageManager = createCookieStorageManager(
  COLOR_MODE_STORAGE_KEY,
)
export const colorModeSSRManager = (cookie: string) =>
  createCookieStorageManager(COLOR_MODE_STORAGE_KEY, cookie)
