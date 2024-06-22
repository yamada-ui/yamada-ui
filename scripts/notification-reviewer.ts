import { Octokit } from "@octokit/rest"
import { config } from "dotenv"
import type { Constant } from "./utils"
import { getConstant } from "./utils"

type PullRequest = Awaited<ReturnType<typeof octokit.pulls.get>>["data"]

config()

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })
let constant: Constant = {}

const COMMON_PARAMS = { owner: "yamada-ui", repo: "yamada-ui" }
const DISCORD_REVIEW_COMMENT = (
  id: string,
  number: number,
  title: string,
  html_url: string,
) =>
  [
    `<@${id}>`,
    "",
    constant.message.pullRequest.addReviewer,
    "",
    `[${number}: ${title}](${html_url})`,
  ].join("\n")

const getPullRequest = async (): Promise<PullRequest> => {
  const pull_number = parseInt(process.argv[2] ?? "")

  if (isNaN(pull_number)) {
    throw new Error("Invalid pull request number\n")
  }

  const { data } = await octokit.pulls.get({
    ...COMMON_PARAMS,
    pull_number,
  })

  return data
}

const sendDiscordChannel = async (content: string) => {
  const url = process.env.DISCORD_REVIEWS_WEBHOOK_URL

  if (!url) throw new Error("Missing Discord Webhook URL\n")

  const data = { username: "GitHub", content }

  const headers = { "Content-Type": "application/json" }
  const body = JSON.stringify(data)

  const { ok } = await fetch(url, { method: "POST", headers, body })

  if (!ok) throw new Error("Failed to send message to Discord\n")
}

const args = process.argv.slice(3)

const main = async () => {
  try {
    constant = await getConstant()

    const pullRequest = await getPullRequest()

    if (args.includes("--requested")) {
      const login = args
        .find((arg) => arg.includes("--requested"))
        ?.split("=")[1]

      if (!login) throw new Error("Invalid login\n")

      const { number, title, html_url } = pullRequest

      const discordId = [...constant.maintainers, ...constant.members].find(
        ({ github }) => github.id === login,
      )?.discord?.id

      await sendDiscordChannel(
        DISCORD_REVIEW_COMMENT(discordId, number, title, html_url),
      )
    } else if (args.includes("--removed")) {
      const login = args
        .find((arg) => arg.includes("--requested"))
        ?.split("=")[1]
    }
  } catch (e) {
    if (e instanceof Error) console.log(e.message)
  }
}

main()
