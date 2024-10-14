import chokidar from "chokidar"
import fs from "fs"
import { createServer as createHttpsServer } from "https"
import next from "next"
import path from "path"
import { watchMDX } from "scripts/mdx"
import { parse } from "url"


const hostname = "localhost"
let port = 3333 // HTTPSポートを3333に設定


const app = next({ dev: true, hostname, port })
const handle = app.getRequestHandler()


async function run() {
 await app.prepare()


 chokidar.watch(["contents"], { usePolling: false }).on("all", watchMDX)


 const httpsOptions = {
   key: fs.readFileSync(path.join(__dirname, 'localhost-key.pem')),
   cert: fs.readFileSync(path.join(__dirname, 'localhost.pem'))
 }


 const server = createHttpsServer(httpsOptions, async (req, res) => {
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
   console.log(`> Ready on https://${hostname}:${port}`)
 })
}


run()
