import type { Dict } from "@yamada-ui/react"
import type { Dayjs } from "dayjs"
import { Octokit } from "@octokit/rest"
import { getRangeDates } from "@yamada-ui/calendar"
import { isArray, merge } from "@yamada-ui/react"
import { program } from "commander"
import dayjs from "dayjs"
import timezone from "dayjs/plugin/timezone"
import utc from "dayjs/plugin/utc"
import { config } from "dotenv"
import { getConstant, recursiveOctokit } from "./utils"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault("Asia/Tokyo")

type Issue = Awaited<
  ReturnType<typeof octokit.search.issuesAndPullRequests>
>["data"]["items"][number]
type Comment = Awaited<
  ReturnType<typeof octokit.issues.listCommentsForRepo>
>["data"][number]
type Commit = Awaited<
  ReturnType<typeof octokit.repos.listCommits>
>["data"][number]
type Review = Awaited<
  ReturnType<typeof octokit.pulls.listReviews>
>["data"][number]
type Collaborator = Awaited<
  ReturnType<typeof octokit.repos.listCollaborators>
>["data"][number]

type Insight = {
  approved: Review[]
  comments: Comment[]
  commits: Commit[]
  html_url: string
  issues: Issue[]
  login: string
  pullRequests: Issue[]
  reviews: Review[]
}

const COMMON_PARAMS = {
  owner: "yamada-ui",
  repo: "yamada-ui",
}

const QUERY_FORMAT = "YYYY-MM-DDTHH:mm:ss"
const REPORT_TITLE_FORMAT = "YYYY/MM/DD"
const REPORT_FORMAT = "YYYY/MM/DD HH:mm:ss"
const DATA_FORMAT = "YYYY-MM-DD"

config()

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

const chunkArray = <T extends any>(array: T[], n: number) =>
  new Array(Math.ceil(array.length / n))
    .fill(0)
    .map((_, i) => array.slice(i * n, (i + 1) * n))

const getTimestamp = (item: Comment | Issue | Review) =>
  dayjs("created_at" in item ? item.created_at : item.submitted_at)

const getCollaborators =
  ({ user }: Options) =>
  async () => {
    const { data } = await recursiveOctokit(() =>
      octokit.repos.listCollaborators({
        ...COMMON_PARAMS,
        per_page: 100,
      }),
    )

    return user.length ? data.filter(({ login }) => user.includes(login)) : data
  }

const getIssuesAndPullRequests =
  ({ endDate, startDate }: Options) =>
  async (username: string) => {
    let issuesAndPullRequests: Issue[] = []

    const start = startDate.format(QUERY_FORMAT)
    const end = endDate.format(QUERY_FORMAT)
    const query = `org:${COMMON_PARAMS["owner"]} author:${username} created:${start}..${end}`
    const perPage = 100

    let page = 1

    const getIssuesAndPullRequests = async () => {
      const { data } = await octokit.search.issuesAndPullRequests({
        page,
        per_page: perPage,
        q: query,
      })
      const { items, total_count } = data

      issuesAndPullRequests.push(...items)

      if (total_count === perPage) {
        page++

        await recursiveOctokit(getIssuesAndPullRequests)
      }
    }

    try {
      await recursiveOctokit(getIssuesAndPullRequests)
    } catch {}

    const issues: Issue[] = []
    const pullRequests: Issue[] = []

    issuesAndPullRequests.forEach((item) => {
      if (item.pull_request) {
        pullRequests.push(item)
      } else {
        issues.push(item)
      }
    })

    return { issues, pullRequests }
  }

