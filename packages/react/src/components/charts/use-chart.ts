import type * as Recharts from "recharts"
import type { PropGetter } from "../../core"
import type { Dict } from "../../utils"
import type { ResponsiveContainerProps } from "./chart.types"
import { useCallback } from "react"
import { useTheme } from "../../providers/theme-provider"
import { cx } from "../../utils"
import { getComponentProps } from "./chart-utils"
import { containerProperties } from "./rechart-properties"
export interface UseChartProps {
  /**
   * Props passed down to recharts `ResponsiveContainer` component.
   */
  containerProps?: ResponsiveContainerProps
}

export const useChart = ({ containerProps = {} }: UseChartProps) => {
  const { theme } = useTheme()
  const [reChartsProps, propClassName] = getComponentProps<Dict, string>([
    containerProps,
    containerProperties,
  ])(theme)

  const getContainerProps: PropGetter<
    Partial<Recharts.ResponsiveContainerProps>
  > = useCallback(
    ({ className, ...props } = {}) => ({
      className: cx("ui-chart__container", className as string, propClassName),
      ...props,
      ...reChartsProps,
    }),
    [propClassName, reChartsProps],
  )

  return {
    getContainerProps,
  }
}
