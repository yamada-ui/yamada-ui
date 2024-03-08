import { Octokit } from "@octokit/rest"
import { isObject } from "@yamada-ui/react"
import { config } from "dotenv"

type Issue = Awaited<
  ReturnType<typeof octokit.issues.listForRepo>
>["data"][number]
type Collaborator = Awaited<
  ReturnType<typeof octokit.repos.listCollaborators>
>["data"][number]
type Event = Awaited<
  ReturnType<typeof octokit.issues.listEventsForTimeline>
>["data"][number] & { created_at: number }

const COMMON_PARAMS = { owner: "yamada-ui", repo: "yamada-docs" }
const INFORMATION_COMMENT = (id: string) =>
  [
    `@${id}`,
    `Hi, Thanks for the working on this issue!`,
    `We will return this issue assignment to initial state.`,
    `If you are working on this issue and would like to be reassigned, please contact us.`,
  ].join("\n\n")
const DISCORD_HELP_WANTED_COMMENT = (
  number: number,
  title: string,
  html_url: string,
) =>
  [
    `<@&1202956318718304276>`,
    `Help!, I need somebody, Help!, not just anybody,\nHelp!, you know I need someone, Help!`,
    `[${number}: ${title}](${html_url})`,
  ].join("\n\n")

config()

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

const getCollaborators = async () => {
  const { data } = await octokit.repos.listCollaborators({
    ...COMMON_PARAMS,
    per_page: 100,
  })

  return data
}

const getIssues = async () => {
  let issues: Issue[] = []
  let page = 1
  let count = 0
  const perPage = 100

  do {
    const { data } = await octokit.issues.listForRepo({
      ...COMMON_PARAMS,
      state: "open",
      per_page: perPage,
      page,
    })

    issues.push(...data)

    count = data.length

    page++
  } while (count === perPage)

  issues = issues.filter(({ pull_request }) => !pull_request)

  return issues
}

const getPullRequestEvents = async (issue_number: number) => {
  const { data } = await octokit.issues.listEventsForTimeline({
    ...COMMON_PARAMS,
    issue_number,
  })

  const pullRequestEvents = data.filter(
    ({ event, ...rest }) =>
      event === "cross-referenced" &&
      (rest as any).source?.issue?.state === "open",
  )

  return pullRequestEvents
}

const addHelpWantedLabel = async (issues: Issue[]) => {
  const url = process.env.DISCORD_HELP_WANTED_WEBHOOK_URL

  if (!url) throw new Error("Missing Discord Webhook URL\n")

  await Promise.all(
    issues.map(
      async ({ number, title, labels, created_at, assignee, html_url }) => {
        if (assignee) return

        if (labels.every((label) => isObject(label) && label.name !== "bug"))
          return

        if (
          labels.some(
            (label) =>
              isObject(label) &&
              [
                "fixed",
                "discussion",
                "help wanted",
                "question",
                "ongoing",
                "wontfix",
                "duplicate",
                "confirm",
                "Challengers wanted",
              ].includes(label.name ?? ""),
          )
        )
          return

        const createdTimestamp = new Date(created_at)
        const limitTimestamp = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)

        if (createdTimestamp > limitTimestamp) return

        const pullRequestEvents = await getPullRequestEvents(number)
        const hasPullRequest = pullRequestEvents.length

        if (hasPullRequest) return

        await octokit.issues.addLabels({
          ...COMMON_PARAMS,
          issue_number: number,
          labels: ["help wanted"],
        })

        console.log("Added label", number, title)

        const content = DISCORD_HELP_WANTED_COMMENT(number, title, html_url)

        await sendDiscordChannel(url, content)

        console.log("Send discord", number, title)
      },
    ),
  )
}

const sendDiscordChannel = async (url: string, content: string) => {
  const data = { username: "GitHub", content }

  const headers = { "Content-Type": "application/json" }
  const body = JSON.stringify(data)

  const { ok } = await fetch(url, { method: "POST", headers, body })

  if (!ok) throw new Error("Failed to send message to Discord\n")
}

const getAssignedEvent = async (issue_number: number) => {
  const { data } = await octokit.issues.listEventsForTimeline({
    ...COMMON_PARAMS,
    issue_number,
  })

  const assignedEvents = data.filter(({ event }) => event === "assigned")

  return assignedEvents.at(-1) as Event
}

const clearAssignIssues = async (
  issues: Issue[],
  collaborators: Collaborator[],
) => {
  const collaboratorIds = collaborators.map(({ login }) => login)

  issues = issues.filter(
    ({ assignees }) =>
      !assignees?.some(({ login }) => collaboratorIds.includes(login)),
  )

  await Promise.all(
    issues.map(async ({ number, title, assignee }) => {
      if (!assignee) return

      const { created_at } = await getAssignedEvent(number)

      const eventTimestamp = new Date(created_at)
      const limitTimestamp = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000)

      if (eventTimestamp > limitTimestamp) return

      const pullRequestEvents = await getPullRequestEvents(number)
      const hasPullRequest = pullRequestEvents.length

      if (hasPullRequest) return

      await octokit.issues.createComment({
        ...COMMON_PARAMS,
        issue_number: number,
        body: INFORMATION_COMMENT(assignee.login),
      })

      await octokit.issues.removeAssignees({
        ...COMMON_PARAMS,
        issue_number: number,
        assignees: [assignee.login],
      })

      console.log("Clear assignees", number, title)

      return
    }),
  )
}

const main = async () => {
  try {
    const collaborators = await getCollaborators()

    const issues = await getIssues()

    await addHelpWantedLabel(issues)
    await clearAssignIssues(issues, collaborators)
  } catch (e) {
    if (e instanceof Error) console.log(e.message)
  }
}

main()
