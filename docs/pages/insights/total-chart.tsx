import type { BarProps, AreaProps } from "@yamada-ui/charts"
import {
  AreaChart as UIAreaChart,
  BarChart as UIBarChart,
} from "@yamada-ui/charts"
import {
  Box,
  Center,
  forwardRef,
  Grid,
  HStack,
  IconButton,
  isUndefined,
  Skeleton,
  Tag,
  Text,
  useBoolean,
  useTheme,
  VStack,
} from "@yamada-ui/react"
import type { StackProps } from "@yamada-ui/react"
import type { FC } from "react"
import { memo, useEffect, useMemo } from "react"
import { useInsights } from "./insights-provider"
import {
  getInsightScore,
  getInsightTotalScore,
  getTrend,
  INSIGHT_SCORE_COLORS,
  INSIGHT_USER_IDS,
  randomIndex,
  xAxisTickFormatter,
} from "./insights-utils"
import { useI18n } from "contexts"
import { ChartLine, ChartColumn } from "@yamada-ui/lucide"
import { CountUp } from "components/transitions"
import { ChartTooltip } from "./chart-tooltip"
import { ScoreLegend } from "./score-legend"

export interface TotalChartProps extends StackProps {
  isLoading: boolean
}

export const TotalChart = memo(
  forwardRef<TotalChartProps, "div">(({ isLoading, ...rest }, ref) => {
    const { t } = useI18n()
    const { currentInsights, prevInsights, users, period } = useInsights()
    const isEmpty = !isLoading && !Object.keys(currentInsights ?? {}).length
    const isInvalid = !users.length || (!period.start && !period.end)
    const isSingle = Object.keys(currentInsights ?? {}).length <= 1
    const [isAreaChart, { toggle, off }] = useBoolean(true)

    const currentScore = useMemo(
      () => getInsightTotalScore(currentInsights, users),
      [currentInsights, users],
    )

    const prevScore = useMemo(
      () => getInsightTotalScore(prevInsights, users),
      [prevInsights, users],
    )

    const trend = useMemo(
      () => getTrend(currentScore.total, prevScore.total),
      [currentScore.total, prevScore.total],
    )

    useEffect(() => {
      if (!isLoading && isSingle) off()
    }, [off, isLoading, isSingle])

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
          <Skeleton isLoaded={!isLoading} rounded="md">
            <HStack>
              <CountUp
                minW="2.5ch"
                fontSize="4xl"
                lineHeight="1"
                fontWeight="semibold"
                count={!isLoading ? currentScore.total : null}
              />

              {!isUndefined(trend) ? (
                <Tag colorScheme={trend.colorScheme}>{trend.value}%</Tag>
              ) : null}
            </HStack>
          </Skeleton>

          <HStack>
            <Grid
              display={{ base: "grid", sm: "none" }}
              templateColumns="repeat(4, 1fr)"
              gapX="md"
              gapY="xs"
            >
              <ScoreLegend
                isLoaded={!isLoading}
                label="Pull Requests"
                color={INSIGHT_SCORE_COLORS.pullRequests}
                count={!isLoading ? currentScore.pullRequests : null}
                containerProps={{ minW: "3ch", fontSize: "md" }}
              />
              <ScoreLegend
                isLoaded={!isLoading}
                label="Issues"
                color={INSIGHT_SCORE_COLORS.issues}
                count={!isLoading ? currentScore.issues : null}
                containerProps={{ minW: "3ch", fontSize: "md" }}
              />
              <ScoreLegend
                isLoaded={!isLoading}
                label="Approved"
                color={INSIGHT_SCORE_COLORS.approved}
                count={!isLoading ? currentScore.approved : null}
                containerProps={{ minW: "3ch", fontSize: "md" }}
              />
              <ScoreLegend
                isLoaded={!isLoading}
                label="Comments"
                color={INSIGHT_SCORE_COLORS.comments}
                count={!isLoading ? currentScore.comments : null}
                containerProps={{ minW: "3ch", fontSize: "md" }}
              />
            </Grid>

            <IconButton
              variant="ghost"
              aria-label={`Change ${isAreaChart ? "AreaChart" : "BarChart"} to ${isAreaChart ? "BarChart" : "AreaChart"}`}
              isDisabled={isEmpty || isInvalid || isSingle}
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

        <Center px="6" py={{ base: "lg" }}>
          {isEmpty || isInvalid ? (
            <Center h="md">
              <Text color="muted" fontSize="2xl">
                {t("insights.notFound")}
              </Text>
            </Center>
          ) : (
            <Skeleton isLoaded={!isLoading} w="full" h="md" rounded="md">
              <Box ms="-6">{isAreaChart ? <AreaChart /> : <BarChart />}</Box>
            </Skeleton>
          )}
        </Center>
      </VStack>
    )
  }),
)

TotalChart.displayName = "TotalChart"

interface AreaChartProps {}

const AreaChart: FC<AreaChartProps> = memo(() => {
  const { locale } = useI18n()
  const { currentInsights, users, period } = useInsights()
  const { theme } = useTheme()
  const { colorSchemes = [] } = theme

  const data = useMemo(
    () =>
      Object.entries(currentInsights ?? {}).map(([period, users]) => ({
        period,
        ...Object.fromEntries(
          Object.entries(users).map(([user, data]) => {
            const { total } = getInsightScore(data)

            return [user, total]
          }),
        ),
      })),
    [currentInsights],
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
    [users, colorSchemes],
  )

  return (
    <UIAreaChart
      data={data}
      series={series}
      dataKey="period"
      curveType="linear"
      xAxisTickFormatter={(value) => xAxisTickFormatter(value, period)(locale)}
      fillOpacity={[0.8, 0.7]}
      withDots={false}
      withActiveDots={true}
      tooltipProps={{
        content: ChartTooltip,
      }}
    />
  )
})

AreaChart.displayName = "AreaChart"

interface BarChartProps {}

const BarChart: FC<BarChartProps> = memo(() => {
  const { currentInsights, users } = useInsights()

  const data = useMemo(() => {
    const result: { [key: string]: { [key: string]: any } } = {}

    Object.values(currentInsights ?? {}).forEach((data) => {
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
  }, [currentInsights, users])

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

  return (
    <UIBarChart
      data={data}
      series={series}
      dataKey="user"
      tooltipProps={{
        content: ChartTooltip,
      }}
    />
  )
})

BarChart.displayName = "BarChart"
