import { Octokit } from "@octokit/rest"
import dayjs from "dayjs"
import { config } from "dotenv"

type Issue = Awaited<
  ReturnType<typeof octokit.search.issuesAndPullRequests>
>["data"]["items"][number]
type Comment = Awaited<
  ReturnType<typeof octokit.issues.listCommentsForRepo>
>["data"][number]
type Collaborator = Awaited<
  ReturnType<typeof octokit.repos.listCollaborators>
>["data"][number]

type Insight = {
  login: string
  html_url: string
  comments: Comment[]
  issues: {
    created: Issue[]
  }
  pullRequests: {
    created: Issue[]
    reviewed: Issue[]
  }
}

const COMMON_PARAMS = {
  owner: "yamada-ui",
  repo: "yamada-ui",
}
const OMIT_GITHUB_IDS = ["hajimemat"]
const MIN_DATE = dayjs().subtract(7, "days").hour(18).minute(0).second(0)
const QUERY_FORMAT = "YYYY-MM-DDTHH:mm:ss"
const REPORT_FORMAT = "YYYY/MM/DD"
config()

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const getCollaborators = async () => {
  const { data } = await octokit.repos.listCollaborators({
    ...COMMON_PARAMS,
    per_page: 100,
  })

  return data
}

const getIssuesAndPullRequests = async (username: string, filter: string) => {
  let issues: Issue[] = []
  let page = 1
  let count = 0

  const query = `${filter}:${username} created:>=${MIN_DATE.format(QUERY_FORMAT)}`
  const perPage = 100

  do {
    const { data } = await octokit.search.issuesAndPullRequests({
      q: query,
      per_page: perPage,
      page,
    })
    const { total_count, items } = data

    issues.push(...items)

    count = total_count

    page++
  } while (count === perPage)

  return issues
}

const getComments = async () => {
  let comments = []
  let page = 1
  let count = 0

  const perPage = 100

  do {
    const { data } = await octokit.issues.listCommentsForRepo({
      ...COMMON_PARAMS,
      since: MIN_DATE.format(QUERY_FORMAT),
      per_page: perPage,
      page,
    })

    comments.push(...data)

    count = data.length

    page++
  } while (count === perPage)

  return comments
}

const getInsights = async (collaborators: Collaborator[]) => {
  const comments = await getComments()

  const insights: Insight[] = []

  const omittedCollaborators = collaborators.filter(
    ({ login }) => !OMIT_GITHUB_IDS.includes(login),
  )

  for await (const { login, html_url } of omittedCollaborators) {
    const issuesAndPullRequests = await getIssuesAndPullRequests(
      login,
      "author",
    )
    const reviewedPullRequest = await getIssuesAndPullRequests(
      login,
      "reviewed-by",
    )
    const sentComments = comments.filter(({ user }) => user?.login === login)
    const createdIssues: Issue[] = []
    const createdPullRequests: Issue[] = []

    issuesAndPullRequests.forEach((issueAndPullRequest) => {
      if (issueAndPullRequest.pull_request) {
        createdPullRequests.push(issueAndPullRequest)
      } else {
        createdIssues.push(issueAndPullRequest)
      }
    })

    insights.push({
      login,
      html_url,
      comments: sentComments,
      issues: {
        created: createdIssues,
      },
      pullRequests: {
        created: createdPullRequests,
        reviewed: reviewedPullRequest,
      },
    })

    await wait(3000)
  }

  return insights
}

const createReport = (insights: Insight[]) => {
  const contents = insights
    .map(({ login, html_url, comments, issues, pullRequests }) => {
      const sentCommentCount = comments.length
      const createdIssueCount = issues.created.length
      const createdPRCount = pullRequests.created.length
      const reviewedPRCount = pullRequests.reviewed.length
      const totalCount =
        createdIssueCount + createdPRCount + reviewedPRCount + sentCommentCount

      return {
        total: totalCount,
        content: [
          `- [${login}](${html_url}): ${totalCount}`,
          `  - Issue: ${createdIssueCount}`,
          `  - PR: ${createdPRCount}`,
          `  - Review: ${reviewedPRCount}`,
          `  - Comment: ${sentCommentCount}`,
        ].join("\n"),
      }
    })
    .sort((a, b) => b.total - a.total)
    .map(({ content }) => content)

  const minDate = MIN_DATE.format(REPORT_FORMAT)
  const maxDate = dayjs().format(REPORT_FORMAT)

  return [
    `<@&1202956318718304276>`,
    `## Insight Report`,
    `${minDate} - ${maxDate}`,
    "",
    ...contents,
  ].join("\n")
}

const sendDiscordChannel = async (content: string) => {
  const url = process.env.DISCORD_INSIGHTS_WEBHOOK_URL

  if (!url) throw new Error("Missing Discord Webhook URL\n")

  const data = { username: "GitHub", content }

  const headers = { "Content-Type": "application/json" }
  const body = JSON.stringify(data)

  const { ok } = await fetch(url, { method: "POST", headers, body })

  if (!ok) throw new Error("Failed to send message to Discord\n")
}

const main = async () => {
  const collaborators = await getCollaborators()

  const insights = await getInsights(collaborators)

  const report = createReport(insights)

  await sendDiscordChannel(report)
}

main()
