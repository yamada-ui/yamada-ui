import { Octokit } from "@octokit/rest"
import { recursiveOctokit, type Event } from "utils/github"
import type { APIHandler } from "utils/next"

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

export const dismissed: APIHandler = async ({ req }) => {
  const { pull_request, repository } =
    req.body as Event<"pull_request_review.dismissed">
  const owner = "yamada-ui"
  const repo = repository.name
  const { number } = pull_request

  const { data: reviewers } = await recursiveOctokit(() =>
    octokit.pulls.listReviews({
      owner,
      repo,
      pull_number: number,
    }),
  )

  const hasApproved = reviewers.some(({ state }) => state === "approved")

  if (hasApproved) return

  try {
    await recursiveOctokit(() =>
      octokit.issues.removeLabel({
        owner,
        repo,
        issue_number: number,
        name: "merge request",
      }),
    )
  } catch {}
}
