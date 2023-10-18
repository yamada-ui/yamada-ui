import { ColorModeScript, ThemeSchemeScript } from '@yamada-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import { config } from 'theme'

const Document = () => {
  return (
    <Html lang='en'>
      <Head />

      <body>
        <ColorModeScript type='cookie' nonce='testing' initialColorMode={config.initialColorMode} />
        <ThemeSchemeScript
          type='cookie'
          nonce='testing'
          initialThemeScheme={config.initialThemeScheme}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
