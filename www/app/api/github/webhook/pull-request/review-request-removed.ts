import type { Dict } from "@yamada-ui/utils"
import type { WebhookEvent } from "@yamada-ui/workspace/octokit"
import { sendDiscord } from "@yamada-ui/workspace/discord"
import {
  getContent,
  octokit,
  retryOnRateLimit,
  retryOnRateLimitWithPaging,
} from "@yamada-ui/workspace/octokit"

export async function reviewRequestRemoved(req: Request) {
  const { pull_request, repository, requested_reviewer } =
    (await req.json()) as WebhookEvent<"pull_request.review_request_removed">
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

  if (!requested_reviewer?.login) return new Response(null, { status: 400 })

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
  const targetCollaborator = omittedCollaborators.sort(
    () => 0.5 - Math.random(),
  )[0]

  if (!targetCollaborator?.github?.id)
    return new Response(null, { status: 400 })

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
