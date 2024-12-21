import type { GridProps } from "@yamada-ui/react"
import type { UserInsights, UserInsightScore } from "insights"
import { forwardRef, Grid } from "@yamada-ui/react"
import { memo, useMemo } from "react"
import { useInsights } from "./insights-provider"
import { DEFAULT_SCORE, getInsightScore } from "./insights-utils"
import { UserChart } from "./user-chart"

export interface UserChartsProps extends GridProps {
  loading: boolean
}

export const UserCharts = memo(
  forwardRef<UserChartsProps, "div">(({ loading, ...rest }, ref) => {
    const { currentInsights, prevInsights, users } = useInsights()

    const computedUsers = useMemo(() => {
      interface Data {
        currentScore: UserInsightScore
        prevScore: UserInsightScore
        timeline?: UserInsights
      }

      if (currentInsights) {
        interface Result {
          [key: string]: Data
        }

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

            const { approved, comments, issues, pullRequests, total } =
              currentScore

            result[user].currentScore.total += total
            result[user].currentScore.comments += comments
            result[user].currentScore.issues += issues
            result[user].currentScore.pullRequests += pullRequests
            result[user].currentScore.approved += approved

            result[user].timeline = { ...result[user].timeline, [period]: data }
          })
        })

        Object.entries(prevInsights ?? {}).forEach(([, data]) => {
          Object.entries(data).forEach(([user, data]) => {
            if (!users.includes(user)) return

            const prevScore = getInsightScore(data)

            const { approved, comments, issues, pullRequests, total } =
              prevScore

            if (result[user]) {
              result[user].prevScore.total += total
              result[user].prevScore.comments += comments
              result[user].prevScore.issues += issues
              result[user].prevScore.pullRequests += pullRequests
              result[user].prevScore.approved += approved
            }
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
        gap={{ base: "lg", md: "md" }}
        templateColumns={{
          base: users.length <= 1 ? "1fr" : "repeat(2, 1fr)",
          lg: "1fr",
        }}
        {...rest}
      >
        {computedUsers.map(([id, { currentScore, prevScore, timeline }]) => (
          <UserChart
            id={id}
            key={id}
            currentScore={currentScore}
            loading={loading}
            prevScore={prevScore}
            timeline={timeline}
          />
        ))}
      </Grid>
    )
  }),
)

UserCharts.displayName = "UserCharts"
