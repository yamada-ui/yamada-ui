import { Octokit } from "@octokit/rest"
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

const COMMON_PARAMS = { owner: "hirotomoyamada", repo: "yamada-docs" }
const INFORMATION_COMMENT = (id: string) =>
  [
    `@${id}`,
    `Hi, Thanks for the working on this issue!`,
    `We will return this issue assignment to initial state.`,
    `If you are working on this issue and would like to be reassigned, please contact us.`,
  ].join("\n\n")

config()

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

const getCollaborators = async () => {
  const { data } = await octokit.repos.listCollaborators({ ...COMMON_PARAMS })

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
      assignee: "*",
      per_page: perPage,
      page,
    })

    issues.push(...data)

    count = data.length

    page++
  } while (count === perPage)

  return issues
}

const filterIssues = async (issues: Issue[], collaborators: Collaborator[]) => {
  const collaboratorIds = collaborators.map(({ login }) => login)

  issues = issues.filter(({ pull_request }) => !pull_request)

  issues = issues.filter(
    ({ assignees }) =>
      assignees?.some(({ login }) => !collaboratorIds.includes(login)),
  )

  const resolvedIssues = (
    await Promise.all(
      issues.map(async (issue) => {
        const { created_at } = await getAssignedEvent(issue.number)

        const eventTimestamp = new Date(created_at)
        const limitTimestamp = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000)

        if (eventTimestamp <= limitTimestamp) return issue
      }),
    )
  ).filter(Boolean) as Issue[]

  return resolvedIssues
}

const getAssignedEvent = async (issue_number: number) => {
  const { data } = await octokit.issues.listEventsForTimeline({
    ...COMMON_PARAMS,
    issue_number,
  })

  const assignedEvents = data.filter(({ event }) => event === "assigned")

  return assignedEvents.at(-1) as Event
}

const clearAssignIssue = async (issues: Issue[]) =>
  await Promise.all(
    issues.map(async ({ number, title, assignee }) => {
      if (!assignee) return

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

const main = async () => {
  try {
    const collaborators = await getCollaborators()

    const issues = await getIssues()

    const resolvedIssues = await filterIssues(issues, collaborators)

    await clearAssignIssue(resolvedIssues)
  } catch (e) {
    if (e instanceof Error) console.log(e.message)
  }
}

main()
