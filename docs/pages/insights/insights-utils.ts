import { CONSTANT } from "constant"
import type { ManipulateType } from "dayjs"
import dayjs from "dayjs"
import data from "./data.json"
import { isInRange } from "@yamada-ui/calendar"
import type { UIProps } from "@yamada-ui/react"

type InsightComment = {
  html_url: string
  issue_url: string
  created_at: string
}

type InsightReview = {
  html_url: string
  pull_request_url: string
  submitted_at: string | undefined
}

type InsightIssue = {
  number: number
  title: string
  html_url: string
  created_at: string
  closed_at: string | null
}

type InsightPullRequest = {
  number: number
  title: string
  html_url: string
  created_at: string
  closed_at: string | null
}

export type UserInsight = {
  comments?: InsightComment[]
  reviews?: InsightReview[]
  issues?: InsightIssue[]
  pullRequests?: InsightPullRequest[]
  approved?: InsightReview[]
}

export type UserInsightScore = {
  comments: number
  issues: number
  pullRequests: number
  approved: number
  total: number
}

export type UserInsights = Record<string, UserInsight | null>

export type Insights = Record<string, UserInsights>

export const INSIGHT_USERS = Object.fromEntries(
  [...CONSTANT.MAINTAINERS, ...CONSTANT.MEMBERS].map((data) => [
    data.github.id,
    data,
  ]),
)

export const INSIGHT_USER_IDS = Object.keys(INSIGHT_USERS)

export const INSIGHT_PERIOD_SUGGEST = [
  "7d",
  "14d",
  "1M",
  "2M",
  "3M",
  "6M",
  "1y",
] as const

export const INSIGHT_SCORE_COLORS: Record<string, UIProps["color"]> = {
  pullRequests: [`blue.500`, `blue.400`],
  issues: [`red.500`, `red.400`],
  approved: [`green.500`, `green.400`],
  comments: [`orange.500`, `orange.400`],
}

export type InsightPeriodSuggest = (typeof INSIGHT_PERIOD_SUGGEST)[number]

export type InsightUser = (typeof INSIGHT_USERS)[number]

export type InsightPeriod = {
  start: string | undefined
  end: string | undefined
}

export const getMinMaxDate = (value: string, unit: string) => {
  const maxDate = new Date(dayjs().tz().format("YYYY-MM-DD"))
  const minDate = new Date(
    dayjs(maxDate)
      .subtract(parseInt(value), unit as ManipulateType)
      .format("YYYY-MM-DD"),
  )

  return [minDate, maxDate]
}

export const getSummarize = (minDate: Date, maxDate: Date) => {
  const diff = dayjs(maxDate).diff(minDate, "d")

  if (diff < 30) {
    return "day"
  } else if (diff < 62) {
    return "week"
  } else {
    return "month"
  }
}

export type InsightSummarize = ReturnType<typeof getSummarize>

const getSummarizeRangeDates = (
  minDate: Date,
  maxDate: Date,
  summarize: InsightSummarize,
) => {
  const rangeDates: [Date, Date][] = []

  let currentDate = dayjs(minDate)
  const endDate = dayjs(maxDate)

  while (
    currentDate.isBefore(endDate) ||
    currentDate.isSame(endDate, summarize)
  ) {
    switch (summarize) {
      case "week": {
        const start = currentDate.startOf("week").add(1, "d").toDate()
        const end = currentDate.endOf("week").add(1, "d").toDate()

        currentDate = currentDate.add(1, "week")
        rangeDates.push([start, end])

        break
      }

      case "month": {
        const start = currentDate.startOf("month").toDate()
        const end = currentDate.endOf("month").toDate()

        currentDate = currentDate.add(1, "month")
        rangeDates.push([start, end])

        break
      }
    }
  }

  rangeDates[0][0] = minDate
  rangeDates[rangeDates.length - 1][1] = maxDate

  return rangeDates
}

export const labelFormatter = (
  value: string,
  summarize: InsightSummarize,
  { end }: InsightPeriod,
) => {
  switch (summarize) {
    case "day":
      return dayjs(value).format("DD")

    case "week":
      const weekEnd = dayjs(value).endOf("week").add(1, "d")
      const isAfter = dayjs(weekEnd).isAfter(end)

      return `${dayjs(value).format("MM/DD")} - ${isAfter ? dayjs(end).format("MM/DD") : weekEnd.format("MM/DD")}`

    case "month":
      return dayjs(value).format("MM")
  }
}

