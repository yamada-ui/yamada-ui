import type { Dict } from "@yamada-ui/utils"
import type { WebhookEvent } from "@yamada-ui/workspace/octokit"
import {
  getContent,
  octokit,
  retryOnRateLimit,
} from "@yamada-ui/workspace/octokit"

export async function submitted(req: Request) {
  const { pull_request, repository, review } =
    (await req.json()) as WebhookEvent<"pull_request_review.submitted">

  if (!review.user || review.state !== "approved") return

  const { excludeReviewers } = await getContent<Dict>({
    path: "pull-request.json",
    repo: "yamada-data",
  })

  if (excludeReviewers.includes(review.user.login)) return

  await retryOnRateLimit(async () =>
    octokit.issues.addLabels({
      issue_number: pull_request.number,
      labels: ["merge request"],
      owner: "yamada-ui",
      repo: repository.name,
    }),
  )
}
