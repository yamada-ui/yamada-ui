import { Octokit } from "@octokit/rest"
import { config } from "dotenv"
import type { Constant } from "./utils"
import { getConstant, recursiveOctokit } from "./utils"

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

  const { data } = await recursiveOctokit(() =>
    octokit.pulls.get({
      ...COMMON_PARAMS,
      pull_number,
    }),
  )

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
    const collaborators = [...constant.maintainers, ...constant.members]

    const pullRequest = await getPullRequest()

    const requestedId = args
      .find((arg) => arg.includes("--requested"))
      ?.split("=")[1]
    const removedId = args
      .find((arg) => arg.includes("--removed"))
      ?.split("=")[1]

    if (requestedId) {
      const { number, title, html_url } = pullRequest

      const discordId = collaborators.find(
        ({ github }) => github.id === requestedId,
      )?.discord?.id

      await sendDiscordChannel(
        DISCORD_REVIEW_COMMENT(discordId, number, title, html_url),
      )
    }

    if (removedId) {
      const { number, title, html_url } = pullRequest

      const { data } = await recursiveOctokit(() =>
        octokit.issues.listEventsForTimeline({
          ...COMMON_PARAMS,
          issue_number: pullRequest.number,
        }),
      )

      const previousReviewers = data
        .map((timeline) => {
          if (timeline.event !== "review_requested") return

          if (!("requested_reviewer" in timeline)) return

          return timeline.requested_reviewer?.login
        })
        .filter(Boolean) as string[]

      const omitCollaborators = collaborators.filter(
        ({ github }) => !previousReviewers.includes(github.id),
      )

      const additionReviewer = omitCollaborators.sort(
        () => 0.5 - Math.random(),
      )[0]

      const { github, discord } = additionReviewer

      await recursiveOctokit(() =>
        octokit.pulls.requestReviewers({
          ...COMMON_PARAMS,
          pull_number: number,
          reviewers: [github.id],
        }),
      )

      console.log("Added Reviewers", number, title, github.id)

      await sendDiscordChannel(
        DISCORD_REVIEW_COMMENT(discord.id, number, title, html_url),
      )
    }
  } catch (e) {
    if (e instanceof Error) console.log(e.message)
  }
}

main()
