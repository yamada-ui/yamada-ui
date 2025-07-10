import type { ComponentPropsWithoutRef } from "react"
import type * as Recharts from "recharts"
import type {
  CSSUIObject,
  CSSUIProps,
  PropGetter,
  RequiredPropGetter,
} from "../../core"
import type { Dict } from "../../utils"
import type { RadialBarProps, RadialChartProps } from "./chart.types"
import { useCallback, useMemo, useState } from "react"
import { getVar } from "../../core"
import { useTheme } from "../../providers/theme-provider"
import { cx } from "../../utils"
import { getClassName, getComponentProps } from "./chart-utils"
import {
  radialBarProperties,
  radialChartProperties,
} from "./rechart-properties"

export interface UseRadialChartOptions {
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
  fillOpacity?: [number, number] | number
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
   * Props passed down to recharts `RadialBarChart` component.
   */
  chartProps?: RadialChartProps
  /**
   * Props for the radialBar.
   */
  radialBarProps?: Partial<RadialBarProps>
}

interface UseRadialChartProps extends UseRadialChartOptions {
  styles: Dict<CSSUIObject | undefined>
}

export const useRadialChart = ({
  data: dataProp,
  dataKey = "value",
  endAngle = -180,
  fillOpacity = 1,
  innerRadius = "10%",
  outerRadius = "80%",
  startAngle = 90,
  styles,
  ...rest
}: UseRadialChartProps) => {
  const { theme } = useTheme()
  const [highlightedArea, setHighlightedArea] = useState<null | string>(null)
  const shouldHighlight = highlightedArea !== null
  const {
    background: backgroundProps = {},
    dimRadialBar: dimRadialBarProps = {},
    ...computedRadialBarProps
  } = rest.radialBarProps ?? {}

  const radialVars: CSSUIProps["vars"] = useMemo(
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
        [computedRadialBarProps, radialBarProperties],
        styles.radialBar,
      )(theme),
    [computedRadialBarProps, styles.radialBar, theme],
  )

  const data = useMemo(
    () =>
      dataProp.map((props, index) => {
        const {
          name,
          color,
          dimRadialBar = {},
          value,
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
          name,
          className,
          color,
          fill: getVar(`radial-bar-${index}`)(theme),
          value,
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

  const getRadialChartProps: PropGetter<
    ComponentPropsWithoutRef<typeof Recharts.RadialBarChart>,
    ComponentPropsWithoutRef<typeof Recharts.RadialBarChart>
  > = useCallback(
    ({ className, ...props } = {}, ref = null) => ({
      ref,
      className: cx(className, chartClassName),
      data,
      endAngle,
      innerRadius,
      outerRadius,
      startAngle,
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

  const getRadialBarProps: RequiredPropGetter<
    Partial<Recharts.RadialBarProps>,
    Omit<Recharts.RadialBarProps, "ref">
  > = useCallback(
    ({ className, ...props }, ref = null) => ({
      ref,
      className: cx(className, radialBarClassName),
      background,
      dataKey,
      isAnimationActive: false,
      ...props,
      ...radialBarProps,
    }),
    [background, dataKey, radialBarClassName, radialBarProps],
  )

  return {
    radialVars,
    setHighlightedArea,
    getRadialBarProps,
    getRadialChartProps,
  }
}

export type UseRadialChartReturn = ReturnType<typeof useRadialChart>
