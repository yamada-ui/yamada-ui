import type { CSSUIObject } from "@yamada-ui/core"
import { createContext } from "@yamada-ui/utils"

type ChartContext = { styles: Record<string, CSSUIObject> }

export const [ChartProvider, useChartContext] = createContext<ChartContext>({
  name: "ChartContext",
  errorMessage: `useChartContext returned is 'undefined'. Seems you forgot to wrap the components in "<LineChart />" or "<BarChart />" etc.`,
})

export type UseChartProps = {}

export const useChart = ({}: UseChartProps = {}) => {
  return {}
}

export type UseChartReturn = ReturnType<typeof useChart>
