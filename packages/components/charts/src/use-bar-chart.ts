import {
  type CSSUIObject,
  getCSS,
  useTheme,
  type CSSUIProps,
} from "@yamada-ui/core"
import { type Dict, cx, splitObject, omitObject } from "@yamada-ui/utils"
import {
  type ComponentPropsWithoutRef,
  useCallback,
  useState,
  useId,
  useMemo,
} from "react"
import type { BarChart, BarProps } from "recharts"
import { areaChartProperties, barProperties } from "./chart.types"
import type {
  BarChartSeries,
  BarChartType,
  BarChartUIProps,
  ChartPropGetter,
  LayoutType,
  RequiredChartPropGetter,
} from "./chart.types"

export type UseBarChartOptions = {
  /**
   * Chart data.
   */
  data: Dict[]
  /**
   * An array of objects with `name` and `color` keys. Determines which data should be consumed from the `data` array.
   */
  series: BarChartSeries[]
  /**
   * Controls how chart bars are positioned relative to each other
   *
   * @default `default`
   */
  type?: BarChartType
  /**
   * Chart orientation.
   *
   * @default 'horizontal'
   */
  layoutType?: LayoutType

  /**
   * A tuple of colors used when `type="split"` is set, ignored in all other cases.
   *
   * @default '["red.400", "green.400"]'
   */
  splitColors?: [string, string]
  /**
   * A function to format values on Y axis and inside the tooltip
   */
  valueFormatter?: (value: number) => string
  /**
   * Props passed down to recharts `BarChart` component.
   */
  barChartProps?: BarChartUIProps
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
   * If `true`, tooltip is visible.
   *
   * @default true
   */
  withTooltip?: boolean
  /**
   * If `true`, legend is visible.
   *
   * @default false
   */
  withLegend?: boolean
  /**
   * Specifies the duration of animation, the unit of this option is ms.
   *
   * @default 0
   */
  tooltipAnimationDuration?: number
  /**
   * Chart orientation.
   *
   * @default 'horizontal'
   */
  orientation?: LayoutType
  /**
   * Determines whether points with `null` values should be connected.
   *
   * @default true
   */
  connectNulls?: boolean
  /**
   * Controls fill opacity of all bars.
   *
   * @default 1
   */
  fillOpacity?: number
}

export type UseBarChartProps = UseBarChartOptions & {
  styles: Dict<CSSUIObject>
}

export const useBarChart = ({
  data,
  series,
  type,
  barChartProps = {},
  layoutType = "horizontal",
  splitColors = ["red.400", "green.400"],
  connectNulls = true,
  styles,
}: UseBarChartProps) => {
  const uuid = useId()
  const { theme } = useTheme()
  const [highlightedArea, setHighlightedArea] = useState<string | null>(null)

  const stacked = type === "stacked" || type === "percent"

  const shouldHighlight = highlightedArea !== null

  const areaColors: CSSUIProps["var"] = useMemo(
    () =>
      series.map((item, index) => ({
        name: `bar-${index}`,
        token: "colors",
        value: item.color ?? "transparent",
      })),
    [series],
  )

  const areaSplitColors: CSSUIProps["var"] = useMemo(
    () =>
      splitColors.map((color, index) => ({
        name: `barsplit-${index}`,
        token: "colors",
        value: color,
      })),
    [splitColors],
  )

  const getBarProps: RequiredChartPropGetter<
    "div",
    {
      item: BarChartSeries
      index: number
    },
    Omit<BarProps, "ref">
  > = useCallback(
    ({ item, index, className, ...props }, ref = null) => {
      const id = `${uuid}-${item.color}`
      const color = `var(--ui-bar-${index})`
      const dimmed = shouldHighlight && highlightedArea !== item.dataKey
      const [barReChartsProps, barUIProps] = splitObject(item, barProperties)
      const areaStyleClassName = getCSS(styles.area)(theme)
      const areaClassName = getCSS(barUIProps as CSSUIObject)(theme)

      return {
        ref,
        className: cx(className, areaClassName, areaStyleClassName),
        id,
        name: item.dataKey as string,
        dataKey: item.dataKey,
        fill: color,
        stroke: color,
        isAnimationActive: false,
        connectNulls,
        stackId: stacked ? "stack" : undefined,
        fillOpacity: dimmed ? 0.1 : 1,
        strokeOpacity: dimmed ? 0.2 : 0,
        strokeDasharray: item.strokeDasharray,
        ...(props as Omit<BarProps, "dataKey">),
        ...omitObject(barReChartsProps, ["dataKey", "color"]),
      }
    },
    [
      uuid,
      shouldHighlight,
      highlightedArea,
      styles.area,
      theme,
      connectNulls,
      stacked,
    ],
  )

  const getBarChartProps: ChartPropGetter<
    "div",
    ComponentPropsWithoutRef<typeof BarChart>,
    ComponentPropsWithoutRef<typeof BarChart>
  > = useCallback(
    ({ className, ...props } = {}, ref = null) => {
      const [reChartsProps, uiProps] = splitObject(
        barChartProps,
        areaChartProperties,
      )
      const styleClassName = getCSS(styles.barChart)(theme)
      const propClassName = getCSS(uiProps)(theme)

      return {
        ref,
        className: cx(className, propClassName, styleClassName),
        data,
        stackOffset: type === "percent" ? "expand" : undefined,
        layout: layoutType,
        ...props,
        ...reChartsProps,
      }
    },
    [barChartProps, data, layoutType, styles.barChart, theme, type],
  )

  const barVars = useMemo(() => {
    return [...areaColors, ...areaSplitColors]
  }, [areaColors, areaSplitColors])

  return {
    barVars,
    getBarProps,
    getBarChartProps,
    setHighlightedArea,
  }
}

export type UseBarChartReturn = ReturnType<typeof useBarChart>
