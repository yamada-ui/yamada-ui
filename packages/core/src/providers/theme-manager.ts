import type { Theme } from "../theme.types"
import { THEME_SCHEME_STORAGE_KEY } from "./theme-script"

const hasSupport = !!globalThis?.document

export type ThemeSchemeManager = {
  type: "cookie" | "localStorage"
  ssr?: boolean
  get: (
    initialThemeScheme?: Theme["themeSchemes"],
  ) => (storageKey?: string) => Theme["themeSchemes"]
  set: (themeScheme: Theme["themeSchemes"]) => (storageKey?: string) => void
}

const createLocalStorage = (defaultStorageKey: string): ThemeSchemeManager => ({
  ssr: false,
  type: "localStorage",
  get:
    (initThemeScheme = "base") =>
    (storageKey = defaultStorageKey) => {
      if (!hasSupport) return initThemeScheme

      try {
        const themeScheme = localStorage.getItem(storageKey) as
          | Theme["themeSchemes"]
          | null

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
})

const parseCookie = (
  cookie: string,
  key: string,
): Theme["themeSchemes"] | undefined => {
  const match = cookie.match(new RegExp(`(^| )${key}=([^;]+)`))

  return match?.[2] as Theme["themeSchemes"] | undefined
}

const createCookieStorage = (
  defaultStorageKey: string,
  cookie?: string,
): ThemeSchemeManager => ({
  ssr: !!cookie,
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
})

export const createThemeSchemeManager = (
  type: "local" | "cookie" | "ssr" = "local",
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
  localStorage: createLocalStorage(THEME_SCHEME_STORAGE_KEY),
  cookieStorage: createCookieStorage(THEME_SCHEME_STORAGE_KEY),
  ssr: (cookie?: string) =>
    createCookieStorage(THEME_SCHEME_STORAGE_KEY, cookie),
  createLocalStorage,
  createCookieStorage,
}
