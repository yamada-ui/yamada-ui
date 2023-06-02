'use client'

import {
  cookieStorageManager,
  createContext,
  extendConfig,
  extendTheme,
  UIProvider,
} from '@yamada-ui/react'
import { FC, PropsWithChildren, useCallback, useState } from 'react'
import { customTheme, customConfig } from 'theme'

type AppContext = {
  isSystemColorMode: boolean
  changeSystemColorMode: (flag: boolean) => void
}

const theme = extendTheme(customTheme)()

const [AppContextProvider, useAppContext] = createContext<AppContext>({
  strict: false,
  name: 'AppContext',
})

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isSystemColorMode, setIsSystemColorMode] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true

    return (localStorage?.getItem('ui-system-scheme') ?? 'true') === 'true'
  })

  const config = extendConfig({
    ...customConfig,
    useSystemColorMode: isSystemColorMode,
  })

  const changeSystemColorMode = useCallback((flag: boolean) => {
    localStorage.setItem('ui-system-scheme', flag ? 'true' : 'false')
    setIsSystemColorMode(flag)
  }, [])

  return (
    <AppContextProvider value={{ isSystemColorMode, changeSystemColorMode }}>
      <UIProvider config={config} theme={theme} colorModeManager={cookieStorageManager}>
        {children}
      </UIProvider>
    </AppContextProvider>
  )
}

export const useApp = () => useAppContext()
