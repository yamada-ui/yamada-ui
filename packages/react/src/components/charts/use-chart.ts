import type * as Recharts from "recharts"
import type { CSSUIObject, PropGetter } from "../../core"
import type { Dict } from "../../utils"
import type { ResponsiveContainerProps } from "./chart.types"
import { useCallback } from "react"
import { useTheme } from "../../providers/theme-provider"
import { createContext, cx } from "../../utils"
import { getComponentProps } from "./chart-utils"
import { containerProperties } from "./rechart-properties"

interface ChartContext {
  styles: { [key: string]: CSSUIObject | undefined }
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

export const useLegend = () => {
  const { styles } = useChartContext()

  return {
    styles,
  }
}

export type UseLegendReturn = ReturnType<typeof useLegend>

export const useTooltip = () => {
  const { styles } = useChartContext()

  return {
    styles,
  }
}

export type UseTooltipReturn = ReturnType<typeof useTooltip>
