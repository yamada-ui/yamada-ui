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
import { useEffect, useMemo, useState } from "react"
import { InsightsHeader } from "./insights-header"
import { VStack } from "@yamada-ui/react"
import type {
  InsightPeriod,
  Insights,
  InsightSummarize,
} from "./insights-utils"
import { getInsights, getSummarize, INSIGHT_USER_IDS } from "./insights-utils"
import dayjs from "dayjs"

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { props } = await getStaticCommonProps(context)
  const start = (context.query.start ||
    dayjs().tz().subtract(7, "d").format("YYYY-MM-DD")) as string
  const end = (context.query.end || dayjs().tz().format("YYYY-MM-DD")) as string
  const users = ((context.query.users as string | undefined)?.split(",") ||
    INSIGHT_USER_IDS) as string[]
  const period = { start, end }

  return { props: { ...props, users, period } }
}

type PageProps = InferGetServerSidePropsType<typeof getServerSideProps>

const Page: NextPage<PageProps> = ({
  currentVersion,
  documentTree,
  period: periodProp,
  users: usersProp,
}) => {
  const { t } = useI18n()
  const [insights, setInsights] = useState<Insights | undefined>(undefined)
  const [users, setUsers] = useState<string[]>(usersProp)
  const [period, setPeriod] = useState<InsightPeriod>(periodProp)
  const [summarize, setSummarize] = useState<InsightSummarize>(() => {
    const { start, end } = period
    const startDate = new Date(start!)
    const endDate = new Date(end!)

    return getSummarize(startDate, endDate)
  })

  useEffect(() => {
    let { start, end } = period

    if (!start) {
      setSummarize("day")
      setInsights(undefined)

      return
    }

    end ??= dayjs().tz().format("YYYY-MM-DD")

    const startDate = new Date(start)
    const endDate = new Date(end)

    const summarize = getSummarize(startDate, endDate)
    const insights = getInsights(startDate, endDate, summarize)

    setInsights(insights)
    setSummarize(summarize)
  }, [period, summarize])

  const value: InsightsContext = useMemo(
    () => ({ insights, period, summarize, setPeriod, users, setUsers }),
    [insights, period, users, summarize],
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
              <TotalChart />
              <UserCharts />
            </VStack>
          </VStack>
        </TopLayout>
      </InsightsProvider>
    </PageProvider>
  )
}

export default Page
