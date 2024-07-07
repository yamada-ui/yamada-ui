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
import { colorModeManager } from "./color-mode-manager"
import { getColorModeUtils } from "./color-mode-utils"
import { useEnvironment } from "./environment-provider"

const { localStorage } = colorModeManager

type ColorModeContext = {
  forced?: boolean
  colorMode: ColorMode
  internalColorMode: ColorMode | "system"
  changeColorMode: (colorMode: ColorMode | "system") => void
  toggleColorMode: () => void
}

const getColorMode =
  (manager: ColorModeManager, fallback: ColorMode | "system") =>
  (storageKey?: string) =>
    manager.type === "cookie" && manager.ssr
      ? manager.get(fallback)(storageKey)
      : fallback

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
   * For SSR, choose `colorModeManager.ssr`.
   *
   * @default 'colorModeManager.localStorage'
   */
  colorModeManager?: ColorModeManager
  /**
   * Key of value saved in storage.
   * By default, it is saved to `local storage`.
   */
  storageKey?: string
}

export const ColorModeProvider: FC<ColorModeProviderProps> = ({
  colorMode: defaultColorMode,
  colorModeManager = localStorage,
  storageKey,
  config: { initialColorMode = "light", disableTransitionOnChange = true } = {},
  children,
}) => {
  const environment = useEnvironment()
  const [colorMode, setColorMode] = useState<ColorMode | "system">(() =>
    getColorMode(colorModeManager, initialColorMode)(storageKey),
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
    () =>
      getColorModeUtils({
        isPreventTransition: disableTransitionOnChange,
        environment,
      }),
    [disableTransitionOnChange, environment],
  )

  const changeColorMode = useCallback(
    (colorMode: ColorMode | "system"): void => {
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
    const managerValue = colorModeManager.get()(storageKey)

    if (managerValue) changeColorMode(managerValue)
  }, [changeColorMode, colorModeManager, storageKey])

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

/**
 * `useColorMode` is a custom hook that returns the current color mode.
 *
 * @see Docs https://yamada-ui.com/hooks/use-color-mode
 */
export const useColorMode = () => {
  const context = useContext(ColorModeContext)

  return (
    context ?? { colorMode: "light", internalColorMode: "light", forced: false }
  )
}

/**
 * `useColorModeValue` is a custom hook that returns the value of the current color mode from the provided values.
 *
 * @see Docs https://yamada-ui.com/hooks/use-color-mode-value
 */
export const useColorModeValue = <L extends any, D extends any>(
  light: L,
  dark: D,
): L | D => {
  const { colorMode } = useColorMode()

  return getColorModeValue<L, D>(light, dark)(colorMode)
}

export const getColorModeValue =
  <L extends any, D extends any>(light: L, dark: D) =>
  (colorMode: ColorMode): L | D => {
    return colorMode === "light" ? light : dark
  }
