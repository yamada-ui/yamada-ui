import type { Dict } from "@yamada-ui/utils"
import { isObject } from "@yamada-ui/utils"
import { sendDiscord } from "@yamada-ui/workspace/discord"
import {
  getContent,
  octokit,
  retryOnRateLimit,
  retryOnRateLimitWithPaging,
} from "@yamada-ui/workspace/octokit"

type Issue = Awaited<
  ReturnType<typeof octokit.issues.listForRepo>
>["data"][number]

async function clearAssignees(
  owner: string,
  repo: string,
  issue: Issue,
  collaboratorIds: string[],
  clearAssigneesDay: number,
  message: Dict,
) {
  const assigneeIds = issue.assignees?.map(({ login }) => login)

  if (!assigneeIds?.length) return
  if (assigneeIds.some((assigneeId) => collaboratorIds.includes(assigneeId)))
    return

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

  issue.assignee = null
}

async function addHelpWanted(
  owner: string,
  repo: string,
  issue: Issue,
  addHelpWantedDay: number,
  message: Dict,
) {
  const ignoredLabels = [
    "Challengers wanted",
    "confirm",
    "discussion",
    "duplicate",
    "fixed",
    "help wanted",
    "question",
    "triage",
    "wontfix",
  ]

  if (issue.assignee) return
  if (issue.labels.every((label) => isObject(label) && label.name !== "bug"))
    return
  if (
    issue.labels.some(
      (label) => isObject(label) && ignoredLabels.includes(label.name ?? ""),
    )
  )
    return

  const createdAt = new Date(issue.created_at)
  const AddHelpWantedLimitAt = new Date(
    Date.now() - addHelpWantedDay * 24 * 60 * 60 * 1000,
  )

  if (createdAt > AddHelpWantedLimitAt) return

  await retryOnRateLimit(async () =>
    octokit.issues.addLabels({
      issue_number: issue.number,
      labels: ["help wanted"],
      owner,
      repo,
    }),
  )

  const content = [
    `<@&1202956318718304276>`,
    "",
    message.issue.addHelpWanted,
    "",
    `[${issue.number}: ${issue.title}](${issue.html_url})`,
  ].join("\n")

  await sendDiscord(process.env.DISCORD_HELP_WANTED_WEBHOOK_URL, content)
}

export async function updateIssues(owner: string, repo: string) {
  const {
    issue: { addHelpWantedDay, clearAssigneesDay },
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
      if (issue.assignees?.some(({ login }) => collaboratorIds.includes(login)))
        return

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

      await clearAssignees(
        owner,
        repo,
        issue,
        collaboratorIds,
        clearAssigneesDay,
        message,
      )
      await addHelpWanted(owner, repo, issue, addHelpWantedDay, message)
    }),
  )
}
