import { forwardRef, Grid } from "@yamada-ui/react"
import type { GridProps } from "@yamada-ui/react"
import { memo, useMemo } from "react"
import { UserChart } from "./user-chart"
import { useInsights } from "./insights-provider"
import type { UserInsights, UserInsightScore } from "./insights-utils"
import { DEFAULT_SCORE, getInsightScore } from "./insights-utils"

export type UserChartsProps = GridProps & {}

export const UserCharts = memo(
  forwardRef<UserChartsProps, "div">(({ ...rest }, ref) => {
    const { users, insights } = useInsights()

    const computedUsers = useMemo(() => {
      type Data = {
        score: UserInsightScore
        timeline?: UserInsights
      }

      if (insights) {
        type Result = Record<string, Data>

        const result: Result = {}

        Object.entries(insights).forEach(([period, data]) => {
          Object.entries(data).forEach(([user, data]) => {
            if (!users.includes(user)) return

            if (!result[user]) result[user] = { score: getInsightScore(null) }

            const score = getInsightScore(data)

            const { comments, issues, pullRequests, approved, total } = score

            result[user].score.total += total
            result[user].score.comments += comments
            result[user].score.issues += issues
            result[user].score.pullRequests += pullRequests
            result[user].score.approved += approved

            result[user].timeline = { ...result[user].timeline, [period]: data }
          })
        })

        return Object.entries(result).sort(
          (a, b) => b[1].score.total - a[1].score.total,
        )
      } else {
        return users.map(
          (user) => [user, { score: DEFAULT_SCORE }] as [string, Data],
        )
      }
    }, [users, insights])

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
        {computedUsers.map(([id, { score, timeline }]) => (
          <UserChart key={id} id={id} score={score} timeline={timeline} />
        ))}
      </Grid>
    )
  }),
)

UserCharts.displayName = "UserCharts"
