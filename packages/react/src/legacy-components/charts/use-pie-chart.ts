import type { ComponentPropsWithoutRef } from "react"
import type * as Recharts from "recharts"
import type {
  CSSUIObject,
  CSSUIProps,
  PropGetter,
  RequiredPropGetter,
} from "../../core"
import type { Dict } from "../../utils"
import type { CellProps, PieChartProps, PieProps } from "./chart.types"
import { useCallback, useMemo, useState } from "react"
import { getVar } from "../../core"
import { useTheme } from "../../providers/theme-provider"
import { cx } from "../../utils"
import { getClassName, getComponentProps } from "./chart-utils"
import { pieChartLabel, pieChartLabelLine } from "./pie-chart-label"
import { pieChartProperties, pieProperties } from "./rechart-properties"

export interface UsePieChartOptions {
  /**
   * Chart data.
   */
  data: CellProps[]
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
  fillOpacity?: [number, number] | number
  /**
   * Controls innerRadius of the chart segments.
   * If it is a number, it is the width of the radius.
   * For example, `60` means the radius is `60px` and the diameter is `120px`.
   *
   * @default '0%'
   */
  innerRadius?: number | string
  /**
   * A function to format labels.
   */
  labelFormatter?: (value: number) => string
  /**
   * Distance between chart and label.
   */
  labelOffset?: number
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
   * Determines whether labels should be displayed as percentages.
   *
   * @default false
   */
  percent?: boolean
  /**
   * Controls angle at which chart starts.
   *
   * @default 90
   */
  startAngle?: number
  /**
   * Stroke width for the chart pies.
   *
   * @default 1
   */
  strokeWidth?: number
  /**
   * Determines whether segments labels should have lines that connect the segment with the label.
   *
   * @default false
   */
  withLabelLines?: boolean
  /**
   * Determines whether each segment should have associated label.
   *
   * @default false
   */
  withLabels?: boolean
  /**
   * Props for the cell.
   */
  cellProps?: Partial<CellProps>
  /**
   * Props passed down to recharts `PieChart` component.
   */
  chartProps?: PieChartProps
  /**
   * Props for the pie.
   */
  pieProps?: Partial<PieProps>
}

interface UsePieChartProps extends UsePieChartOptions {
  styles: Dict<CSSUIObject | undefined>
}

export const usePieChart = ({
  data,
  endAngle = -270,
  fillOpacity = 1,
  innerRadius = "0%",
  labelFormatter,
  labelOffset,
  withLabels = false,
  outerRadius = withLabels ? "80%" : "100%",
  paddingAngle = 0,
  percent = false,
  startAngle = 90,
  strokeWidth = 1,
  styles,
  withLabelLines = false,
  ...rest
}: UsePieChartProps) => {
  const { theme } = useTheme()
  const [highlightedArea, setHighlightedArea] = useState<null | string>(null)
  const shouldHighlight = highlightedArea !== null
  const { dimCell, ...computedCellProps } = rest.cellProps ?? {}
  const {
    activeShape = {},
    inactiveShape = {},
    label: labelProps,
    labelLine: labelLineProps,
    ...computedPieProps
  } = rest.pieProps ?? {}

  const cellColors: CSSUIProps["vars"] = useMemo(
    () =>
      data.map(({ color }, index) => ({
        name: `cell-${index}`,
        token: "colors",
        value: color ?? "transparent",
      })),
    [data],
  )

  const pieVars: CSSUIProps["vars"] = useMemo(
    () =>
      [
        ...cellColors,
        { name: "fill-opacity", value: fillOpacity },
      ] as Required<CSSUIProps>["vars"],
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
      fillOpacity: "$fill-opacity",
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
        calcPercent: percent,
        labelFormatter,
        labelOffset,
        styles: styles.label,
        labelProps,
        ...props,
      }),
    [labelOffset, labelProps, styles.label, percent, labelFormatter],
  )

  const labelLine = useCallback(
    (props: any) => {
      return pieChartLabelLine({
        labelOffset,
        styles: styles.labelLine,
        labelLineProps,
        ...props,
      })
    },
    [labelLineProps, labelOffset, styles.labelLine],
  )

  const cellPropList = useMemo(
    () =>
      data.map((props, index) => {
        const { name, dimCell = {}, ...computedProps } = props
        const color = getVar(`cell-${index}`)(theme)
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
          className,
          color,
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

  const getPieChartProps: PropGetter<
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

  const getPieProps: RequiredPropGetter<
    Partial<Recharts.PieProps>,
    Omit<Recharts.PieProps, "ref">
  > = useCallback(
    ({ className, ...props }, ref = null) => ({
      ref,
      className: cx(className, pieClassName),
      activeShape: activeShapeProps,
      data,
      dataKey: "value",
      endAngle,
      inactiveShape: inactiveShapeProps,
      innerRadius,
      isAnimationActive: false,
      label: withLabels ? label : false,
      labelLine: withLabelLines ? labelLine : false,
      outerRadius,
      paddingAngle,
      rootTabIndex: -1,
      startAngle,
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

  const getCellProps: RequiredPropGetter<
    { index: number } & Omit<Recharts.CellProps, "ref">,
    Recharts.CellProps
  > = useCallback(
    ({ className: classNameProp, index, ...props }, ref = null) => {
      const { className, color } = cellPropList[index] ?? {}

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
    setHighlightedArea,
    getCellProps,
    getPieChartProps,
    getPieProps,
  }
}

export type UsePieChartReturn = ReturnType<typeof usePieChart>
