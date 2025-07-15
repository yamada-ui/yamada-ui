// import * as p from "@clack/prompts"
// import c from "chalk"
// import { config } from "dotenv"
// import { readFile } from "fs/promises"
// import fetch from "node-fetch"

// config()

// const main = async () => {
//   p.intro(c.magenta(`Send a message to Discord`))

//   const s = p.spinner()

//   try {
//     const start = process.hrtime.bigint()

//     const url = process.env.DISCORD_RELEASE_WEBHOOK_URL

//     if (!url) throw new Error("Missing Discord Webhook URL\n")

//     s.start(`Getting the changelog`)

//     const manifest = await readFile(".changelog/manifest.json", "utf8")

//     const [{ version }] = JSON.parse(manifest)

//     const content = [
//       `A new version of Yamada UI has been released😎`,
//       `version: [${version}](https://github.com/yamada-ui/yamada-ui/blob/main/.changelog/v${version}.mdx)`,
//     ].join("\n\n")

//     s.stop(`Got the changelog`)

//     s.start(`Sending to Discord`)

//     const data = {
//       content,
//       username: "GitHub",
//     }

//     const headers = { "Content-Type": "application/json" }
//     const body = JSON.stringify(data)

//     const { ok } = await fetch(url, { body, headers, method: "POST" })

//     if (!ok) throw new Error("Failed to send message to Discord\n")

//     s.stop(`Sent to Discord`)

//     const end = process.hrtime.bigint()
//     const duration = (Number(end - start) / 1e9).toFixed(2)

//     p.outro(c.green(`Done in ${duration}s\n`))
//   } catch (e) {
//     s.stop(`An error occurred`, 500)

//     p.cancel(c.red(e instanceof Error ? e.message : "Message is missing"))
//   }
// }

// main()
