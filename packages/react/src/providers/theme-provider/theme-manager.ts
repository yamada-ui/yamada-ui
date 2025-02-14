import type { ThemeTokens } from "../../core"
import { THEME_SCHEME_STORAGE_KEY } from "./theme-script"

const hasSupport = !!(globalThis.document as Document | undefined)

export interface ThemeSchemeManager {
  type: "cookie" | "localStorage"
  get: (
    initialThemeScheme?: ThemeTokens["themeSchemes"],
  ) => (storageKey?: string) => ThemeTokens["themeSchemes"]
  set: (
    themeScheme: ThemeTokens["themeSchemes"],
  ) => (storageKey?: string) => void
  ssr?: boolean
}

const createLocalStorage = (defaultStorageKey: string): ThemeSchemeManager => ({
  type: "localStorage",
  get:
    (initThemeScheme = "base") =>
    (storageKey = defaultStorageKey) => {
      if (!hasSupport) return initThemeScheme

      try {
        const themeScheme = localStorage.getItem(storageKey) as
          | null
          | ThemeTokens["themeSchemes"]

        return themeScheme || initThemeScheme
      } catch {
        return initThemeScheme
      }
    },
  set:
    (themeScheme) =>
    (storageKey = defaultStorageKey) => {
      try {
        localStorage.setItem(storageKey, String(themeScheme))
      } catch {}
    },

  ssr: false,
})

const parseCookie = (
  cookie: string,
  key: string,
): ThemeTokens["themeSchemes"] | undefined => {
  const match = cookie.match(new RegExp(`(^| )${key}=([^;]+)`))

  return match?.[2] as ThemeTokens["themeSchemes"] | undefined
}

const createCookieStorage = (
  defaultStorageKey: string,
  cookie?: string,
): ThemeSchemeManager => ({
  type: "cookie",
  get:
    (initThemeScheme = "base") =>
    (storageKey = defaultStorageKey) => {
      if (cookie) return parseCookie(cookie, storageKey) || initThemeScheme

      if (!hasSupport) return initThemeScheme

      return parseCookie(document.cookie, storageKey) || initThemeScheme
    },
  set:
    (themeScheme) =>
    (storageKey = defaultStorageKey) => {
      document.cookie = `${storageKey}=${themeScheme}; max-age=31536000; path=/`
    },

  ssr: !!cookie,
})

export const createThemeSchemeManager = (
  type: "cookie" | "local" | "ssr" = "local",
  cookie?: string,
) => {
  switch (type) {
    case "cookie":
    case "ssr":
      return createCookieStorage(
        THEME_SCHEME_STORAGE_KEY,
        typeof cookie === "string" ? cookie : undefined,
      )

    default:
      return createLocalStorage(THEME_SCHEME_STORAGE_KEY)
  }
}

export const themeSchemeManager = {
  cookieStorage: createCookieStorage(THEME_SCHEME_STORAGE_KEY),
  createCookieStorage,
  createLocalStorage,
  localStorage: createLocalStorage(THEME_SCHEME_STORAGE_KEY),
  ssr: (cookie?: string) =>
    createCookieStorage(THEME_SCHEME_STORAGE_KEY, cookie),
}
