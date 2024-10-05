import type { Event } from "utils/github"
import type { APIHandler } from "utils/next"
import { Octokit } from "@octokit/rest"
import { recursiveOctokit } from "utils/github"

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

export const dismissed: APIHandler = async ({ req }) => {
  const { pull_request, repository } =
    req.body as Event<"pull_request_review.dismissed">
  const owner = "yamada-ui"
  const repo = repository.name
  const { number } = pull_request

  const { data: reviewers } = await recursiveOctokit(async () =>
    octokit.pulls.listReviews({
      owner,
      pull_number: number,
      repo,
    }),
  )

  const hasApproved = reviewers.some(({ state }) => state === "approved")

  if (hasApproved) return

  try {
    await recursiveOctokit(async () =>
      octokit.issues.removeLabel({
        name: "merge request",
        issue_number: number,
        owner,
        repo,
      }),
    )
  } catch {}
}
