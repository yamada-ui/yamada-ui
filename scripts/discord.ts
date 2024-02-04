import { readFile } from "fs/promises"
import * as p from "@clack/prompts"
import { Octokit } from "@octokit/rest"
import c from "chalk"
import { config } from "dotenv"
import fetch from "node-fetch"

config()

const ARG = process.argv[2] ?? "--release"
const COMMON_PARAMS = { owner: "hirotomoyamada", repo: "yamada-ui" }
const DISCORD_USER_MAP: Record<string, string> = {
  hirotomoyamada: "434987704162451467",
  illionillion: "1000629510078738432",
  koralle: "702799711404425246",
  "108yen": "281653488084189184",
  umaidashi: "1001523961231839243",
  taroj1205: "631578250144907269",
  KenyaMasuko: "787761288088256512",
  nakayan5: "770535018040655873",
  setodeve: "441961406980554772",
  hoshico: "982900988073607269",
  "komura-c": "394133735567785996",
}

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

const main = async () => {
  p.intro(c.magenta(`Send a message to Discord`))

  const s = p.spinner()

  try {
    const start = process.hrtime.bigint()

    const url = process.env.DISCORD_WEBHOOK_URL
    const pull_number = Number(process.env.PULL_REQUEST_NUMBER ?? 0)

    if (!url) throw new Error("Missing Discord Webhook URL\n")

    let content: string

    if (ARG.includes("--review")) {
      if (!pull_number) throw new Error("Missing PR number\n")

      const { data } = await octokit.pulls.get({
        ...COMMON_PARAMS,
        pull_number,
      })

      const { number, html_url, title, requested_reviewers } = data

      if (!requested_reviewers?.length) throw new Error("Missing PR reviews\n")

      const ids = requested_reviewers.map(
        ({ login }) => DISCORD_USER_MAP[login],
      )

      content = [
        ids.map((id) => `<@${id}>`).join(" "),
        `Please review this PR😎`,
        `[${number}: ${title}](${html_url})`,
      ].join("\n\n")
    } else {
      s.start(`Getting the changelog`)

      const manifest = await readFile(".changelog/manifest.json", "utf8")

      const [{ version }] = JSON.parse(manifest)

      content = [
        `A new version of Yamada UI has been released😎`,
        `version: [${version}](https://github.com/hirotomoyamada/yamada-ui/blob/main/.changelog/v${version}.mdx)`,
      ].join("\n\n")

      s.stop(`Got the changelog`)
    }

    s.start(`Sending to Discord`)

    const data = {
      username: "GitHub",
      content,
    }

    const headers = { "Content-Type": "application/json" }
    const body = JSON.stringify(data)

    const { ok } = await fetch(url, { method: "POST", headers, body })

    if (!ok) throw new Error("Failed to send message to Discord\n")

    s.stop(`Sent to Discord`)

    const end = process.hrtime.bigint()
    const duration = (Number(end - start) / 1e9).toFixed(2)

    p.outro(c.green(`Done in ${duration}s\n`))
  } catch (e) {
    s.stop(`An error occurred`, 500)

    p.cancel(c.red(e instanceof Error ? e.message : "Message is missing"))
  }
}

main()
