import type { ComponentPropsWithoutRef, FC, ReactNode } from "react"
import type * as Recharts from "recharts"
import type {
  CSSUIObject,
  CSSUIProps,
  PropGetter,
  RequiredPropGetter,
} from "../../core"
import type { Dict } from "../../utils"
import type {
  BarChartProps,
  BarChartType,
  BarProps,
  ChartLayoutType,
  ReferenceLineProps,
} from "./chart.types"
import { useCallback, useId, useMemo, useState } from "react"
import { Bar, Cell } from "recharts"
import { getVar } from "../../core"
import { useTheme } from "../../providers/theme-provider"
import { cx, runIfFunc } from "../../utils"
import { getComponentProps } from "./chart-utils"
import { barChartProperties, barProperties } from "./rechart-properties"

export interface UseBarChartOptions {
  /**
   * Chart data.
   */
  data: Dict[]
  /**
   * An array of objects with `name` and `color` keys. Determines which data should be consumed from the `data` array.
   */
  series: BarProps[]
  /**
   * Controls how chart bars are positioned relative to each other.
   *
   * @default `default`
   */
  type?: BarChartType
  /**
   * A function that returns a component that renders the bar cells.
   */
  cell?: FC<BarCellProps> | ReactNode
  /**
   * Controls fill opacity of all bars.
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
   * If any two categorical charts have the same syncId,
   * these two charts can sync the position tooltip, and the startIndex, endIndex of Brush.
   */
  syncId?: number | string
  /**
   * A label to display below the X axis.
   */
  xAxisLabel?: string
  /**
   * A label to display below the Y axis.
   */
  yAxisLabel?: string
  /**
   * Props for the bars.
   */
  barProps?: Partial<BarProps>
  /**
   * Props passed down to recharts `BarChart` component.
   */
  chartProps?: BarChartProps
  /**
   * Reference lines that should be displayed on the chart.
   */
  referenceLineProps?: ReferenceLineProps[]
}

export interface UseBarChartProps extends UseBarChartOptions {
  styles: Dict<CSSUIObject | undefined>
}

