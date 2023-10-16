'use client'

import {
  colorModeManager,
  UIProvider,
  ColorModeScript,
  ThemeSchemeScript,
  themeSchemeManager,
} from '@yamada-ui/react'
import { CacheProvider } from '@yamada-ui/nextjs'
import { ReactNode } from 'react'
import { theme, config } from 'theme'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='ja' data-mode='light'>
      <head>
        <title>Next.js App - Yamada UI</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.svg' />
      </head>

      <body>
        <ColorModeScript type='cookie' nonce='testing' initialColorMode={config.initialColorMode} />
        <ThemeSchemeScript
          type='cookie'
          nonce='testing'
          initialThemeScheme={config.initialThemeScheme}
        />

        <CacheProvider>
          <UIProvider
            config={config}
            theme={theme}
            colorModeManager={colorModeManager.cookieStorage}
            themeSchemeManager={themeSchemeManager.cookieStorage}
          >
            {children}
          </UIProvider>
        </CacheProvider>
      </body>
    </html>
  )
}

export default RootLayout
