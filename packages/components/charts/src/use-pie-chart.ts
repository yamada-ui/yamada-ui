import { createContext } from "@yamada-ui/utils"

type PieChartContext = {}

export const [PieChartProvider, usePieChartContext] =
  createContext<PieChartContext>({
    name: "PieChartContext",
    errorMessage: `usePieChartContext returned is 'undefined'. Seems you forgot to wrap the components in "<PieChart />"`,
  })

export type UsePieChartProps = {}

export const usePieChart = ({}: UsePieChartProps = {}) => {
  return {}
}

export type UsePieChartReturn = ReturnType<typeof usePieChart>
