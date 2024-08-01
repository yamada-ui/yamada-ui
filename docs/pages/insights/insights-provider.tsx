import { createContext } from "@yamada-ui/react"
import type {
  InsightPeriod,
  Insights,
  InsightSummarize,
} from "./insights-utils"
import type { Dispatch, SetStateAction } from "react"

export type InsightsContext = {
  insights: Insights | undefined
  period: InsightPeriod
  summarize: InsightSummarize
  setPeriod: Dispatch<SetStateAction<InsightPeriod>>
  users: string[]
  setUsers: Dispatch<SetStateAction<string[]>>
}

export const [InsightsProvider, useInsights] = createContext<InsightsContext>({
  strict: false,
  name: "InsightsContext",
})
