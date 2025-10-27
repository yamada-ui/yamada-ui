import type { Dict } from "@yamada-ui/utils"
import type { WebhookEvent } from "@yamada-ui/workspace/octokit"
import { sendDiscord } from "@yamada-ui/workspace/discord"
import {
  getContent,
  octokit,
  retryOnRateLimit,
  retryOnRateLimitWithPaging,
} from "@yamada-ui/workspace/octokit"

export async function opened({
  pull_request,
  repository,
}: WebhookEvent<"pull_request.opened">) {
  const {
    maintainers,
    message,
    "pull-request": {
      assignReviewerCount,
      excludeReviewers,
      preferredReviewers,
    },
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
  const omittedRequestReviewers = pull_request.requested_reviewers?.filter(
    ({ login }) => !excludeReviewers.includes(login),
  )
  const collaborators = [...maintainers]
  const omittedCollaborators = collaborators.filter(
    ({ github }: { github: { id: string } }) =>
      !excludeReviewers.includes(github.id) &&
      pull_request.user.login !== github.id,
  )
  const changesetBranches = [
    "yamada-ui:changeset-release/main",
    "yamada-ui:changeset-release/v1",
  ]

  await retryOnRateLimit(async () =>
    octokit.issues.addAssignees({
      assignees: ["hirotomoyamada"],
      issue_number: pull_request.number,
      owner: "yamada-ui",
      repo: repository.name,
    }),
  )

  let requestReviewerCount = omittedRequestReviewers?.length ?? 0
  let selectedReviewers: string[] = []

  if (changesetBranches.includes(pull_request.head.label)) {
    if (requestReviewerCount >= 1) return

    selectedReviewers = ["hirotomoyamada"]

    await retryOnRateLimit(async () =>
      octokit.pulls.requestReviewers({
        owner: "yamada-ui",
        pull_number: pull_request.number,
        repo: repository.name,
        reviewers: selectedReviewers,
      }),
    )
  } else {
    if (preferredReviewers[pull_request.user.login]) {
      selectedReviewers = preferredReviewers[pull_request.user.login]

      requestReviewerCount += selectedReviewers.length
    } else {
      if (requestReviewerCount >= assignReviewerCount) return
    }

    if (assignReviewerCount - requestReviewerCount > 0) {
      const pullRequests = await retryOnRateLimitWithPaging(async (params) =>
        octokit.pulls.list({
          owner: "yamada-ui",
          repo: repository.name,
          ...params,
        }),
      )
      const alreadyRequestedReviewers = [
        ...new Set(
          pullRequests
            .flatMap(({ requested_reviewers }) =>
              requested_reviewers?.map(({ login }) => login),
            )
            .filter((login) => !excludeReviewers.includes(login)),
        ),
      ]

      selectedReviewers = [
        ...selectedReviewers,
        ...omittedCollaborators
          .filter(
            ({ github }) =>
              !selectedReviewers.includes(github.id) &&
              !alreadyRequestedReviewers.includes(github.id),
          )
          .sort(() => 0.5 - Math.random())
          .slice(0, assignReviewerCount - requestReviewerCount)
          .map(({ github }) => github.id),
      ]

      requestReviewerCount += selectedReviewers.length
    }

    if (assignReviewerCount - requestReviewerCount > 0) {
      selectedReviewers = [
        ...selectedReviewers,
        ...omittedCollaborators
          .filter(({ github }) => !selectedReviewers.includes(github.id))
          .sort(() => 0.5 - Math.random())
          .slice(0, assignReviewerCount - requestReviewerCount)
          .map(({ github }) => github.id),
      ]
    }

    await retryOnRateLimit(async () =>
      octokit.pulls.requestReviewers({
        owner: "yamada-ui",
        pull_number: pull_request.number,
        repo: repository.name,
        reviewers: selectedReviewers,
      }),
    )

    const discordIds = selectedReviewers
      .map(
        (id) =>
          collaborators.find(({ github }) => github.id === id)?.discord?.id,
      )
      .filter(Boolean)
    const content = [
      discordIds.map((id) => `<@${id}>`).join(" "),
      "",
      message.pullRequest.addReviewer,
      "",
      `[${pull_request.number}: ${pull_request.title}](${pull_request.html_url})`,
    ].join("\n")

    await sendDiscord(process.env.DISCORD_REVIEWS_WEBHOOK_URL, content)
  }
}
