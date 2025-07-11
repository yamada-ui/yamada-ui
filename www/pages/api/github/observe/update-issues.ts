import type { Constant, Issue, ListEvent } from "utils/github"
import type { APIHandler } from "utils/next"
import { Octokit } from "@octokit/rest"
import { isObject } from "@yamada-ui/react"
import { sendDiscord } from "utils/discord"
import {
  getIssues,
  getListEventsForTimeline,
  recursiveOctokit,
} from "utils/github"

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

const getPullRequestEvents = async ({
  issue_number,
  owner,
  repo,
}: {
  issue_number: number
  owner: string
  repo: string
}) => {
  const timeline = await getListEventsForTimeline({
    issue_number,
    owner,
    repo,
  })

  const pullRequestEvents = timeline.filter(
    ({ event, ...rest }) =>
      event === "cross-referenced" &&
      (rest as any).source?.issue?.state === "open",
  )

  return pullRequestEvents as ListEvent[]
}

const getAssignedEvent = async ({
  issue_number,
  owner,
  repo,
}: {
  issue_number: number
  owner: string
  repo: string
}) => {
  const { data } = await recursiveOctokit(async () =>
    octokit.issues.listEvents({
      issue_number,
      owner,
      repo,
    }),
  )

  const assignedEvents = data.filter(({ event }) => event === "assigned")

  return assignedEvents.at(-1) as ListEvent | undefined
}

const addHelpWanted = async ({
  constant,
  issue,
  owner,
  publish,
  pullRequestEvents,
  repo,
  runOctokit,
}: {
  constant: Constant
  issue: Issue
  owner: string
  publish: boolean
  pullRequestEvents: ListEvent[]
  repo: string
  runOctokit: boolean
}) => {
  const { assignee, created_at, html_url, labels, number, title } = issue
  if (assignee) return

  if (labels.every((label) => isObject(label) && label.name !== "bug")) return

  if (
    labels.some(
      (label) =>
        isObject(label) &&
        [
          "Challengers wanted",
          "confirm",
          "discussion",
          "duplicate",
          "fixed",
          "help wanted",
          "question",
          "triage",
          "wontfix",
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

  if (runOctokit) {
    await recursiveOctokit(async () =>
      octokit.issues.addLabels({
        issue_number: number,
        labels: ["help wanted"],
        owner,
        repo,
      }),
    )
  } else {
    console.log("octokit.issues.addLabels", number, "help wanted")
  }

  if (publish) {
    const content = DISCORD_HELP_WANTED_COMMENT(constant)(
      number,
      title,
      html_url,
    )

    await sendDiscord(process.env.DISCORD_HELP_WANTED_WEBHOOK_URL, content)
  }
}

const clearAssignees = async ({
  collaboratorIds,
  constant,
  issue,
  owner,
  pullRequestEvents,
  repo,
  runOctokit,
}: {
  collaboratorIds: string[]
  constant: Constant
  issue: Issue
  owner: string
  pullRequestEvents: ListEvent[]
  repo: string
  runOctokit: boolean
}) => {
  const { assignees, number } = issue
  const hasCollaborators = assignees?.some(({ login }) =>
    collaboratorIds.includes(login),
  )

  if (hasCollaborators) return

  const { created_at } =
    (await getAssignedEvent({ issue_number: number, owner, repo })) ?? {}

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

  if (runOctokit) {
    await recursiveOctokit(async () =>
      octokit.issues.createComment({
        body: GITHUB_INFORMATION_COMMENT(constant)(assigneeIds),
        issue_number: number,
        owner,
        repo,
      }),
    )
  } else {
    console.log("octokit.issues.createComment", number, ...assigneeIds)
  }

  if (runOctokit) {
    await recursiveOctokit(async () =>
      octokit.issues.removeAssignees({
        assignees: assigneeIds,
        issue_number: number,
        owner,
        repo,
      }),
    )
  } else {
    console.log("octokit.issues.removeAssignees", number, ...assigneeIds)
  }

  issue.assignee = null
}

export const updateIssues: APIHandler = async ({ constant, req, res }) => {
  const { octokit: runOctokit = true, owner, publish = true, repo } = req.body

  if (!owner)
    return res.status(400).send({ message: "Invalid owner", status: 400 })

  if (!repo)
    return res.status(400).send({ message: "Invalid repo", status: 400 })

  const collaboratorIds = [...constant.maintainers].map(
    ({ github }) => github.id,
  )

  const issues = await getIssues({ owner, repo, state: "open" })

  await Promise.all(
    issues.map(async (issue) => {
      const pullRequestEvents = await getPullRequestEvents({
        issue_number: issue.number,
        owner,
        repo,
      })

      await clearAssignees({
        collaboratorIds,
        constant,
        issue,
        owner,
        pullRequestEvents,
        repo,
        runOctokit,
      })
      await addHelpWanted({
        constant,
        issue,
        owner,
        publish,
        pullRequestEvents,
        repo,
        runOctokit,
      })
    }),
  )
}
