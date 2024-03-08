import { useTheme, getCSS } from "@yamada-ui/core"
import type { CSSUIObject, CSSUIProps } from "@yamada-ui/core"
import { splitObject, cx, omitObject } from "@yamada-ui/utils"
import type { Dict } from "@yamada-ui/utils"
import type { ComponentPropsWithoutRef } from "react"
import { useCallback, useMemo, useState } from "react"
import type { DotProps, LineChart, LineProps } from "recharts"
import {
  dotProperties,
  lineChartProperties,
  lineProperties,
} from "./chart.types"
import type {
  DotUIProps,
  LayoutType,
  LineChartSeries,
  LineChartUIProps,
  ReferenceLineUIProps,
  ChartPropGetter,
  CurveType,
  RequiredChartPropGetter,
} from "./chart.types"

export type UseLineChartOptions = {
  /**
   * Chart data.
   */
  data: Dict[]
  /**
   * An array of objects with `name` and `color` keys. Determines which data should be consumed from the `data` array.
   */
  series: LineChartSeries[]
  /**
   *  Props passed down to recharts `LineChart` component.
   */
  lineChartProps?: LineChartUIProps
  /**
   *  Props passed down to all dots. Ignored if `withDots={false}` is set.
   */
  dotProps?: DotUIProps
  /**
   *  Props passed down to all active dots. Ignored if `withDots={false}` is set.
   */
  activeDotProps?: DotUIProps
  /**
   * Chart orientation.
   *
   * @default 'horizontal'
   */
  layoutType?: LayoutType
  /**
   *  Determines whether dots should be displayed.
   *
   * @default true
   */
  withDots?: boolean
  /**
   *  Determines whether activeDots should be displayed.
   *
   * @default true
   */
  withActiveDots?: boolean
  /**
   *  Type of the curve.
   *
   * @default `monotone`
   */
  curveType?: CurveType
  /**
   *  Stroke width for the chart areas.
   *
   * @default 2
   */
  strokeWidth?: number
  /**
   *  Determines whether points with `null` values should be connected.
   *
   * @default true
   */
  connectNulls?: boolean
  /**
   * Reference lines that should be displayed on the chart.
   */
  referenceLineProps?: ReferenceLineUIProps[]
  /**
   *  Controls fill opacity of all areas.
   *
   * @default 0.2
   */
  fillOpacity?: number
}

type UseLineChartProps = UseLineChartOptions & {
  styles: Dict<CSSUIObject>
}

