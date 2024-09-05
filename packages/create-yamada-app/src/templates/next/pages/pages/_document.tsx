import { ColorModeScript } from "@yamada-ui/react"
import { Html, Head, Main, NextScript } from "next/document"
import { config } from "@/theme"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ColorModeScript
          type="cookie"
          nonce="testing"
          initialColorMode={config.initialColorMode}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
