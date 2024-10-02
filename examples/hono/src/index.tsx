import {
  ColorModeScript,
  ColorModeWithSystem,
  ThemeSchemeScript,
} from "@yamada-ui/react"
import { Hono } from "hono"
import { getCookie } from "hono/cookie"
import { renderToString } from "react-dom/server"
import { config } from "./theme"

const app = new Hono()

app.get("*", (c) => {
  const colorMode = getCookie(c, "ui-color-mode") as ColorModeWithSystem
  const themeScheme = getCookie(c, "ui-theme-scheme")

  return c.html(
    renderToString(
      <html lang="ja">
        <head>
          <title>Hono App - Yamada UI</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="/favicon.svg" rel="icon" />
          <script type="module" src="/src/client.tsx"></script>
        </head>
        <body>
          <ColorModeScript
            type="cookie"
            initialColorMode={colorMode ?? config.initialColorMode}
            nonce="testing"
          />
          <ThemeSchemeScript
            type="cookie"
            initialThemeScheme={themeScheme ?? config.initialThemeScheme}
            nonce="testing"
          />
          <div id="root"></div>
        </body>
      </html>,
    ),
  )
})

export default app
