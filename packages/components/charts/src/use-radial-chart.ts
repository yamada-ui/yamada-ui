import type { CSSUIObject } from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"

export type UseRadialChartOptions = {
  /**
   * Chart data.
   */
  data: Dict[]
}

type UseRadialChartProps = UseRadialChartOptions & {
  styles: Dict<CSSUIObject>
}

export const useRadialChart = ({}: UseRadialChartProps) => {}

export type UseRadialChartReturn = ReturnType<typeof useRadialChart>
