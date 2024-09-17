import { createContext } from "@yamada-ui/react"
import type { Dispatch, SetStateAction } from "react"
import type { Insights, InsightPeriod } from "insights"

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
