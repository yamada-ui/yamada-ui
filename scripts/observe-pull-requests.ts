import { Octokit } from "@octokit/rest"
import { isObject } from "@yamada-ui/react"
import { config } from "dotenv"

type Issue = Awaited<
  ReturnType<typeof octokit.issues.listForRepo>
>["data"][number]
type Collaborator = Awaited<
  ReturnType<typeof octokit.repos.listCollaborators>
>["data"][number]

const COMMON_PARAMS = { owner: "hirotomoyamada", repo: "yamada-ui" }
const INFORMATION_COMMENT = (id: string) =>
  [
    `@${id}`,
    `Hi, Thanks for the PR!`,
    `A week has passed since this PR was created, so core members will be joining this PR.`,
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

  issues = issues.filter(({ pull_request }) => pull_request)

  issues = issues.filter(({ user, created_at, labels }) => {
    if (!user) return false

    if (user.type === "Bot") return false

    if (labels.some((label) => isObject(label) && label.name === "help wanted"))
      return false

    if (collaboratorIds.includes(user.login)) return false

    const createdTimestamp = new Date(created_at)
    const limitTimestamp = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)

    if (createdTimestamp > limitTimestamp) return false

    return true
  })

  return issues
}

const addComment = async (issues: Issue[]) =>
  await Promise.all(
    issues.map(async (issue) => {
      const { number, title, user } = issue
      if (!user) return

      await octokit.issues.createComment({
        ...COMMON_PARAMS,
        issue_number: number,
        body: INFORMATION_COMMENT(user.login),
      })

      await octokit.issues.addLabels({
        ...COMMON_PARAMS,
        issue_number: number,
        labels: ["help wanted"],
      })

      console.log("Added comment", number, title)

      await sendDiscordChannel(issue)

      return
    }),
  )

const sendDiscordChannel = async (issue: Issue) => {
  const { number, title, html_url } = issue
  const url = process.env.DISCORD_WEBHOOK_URL

  if (!url) throw new Error("Missing Discord Webhook URL\n")

  const content = [
    `<@&1202956318718304276>`,
    `Help!, I need somebody, Help!, not just anybody,\nHelp!, you know I need someone, Help!`,
    `[${number}: ${title}](${html_url})`,
  ].join("\n\n")

  const data = {
    username: "GitHub",
    content,
  }

  const headers = { "Content-Type": "application/json" }
  const body = JSON.stringify(data)

  const { ok } = await fetch(url, { method: "POST", headers, body })

  if (!ok) throw new Error("Failed to send message to Discord\n")

  console.log("Send discord", number, title)
}

const main = async () => {
  try {
    const collaborators = await getCollaborators()

    const issues = await getIssues()

    const resolvedIssues = await filterIssues(issues, collaborators)

    await addComment(resolvedIssues)
  } catch (e) {
    if (e instanceof Error) console.log(e.message)
  }
}

main()
