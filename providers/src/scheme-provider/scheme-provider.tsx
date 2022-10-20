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
import { createdDom, noop } from '@yamada-ui/utils'
import { SchemeManager, localStorageManager, rootManager } from './'
import { Scheme } from '@yamada-ui/styled'

export type SchemeOptions = {
  initialScheme?: Scheme
  useSystemScheme?: boolean
}

type SchemeContext = {
  scheme: Scheme
  changeScheme: (scheme: Scheme, isObserver?: boolean) => void
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

export const SchemeContext = createContext({} as SchemeContext)

export type SchemeProviderProps = {
  schemeManager?: SchemeManager
  options: SchemeOptions
  children: ReactNode
}

export const SchemeProvider: FC<SchemeProviderProps> = ({
  schemeManager = localStorageManager,
  options: { initialScheme, useSystemScheme } = { initialScheme: 'light', useSystemScheme: true },
  children,
}) => {
  const defaultScheme = initialScheme === 'dark' ? 'dark' : 'light'

  const [scheme, setScheme] = useState<Scheme>(schemeManager.get(defaultScheme) ?? defaultScheme)

  const changeScheme = useCallback(
    (value: Scheme, isObserver: boolean = false): void => {
      if (!isObserver) {
        schemeManager.set(value)
      } else if (schemeManager.get() && !useSystemScheme) {
        return
      }

      setScheme(value)
    },
    [schemeManager, useSystemScheme],
  )

  const toggleScheme = useCallback((): void => {
    if (useSystemScheme) return

    setScheme((prev) => {
      if (prev === 'light') {
        schemeManager.set('dark')

        return 'dark'
      } else {
        schemeManager.set('light')

        return 'light'
      }
    })
  }, [schemeManager, useSystemScheme])

  useEffect(() => {
    const isBrowser = createdDom()
    const isLocalStorage = schemeManager.type === 'localStorage'

    if (isBrowser && isLocalStorage) {
      const systemScheme = getScheme(defaultScheme)

      if (useSystemScheme) return changeScheme(systemScheme)

      const rootScheme = rootManager.get()
      const localStorageScheme = schemeManager.get()

      if (rootScheme) return changeScheme(rootScheme)

      if (localStorageScheme) return changeScheme(localStorageScheme)

      return changeScheme(defaultScheme)
    }
  }, [changeScheme, defaultScheme, schemeManager, useSystemScheme])

  useEffect(() => {
    addClassName(scheme)
    rootManager.set(scheme)
  }, [scheme])

  useEffect(() => {
    if (!useSystemScheme) return

    const observer = SchemeObserver(changeScheme)

    return () => {
      if (!useSystemScheme && observer) observer()
    }
  }, [changeScheme, useSystemScheme])

  const value = useMemo(
    () => ({
      scheme,
      changeScheme,
      toggleScheme,
    }),
    [scheme, changeScheme, toggleScheme],
  )

  return <SchemeContext.Provider value={value}>{children}</SchemeContext.Provider>
}

const addClassName = (scheme: Scheme): void => {
  const isBrowser = createdDom()

  if (isBrowser) {
    const isDark = scheme === 'dark'

    document.body.classList.add(isDark ? classNames.dark : classNames.light)
    document.body.classList.remove(isDark ? classNames.light : classNames.dark)
  }
}

const getScheme = (defaultScheme: Scheme): Scheme => {
  const mql = window.matchMedia?.(queries.dark)?.matches ?? defaultScheme === 'dark'

  return mql ? 'dark' : 'light'
}

const SchemeObserver = (func: (scheme: Scheme, isObserver: boolean) => void): (() => void) => {
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

export const useScheme = () => {
  const context = useContext(SchemeContext)

  if (context === undefined) throw new Error('useScheme must be used within a SchemeProvider')

  return context
}

export const useSchemetValue = <L extends any, D extends any>(light: L, dark: D): L | D => {
  const { scheme } = useScheme()

  return scheme === 'light' ? light : dark
}
