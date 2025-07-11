import type { Event } from "utils/github"
import type { APIHandler } from "utils/next"
import { Octokit } from "@octokit/rest"
import { sendDiscord } from "utils/discord"
import { getListEventsForTimeline, recursiveOctokit } from "utils/github"
import { DISCORD_REVIEW_COMMENT } from "./opened"

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

export const reviewRequestedRemoved: APIHandler = async ({
  constant,
  req,
  res,
}) => {
  const { pull_request, repository, requested_reviewer } =
    req.body as Event<"pull_request.review_request_removed">
  const owner = "yamada-ui"
  const repo = repository.name
  const { html_url, number, requested_reviewers, title, user } = pull_request
  const omittedRequestReviewers = requested_reviewers.filter(
    ({ login }: any) => !constant.pullRequest.excludeReviewers.includes(login),
  )
  const count = omittedRequestReviewers.length
  const { login } = requested_reviewer ?? {}
  const collaborators = [...constant.maintainers].filter(
    ({ github }) =>
      !constant.pullRequest.excludeReviewers.includes(github.id) &&
      user?.login !== github.id,
  )

  if (count >= constant.pullRequest.assignReviewerCount) return

  if (!login)
    return res.status(400).send({ message: "Invalid github id", status: 400 })

  const timeline = await getListEventsForTimeline({
    issue_number: number,
    owner,
    repo,
  })

  const previousReviewers = timeline
    .map((timeline) => {
      if (timeline.event !== "review_requested") return

      if (!("requested_reviewer" in timeline)) return

      return timeline.requested_reviewer?.login
    })
    .filter(Boolean) as string[]

  const omitCollaborators = collaborators.filter(
    ({ github }) => !previousReviewers.includes(github.id),
  )

  const { discord, github } =
    omitCollaborators.sort(() => 0.5 - Math.random())[0] ?? {}

  if (!github.id)
    return res.status(400).send({ message: "Not found github id", status: 400 })

  await recursiveOctokit(async () =>
    octokit.pulls.requestReviewers({
      owner,
      pull_number: number,
      repo,
      reviewers: [github.id],
    }),
  )

  try {
    await sendDiscord(
      process.env.DISCORD_REVIEWS_WEBHOOK_URL,
      DISCORD_REVIEW_COMMENT(constant)([discord.id], number, title, html_url),
    )
  } catch (e) {
    if (e instanceof Error)
      return res.status(500).send({ message: e.message, status: 500 })
  }
}