export const useBarChart = ({
  type = "default",
  cell = defaultBarCell,
  data,
  fillOpacity = 1,
  layoutType = "horizontal",
  series,
  styles,
  syncId,
  xAxisLabel,
  yAxisLabel,
  referenceLineProps = [],
  ...rest
}: UseBarChartProps) => {
  const uuid = useId()
  const { theme } = useTheme()
  const [highlightedArea, setHighlightedArea] = useState<null | string>(null)
  const stacked = type === "stacked" || type === "percent"
  const shouldHighlight = highlightedArea !== null
  const {
    activeBar = {},
    background = {},
    dimBar,
    ...computedBarProps
  } = rest.barProps ?? {}

  const barColors: CSSUIProps["vars"] = useMemo(
    () =>
      series.map(({ color }, index) => ({
        name: `bar-${index}`,
        token: "colors",
        value: color ?? "transparent",
      })),
    [series],
  )

  const referenceLineColors: CSSUIProps["vars"] = useMemo(
    () =>
      referenceLineProps.map(({ color }, index) => ({
        name: `reference-line-${index}`,
        token: "colors",
        value: color ?? "transparent",
      })),
    [referenceLineProps],
  )

  const barVars: CSSUIProps["vars"] = useMemo(() => {
    return [
      ...barColors,
      ...referenceLineColors,
      { name: "fill-opacity", value: fillOpacity },
    ]
  }, [barColors, fillOpacity, referenceLineColors])

  const [chartProps, barChartClassName] = useMemo(() => {
    const resolvedBarChartProps = { barGap: 8, ...rest.chartProps }

    return getComponentProps<Dict, string>(
      [resolvedBarChartProps, barChartProperties],
      styles.chart,
    )(theme)
  }, [rest.chartProps, styles.chart, theme])

  const [barProps, barClassName] = useMemo(() => {
    const resolvedBarProps = {
      fillOpacity: "$fill-opacity",
      strokeOpacity: 1,
      ...computedBarProps,
    }

    return getComponentProps<Dict, string>(
      [resolvedBarProps, barProperties],
      styles.bar,
    )(theme)
  }, [computedBarProps, styles.bar, theme])

  const [dimBarProps, dimBarClassName] = useMemo(() => {
    const resolvedDimBar = { fillOpacity: 0.3, strokeOpacity: 0, ...dimBar }

    return getComponentProps<Dict, string>([resolvedDimBar, barProperties])(
      theme,
    )
  }, [dimBar, theme])

  const [activeBarProps, activeBarClassName] = useMemo(
    () =>
      getComponentProps<Dict, string>(
        [activeBar, barProperties],
        styles.activeBar,
      )(theme),
    [activeBar, styles.activeBar, theme],
  )

  const [backgroundProps, backgroundClassName] = useMemo(
    () =>
      getComponentProps<Dict, string>(
        [background, barProperties],
        styles.background,
      )(theme),
    [background, styles.background, theme],
  )

  const barPropsList = useMemo(
    () =>
      series.map((props, index) => {
        const {
          activeBar = {},
          background = {},
          dataKey,
          dimBar = {},
          ...computedProps
        } = props
        const id = `${uuid}-${dataKey}`
        const color = getVar(`bar-${index}`)(theme)
        const dimmed = shouldHighlight && highlightedArea !== dataKey
        const computedDimBar = { ...dimBarProps, ...dimBar }
        const resolvedProps = {
          ...barProps,
          ...computedProps,
          ...(dimmed ? computedDimBar : {}),
        }

        const rest = getComponentProps<Dict, string>(
          [resolvedProps, barProperties],
          barClassName,
          dimmed ? dimBarClassName : undefined,
        )(theme, true)

        const computedActiveBar = { ...activeBarProps, ...activeBar }

        const resolvedActiveBar = getComponentProps<Dict, string>(
          [computedActiveBar, barProperties],
          activeBarClassName,
        )(theme, true)

        const computedBackground = { ...backgroundProps, ...background }

        const resolvedBackground = getComponentProps<Dict, string>(
          [computedBackground, barProperties],
          backgroundClassName,
        )(theme, true)

        return {
          ...rest,
          id,
          activeBar: resolvedActiveBar,
          background: resolvedBackground,
          color,
          dataKey,
        }
      }),
    [
      activeBarClassName,
      activeBarProps,
      backgroundClassName,
      backgroundProps,
      barClassName,
      barProps,
      dimBarClassName,
      dimBarProps,
      highlightedArea,
      series,
      shouldHighlight,
      theme,
      uuid,
    ],
  )

  const getBarProps: RequiredPropGetter<
    { index: number } & Partial<Recharts.BarProps>,
    Omit<Recharts.BarProps, "ref">
  > = useCallback(
    ({ className: classNameProp, index, ...props }, ref = null) => {
      const {
        id,
        className,
        activeBar,
        background,
        color,
        dataKey = "",
        ...rest
      } = barPropsList[index] ?? {}

      return {
        id,
        ref,
        name: dataKey,
        className: cx(classNameProp, className),
        activeBar,
        background,
        dataKey,
        fill: color,
        isAnimationActive: false,
        stackId: stacked ? "stack" : undefined,
        stroke: color,
        ...(props as Omit<Recharts.BarProps, "dataKey">),
        ...rest,
      } as Recharts.BarProps
    },
    [barPropsList, stacked],
  )

  const bars = useMemo(() => {
    const hasStack = series.some((entry) => entry.stackId)

    return series.map((series, index) => {
      const { dataKey } = series

      return (
        <Bar
          key={`bar-${dataKey}`}
          {...getBarProps({ className: "ui-bar-chart__bar", index })}
        >
          {data.map((data, index) =>
            runIfFunc(cell, { data, hasStack, index, series }),
          )}
        </Bar>
      )
    })
  }, [series, getBarProps, cell, data])

  const getBarChartProps: PropGetter<
    ComponentPropsWithoutRef<typeof Recharts.BarChart>,
    ComponentPropsWithoutRef<typeof Recharts.BarChart>
  > = useCallback(
    ({ className, ...props } = {}, ref = null) => ({
      ref,
      className: cx(className, barChartClassName),
      data,
      layout: layoutType,
      margin: {
        bottom: xAxisLabel ? 30 : undefined,
        left: yAxisLabel ? 10 : undefined,
        right: yAxisLabel ? 5 : undefined,
      },
      stackOffset: type === "percent" ? "expand" : undefined,
      syncId,
      ...props,
      ...chartProps,
    }),
    [
      barChartClassName,
      data,
      type,
      layoutType,
      syncId,
      xAxisLabel,
      yAxisLabel,
      chartProps,
    ],
  )

  return {
    bars,
    barVars,
    setHighlightedArea,
    getBarChartProps,
    getBarProps,
  }
}

export type UseBarChartReturn = ReturnType<typeof useBarChart>

export interface BarCellProps {
  data: Dict
  hasStack: boolean
  index: number
  series: BarProps
}

const defaultBarCell: FC<BarCellProps> = ({
  data,
  hasStack,
  index,
  series,
}) => {
  const { dataKey } = series
  const key = `cell-${dataKey}-${index}`

  if (!hasStack) return <Cell key={key} />

  const keys = Object.keys(data)
  const values = Object.values(data)

  const currentIndex = keys.findIndex((key) => key === dataKey)
  const lastIndex = values.findLastIndex((value) => value !== 0)

  if (currentIndex === lastIndex) return <Cell key={key} />

  return <Cell key={key} radius={0} />
}
