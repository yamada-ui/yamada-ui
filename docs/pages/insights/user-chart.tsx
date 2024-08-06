import {
  Avatar,
  Box,
  Center,
  ColorSwatch,
  forwardRef,
  Grid,
  Heading,
  HStack,
  Link,
  Skeleton,
  Text,
  VStack,
  Tooltip,
} from "@yamada-ui/react"
import type {
  ColorSwatchProps,
  SkeletonProps,
  StackProps,
} from "@yamada-ui/react"
import type { FC } from "react"
import { memo, useMemo } from "react"
import type { UserInsights, UserInsightScore } from "insights"
import {
  getInsightScore,
  INSIGHT_SCORE_COLORS,
  INSIGHT_USERS,
  labelFormatter,
  xAxisTickFormatter,
} from "./insights-utils"
import { useInsights } from "./insights-provider"
import type { BarProps } from "@yamada-ui/charts"
import { BarChart } from "@yamada-ui/charts"
import { useI18n } from "contexts"
import type { CountUpProps } from "components/transitions"
import { CountUp } from "components/transitions"

export type UserChartProps = Omit<StackProps, "id"> & {
  id: string
  score: UserInsightScore
  timeline: UserInsights | undefined
  isLoading: boolean
}

export const UserChart = memo(
  forwardRef<UserChartProps, "div">(
    ({ id, score, timeline, isLoading, ...rest }, ref) => {
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
                <Heading as="h3" size="sm" lineClamp={1}>
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

            <HStack gap="6">
              <Grid
                display={{ base: "grid", sm: "none" }}
                templateColumns={{ base: "repeat(2, 1fr)" }}
                gapX="md"
                gapY="xs"
              >
                <ScoreLegend
                  isLoaded={!isLoading}
                  label="Pull Requests"
                  color={INSIGHT_SCORE_COLORS.pullRequests}
                  count={!isLoading ? score.pullRequests : null}
                />
                <ScoreLegend
                  isLoaded={!isLoading}
                  label="Issues"
                  color={INSIGHT_SCORE_COLORS.issues}
                  count={!isLoading ? score.issues : null}
                />
                <ScoreLegend
                  isLoaded={!isLoading}
                  label="Approved"
                  color={INSIGHT_SCORE_COLORS.approved}
                  count={!isLoading ? score.approved : null}
                />
                <ScoreLegend
                  isLoaded={!isLoading}
                  label="Comments"
                  color={INSIGHT_SCORE_COLORS.comments}
                  count={!isLoading ? score.comments : null}
                />
              </Grid>

              <Skeleton
                isLoaded={!isLoading}
                minW="4ch"
                textAlign="right"
                rounded="md"
              >
                <CountUp
                  fontSize="2xl"
                  fontWeight="semibold"
                  count={!isLoading ? score.total : null}
                />
              </Skeleton>
            </HStack>
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
                    labelFormatter={(label) => labelFormatter(label, period)}
                    xAxisTickFormatter={(value) =>
                      xAxisTickFormatter(value, period)
                    }
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

type ScoreLegendProps = {
  label?: string
  color?: ColorSwatchProps["color"]
  isLoaded?: SkeletonProps["isLoaded"]
  containerProps?: SkeletonProps
} & Omit<CountUpProps, "color">

const ScoreLegend: FC<ScoreLegendProps> = memo(
  ({ label, color, isLoaded, containerProps, ...rest }) => {
    return (
      <Tooltip label={label}>
        <HStack gap="sm">
          <ColorSwatch color={color} boxSize="3" isRounded />

          <Skeleton
            isLoaded={isLoaded}
            minW="2.5ch"
            textAlign="right"
            rounded="md"
            {...containerProps}
          >
            <CountUp fontSize="sm" {...rest} />
          </Skeleton>
        </HStack>
      </Tooltip>
    )
  },
)

ScoreLegend.displayName = "ScoreLegend"
