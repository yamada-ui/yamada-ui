import { Octokit } from "@octokit/rest"
import { isObject } from "@yamada-ui/react"
import { config } from "dotenv"
import type { Constant } from "./utils"
import { getConstant, recursiveOctokit } from "./utils"

type Issue = Awaited<
  ReturnType<typeof octokit.issues.listForRepo>
>["data"][number]
type Event = Awaited<
  ReturnType<typeof octokit.issues.listEventsForTimeline>
>["data"][number] & { created_at: number }

config()

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })
let constant: Constant = {}

const COMMON_PARAMS = { owner: "yamada-ui", repo: "yamada-ui" }
const GITHUB_INFORMATION_COMMENT = (ids: string[]) =>
  [
    ids.map((id) => `@${id}`).join(" "),
    "",
    constant.message.issue.clearAssignees,
  ].join("\n")
const DISCORD_HELP_WANTED_COMMENT = (
  number: number,
  title: string,
  html_url: string,
) =>
  [
    `<@&1202956318718304276> <@&1246174065216192662>`,
    "",
    constant.message.issue.addHelpWanted,
    "",
    `[${number}: ${title}](${html_url})`,
  ].join("\n")

const getCollaborators = async () => {
  const { data } = await recursiveOctokit(() =>
    octokit.repos.listCollaborators({
      ...COMMON_PARAMS,
      per_page: 100,
    }),
  )

  return data
}

const getIssues = async () => {
  let issues: Issue[] = []
  let page = 1
  let count = 0
  const perPage = 100

  const listForRepo = async () => {
    const { data } = await octokit.issues.listForRepo({
      ...COMMON_PARAMS,
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

const getPullRequestEvents = async (issue_number: number) => {
  const { data } = await recursiveOctokit(() =>
    octokit.issues.listEventsForTimeline({
      ...COMMON_PARAMS,
      issue_number,
    }),
  )

  const pullRequestEvents = data.filter(
    ({ event, ...rest }) =>
      event === "cross-referenced" &&
      (rest as any).source?.issue?.state === "open",
  )

  return pullRequestEvents
}

const addHelpWanted = async ({
  number,
  title,
  labels,
  created_at,
  assignee,
  html_url,
}: Issue) => {
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

  const pullRequestEvents = await getPullRequestEvents(number)
  const hasPullRequest = pullRequestEvents.length

  if (hasPullRequest) return

  await recursiveOctokit(() =>
    octokit.issues.addLabels({
      ...COMMON_PARAMS,
      issue_number: number,
      labels: ["help wanted"],
    }),
  )

  console.log("Added label", number, title)

  const content = DISCORD_HELP_WANTED_COMMENT(number, title, html_url)

  await sendDiscordChannel(content)
}

const sendDiscordChannel = async (content: string) => {
  const url = process.env.DISCORD_HELP_WANTED_WEBHOOK_URL

  if (!url) throw new Error("Missing Discord Webhook URL\n")

  const data = { username: "GitHub", content }

  const headers = { "Content-Type": "application/json" }
  const body = JSON.stringify(data)

  const { ok } = await fetch(url, { method: "POST", headers, body })

  if (!ok) throw new Error("Failed to send message to Discord\n")
}

const getAssignedEvent = async (issue_number: number) => {
  const { data } = await recursiveOctokit(() =>
    octokit.issues.listEvents({
      ...COMMON_PARAMS,
      issue_number,
    }),
  )

  const assignedEvents = data.filter(({ event }) => event === "assigned")

  return assignedEvents.at(-1) as Event | undefined
}

const clearAssignees = async (issue: Issue, collaboratorIds: string[]) => {
  const { number, title, assignees } = issue
  const hasCollaborators = assignees?.some(({ login }) =>
    collaboratorIds.includes(login),
  )

  if (hasCollaborators) return

  const { created_at } = (await getAssignedEvent(number)) ?? {}

  if (!created_at) return

  const eventTimestamp = new Date(created_at)
  const limitTimestamp = new Date(
    Date.now() - constant.issue.clearAssigneesDay * 24 * 60 * 60 * 1000,
  )

  if (eventTimestamp > limitTimestamp) return

  const pullRequestEvents = await getPullRequestEvents(number)
  const hasPullRequest = pullRequestEvents.length

  if (hasPullRequest) return

  const assigneeIds = assignees?.map(({ login }) => login)

  if (!assigneeIds?.length) return

  await recursiveOctokit(() =>
    octokit.issues.createComment({
      ...COMMON_PARAMS,
      issue_number: number,
      body: GITHUB_INFORMATION_COMMENT(assigneeIds),
    }),
  )

  await recursiveOctokit(() =>
    octokit.issues.removeAssignees({
      ...COMMON_PARAMS,
      issue_number: number,
      assignees: assigneeIds,
    }),
  )

  issue.assignee = null

  console.log("Clear assignees", number, title)
}

const main = async () => {
  try {
    constant = await getConstant()

    const collaborators = await getCollaborators()

    const issues = await getIssues()

    const collaboratorIds = collaborators.map(({ login }) => login)

    await Promise.all(
      issues.map(async (issue) => {
        await clearAssignees(issue, collaboratorIds)
        await addHelpWanted(issue)
      }),
    )
  } catch (e) {
    if (e instanceof Error) console.log(e.message)
  }
}

main()
