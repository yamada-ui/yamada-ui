import { Hono } from "hono"
import { renderToString } from "react-dom/server"

const app = new Hono()

app.get("*", (c) => {
  return c.html(
    renderToString(
      <html lang="ja">
        <head>
          <script type="module" src="/src/client.tsx"></script>
        </head>

        <body>
          <div id="root"></div>
        </body>
      </html>,
    ),
  )
})

export default app