export const xAxisTickFormatter = (
  period: string,
  summarize: InsightSummarize = "day",
) => {
  let template: string

  switch (summarize) {
    case "day":
      template = "DD"
      break

    case "week":
      template = "MM/DD"
      break

    case "month":
      template = "MM"
      break
  }

  return dayjs(period).format(template)
}

export const getInsights = (
  minDate: Date,
  maxDate: Date,
  summarize: InsightSummarize = "day",
) => {
  let insights: Insights = Object.fromEntries(
    Object.entries(data as unknown as Insights).filter(([date]) =>
      isInRange(new Date(date), minDate, maxDate),
    ),
  )

  if (summarize === "day") return insights

  const rangeDates = getSummarizeRangeDates(minDate, maxDate, summarize)

  const summarizedInsights: Insights = Object.fromEntries(
    rangeDates.map(([startDate, endDate]) => {
      const summarizedInsights: UserInsights = {}

      Object.entries(insights).forEach(([date, users]) => {
        if (!isInRange(new Date(date), startDate, endDate)) return

        Object.entries(users).forEach(([user, data]) => {
          if (!data) {
            if (!summarizedInsights[user]) summarizedInsights[user] = null
          } else {
            if (!summarizedInsights[user]) summarizedInsights[user] = {}

            const { comments, reviews, issues, pullRequests, approved } = data

            if (comments) {
              summarizedInsights[user].comments = [
                ...(summarizedInsights[user].comments ?? []),
                ...comments,
              ]
            }

            if (reviews) {
              summarizedInsights[user].reviews = [
                ...(summarizedInsights[user].reviews ?? []),
                ...reviews,
              ]
            }

            if (issues) {
              summarizedInsights[user].issues = [
                ...(summarizedInsights[user].issues ?? []),
                ...issues,
              ]
            }

            if (pullRequests) {
              summarizedInsights[user].pullRequests = [
                ...(summarizedInsights[user].pullRequests ?? []),
                ...pullRequests,
              ]
            }

            if (approved) {
              summarizedInsights[user].approved = [
                ...(summarizedInsights[user].approved ?? []),
                ...approved,
              ]
            }
          }
        })
      })

      return [dayjs(startDate).format("YYYY-MM-DD"), summarizedInsights]
    }),
  )

  return summarizedInsights
}

export const DEFAULT_SCORE: UserInsightScore = {
  comments: 0,
  issues: 0,
  pullRequests: 0,
  approved: 0,
  total: 0,
}

export const getInsightTotalScore = (
  insights: Insights | undefined,
  pickUsers: string[] = INSIGHT_USER_IDS,
) => {
  const score: UserInsightScore = JSON.parse(JSON.stringify(DEFAULT_SCORE))

  if (!insights) return score

  Object.values(insights).map((users) => {
    Object.entries(users).map(([user, data]) => {
      if (!pickUsers.includes(user)) return

      const { comments, issues, pullRequests, approved, total } =
        getInsightScore(data)

      score.total += total
      score.comments += comments
      score.issues += issues
      score.pullRequests += pullRequests
      score.approved += approved
    })
  })

  return score
}

export const getInsightScore = (data: UserInsight | null) => {
  const score: UserInsightScore = JSON.parse(JSON.stringify(DEFAULT_SCORE))

  if (!data) return score

  const { comments, reviews, issues, pullRequests, approved } = data

  score.comments = (comments?.length ?? 0) + (reviews?.length ?? 0)
  score.issues = issues?.length ?? 0
  score.pullRequests = pullRequests?.length ?? 0
  score.approved = approved?.length ?? 0

  score.total =
    score.comments + score.issues + score.pullRequests + score.approved

  return score
}

export const randomIndex = (value: string, max: number) => {
  let hash = 0

  for (let i = 0; i < value.length; i++) {
    const char = value.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash
  }

  const result = Math.abs(hash) % max

  return result
}
