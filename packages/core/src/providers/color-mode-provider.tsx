import type { FC, ReactNode } from "react"
import type { ColorMode, ColorModeWithSystem } from "../css"
import type { ThemeConfig } from "../theme.types"
import type { ColorModeManager } from "./color-mode-manager"
import type { Environment } from "./environment-provider"
import {
  funcAll,
  isEmptyObject,
  noop,
  useCallbackRef,
  useSafeLayoutEffect,
} from "@yamada-ui/utils"
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { colorModeManager } from "./color-mode-manager"
import { getColorModeUtils } from "./color-mode-utils"
import { useEnvironment } from "./environment-provider"

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

export const ColorModeContext = createContext({} as ColorModeContext)

export interface ColorModeProviderProps {
  children?: ReactNode
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
  colorMode: defaultColorMode,
  colorModeManager = localStorage,
  config: {
    disableTransitionOnChange = true,
    initialColorMode = "light" as ColorModeWithSystem,
  } = {},
  storageKey,
}) => {
  const environment = useEnvironment()
  const [colorMode, setColorMode] = useState<ColorModeWithSystem>(() =>
    getColorMode(colorModeManager, initialColorMode)(storageKey),
  )
  const systemColorMode = useSystemColorMode({
    callback: (systemColorMode) => {
      if (colorMode !== "system") return

      setClassName(systemColorMode === "dark")
      setDataset(systemColorMode)
    },
    environment,
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
        environment,
        isPreventTransition: disableTransitionOnChange,
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

  const value = useMemo(
    () => ({
      changeColorMode: defaultColorMode ? noop : changeColorMode,
      colorMode: defaultColorMode ?? resolvedColorMode,
      forced: defaultColorMode !== undefined,
      internalColorMode: colorMode,
      toggleColorMode: defaultColorMode ? noop : toggleColorMode,
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
export const useColorMode = (): ColorModeContext => {
  const context = useContext(ColorModeContext)

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

export interface UseSystemColorModeProps {
  callback?: (colorMode: ColorMode) => void
  environment?: Environment
  initialColorMode?: ColorMode
}

/**
 * `useSystemColorMode` is a custom hook that returns the current system color mode.
 */
export const useSystemColorMode = ({
  callback,
  environment,
  initialColorMode,
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
export const useColorModeValue = <L, D>(light: L, dark: D): D | L => {
  const { colorMode } = useColorMode()

  return getColorModeValue<L, D>(light, dark)(colorMode)
}

export const getColorModeValue =
  <L, D>(light: L, dark: D) =>
  (colorMode: ColorMode): D | L => {
    return colorMode === "light" ? light : dark
  }
