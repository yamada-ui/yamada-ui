import type { Theme } from "../theme.types"
import { THEME_SCHEME_STORAGE_KEY } from "./theme-script"

const hasSupport = !!globalThis?.document

export type ThemeSchemeManager = {
  type: "cookie" | "localStorage"
  ssr?: boolean
  get: (initialThemeScheme?: Theme["themeSchemes"]) => Theme["themeSchemes"]
  set: (themeScheme: Theme["themeSchemes"]) => void
}

const createLocalStorageManager = (storageKey: string): ThemeSchemeManager => ({
  ssr: false,
  type: "localStorage",
  get: (initThemeScheme = "base") => {
    if (!hasSupport) return initThemeScheme

    try {
      const themeScheme = localStorage.getItem(storageKey) as
        | Theme["themeSchemes"]
        | null

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

const parseCookie = (
  cookie: string,
  key: string,
): Theme["themeSchemes"] | undefined => {
  const match = cookie.match(new RegExp(`(^| )${key}=([^;]+)`))

  return match?.[2] as Theme["themeSchemes"] | undefined
}

const createCookieStorageManager = (
  key: string,
  cookie?: string,
): ThemeSchemeManager => ({
  ssr: !!cookie,
  type: "cookie",
  get: (initThemeScheme = "base") => {
    if (cookie) return parseCookie(cookie, key) || initThemeScheme

    if (!hasSupport) return initThemeScheme

    return parseCookie(document.cookie, key) || initThemeScheme
  },

  set: (themeScheme) => {
    document.cookie = `${key}=${themeScheme}; max-age=31536000; path=/`
  },
})

export const createThemeSchemeManager = (
  type: "local" | "cookie" | "ssr" = "local",
  cookie?: string,
) => {
  switch (type) {
    case "cookie":
    case "ssr":
      return createCookieStorageManager(
        THEME_SCHEME_STORAGE_KEY,
        typeof cookie === "string" ? cookie : undefined,
      )

    default:
      return createLocalStorageManager(THEME_SCHEME_STORAGE_KEY)
  }
}

export const themeSchemeLocalStorageManager = createLocalStorageManager(
  THEME_SCHEME_STORAGE_KEY,
)
export const themeSchemeCookieStorageManager = createCookieStorageManager(
  THEME_SCHEME_STORAGE_KEY,
)
export const themeSchemeSSRManager = (cookie: string) =>
  createCookieStorageManager(THEME_SCHEME_STORAGE_KEY, cookie)
