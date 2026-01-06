import type { Dict } from "@yamada-ui/utils"
import {
  getContent,
  octokit,
  retryOnRateLimit,
  retryOnRateLimitWithPaging,
} from "@yamada-ui/workspace/octokit"

export async function updatePullRequests(owner: string, repo: string) {
  const {
    maintainers,
    message,
    "pull-request": { joinMaintainerDay, requireApprovalCount },
  } = Object.fromEntries(
    await Promise.all(
      ["maintainers.json", "pull-request.json", "message.json"].map(
        async (path) => [
          path.split(".")[0]!,
          await getContent<Dict>({ path, repo: "yamada-data" }),
        ],
      ),
    ),
  )
  const collaborators = [...maintainers]
  const collaboratorIds = collaborators.map(({ github }) => github.id)
  const changesetBranches = [
    "yamada-ui:changeset-release/main",
    "yamada-ui:changeset-release/v1",
  ]
  const pullRequests = (
    await retryOnRateLimitWithPaging(async (params) =>
      octokit.issues.listForRepo({ owner, repo, ...params }),
    )
  ).filter(({ pull_request }) => pull_request)

  await Promise.all(
    pullRequests.map(async ({ number }) => {
      const { data: pullRequest } = await retryOnRateLimit(async () =>
        octokit.pulls.get({ owner, pull_number: number, repo }),
      )
      const createdAt = new Date(pullRequest.created_at)
      const joinMaintainerLimitAt = new Date(
        Date.now() - joinMaintainerDay * 24 * 60 * 60 * 1000,
      )

      if (createdAt > joinMaintainerLimitAt) return
      if (changesetBranches.includes(pullRequest.head.label)) return
      if (collaboratorIds.includes(pullRequest.user.login)) return
      if (pullRequest.user.type === "Bot") return
      if (pullRequest.draft) return
      if (pullRequest.labels.some((label) => "help wanted" === label.name))
        return

      const { data: reviewers } = await retryOnRateLimit(async () =>
        octokit.pulls.listReviews({
          owner,
          pull_number: number,
          repo,
        }),
      )
      const ApprovedReviewCount = reviewers.reduce(
        (count, { state }) => (state === "APPROVED" ? count + 1 : count),
        0,
      )

      if (ApprovedReviewCount >= requireApprovalCount) return

      const body = [
        `@${pullRequest.user.login}`,
        "",
        message.pullRequest.joinMaintainer,
      ].join("\n")

      await retryOnRateLimit(async () =>
        octokit.issues.createComment({
          body,
          issue_number: pullRequest.number,
          owner,
          repo,
        }),
      )

      await retryOnRateLimit(async () =>
        octokit.issues.addLabels({
          issue_number: pullRequest.number,
          labels: ["help wanted"],
          owner,
          repo,
        }),
      )
    }),
  )
}
