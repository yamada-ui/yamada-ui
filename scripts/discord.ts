import { readFile } from "fs/promises"
import { config } from "dotenv"
import fetch from "node-fetch"
import ora from "ora"

config()

const main = async () => {
  const spinner = ora("Send a message to Discord").start()

  try {
    const url = process.env.DISCORD_WEBHOOK_URL

    if (!url) throw new Error("Missing Discord Webhook URL\n")

    const manifest = await readFile(".changelog/manifest.json", "utf8")

    let [{ version }] = JSON.parse(manifest)

    const content = `A new version of Yamada UI has been released😎\n\nversion: [${version}](https://github.com/hirotomoyamada/yamada-ui/blob/main/.changelog/v${version}.mdx)`

    const data = {
      username: "GitHub",
      content,
    }

    const headers = { "Content-Type": "application/json" }
    const body = JSON.stringify(data)

    const { ok } = await fetch(url, { method: "POST", headers, body })

    if (ok) {
      spinner.succeed("Successfully sent message to Discord\n")
    } else {
      throw new Error("Failed to send message to Discord\n")
    }
  } catch (e) {
    if (e instanceof Error) spinner.fail(e.message)
  } finally {
    spinner.stop()
  }
}

main()
