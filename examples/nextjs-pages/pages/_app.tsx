import type { AppProps } from 'next/app'
import { extendConfig, extendTheme, localStorageManager, UIProvider } from '@yamada-ui/react'
import { customTheme, customConfig } from 'theme'

const theme = extendTheme(customTheme)()
const config = extendConfig(customConfig)

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <UIProvider config={config} theme={theme} colorModeManager={localStorageManager}>
      <Component {...pageProps} />
    </UIProvider>
  )
}

export default App
