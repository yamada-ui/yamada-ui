import ora from "ora"
import c from "picocolors"

async function main() {
  const spinner = ora()

  const start = process.hrtime.bigint()

  spinner.start(`Sending to Discord`)

  const url = process.env.DISCORD_RELEASE_WEBHOOK_URL

  if (!url) {
    spinner.fail(`Missing Discord webhook URL`)
  } else {
    const content = [
      `A new version of Yamada UI has been released😎`,
      `Please check the [Changelog](https://v2.yamada-ui.com/docs/changelog)`,
    ].join("\n\n")
    const data = { content, username: "GitHub" }
    const headers = { "Content-Type": "application/json" }
    const body = JSON.stringify(data)
    const { ok } = await fetch(url, { body, headers, method: "POST" })

    if (!ok) spinner.fail(`Failed to send to Discord`)

    spinner.succeed(`Sent to Discord`)
  }

  const end = process.hrtime.bigint()
  const duration = (Number(end - start) / 1e9).toFixed(2)

  console.log("\n", c.green(`Done in ${duration}s`))
}

main()
