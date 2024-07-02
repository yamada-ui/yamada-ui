import { useTheme } from "@yamada-ui/core"
import type { CSSUIObject, CSSUIProps } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import type { Dict } from "@yamada-ui/utils"
import type { ComponentPropsWithoutRef } from "react"
import { useCallback, useMemo, useState } from "react"
import type * as Recharts from "recharts"
import { getComponentProps } from "./chart-utils"
import type {
  ChartLayoutType,
  LineProps,
  LineChartProps,
  ReferenceLineProps,
  ChartPropGetter,
  ChartCurveType,
  RequiredChartPropGetter,
} from "./chart.types"
import {
  dotProperties,
  lineChartProperties,
  lineProperties,
} from "./rechart-properties"

export type UseLineChartOptions = {
  /**
   * Chart data.
   */
  data: Dict[]
  /**
   * An array of objects with `dataKey` and `color` keys. Determines which data should be consumed from the `data` array.
   */
  series: LineProps[]
  /**
   * Props for the lines.
   */
  lineProps?: Partial<LineProps>
  /**
   * If any two categorical charts have the same syncId,
   * these two charts can sync the position tooltip, and the startIndex, endIndex of Brush.
   */
  syncId?: number | string
  /**
   * Props passed down to recharts `LineChart` component.
   */
  chartProps?: LineChartProps
  /**
   * Chart orientation.
   *
   * @default 'horizontal'
   */
  layoutType?: ChartLayoutType
  /**
   * Determines whether dots should be displayed.
   *
   * @default true
   */
  withDots?: boolean
  /**
   * Determines whether activeDots should be displayed.
   *
   * @default true
   */
  withActiveDots?: boolean
  /**
   * Type of the curve.
   *
   * @default `monotone`
   */
  curveType?: ChartCurveType
  /**
   * Stroke width for the chart lines.
   *
   * @default 2
   */
  strokeWidth?: number
  /**
   * Determines whether points with `null` values should be connected.
   *
   * @default true
   */
  connectNulls?: boolean
  /**
   * Reference lines that should be displayed on the chart.
   */
  referenceLineProps?: ReferenceLineProps[]
  /**
   * Controls fill opacity of all lines.
   *
   * @default 1
   */
  fillOpacity?: number | [number, number]
  /**
   * A label to display below the X axis.
   */
  xAxisLabel?: string
  /**
   * A label to display below the Y axis.
   */
  yAxisLabel?: string
}

type UseLineChartProps = UseLineChartOptions & {
  styles: Dict<CSSUIObject>
}

