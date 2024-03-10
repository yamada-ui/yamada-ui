import { Hono } from "hono"
import { renderToString } from "react-dom/server"

const app = new Hono()

app.get("*", (c) => {
  return c.html(
    renderToString(
      <html lang="ja" data-mode="light">
        <head>
          <title>Hono App - Yamada UI</title>
          <meta charSet="utf-8" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link rel="icon" href="/favicon.svg" />
          {import.meta.env.PROD ? (
            <script type="module" src="/static/client.js"></script>
          ) : (
            <script type="module" src="/src/client.tsx"></script>
          )}
        </head>
        <body>
          <div id="root"></div>
        </body>
      </html>,
    ),
  )
})

export default app
