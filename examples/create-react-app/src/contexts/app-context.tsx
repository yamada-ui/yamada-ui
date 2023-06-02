import { createContext, extendConfig, extendTheme, UIProvider } from '@yamada-ui/react'
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
  const [isSystemColorMode, setIsSystemColorMode] = useState<boolean>(
    (localStorage.getItem('ui-system-scheme') ?? 'true') === 'true',
  )

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
      <UIProvider config={config} theme={theme}>
        {children}
      </UIProvider>
    </AppContextProvider>
  )
}

export const useApp = () => useAppContext()
