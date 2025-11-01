import { sendDiscord } from "@yamada-ui/workspace/discord"
import ora from "ora"
import c from "picocolors"

async function main() {
  const spinner = ora()

  const start = process.hrtime.bigint()

  spinner.start(`Sending to Discord`)

  const url = process.env.DISCORD_RELEASE_WEBHOOK_URL

  const content = [
    `A new version of Yamada UI has been released😎`,
    `Please check the [Changelog](https://yamada-ui.com/docs/changelog)`,
  ].join("\n\n")
  await sendDiscord(url, content)

  spinner.succeed(`Sent to Discord`)

  const end = process.hrtime.bigint()
  const duration = (Number(end - start) / 1e9).toFixed(2)

  console.log("\n", c.green(`Done in ${duration}s`))
}

main()
