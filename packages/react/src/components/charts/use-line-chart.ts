import type { ComponentPropsWithoutRef } from "react"
import type * as Recharts from "recharts"
import type { CSSObject, PropGetter, RequiredPropGetter } from "../../core"
import type { CSSProps, ThemeProps } from "../../core"
import type { Dict } from "../../utils"
import type {
  ChartCurveType,
  ChartLayoutType,
  LineChartProps,
  LineProps,
  ReferenceLineProps,
} from "./chart.types"
import type { LineChartStyle } from "./line-chart.style"
import { useCallback, useMemo, useState } from "react"
import { getVar } from "../../core"
import { useTheme } from "../../providers/theme-provider"
import { cx, runIfFunc } from "../../utils"
import { getComponentProps } from "./chart-utils"
import {
  dotProperties,
  lineChartProperties,
  lineProperties,
} from "./rechart-properties"

export interface UseLineChartOptions extends ThemeProps<LineChartStyle> {
  /**
   * Chart data.
   */
  data: Dict[]
  /**
   * The key of a group of data which should be unique in an chart.
   */
  dataKey: string
  /**
   * An array of objects with `dataKey` and `color` keys. Determines which data should be consumed from the `data` array.
   */
  series: LineProps[]
  /**
   * Determines whether points with `null` values should be connected.
   *
   * @default true
   */
  connectNulls?: boolean
  /**
   * Type of the curve.
   *
   * @default `monotone`
   */
  curveType?: ChartCurveType
  /**
   * Controls fill opacity of all lines.
   *
   * @default 1
   */
  fillOpacity?: [number, number] | number
  /**
   * Chart orientation.
   *
   * @default 'horizontal'
   */
  layoutType?: ChartLayoutType
  /**
   * Stroke width for the chart lines.
   *
   * @default 2
   */
  strokeWidth?: number
  /**
   * If any two categorical charts have the same syncId,
   * these two charts can sync the position tooltip, and the startIndex, endIndex of Brush.
   */
  syncId?: number | string
  /**
   * Determines whether activeDots should be displayed.
   *
   * @default true
   */
  withActiveDots?: boolean
  /**
   * Determines whether dots should be displayed.
   *
   * @default true
   */
  withDots?: boolean
  /**
   * A label to display below the X axis.
   */
  xAxisLabel?: string
  /**
   * A label to display below the Y axis.
   */
  yAxisLabel?: string
  /**
   * Props passed down to recharts `LineChart` component.
   */
  chartProps?: LineChartProps
  /**
   * Props for the lines.
   */
  lineProps?: Partial<LineProps>
  /**
   * Reference lines that should be displayed on the chart.
   */
  referenceLineProps?: ReferenceLineProps[]
}

interface UseLineChartProps extends UseLineChartOptions {
  styles: Dict<CSSObject | undefined>
}

export const useLineChart = ({
  connectNulls = true,
  curveType = "monotone",
  data,
  fillOpacity = 1,
  layoutType = "horizontal",
  series,
  strokeWidth = 2,
  styles,
  syncId,
  withActiveDots = true,
  withDots = true,
  xAxisLabel,
  yAxisLabel,
  referenceLineProps,
  ...rest
}: UseLineChartProps) => {
  const { theme } = useTheme()
  const [highlightedArea, setHighlightedArea] = useState<null | string>(null)
  const shouldHighlight = highlightedArea !== null
  const {
    activeDot = {},
    dimDot,
    dimLine,
    dot = {},
    ...computedLineProps
  } = rest.lineProps ?? {}

  const lineColors: CSSProps["vars"] = useMemo(
    () =>
      series.map(({ color }, index) => ({
        name: `line-${index}`,
        token: "colors",
        value: color ?? "transparent",
      })),
    [series],
  )

  const referenceLineColors: CSSProps["vars"] = useMemo(
    () =>
      referenceLineProps
        ? referenceLineProps.map(({ color }, index) => ({
            name: `reference-line-${index}`,
            token: "colors",
            value: color ?? "transparent",
          }))
        : [],
    [referenceLineProps],
  )

  const lineVars: CSSProps["vars"] = useMemo(
    () => [
      ...lineColors,
      ...referenceLineColors,
      { name: "fill-opacity", value: fillOpacity },
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
      fillOpacity: "$fill-opacity",
      strokeOpacity: "$fill-opacity",
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
          activeDot = {},
          dataKey,
          dimDot = {},
          dimLine = {},
          dot = {},
          ...computedProps
        } = props
        const color = getVar(`line-${index}`)(theme)
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

        let resolvedActiveDot: boolean | Recharts.DotProps

        if (withActiveDots) {
          const computedActiveDot = { ...activeDotProps, ...activeDot }

          const [rest, className] = getComponentProps(
            [computedActiveDot, dotProperties],
            activeDotClassName,
          )(theme)

          resolvedActiveDot = {
            className: cx("ui-line-chart__active-dot", className),
            fill: color,
            r: 4,
            stroke: color,
            ...rest,
          } as Recharts.DotProps
        } else {
          resolvedActiveDot = false
        }

        let resolvedDot: boolean | Recharts.DotProps

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
          activeDot: resolvedActiveDot,
          color,
          dataKey,
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

  const getLineChartProps: PropGetter<
    ComponentPropsWithoutRef<typeof Recharts.LineChart>,
    ComponentPropsWithoutRef<typeof Recharts.LineChart>
  > = useCallback(
    ({ className, ...props } = {}, ref = null) => ({
      ref,
      className: cx(className, lineChartClassName),
      data,
      layout: layoutType,
      margin: {
        bottom: xAxisLabel ? 30 : undefined,
        left: yAxisLabel ? 10 : undefined,
        right: yAxisLabel ? 5 : undefined,
      },
      syncId,
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

  const getLineProps: RequiredPropGetter<
    Partial<Recharts.LineProps>,
    { index: number },
    Omit<Recharts.LineProps, "ref">
  > = useCallback(
    ({ className: classNameProp, index, ...props }) => {
      const { className, activeDot, color, dataKey, dot, ...rest } =
        linePropList[index] ?? {}

      return {
        type: curveType,
        name: runIfFunc(dataKey, {}),
        className: cx(classNameProp, className),
        activeDot,
        connectNulls,
        dataKey,
        dot,
        fill: color,
        isAnimationActive: false,
        stroke: color,
        strokeWidth,
        ...(props as Omit<Recharts.LineProps, "dataKey">),
        ...rest,
      }
    },
    [connectNulls, curveType, linePropList, strokeWidth],
  )

  return {
    lineVars,
    setHighlightedArea,
    getLineChartProps,
    getLineProps,
  }
}

export type UseLineChartReturn = ReturnType<typeof useLineChart>
