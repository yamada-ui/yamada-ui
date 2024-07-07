import { useTheme, type CSSUIObject, type CSSUIProps } from "@yamada-ui/core"
import { cx, type Dict } from "@yamada-ui/utils"
import type { ComponentPropsWithoutRef } from "react"
import { useCallback, useMemo, useState } from "react"
import type * as Recharts from "recharts"
import { getClassName, getComponentProps } from "./chart-utils"
import type {
  CellProps,
  ChartPropGetter,
  PieChartProps,
  PieProps,
  RequiredChartPropGetter,
} from "./chart.types"
import { pieChartLabel, pieChartLabelLine } from "./pie-chart-label"
import { pieChartProperties, pieProperties } from "./rechart-properties"

export type UsePieChartOptions = {
  /**
   * Chart data.
   */
  data: CellProps[]
  /**
   * Props passed down to recharts `PieChart` component.
   */
  chartProps?: PieChartProps
  /**
   * Props for the pie.
   */
  pieProps?: Partial<PieProps>
  /**
   * Props for the cell.
   */
  cellProps?: Partial<CellProps>
  /**
   * Determines whether each segment should have associated label.
   *
   * @default false
   */
  withLabels?: boolean
  /**
   * Determines whether segments labels should have lines that connect the segment with the label.
   *
   * @default false
   */
  withLabelLines?: boolean
  /**
   * Distance between chart and label.
   */
  labelOffset?: number
  /**
   * Determines whether labels should be displayed as percentages.
   *
   * @default false
   */
  isParcent?: boolean
  /**
   * Controls innerRadius of the chart segments.
   * If it is a number, it is the width of the radius.
   * For example, `60` means the radius is `60px` and the diameter is `120px`.
   *
   * @default '0%'
   */
  innerRadius?: number | string
  /**
   * Controls thickness of the chart segments. If it is a number, it is calculated as px.
   * If it is a number, it is the width of the radius.
   * For example, `60` means the radius is `60px` and the diameter is `120px`.
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
   * Stroke width for the chart pies.
   *
   * @default 1
   */
  strokeWidth?: number
  /**
   * Controls angle at which chart starts.
   *
   * @default 90
   */
  startAngle?: number
  /**
   * Controls angle at which chart ends.
   *
   * @default -270
   */
  endAngle?: number
  /**
   * Controls fill opacity of all pies.
   *
   * @default 1
   */
  fillOpacity?: number | [number, number]
  /**
   * A function to format values inside the tooltip.
   */
  valueFormatter?: (value: number) => string
}

type UsePieChartProps = UsePieChartOptions & {
  styles: Dict<CSSUIObject>
}

export const usePieChart = ({
  data,
  withLabels = false,
  withLabelLines = false,
  labelOffset,
  isParcent = false,
  strokeWidth = 1,
  fillOpacity = 1,
  innerRadius = "0%",
  outerRadius = withLabels ? "80%" : "100%",
  paddingAngle = 0,
  startAngle = 90,
  endAngle = -270,
  valueFormatter,
  styles,
  ...rest
}: UsePieChartProps) => {
  const { theme } = useTheme()
  const [highlightedArea, setHighlightedArea] = useState<string | null>(null)
  const shouldHighlight = highlightedArea !== null
  const { dimCell, ...computedCellProps } = rest.cellProps ?? {}
  const {
    activeShape = {},
    inactiveShape = {},
    label: labelProps,
    labelLine: labelLineProps,
    ...computedPieProps
  } = rest.pieProps ?? {}

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

  const pieVars: CSSUIProps["var"] = useMemo(
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

  const [pieProps, pieClassName] = useMemo(
    () =>
      getComponentProps<Dict, string>(
        [computedPieProps, pieProperties],
        styles.pie,
      )(theme),
    [computedPieProps, styles.pie, theme],
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

  const activeShapeProps = useMemo(
    () =>
      getComponentProps<Dict, string>(
        [{ _focus: { outline: "none" }, ...activeShape }, pieProperties],
        styles.activeShape,
      )(theme, true),
    [activeShape, styles.activeShape, theme],
  )

  const inactiveShapeProps = useMemo(
    () =>
      getComponentProps<Dict, string>(
        [inactiveShape, pieProperties],
        styles.inactiveShape,
      )(theme, true),
    [inactiveShape, styles.inactiveShape, theme],
  )

  const label: Recharts.PieLabel = useCallback(
    (props: any) =>
      pieChartLabel({
        labelOffset,
        isParcent,
        labelProps,
        valueFormatter,
        styles: styles.label,
        ...props,
      }),
    [isParcent, labelOffset, labelProps, styles.label, valueFormatter],
  )

  const labelLine = useCallback(
    (props: any) => {
      return pieChartLabelLine({
        labelOffset,
        labelLineProps,
        styles: styles.labelLine,
        ...props,
      })
    },
    [labelLineProps, labelOffset, styles.labelLine],
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

  const getPieChartProps: ChartPropGetter<
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

  const getPieProps: RequiredChartPropGetter<
    "div",
    Partial<Recharts.PieProps>,
    Omit<Recharts.PieProps, "ref">
  > = useCallback(
    ({ className, ...props }, ref = null) => ({
      ref,
      className: cx(className, pieClassName),
      dataKey: "value",
      data,
      rootTabIndex: -1,
      outerRadius,
      innerRadius,
      paddingAngle,
      startAngle,
      endAngle,
      isAnimationActive: false,
      label: withLabels ? label : false,
      labelLine: withLabelLines ? labelLine : false,
      activeShape: activeShapeProps,
      inactiveShape: inactiveShapeProps,
      ...(props as Omit<Recharts.PieProps, "dataKey">),
      ...pieProps,
    }),
    [
      pieClassName,
      data,
      outerRadius,
      innerRadius,
      paddingAngle,
      startAngle,
      endAngle,
      withLabels,
      label,
      withLabelLines,
      labelLine,
      activeShapeProps,
      inactiveShapeProps,
      pieProps,
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
    pieVars,
    getPieProps,
    getPieChartProps,
    getCellProps,
    setHighlightedArea,
  }
}

export type UsePieChartReturn = ReturnType<typeof usePieChart>
