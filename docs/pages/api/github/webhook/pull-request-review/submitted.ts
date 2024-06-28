import { Octokit } from "@octokit/rest"
import { recursiveOctokit, type Event } from "utils/github"
import type { APIHandler } from "utils/next"

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

export const submitted: APIHandler = async ({ req, constant }) => {
  const { review, pull_request, repository } =
    req.body as Event<"pull_request_review.submitted">
  const owner = "yamada-ui"
  const repo = repository.name
  const { user } = review
  const { number } = pull_request

  if (!user) return

  if (constant.pullRequest.excludeReviewers.includes(user.login)) return

  try {
    await recursiveOctokit(() =>
      octokit.issues.addLabels({
        owner,
        repo,
        issue_number: number,
        labels: ["request merge"],
      }),
    )
  } catch {}
}
