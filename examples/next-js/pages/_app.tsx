import type { AppProps } from 'next/app'
import { UIProvider } from 'yamada-ui'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <UIProvider>
      <Component {...pageProps} />
    </UIProvider>
  )
}

export default App
