import { createRoot } from 'react-dom/client'
import { App } from './app'
import { AppProvider } from 'contexts'

const container = document.getElementById('app')

const root = createRoot(container!)

root.render(
  <AppProvider>
    <App />
  </AppProvider>,
)
