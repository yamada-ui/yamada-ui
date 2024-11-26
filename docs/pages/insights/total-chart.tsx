import type { AreaProps, BarProps } from "@yamada-ui/charts"
import type { StackProps } from "@yamada-ui/react"
import type { FC } from "react"
import {
  AreaChart as UIAreaChart,
  BarChart as UIBarChart,
} from "@yamada-ui/charts"
import { ChartColumnIcon, ChartLineIcon } from "@yamada-ui/lucide"
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
import { CountUp } from "components/transitions"
import { useI18n } from "contexts"
import { memo, useEffect, useMemo } from "react"
import { ChartTooltip } from "./chart-tooltip"
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
import { ScoreLegend } from "./score-legend"

export interface TotalChartProps extends StackProps {
  isLoading: boolean
}

export const TotalChart = memo(
  forwardRef<TotalChartProps, "div">(({ isLoading, ...rest }, ref) => {
    const { t } = useI18n()
    const { currentInsights, period, prevInsights, users } = useInsights()
    const isEmpty = !isLoading && !Object.keys(currentInsights ?? {}).length
    const isInvalid = !users.length || (!period.start && !period.end)
    const isSingle = Object.keys(currentInsights ?? {}).length <= 1
    const [isAreaChart, { off, toggle }] = useBoolean(true)

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
        borderWidth="1px"
        gap="0"
        position="relative"
        rounded="md"
        zIndex="kurillin"
        {...rest}
      >
        <HStack
          bg={["whiteAlpha.500", "blackAlpha.300"]}
          borderBottomWidth="1px"
          justifyContent="space-between"
          px="6"
          py="md"
        >
          <Skeleton isLoaded={!isLoading} rounded="md">
            <HStack>
              <CountUp
                count={!isLoading ? currentScore.total : null}
                fontSize="4xl"
                fontWeight="semibold"
                lineHeight="1"
                minW="2.5ch"
              />

              {!isUndefined(trend) ? (
                <Tag colorScheme={trend.colorScheme}>{trend.value}%</Tag>
              ) : null}
            </HStack>
          </Skeleton>

          <HStack>
            <Grid
              display={{ base: "grid", sm: "none" }}
              gapX="md"
              gapY="xs"
              templateColumns="repeat(4, 1fr)"
            >
              <ScoreLegend
                color={INSIGHT_SCORE_COLORS.pullRequests}
                count={!isLoading ? currentScore.pullRequests : null}
                isLoaded={!isLoading}
                label="Pull Requests"
                containerProps={{ fontSize: "md", minW: "3ch" }}
              />
              <ScoreLegend
                color={INSIGHT_SCORE_COLORS.issues}
                count={!isLoading ? currentScore.issues : null}
                isLoaded={!isLoading}
                label="Issues"
                containerProps={{ fontSize: "md", minW: "3ch" }}
              />
              <ScoreLegend
                color={INSIGHT_SCORE_COLORS.approved}
                count={!isLoading ? currentScore.approved : null}
                isLoaded={!isLoading}
                label="Approved"
                containerProps={{ fontSize: "md", minW: "3ch" }}
              />
              <ScoreLegend
                color={INSIGHT_SCORE_COLORS.comments}
                count={!isLoading ? currentScore.comments : null}
                isLoaded={!isLoading}
                label="Comments"
                containerProps={{ fontSize: "md", minW: "3ch" }}
              />
            </Grid>

            <IconButton
              variant="ghost"
              icon={
                isAreaChart ? (
                  <ChartColumnIcon fontSize="1.5em" />
                ) : (
                  <ChartLineIcon fontSize="1.5em" />
                )
              }
              isDisabled={isEmpty || isInvalid || isSingle}
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
            <Skeleton h="md" isLoaded={!isLoading} rounded="md" w="full">
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
  const { currentInsights, period, users } = useInsights()
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
          color: `${c}.500`,
          dataKey: string,
        }
      }),
    [users, colorSchemes],
  )

  return (
    <UIAreaChart
      curveType="linear"
      data={data}
      dataKey="period"
      fillOpacity={[0.8, 0.7]}
      series={series}
      withActiveDots
      withDots={false}
      xAxisTickFormatter={(value) => xAxisTickFormatter(value, period)(locale)}
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

        const { approved, comments, issues, pullRequests, total } =
          getInsightScore(data)

        if (result[user]) {
          result[user].Comments += comments
          result[user].Issues += issues
          result[user]["Pull Requests"] += pullRequests
          result[user].Approved += approved
          result[user].total += total
        } else {
          result[user] = {
            Approved: approved,
            Comments: comments,
            Issues: issues,
            "Pull Requests": pullRequests,
            total,
            user,
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
        color: INSIGHT_SCORE_COLORS.pullRequests,
        dataKey: "Pull Requests",
        stackId: "total",
      },
      {
        color: INSIGHT_SCORE_COLORS.issues,
        dataKey: "Issues",
        stackId: "total",
      },
      {
        color: INSIGHT_SCORE_COLORS.approved,
        dataKey: "Approved",
        stackId: "total",
      },
      {
        color: INSIGHT_SCORE_COLORS.comments,
        dataKey: "Comments",
        radius: [4, 4, 0, 0],
        stackId: "total",
      },
    ],
    [],
  )

  return (
    <UIBarChart
      data={data}
      dataKey="user"
      series={series}
      tooltipProps={{
        content: ChartTooltip,
      }}
    />
  )
})

BarChart.displayName = "BarChart"