export const useLineChart = ({
  data,
  series,
  layoutType = "horizontal",
  withDots = true,
  withActiveDots = true,
  curveType = "monotone",
  strokeWidth = 2,
  connectNulls = true,
  referenceLineProps,
  fillOpacity = 1,
  syncId,
  xAxisLabel,
  yAxisLabel,
  styles,
  ...rest
}: UseLineChartProps) => {
  const { theme } = useTheme()
  const [highlightedArea, setHighlightedArea] = useState<string | null>(null)
  const shouldHighlight = highlightedArea !== null
  const {
    dot = {},
    activeDot = {},
    dimDot,
    dimLine,
    ...computedLineProps
  } = rest.lineProps ?? {}

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

  const lineVars: CSSUIProps["var"] = useMemo(
    () => [
      ...lineColors,
      ...referenceLineColors,
      { __prefix: "ui", name: "fill-opacity", value: fillOpacity },
    ],
    [fillOpacity, lineColors, referenceLineColors],
  )

  const [chartProps, lineChartClassName] = useMemo(
    () =>
      getComponentProps<Dict, string>(
        [rest.chartProps ?? {}, lineChartProperties],
        styles.chart,
      )(theme),
    [rest.chartProps, styles.chart, theme],
  )

  const [lineProps, lineClassName] = useMemo(() => {
    const resolvedLineProps = {
      fillOpacity: "var(--ui-fill-opacity)",
      strokeOpacity: "var(--ui-fill-opacity)",
      ...computedLineProps,
    }

    return getComponentProps<Dict, string>(
      [resolvedLineProps, lineProperties],
      styles.line,
    )(theme)
  }, [computedLineProps, styles.line, theme])

  const [dimLineProps, dimLineClassName] = useMemo(() => {
    const resolvedDimLine = { fillOpacity: 0, strokeOpacity: 0.3, ...dimLine }

    return getComponentProps<Dict, string>([resolvedDimLine, lineProperties])(
      theme,
    )
  }, [dimLine, theme])

  const [dotProps, dotClassName] = useMemo(() => {
    const resolvedDot = { fillOpacity: 1, strokeOpacity: 1, ...dot }

    return getComponentProps<Dict, string>(
      [resolvedDot, dotProperties],
      styles.dot,
    )(theme)
  }, [dot, styles.dot, theme])

  const [activeDotProps, activeDotClassName] = useMemo(
    () =>
      getComponentProps<Dict, string>(
        [activeDot, dotProperties],
        styles.activeDot,
      )(theme),
    [activeDot, styles.activeDot, theme],
  )

  const [dimDotProps, dimDotClassName] = useMemo(() => {
    const resolvedDimDot = {
      fillOpacity: 0,
      strokeOpacity: 0,
      ...dimDot,
    }

    return getComponentProps<Dict, string>([resolvedDimDot, dotProperties])(
      theme,
    )
  }, [dimDot, theme])

  const linePropList = useMemo(
    () =>
      series.map((props, index) => {
        const {
          dataKey,
          dot = {},
          activeDot = {},
          dimDot = {},
          dimLine = {},
          ...computedProps
        } = props
        const color = `var(--ui-line-${index})`
        const dimmed = shouldHighlight && highlightedArea !== dataKey
        const computedDimLine = { ...dimLineProps, ...dimLine }
        const resolvedProps = {
          ...lineProps,
          ...computedProps,
          ...(dimmed ? computedDimLine : {}),
        }

        const rest = getComponentProps<Dict, string>(
          [resolvedProps, lineProperties],
          lineClassName,
          dimmed ? dimLineClassName : undefined,
        )(theme, true)

        let resolvedActiveDot: Recharts.DotProps | boolean

        if (withActiveDots) {
          const computedActiveDot = { ...activeDotProps, ...activeDot }

          const [rest, className] = getComponentProps(
            [computedActiveDot, dotProperties],
            activeDotClassName,
          )(theme)

          resolvedActiveDot = {
            className: cx("ui-line-chart__active-dot", className),
            fill: color,
            stroke: color,
            r: 4,
            ...rest,
          } as Recharts.DotProps
        } else {
          resolvedActiveDot = false
        }

        let resolvedDot: Recharts.DotProps | boolean

        if (withDots) {
          const computedDimDot = { ...dimDotProps, ...dimDot }
          const computedDot = {
            ...dotProps,
            ...dot,
            ...(dimmed ? computedDimDot : {}),
          }

          const [rest, className] = getComponentProps(
            [computedDot, dotProperties],
            dotClassName,
            dimmed ? dimDotClassName : undefined,
          )(theme)

          resolvedDot = {
            className: cx("ui-line-chart__dot", className),
            fill: color,
            ...rest,
          } as Recharts.DotProps
        } else {
          resolvedDot = false
        }

        return {
          ...rest,
          color,
          dataKey,
          activeDot: resolvedActiveDot,
          dot: resolvedDot,
        }
      }),
    [
      series,
      shouldHighlight,
      highlightedArea,
      dimLineProps,
      lineProps,
      lineClassName,
      dimLineClassName,
      theme,
      withActiveDots,
      withDots,
      activeDotProps,
      activeDotClassName,
      dimDotProps,
      dotProps,
      dotClassName,
      dimDotClassName,
    ],
  )

  const getLineChartProps: ChartPropGetter<
    "div",
    ComponentPropsWithoutRef<typeof Recharts.LineChart>,
    ComponentPropsWithoutRef<typeof Recharts.LineChart>
  > = useCallback(
    ({ className, ...props } = {}, ref = null) => ({
      ref,
      className: cx(className, lineChartClassName),
      data,
      layout: layoutType,
      syncId,
      margin: {
        bottom: xAxisLabel ? 30 : undefined,
        left: yAxisLabel ? 10 : undefined,
        right: yAxisLabel ? 5 : undefined,
      },
      ...props,
      ...chartProps,
    }),
    [
      lineChartClassName,
      data,
      layoutType,
      syncId,
      xAxisLabel,
      yAxisLabel,
      chartProps,
    ],
  )

  const getLineProps: RequiredChartPropGetter<
    "div",
    {
      index: number
    },
    Omit<Recharts.LineProps, "ref">
  > = useCallback(
    ({ index, className: classNameProp, ...props }, ref = null) => {
      const { color, className, dataKey, activeDot, dot, ...rest } =
        linePropList[index]

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
        ...(props as Omit<Recharts.LineProps, "dataKey">),
        ...rest,
      }
    },
    [connectNulls, curveType, linePropList, strokeWidth],
  )

  return {
    getLineProps,
    getLineChartProps,
    lineVars,
    setHighlightedArea,
  }
}

export type UseLineChartReturn = ReturnType<typeof useLineChart>