const getComments =
  ({ endDate, startDate }: Options) =>
  async () => {
    const { data: repositories } = await recursiveOctokit(() =>
      octokit.repos.listForOrg({
        org: COMMON_PARAMS["owner"],
      }),
    )

    let comments: Comment[] = []

    const perPage = 100

    for await (const { name } of repositories) {
      let page = 1

      const listCommentsForRepo = async () => {
        const { data } = await octokit.issues.listCommentsForRepo({
          ...COMMON_PARAMS,
          direction: "asc",
          page,
          per_page: perPage,
          repo: name,
          since: startDate.format(QUERY_FORMAT),
          until: endDate.format(QUERY_FORMAT),
        })

        comments.push(...data)

        if (data.length === perPage) {
          page++

          await recursiveOctokit(listCommentsForRepo)
        }
      }

      await recursiveOctokit(listCommentsForRepo)
    }

    comments = comments.filter(
      ({ created_at }) =>
        startDate.isBefore(created_at) && endDate.isAfter(created_at),
    )

    return comments
  }

const getReviews =
  ({ endDate, startDate }: Options) =>
  async (username: string) => {
    let pullRequests: Issue[] = []

    const start = startDate.subtract(1, "month").format(QUERY_FORMAT)
    const end = endDate.format(QUERY_FORMAT)
    const query = `org:${COMMON_PARAMS["owner"]} type:pr reviewed-by:${username} -author:${username} created:${start}..${end}`
    const perPage = 100

    let page = 1

    const getIssuesAndPullRequests = async () => {
      const {
        data: { items },
      } = await octokit.search.issuesAndPullRequests({
        page,
        per_page: perPage,
        q: query,
      })

      pullRequests.push(...items)

      if (items.length === perPage) {
        page++

        await recursiveOctokit(getIssuesAndPullRequests)
      }
    }

    try {
      await recursiveOctokit(getIssuesAndPullRequests)
    } catch {}

    const reviewsAndApproved = (
      await Promise.all(
        pullRequests.map(({ number, repository_url }) =>
          recursiveOctokit(async () => {
            const repo = repository_url.split("/").at(-1)!

            const { data } = await octokit.pulls.listReviews({
              ...COMMON_PARAMS,
              pull_number: number,
              repo,
            })

            return data
          }),
        ),
      )
    ).flat()

    const reviews: Review[] = []
    const approved: Review[] = []

    reviewsAndApproved.forEach((item) => {
      const { state, submitted_at, user } = item

      if (user?.login !== username) return

      if (!startDate.isBefore(submitted_at) || !endDate.isAfter(submitted_at))
        return

      if (state !== "APPROVED") {
        reviews.push(item)
      } else if (state === "APPROVED") {
        approved.push(item)
      }
    })

    return { approved, reviews }
  }

const getCommits =
  ({ endDate, startDate }: Options) =>
  async () => {
    const { data: repositories } = await octokit.repos.listForOrg({
      org: COMMON_PARAMS["owner"],
    })

    let commits: Commit[] = []

    const perPage = 100

    for await (const { name } of repositories) {
      let page = 1

      const listCommits = async () => {
        const { data } = await octokit.repos.listCommits({
          ...COMMON_PARAMS,
          page,
          per_page: perPage,
          repo: name,
          since: startDate.format(QUERY_FORMAT),
          until: endDate.format(QUERY_FORMAT),
        })

        commits.push(...data)

        if (data.length === perPage) {
          page++

          await recursiveOctokit(listCommits)
        }
      }

      await recursiveOctokit(listCommits)
    }

    return commits
  }

const getInsights =
  (options: Options) => async (collaborators: Collaborator[]) => {
    const constant = await getConstant()
    const allComments = await getComments(options)()
    const allCommits = await getCommits(options)()

    const insights: Insight[] = []

    const omittedCollaborators = collaborators.filter(
      ({ login }) => !constant.insights.excludeUsers.includes(login),
    )

    for await (const { html_url, login } of omittedCollaborators) {
      const { issues, pullRequests } =
        await getIssuesAndPullRequests(options)(login)
      const { approved, reviews } = await getReviews(options)(login)
      const comments = allComments.filter(({ user }) => user?.login === login)
      const commits = allCommits.filter(({ author }) => author?.login === login)

      insights.push({
        approved,
        comments,
        commits,
        html_url,
        issues,
        login,
        pullRequests,
        reviews,
      })
    }

    return insights
  }

