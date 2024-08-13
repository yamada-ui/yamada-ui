import { CONSTANT } from "constant"
import type { ManipulateType } from "dayjs"
import dayjs from "dayjs"
import type { UIProps } from "@yamada-ui/react"
import type {
  InsightPeriod,
  Insights,
  UserInsight,
  UserInsightScore,
} from "insights"

export const INSIGHT_MIN_DATE = new Date("2024-01-01")

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

export const labelFormatter = (
  value: string,
  { summarize, end }: InsightPeriod,
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
  { summarize }: InsightPeriod,
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

export const getTrend = (currentTotal: number, prevTotal: number) => {
  if (currentTotal === prevTotal) return { value: "0", colorScheme: "neutral" }

  if (prevTotal === 0) return undefined

  let trend = Math.round((currentTotal / prevTotal) * 100 - 100)

  if (trend >= 1000) {
    trend /= 1000

    if (trend >= 0) {
      return { value: `+${trend}K`, colorScheme: "success" }
    } else {
      return { value: `${trend}K`, colorScheme: "danger" }
    }
  } else {
    if (trend >= 0) {
      return { value: `+${trend}`, colorScheme: "success" }
    } else {
      return { value: `${trend}`, colorScheme: "danger" }
    }
  }
}
