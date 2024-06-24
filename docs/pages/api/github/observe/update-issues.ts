import { Octokit } from "@octokit/rest"
import { isObject } from "@yamada-ui/react"
import { sendDiscord } from "utils/discord"
import { recursiveOctokit, type Constant } from "utils/github"
import type { APIHandler } from "utils/next"

type Issue = Awaited<
  ReturnType<typeof octokit.issues.listForRepo>
>["data"][number]
type Event = Awaited<
  ReturnType<typeof octokit.issues.listEventsForTimeline>
>["data"][number] & { created_at: number }

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

const GITHUB_INFORMATION_COMMENT = (constant: Constant) => (ids: string[]) =>
  [
    ids.map((id) => `@${id}`).join(" "),
    "",
    constant.message.issue.clearAssignees,
  ].join("\n")
const DISCORD_HELP_WANTED_COMMENT =
  (constant: Constant) => (number: number, title: string, html_url: string) =>
    [
      `<@&1202956318718304276> <@&1246174065216192662>`,
      "",
      constant.message.issue.addHelpWanted,
      "",
      `[${number}: ${title}](${html_url})`,
    ].join("\n")

const getIssues = async ({ owner, repo }: { owner: string; repo: string }) => {
  let issues: Issue[] = []
  let page = 1
  let count = 0
  const perPage = 100

  const listForRepo = async () => {
    const { data } = await octokit.issues.listForRepo({
      owner,
      repo,
      state: "open",
      per_page: perPage,
      page,
    })

    issues.push(...data)

    count = data.length

    if (count === perPage) {
      page++

      await recursiveOctokit(listForRepo)
    }
  }

  await recursiveOctokit(listForRepo)

  issues = issues.filter(({ pull_request }) => !pull_request)

  return issues
}

const getPullRequestEvents = async ({
  owner,
  repo,
  issue_number,
}: {
  owner: string
  repo: string
  issue_number: number
}) => {
  const { data } = await recursiveOctokit(() =>
    octokit.issues.listEventsForTimeline({
      owner,
      repo,
      issue_number,
    }),
  )

  const pullRequestEvents = data.filter(
    ({ event, ...rest }) =>
      event === "cross-referenced" &&
      (rest as any).source?.issue?.state === "open",
  )

  return pullRequestEvents as Event[]
}

const getAssignedEvent = async ({
  owner,
  repo,
  issue_number,
}: {
  owner: string
  repo: string
  issue_number: number
}) => {
  const { data } = await recursiveOctokit(() =>
    octokit.issues.listEvents({
      owner,
      repo,
      issue_number,
    }),
  )

  const assignedEvents = data.filter(({ event }) => event === "assigned")

  return assignedEvents.at(-1) as Event | undefined
}

const addHelpWanted = async ({
  owner,
  repo,
  issue,
  pullRequestEvents,
  constant,
}: {
  owner: string
  repo: string
  issue: Issue
  pullRequestEvents: Event[]
  constant: Constant
}) => {
  const { number, title, labels, created_at, assignee, html_url } = issue
  if (assignee) return

  if (labels.every((label) => isObject(label) && label.name !== "bug")) return

  if (
    labels.some(
      (label) =>
        isObject(label) &&
        [
          "fixed",
          "discussion",
          "help wanted",
          "question",
          "wontfix",
          "duplicate",
          "confirm",
          "Challengers wanted",
        ].includes(label.name ?? ""),
    )
  )
    return

  const createdTimestamp = new Date(created_at)
  const limitTimestamp = new Date(
    Date.now() - constant.issue.addHelpWantedDay * 24 * 60 * 60 * 1000,
  )

  if (createdTimestamp > limitTimestamp) return

  const hasPullRequest = pullRequestEvents.length

  if (hasPullRequest) return

  await recursiveOctokit(() =>
    octokit.issues.addLabels({
      owner,
      repo,
      issue_number: number,
      labels: ["help wanted"],
    }),
  )

  const content = DISCORD_HELP_WANTED_COMMENT(constant)(number, title, html_url)

  await sendDiscord(process.env.DISCORD_HELP_WANTED_WEBHOOK_URL, content)
}

const clearAssignees = async ({
  owner,
  repo,
  issue,
  collaboratorIds,
  pullRequestEvents,
  constant,
}: {
  owner: string
  repo: string
  issue: Issue
  collaboratorIds: string[]
  pullRequestEvents: Event[]
  constant: Constant
}) => {
  const { number, assignees } = issue
  const hasCollaborators = assignees?.some(({ login }) =>
    collaboratorIds.includes(login),
  )

  if (hasCollaborators) return

  const { created_at } =
    (await getAssignedEvent({ owner, repo, issue_number: number })) ?? {}

  if (!created_at) return

  const eventTimestamp = new Date(created_at)
  const limitTimestamp = new Date(
    Date.now() - constant.issue.clearAssigneesDay * 24 * 60 * 60 * 1000,
  )

  if (eventTimestamp > limitTimestamp) return

  const hasPullRequest = pullRequestEvents.length

  if (hasPullRequest) return

  const assigneeIds = assignees?.map(({ login }) => login)

  if (!assigneeIds?.length) return

  await recursiveOctokit(() =>
    octokit.issues.createComment({
      owner,
      repo,
      issue_number: number,
      body: GITHUB_INFORMATION_COMMENT(constant)(assigneeIds),
    }),
  )

  await recursiveOctokit(() =>
    octokit.issues.removeAssignees({
      owner,
      repo,
      issue_number: number,
      assignees: assigneeIds,
    }),
  )

  issue.assignee = null
}

export const updateIssues: APIHandler = async ({ req, res, constant }) => {
  const { owner, repo } = req.body

  if (!owner)
    return res.status(400).send({ status: 400, message: "Invalid owner" })

  if (!repo)
    return res.status(400).send({ status: 400, message: "Invalid repo" })

  const collaborators = [...constant.maintainers, ...constant.members]
  const collaboratorIds = collaborators.map(({ github }) => github.id)

  const issues = await getIssues({ owner, repo })

  await Promise.all(
    issues.map(async (issue) => {
      const pullRequestEvents = await getPullRequestEvents({
        owner,
        repo,
        issue_number: issue.number,
      })

      await clearAssignees({
        owner,
        repo,
        issue,
        collaboratorIds,
        pullRequestEvents,
        constant,
      })
      await addHelpWanted({ owner, repo, issue, pullRequestEvents, constant })
    }),
  )
}
