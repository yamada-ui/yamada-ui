import { useTheme } from "@yamada-ui/core"
import type { CSSUIObject, CSSUIProps } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import type { Dict } from "@yamada-ui/utils"
import type { ComponentPropsWithoutRef } from "react"
import { useCallback, useMemo, useState } from "react"
import type { DotProps, LineChart, LineProps } from "recharts"
import { getClassName, getComponentProps } from "./chart-utils"
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
   * Props passed down to recharts `LineChart` component.
   */
  lineChartProps?: LineChartUIProps
  /**
   * Props passed down to dim lines.
   *
   * @default "{ fillOpacity: 0, strokeOpacity: 0.3 }"
   */
  dimLineProps?: Omit<Partial<LineChartSeries>, "dataKey" | "dot" | "activeDot">
  /**
   * Props passed down to all dots. Ignored if `withDots={false}` is set.
   */
  dotProps?: DotUIProps
  /**
   * Props passed down to dim dots.
   *
   * @default "{ fillOpacity: 0, strokeOpacity: 0 }"
   */
  dimDotProps?: DotUIProps
  /**
   * Props passed down to all active dots. Ignored if `withDots={false}` is set.
   */
  activeDotProps?: DotUIProps
  /**
   * Chart orientation.
   *
   * @default 'horizontal'
   */
  layoutType?: LayoutType
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
  curveType?: CurveType
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
  referenceLineProps?: ReferenceLineUIProps[]
  /**
   * Controls fill opacity of all lines.
   *
   * @default 1
   */
  fillOpacity?: number | [number, number]
}

type UseLineChartProps = UseLineChartOptions & {
  styles: Dict<CSSUIObject>
}

export const useLineChart = ({
  data,
  series,
  lineChartProps: _lineChartProps = {},
  activeDotProps: _activeDotProps = {},
  dimLineProps = { fillOpacity: 0, strokeOpacity: 0.3 },
  dotProps: _dotProps = {},
  dimDotProps = { fillOpacity: 0, strokeOpacity: 0 },
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

  const lineVars: CSSUIProps["var"] = useMemo(
    () => [
      ...lineColors,
      ...referenceLineColors,
      { __prefix: "ui", name: "fill-opacity", value: fillOpacity },
    ],
    [fillOpacity, lineColors, referenceLineColors],
  )

  const [lineChartProps, lineChartClassName] = getComponentProps<Dict, string>(
    [_lineChartProps, lineChartProperties],
    styles.lineChart,
  )(theme)

  const [activeDotProps, _activeDotClassName] = getComponentProps<Dict, string>(
    [_activeDotProps, dotProperties],
    styles.activeDot,
  )(theme)

  const [dotProps, _dotClassName] = getComponentProps<Dict, string>(
    [_dotProps, dotProperties],
    styles.dot,
  )(theme)

  const lineClassName = getClassName(styles.line)(theme)

  const linePropList = useMemo(
    () =>
      series.map((props, index) => {
        const { dataKey, activeDot: _activeDot = {}, dot: _dot = {} } = props
        const color = `var(--ui-line-${index})`
        const dimmed = shouldHighlight && highlightedArea !== dataKey
        const resolvedProps = {
          fillOpacity: "var(--ui-fill-opacity)",
          strokeOpacity: "var(--ui-fill-opacity)",
          ...props,
          ...(dimmed ? dimLineProps : {}),
        }
        const [rest, className] = getComponentProps<Dict, string>(
          [resolvedProps, lineProperties],
          lineClassName,
        )(theme)

        let activeDot: DotProps | boolean

        if (withActiveDots) {
          const [rest, activeDotClassName] = getComponentProps(
            [_activeDot, dotProperties],
            _activeDotClassName,
          )(theme)

          activeDot = {
            className: cx("ui-line-chart__active-dot", activeDotClassName),
            fill: color,
            stroke: color,
            r: 4,
            ...activeDotProps,
            ...rest,
          } as DotProps
        } else {
          activeDot = false
        }

        let dot: DotProps | boolean

        if (withDots) {
          const resolvedDot = { ..._dot, ...(dimmed ? dimDotProps : {}) }
          const [rest, dotClassName] = getComponentProps(
            [resolvedDot, dotProperties],
            _dotClassName,
          )(theme)

          dot = {
            className: cx("ui-line-chart__dot", dotClassName),
            fill: color,
            fillOpacity: dimmed ? 0 : 1,
            strokeOpacity: dimmed ? 0 : 1,
            ...dotProps,
            ...rest,
          } as DotProps
        } else {
          dot = false
        }

        return {
          color,
          className,
          ...rest,
          dataKey,
          activeDot,
          dot,
        }
      }),
    [
      series,
      shouldHighlight,
      highlightedArea,
      dimLineProps,
      lineClassName,
      theme,
      withActiveDots,
      withDots,
      _activeDotClassName,
      activeDotProps,
      dimDotProps,
      _dotClassName,
      dotProps,
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
        ...(props as Omit<LineProps, "dataKey">),
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
