import { createContext } from "@yamada-ui/utils"
import type { AreaChartSeries } from "./area-chart"

type AreaChartContext = {}

export const [AreaChartProvider, useAreaChartContext] =
  createContext<AreaChartContext>({
    name: "AreaChartContext",
    errorMessage: `useAreaChartContext returned is 'undefined'. Seems you forgot to wrap the components in "<AreaChart />"`,
  })

export type UseAreaChartProps = {
  data: Record<string, any>[]
  series: AreaChartSeries[]
}

export const useAreaChart = ({ data, series }: UseAreaChartProps) => {
  const getSplitOffset = ({ dataKey }: { dataKey: string }) => {
    const dataMax = Math.max(...data.map((item) => item[dataKey]))
    const dataMin = Math.min(...data.map((item) => item[dataKey]))

    if (dataMax <= 0) return 0
    if (dataMin >= 0) return 1

    return dataMax / (dataMax - dataMin)
  }

  const getDefaultSplitOffset = () => {
    if (series.length === 1) {
      const dataKey = series[0].name
      return getSplitOffset({ dataKey })
    }

    return 0.5
  }

  return { getDefaultSplitOffset }
}

export type UseAreaChartReturn = ReturnType<typeof useAreaChart>
