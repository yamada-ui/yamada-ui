import type { CSSUIObject } from "@yamada-ui/core"
import { createContext } from "@yamada-ui/utils"

type ChartContext = { styles: Record<string, CSSUIObject> }

export const [ChartProvider, useChartContext] = createContext<ChartContext>({
  name: "ChartContext",
  errorMessage: `useChartContext returned is 'undefined'. Seems you forgot to wrap the components in "<LineChart />" or "<BarChart />" etc.`,
})

export type UseLegendProps = {}

export const useLegend = ({}: UseLegendProps = {}) => {
  const { styles } = useChartContext()
  return {
    styles,
  }
}
export type UseLegendReturn = ReturnType<typeof useLegend>

export type UseTooltipProps = {}

export const useTooltip = ({}: UseTooltipProps = {}) => {
  const { styles } = useChartContext()
  return {
    styles,
  }
}
export type UseTooltipReturn = ReturnType<typeof useTooltip>
