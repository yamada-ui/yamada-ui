'use client'

import {
  colorModeManager,
  ColorModeScript,
  themeSchemeManager,
  ThemeSchemeScript,
  UIProvider,
} from '@yamada-ui/react'
import { ReactNode } from 'react'
import { config, theme } from 'theme'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='ja' data-mode='light'>
      <head>
        <title>Next.js App - Yamada UI</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link href='/favicon.svg' rel='icon' />
      </head>

      <body>
        <ColorModeScript type='cookie' initialColorMode={config.initialColorMode} nonce='testing' />
        <ThemeSchemeScript
          type='cookie'
          initialThemeScheme={config.initialThemeScheme}
          nonce='testing'
        />

        <UIProvider
          colorModeManager={colorModeManager.cookieStorage}
          config={config}
          theme={theme}
          themeSchemeManager={themeSchemeManager.cookieStorage}
        >
          {children}
        </UIProvider>
      </body>
    </html>
  )
}

export default RootLayout
