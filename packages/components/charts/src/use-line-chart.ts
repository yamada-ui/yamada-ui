import { useTheme, getCSS } from "@yamada-ui/core"
import type { CSSUIObject, CSSUIProps } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import type { Dict } from "@yamada-ui/utils"
import type { ComponentPropsWithoutRef } from "react"
import { useCallback, useMemo, useState } from "react"
import type { DotProps, LineChart, LineProps } from "recharts"
import { getComponentProps } from "./chart-utils"
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
   * An array of objects with `dataKey` and `color` keys. Determines which data should be consumed from the `data` array.
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
   * @default 1
   */
  fillOpacity?: number
}

type UseLineChartProps = UseLineChartOptions & {
  styles: Dict<CSSUIObject>
}

export const useLineChart = ({
  data,
  series,
  lineChartProps: _lineChartProps = {},
  activeDotProps: _activeDotProps = {},
  dotProps: _dotProps = {},
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

  const lineColors: CSSUIProps["var"] = useMemo(
    () =>
      series.map(({ color }, index) => ({
        __prefix: "ui",
        name: `line-${index}`,
        token: "colors",
        value: color ?? "transparent",
      })),
    [series],
  )

  const referenceLineColors: CSSUIProps["var"] = useMemo(
    () =>
      referenceLineProps
        ? referenceLineProps.map(({ color }, index) => ({
            __prefix: "ui",
            name: `reference-line-${index}`,
            token: "colors",
            value: color ?? "transparent",
          }))
        : [],
    [referenceLineProps],
  )

  const getCSSvariables = useMemo(
    () => [...lineColors, ...referenceLineColors],
    [lineColors, referenceLineColors],
  )

  const [lineChartProps, lineChartClassName] = getComponentProps<Dict, string>(
    [_lineChartProps, lineChartProperties],
    styles.lineChart,
  )(theme)

  const [activeDotProps, activeDotClassName] = getComponentProps<Dict, string>(
    [_activeDotProps, dotProperties],
    styles.activeDot,
  )(theme)

  const [dotProps, dotClassName] = getComponentProps<Dict, string>(
    [_dotProps, dotProperties],
    styles.dot,
  )(theme)

  const lineClassName = getCSS(styles.line)(theme)

  const linePropList = useMemo(
    () =>
      series.map((props, index) => {
        const {
          dataKey,
          strokeDasharray,
          activeDot: _activeDot,
          dot: _dot,
        } = props
        const color = `var(--ui-line-${index})`
        const dimmed = shouldHighlight && highlightedArea !== dataKey
        const [rest, className] = getComponentProps<Dict, string>(
          [props, lineProperties],
          lineClassName,
        )(theme)

        let activeDot: DotProps | boolean

        if (withActiveDots) {
          activeDot = {
            className: cx("ui-line-chart__active-dot", activeDotClassName),
            fill: color,
            stroke: color,
            r: 4,
            ...activeDotProps,
            ...(_activeDot as DotProps),
          }
        } else {
          activeDot = false
        }

        let dot: DotProps | boolean

        if (withDots) {
          dot = {
            className: cx("ui-line-chart__dot", dotClassName),
            fill: color,
            fillOpacity: dimmed ? 0 : 1,
            strokeOpacity: dimmed ? 0 : 1,
            ...dotProps,
            ...(_dot as DotProps),
          }
        } else {
          dot = false
        }

        return {
          color,
          dimmed,
          className,
          ...rest,
          strokeDasharray,
          dataKey,
          activeDot,
          dot,
        }
      }),
    [
      activeDotClassName,
      activeDotProps,
      dotClassName,
      dotProps,
      highlightedArea,
      lineClassName,
      series,
      shouldHighlight,
      theme,
      withActiveDots,
      withDots,
    ],
  )

  const getLineChartProps: ChartPropGetter<
    "div",
    ComponentPropsWithoutRef<typeof LineChart>,
    ComponentPropsWithoutRef<typeof LineChart>
  > = useCallback(
    ({ className, ...props } = {}, ref = null) => ({
      ref,
      className: cx(className, lineChartClassName),
      data,
      layout: layoutType,
      ...props,
      ...lineChartProps,
    }),
    [data, layoutType, lineChartClassName, lineChartProps],
  )

  const getLineProps: RequiredChartPropGetter<
    "div",
    {
      index: number
    },
    Omit<LineProps, "ref">
  > = useCallback(
    ({ index, className: classNameProp, ...props }, ref = null) => {
      const {
        color,
        dimmed,
        className,
        dataKey,
        strokeDasharray,
        activeDot,
        dot,
        ...rest
      } = linePropList[index]

      return {
        ref,
        className: cx(classNameProp, className),
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
        ...rest,
      }
    },
    [connectNulls, curveType, fillOpacity, linePropList, strokeWidth],
  )

  return {
    getLineProps,
    getLineChartProps,
    getCSSvariables,
    setHighlightedArea,
  }
}

export type UseLineChartReturn = ReturnType<typeof useLineChart>
