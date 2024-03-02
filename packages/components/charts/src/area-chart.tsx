import type { HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { Fragment } from "react"
import {
  CartesianGrid,
  Legend as ReChartsLegend,
  AreaChart as ReChartsAreaChart,
  Area,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { AreaGradient } from "./area-chart-gradient"
import { AreaSplit } from "./area-chart-split"
import { Legend } from "./legend"
import { ChartTooltip } from "./tooltip"
import type { UseAreaChartOptions } from "./use-area-chart"
import { AreaChartProvider, useAreaChart } from "./use-area-chart"
import { ChartProvider, useChart } from "./use-chart"

type AreaChartOptions = {
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
}

export type AreaChartProps = HTMLUIProps<"div"> &
  ThemeProps<"AreaChart"> &
  AreaChartOptions &
  UseAreaChartOptions

export const AreaChart = forwardRef<AreaChartProps, "svg">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("AreaChart", props)
  const {
    w,
    width,
    minW,
    minWidth,
    maxW,
    maxWidth,
    h,
    height,
    minH,
    minHeight,
    maxH,
    maxHeight,
    className,
    series,
    type = "default",
    withTooltip = true,
    withLegend = false,
    referenceLineProps: referenceLines,
    ...computedProps
  } = omitThemeProps(mergedProps)

  const {} = useChart(computedProps)
  const {
    getAreaChartProps,
    getReferenceLineProps,
    getGridProps,
    getContainerProps,
    getXAxisProps,
    getYAxisProps,
    getLegendProps,
    getTooltipProps,
    getAreaSplitProps,
    getAreaProps,
    getAreaGradientProps,
    getCSSvariables,
    setHighlightedArea,
  } = useAreaChart({
    type,
    series,
    referenceLineProps: referenceLines,
    styles,
    ...computedProps,
  })

  const areas = series.map((item, index) => {
    const { id, stroke, ...rest } = getAreaProps({ item, index }, ref)

    return (
      <Fragment key={`area-${item.dataKey}`}>
        <defs>
          <AreaGradient {...getAreaGradientProps({ id, color: stroke })} />
        </defs>
        <Area id={id} stroke={stroke} {...rest} />
      </Fragment>
    )
  })

  const referenceLinesItems = referenceLines?.map((line, index) => (
    <ReferenceLine
      key={`referenceLine-${index}`}
      {...getReferenceLineProps({ index, line }, ref)}
    />
  ))

  const legend = () => {
    const legendProps = getLegendProps({}, ref)
    if (withLegend)
      return (
        <ReChartsLegend
          content={({ payload }) => (
            <Legend
              ref={ref}
              payload={payload}
              onHighlight={setHighlightedArea}
            />
          )}
          {...legendProps}
        />
      )
  }

  const tooltip = () => {
    const tooltipProps = getTooltipProps({}, ref)
    if (withTooltip)
      return (
        <Tooltip
          content={({ label, payload }) => (
            <ChartTooltip ref={ref} label={label} payload={payload} />
          )}
          {...tooltipProps}
        />
      )
  }

  return (
    <ChartProvider value={{ styles }}>
      <AreaChartProvider value={{}}>
        <ui.div
          className={cx("ui-area-chart", className)}
          var={getCSSvariables()}
          {...{
            w,
            width,
            minW,
            minWidth,
            maxW,
            maxWidth,
            h,
            height,
            minH,
            minHeight,
            maxH,
            maxHeight,
          }}
          __css={{ ...styles.container }}
        >
          <ResponsiveContainer {...getContainerProps({}, ref)}>
            <ReChartsAreaChart {...getAreaChartProps({}, ref)}>
              {referenceLinesItems}
              <CartesianGrid {...getGridProps({}, ref)} />
              <XAxis {...getXAxisProps()} />
              <YAxis {...getYAxisProps()} />
              {legend()}
              {tooltip()}
              {type === "split" ? (
                <defs>
                  <AreaSplit {...getAreaSplitProps()} />
                </defs>
              ) : null}
              {areas}
            </ReChartsAreaChart>
          </ResponsiveContainer>
        </ui.div>
      </AreaChartProvider>
    </ChartProvider>
  )
})
