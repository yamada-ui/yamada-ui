import { ColorScheme } from '@yamada-ui/styled'
import { createdDom, noop } from '@yamada-ui/utils'
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
import { ColorSchemeManager, localStorageManager, rootManager } from '.'

export type ColorSchemeOptions = {
  initialColorScheme?: ColorScheme
  useSystemColorScheme?: boolean
}

type ColorSchemeContext = {
  colorScheme: ColorScheme
  changeColorScheme: (colorScheme: ColorScheme, isObserver?: boolean) => void
  toggleScheme: () => void
}

const classNames = {
  light: 'ui-light',
  dark: 'ui-dark',
}

const queries = {
  light: '(prefers-color-scheme: light)',
  dark: '(prefers-color-scheme: dark)',
}

export const ColorSchemeContext = createContext({} as ColorSchemeContext)

export type ColorSchemeProviderProps = {
  colorSchemeManager?: ColorSchemeManager
  options: ColorSchemeOptions
  children: ReactNode
}

export const ColorSchemeProvider: FC<ColorSchemeProviderProps> = ({
  colorSchemeManager = localStorageManager,
  options: { initialColorScheme, useSystemColorScheme } = {
    initialColorScheme: 'light',
    useSystemColorScheme: true,
  },
  children,
}) => {
  const defaultColorScheme = initialColorScheme === 'dark' ? 'dark' : 'light'

  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    colorSchemeManager.get(defaultColorScheme) ?? defaultColorScheme,
  )

  const changeColorScheme = useCallback(
    (value: ColorScheme, isObserver: boolean = false): void => {
      if (!isObserver) {
        colorSchemeManager.set(value)
      } else if (colorSchemeManager.get() && !useSystemColorScheme) {
        return
      }

      setColorScheme(value)
    },
    [colorSchemeManager, useSystemColorScheme],
  )

  const toggleScheme = useCallback((): void => {
    if (useSystemColorScheme) return

    setColorScheme((prev) => {
      if (prev === 'light') {
        colorSchemeManager.set('dark')

        return 'dark'
      } else {
        colorSchemeManager.set('light')

        return 'light'
      }
    })
  }, [colorSchemeManager, useSystemColorScheme])

  useEffect(() => {
    const isBrowser = createdDom()
    const isLocalStorage = colorSchemeManager.type === 'localStorage'

    if (isBrowser && isLocalStorage) {
      const systemScheme = getColorScheme(defaultColorScheme)

      if (useSystemColorScheme) return changeColorScheme(systemScheme)

      const rootScheme = rootManager.get()
      const localStorageScheme = colorSchemeManager.get()

      if (rootScheme) return changeColorScheme(rootScheme)

      if (localStorageScheme) return changeColorScheme(localStorageScheme)

      return changeColorScheme(defaultColorScheme)
    }
  }, [changeColorScheme, defaultColorScheme, colorSchemeManager, useSystemColorScheme])

  useEffect(() => {
    addClassName(colorScheme)
    rootManager.set(colorScheme)
  }, [colorScheme])

  useEffect(() => {
    if (!useSystemColorScheme) return

    const observer = colorSchemeObserver(changeColorScheme)

    return () => {
      if (!useSystemColorScheme && observer) observer()
    }
  }, [changeColorScheme, useSystemColorScheme])

  const value = useMemo(
    () => ({
      colorScheme,
      changeColorScheme,
      toggleScheme,
    }),
    [colorScheme, changeColorScheme, toggleScheme],
  )

  return <ColorSchemeContext.Provider value={value}>{children}</ColorSchemeContext.Provider>
}

const addClassName = (colorScheme: ColorScheme): void => {
  const isBrowser = createdDom()

  if (isBrowser) {
    const isDark = colorScheme === 'dark'

    document.body.classList.add(isDark ? classNames.dark : classNames.light)
    document.body.classList.remove(isDark ? classNames.light : classNames.dark)
  }
}

const getColorScheme = (defaultColorScheme: ColorScheme): ColorScheme => {
  const mql = window.matchMedia?.(queries.dark)?.matches ?? defaultColorScheme === 'dark'

  return mql ? 'dark' : 'light'
}

const colorSchemeObserver = (
  func: (colorScheme: ColorScheme, isObserver: boolean) => void,
): (() => void) => {
  if (!('matchMedia' in window)) return noop

  const mql = window.matchMedia(queries.dark)

  const listener = () => {
    func(mql.matches ? 'dark' : 'light', true)
  }

  mql.addEventListener('change', listener)

  return () => {
    mql.removeEventListener('change', listener)
  }
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
