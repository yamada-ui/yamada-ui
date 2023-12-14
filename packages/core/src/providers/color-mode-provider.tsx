import { noop, useSafeLayoutEffect } from "@yamada-ui/utils"
import type { FC, ReactNode } from "react"
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  useContext,
} from "react"
import type { ColorMode } from "../css"
import type { ThemeConfig } from "../theme.types"
import type { ColorModeManager } from "./color-mode-manager"
import { colorModeLocalStorageManager } from "./color-mode-manager"
import { getColorModeUtils } from "./color-mode-utils"

type ColorModeContext = {
  forced?: boolean
  colorMode: ColorMode
  internalColorMode: ColorMode | "system"
  changeColorMode: (colorMode: ColorMode | "system") => void
  toggleColorMode: () => void
}

const getColorMode = (
  manager: ColorModeManager,
  fallback: ColorMode | "system",
) =>
  manager.type === "cookie" && manager.ssr ? manager.get(fallback) : fallback

export const ColorModeContext = createContext({} as ColorModeContext)

export type ColorModeProviderProps = {
  colorMode?: ColorMode
  /**
   * The config of the yamada ui.
   */
  config?: ThemeConfig
  children?: ReactNode
  /**
   * Manager to persist a user's color mode preference.
   *
   * Omit if you don't render server-side.
   * For SSR, choose `colorModeSSRManager`.
   *
   * @default 'colorModeLocalStorageManager'
   */
  colorModeManager?: ColorModeManager
}

export const ColorModeProvider: FC<ColorModeProviderProps> = ({
  colorMode: defaultColorMode,
  colorModeManager = colorModeLocalStorageManager,
  config: { initialColorMode = "light", disableTransitionOnChange = true } = {},
  children,
}) => {
  const [colorMode, setColorMode] = useState<ColorMode | "system">(() =>
    getColorMode(colorModeManager, initialColorMode),
  )
  const [systemColorMode, setSystemColorMode] = useState<ColorMode | undefined>(
    undefined,
  )

  const defaultResolvedColorMode =
    initialColorMode === "dark" ? "dark" : "light"
  const resolvedColorMode =
    colorMode === "system"
      ? systemColorMode
        ? systemColorMode
        : defaultResolvedColorMode
      : colorMode

  const { getSystemColorMode, setClassName, setDataset, addListener } = useMemo(
    () => getColorModeUtils({ isPreventTransition: disableTransitionOnChange }),
    [disableTransitionOnChange],
  )

  const changeColorMode = useCallback(
    (colorMode: ColorMode | "system"): void => {
      const resolved = colorMode === "system" ? getSystemColorMode() : colorMode

      setColorMode(colorMode)
      setClassName(resolved === "dark")
      setDataset(resolved)

      colorModeManager.set(colorMode)
    },
    [colorModeManager, getSystemColorMode, setClassName, setDataset],
  )

  const changeSystemColorMode = useCallback(
    (systemColorMode: ColorMode): void => {
      setSystemColorMode(systemColorMode)

      if (colorMode !== "system") return

      setClassName(systemColorMode === "dark")
      setDataset(systemColorMode)
    },
    [colorMode, setClassName, setDataset],
  )

  const toggleColorMode = useCallback((): void => {
    changeColorMode(resolvedColorMode === "dark" ? "light" : "dark")
  }, [changeColorMode, resolvedColorMode])

  useSafeLayoutEffect(() => {
    setSystemColorMode(getSystemColorMode())
  }, [initialColorMode, addListener, changeColorMode])

  useEffect(() => {
    const managerValue = colorModeManager.get()

    if (managerValue) changeColorMode(managerValue)
  }, [changeColorMode, colorModeManager])

  useEffect(() => {
    return addListener(changeSystemColorMode)
  }, [addListener, changeSystemColorMode])

  const context = useMemo(
    () => ({
      colorMode: defaultColorMode ?? (resolvedColorMode as ColorMode),
      internalColorMode: colorMode as ColorMode | "system",
      changeColorMode: defaultColorMode ? noop : changeColorMode,
      toggleColorMode: defaultColorMode ? noop : toggleColorMode,
      forced: defaultColorMode !== undefined,
    }),
    [
      defaultColorMode,
      resolvedColorMode,
      colorMode,
      changeColorMode,
      toggleColorMode,
    ],
  )

  return (
    <ColorModeContext.Provider value={context}>
      {children}
    </ColorModeContext.Provider>
  )
}

export const useColorMode = () => {
  const context = useContext(ColorModeContext)

  if (context === undefined)
    throw new Error("useColorMode must be used within a ColorModeProvider")

  return context
}

export const useColorModeValue = <L extends any, D extends any>(
  light: L,
  dark: D,
): L | D => {
  const { colorMode } = useColorMode()

  return colorMode === "light" ? light : dark
}
