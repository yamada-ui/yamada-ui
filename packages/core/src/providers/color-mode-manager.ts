import type { ColorMode } from "../css"
import { COLOR_MODE_STORAGE_KEY } from "./color-mode-script"

const hasSupport = !!globalThis?.document

export type ColorModeManager = {
  type: "cookie" | "localStorage"
  ssr?: boolean
  get: (
    initColorMode?: ColorMode | "system",
  ) => (storageKey?: string) => ColorMode | "system"
  set: (colorMode: ColorMode | "system") => (storageKey?: string) => void
}

const createLocalStorage = (defaultStorageKey: string): ColorModeManager => ({
  ssr: false,
  type: "localStorage",
  get:
    (initColorMode = "light") =>
    (storageKey = defaultStorageKey) => {
      if (!hasSupport) return initColorMode

      try {
        const colorMode = localStorage.getItem(storageKey) as ColorMode | null

        return colorMode || initColorMode
      } catch {
        return initColorMode
      }
    },

  set:
    (colorMode) =>
    (storageKey = defaultStorageKey) => {
      try {
        localStorage.setItem(storageKey, colorMode)
      } catch {}
    },
})

const parseCookie = (cookie: string, key: string): ColorMode | undefined => {
  const match = cookie.match(new RegExp(`(^| )${key}=([^;]+)`))

  return match?.[2] as ColorMode | undefined
}

const createCookieStorage = (
  defaultStorageKey: string,
  cookie?: string,
): ColorModeManager => ({
  ssr: !!cookie,
  type: "cookie",
  get:
    (initColorMode = "light") =>
    (storageKey = defaultStorageKey) => {
      if (cookie) return parseCookie(cookie, storageKey) || initColorMode

      if (!hasSupport) return initColorMode

      return parseCookie(document.cookie, storageKey) || initColorMode
    },

  set:
    (colorMode) =>
    (storageKey = defaultStorageKey) => {
      document.cookie = `${storageKey}=${colorMode}; max-age=31536000; path=/`
    },
})

export const createColorModeManager = (
  type: "local" | "cookie" | "ssr" = "local",
  cookie?: string,
) => {
  switch (type) {
    case "cookie":
    case "ssr":
      return createCookieStorage(
        COLOR_MODE_STORAGE_KEY,
        typeof cookie === "string" ? cookie : undefined,
      )

    default:
      return createLocalStorage(COLOR_MODE_STORAGE_KEY)
  }
}

export const colorModeManager = {
  localStorage: createLocalStorage(COLOR_MODE_STORAGE_KEY),
  cookieStorage: createCookieStorage(COLOR_MODE_STORAGE_KEY),
  ssr: (cookie?: string) => createCookieStorage(COLOR_MODE_STORAGE_KEY, cookie),
  createLocalStorage,
  createCookieStorage,
}