const createReports = (options: Options) => (insights: Insight[]) =>
  insights
    .map(
      ({
        approved,
        comments,
        commits,
        html_url,
        issues,
        login,
        pullRequests,
        reviews,
      }) => {
        const issueCount = issues.length
        const pullRequestCount = pullRequests.length
        const commentCount = comments.length + reviews.length
        const approvedCount = approved.length
        const commitCount = commits.length
        const totalCount =
          issueCount + pullRequestCount + approvedCount + commentCount

        return {
          content: [
            `- [${login}](${html_url}): ${totalCount}`,
            createReport(options)("Issue", issues),
            createReport(options)("PR", pullRequests),
            createReport(options)("Review", approved),
            createReport(options)("Comment", [...comments, ...reviews]),
            `  - Commit: ${commitCount}`,
          ].join("\n"),
          total: totalCount,
        }
      },
    )
    .sort((a, b) => b.total - a.total)
    .map(({ content }) => content)

const createReport =
  ({ extended }: Options) =>
  (type: string, list: (Comment | Review)[] | Issue[] | Review[]) => {
    const count = list.length
    const isExtended =
      extended === true ||
      (isArray(extended) &&
        extended.some((v) => v.toUpperCase() === type.toUpperCase()))

    const rows = [`  - ${type}: ${count}`]

    const sortedList = list.sort((a, b) =>
      getTimestamp(a).toDate() > getTimestamp(b).toDate() ? 1 : -1,
    )

    if (isExtended) {
      rows.push(
        ...sortedList.map((item) => {
          const createdAt = getTimestamp(item).format(REPORT_FORMAT)

          return `    - [${createdAt}] ${item.html_url}`
        }),
      )
    }

    return rows.join("\n")
  }

const sendDiscordChannel =
  ({ endDate, publish, startDate }: Options) =>
  async (reports: string[]) => {
    const url = process.env.DISCORD_INSIGHTS_WEBHOOK_URL

    for await (const [index, contents] of Object.entries(
      chunkArray(reports, 10),
    )) {
      const isFirst = index === "0"
      const chunks: string[] = []

      if (isFirst) {
        if (publish) {
          chunks.push(
            `<@&1202956318718304276> <@&1246174065216192662>`,
            `## Insight Report`,
          )
        }

        const start = startDate.add(9, "hour").format(REPORT_TITLE_FORMAT)
        const end = endDate.add(9, "hour").format(REPORT_TITLE_FORMAT)

        chunks.push(`${start} - ${end}`)
      }

      chunks.push(...contents)

      const content = chunks.join("\n")

      if (publish) {
        if (!url) throw new Error("Missing Discord Webhook URL\n")

        const data = { content, username: "GitHub" }

        const headers = { "Content-Type": "application/json" }
        const body = JSON.stringify(data)

        const { ok } = await fetch(url, { body, headers, method: "POST" })

        if (!ok) throw new Error("Failed to send message to Discord\n")
      } else {
        console.log(content)
      }
    }
  }

const getSomeDates = <T extends Comment | Issue | Review | Review>(
  date: string,
  list: T[],
) =>
  list.filter(
    (item) =>
      dayjs("created_at" in item ? item.created_at : item.submitted_at).format(
        DATA_FORMAT,
      ) === date,
  )

