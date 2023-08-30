import { createRoot } from 'react-dom/client'
import { App } from './app'
import { extendConfig, extendTheme, UIProvider } from '@yamada-ui/react'
import { customTheme, customConfig } from 'theme'

const theme = extendTheme(customTheme)()
const config = extendConfig(customConfig)

const container = document.getElementById('app')

const root = createRoot(container!)

root.render(
  <UIProvider theme={theme} config={config}>
    <App />
  </UIProvider>,
)
