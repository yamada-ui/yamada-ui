import { ColorModeScript, ThemeSchemeScript } from "@yamada-ui/react"
import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ColorModeScript type="cookie" />
        <ThemeSchemeScript type="cookie" />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
