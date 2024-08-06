import { SEO } from "components/media-and-icons"
import { useI18n, PageProvider } from "contexts"
import { TopLayout } from "layouts"
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next"
import { getStaticCommonProps } from "utils/next"
import { TotalChart } from "./total-chart"
import { UserCharts } from "./user-charts"
import type { InsightsContext } from "./insights-provider"
import { InsightsProvider } from "./insights-provider"
import { useCallback, useMemo, useState } from "react"
import { InsightsHeader } from "./insights-header"
import { isString, useLoading, VStack } from "@yamada-ui/react"
import type { InsightPeriod } from "insights"
import { getSummarize, INSIGHT_USER_IDS } from "./insights-utils"
import dayjs from "dayjs"
import { useRouter } from "next/router"
import { useQuery } from "@tanstack/react-query"

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { props } = await getStaticCommonProps(context)
  const { query } = context
  const start =
    isString(query.start) && dayjs(query.start).isValid()
      ? query.start
      : dayjs().tz().subtract(6, "d").format("YYYY-MM-DD")
  const end =
    isString(query.end) && dayjs(query.end).isValid()
      ? query.end
      : dayjs().tz().format("YYYY-MM-DD")

  return { props: { ...props, start, end } }
}

type PageProps = InferGetServerSidePropsType<typeof getServerSideProps>

const Page: NextPage<PageProps> = ({
  currentVersion,
  documentTree,
  start: startProp,
  end: endProp,
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

    return { start: startProp, end: endProp, summarize }
  })
  const { start, end, summarize } = period
  const { data, isLoading } = useQuery({
    queryKey: ["get-insights", start, end],
    queryFn: async () => {
      try {
        background.start()

        if (!start) return undefined

        const resolveEnd = end ?? dayjs().tz().format("YYYY-MM-DD")

        const params = new URLSearchParams({
          start,
          end: resolveEnd,
          summarize,
        })
        const res = await fetch(`/api/insights?${params}`)
        const { data } = await res.json()

        return data
      } catch {
      } finally {
        background.finish()
      }
    },
  })

  const onChangePeriod = useCallback(
    (start: string | undefined, end: string | undefined) => {
      if (!start) {
        return setPeriod({ start: undefined, end: undefined, summarize: "day" })
      } else {
        const startDate = new Date(start)
        const endDate = end ? new Date(end) : dayjs().tz().toDate()

        const summarize = getSummarize(startDate, endDate)

        setPeriod({ start, end, summarize })
      }
    },
    [],
  )

  const value: InsightsContext = useMemo(
    () => ({ insights: data, period, onChangePeriod, users, setUsers }),
    [data, period, users, onChangePeriod],
  )

  return (
    <PageProvider {...{ currentVersion, documentTree }}>
      <InsightsProvider value={value}>
        <TopLayout>
          <SEO
            title={t("insights.title")}
            description={t("insights.description")}
            disableTitleTemplate
          />

          <VStack>
            <InsightsHeader />

            <VStack gap={{ base: "xl", md: "md" }}>
              <TotalChart isLoading={isLoading} />
              <UserCharts isLoading={isLoading} />
            </VStack>
          </VStack>
        </TopLayout>
      </InsightsProvider>
    </PageProvider>
  )
}

export default Page
