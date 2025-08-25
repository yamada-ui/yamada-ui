import type { Constant, Event } from "utils/github"
import type { APIHandler } from "utils/next"
import { Octokit } from "@octokit/rest"
import { sendDiscord } from "utils/discord"
import { recursiveOctokit } from "utils/github"

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

export const opened: APIHandler = async ({ constant, req, res }) => {
  const { pull_request, repository } = req.body as Event<"pull_request.opened">
  const owner = "yamada-ui"
  const repo = repository.name
  const { head, html_url, number, requested_reviewers, title, user } =
    pull_request
  const omittedRequestReviewers = requested_reviewers?.filter(
    ({ login }) => !constant.pullRequest.excludeReviewers.includes(login),
  )
  const collaborators = [...constant.maintainers]
  const omittedCollaborators = collaborators.filter(
    ({ github }) =>
      !constant.pullRequest.excludeReviewers.includes(github.id) &&
      user.login !== github.id,
  )

  await recursiveOctokit(async () =>
    octokit.issues.addAssignees({
      assignees: ["hirotomoyamada"],
      issue_number: number,
      owner,
      repo,
    }),
  )

  let count = omittedRequestReviewers?.length ?? 0
  let selectedReviewers: string[] = []

  if (
    [
      "yamada-ui:changeset-release/main",
      "yamada-ui:changeset-release/v1",
    ].includes(head.label)
  ) {
    if (count >= 1) return

    selectedReviewers = ["hirotomoyamada"]

    await recursiveOctokit(async () =>
      octokit.pulls.requestReviewers({
        owner,
        pull_number: number,
        repo,
        reviewers: selectedReviewers,
      }),
    )
  } else {
    if (constant.pullRequest.preferredReviewers[user.login]) {
      selectedReviewers = constant.pullRequest.preferredReviewers[user.login]

      count += selectedReviewers.length
    } else {
      if (count >= constant.pullRequest.assignReviewerCount) return
    }

    const assignCount = constant.pullRequest.assignReviewerCount - count

    if (assignCount > 0) {
      selectedReviewers = [
        ...selectedReviewers,
        ...omittedCollaborators
          .sort(() => 0.5 - Math.random())
          .slice(0, assignCount)
          .map(({ github }) => github.id),
      ]
    }

    await recursiveOctokit(async () =>
      octokit.pulls.requestReviewers({
        owner,
        pull_number: number,
        repo,
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
      return res.status(500).send({ message: e.message, status: 500 })
  }
}
