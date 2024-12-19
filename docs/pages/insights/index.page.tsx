import type { InsightPeriod, Insights } from "insights"
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next"
import type { InsightsContext } from "./insights-provider"
import { useQuery } from "@tanstack/react-query"
import { isString, useLoading, VStack } from "@yamada-ui/react"
import { Seo } from "components/media-and-icons"
import { PageProvider, useI18n } from "contexts"
import dayjs from "dayjs"
import { TopLayout } from "layouts"
import { useRouter } from "next/router"
import { useCallback, useMemo, useState } from "react"
import { getStaticCommonProps } from "utils/next"
import { InsightsHeader } from "./insights-header"
import { InsightsProvider } from "./insights-provider"
import { getSummarize, INSIGHT_USER_IDS } from "./insights-utils"
import { TotalChart } from "./total-chart"
import { UserCharts } from "./user-charts"

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { props } = await getStaticCommonProps(context)
  const { query } = context
  const start =
    isString(query.start) && dayjs(query.start).isValid()
      ? query.start
      : dayjs().tz().subtract(1, "d").startOf("M").format("YYYY-MM-DD")
  const end =
    isString(query.end) && dayjs(query.end).isValid()
      ? query.end
      : dayjs().tz().subtract(1, "d").format("YYYY-MM-DD")

  return { props: { ...props, end, start } }
}

type PageProps = InferGetServerSidePropsType<typeof getServerSideProps>

const Page: NextPage<PageProps> = ({
  currentVersion,
  documentTree,
  end: endProp,
  start: startProp,
}) => {
  const { background } = useLoading()
  const router = useRouter()
  const { query } = router
  const { t } = useI18n()
  const [users, setUsers] = useState<string[]>(() => {
    if (isString(query.users)) {
      return query.users.split(",")
    } else {
      return INSIGHT_USER_IDS
    }
  })
  const [period, setPeriod] = useState<InsightPeriod>(() => {
    const startDate = new Date(startProp)
    const endDate = new Date(endProp)

    const summarize = getSummarize(startDate, endDate)

    return { end: endProp, start: startProp, summarize }
  })
  const { end, start, summarize } = period
  const { data, isLoading } = useQuery({
    queryFn: async () => {
      try {
        background.start()

        if (!start) return

        const resolveEnd = end ?? dayjs().tz().format("YYYY-MM-DD")

        const params = new URLSearchParams({
          end: resolveEnd,
          start,
          summarize,
        })
        const res = await fetch(`/api/insights?${params}`)
        const { data } = (await res.json()) as {
          data?: { currentInsights: Insights; prevInsights: Insights }
        }
        const { currentInsights, prevInsights } = data ?? {}

        return { currentInsights, prevInsights }
      } catch {
      } finally {
        background.finish()
      }
    },
    queryKey: ["get-insights", start, end],
  })

  const onChangePeriod = useCallback(
    (start: string | undefined, end: string | undefined) => {
      if (!start) {
        return setPeriod({ end: undefined, start: undefined, summarize: "day" })
      } else {
        const startDate = new Date(start)
        const endDate = end ? new Date(end) : dayjs().tz().toDate()

        const summarize = getSummarize(startDate, endDate)

        setPeriod({ end, start, summarize })
      }
    },
    [],
  )

  const value: InsightsContext = useMemo(
    () => ({
      ...data,
      period,
      setUsers,
      users,
      onChangePeriod,
    }),
    [data, period, users, onChangePeriod],
  )

  return (
    <PageProvider {...{ currentVersion, documentTree }}>
      <InsightsProvider value={value}>
        <TopLayout>
          <Seo
            description={t("insights.description")}
            disableTitleTemplate
            title={t("insights.title")}
          />

          <VStack>
            <InsightsHeader />

            <VStack gap={{ base: "xl", md: "md" }}>
              <TotalChart loading={isLoading} />
              <UserCharts loading={isLoading} />
            </VStack>
          </VStack>
        </TopLayout>
      </InsightsProvider>
    </PageProvider>
  )
}

export default Page
