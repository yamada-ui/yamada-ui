import { Octokit } from "@octokit/rest"
import { sendDiscord } from "utils/discord"
import { recursiveOctokit, type Constant, type Event } from "utils/github"
import type { APIHandler } from "utils/next"

export const DISCORD_REVIEW_COMMENT =
  (constant: Constant) =>
  (ids: string[], number: number, title: string, html_url: string) =>
    [
      ids.map((id) => `<@${id}>`).join(" "),
      "",
      constant.message.pullRequest.addReviewer,
      "",
      `[${number}: ${title}](${html_url})`,
    ].join("\n")

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

export const opened: APIHandler = async ({ req, res, constant }) => {
  const { repository, pull_request } = req.body as Event<"pull_request.opened">
  const owner = "yamada-ui"
  const repo = repository.name
  const { number, title, html_url, head, user, requested_reviewers } =
    pull_request
  const omittedRequestReviewers = requested_reviewers?.filter(
    ({ login }) => !constant.pullRequest.excludeReviewers.includes(login),
  )
  const count = omittedRequestReviewers?.length ?? 0
  const collaborators = [...constant.maintainers, ...constant.members]
  const omittedCollaborators = collaborators.filter(
    ({ github }) =>
      !constant.pullRequest.excludeReviewers.includes(github.id) &&
      user?.login !== github.id,
  )

  await recursiveOctokit(() =>
    octokit.issues.addAssignees({
      owner,
      repo,
      issue_number: number,
      assignees: ["hirotomoyamada"],
    }),
  )

  let selectedReviewers: string[]

  if (head.label === "yamada-ui:changeset-release/main") {
    if (count >= 1) return

    selectedReviewers = ["hirotomoyamada"]

    await recursiveOctokit(() =>
      octokit.pulls.requestReviewers({
        owner,
        repo,
        pull_number: number,
        reviewers: selectedReviewers,
      }),
    )
  } else {
    if (count >= constant.pullRequest.assignReviewerCount) return

    const assignCount = constant.pullRequest.assignReviewerCount - count

    selectedReviewers = omittedCollaborators
      .sort(() => 0.5 - Math.random())
      .slice(0, assignCount)
      .map(({ github }) => github.id)

    await recursiveOctokit(() =>
      octokit.pulls.requestReviewers({
        owner,
        repo,
        pull_number: number,
        reviewers: selectedReviewers,
      }),
    )
  }

  try {
    const selectedReviewerIds = selectedReviewers
      .map(
        (id) =>
          collaborators.find(({ github }) => github.id === id)?.discord?.id,
      )
      .filter(Boolean)

    await sendDiscord(
      process.env.DISCORD_REVIEWS_WEBHOOK_URL,
      DISCORD_REVIEW_COMMENT(constant)(
        selectedReviewerIds,
        number,
        title,
        html_url,
      ),
    )
  } catch (e) {
    if (e instanceof Error)
      return res.status(500).send({ status: 500, message: e.message })
  }
}
