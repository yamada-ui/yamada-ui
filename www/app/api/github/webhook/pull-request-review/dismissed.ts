import type { WebhookEvent } from "@yamada-ui/workspace/octokit"
import { octokit, retryOnRateLimit } from "@yamada-ui/workspace/octokit"

export async function dismissed(req: Request) {
  const { pull_request, repository } =
    (await req.json()) as WebhookEvent<"pull_request_review.dismissed">

  const { data: reviewers } = await retryOnRateLimit(async () =>
    octokit.pulls.listReviews({
      owner: "yamada-ui",
      pull_number: pull_request.number,
      repo: repository.name,
    }),
  )

  if (reviewers.some(({ state }) => state === "approved")) return

  await retryOnRateLimit(async () =>
    octokit.issues.removeLabel({
      name: "merge request",
      issue_number: pull_request.number,
      owner: "yamada-ui",
      repo: repository.name,
    }),
  )
}
