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
import { useEnvironment } from "./environment-provider"
import { createStorageManager } from "./storage-manager"
import { COLOR_MODE_STORAGE_KEY } from "./storage-script"
import { getPreventTransition } from "./theme-provider"
import { useSystemColorMode } from "./use-system-color-mode"

interface ColorModeContext {
  changeColorMode: (colorMode: ColorModeWithSystem) => void
  colorMode: ColorMode
  internalColorMode: ColorModeWithSystem
  toggleColorMode: () => void
  forced?: boolean
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
  storage = "localStorage" as Storage,
  storageKey = COLOR_MODE_STORAGE_KEY,
}) => {
  const storageManager = useMemo(
    () => createStorageManager(storage, storageKey, defaultColorMode, cookie),
    [cookie, defaultColorMode, storage, storageKey],
  )
  const environment = useEnvironment()
  const { getDocument, getWindow } = environment
  const [colorMode, setColorMode] = useState<ColorModeWithSystem>(
    storageManager.get(),
  )
  const systemColorMode = useSystemColorMode({
    callback: (systemColorMode) => {
      if (colorMode !== "system") return

      setClassName(systemColorMode === "dark")
      setDataset(systemColorMode)
    },
  })
  const computedColorMode = defaultColorMode === "dark" ? "dark" : "light"
  const resolvedColorMode =
    colorMode === "system"
      ? systemColorMode
        ? systemColorMode
        : computedColorMode
      : colorMode

  const getSystemColorMode = useCallback(
    (fallback?: ColorMode) => {
      const mql = getWindow()?.matchMedia("(prefers-color-scheme: dark)")
      const dark = mql?.matches ?? fallback === "dark"

      return dark ? "dark" : "light"
    },
    [getWindow],
  )

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
    (colorMode: ColorModeWithSystem): void => {
      const resolved = colorMode === "system" ? getSystemColorMode() : colorMode

      setColorMode(colorMode)
      setClassName(resolved === "dark")
      setDataset(resolved)

      storageManager.set(colorMode)
    },
    [storageManager, getSystemColorMode, setClassName, setDataset],
  )

  const toggleColorMode = useCallback((): void => {
    changeColorMode(resolvedColorMode === "dark" ? "light" : "dark")
  }, [changeColorMode, resolvedColorMode])

  useEffect(() => {
    const colorMode = storageManager.get()

    changeColorMode(colorMode)
  }, [changeColorMode, storageManager])

  const context = useMemo(
    () => ({
      changeColorMode: forcedColorMode ? noop : changeColorMode,
      colorMode: forcedColorMode ?? resolvedColorMode,
      forced: forcedColorMode !== undefined,
      internalColorMode: colorMode,
      toggleColorMode: forcedColorMode ? noop : toggleColorMode,
    }),
    [
      forcedColorMode,
      resolvedColorMode,
      colorMode,
      changeColorMode,
      toggleColorMode,
    ],
  )

  return <ColorModeContext value={context}>{children}</ColorModeContext>
}

/**
 * `useColorMode` is a custom hook that returns the current color mode.
 *
 * @see https://yamada-ui.com/hooks/use-color-mode
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
