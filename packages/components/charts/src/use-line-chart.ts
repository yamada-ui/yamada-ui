import { createContext } from "@yamada-ui/utils"

type LineChartContext = {}

export const [LineChartProvider, useLineChartContext] =
  createContext<LineChartContext>({
    name: "ChartContext",
    errorMessage: `useChartContext returned is 'undefined'. Seems you forgot to wrap the components in "<LineChart />"`,
  })

export type UseLineChartProps = {}

export const useLineChart = ({}: UseLineChartProps = {}) => {
  return {}
}

export type UseLineChartReturn = ReturnType<typeof useLineChart>
