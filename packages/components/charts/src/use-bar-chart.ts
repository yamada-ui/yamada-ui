import { createContext } from "@yamada-ui/utils"

type BarChartContext = {}

export const [BarChartProvider, useBarChartContext] =
  createContext<BarChartContext>({
    name: "BarChartContext",
    errorMessage: `useBarChartContext returned is 'undefined'. Seems you forgot to wrap the components in "<BarChart />"`,
  })

export type UseBarChartProps = {}

export const useBarChart = ({}: UseBarChartProps = {}) => {
  return {}
}

export type UseBarChartReturn = ReturnType<typeof useBarChart>