const uploadData =
  ({ endDate, startDate }: Options) =>
  async (insights: Insight[]) => {
    const rangeDates = getRangeDates(
      startDate.add(9, "hour").toDate(),
      endDate.add(9, "hour").toDate(),
    )
    const rangeDatesFormatted = rangeDates.map((date) =>
      dayjs(date).format(DATA_FORMAT),
    )

    const nextActivity = Object.fromEntries(
      rangeDatesFormatted.map((date) => [
        date,
        Object.fromEntries(
          insights.map(({ login, ...rest }) => {
            const comments = getSomeDates(date, rest.comments).map(
              ({ created_at, html_url, issue_url }) => ({
                created_at,
                html_url,
                issue_url,
              }),
            )

            const reviews = getSomeDates(date, rest.reviews).map(
              ({ html_url, pull_request_url, submitted_at }) => ({
                html_url,
                pull_request_url,
                submitted_at,
              }),
            )

            const issues = getSomeDates(date, rest.issues).map(
              ({ closed_at, created_at, html_url, number, title }) => ({
                closed_at,
                created_at,
                html_url,
                number,
                title,
              }),
            )

            const pullRequests = getSomeDates(date, rest.pullRequests).map(
              ({ closed_at, created_at, html_url, number, title }) => ({
                closed_at,
                created_at,
                html_url,
                number,
                title,
              }),
            )

            const approved = getSomeDates(date, rest.approved).map(
              ({ html_url, pull_request_url, submitted_at }) => ({
                html_url,
                pull_request_url,
                submitted_at,
              }),
            )

            if (
              !comments.length &&
              !reviews.length &&
              !issues.length &&
              !pullRequests.length &&
              !approved.length
            ) {
              return [login, null]
            }

            const data: Dict = {}

            if (comments.length) data.comments = comments
            if (reviews.length) data.reviews = reviews
            if (issues.length) data.issues = issues
            if (pullRequests.length) data.pullRequests = pullRequests
            if (approved.length) data.approved = approved

            return [login, data]
          }),
        ),
      ]),
    )

    try {
      const { data } = await octokit.repos.getContent({
        ...COMMON_PARAMS,
        path: "activity.json",
        repo: "yamada-data",
      })

      const sha = isArray(data) ? data[0].sha : data.sha
      const downloadUrl = isArray(data)
        ? data[0].download_url
        : data.download_url

      const res = await fetch(downloadUrl!)

      if (!res.ok) throw new Error("Failed to fetch activity data")

      const prevActivity = await res.json()

      let activity = merge(prevActivity, nextActivity)

      activity = Object.fromEntries(
        Object.entries(activity).sort(
          (a, b) => new Date(a[0]).getTime() - new Date(b[0]).getTime(),
        ),
      )

      const content = Buffer.from(JSON.stringify(activity, null, 2)).toString(
        "base64",
      )

      await octokit.repos.createOrUpdateFileContents({
        ...COMMON_PARAMS,
        branch: "main",
        content,
        message: "build: updated activity",
        path: "activity.json",
        repo: "yamada-data",
        sha,
      })
    } catch {}
  }

type CommandOptions = {
  end: string | undefined
  extended: boolean | string[] | undefined
  publish: boolean | undefined
  start: string | undefined
  upload: boolean | undefined
  user: string[] | undefined
}
type Options = {
  endDate: Dayjs
  extended: boolean | string[]
  publish: boolean
  startDate: Dayjs
  user: string[]
}

const main = async () => {
  program
    .option("-s, --start <date>")
    .option("-e, --end <date>")
    .option("-u, --user <user...>")
    .option("-x, --extended [content...]")
    .option("-p, --publish")
    .option("--upload")
    .action(
      async ({
        end,
        extended = false,
        publish = false,
        start,
        upload = false,
        user = [],
      }: CommandOptions) => {
        let startDate: Dayjs
        let endDate: Dayjs

        if (start) {
          startDate = dayjs(start)
            .hour(0)
            .minute(0)
            .second(0)
            .subtract(9, "hour")
        } else {
          startDate = dayjs().hour(0).minute(0).second(0).subtract(9, "hour")
        }

        if (end) {
          endDate = dayjs(end)
            .hour(23)
            .minute(59)
            .second(59)
            .subtract(9, "hour")
        } else {
          endDate = dayjs().hour(23).minute(59).second(59).subtract(9, "hour")
        }

        const options: Options = { endDate, extended, publish, startDate, user }

        const collaborators = await getCollaborators(options)()
        const insights = await getInsights(options)(collaborators)

        if (upload) await uploadData(options)(insights)

        const reports = createReports(options)(insights)

        await sendDiscordChannel(options)(reports)
      },
    )

  program.parse()
}

main()
