import type { WebhookEvent } from "@yamada-ui/workspace/octokit"
import { octokit, retryOnRateLimit } from "@yamada-ui/workspace/octokit"

export async function dismissed({
  pull_request,
  repository,
}: WebhookEvent<"pull_request_review.dismissed">) {
  const { data: reviews } = await retryOnRateLimit(async () =>
    octokit.pulls.listReviews({
      owner: "yamada-ui",
      pull_number: pull_request.number,
      repo: repository.name,
    }),
  )

  if (reviews.some(({ state }) => state === "APPROVED")) return

  await retryOnRateLimit(async () =>
    octokit.issues.removeLabel({
      name: "merge request",
      issue_number: pull_request.number,
      owner: "yamada-ui",
      repo: repository.name,
    }),
  )
}
