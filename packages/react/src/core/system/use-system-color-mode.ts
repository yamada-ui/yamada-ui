"use client"

import type { ColorMode } from "./index.types"
import { useCallback, useEffect, useState } from "react"
import { fnAll, useCallbackRef, useSafeLayoutEffect } from "../../utils"
import { useEnvironment } from "./environment-provider"

export interface UseSystemColorModeProps {
  defaultColorMode: ColorMode
  callback?: (colorMode: ColorMode) => void
}

/**
 * `useSystemColorMode` is a custom hook that returns the current system color mode.
 */
export const useSystemColorMode = ({
  callback,
  defaultColorMode,
}: UseSystemColorModeProps) => {
  const { getWindow } = useEnvironment()
  const callbackRef = useCallbackRef(callback)
  const [systemColorMode, setSystemColorMode] =
    useState<ColorMode>(defaultColorMode)

  const getSystemColorMode = useCallback(
    (fallback?: ColorMode) => {
      const mql = getWindow()?.matchMedia("(prefers-color-scheme: dark)")
      const dark = mql?.matches ?? fallback === "dark"

      return dark ? "dark" : "light"
    },
    [getWindow],
  )

  const systemColorModeObserver = useCallback(
    (func: (cm: ColorMode) => void) => {
      const mql = getWindow()?.matchMedia("(prefers-color-scheme: dark)")

      const listener = (e: MediaQueryListEvent) => {
        func(e.matches ? "dark" : "light")
      }

      if (typeof mql?.addListener === "function") {
        mql.addListener(listener)
      } else {
        mql?.addEventListener("change", listener)
      }

      return () => {
        if (typeof mql?.removeListener === "function") {
          mql.removeListener(listener)
        } else {
          mql?.removeEventListener("change", listener)
        }
      }
    },
    [getWindow],
  )

  useSafeLayoutEffect(() => {
    setSystemColorMode(getSystemColorMode())
  }, [getSystemColorMode])

  useEffect(() => {
    return systemColorModeObserver(fnAll(setSystemColorMode, callbackRef))
  }, [systemColorModeObserver, getSystemColorMode, callbackRef])

  return { getSystemColorMode, systemColorMode }
}
