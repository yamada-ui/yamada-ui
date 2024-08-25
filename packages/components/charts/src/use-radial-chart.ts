import type { CSSUIProps, CSSUIObject } from "@yamada-ui/core"
import { getVar, useTheme } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import type { Dict } from "@yamada-ui/utils"
import { useCallback, useMemo, useState } from "react"
import type { ComponentPropsWithoutRef } from "react"
import type * as Recharts from "recharts"
import { getClassName, getComponentProps } from "./chart-utils"
import type {
  ChartPropGetter,
  RadialBarProps,
  RadialChartProps,
  RequiredChartPropGetter,
} from "./chart.types"
import {
  radialBarProperties,
  radialChartProperties,
} from "./rechart-properties"

export type UseRadialChartOptions = {
  /**
   * Chart data.
   */
  data: Dict[]
  /**
   * The key of a group of data which should be unique in an chart.
   *
   * @default 'value'
   */
  dataKey?: string
  /**
   * Props passed down to recharts `RadialBarChart` component.
   */
  chartProps?: RadialChartProps
  /**
   * Props for the radialBar.
   */
  radialBarProps?: Partial<RadialBarProps>
  /**
   * Controls innerRadius of the chart segments.
   * If it is a number, it is the width of the radius.
   * For example, `60` means the radius is `60px` and the diameter is `120px`.
   *
   * @default '10%'
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
   * Controls angle at which chart starts.
   *
   * @default 90
   */
  startAngle?: number
  /**
   * Controls angle at which chart ends.
   *
   * @default -180
   */
  endAngle?: number
  /**
   * Controls fill opacity of all pies.
   *
   * @default 1
   */
  fillOpacity?: number | [number, number]
}

type UseRadialChartProps = UseRadialChartOptions & {
  styles: Dict<CSSUIObject>
}

export const useRadialChart = ({
  data: dataProp,
  dataKey = "value",
  innerRadius = "10%",
  outerRadius = "80%",
  startAngle = 90,
  endAngle = -180,
  fillOpacity = 1,
  styles,
  ...rest
}: UseRadialChartProps) => {
  const { theme } = useTheme()
  const [highlightedArea, setHighlightedArea] = useState<string | null>(null)
  const shouldHighlight = highlightedArea !== null
  const {
    background: backgroundProps = {},
    dimRadialBar: dimRadialBarProps = {},
    ...computedRadialBarProps
  } = rest.radialBarProps ?? {}

  const radialVars: CSSUIProps["var"] = useMemo(
    () =>
      dataProp.map(({ color }, index) => ({
        name: `radial-bar-${index}`,
        token: "colors",
        value: color ?? "transparent",
      })),
    [dataProp],
  )

  const dimRadialBarClassName = useMemo(() => {
    const resolvedDimRadialBar = {
      fillOpacity: 0.3,
      strokeOpacity: 0,
      ...dimRadialBarProps,
    }

    return getClassName(resolvedDimRadialBar)(theme)
  }, [dimRadialBarProps, theme])

  const [chartProps, chartClassName] = useMemo(
    () =>
      getComponentProps<Dict, string>(
        [rest.chartProps ?? {}, radialChartProperties],
        styles.chart,
      )(theme),
    [rest.chartProps, styles.chart, theme],
  )

  const background = useMemo(
    () =>
      getComponentProps<Dict, string>(
        [backgroundProps, radialBarProperties],
        styles.background,
      )(theme, true),
    [backgroundProps, styles.background, theme],
  )

  const [radialBarProps, radialBarClassName] = useMemo(
    () =>
      getComponentProps<Dict, string>(
        [computedRadialBarProps ?? {}, radialBarProperties],
        styles.radialBar,
      )(theme),
    [computedRadialBarProps, styles.radialBar, theme],
  )

  const data = useMemo(
    () =>
      dataProp.map((props, index) => {
        const {
          name,
          value,
          color,
          dimRadialBar = {},
          ...computedProps
        } = props
        const dimmed = shouldHighlight && highlightedArea !== name
        const resolvedProps = {
          ...computedProps,
          ...(dimmed ? dimRadialBar : { fillOpacity }),
        }

        const className = getClassName(
          resolvedProps,
          dimmed ? dimRadialBarClassName : undefined,
        )(theme)

        return {
          className,
          fill: getVar(`radial-bar-${index}`)(theme),
          name,
          value,
          color,
        }
      }),
    [
      dataProp,
      dimRadialBarClassName,
      fillOpacity,
      highlightedArea,
      shouldHighlight,
      theme,
    ],
  )

  const getRadialChartProps: ChartPropGetter<
    "div",
    ComponentPropsWithoutRef<typeof Recharts.RadialBarChart>,
    ComponentPropsWithoutRef<typeof Recharts.RadialBarChart>
  > = useCallback(
    ({ className, ...props } = {}, ref = null) => ({
      ref,
      className: cx(className, chartClassName),
      data,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      ...props,
      ...chartProps,
    }),
    [
      chartClassName,
      chartProps,
      data,
      endAngle,
      innerRadius,
      outerRadius,
      startAngle,
    ],
  )

  const getRadialBarProps: RequiredChartPropGetter<
    "div",
    Partial<Recharts.RadialBarProps>,
    Omit<Recharts.RadialBarProps, "ref">
  > = useCallback(
    ({ className, ...props }, ref = null) => ({
      ref,
      className: cx(className, radialBarClassName),
      dataKey,
      isAnimationActive: false,
      background,
      ...props,
      ...radialBarProps,
    }),
    [background, dataKey, radialBarClassName, radialBarProps],
  )

  return {
    radialVars,
    setHighlightedArea,
    getRadialChartProps,
    getRadialBarProps,
  }
}

export type UseRadialChartReturn = ReturnType<typeof useRadialChart>
