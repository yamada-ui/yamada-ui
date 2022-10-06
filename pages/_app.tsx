import type { AppProps } from 'next/app'
import { UIProvider } from 'providers'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <UIProvider>
      <Component {...pageProps} />
    </UIProvider>
  )
}

export default App
