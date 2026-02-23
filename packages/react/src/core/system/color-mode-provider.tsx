"use client"

import type { FC, PropsWithChildren } from "react"
import type { ColorMode, ColorModeWithSystem, ThemeConfig } from "./index.types"
import type { Storage } from "./storage-manager"
import {
  createContext,
  use,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react"
import { isEmptyObject, noop } from "../../utils"
import { COLOR_MODE_STORAGE_KEY } from "../constant"
import { useEnvironment } from "./environment-provider"
import { createStorageManager } from "./storage-manager"
import { getPreventTransition } from "./theme-provider"
import { useSystemColorMode } from "./use-system-color-mode"

interface ColorModeContext {
  changeColorMode: (colorMode: ColorModeWithSystem) => void
  colorMode: ColorMode
  forced?: boolean
  internalColorMode: ColorModeWithSystem
  toggleColorMode: () => void
}

export const ColorModeContext = createContext<ColorModeContext>({
  changeColorMode: noop,
  colorMode: "light",
  forced: false,
  internalColorMode: "light",
  toggleColorMode: noop,
})

export interface ColorModeProviderProps extends PropsWithChildren {
  /**
   * The forced color mode.
   */
  colorMode?: ColorMode
  /**
   * The config of the yamada ui.
   */
  config?: ThemeConfig
  /**
   * If `storage` is `cookie`, the cookie to use.
   * If not provided, the cookie will be set to `document.cookie`.
   */
  cookie?: string
  /**
   * The storage to use.
   * If you are using a server-side rendering library, you should use `cookie`.
   *
   * @default 'localStorage'
   */
  storage?: Storage
  /**
   * The key of the value saved in storage.
   *
   * @default 'color-mode'
   */
  storageKey?: string
}

export const ColorModeProvider: FC<ColorModeProviderProps> = ({
  children,
  colorMode: forcedColorMode,
  config: {
    defaultColorMode = "light" as ColorModeWithSystem,
    disableTransitionOnChange = true,
  } = {},
  cookie,
  storage = !!cookie ? "cookie" : "localStorage",
  storageKey = COLOR_MODE_STORAGE_KEY,
}) => {
  const storageManager = useMemo(
    () =>
      createStorageManager<ColorModeWithSystem, ColorMode>(
        storage,
        storageKey,
        defaultColorMode,
        cookie,
      ),
    [cookie, defaultColorMode, storage, storageKey],
  )
  const environment = useEnvironment()
  const { getDocument } = environment
  const [internalColorMode, setInternalColorMode] =
    useState<ColorModeWithSystem>(storageManager.get())
  const { getSystemColorMode, systemColorMode } = useSystemColorMode({
    callback: (systemColorMode) => {
      if (internalColorMode !== "system") return

      setClassName(systemColorMode === "dark")
      setDataset(systemColorMode)
    },
    defaultColorMode: storageManager.default(
      defaultColorMode === "dark" ? "dark" : "light",
    ),
  })
  const colorMode =
    internalColorMode === "system" ? systemColorMode : internalColorMode

  const setDataset = useCallback(
    (colorMode: ColorMode) => {
      const doc = getDocument()

      if (!doc) return

      const cleanup = disableTransitionOnChange
        ? getPreventTransition(environment)
        : undefined

      doc.documentElement.dataset.mode = colorMode
      doc.documentElement.style.colorScheme = colorMode

      cleanup?.()
    },
    [disableTransitionOnChange, environment, getDocument],
  )

  const setClassName = useCallback(
    (isDark: boolean) => {
      const doc = getDocument()

      if (!doc) return

      doc.body.classList.add(isDark ? "dark" : "light")
      doc.body.classList.remove(isDark ? "light" : "dark")
    },
    [getDocument],
  )

  const changeColorMode = useCallback(
    (internalColorMode: ColorModeWithSystem) => {
      const colorMode =
        internalColorMode === "system"
          ? getSystemColorMode()
          : internalColorMode

      setInternalColorMode(internalColorMode)
      setClassName(colorMode === "dark")
      setDataset(colorMode)

      storageManager.set(internalColorMode)
    },
    [storageManager, getSystemColorMode, setClassName, setDataset],
  )

  const toggleColorMode = useCallback(() => {
    changeColorMode(colorMode === "dark" ? "light" : "dark")
  }, [changeColorMode, colorMode])

  useEffect(() => {
    const internalColorMode = storageManager.get()

    changeColorMode(internalColorMode)
  }, [changeColorMode, storageManager])

  const context = useMemo(
    () => ({
      changeColorMode: forcedColorMode ? noop : changeColorMode,
      colorMode: forcedColorMode ?? colorMode,
      forced: forcedColorMode !== undefined,
      internalColorMode,
      toggleColorMode: forcedColorMode ? noop : toggleColorMode,
    }),
    [
      forcedColorMode,
      colorMode,
      internalColorMode,
      changeColorMode,
      toggleColorMode,
    ],
  )

  return <ColorModeContext value={context}>{children}</ColorModeContext>
}

/**
 * `useColorMode` is a custom hook that returns the current color mode.
 *
 * @see https://yamada-ui.com/docs/hooks/use-color-mode
 */
export const useColorMode = (): ColorModeContext => {
  const context = use(ColorModeContext)

  if (isEmptyObject(context)) {
    return {
      changeColorMode: noop,
      colorMode: "light",
      forced: false,
      internalColorMode: "light",
      toggleColorMode: noop,
    }
  } else {
    return context
  }
}
