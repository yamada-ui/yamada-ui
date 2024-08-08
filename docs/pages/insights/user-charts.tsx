import { forwardRef, Grid } from "@yamada-ui/react"
import type { GridProps } from "@yamada-ui/react"
import { memo, useMemo } from "react"
import { UserChart } from "./user-chart"
import { useInsights } from "./insights-provider"
import type { UserInsights, UserInsightScore } from "insights"
import { DEFAULT_SCORE, getInsightScore } from "./insights-utils"

export type UserChartsProps = GridProps & {
  isLoading: boolean
}

export const UserCharts = memo(
  forwardRef<UserChartsProps, "div">(({ isLoading, ...rest }, ref) => {
    const { users, currentInsights, prevInsights } = useInsights()

    const computedUsers = useMemo(() => {
      type Data = {
        currentScore: UserInsightScore
        prevScore: UserInsightScore
        timeline?: UserInsights
      }

      if (currentInsights) {
        type Result = Record<string, Data>

        const result: Result = {}

        Object.entries(currentInsights).forEach(([period, data]) => {
          Object.entries(data).forEach(([user, data]) => {
            if (!users.includes(user)) return

            if (!result[user]) {
              result[user] = {
                currentScore: getInsightScore(null),
                prevScore: getInsightScore(null),
              }
            }

            const currentScore = getInsightScore(data)

            const { comments, issues, pullRequests, approved, total } =
              currentScore

            result[user].currentScore.total += total
            result[user].currentScore.comments += comments
            result[user].currentScore.issues += issues
            result[user].currentScore.pullRequests += pullRequests
            result[user].currentScore.approved += approved

            result[user].timeline = { ...result[user].timeline, [period]: data }
          })
        })

        Object.entries(prevInsights ?? {}).forEach(([period, data]) => {
          Object.entries(data).forEach(([user, data]) => {
            if (!users.includes(user)) return

            const prevScore = getInsightScore(data)

            const { comments, issues, pullRequests, approved, total } =
              prevScore

            result[user].prevScore.total += total
            result[user].prevScore.comments += comments
            result[user].prevScore.issues += issues
            result[user].prevScore.pullRequests += pullRequests
            result[user].prevScore.approved += approved

            result[user].timeline = { ...result[user].timeline, [period]: data }
          })
        })

        return Object.entries(result).sort(
          (a, b) => b[1].currentScore.total - a[1].currentScore.total,
        )
      } else {
        return users.map(
          (user) =>
            [
              user,
              { currentScore: DEFAULT_SCORE, prevScore: DEFAULT_SCORE },
            ] as [string, Data],
        )
      }
    }, [users, currentInsights, prevInsights])

    return (
      <Grid
        ref={ref}
        as="section"
        templateColumns={{
          base: users.length <= 1 ? "1fr" : "repeat(2, 1fr)",
          lg: "1fr",
        }}
        gap={{ base: "lg", md: "md" }}
        {...rest}
      >
        {computedUsers.map(([id, { currentScore, prevScore, timeline }]) => (
          <UserChart
            key={id}
            id={id}
            currentScore={currentScore}
            prevScore={prevScore}
            timeline={timeline}
            isLoading={isLoading}
          />
        ))}
      </Grid>
    )
  }),
)

UserCharts.displayName = "UserCharts"
