"use client"

import type { FC, PropsWithChildren } from "react"
import type { ColorModeManager } from "./color-mode-manager"
import type { ColorMode, ColorModeWithSystem, ThemeConfig } from "./index.types"
import {
  createContext,
  use,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react"
import { isEmptyObject, noop } from "../../utils"
import { colorModeManager } from "./color-mode-manager"
import { getColorModeUtils } from "./color-mode-utils"
import { useEnvironment } from "./environment-provider"
import { useSystemColorMode } from "./use-system-color-mode"

const { localStorage } = colorModeManager

interface ColorModeContext {
  changeColorMode: (colorMode: ColorModeWithSystem) => void
  colorMode: ColorMode
  internalColorMode: ColorModeWithSystem
  toggleColorMode: () => void
  forced?: boolean
}

const getColorMode =
  (manager: ColorModeManager, fallback: ColorModeWithSystem) =>
  (storageKey?: string) =>
    manager.type === "cookie" && manager.ssr
      ? manager.get(fallback)(storageKey)
      : fallback

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
   * Manager to persist a user's color mode preference.
   *
   * Omit if you don't render server-side.
   * For SSR, choose `colorModeManager.ssr`.
   *
   * @default 'colorModeManager.localStorage'
   */
  colorModeManager?: ColorModeManager
  /**
   * The config of the yamada ui.
   */
  config?: ThemeConfig
  /**
   * Key of value saved in storage.
   * By default, it is saved to `local storage`.
   */
  storageKey?: string
}

export const ColorModeProvider: FC<ColorModeProviderProps> = ({
  children,
  colorMode: forcedColorMode,
  colorModeManager = localStorage,
  config: {
    defaultColorMode = "light" as ColorModeWithSystem,
    disableTransitionOnChange = true,
  } = {},
  storageKey,
}) => {
  const environment = useEnvironment()
  const [colorMode, setColorMode] = useState<ColorModeWithSystem>(() =>
    getColorMode(colorModeManager, defaultColorMode)(storageKey),
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

  const { getSystemColorMode, setClassName, setDataset } = useMemo(
    () =>
      getColorModeUtils({
        environment,
        preventTransition: disableTransitionOnChange,
      }),
    [disableTransitionOnChange, environment],
  )

  const changeColorMode = useCallback(
    (colorMode: ColorModeWithSystem): void => {
      const resolved = colorMode === "system" ? getSystemColorMode() : colorMode

      setColorMode(colorMode)
      setClassName(resolved === "dark")
      setDataset(resolved)

      colorModeManager.set(colorMode)(storageKey)
    },
    [
      colorModeManager,
      getSystemColorMode,
      setClassName,
      setDataset,
      storageKey,
    ],
  )

  const toggleColorMode = useCallback((): void => {
    changeColorMode(resolvedColorMode === "dark" ? "light" : "dark")
  }, [changeColorMode, resolvedColorMode])

  useEffect(() => {
    const managerValue = colorModeManager.get()(storageKey)

    changeColorMode(managerValue)
  }, [changeColorMode, colorModeManager, storageKey])

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
