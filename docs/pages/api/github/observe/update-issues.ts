import { Octokit } from "@octokit/rest"
import { isObject } from "@yamada-ui/react"
import { sendDiscord } from "utils/discord"
import type { ListEvent, Issue } from "utils/github"
import {
  getIssues,
  getListEventsForTimeline,
  recursiveOctokit,
} from "utils/github"
import type { Constant } from "utils/github"
import type { APIHandler } from "utils/next"

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
  owner,
  repo,
  issue_number,
}: {
  owner: string
  repo: string
  issue_number: number
}) => {
  const timeline = await getListEventsForTimeline({
    owner,
    repo,
    issue_number,
  })

  const pullRequestEvents = timeline.filter(
    ({ event, ...rest }) =>
      event === "cross-referenced" &&
      (rest as any).source?.issue?.state === "open",
  )

  return pullRequestEvents as ListEvent[]
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

  return assignedEvents.at(-1) as ListEvent | undefined
}

const addHelpWanted = async ({
  owner,
  repo,
  issue,
  pullRequestEvents,
  constant,
  publish,
  runOctokit,
}: {
  owner: string
  repo: string
  issue: Issue
  pullRequestEvents: ListEvent[]
  constant: Constant
  publish: boolean
  runOctokit: boolean
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

  if (runOctokit) {
    await recursiveOctokit(() =>
      octokit.issues.addLabels({
        owner,
        repo,
        issue_number: number,
        labels: ["help wanted"],
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
  owner,
  repo,
  issue,
  collaboratorIds,
  pullRequestEvents,
  constant,
  runOctokit,
}: {
  owner: string
  repo: string
  issue: Issue
  collaboratorIds: string[]
  pullRequestEvents: ListEvent[]
  constant: Constant
  runOctokit: boolean
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

  if (runOctokit) {
    await recursiveOctokit(() =>
      octokit.issues.createComment({
        owner,
        repo,
        issue_number: number,
        body: GITHUB_INFORMATION_COMMENT(constant)(assigneeIds),
      }),
    )
  } else {
    console.log("octokit.issues.createComment", number, ...assigneeIds)
  }

  if (runOctokit) {
    await recursiveOctokit(() =>
      octokit.issues.removeAssignees({
        owner,
        repo,
        issue_number: number,
        assignees: assigneeIds,
      }),
    )
  } else {
    console.log("octokit.issues.removeAssignees", number, ...assigneeIds)
  }

  issue.assignee = null
}

export const updateIssues: APIHandler = async ({ req, res, constant }) => {
  const { owner, repo, publish = true, octokit: runOctokit = true } = req.body

  if (!owner)
    return res.status(400).send({ status: 400, message: "Invalid owner" })

  if (!repo)
    return res.status(400).send({ status: 400, message: "Invalid repo" })

  const collaborators = [...constant.maintainers, ...constant.members]
  const collaboratorIds = collaborators.map(({ github }) => github.id)

  const issues = await getIssues({ owner, repo, state: "open" })

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
        runOctokit,
      })
      await addHelpWanted({
        owner,
        repo,
        issue,
        pullRequestEvents,
        constant,
        publish,
        runOctokit,
      })
    }),
  )
}
