import type { Dict } from "@yamada-ui/utils"
import type { WebhookEvent } from "@yamada-ui/workspace/octokit"
import { sendDiscord } from "@yamada-ui/workspace/discord"
import {
  getContent,
  octokit,
  retryOnRateLimit,
  retryOnRateLimitWithPaging,
} from "@yamada-ui/workspace/octokit"

export async function reviewRequestRemoved({
  pull_request,
  repository,
  requested_reviewer,
}: WebhookEvent<"pull_request.review_request_removed">) {
  const {
    maintainers,
    message,
    "pull-request": { excludeReviewers },
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

  if (!requested_reviewer?.login) return

  const { data: reviews } = await retryOnRateLimit(async () =>
    octokit.pulls.listReviews({
      owner: "yamada-ui",
      pull_number: pull_request.number,
      repo: repository.name,
    }),
  )

  if (reviews.some(({ state }) => state === "APPROVED")) return

  const timeline = await retryOnRateLimitWithPaging(async (params) =>
    octokit.issues.listEventsForTimeline({
      issue_number: pull_request.number,
      owner: "yamada-ui",
      repo: repository.name,
      ...params,
    }),
  )
  const previousReviewers = timeline
    .map((timeline) => {
      if (timeline.event !== "review_requested") return

      if (!("requested_reviewer" in timeline)) return

      return timeline.requested_reviewer?.login
    })
    .filter(Boolean)
  const collaborators = [...maintainers]
  const omittedCollaborators = collaborators
    .filter(
      ({ github }: { github: { id: string } }) =>
        !excludeReviewers.includes(github.id) &&
        pull_request.user?.login !== github.id,
    )
    .filter(({ github }) => !previousReviewers.includes(github.id))
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

  let targetCollaborator = omittedCollaborators
    .filter(({ github }) => !alreadyRequestedReviewers.includes(github.id))
    .sort(() => 0.5 - Math.random())[0]

  if (!targetCollaborator)
    targetCollaborator = omittedCollaborators.sort(() => 0.5 - Math.random())[0]

  await retryOnRateLimit(async () =>
    octokit.pulls.requestReviewers({
      owner: "yamada-ui",
      pull_number: pull_request.number,
      repo: repository.name,
      reviewers: [targetCollaborator.github.id],
    }),
  )

  if (!targetCollaborator.discord?.id) return

  const content = [
    `<@${targetCollaborator.discord.id}>`,
    "",
    message.pullRequest.addReviewer,
    "",
    `[${pull_request.number}: ${pull_request.title}](${pull_request.html_url})`,
  ].join("\n")

  await sendDiscord(process.env.DISCORD_REVIEWS_WEBHOOK_URL, content)
}
