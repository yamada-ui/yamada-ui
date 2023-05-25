import { createContext, extendConfig, extendTheme, UIProvider } from '@yamada-ui/react'
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
  const [isSystemColorScheme, setIsSystemColorScheme] = useState<boolean>(
    (localStorage.getItem('ui-system-scheme') ?? 'true') === 'true',
  )

  const config = extendConfig({
    ...customConfig,
    useSystemColorScheme: isSystemColorScheme,
  })

  const changeSystemColorScheme = useCallback((flag: boolean) => {
    localStorage.setItem('ui-system-scheme', flag ? 'true' : 'false')
    setIsSystemColorScheme(flag)
  }, [])

  return (
    <AppContextProvider value={{ isSystemColorScheme, changeSystemColorScheme }}>
      <UIProvider config={config} theme={theme}>
        {children}
      </UIProvider>
    </AppContextProvider>
  )
}

export const useApp = () => useAppContext()
