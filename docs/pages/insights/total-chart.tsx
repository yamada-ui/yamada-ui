import type { BarProps } from "@yamada-ui/charts"
import {
  AreaChart as UIAreaChart,
  BarChart as UIBarChart,
  type AreaProps,
} from "@yamada-ui/charts"
import {
  Center,
  forwardRef,
  HStack,
  IconButton,
  Skeleton,
  Text,
  useBoolean,
  VStack,
} from "@yamada-ui/react"
import type { StackProps } from "@yamada-ui/react"
import type { FC } from "react"
import { memo, useMemo } from "react"
import { useInsights } from "./insights-provider"
import {
  getInsightScore,
  getInsightTotalScore,
  INSIGHT_SCORE_COLORS,
  INSIGHT_USER_IDS,
  labelFormatter,
  randomIndex,
  xAxisTickFormatter,
} from "./insights-utils"
import { useI18n } from "contexts"
import { ChartLine, ChartColumn } from "@yamada-ui/lucide"
import { colorSchemes } from "theme"
import { CountUp } from "components/transitions"

export type TotalChartProps = StackProps & {}

export const TotalChart = memo(
  forwardRef<TotalChartProps, "div">(({ ...rest }, ref) => {
    const { t } = useI18n()
    const { insights, users, period } = useInsights()
    const isEmpty = !users.length || (!period.start && !period.end)
    const [isAreaChart, { toggle }] = useBoolean(true)
    const isLoaded = !!insights

    const score = useMemo(
      () => getInsightTotalScore(insights, users),
      [insights, users],
    )

    return (
      <VStack
        ref={ref}
        as="section"
        position="relative"
        zIndex="kurillin"
        gap="0"
        borderWidth="1px"
        rounded="md"
        {...rest}
      >
        <HStack
          justifyContent="space-between"
          borderBottomWidth="1px"
          py="md"
          px="6"
          bg={["whiteAlpha.500", "blackAlpha.300"]}
        >
          <Center>
            <Skeleton isLoaded={isLoaded} minW="6ch" rounded="md">
              <CountUp
                fontSize="3xl"
                fontWeight="semibold"
                count={isLoaded ? score.total : null}
              />
            </Skeleton>
          </Center>

          <HStack>
            <IconButton
              variant="ghost"
              icon={
                isAreaChart ? (
                  <ChartColumn fontSize="1.5em" />
                ) : (
                  <ChartLine fontSize="1.5em" />
                )
              }
              onClick={toggle}
            />
          </HStack>
        </HStack>

        <Center ps={isLoaded ? "0" : "6"} pe="6" py={{ base: "lg" }}>
          {isEmpty ? (
            <Center h="md">
              <Text color="muted" fontSize="2xl">
                {t("insights.notFound")}
              </Text>
            </Center>
          ) : (
            <Skeleton isLoaded={isLoaded} w="full" h="md" rounded="md">
              {isAreaChart ? <AreaChart /> : <BarChart />}
            </Skeleton>
          )}
        </Center>
      </VStack>
    )
  }),
)

TotalChart.displayName = "TotalChart"

type AreaChartProps = {}

const AreaChart: FC<AreaChartProps> = memo(() => {
  const { insights, users, summarize, period } = useInsights()

  const data = useMemo(
    () =>
      Object.entries(insights ?? {}).map(([period, users]) => ({
        period,
        ...Object.fromEntries(
          Object.entries(users).map(([user, data]) => {
            const { total } = getInsightScore(data)

            return [user, total]
          }),
        ),
      })),
    [insights],
  )

  const series: AreaProps[] = useMemo(
    () =>
      INSIGHT_USER_IDS.filter((id) => users.includes(id)).map((string) => {
        const c = colorSchemes[randomIndex(string, colorSchemes.length)]

        return {
          dataKey: string,
          color: `${c}.500`,
        }
      }),
    [users],
  )

  return (
    <UIAreaChart
      data={data}
      series={series}
      dataKey="period"
      curveType="linear"
      labelFormatter={(label) => labelFormatter(label, summarize, period)}
      xAxisTickFormatter={(value) => xAxisTickFormatter(value, summarize)}
      fillOpacity={[0.8, 0.7]}
      withDots={false}
      withActiveDots={false}
    />
  )
})

AreaChart.displayName = "AreaChart"

type BarChartProps = {}

const BarChart: FC<BarChartProps> = memo(() => {
  const { insights, users } = useInsights()

  const data = useMemo(() => {
    const result: Record<string, Record<string, any>> = {}

    Object.values(insights ?? {}).forEach((data) => {
      Object.entries(data).forEach(([user, data]) => {
        if (!users.includes(user)) return

        const { comments, issues, pullRequests, approved, total } =
          getInsightScore(data)

        if (result[user]) {
          result[user]["Comments"] += comments
          result[user]["Issues"] += issues
          result[user]["Pull Requests"] += pullRequests
          result[user]["Approved"] += approved
          result[user].total += total
        } else {
          result[user] = {
            user,
            Comments: comments,
            Issues: issues,
            "Pull Requests": pullRequests,
            Approved: approved,
            total,
          }
        }
      })
    })

    const data = Object.values(result)

    return data.sort((a, b) => b.total - a.total)
  }, [insights, users])

  const series: BarProps[] = useMemo(
    () => [
      {
        dataKey: "Pull Requests",
        color: INSIGHT_SCORE_COLORS.pullRequests,
        stackId: "total",
      },
      {
        dataKey: "Issues",
        color: INSIGHT_SCORE_COLORS.issues,
        stackId: "total",
      },
      {
        dataKey: "Approved",
        color: INSIGHT_SCORE_COLORS.approved,
        stackId: "total",
      },
      {
        dataKey: "Comments",
        color: INSIGHT_SCORE_COLORS.comments,
        stackId: "total",
        radius: [4, 4, 0, 0],
      },
    ],
    [],
  )

  return <UIBarChart data={data} series={series} dataKey="user" />
})

BarChart.displayName = "BarChart"
