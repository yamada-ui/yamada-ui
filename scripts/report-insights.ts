import { Octokit } from "@octokit/rest"
import { program } from "commander"
import type { Dayjs } from "dayjs"
import dayjs from "dayjs"
import timezone from "dayjs/plugin/timezone"
import utc from "dayjs/plugin/utc"
import { config } from "dotenv"
import { getConstant, recursiveOctokit } from "./utils"
import { getRangeDates } from "@yamada-ui/calendar"
import type { Dict } from "@yamada-ui/react"
import { isArray, merge } from "@yamada-ui/react"

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
  login: string
  html_url: string
  commits: Commit[]
  comments: Comment[]
  reviews: Review[]
  issues: Issue[]
  pullRequests: Issue[]
  approved: Review[]
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

const getTimestamp = (item: Review | Issue | Comment) =>
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
  ({ startDate, endDate }: Options) =>
  async (username: string) => {
    let issuesAndPullRequests: Issue[] = []

    const start = startDate.format(QUERY_FORMAT)
    const end = endDate.format(QUERY_FORMAT)
    const query = `org:${COMMON_PARAMS["owner"]} author:${username} created:${start}..${end}`
    const perPage = 100

    let page = 1

    const getIssuesAndPullRequests = async () => {
      const { data } = await octokit.search.issuesAndPullRequests({
        q: query,
        per_page: perPage,
        page,
      })
      const { total_count, items } = data

      issuesAndPullRequests.push(...items)

      if (total_count === perPage) {
        page++

        await recursiveOctokit(getIssuesAndPullRequests)
      }
    }

    await recursiveOctokit(getIssuesAndPullRequests)

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
  ({ startDate, endDate }: Options) =>
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
          repo: name,
          since: startDate.format(QUERY_FORMAT),
          until: endDate.format(QUERY_FORMAT),
          direction: "asc",
          per_page: perPage,
          page,
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
  ({ startDate, endDate }: Options) =>
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
        q: query,
        per_page: perPage,
        page,
      })

      pullRequests.push(...items)

      if (items.length === perPage) {
        page++

        await recursiveOctokit(getIssuesAndPullRequests)
      }
    }

    await recursiveOctokit(getIssuesAndPullRequests)

    const reviewsAndApproved = (
      await Promise.all(
        pullRequests.map(({ number, repository_url }) =>
          recursiveOctokit(async () => {
            const repo = repository_url.split("/").at(-1)!

            const { data } = await octokit.pulls.listReviews({
              ...COMMON_PARAMS,
              repo,
              pull_number: number,
            })

            return data
          }),
        ),
      )
    ).flat()

    const reviews: Review[] = []
    const approved: Review[] = []

    reviewsAndApproved.forEach((item) => {
      const { user, state, submitted_at } = item

      if (user?.login !== username) return

      if (!startDate.isBefore(submitted_at) || !endDate.isAfter(submitted_at))
        return

      if (state !== "APPROVED") {
        reviews.push(item)
      } else if (state === "APPROVED") {
        approved.push(item)
      }
    })

    return { reviews, approved }
  }

const getCommits =
  ({ startDate, endDate }: Options) =>
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
          repo: name,
          since: startDate.format(QUERY_FORMAT),
          until: endDate.format(QUERY_FORMAT),
          per_page: perPage,
          page,
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

    for await (const { login, html_url } of omittedCollaborators) {
      const { issues, pullRequests } =
        await getIssuesAndPullRequests(options)(login)
      const { reviews, approved } = await getReviews(options)(login)
      const comments = allComments.filter(({ user }) => user?.login === login)
      const commits = allCommits.filter(({ author }) => author?.login === login)

      insights.push({
        login,
        html_url,
        commits,
        comments,
        reviews,
        issues,
        pullRequests,
        approved,
      })
    }

    return insights
  }

const createReports = (options: Options) => (insights: Insight[]) =>
  insights
    .map(
      ({
        login,
        html_url,
        comments,
        reviews,
        commits,
        issues,
        pullRequests,
        approved,
      }) => {
        const issueCount = issues.length
        const pullRequestCount = pullRequests.length
        const commentCount = comments.length + reviews.length
        const approvedCount = approved.length
        const commitCount = commits.length
        const totalCount =
          issueCount + pullRequestCount + approvedCount + commentCount

        return {
          total: totalCount,
          content: [
            `- [${login}](${html_url}): ${totalCount}`,
            createReport(options)("Issue", issues),
            createReport(options)("PR", pullRequests),
            createReport(options)("Review", approved),
            createReport(options)("Comment", [...comments, ...reviews]),
            `  - Commit: ${commitCount}`,
          ].join("\n"),
        }
      },
    )
    .sort((a, b) => b.total - a.total)
    .map(({ content }) => content)

const createReport =
  ({ extended }: Options) =>
  (type: string, list: Review[] | Issue[] | (Comment | Review)[]) => {
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
  ({ startDate, endDate, publish }: Options) =>
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

        const data = { username: "GitHub", content }

        const headers = { "Content-Type": "application/json" }
        const body = JSON.stringify(data)

        const { ok } = await fetch(url, { method: "POST", headers, body })

        if (!ok) throw new Error("Failed to send message to Discord\n")
      } else {
        console.log(content)
      }
    }
  }

const getSomeDates = <T extends Review | Issue | Comment | Review>(
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
  ({ startDate, endDate }: Options) =>
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
              ({ html_url, issue_url, created_at }) => ({
                html_url,
                issue_url,
                created_at,
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
              ({ html_url, title, number, created_at, closed_at }) => ({
                number,
                title,
                html_url,
                created_at,
                closed_at,
              }),
            )

            const pullRequests = getSomeDates(date, rest.pullRequests).map(
              ({ html_url, title, number, created_at, closed_at }) => ({
                number,
                title,
                html_url,
                created_at,
                closed_at,
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
        repo: "yamada-data",
        path: "activity.json",
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
        repo: "yamada-data",
        path: "activity.json",
        message: "build: updated activity",
        content,
        sha,
        branch: "main",
      })
    } catch {}
  }

type CommandOptions = {
  start: string | undefined
  end: string | undefined
  user: string[] | undefined
  extended: boolean | string[] | undefined
  publish: boolean | undefined
  upload: boolean | undefined
}
type Options = {
  startDate: Dayjs
  endDate: Dayjs
  user: string[]
  extended: boolean | string[]
  publish: boolean
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
        start,
        end,
        user = [],
        extended = false,
        publish = false,
        upload = false,
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

        const options: Options = { startDate, endDate, user, extended, publish }

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
