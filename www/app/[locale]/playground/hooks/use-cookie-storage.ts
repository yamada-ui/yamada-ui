"use client"

import type { Resizable } from "@yamada-ui/react"
import { useMemo } from "react"
import { COOKIE_CONFIG } from "../constants"

/**
 * Hook to create cookie-based storage for resizable components
 */
export const useCookieStorage = (): Resizable.Storage => {
  return useMemo(
    () => ({
      getItem: (key) => {
        const match = document.cookie.match(new RegExp(`(^| )${key}=([^;]+)`))
        return match ? match[2] : null
      },
      setItem: (key, value) => {
        document.cookie = `${key}=${value}; max-age=${COOKIE_CONFIG.maxAge}; path=${COOKIE_CONFIG.path}`
      },
    }),
    [],
  )
}
