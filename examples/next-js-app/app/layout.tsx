'use client'

import { UIProvider, cookieStorageManager, ColorSchemeScript } from '@yamada-ui/react'

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='ja' data-theme='light'>
      <head>
        <title>Next.js App - Yamada UI</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.svg' />
      </head>

      <body>
        <ColorSchemeScript type='cookie' nonce='testing' />

        <UIProvider colorSchemeManager={cookieStorageManager}>{children}</UIProvider>
      </body>
    </html>
  )
}
