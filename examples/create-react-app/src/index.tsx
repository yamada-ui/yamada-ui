import { StrictMode } from 'react'
import { render } from 'react-dom'
import { App } from './App'
import { UIProvider, ColorSchemeScript } from '@yamada-ui/react'

render(
  <StrictMode>
    <ColorSchemeScript />

    <UIProvider>
      <App />
    </UIProvider>
  </StrictMode>,
  document.getElementById('root'),
)
