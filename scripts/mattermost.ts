import { readFile } from "fs/promises"
import * as p from "@clack/prompts"
import c from "chalk"
import { config } from "dotenv"
import fetch from "node-fetch"

config()

const main = async () => {
  p.intro(c.magenta(`Send a message to Mattermost`))

  const s = p.spinner()

  try {
    const start = process.hrtime.bigint()

    const url = process.env.MATTERMOST_WEBHOOK_URL

    if (!url) throw new Error("Missing Mattermost Webhook URL\n")

    s.start(`Getting the changelog`)

    const manifest = await readFile(".changelog/manifest.json", "utf8")

    const [{ version }] = JSON.parse(manifest)

    const text = `A new version of Yamada UI has been released😎\n\nversion: [${version}](https://github.com/hirotomoyamada/yamada-ui/blob/main/.changelog/v${version}.mdx)`

    s.stop(`Got the changelog`)

    s.start(`Sending to Mattermost`)

    const data = {
      username: "GitHub",
      icon_url:
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      text,
    }

    const headers = { "Content-Type": "application/json" }
    const body = JSON.stringify(data)

    const { ok } = await fetch(url, { method: "POST", headers, body })

    if (!ok) throw new Error("Failed to send message to Mattermost\n")

    s.stop(`Sent to Mattermost`)

    const end = process.hrtime.bigint()
    const duration = (Number(end - start) / 1e9).toFixed(2)

    p.outro(c.green(`Done in ${duration}s\n`))
  } catch (e) {
    s.stop(`An error occurred`, 500)

    p.cancel(c.red(e instanceof Error ? e.message : "Message is missing"))
  }
}

main()
