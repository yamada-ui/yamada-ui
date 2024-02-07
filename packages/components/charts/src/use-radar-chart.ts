import { createContext } from "@yamada-ui/utils"

type RadarChartContext = {}

export const [RadarChartProvider, useRadarChartContext] =
  createContext<RadarChartContext>({
    name: "RadarChartContext",
    errorMessage: `useRadarChartContext returned is 'undefined'. Seems you forgot to wrap the components in "<RadarChart />"`,
  })

export type UseRadarChartProps = {}

export const useRadarChart = ({}: UseRadarChartProps = {}) => {
  return {}
}

export type UseRadarChartReturn = ReturnType<typeof useRadarChart>
