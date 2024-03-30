import { useTheme, type CSSUIObject, type CSSUIProps } from "@yamada-ui/core"
import { cx, type Dict } from "@yamada-ui/utils"
import type { ComponentPropsWithoutRef } from "react"
import { useCallback, useMemo } from "react"
import type * as Recharts from "recharts"
import { getClassName, getComponentProps } from "./chart-utils"
import type {
  CellProps,
  ChartPropGetter,
  DonutChartProps,
  DonutProps,
  RequiredChartPropGetter,
} from "./chart.types"
import { pieChartProperties } from "./rechart-properties"

export type UseDonutChartOptions = {
  /**
   * Chart data.
   */
  data: CellProps[]
  /**
   * Props passed down to recharts `DonutChart` component.
   */
  chartProps?: DonutChartProps
  /**
   * Props for the donut.
   */
  donutProps?: Partial<DonutProps>
  /**
   * Props for the cell.
   */
  cellProps?: Partial<CellProps>
  /**
   * Determines whether each segment should have associated label.
   *
   * @default false
   */
  withLabel?: boolean
  /**
   * Determines whether segments labels should have lines that connect the segment with the label.
   *
   * @default false
   */
  withLabelsLine?: boolean
  /**
   * Controls innerRadius of the chart segments.
   *
   * @default '60%'
   */
  innerRadius?: number | string
  /**
   * Controls thickness of the chart segments.
   *
   * @default '80%'
   */
  outerRadius?: number | string
  /**
   * Controls padding between segments.
   *
   * @default 0
   */
  paddingAngle?: number
  /**
   * Stroke width for the chart donuts.
   *
   * @default 0
   */
  strokeWidth?: number
  /**
   * Controls angle at which chart starts.
   *
   * @default 0
   */
  startAngle?: number
  /**
   * Controls angle at which chart ends.
   *
   * @default 360
   */
  endAngle?: number
  /**
   * Controls fill opacity of all donuts.
   *
   * @default 1
   */
  fillOpacity?: number | [number, number]
  /**
   * A function to format values inside the tooltip.
   */
  valueFormatter?: (value: number) => string
}

type UseDonutChartProps = UseDonutChartOptions & {
  styles: Dict<CSSUIObject>
}

export const useDonutChart = ({
  data,
  withLabel = false,
  withLabelsLine = false,
  strokeWidth = 1,
  fillOpacity = 1,
  innerRadius = "60%",
  outerRadius = "80%",
  paddingAngle = 0,
  startAngle = 0,
  endAngle = 360,
  styles,
  ...rest
}: UseDonutChartProps) => {
  const { theme } = useTheme()

  const cellColors: CSSUIProps["var"] = useMemo(
    () =>
      data.map(({ color }, index) => ({
        __prefix: "ui",
        name: `cell-${index}`,
        token: "colors",
        value: color ?? "transparent",
      })),
    [data],
  )

  const donutVars: CSSUIProps["var"] = useMemo(
    () =>
      [
        ...cellColors,
        { __prefix: "ui", name: "fill-opacity", value: fillOpacity },
      ] as Required<CSSUIProps>["var"],
    [fillOpacity, cellColors],
  )

  const [chartProps, donutChartClassName] = useMemo(() => {
    return getComponentProps<Dict, string>(
      [rest.chartProps ?? {}, pieChartProperties],
      styles.chart,
    )(theme)
  }, [rest.chartProps, styles.chart, theme])

  const cellClassName = useMemo(() => {
    const resolvedCellProps = {
      fillOpacity: "var(--ui-fill-opacity)",
      ...rest.cellProps,
    }

    return getClassName(resolvedCellProps)(theme)
  }, [rest.cellProps, theme])

  const cellPropList = useMemo(
    () =>
      data.map((props, index) => {
        const color = `var(--ui-cell-${index})`
        const className = getClassName({ cellClassName, ...props })(theme)

        return {
          color,
          className,
        }
      }),
    [cellClassName, data, theme],
  )

  const getDonutChartProps: ChartPropGetter<
    "div",
    ComponentPropsWithoutRef<typeof Recharts.PieChart>,
    ComponentPropsWithoutRef<typeof Recharts.PieChart>
  > = useCallback(
    ({ className, ...props } = {}, ref = null) => ({
      ref,
      className: cx(className, donutChartClassName),
      ...props,
      ...chartProps,
    }),
    [chartProps, donutChartClassName],
  )

  const getDonutProps: ChartPropGetter<
    "div",
    Partial<Recharts.PieProps>,
    Omit<Recharts.PieProps, "ref">
  > = useCallback(
    (props, ref = null) => ({
      ref,
      dataKey: "value",
      data,
      outerRadius,
      innerRadius,
      paddingAngle,
      startAngle,
      endAngle,
      isAnimationActive: false,
      label: withLabel,
      labelLine: withLabelsLine,
      ...(props as Omit<Recharts.PieProps, "dataKey">),
      ...rest,
    }),
    [
      data,
      endAngle,
      innerRadius,
      outerRadius,
      paddingAngle,
      rest,
      startAngle,
      withLabel,
      withLabelsLine,
    ],
  )

  const getCellProps: RequiredChartPropGetter<
    "div",
    Omit<Recharts.CellProps, "ref"> & { index: number },
    Omit<Recharts.CellProps, "ref">
  > = useCallback(
    ({ index, className: classNameProp, ...props }, ref = null) => {
      const { className, color } = cellPropList[index]

      return {
        ref,
        className: cx(classNameProp, className),
        fill: color,
        stroke: color,
        strokeWidth,
        ...(props as Recharts.CellProps),
        ...rest,
      }
    },
    [cellPropList, rest, strokeWidth],
  )

  return {
    donutVars,
    getDonutProps,
    getDonutChartProps,
    getCellProps,
  }
}

export type UseDonutChartReturn = ReturnType<typeof useDonutChart>
