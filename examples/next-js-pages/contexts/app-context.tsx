import {
  createContext,
  extendConfig,
  extendTheme,
  localStorageManager,
  UIProvider,
  useSafeLayoutEffect,
} from '@yamada-ui/react'
import { FC, PropsWithChildren, useCallback, useState } from 'react'
import { customTheme, customConfig } from 'theme'

type AppContext = {
  isSystemColorScheme: boolean
  changeSystemColorScheme: (flag: boolean) => void
}

const theme = extendTheme(customTheme)()

const [AppContextProvider, useAppContext] = createContext<AppContext>({
  strict: false,
  name: 'AppContext',
})

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isSystemColorScheme, setIsSystemColorScheme] = useState<boolean>(false)

  const config = extendConfig({
    ...customConfig,
    useSystemColorScheme: isSystemColorScheme,
  })

  const changeSystemColorScheme = useCallback((flag: boolean) => {
    localStorage.setItem('ui-system-scheme', flag ? 'true' : 'false')
    setIsSystemColorScheme(flag)
  }, [])

  useSafeLayoutEffect(() => {
    setIsSystemColorScheme((localStorage.getItem('ui-system-scheme') ?? 'true') === 'true')
  }, [])

  return (
    <AppContextProvider value={{ isSystemColorScheme, changeSystemColorScheme }}>
      <UIProvider config={config} theme={theme} colorSchemeManager={localStorageManager}>
        {children}
      </UIProvider>
    </AppContextProvider>
  )
}

export const useApp = () => useAppContext()
