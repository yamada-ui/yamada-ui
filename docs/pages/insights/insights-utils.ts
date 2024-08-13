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
import type { Locale } from "utils/i18n"

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

export const labelFormatter =
  (value: string, { summarize, end }: InsightPeriod) =>
  (locale: Locale) => {
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
