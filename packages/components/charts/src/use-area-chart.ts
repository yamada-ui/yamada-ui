import { createContext } from "@yamada-ui/utils"

type AreaChartContext = {}

export const [AreaChartProvider, useAreaChartContext] =
  createContext<AreaChartContext>({
    name: "AreaChartContext",
    errorMessage: `useAreaChartContext returned is 'undefined'. Seems you forgot to wrap the components in "<AreaChart />"`,
  })

export type UseAreaChartProps = {}

export const useAreaChart = ({}: UseAreaChartProps = {}) => {
  return {}
}

export type UseAreaChartReturn = ReturnType<typeof useAreaChart>
