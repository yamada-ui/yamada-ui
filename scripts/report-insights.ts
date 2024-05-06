import { Octokit } from "@octokit/rest"
import { AxiosError } from "axios"
import dayjs from "dayjs"
import { config } from "dotenv"

type Issue = Awaited<
  ReturnType<typeof octokit.search.issuesAndPullRequests>
>["data"]["items"][number]
type Comment = Awaited<
  ReturnType<typeof octokit.issues.listCommentsForRepo>
>["data"][number]
type Commit = Awaited<
  ReturnType<typeof octokit.repos.listCommits>
>["data"][number]
type Collaborator = Awaited<
  ReturnType<typeof octokit.repos.listCollaborators>
>["data"][number]

type Insight = {
  login: string
  html_url: string
  commits: Commit[]
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

// const START_DATE = dayjs("2024-02-01").hour(0).minute(0).second(0)
// const END_DATE = dayjs("2024-04-31").hour(23).minute(59).second(59)

const START_DATE = dayjs().subtract(7, "days").hour(18).minute(0).second(0)
const END_DATE = dayjs().hour(18).minute(0).second(0)

const QUERY_FORMAT = "YYYY-MM-DDTHH:mm:ss"
const REPORT_FORMAT = "YYYY/MM/DD"

config()

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const recursiveFetch = async (callback: () => Promise<void>) => {
  try {
    await callback()
  } catch (e) {
    if (
      e instanceof AxiosError &&
      e.status === 403 &&
      e.response?.headers["x-ratelimit-remaining"] === "0"
    ) {
      const resetTime =
        parseInt(e.response.headers?.["x-ratelimit-reset"] ?? "0") * 1000
      const waitTime = resetTime - Date.now() + 1000

      await wait(waitTime)
      await recursiveFetch(callback)
    } else {
      throw e
    }
  }
}

const getCollaborators = async () => {
  const { data } = await octokit.repos.listCollaborators({
    ...COMMON_PARAMS,
    per_page: 100,
  })

  return data
}

const getIssuesAndPullRequests = async (username: string, filter: string) => {
  let issues: Issue[] = []

  const query = `org:${COMMON_PARAMS["owner"]} ${filter}:${username} created:>=${START_DATE.format(QUERY_FORMAT)} created:<=${END_DATE.format(QUERY_FORMAT)}`
  const perPage = 100

  const fetchIssuesAndPullRequests = async (page: number = 1) => {
    const { data } = await octokit.search.issuesAndPullRequests({
      q: query,
      per_page: perPage,
      page,
    })
    const { total_count, items } = data

    issues.push(...items)

    if (total_count === perPage) {
      await recursiveFetch(() => fetchIssuesAndPullRequests(page + 1))
    }
  }

  await recursiveFetch(() => fetchIssuesAndPullRequests())

  return issues
}

const getComments = async () => {
  const { data: repositories } = await octokit.repos.listForOrg({
    org: COMMON_PARAMS["owner"],
  })

  let comments: Comment[] = []

  const perPage = 100

  for await (const { name } of repositories) {
    let page = 1
    let count = 0

    const fetchComments = async () => {
      const { data } = await octokit.issues.listCommentsForRepo({
        ...COMMON_PARAMS,
        repo: name,
        since: START_DATE.format(QUERY_FORMAT),
        until: END_DATE.format(QUERY_FORMAT),
        per_page: perPage,
        page,
      })

      comments.push(...data)

      count = data.length

      if (count === perPage) {
        page++

        await recursiveFetch(fetchComments)
      }
    }

    await recursiveFetch(fetchComments)
  }

  return comments
}

const getCommits = async () => {
  const { data: repositories } = await octokit.repos.listForOrg({
    org: COMMON_PARAMS["owner"],
  })

  let commits: Commit[] = []

  const perPage = 100

  for await (const { name } of repositories) {
    let page = 1
    let count = 0

    const fetchCommits = async () => {
      const { data } = await octokit.repos.listCommits({
        ...COMMON_PARAMS,
        repo: name,
        since: START_DATE.format(QUERY_FORMAT),
        until: END_DATE.format(QUERY_FORMAT),
        per_page: perPage,
        page,
      })

      commits.push(...data)

      count = data.length

      if (count === perPage) {
        page++

        await recursiveFetch(fetchCommits)
      }
    }

    await recursiveFetch(fetchCommits)
  }

  return commits
}

const getInsights = async (collaborators: Collaborator[]) => {
  const allComments = await getComments()
  const allCommits = await getCommits()

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
    const comments = allComments.filter(({ user }) => user?.login === login)
    const commits = allCommits.filter(({ author }) => author?.login === login)
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
      commits: commits,
      comments: comments,
      issues: {
        created: createdIssues,
      },
      pullRequests: {
        created: createdPullRequests,
        reviewed: reviewedPullRequest,
      },
    })
  }

  return insights
}

const createReport = (insights: Insight[]) => {
  const contents = insights
    .map(({ login, html_url, comments, commits, issues, pullRequests }) => {
      const commentCount = comments.length
      const commitCount = commits.length
      const createdIssueCount = issues.created.length
      const createdPRCount = pullRequests.created.length
      const reviewedPRCount = pullRequests.reviewed.length
      const totalCount =
        createdIssueCount + createdPRCount + reviewedPRCount + commentCount

      return {
        total: totalCount,
        content: [
          `- [${login}](${html_url}): ${totalCount}`,
          `  - Issue: ${createdIssueCount}`,
          `  - PR: ${createdPRCount}`,
          `  - Review: ${reviewedPRCount}`,
          `  - Comment: ${commentCount}`,
          `  - Commit: ${commitCount}`,
        ].join("\n"),
      }
    })
    .sort((a, b) => b.total - a.total)
    .map(({ content }) => content)

  const startDate = START_DATE.format(REPORT_FORMAT)
  const endDate = END_DATE.format(REPORT_FORMAT)

  return [
    `<@&1202956318718304276>`,
    `## Insight Report`,
    `${startDate} - ${endDate}`,
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
