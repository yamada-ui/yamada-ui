import { useTheme, type CSSUIObject } from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import { createContext, cx, isNumber } from "@yamada-ui/utils"
import { useCallback } from "react"
import type { ResponsiveContainerProps } from "recharts"
import { getProps } from "./chart-utils"
import type { ChartPropGetter, ContainerUIProps } from "./chart.types"
import { containerProperties } from "./chart.types"

type ChartContext = { styles: Record<string, CSSUIObject> }

export const [ChartProvider, useChartContext] = createContext<ChartContext>({
  name: "ChartContext",
  errorMessage: `useChartContext returned is 'undefined'. Seems you forgot to wrap the components in "<LineChart />" or "<BarChart />" etc.`,
})

export type UseChartProps = {
  /**
   *  Props passed down to recharts `ResponsiveContainer` component.
   */
  containerProps?: ContainerUIProps
}

export const useChart = ({ containerProps = {} }: UseChartProps) => {
  const { theme } = useTheme()
  const [reChartsProps, propClassName] = getProps<Dict, string>([
    containerProps,
    containerProperties,
  ])(theme)

  const getContainerProps: ChartPropGetter<
    "div",
    Partial<Omit<ResponsiveContainerProps, "children">>,
    Omit<ResponsiveContainerProps, "children">
  > = useCallback(
    ({ className, ...props } = {}, ref = null) => {
      let containerClassName: string
      if (isNumber(className))
        containerClassName = cx(className.toString(), propClassName)
      else containerClassName = cx(className, className)

      return {
        ref,
        containerClassName,
        ...props,
        ...reChartsProps,
      }
    },
    [propClassName, reChartsProps],
  )

  return {
    getContainerProps,
  }
}

export type UseChartReturn = ReturnType<typeof useChart>

export type UseLegendProps = {}

export const useLegend = ({}: UseLegendProps = {}) => {
  const { styles } = useChartContext()
  return {
    styles,
  }
}
export type UseLegendReturn = ReturnType<typeof useLegend>

export type UseTooltipProps = {}

export const useTooltip = ({}: UseTooltipProps = {}) => {
  const { styles } = useChartContext()
  return {
    styles,
  }
}
export type UseTooltipReturn = ReturnType<typeof useTooltip>
