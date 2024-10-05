import type { BarProps } from "@yamada-ui/charts"
import type { StackProps } from "@yamada-ui/react"
import type { UserInsights, UserInsightScore } from "insights"
import { BarChart } from "@yamada-ui/charts"
import {
  Avatar,
  Box,
  Center,
  forwardRef,
  Grid,
  Heading,
  HStack,
  isUndefined,
  Link,
  Skeleton,
  Tag,
  Text,
  VStack,
} from "@yamada-ui/react"
import { CountUp } from "components/transitions"
import { useI18n } from "contexts"
import { memo, useMemo } from "react"
import { ChartTooltip } from "./chart-tooltip"
import { useInsights } from "./insights-provider"
import {
  getInsightScore,
  getTrend,
  INSIGHT_SCORE_COLORS,
  INSIGHT_USERS,
  xAxisTickFormatter,
} from "./insights-utils"
import { ScoreLegend } from "./score-legend"

export interface UserChartProps extends Omit<StackProps, "id"> {
  id: string
  currentScore: UserInsightScore
  isLoading: boolean
  prevScore: UserInsightScore
  timeline: undefined | UserInsights
}

export const UserChart = memo(
  forwardRef<UserChartProps, "div">(
    ({ id, currentScore, isLoading, prevScore, timeline, ...rest }, ref) => {
      const { locale, t } = useI18n()
      const { period } = useInsights()
      const isEmpty = !period.start && !period.end

      const user = useMemo(() => INSIGHT_USERS[id]!, [id])

      const data = useMemo(
        () =>
          Object.entries(timeline ?? {}).map(([period, data]) => {
            const { approved, comments, issues, pullRequests, total } =
              getInsightScore(data)

            return {
              Approved: approved,
              Comments: comments,
              Issues: issues,
              period,
              "Pull Requests": pullRequests,
              total,
            }
          }),
        [timeline],
      )

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

      const trend = useMemo(
        () => getTrend(currentScore.total, prevScore.total),
        [currentScore.total, prevScore.total],
      )

      return (
        <VStack ref={ref} borderWidth="1px" rounded="md" {...rest}>
          <HStack
            bg={["whiteAlpha.500", "blackAlpha.300"]}
            borderBottomWidth="1px"
            justifyContent="space-between"
            px="6"
            py="md"
          >
            <HStack>
              <Box
                as="a"
                cursor="pointer"
                href={user.github.url}
                target="_blank"
              >
                <Avatar src={user.github.icon} />
              </Box>

              <VStack gap="xs">
                <Heading as="h3" lineClamp={1} size="md">
                  {user.name[locale]}
                </Heading>

                <Link
                  fontSize="sm"
                  href={user.github.url}
                  isExternal
                  lineClamp={1}
                >
                  {user.github.id}
                </Link>
              </VStack>
            </HStack>

            <VStack alignItems="flex-end" gap="sm" w="auto">
              <Skeleton isLoaded={!isLoading} rounded="md" textAlign="right">
                <HStack gap="sm">
                  <CountUp
                    count={!isLoading ? currentScore.total : null}
                    fontSize="3xl"
                    fontWeight="semibold"
                    lineHeight="1"
                    minW="2.5ch"
                  />

                  {!isUndefined(trend) ? (
                    <Tag colorScheme={trend.colorScheme} size="sm">
                      {trend.value}%
                    </Tag>
                  ) : null}
                </HStack>
              </Skeleton>

              <Grid
                display={{ base: "grid", sm: "none" }}
                gapX="md"
                gapY="xs"
                templateColumns={{ base: "repeat(4, 1fr)" }}
              >
                <ScoreLegend
                  color={INSIGHT_SCORE_COLORS.pullRequests}
                  count={!isLoading ? currentScore.pullRequests : null}
                  isLoaded={!isLoading}
                  label="Pull Requests"
                />
                <ScoreLegend
                  color={INSIGHT_SCORE_COLORS.issues}
                  count={!isLoading ? currentScore.issues : null}
                  isLoaded={!isLoading}
                  label="Issues"
                />
                <ScoreLegend
                  color={INSIGHT_SCORE_COLORS.approved}
                  count={!isLoading ? currentScore.approved : null}
                  isLoaded={!isLoading}
                  label="Approved"
                />
                <ScoreLegend
                  color={INSIGHT_SCORE_COLORS.comments}
                  count={!isLoading ? currentScore.comments : null}
                  isLoaded={!isLoading}
                  label="Comments"
                />
              </Grid>
            </VStack>
          </HStack>

          <Center px="6" py="lg">
            {isEmpty ? (
              <Center h="md">
                <Text color="muted" fontSize="2xl">
                  {t("insights.notFound")}
                </Text>
              </Center>
            ) : (
              <Skeleton h="md" isLoaded={!isLoading} rounded="md" w="full">
                <Box ms="-6">
                  <BarChart
                    data={data}
                    dataKey="period"
                    series={series}
                    xAxisTickFormatter={(value) =>
                      xAxisTickFormatter(value, period)(locale)
                    }
                    tooltipProps={{
                      content: ChartTooltip,
                    }}
                  />
                </Box>
              </Skeleton>
            )}
          </Center>
        </VStack>
      )
    },
  ),
)

UserChart.displayName = "UserChart"
