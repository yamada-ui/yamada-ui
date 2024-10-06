import type { Insights, InsightSummarize, UserInsights } from "insights"
import type { NextApiRequest, NextApiResponse } from "next"
import { isInRange } from "@yamada-ui/calendar"
import { CONSTANT } from "constant"
import dayjs from "dayjs"

const getData = async (): Promise<Insights> => {
  const res = await fetch(
    "https://raw.githubusercontent.com/yamada-ui/yamada-data/main/activity.json",
  )

  if (!res.ok) throw new Error("Failed to fetch data")

  return res.json()
}

const collaboratorIds = [...CONSTANT.MAINTAINERS, ...CONSTANT.MEMBERS].map(
  ({ github }) => github.id,
)

const getSummarizeRangeDates = (
  minDate: Date,
  maxDate: Date,
  summarize: InsightSummarize,
) => {
  const rangeDates: [string, string][] = []

  let currentDate = dayjs(minDate)
  const endDate = dayjs(maxDate)

  while (
    currentDate.isBefore(endDate) ||
    currentDate.isSame(endDate, summarize)
  ) {
    switch (summarize) {
      case "week": {
        const start = currentDate
          .startOf("week")
          .add(1, "d")
          .format("YYYY-MM-DD")
        const end = currentDate.endOf("week").add(1, "d").format("YYYY-MM-DD")

        currentDate = currentDate.add(1, "week")
        rangeDates.push([start, end])

        break
      }

      case "month": {
        const start = currentDate.startOf("month").format("YYYY-MM-DD")
        const end = currentDate.endOf("month").format("YYYY-MM-DD")

        currentDate = currentDate.add(1, "month")
        rangeDates.push([start, end])

        break
      }
    }
  }

  if (rangeDates[0]) rangeDates[0][0] = dayjs(minDate).format("YYYY-MM-DD")
  if (rangeDates[rangeDates.length - 1])
    // @ts-expect-error
    rangeDates[rangeDates.length - 1][1] = dayjs(maxDate).format("YYYY-MM-DD")

  return rangeDates
}

const getSummarizeInsights = (
  data: Insights,
  minDate: Date,
  maxDate: Date,
  summarize: InsightSummarize = "day",
) => {
  const rangeDates = getSummarizeRangeDates(minDate, maxDate, summarize)

  return Object.fromEntries(
    rangeDates.map(([start, end]) => {
      const startDate = new Date(start)
      const endDate = new Date(end)
      const summarizedInsights: UserInsights = {}

      Object.entries(data).forEach(([date, users]) => {
        if (!isInRange(new Date(date), startDate, endDate)) return

        collaboratorIds.forEach((id) => {
          const data = users[id]

          if (!data) {
            if (!summarizedInsights[id]) summarizedInsights[id] = null
          } else {
            if (!summarizedInsights[id]) summarizedInsights[id] = {}

            const { approved, comments, issues, pullRequests, reviews } = data

            if (comments) {
              summarizedInsights[id].comments = [
                ...(summarizedInsights[id].comments ?? []),
                ...comments,
              ]
            }

            if (reviews) {
              summarizedInsights[id].reviews = [
                ...(summarizedInsights[id].reviews ?? []),
                ...reviews,
              ]
            }

            if (issues) {
              summarizedInsights[id].issues = [
                ...(summarizedInsights[id].issues ?? []),
                ...issues,
              ]
            }

            if (pullRequests) {
              summarizedInsights[id].pullRequests = [
                ...(summarizedInsights[id].pullRequests ?? []),
                ...pullRequests,
              ]
            }

            if (approved) {
              summarizedInsights[id].approved = [
                ...(summarizedInsights[id].approved ?? []),
                ...approved,
              ]
            }
          }
        })
      })

      return [dayjs(startDate).format("YYYY-MM-DD"), summarizedInsights]
    }),
  )
}

const getInsights = (
  data: Insights,
  minDate: Date,
  maxDate: Date,
  summarize: InsightSummarize = "day",
) => {
  const insights: Insights = Object.fromEntries(
    Object.entries(data).filter(([date]) =>
      isInRange(new Date(date), minDate, maxDate),
    ),
  )

  if (summarize === "day") return insights

  const summarizedInsights = getSummarizeInsights(
    data,
    minDate,
    maxDate,
    summarize,
  )

  return summarizedInsights
}

interface RequestQuery {
  end?: string
  start?: string
  summarize?: InsightSummarize
}

interface ResponseData {
  status: number
  data?: { currentInsights: Insights; prevInsights: Insights }
  message?: string
}

const handler = async (
  { query }: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) => {
  try {
    const { end, start, summarize } = query as RequestQuery

    if (!start || !end) throw new Error("Invalid parameters")

    if (!dayjs(start).isValid() || !dayjs(end).isValid())
      throw new Error("Invalid parameters")

    const data = await getData()

    const minDate = new Date(start)
    const maxDate = new Date(end)
    const diff = dayjs(maxDate).diff(minDate, "day") + 1

    const prevMinDate = dayjs(minDate).subtract(diff, "day").toDate()
    const prevMaxDate = dayjs(maxDate).subtract(diff, "day").toDate()

    const currentInsights = getInsights(data, minDate, maxDate, summarize)
    const prevInsights = getInsights(data, prevMinDate, prevMaxDate, summarize)

    res
      .status(200)
      .json({ data: { currentInsights, prevInsights }, status: 200 })
  } catch (e) {
    if (e instanceof Error) {
      return res.status(400).send({ message: e.message, status: 400 })
    }
  }
}

export default handler
