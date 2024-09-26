import { Octokit } from "@octokit/rest"
import { DISCORD_REVIEW_COMMENT } from "./opened"
import { sendDiscord } from "utils/discord"
import { getListEventsForTimeline, recursiveOctokit } from "utils/github"
import type { Event } from "utils/github"
import type { APIHandler } from "utils/next"

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

export const reviewRequestedRemoved: APIHandler = async ({
  req,
  res,
  constant,
}) => {
  const { repository, pull_request, requested_reviewer } =
    req.body as Event<"pull_request.review_request_removed">
  const owner = "yamada-ui"
  const repo = repository.name
  const { number, title, html_url, user, requested_reviewers } = pull_request
  const omittedRequestReviewers = requested_reviewers?.filter(
    ({ login }: any) => !constant.pullRequest.excludeReviewers.includes(login),
  )
  const count = omittedRequestReviewers?.length ?? 0
  const { login } = requested_reviewer ?? {}
  const collaborators = [...constant.maintainers, ...constant.members].filter(
    ({ github }) =>
      !constant.pullRequest.excludeReviewers.includes(github.id) &&
      user?.login !== github.id,
  )

  if (count >= constant.pullRequest.assignReviewerCount) return

  if (!login)
    return res.status(400).send({ status: 400, message: "Invalid github id" })

  const timeline = await getListEventsForTimeline({
    owner,
    repo,
    issue_number: number,
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

  const { github, discord } =
    omitCollaborators.sort(() => 0.5 - Math.random())[0] ?? {}

  if (!github.id)
    return res.status(400).send({ status: 400, message: "Not found github id" })

  await recursiveOctokit(() =>
    octokit.pulls.requestReviewers({
      owner,
      repo,
      pull_number: number,
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
      return res.status(500).send({ status: 500, message: e.message })
  }
}
