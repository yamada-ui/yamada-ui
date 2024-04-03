import { useTheme, type CSSUIObject, type CSSUIProps } from "@yamada-ui/core"
import { cx, type Dict } from "@yamada-ui/utils"
import type { ComponentPropsWithoutRef } from "react"
import { useCallback, useMemo, useState } from "react"
import type * as Recharts from "recharts"
import { getClassName, getComponentProps } from "./chart-utils"
import type {
  CellProps,
  ChartPropGetter,
  DonutChartProps,
  DonutProps,
  RequiredChartPropGetter,
} from "./chart.types"
import { pieChartProperties, pieProperties } from "./rechart-properties"

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
  const [highlightedArea, setHighlightedArea] = useState<string | null>(null)
  const shouldHighlight = highlightedArea !== null
  const { dimCell, ...computedCellProps } = rest.cellProps ?? {}
  const {
    activeShape = {},
    inactiveShape = {},
    ...computedDonutProps
  } = rest.donutProps ?? {}

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

  const [chartProps, chartClassName] = useMemo(
    () =>
      getComponentProps<Dict, string>(
        [rest.chartProps ?? {}, pieChartProperties],
        styles.chart,
      )(theme),
    [rest.chartProps, styles.chart, theme],
  )

  const [donutProps, donutClassName] = useMemo(
    () =>
      getComponentProps<Dict, string>(
        [computedDonutProps, pieProperties],
        styles.donut,
      )(theme),
    [computedDonutProps, styles.donut, theme],
  )

  const cellClassName = useMemo(() => {
    const resolvedCellProps = {
      fillOpacity: "var(--ui-fill-opacity)",
      ...styles.cell,
      ...computedCellProps,
    }

    return getClassName(resolvedCellProps)(theme)
  }, [computedCellProps, styles.cell, theme])

  const dimCellClassName = useMemo(() => {
    const resolvedDimCell = { fillOpacity: 0.3, strokeOpacity: 0, ...dimCell }

    return getClassName(resolvedDimCell)(theme)
  }, [dimCell, theme])

  const resolvedActiveShape = useMemo(
    () =>
      getComponentProps<Dict, string>(
        [activeShape, pieProperties],
        styles.activeShape,
      )(theme, true),
    [activeShape, styles.activeShape, theme],
  )

  const resolvedInactiveShape = useMemo(
    () =>
      getComponentProps<Dict, string>(
        [inactiveShape, pieProperties],
        styles.inactiveShape,
      )(theme, true),
    [inactiveShape, styles.inactiveShape, theme],
  )

  const cellPropList = useMemo(
    () =>
      data.map((props, index) => {
        const { name, dimCell = {}, ...computedProps } = props
        const color = `var(--ui-cell-${index})`
        const dimmed = shouldHighlight && highlightedArea !== name
        const resolvedProps = {
          ...computedProps,
          ...(dimmed ? dimCell : {}),
        }

        const className = getClassName(
          {
            cellClassName,
            ...resolvedProps,
          },
          dimmed ? dimCellClassName : undefined,
        )(theme)

        return {
          color,
          className,
        }
      }),
    [
      cellClassName,
      data,
      dimCellClassName,
      highlightedArea,
      shouldHighlight,
      theme,
    ],
  )

  const getDonutChartProps: ChartPropGetter<
    "div",
    ComponentPropsWithoutRef<typeof Recharts.PieChart>,
    ComponentPropsWithoutRef<typeof Recharts.PieChart>
  > = useCallback(
    ({ className, ...props } = {}, ref = null) => ({
      ref,
      className: cx(className, chartClassName),
      ...props,
      ...chartProps,
    }),
    [chartProps, chartClassName],
  )

  const getDonutProps: ChartPropGetter<
    "div",
    Partial<Recharts.PieProps>,
    Omit<Recharts.PieProps, "ref">
  > = useCallback(
    ({ className, ...props } = {}, ref = null) => ({
      ref,
      className: cx(className, donutClassName),
      dataKey: "value",
      data,
      outerRadius,
      innerRadius,
      paddingAngle,
      startAngle,
      endAngle,
      isAnimationActive: false,
      //BUG: label and labelLine className is not applied.
      label: withLabel ? { fillOpacity: 1 } : false,
      labelLine: withLabelsLine,
      activeShape: resolvedActiveShape,
      inactiveShape: resolvedInactiveShape,
      ...(props as Omit<Recharts.PieProps, "dataKey">),
      ...donutProps,
    }),
    [
      data,
      donutClassName,
      donutProps,
      endAngle,
      innerRadius,
      outerRadius,
      paddingAngle,
      resolvedActiveShape,
      resolvedInactiveShape,
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
      }
    },
    [cellPropList, strokeWidth],
  )

  return {
    donutVars,
    getDonutProps,
    getDonutChartProps,
    getCellProps,
    setHighlightedArea,
  }
}

export type UseDonutChartReturn = ReturnType<typeof useDonutChart>
