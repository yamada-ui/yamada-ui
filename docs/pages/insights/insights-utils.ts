import type { UIProps } from "@yamada-ui/react"
import type { ManipulateType } from "dayjs"
import type {
  InsightPeriod,
  Insights,
  UserInsight,
  UserInsightScore,
} from "insights"
import type { Locale } from "utils/i18n"
import { CONSTANT } from "constant"
import dayjs from "dayjs"

export const INSIGHT_MIN_DATE = new Date("2024-01-01")
export const INSIGHT_MAX_DATE = dayjs().tz().subtract(1, "d").toDate()

export const INSIGHT_USERS = Object.fromEntries(
  [...CONSTANT.MAINTAINERS, ...CONSTANT.MEMBERS].map((data) => [
    data.github.id,
    data,
  ]),
)

export const INSIGHT_USER_IDS = Object.keys(INSIGHT_USERS)
export const INSIGHT_MAINTAINERS_IDS = CONSTANT.MAINTAINERS.map(
  ({ github }) => github.id,
)
export const INSIGHT_MEMBERS_IDS = CONSTANT.MEMBERS.map(
  ({ github }) => github.id,
)

export const INSIGHT_PERIOD_SUGGEST = [
  "7d",
  "14d",
  "1M",
  "2M",
  "3M",
  "6M",
  "1y",
] as const
export const INSIGHT_USER_SUGGEST = ["all", "maintainers", "members"] as const

export const INSIGHT_SCORE_COLORS: { [key: string]: UIProps["color"] } = {
  approved: [`green.500`, `green.400`],
  comments: [`orange.500`, `orange.400`],
  issues: [`red.500`, `red.400`],
  pullRequests: [`blue.500`, `blue.400`],
}

export type InsightPeriodSuggest = (typeof INSIGHT_PERIOD_SUGGEST)[number]
export type InsightUserSuggest = (typeof INSIGHT_USER_SUGGEST)[number]

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

export const labelFormatter =
  (value: string, { end, summarize }: InsightPeriod) =>
  (locale: Locale) => {
    if (!dayjs(value).isValid()) return value
    if (INSIGHT_USER_IDS.includes(value)) return value

    const date = dayjs(value)

    switch (summarize) {
      case "day":
        return date.format(locale === "ja" ? "M月D日" : "MMMM D")

      case "week":
        const weekEnd = date.endOf("week").add(1, "d")
        const isAfter = dayjs(weekEnd).isAfter(end)
        const template = locale === "ja" ? "M月D日" : "MMM D"

        return `${date.format(template)} - ${isAfter ? dayjs(end).format(template) : weekEnd.format(template)}`

      case "month":
        return date.format(locale === "ja" ? "M月" : "MMMM")
    }
  }

export const xAxisTickFormatter =
  (period: string, { summarize }: InsightPeriod) =>
  (locale: Locale) => {
    let template: string

    switch (summarize) {
      case "day":
        template = "D"
        break

      case "week":
        template = locale == "ja" ? "M月D日" : "MMM D"
        break

      case "month":
        template = locale == "ja" ? "M" : "MMM"
        break
    }

    return dayjs(period).format(template)
  }

export const DEFAULT_SCORE: UserInsightScore = {
  approved: 0,
  comments: 0,
  issues: 0,
  pullRequests: 0,
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

      const { approved, comments, issues, pullRequests, total } =
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

export const getInsightScore = (data: null | UserInsight) => {
  const score: UserInsightScore = JSON.parse(JSON.stringify(DEFAULT_SCORE))

  if (!data) return score

  const { approved, comments, issues, pullRequests, reviews } = data

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
  if (currentTotal === prevTotal) return { colorScheme: "neutral", value: "0" }

  if (prevTotal === 0) return undefined

  let trend = Math.round(((currentTotal - prevTotal) / prevTotal) * 100)

  if (trend >= 1000) {
    trend /= 1000

    if (trend >= 0) {
      return { colorScheme: "success", value: `+${trend}K` }
    } else {
      return { colorScheme: "danger", value: `${trend}K` }
    }
  } else {
    if (trend >= 0) {
      return { colorScheme: "success", value: `+${trend}` }
    } else {
      return { colorScheme: "danger", value: `${trend}` }
    }
  }
}
