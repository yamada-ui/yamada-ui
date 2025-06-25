"use client"

import type { ColorMode, ColorModeWithSystem } from "./index.types"
import { COLOR_MODE_STORAGE_KEY } from "./color-mode-script"

const hasSupport = !!(globalThis.document as Document | undefined)

export interface ColorModeManager {
  type: "cookie" | "localStorage"
  get: (
    initColorMode?: ColorModeWithSystem,
  ) => (storageKey?: string) => ColorModeWithSystem
  set: (colorMode: ColorModeWithSystem) => (storageKey?: string) => void
  ssr?: boolean
}

const createLocalStorage = (defaultStorageKey: string): ColorModeManager => ({
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

  ssr: false,
})

const parseCookie = (cookie: string, key: string): ColorMode | undefined => {
  const match = cookie.match(new RegExp(`(^| )${key}=([^;]+)`))

  return match?.[2] as ColorMode | undefined
}

const createCookieStorage = (
  defaultStorageKey: string,
  cookie?: string,
): ColorModeManager => ({
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

  ssr: !!cookie,
})

export const createColorModeManager = (
  type: "cookie" | "local" | "ssr" = "local",
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
  cookieStorage: createCookieStorage(COLOR_MODE_STORAGE_KEY),
  createCookieStorage,
  createLocalStorage,
  localStorage: createLocalStorage(COLOR_MODE_STORAGE_KEY),
  ssr: (cookie?: string) => createCookieStorage(COLOR_MODE_STORAGE_KEY, cookie),
}
