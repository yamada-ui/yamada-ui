import { ColorModeScript, ThemeSchemeScript } from "@yamada-ui/react"
import { Head, Html, Main, NextScript } from "next/document"
import { config } from "theme"

const Document = () => {
  return (
    <Html lang="en">
      <Head />

      <body>
        <ColorModeScript
          type="cookie"
          initialColorMode={config.initialColorMode}
          nonce="testing"
        />
        <ThemeSchemeScript
          type="cookie"
          initialThemeScheme={config.initialThemeScheme}
          nonce="testing"
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
