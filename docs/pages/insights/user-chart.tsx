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
import type { StackProps } from "@yamada-ui/react"
import { memo, useMemo } from "react"
import type { UserInsights, UserInsightScore } from "insights"
import {
  getInsightScore,
  getTrend,
  INSIGHT_SCORE_COLORS,
  INSIGHT_USERS,
  xAxisTickFormatter,
} from "./insights-utils"
import { useInsights } from "./insights-provider"
import type { BarProps } from "@yamada-ui/charts"
import { BarChart } from "@yamada-ui/charts"
import { useI18n } from "contexts"
import { CountUp } from "components/transitions"
import { ChartTooltip } from "./chart-tooltip"
import { ScoreLegend } from "./score-legend"

export type UserChartProps = Omit<StackProps, "id"> & {
  id: string
  currentScore: UserInsightScore
  prevScore: UserInsightScore
  timeline: UserInsights | undefined
  isLoading: boolean
}

export const UserChart = memo(
  forwardRef<UserChartProps, "div">(
    ({ id, currentScore, prevScore, timeline, isLoading, ...rest }, ref) => {
      const { t, locale } = useI18n()
      const { period } = useInsights()
      const isEmpty = !period.start && !period.end

      const user = useMemo(() => INSIGHT_USERS[id], [id])

      const data = useMemo(
        () =>
          Object.entries(timeline ?? {}).map(([period, data]) => {
            const { comments, issues, pullRequests, approved, total } =
              getInsightScore(data)

            return {
              period,
              Comments: comments,
              Issues: issues,
              "Pull Requests": pullRequests,
              Approved: approved,
              total,
            }
          }),
        [timeline],
      )

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

      const trend = useMemo(
        () => getTrend(currentScore.total, prevScore.total),
        [currentScore.total, prevScore.total],
      )

      return (
        <VStack ref={ref} borderWidth="1px" rounded="md" {...rest}>
          <HStack
            justifyContent="space-between"
            borderBottomWidth="1px"
            py="md"
            px="6"
            bg={["whiteAlpha.500", "blackAlpha.300"]}
          >
            <HStack>
              <Box
                as="a"
                href={user.github.url}
                target="_blank"
                cursor="pointer"
              >
                <Avatar src={user.github.icon} />
              </Box>

              <VStack gap="xs">
                <Heading as="h3" size="md" lineClamp={1}>
                  {user.name[locale]}
                </Heading>

                <Link
                  isExternal
                  href={user.github.url}
                  fontSize="sm"
                  lineClamp={1}
                >
                  {user.github.id}
                </Link>
              </VStack>
            </HStack>

            <VStack w="auto" alignItems="flex-end" gap="sm">
              <Skeleton isLoaded={!isLoading} textAlign="right" rounded="md">
                <HStack gap="sm">
                  <CountUp
                    minW="2.5ch"
                    fontSize="3xl"
                    lineHeight="1"
                    fontWeight="semibold"
                    count={!isLoading ? currentScore.total : null}
                  />

                  {!isUndefined(trend) ? (
                    <Tag size="sm" colorScheme={trend.colorScheme}>
                      {trend.value}%
                    </Tag>
                  ) : null}
                </HStack>
              </Skeleton>

              <Grid
                display={{ base: "grid", sm: "none" }}
                templateColumns={{ base: "repeat(4, 1fr)" }}
                gapX="md"
                gapY="xs"
              >
                <ScoreLegend
                  isLoaded={!isLoading}
                  label="Pull Requests"
                  color={INSIGHT_SCORE_COLORS.pullRequests}
                  count={!isLoading ? currentScore.pullRequests : null}
                />
                <ScoreLegend
                  isLoaded={!isLoading}
                  label="Issues"
                  color={INSIGHT_SCORE_COLORS.issues}
                  count={!isLoading ? currentScore.issues : null}
                />
                <ScoreLegend
                  isLoaded={!isLoading}
                  label="Approved"
                  color={INSIGHT_SCORE_COLORS.approved}
                  count={!isLoading ? currentScore.approved : null}
                />
                <ScoreLegend
                  isLoaded={!isLoading}
                  label="Comments"
                  color={INSIGHT_SCORE_COLORS.comments}
                  count={!isLoading ? currentScore.comments : null}
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
              <Skeleton isLoaded={!isLoading} w="full" h="md" rounded="md">
                <Box ms="-6">
                  <BarChart
                    data={data}
                    series={series}
                    dataKey="period"
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
