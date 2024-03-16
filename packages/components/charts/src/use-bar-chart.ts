import { type CSSUIObject, useTheme, type CSSUIProps } from "@yamada-ui/core"
import { type Dict, cx } from "@yamada-ui/utils"
import {
  type ComponentPropsWithoutRef,
  useCallback,
  useState,
  useId,
  useMemo,
} from "react"
import type { BarChart, BarProps } from "recharts"
import { getComponentProps } from "./chart-utils"
import { areaChartProperties, barProperties } from "./chart.types"
import type {
  BarChartSeries,
  BarChartType,
  BarChartUIProps,
  ChartPropGetter,
  LayoutType,
  ReferenceLineUIProps,
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
   * Reference lines that should be displayed on the chart.
   */
  referenceLineProps?: ReferenceLineUIProps[]
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
  barChartProps: _barChartProps = {},
  layoutType = "horizontal",
  connectNulls = true,
  referenceLineProps = [],
  fillOpacity = 1,
  styles,
}: UseBarChartProps) => {
  const uuid = useId()
  const { theme } = useTheme()
  const [highlightedArea, setHighlightedArea] = useState<string | null>(null)

  const stacked = type === "stacked" || type === "percent"
  const shouldHighlight = highlightedArea !== null

  const barColors: CSSUIProps["var"] = useMemo(
    () =>
      series.map(({ color }, index) => ({
        __prefix: "ui",
        name: `bar-${index}`,
        token: "colors",
        value: color ?? "transparent",
      })),
    [series],
  )

  const referenceLineColors: CSSUIProps["var"] = useMemo(
    () =>
      referenceLineProps.map(({ color }, index) => ({
        __prefix: "ui",
        name: `reference-line-${index}`,
        token: "colors",
        value: color ?? "transparent",
      })),
    [referenceLineProps],
  )

  const barVars: CSSUIProps["var"] = useMemo(() => {
    return [...barColors, ...referenceLineColors]
  }, [barColors, referenceLineColors])

  const [barChartProps, barChartClassName] = getComponentProps<Dict, string>(
    [_barChartProps, areaChartProperties],
    styles.barChart,
  )(theme)

  const barPropsList = useMemo(
    () =>
      series.map((props, index) => {
        const { dataKey } = props
        const id = `${uuid}-${dataKey}`
        const color = `var(--ui-bar-${index})`
        const dimmed = shouldHighlight && highlightedArea !== dataKey
        const [rest, className] = getComponentProps(
          [props, barProperties],
          styles.area,
        )(theme)

        return {
          id,
          dimmed,
          className,
          ...rest,
          color,
          dataKey,
        }
      }),
    [highlightedArea, series, shouldHighlight, styles.area, theme, uuid],
  )

  //TODO: dimmed効いてないverticalで表示されない
  const getBarProps: RequiredChartPropGetter<
    "div",
    {
      index: number
    },
    Omit<BarProps, "ref">
  > = useCallback(
    ({ index, className: classNameProp, ...props }, ref = null) => {
      const { id, dimmed, className, color, dataKey, ...rest } =
        barPropsList[index]

      return {
        ref,
        className: cx(classNameProp, className),
        id,
        name: dataKey as string,
        dataKey,
        fill: color,
        stroke: color,
        isAnimationActive: false,
        connectNulls,
        stackId: stacked ? "stack" : undefined,
        fillOpacity: dimmed ? 0.1 : fillOpacity,
        strokeOpacity: dimmed ? 0.2 : 0,
        ...(props as Omit<BarProps, "dataKey">),
        ...rest,
      }
    },
    [barPropsList, connectNulls, fillOpacity, stacked],
  )

  const getBarChartProps: ChartPropGetter<
    "div",
    ComponentPropsWithoutRef<typeof BarChart>,
    ComponentPropsWithoutRef<typeof BarChart>
  > = useCallback(
    ({ className, ...props } = {}, ref = null) => ({
      ref,
      className: cx(className, barChartClassName),
      data,
      stackOffset: type === "percent" ? "expand" : undefined,
      layout: layoutType,
      ...props,
      ...barChartProps,
    }),
    [barChartClassName, barChartProps, data, layoutType, type],
  )

  return {
    barVars,
    getBarProps,
    getBarChartProps,
    setHighlightedArea,
  }
}

export type UseBarChartReturn = ReturnType<typeof useBarChart>
