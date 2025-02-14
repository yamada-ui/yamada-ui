import chokidar from "chokidar"
import { createServer } from "http"
import next from "next"
import { watchMDX } from "scripts/mdx"
import { parse } from "url"

const hostname = "localhost"
let port = 3000

const app = next({ dev: true, hostname, port })
const handle = app.getRequestHandler()

async function run() {
  await app.prepare()

  // @ts-ignore
  chokidar.watch(["contents"], { usePolling: false }).on("all", watchMDX)

  const server = createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url!, true)

      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error("Error occurred handling", req.url, err)
      res.statusCode = 500
      res.end("internal server error")
    }
  })

  server.once("error", (e: NodeJS.ErrnoException) => {
    if (e.code === "EADDRINUSE") {
      console.warn(`> Port ${port} is in use, trying next port...`)
      port++
      server.listen(port)
    } else {
      console.error(e)
      process.exit(1)
    }
  })

  server.listen(port, () => {
    console.log(`> Ready on http://${hostname}:${port}`)
  })
}

run()
