import type { CSSUIObject, CSSUIProps } from "@yamada-ui/core"
import { useTheme } from "@yamada-ui/core"
import { cx, runIfFunc } from "@yamada-ui/utils"
import type { Dict } from "@yamada-ui/utils"
import type { FC, ComponentPropsWithoutRef, ReactNode } from "react"
import { useCallback, useState, useId, useMemo } from "react"
import type * as Recharts from "recharts"
import { Bar, Cell } from "recharts"
import { getComponentProps } from "./chart-utils"
import type {
  BarProps,
  BarChartType,
  BarChartProps,
  ChartPropGetter,
  ChartLayoutType,
  ReferenceLineProps,
  RequiredChartPropGetter,
} from "./chart.types"
import { barProperties, barChartProperties } from "./rechart-properties"

export type UseBarChartOptions = {
  /**
   * Chart data.
   */
  data: Dict[]
  /**
   * An array of objects with `name` and `color` keys. Determines which data should be consumed from the `data` array.
   */
  series: BarProps[]
  /**
   * Props for the bars.
   */
  barProps?: Partial<BarProps>
  /**
   * Controls how chart bars are positioned relative to each other.
   *
   * @default `default`
   */
  type?: BarChartType
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
   * Props passed down to recharts `BarChart` component.
   */
  chartProps?: BarChartProps
  /**
   * Reference lines that should be displayed on the chart.
   */
  referenceLineProps?: ReferenceLineProps[]
  /**
   * Controls fill opacity of all bars.
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
  /**
   * A function that returns a component that renders the bar cells.
   */
  cell?: ReactNode | FC<BarCellProps>
}

export type UseBarChartProps = UseBarChartOptions & {
  styles: Dict<CSSUIObject>
}

export const useBarChart = ({
  data,
  series,
  type = "default",
  layoutType = "horizontal",
  referenceLineProps = [],
  fillOpacity = 1,
  syncId,
  xAxisLabel,
  yAxisLabel,
  styles,
  cell = defaultBarCell,
  ...rest
}: UseBarChartProps) => {
  const uuid = useId()
  const { theme } = useTheme()
  const [highlightedArea, setHighlightedArea] = useState<string | null>(null)
  const stacked = type === "stacked" || type === "percent"
  const shouldHighlight = highlightedArea !== null
  const {
    activeBar = {},
    background = {},
    dimBar = {},
    ...computedBarProps
  } = rest.barProps ?? {}

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
    return [
      ...barColors,
      ...referenceLineColors,
      { __prefix: "ui", name: "fill-opacity", value: fillOpacity },
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
      fillOpacity: "var(--ui-fill-opacity)",
      ...computedBarProps,
    }

    return getComponentProps<Dict, string>(
      [resolvedBarProps, barProperties],
      styles.bar,
    )(theme)
  }, [computedBarProps, styles.bar, theme])

  const [dimBarProps, dimBarClassName] = useMemo(
    () =>
      getComponentProps<Dict, string>(
        [dimBar, barProperties],
        styles.dimBar,
      )(theme),
    [dimBar, styles.dimBar, theme],
  )

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
          dataKey,
          activeBar = {},
          background = {},
          dimBar = {},
          ...computedProps
        } = props
        const id = `${uuid}-${dataKey}`
        const color = `var(--ui-bar-${index})`
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

  const getBarProps: RequiredChartPropGetter<
    "div",
    {
      index: number
    },
    Omit<Recharts.BarProps, "ref">
  > = useCallback(
    ({ index, className: classNameProp, ...props }, ref = null) => {
      const { id, className, activeBar, background, color, dataKey, ...rest } =
        barPropsList[index]

      return {
        ref,
        className: cx(classNameProp, className),
        activeBar,
        background,
        id,
        name: dataKey as string,
        dataKey,
        fill: color,
        stroke: color,
        isAnimationActive: false,
        stackId: stacked ? "stack" : undefined,
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
          {...getBarProps({ index, className: "ui-bar-chart__bar" })}
        >
          {data.map((data, index) =>
            runIfFunc(cell, { series, data, index, hasStack }),
          )}
        </Bar>
      )
    })
  }, [series, getBarProps, cell, data])

  const getBarChartProps: ChartPropGetter<
    "div",
    ComponentPropsWithoutRef<typeof Recharts.BarChart>,
    ComponentPropsWithoutRef<typeof Recharts.BarChart>
  > = useCallback(
    ({ className, ...props } = {}, ref = null) => ({
      ref,
      className: cx(className, barChartClassName),
      data,
      stackOffset: type === "percent" ? "expand" : undefined,
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
    getBarProps,
    getBarChartProps,
    setHighlightedArea,
  }
}

export type UseBarChartReturn = ReturnType<typeof useBarChart>

export type BarCellProps = {
  hasStack: boolean
  series: BarProps
  data: Dict
  index: number
}

const defaultBarCell: FC<BarCellProps> = ({
  hasStack,
  series,
  data,
  index,
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
