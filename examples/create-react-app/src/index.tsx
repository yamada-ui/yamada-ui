import { StrictMode } from 'react'
import { render } from 'react-dom'
import { App } from './App'
import { UIProvider, SchemeScript } from '@yamada-ui/react'

render(
  <StrictMode>
    <SchemeScript />

    <UIProvider>
      <App />
    </UIProvider>
  </StrictMode>,
  document.getElementById('root'),
)
