import type { CSSUIObject, PropGetter } from "@yamada-ui/core"
import { useTheme } from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import { cx } from "@yamada-ui/utils"
import type { SVGProps } from "react"
import { useCallback, useMemo } from "react"
import type * as Recharts from "recharts"
import { getComponentProps } from "./chart-utils"
import type {
  ChartAxisType,
  ChartLayoutType,
  XAxisProps,
  YAxisProps,
  AreaChartType,
  LabelProps,
} from "./chart.types"
import {
  labelProperties,
  xAxisProperties,
  yAxisProperties,
} from "./rechart-properties"

export interface UseChartAxisOptions {
  /**
   * The key of a group of data which should be unique in an chart.
   */
  dataKey: string
  /**
   * Controls how chart areas are positioned relative to each other
   *
   * @default `default`
   */
  type?: AreaChartType
  /**
   * Chart orientation.
   *
   * @default 'horizontal'
   */
  layoutType?: ChartLayoutType
  /**
   * The option is the configuration of tick lines.
   *
   * @default 'y'
   */
  tickLine?: ChartAxisType
  /**
   * Specifies which lines should be displayed in the grid.
   *
   * @default 'x'
   */
  gridAxis?: ChartAxisType
  /**
   * If `true`, X axis is visible.
   *
   * @default true
   */
  withXAxis?: boolean
  /**
   * If `true`, Y axis is visible.
   *
   * @default true
   */
  withYAxis?: boolean
  /**
   * Props passed down to recharts 'XAxis' component.
   */
  xAxisProps?: XAxisProps
  /**
   * Props passed down to recharts 'YAxis' component.
   */
  yAxisProps?: YAxisProps
  /**
   * A label to display below the X axis.
   */
  xAxisLabel?: string
  /**
   * A label to display below the Y axis.
   */
  yAxisLabel?: string
  /**
   * Props passed down to recharts 'XAxisLabel' component.
   */
  xAxisLabelProps?: LabelProps
  /**
   * Props passed down to recharts 'YAxisLabel' component.
   */
  yAxisLabelProps?: LabelProps
  /**
   * Unit displayed next to each tick in y-axis.
   */
  unit?: string
  /**
   * A function to format Y axis tick.
   */
  yAxisTickFormatter?: (value: any) => string
  /**
   * A function to format X axis tick.
   */
  xAxisTickFormatter?: (value: any) => string
}

export interface UseChartAxisProps extends UseChartAxisOptions {
  styles: Dict<CSSUIObject>
}

