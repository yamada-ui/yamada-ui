import { Octokit } from "@octokit/rest"
import { isEmpty } from "@yamada-ui/react"
import { config } from "dotenv"
import type { Constant } from "./utils"
import { getConstant } from "./utils"

type PullRequest = Awaited<ReturnType<typeof octokit.pulls.get>>["data"]

config()

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })
let constant: Constant = {}

const COMMON_PARAMS = { owner: "yamada-ui", repo: "yamada-ui" }
const DISCORD_REVIEW_COMMENT = (
  ids: string[],
  number: number,
  title: string,
  html_url: string,
) =>
  [
    ids.map((id) => `<@${id}>`).join(" "),
    "",
    constant.message.pullRequest.addReviewer,
    "",
    `[${number}: ${title}](${html_url})`,
  ].join("\n")

const getPullRequest = async (): Promise<PullRequest> => {
  const pull_number = parseInt(process.argv[2] ?? "")

  if (isNaN(pull_number)) {
    throw new Error("Invalid pull request number")
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

    if (args.includes("--removed")) {
    } else {
      const { requested_reviewers, number, title, html_url } = pullRequest

      if (isEmpty(requested_reviewers)) return

      const selectedReviewerIds = (requested_reviewers ?? [])
        .map(
          ({ login }) =>
            [...constant.maintainers, ...constant.members].find(
              ({ github }) => github.id === login,
            )?.discord?.id,
        )
        .filter(Boolean)

      await sendDiscordChannel(
        DISCORD_REVIEW_COMMENT(selectedReviewerIds, number, title, html_url),
      )
    }

    console.log(pullRequest)
  } catch (e) {
    if (e instanceof Error) console.log(e.message)
  }
}

main()
