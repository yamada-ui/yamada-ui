import { noop, useSafeLayoutEffect } from '@yamada-ui/utils'
import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
  useContext,
} from 'react'
import { ColorMode } from '../css'
import { ThemeConfig } from '../theme.types'
import { ColorModeManager, localStorageManager } from './color-scheme-manager'
import { getColorModeUtils } from './color-scheme-utils'

type ColorModeContext = {
  forced?: boolean
  colorMode: ColorMode
  changeColorMode: (colorMode: ColorMode | 'system') => void
  toggleScheme: () => void
}

const getColorMode = (manager: ColorModeManager, fallback?: ColorMode) =>
  manager.type === 'cookie' && manager.ssr ? manager.get(fallback) : fallback

export const ColorModeContext = createContext({} as ColorModeContext)

export type ColorModeProviderProps = {
  value?: ColorMode
  config?: ThemeConfig
  children?: ReactNode
  colorModeManager?: ColorModeManager
}

export const ColorModeProvider: FC<ColorModeProviderProps> = ({
  value,
  colorModeManager = localStorageManager,
  config: { initialColorMode, useSystemColorMode, disableTransitionOnChange } = {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
  children,
}) => {
  const defaultColorMode = initialColorMode === 'dark' ? 'dark' : 'light'

  const [colorMode, setColorMode] = useState<ColorMode | undefined>(() =>
    getColorMode(colorModeManager, defaultColorMode),
  )

  const [resolvedColorMode, setResolvedColorMode] = useState<ColorMode | undefined>(() =>
    getColorMode(colorModeManager),
  )

  const resolvedValue = initialColorMode === 'system' && !colorMode ? resolvedColorMode : colorMode

  const { getSystemColorMode, setClassName, setDataset, addListener } = useMemo(
    () => getColorModeUtils({ isPreventTransition: disableTransitionOnChange }),
    [disableTransitionOnChange],
  )

  const changeColorMode = useCallback(
    (value: ColorMode | 'system'): void => {
      const resolved = value === 'system' ? getSystemColorMode() : value

      setColorMode(resolved)
      setClassName(resolved === 'dark')
      setDataset(resolved)

      colorModeManager.set(resolved)
    },
    [colorModeManager, getSystemColorMode, setClassName, setDataset],
  )

  const toggleScheme = useCallback((): void => {
    changeColorMode(resolvedValue === 'dark' ? 'light' : 'dark')
  }, [changeColorMode, resolvedValue])

  useSafeLayoutEffect(() => {
    if (initialColorMode === 'system') setResolvedColorMode(getSystemColorMode())
  }, [])

  useEffect(() => {
    const managerValue = colorModeManager.get()

    if (managerValue) {
      changeColorMode(managerValue)

      return
    }

    if (initialColorMode === 'system') {
      changeColorMode('system')

      return
    }

    changeColorMode(defaultColorMode)
  }, [changeColorMode, colorModeManager, defaultColorMode, initialColorMode])

  useEffect(() => {
    if (!useSystemColorMode) return

    return addListener(changeColorMode)
  }, [useSystemColorMode, addListener, changeColorMode])

  const context = useMemo(
    () => ({
      colorMode: value ?? (resolvedValue as ColorMode),
      changeColorMode: value ? noop : changeColorMode,
      toggleScheme: value ? noop : toggleScheme,
      forced: value !== undefined,
    }),
    [value, resolvedValue, changeColorMode, toggleScheme],
  )

  return <ColorModeContext.Provider value={context}>{children}</ColorModeContext.Provider>
}

export const useColorMode = () => {
  const context = useContext(ColorModeContext)

  if (context === undefined) throw new Error('useColorMode must be used within a ColorModeProvider')

  return context
}

export const useColorModetValue = <L extends any, D extends any>(light: L, dark: D): L | D => {
  const { colorMode } = useColorMode()

  return colorMode === 'light' ? light : dark
}
