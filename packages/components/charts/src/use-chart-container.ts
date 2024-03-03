import { getCSS, useTheme } from "@yamada-ui/core"
import { cx, isNumber, splitObject } from "@yamada-ui/utils"
import { useCallback } from "react"
import type { ResponsiveContainerProps } from "recharts"
import type { ChartPropGetter, ContainerUIProps } from "./chart.types"
import { containerProperties } from "./chart.types"

export type UseChartContainerProps = {
  /**
   *  Props passed down to recharts `ResponsiveContainer` component.
   */
  containerProps?: ContainerUIProps
}

export const useChartContainer = ({
  containerProps = {},
}: UseChartContainerProps) => {
  const { theme } = useTheme()
  const [reChartsProps, uiProps] = splitObject(
    containerProps,
    containerProperties,
  )
  const propClassName = getCSS(uiProps)(theme)

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
