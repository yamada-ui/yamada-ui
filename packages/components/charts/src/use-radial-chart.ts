import { useTheme, type CSSUIObject } from "@yamada-ui/core"
import { cx, type Dict } from "@yamada-ui/utils"
import { useCallback, useMemo, type ComponentPropsWithRef } from "react"
import type * as Recharts from "recharts"
import { getComponentProps } from "./chart-utils"
import type {
  ChartPropGetter,
  RadialBarProps,
  RadialChartProps,
  RequiredChartPropGetter,
} from "./chart.types"
import {
  radialBarProperties,
  radialChartProperties,
} from "./rechart-properties"

export type UseRadialChartOptions = {
  /**
   * Chart data.
   */
  data: Dict[]
  /**
   * The key of a group of data which should be unique in an chart.
   */
  dataKey: string
  /**
   * Props passed down to recharts `RadialBarChart` component.
   */
  chartProps?: RadialChartProps
  /**
   * Props for the radialBar.
   */
  radialBarProps?: Partial<RadialBarProps>
}

type UseRadialChartProps = UseRadialChartOptions & {
  styles: Dict<CSSUIObject>
}

export const useRadialChart = ({
  data,
  dataKey,
  styles,
  ...rest
}: UseRadialChartProps) => {
  const { theme } = useTheme()

  const [chartProps, chartClassName] = useMemo(
    () =>
      getComponentProps<Dict, string>(
        [rest.chartProps ?? {}, radialChartProperties],
        styles.chart,
      )(theme),
    [rest.chartProps, styles.chart, theme],
  )

  const [radialBarProps, radialBarClassName] = useMemo(
    () =>
      getComponentProps<Dict, string>(
        [rest.radialBarProps ?? {}, radialBarProperties],
        styles.radialBar,
      )(theme),
    [rest.radialBarProps, styles.radialBar, theme],
  )

  //TODO: 色の指定、データの入れ方
  const getRadialChartProps: ChartPropGetter<
    "div",
    ComponentPropsWithRef<typeof Recharts.RadialBarChart>,
    ComponentPropsWithRef<typeof Recharts.RadialBarChart>
  > = useCallback(
    ({ className, ...props } = {}, ref = null) => ({
      ref,
      className: cx(className, chartClassName),
      data,
      ...chartProps,
      ...props,
    }),
    [chartClassName, chartProps, data],
  )

  //TODO: labelとbackgroundの分離　色の指定
  const getRadialBarProps: RequiredChartPropGetter<
    "div",
    Partial<Recharts.RadialBarProps>,
    Omit<Recharts.RadialBarProps, "ref">
  > = useCallback(
    ({ className, ...props }, ref = null) => ({
      ref,
      className: cx(className, radialBarClassName),
      dataKey,
      ...radialBarProps,
      ...props,
    }),
    [dataKey, radialBarClassName, radialBarProps],
  )

  return { getRadialChartProps, getRadialBarProps }
}

export type UseRadialChartReturn = ReturnType<typeof useRadialChart>
