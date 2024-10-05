import type { InsightPeriod, Insights } from "insights"
import type { Dispatch, SetStateAction } from "react"
import { createContext } from "@yamada-ui/react"

export interface InsightsContext {
  period: InsightPeriod
  setUsers: Dispatch<SetStateAction<string[]>>
  users: string[]
  onChangePeriod: (start: string | undefined, end: string | undefined) => void
  currentInsights?: Insights
  prevInsights?: Insights
}

export const [InsightsProvider, useInsights] = createContext<InsightsContext>({
  name: "InsightsContext",
})
