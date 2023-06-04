'use client'

import { ColorModeScript } from '@yamada-ui/react'
import { CacheProvider } from '@yamada-ui/nextjs'
import { AppProvider } from 'contexts'
import { ReactNode } from 'react'

export default ({ children }: { children: ReactNode }) => {
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
          <AppProvider>{children}</AppProvider>
        </CacheProvider>
      </body>
    </html>
  )
}
