import type { ColorModeWithSystem } from "@yamada-ui/react"
import { ColorModeScript, ThemeSchemeScript } from "@yamada-ui/react"
import { Hono } from "hono"
import { getCookie } from "hono/cookie"
import { renderToString } from "react-dom/server"
import { config } from "./theme"

const app = new Hono()

app.get("*", (c) => {
  const colorMode = getCookie(c, "ui-color-mode") as
    | ColorModeWithSystem
    | undefined
  const themeScheme = getCookie(c, "ui-theme-scheme")

  const initialColorMode = colorMode ?? config.initialColorMode
  const initialThemeScheme = themeScheme ?? config.initialThemeScheme

  return c.html(
    renderToString(
      <html lang="ja">
        <head>
          <title>Hono App - Yamada UI</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="/favicon.svg" rel="icon" />
          <script type="module" src="/src/client.tsx" />
        </head>
        <body>
          <ColorModeScript
            type="cookie"
            initialColorMode={initialColorMode}
            nonce="testing"
          />
          <ThemeSchemeScript
            type="cookie"
            initialThemeScheme={initialThemeScheme}
            nonce="testing"
          />
          <div id="root" />
        </body>
      </html>,
    ),
  )
})

export default app