export const useChartAxis = ({
  dataKey,
  type,
  layoutType = "horizontal",
  tickLine = "y",
  gridAxis = "x",
  withXAxis = true,
  withYAxis = true,
  xAxisLabel: xAxisLabelProp,
  yAxisLabel: yAxisLabelProp,
  unit,
  yAxisTickFormatter = type === "percent" && layoutType === "horizontal"
    ? valueToPercent
    : undefined,
  xAxisTickFormatter = type === "percent" && layoutType === "vertical"
    ? valueToPercent
    : undefined,
  styles,
  ...rest
}: UseChartAxisProps) => {
  const { theme } = useTheme()
  const xAxisKey: Recharts.XAxisProps = useMemo(
    () => (layoutType === "vertical" ? { type: "number" } : { dataKey }),
    [dataKey, layoutType],
  )

  const yAxisKey: Recharts.YAxisProps = useMemo(
    () =>
      layoutType === "vertical"
        ? { dataKey, type: "category" }
        : { type: "number" },
    [dataKey, layoutType],
  )
  const withXTickLine =
    gridAxis !== "none" && (tickLine === "x" || tickLine === "xy")
  const withYTickLine =
    gridAxis !== "none" && (tickLine === "y" || tickLine === "xy")
  const getTickLine = (
    withTickLine: boolean,
  ): boolean | SVGProps<SVGTextElement> =>
    withTickLine ? { stroke: "currentColor" } : false
  const xTickLine = getTickLine(withXTickLine)
  const yTickLine = getTickLine(withYTickLine)

  const xAxisLabel = layoutType === "vertical" ? yAxisLabelProp : xAxisLabelProp
  const yAxisLabel = layoutType === "vertical" ? xAxisLabelProp : yAxisLabelProp

  const [xAxisProps, xAxisClassName] = getComponentProps<Dict, string>(
    [rest.xAxisProps ?? {}, xAxisProperties],
    styles.xAxis,
  )(theme)

  const [yAxisProps, yAxisClassName] = getComponentProps<Dict, string>(
    [rest.yAxisProps ?? {}, yAxisProperties],
    styles.yAxis,
  )(theme)

  const [xAxisLabelProps, xAxisLabelClassName] = getComponentProps<
    Dict,
    string
  >(
    [rest.xAxisLabelProps ?? {}, labelProperties],
    styles.xAxisLabel,
  )(theme)

  const [yAxisLabelProps, yAxisLabelClassName] = getComponentProps<
    Dict,
    string
  >(
    [rest.yAxisLabelProps ?? {}, labelProperties],
    styles.yAxisLabel,
  )(theme)

  const getXAxisProps: PropGetter<
    Partial<Recharts.XAxisProps>,
    Recharts.XAxisProps
  > = useCallback(
    ({ className, ...props } = {}) => ({
      className: cx(className, xAxisClassName),
      hide: !withXAxis,
      ...xAxisKey,
      tick: {
        transform: "translate(0, 10)",
        fill: "currentColor",
      },
      stroke: "",
      interval: "preserveStartEnd",
      tickLine: xTickLine,
      minTickGap: 5,
      tickFormatter: xAxisTickFormatter,
      ...props,
      ...(xAxisProps as Recharts.XAxisProps),
    }),
    [
      xAxisClassName,
      withXAxis,
      xAxisKey,
      xTickLine,
      xAxisTickFormatter,
      xAxisProps,
    ],
  )

  const getYAxisProps: PropGetter<
    Partial<Recharts.YAxisProps>,
    Recharts.YAxisProps
  > = useCallback(
    ({ className, ...props } = {}) => ({
      className: cx(className, yAxisClassName),
      hide: !withYAxis,
      axisLine: false,
      ...yAxisKey,
      tickLine: yTickLine,
      tick: {
        transform: "translate(-10, 0)",
        fill: "currentColor",
      },
      allowDecimals: true,
      unit: unit,
      tickFormatter: yAxisTickFormatter,
      ...props,
      ...(yAxisProps as Recharts.YAxisProps),
    }),
    [
      yAxisClassName,
      withYAxis,
      yAxisKey,
      yTickLine,
      unit,
      yAxisTickFormatter,
      yAxisProps,
    ],
  )

  const getXAxisLabelProps: PropGetter<
    Partial<Recharts.LabelProps>,
    Recharts.LabelProps
  > = useCallback(
    ({ className, ...props } = {}) => ({
      className: cx(className, xAxisLabelClassName),
      value: xAxisLabel,
      position: "insideBottom",
      offset: -20,
      ...props,
      ...xAxisLabelProps,
    }),
    [xAxisLabel, xAxisLabelClassName, xAxisLabelProps],
  )

  const getYAxisLabelProps: PropGetter<
    Partial<Recharts.LabelProps>,
    Recharts.LabelProps
  > = useCallback(
    ({ className, ...props } = {}) => ({
      className: cx(className, yAxisLabelClassName),
      value: yAxisLabel,
      position: "insideLeft",
      angle: -90,
      textAnchor: "middle",
      offset: -5,
      ...props,
      ...yAxisLabelProps,
    }),
    [yAxisLabel, yAxisLabelClassName, yAxisLabelProps],
  )

  return {
    getXAxisProps,
    getYAxisProps,
    getXAxisLabelProps,
    getYAxisLabelProps,
  }
}

const valueToPercent = (value: any) => {
  return `${(value * 100).toFixed(0)}%`
}
