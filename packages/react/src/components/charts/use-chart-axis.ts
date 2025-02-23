import type { SVGProps } from "react"
import type * as Recharts from "recharts"
import type { CSSObject, PropGetter } from "../../core"
import type { Dict } from "../../utils"
import type {
  AreaChartType,
  ChartAxisType,
  ChartLayoutType,
  LabelProps,
  XAxisProps,
  YAxisProps,
} from "./chart.types"
import { useCallback, useMemo } from "react"
import { useTheme } from "../../providers/theme-provider"
import { cx } from "../../utils"
import { getComponentProps } from "./chart-utils"
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
   * Specifies which lines should be displayed in the grid.
   *
   * @default 'x'
   */
  gridAxis?: ChartAxisType
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
   * Unit displayed next to each tick in y-axis.
   */
  unit?: string
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
   * A label to display below the X axis.
   */
  xAxisLabel?: string
  /**
   * A function to format X axis tick.
   */
  xAxisTickFormatter?: (value: any) => string
  /**
   * A label to display below the Y axis.
   */
  yAxisLabel?: string
  /**
   * A function to format Y axis tick.
   */
  yAxisTickFormatter?: (value: any) => string
  /**
   * Props passed down to recharts 'XAxisLabel' component.
   */
  xAxisLabelProps?: LabelProps
  /**
   * Props passed down to recharts 'XAxis' component.
   */
  xAxisProps?: XAxisProps
  /**
   * Props passed down to recharts 'YAxisLabel' component.
   */
  yAxisLabelProps?: LabelProps
  /**
   * Props passed down to recharts 'YAxis' component.
   */
  yAxisProps?: YAxisProps
}

interface UseChartAxisProps extends UseChartAxisOptions {
  styles: Dict<CSSObject | undefined>
}

export const useChartAxis = ({
  type,
  dataKey,
  gridAxis = "x",
  layoutType = "horizontal",
  styles,
  tickLine = "y",
  unit,
  withXAxis = true,
  withYAxis = true,
  xAxisLabel: xAxisLabelProp,
  xAxisTickFormatter = type === "percent" && layoutType === "vertical"
    ? valueToPercent
    : undefined,
  yAxisLabel: yAxisLabelProp,
  yAxisTickFormatter = type === "percent" && layoutType === "horizontal"
    ? valueToPercent
    : undefined,
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
        ? { type: "category", dataKey }
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
      stroke: "",
      tick: {
        fill: "currentColor",
        transform: "translate(0, 10)",
      },
      tickFormatter: xAxisTickFormatter,
      tickLine: xTickLine,
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
      axisLine: false,
      hide: !withYAxis,
      ...yAxisKey,
      allowDecimals: true,
      tick: {
        fill: "currentColor",
        transform: "translate(-10, 0)",
      },
      tickFormatter: yAxisTickFormatter,
      tickLine: yTickLine,
      unit: unit,
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
      offset: -20,
      position: "insideBottom",
      value: xAxisLabel,
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
      angle: -90,
      offset: -5,
      position: "insideLeft",
      textAnchor: "middle",
      value: yAxisLabel,
      ...props,
      ...yAxisLabelProps,
    }),
    [yAxisLabel, yAxisLabelClassName, yAxisLabelProps],
  )

  return {
    getXAxisLabelProps,
    getXAxisProps,
    getYAxisLabelProps,
    getYAxisProps,
  }
}

const valueToPercent = (value: any) => {
  return `${(value * 100).toFixed(0)}%`
}
