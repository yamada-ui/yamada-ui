import type { Dict } from "@yamada-ui/utils"
import {
  getContent,
  octokit,
  retryOnRateLimit,
  retryOnRateLimitWithPaging,
} from "@yamada-ui/workspace/octokit"

export async function updateIssues(owner: string, repo: string) {
  const {
    issue: { clearAssigneesDay },
    maintainers,
    message,
  } = Object.fromEntries(
    await Promise.all(
      ["maintainers.json", "issue.json", "message.json"].map(async (path) => [
        path.split(".")[0]!,
        await getContent<Dict>({ path, repo: "yamada-data" }),
      ]),
    ),
  )
  const collaborators = [...maintainers]
  const collaboratorIds = collaborators.map(({ github }) => github.id)
  const issues = (
    await retryOnRateLimitWithPaging(async (params) =>
      octokit.issues.listForRepo({ owner, repo, ...params }),
    )
  ).filter(({ pull_request }) => !pull_request)

  await Promise.all(
    issues.map(async (issue) => {
      const assigneeIds = issue.assignees?.map(({ login }) => login)

      if (!assigneeIds?.length) return
      if (assigneeIds.some((id) => collaboratorIds.includes(id))) return

      const timeline = (
        await retryOnRateLimitWithPaging(async (params) =>
          octokit.issues.listEventsForTimeline({
            issue_number: issue.number,
            owner,
            repo,
            ...params,
          }),
        )
      ).filter(
        (item) =>
          item.event === "cross-referenced" &&
          "source" in item &&
          item.source.issue?.state === "open",
      )

      if (timeline.length) return

      const { data } = await retryOnRateLimit(async () =>
        octokit.issues.listEvents({
          issue_number: issue.number,
          owner,
          repo,
        }),
      )
      const latestAssignedEvent = data
        .filter(({ event }) => event === "assigned")
        .at(-1)

      if (!latestAssignedEvent?.created_at) return

      const assignedAt = new Date(latestAssignedEvent.created_at)
      const clearAssigneesLimitAt = new Date(
        Date.now() - clearAssigneesDay * 24 * 60 * 60 * 1000,
      )

      if (assignedAt > clearAssigneesLimitAt) return

      const body = [
        assigneeIds.map((id) => `@${id}`).join(" "),
        "",
        message.issue.clearAssignees,
      ].join("\n")

      await retryOnRateLimit(async () =>
        octokit.issues.createComment({
          body,
          issue_number: issue.number,
          owner,
          repo,
        }),
      )

      await retryOnRateLimit(async () =>
        octokit.issues.removeAssignees({
          assignees: assigneeIds,
          issue_number: issue.number,
          owner,
          repo,
        }),
      )
    }),
  )
}
