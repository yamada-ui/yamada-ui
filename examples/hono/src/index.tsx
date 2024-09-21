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
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link rel="icon" href="/favicon.svg" />
          <script type="module" src="/src/client.tsx"></script>
        </head>
        <body>
          <ColorModeScript
            type="cookie"
            nonce="testing"
            initialColorMode={colorMode ?? config.initialColorMode}
          />
          <ThemeSchemeScript
            type="cookie"
            nonce="testing"
            initialThemeScheme={themeScheme ?? config.initialThemeScheme}
          />
          <div id="root"></div>
        </body>
      </html>,
    ),
  )
})

export default app
