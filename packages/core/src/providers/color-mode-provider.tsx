import {
  funcAll,
  noop,
  useCallbackRef,
  useSafeLayoutEffect,
} from "@yamada-ui/utils"
import type { FC, ReactNode } from "react"
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  useContext,
} from "react"
import type { ColorMode, ColorModeWithSystem } from "../css"
import type { ThemeConfig } from "../theme.types"
import type { ColorModeManager } from "./color-mode-manager"
import { colorModeManager } from "./color-mode-manager"
import { getColorModeUtils } from "./color-mode-utils"
import type { Environment } from "./environment-provider"
import { useEnvironment } from "./environment-provider"

const { localStorage } = colorModeManager

type ColorModeContext = {
  forced?: boolean
  colorMode: ColorMode
  internalColorMode: ColorModeWithSystem
  changeColorMode: (colorMode: ColorModeWithSystem) => void
  toggleColorMode: () => void
}

const getColorMode =
  (manager: ColorModeManager, fallback: ColorModeWithSystem) =>
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
  const [colorMode, setColorMode] = useState<ColorModeWithSystem>(() =>
    getColorMode(colorModeManager, initialColorMode)(storageKey),
  )
  const systemColorMode = useSystemColorMode({
    environment,
    callback: (systemColorMode) => {
      if (colorMode !== "system") return

      setClassName(systemColorMode === "dark")
      setDataset(systemColorMode)
    },
  })

  const computedColorMode = initialColorMode === "dark" ? "dark" : "light"
  const resolvedColorMode =
    colorMode === "system"
      ? systemColorMode
        ? systemColorMode
        : computedColorMode
      : colorMode

  const { getSystemColorMode, setClassName, setDataset } = useMemo(
    () =>
      getColorModeUtils({
        isPreventTransition: disableTransitionOnChange,
        environment,
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

    if (managerValue) changeColorMode(managerValue)
  }, [changeColorMode, colorModeManager, storageKey])

  const value = useMemo(
    () => ({
      colorMode: defaultColorMode ?? resolvedColorMode,
      internalColorMode: colorMode,
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
    <ColorModeContext.Provider value={value}>
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

export type UseSystemColorModeProps = {
  initialColorMode?: ColorMode
  environment?: Environment
  callback?: (colorMode: ColorMode) => void
}

/**
 * `useSystemColorMode` is a custom hook that returns the current system color mode.
 */
export const useSystemColorMode = ({
  initialColorMode,
  environment,
  callback,
}: UseSystemColorModeProps = {}) => {
  const callbackRef = useCallbackRef(callback)
  const [colorMode, setColorMode] = useState<ColorMode | undefined>(
    initialColorMode,
  )

  const { getSystemColorMode, systemColorModeObserver } = useMemo(
    () => getColorModeUtils({ environment }),
    [environment],
  )

  useSafeLayoutEffect(() => {
    setColorMode(getSystemColorMode())
  }, [getSystemColorMode])

  useEffect(() => {
    return systemColorModeObserver(funcAll(setColorMode, callbackRef))
  }, [systemColorModeObserver, getSystemColorMode, callbackRef])

  return colorMode
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
