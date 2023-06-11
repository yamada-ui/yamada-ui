'use client'

import {
  cookieStorageManager,
  extendConfig,
  extendTheme,
  UIProvider,
  ColorModeScript,
} from '@yamada-ui/react'
import { CacheProvider } from '@yamada-ui/nextjs'
import { ReactNode } from 'react'
import { customTheme, customConfig } from 'theme'

const theme = extendTheme(customTheme)()
const config = extendConfig(customConfig)

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='ja' data-theme='light'>
      <head>
        <title>Next.js App - Yamada UI</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.svg' />
      </head>

      <body>
        <ColorModeScript type='cookie' nonce='testing' />

        <CacheProvider>
          <UIProvider config={config} theme={theme} colorModeManager={cookieStorageManager}>
            {children}
          </UIProvider>
        </CacheProvider>
      </body>
    </html>
  )
}

export default RootLayout
