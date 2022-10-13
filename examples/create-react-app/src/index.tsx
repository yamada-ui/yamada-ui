import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { UIProvider, SchemeScript } from 'yamada-ui'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <SchemeScript />

    <UIProvider>
      <App />
    </UIProvider>
  </StrictMode>,
)
