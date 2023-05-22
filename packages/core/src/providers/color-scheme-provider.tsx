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
import { ColorScheme } from '../css'
import { ThemeConfig } from '../theme.types'
import { ColorSchemeManager, localStorageManager } from './color-scheme-manager'
import { getColorModeUtils } from './color-scheme-utils'

type ColorSchemeContext = {
  forced?: boolean
  colorScheme: ColorScheme
  changeColorScheme: (colorScheme: ColorScheme | 'system') => void
  toggleScheme: () => void
}

const getColorScheme = (manager: ColorSchemeManager, fallback?: ColorScheme) =>
  manager.type === 'cookie' && manager.ssr ? manager.get(fallback) : fallback

export const ColorSchemeContext = createContext({} as ColorSchemeContext)

export type ColorSchemeProviderProps = {
  value?: ColorScheme
  config: ThemeConfig
  children?: ReactNode
  colorSchemeManager?: ColorSchemeManager
}

export const ColorSchemeProvider: FC<ColorSchemeProviderProps> = ({
  value,
  colorSchemeManager = localStorageManager,
  config: { initialColorScheme, useSystemColorScheme, disableTransitionOnChange } = {
    initialColorScheme: 'light',
    useSystemColorScheme: true,
  },
  children,
}) => {
  const defaultColorScheme = initialColorScheme === 'dark' ? 'dark' : 'light'

  const [colorScheme, setColorScheme] = useState<ColorScheme | undefined>(() =>
    getColorScheme(colorSchemeManager, defaultColorScheme),
  )

  const [resolvedColorScheme, setResolvedColorScheme] = useState<ColorScheme | undefined>(() =>
    getColorScheme(colorSchemeManager),
  )

  const resolvedValue =
    initialColorScheme === 'system' && !colorScheme ? resolvedColorScheme : colorScheme

  const { getSystemColorScheme, setClassName, setDataset, addListener } = useMemo(
    () => getColorModeUtils({ isPreventTransition: disableTransitionOnChange }),
    [disableTransitionOnChange],
  )

  const changeColorScheme = useCallback(
    (value: ColorScheme | 'system'): void => {
      const resolved = value === 'system' ? getSystemColorScheme() : value

      setColorScheme(resolved)
      setClassName(resolved === 'dark')
      setDataset(resolved)

      colorSchemeManager.set(resolved)
    },
    [colorSchemeManager, getSystemColorScheme, setClassName, setDataset],
  )

  const toggleScheme = useCallback((): void => {
    changeColorScheme(resolvedValue === 'dark' ? 'light' : 'dark')
  }, [changeColorScheme, resolvedValue])

  useSafeLayoutEffect(() => {
    if (initialColorScheme === 'system') setResolvedColorScheme(getSystemColorScheme())
  }, [])

  useEffect(() => {
    const managerValue = colorSchemeManager.get()

    if (managerValue) {
      changeColorScheme(managerValue)

      return
    }

    if (initialColorScheme === 'system') {
      changeColorScheme('system')

      return
    }

    changeColorScheme(defaultColorScheme)
  }, [changeColorScheme, colorSchemeManager, defaultColorScheme, initialColorScheme])

  useEffect(() => {
    if (!useSystemColorScheme) return

    return addListener(changeColorScheme)
  }, [useSystemColorScheme, addListener, changeColorScheme])

  const context = useMemo(
    () => ({
      colorScheme: value ?? (resolvedValue as ColorScheme),
      changeColorScheme: value ? noop : changeColorScheme,
      toggleScheme: value ? noop : toggleScheme,
      forced: value !== undefined,
    }),
    [value, resolvedValue, changeColorScheme, toggleScheme],
  )

  return <ColorSchemeContext.Provider value={context}>{children}</ColorSchemeContext.Provider>
}

export const useColorScheme = () => {
  const context = useContext(ColorSchemeContext)

  if (context === undefined)
    throw new Error('useColorScheme must be used within a ColorSchemeProvider')

  return context
}

export const useColorSchemetValue = <L extends any, D extends any>(light: L, dark: D): L | D => {
  const { colorScheme } = useColorScheme()

  return colorScheme === 'light' ? light : dark
}
