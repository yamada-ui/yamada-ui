import { createContext } from "@yamada-ui/react"
import type { Insights, InsightPeriod } from "insights"
import type { Dispatch, SetStateAction } from "react"

export interface InsightsContext {
  currentInsights?: Insights
  prevInsights?: Insights
  period: InsightPeriod
  onChangePeriod: (start: string | undefined, end: string | undefined) => void
  users: string[]
  setUsers: Dispatch<SetStateAction<string[]>>
}

export const [InsightsProvider, useInsights] = createContext<InsightsContext>({
  strict: false,
  name: "InsightsContext",
})
