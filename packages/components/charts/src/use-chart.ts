import type { CSSUIObject, PropGetter } from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import type * as Recharts from "recharts"
import type { ResponsiveContainerProps } from "./chart.types"
import { useTheme } from "@yamada-ui/core"
import { createContext, cx } from "@yamada-ui/utils"
import { useCallback } from "react"
import { getComponentProps } from "./chart-utils"
import { containerProperties } from "./rechart-properties"

interface ChartContext {
  styles: { [key: string]: CSSUIObject }
}

export const [ChartProvider, useChartContext] = createContext<ChartContext>({
  name: "ChartContext",
  errorMessage: `useChartContext returned is 'undefined'. Seems you forgot to wrap the components in "<LineChart />" or "<BarChart />" etc.`,
})

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
    Partial<Omit<Recharts.ResponsiveContainerProps, "children">>,
    Omit<Recharts.ResponsiveContainerProps, "children">
  > = useCallback(
    ({ className, ...props } = {}, ref = null) => ({
      ref,
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

export type UseChartReturn = ReturnType<typeof useChart>

export interface UseLegendProps {}

export const useLegend = ({}: UseLegendProps = {}) => {
  const { styles } = useChartContext()
  return {
    styles,
  }
}
export type UseLegendReturn = ReturnType<typeof useLegend>

export interface UseTooltipProps {}

export const useTooltip = ({}: UseTooltipProps = {}) => {
  const { styles } = useChartContext()
  return {
    styles,
  }
}
export type UseTooltipReturn = ReturnType<typeof useTooltip>