export const useLineChart = ({
  data,
  series,
  lineChartProps = {},
  activeDotProps = {},
  dotProps = {},
  layoutType = "horizontal",
  withDots = true,
  withActiveDots = true,
  curveType = "monotone",
  strokeWidth = 2,
  connectNulls = true,
  referenceLineProps,
  fillOpacity = 1,
  styles,
}: UseLineChartProps) => {
  const { theme } = useTheme()
  const [highlightedArea, setHighlightedArea] = useState<string | null>(null)
  const shouldHighlight = highlightedArea !== null

  const [lineChartReChartsProps, lineChartUiProps] = splitObject(
    lineChartProps,
    lineChartProperties,
  )
  const lineChartStyleClassName = getCSS(styles.lineChart)(theme)
  const lineChartPropClassName = getCSS(lineChartUiProps)(theme)

  const getLineChartProps: ChartPropGetter<
    "div",
    ComponentPropsWithoutRef<typeof LineChart>,
    ComponentPropsWithoutRef<typeof LineChart>
  > = useCallback(
    ({ className, ...props } = {}, ref = null) => ({
      ref,
      className: cx(className, lineChartPropClassName, lineChartStyleClassName),
      data,
      layout: layoutType,
      ...props,
      ...lineChartReChartsProps,
    }),
    [
      data,
      layoutType,
      lineChartPropClassName,
      lineChartReChartsProps,
      lineChartStyleClassName,
    ],
  )

  const lineStyleClassName = getCSS(styles.line)(theme)
  const linePropList = series.map((props, index) => {
    const color = `var(--ui-line-${index})`
    const dimmed = shouldHighlight && highlightedArea !== props.dataKey
    const [lineReChartsProps, lineUIProps] = splitObject(props, lineProperties)
    const lineClassName = getCSS(lineUIProps as CSSUIObject)(theme)

    return {
      color,
      dimmed,
      lineReChartsProps,
      lineClassName,
      dataKey: props.dataKey,
      strokeDasharray: props.strokeDasharray,
    }
  })
  const [activeDotReChartsProps, activeDotUIProps] = splitObject<Dict, string>(
    activeDotProps,
    dotProperties,
  )
  const activeDotStyleClassName = getCSS(styles.activeDot)(theme)
  const activeDotClassName = getCSS(activeDotUIProps)(theme)
  const [dotReChartsProps, dotUIProps] = splitObject<Dict, string>(
    dotProps,
    dotProperties,
  )
  const dotStyleClassName = getCSS(styles.dot)(theme)
  const dotClassName = getCSS(dotUIProps)(theme)

  const getLineProps: RequiredChartPropGetter<
    "div",
    {
      index: number
    },
    Omit<LineProps, "ref">
  > = useCallback(
    ({ index, className, ...props }, ref = null) => {
      const {
        color,
        dimmed,
        lineReChartsProps,
        lineClassName,
        dataKey,
        strokeDasharray,
      } = linePropList[index]

      let activeDot: DotProps | boolean
      if (withActiveDots) {
        activeDot = {
          className: cx(className, activeDotClassName, activeDotStyleClassName),
          fill: color,
          stroke: color,
          r: 4,
          ...activeDotReChartsProps,
          ...(lineReChartsProps["activeDot"] as DotProps),
        }
      } else {
        activeDot = false
      }

      let dot: DotProps | boolean
      if (withDots) {
        dot = {
          className: cx(className, dotClassName, dotStyleClassName),
          fill: color,
          fillOpacity: dimmed ? 0 : 1,
          strokeOpacity: dimmed ? 0 : 1,
          ...dotReChartsProps,
          ...(lineReChartsProps["dot"] as DotProps),
        }
      } else {
        dot = false
      }

      return {
        ref,
        className: cx(className, lineClassName, lineStyleClassName),
        activeDot,
        dot,
        name: dataKey as string,
        type: curveType,
        dataKey,
        fill: color,
        strokeWidth,
        stroke: color,
        isAnimationActive: false,
        connectNulls,
        fillOpacity: dimmed ? 0 : fillOpacity,
        strokeOpacity: dimmed ? 0.5 : fillOpacity,
        strokeDasharray,
        ...(props as Omit<LineProps, "dataKey">),
        ...omitObject(lineReChartsProps, [
          "dataKey",
          "dot",
          "activeDot",
          "color",
        ]),
      }
    },
    [
      activeDotClassName,
      activeDotReChartsProps,
      activeDotStyleClassName,
      connectNulls,
      curveType,
      dotClassName,
      dotReChartsProps,
      dotStyleClassName,
      fillOpacity,
      linePropList,
      lineStyleClassName,
      strokeWidth,
      withActiveDots,
      withDots,
    ],
  )

  const lineColors: CSSUIProps["var"] = useMemo(
    () =>
      series.map((item, index) => ({
        name: `line-${index}`,
        token: "colors",
        value: item.color ?? "gray",
      })),
    [series],
  )
  const referenceLineColors: CSSUIProps["var"] = useMemo(
    () =>
      referenceLineProps
        ? referenceLineProps.map((line, index) => ({
            name: `reference-line-${index}`,
            token: "colors",
            value: line.color ?? "gray",
          }))
        : [],
    [referenceLineProps],
  )
  const getCSSvariables = useMemo(
    () => [...lineColors, ...referenceLineColors],
    [lineColors, referenceLineColors],
  )

  return {
    getLineProps,
    getLineChartProps,
    getCSSvariables,
    setHighlightedArea,
  }
}

export type UseLineChartReturn = ReturnType<typeof useLineChart>
