import type { Event } from "utils/github"
import type { APIHandler } from "utils/next"
import { Octokit } from "@octokit/rest"
import { recursiveOctokit } from "utils/github"

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

export const submitted: APIHandler = async ({ constant, req }) => {
  const { pull_request, repository, review } =
    req.body as Event<"pull_request_review.submitted">
  const owner = "yamada-ui"
  const repo = repository.name
  const { state, user } = review
  const { number } = pull_request

  if (!user || state !== "approved") return

  if (constant.pullRequest.excludeReviewers.includes(user.login)) return

  try {
    await recursiveOctokit(async () =>
      octokit.issues.addLabels({
        issue_number: number,
        labels: ["merge request"],
        owner,
        repo,
      }),
    )
  } catch {}
}
