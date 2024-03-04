import type { CSSUIProps, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
// import {Tooltip as ChartTooltip} from "@yamada-ui/tooltip"
// import { useToken } from "@yamada-ui/use-token"
// import { useValue } from "@yamada-ui/use-value"
import { cx } from "@yamada-ui/utils"
import type { PieLabel, PieProps } from "recharts"
import {
  Pie,
  Tooltip,
  PieChart as ReChartsPieChart,
  ResponsiveContainer,
  Cell,
} from "recharts"
import { ChartProvider, useChart } from "./use-chart"
import { PieChartProvider, usePieChart } from "./use-pie-chart"

// TODO: レスポンシブのheightをどうするか　固定値だとspの時に困る
// TODO: labelの位置を変える　外と内
// TODO: tooltipの表示を変える
export interface PieChartCell {
  name: string
  value: number
  color: CSSUIProps["color"]
}

/**
 * @see https://github.com/mantinedev/mantine/blob/master/packages/%40mantine/charts/src/PieChart/PieChart.story.tsx
 */
type PieChartOptions = {
  /** Data used to render chart */
  data: PieChartCell[]

  /** Determines whether the tooltip should be displayed when one of the section is hovered, `true` by default */
  withTooltip?: boolean

  /**
   * Tooltip animation duration in ms, `0` by default
   *
   * @default 0
   */
  tooltipAnimationDuration?: number

  /** Props passed down to recharts `PieChart` component */
  pieChartProps?: React.ComponentPropsWithoutRef<typeof ReChartsPieChart>

  /** Props passed down to recharts `Pie` component */
  pieProps?: Omit<PieProps, "ref">

  /** Controls chart width and height, height is increased by 40 if `withLabels` prop is set. Cannot be less than `thickness`. `80` by default */
  scale?: number

  /** Determines whether each segment should have associated label, `false` by default */
  withLabels?: boolean

  /** Determines whether segments labels should have lines that connect the segment with the label, `true` by default */
  withLabelsLine?: boolean

  /**
   * Controls width of segments stroke, `1` by default
   *
   * @default 1
   */
  strokeWidth?: number

  /**
   * Controls padding between segments.
   *
   * @default 0
   */
  paddingAngle?: number

  /**
   * Controls angle at which chart starts, `0` by default. Set to `180` to render the chart as semicircle.
   *
   * @default 0
   */
  startAngle?: number

  /**
   * Controls angle at which charts ends, `360` by default. Set to `0` to render the chart as semicircle.
   *
   * @default 360
   */
  endAngle?: number

  /** Determines which data is displayed in the tooltip. `'all'` – display all values, `'segment'` – display only hovered segment. `'all'` by default. */
  tooltipDataSource?: "segment" | "all"

  /** Additional elements rendered inside `PieChart` component */
  children?: React.ReactNode

  /**
   * Controls labels position relative to the segment, `'outside'` by default
   * @default 'inside'
   */
  labelsPosition?: "inside" | "outside"

  /** A function to format values inside the tooltip */
  valueFormatter?: (value: number) => string
}

export type PieChartProps = Omit<HTMLUIProps<"div">, "scale"> &
  ThemeProps<"PieChart"> &
  PieChartOptions

const defaultProps: Partial<PieChartProps> = {
  withTooltip: false,
  withLabelsLine: true,
  withLabels: false,
  paddingAngle: 0,
  strokeWidth: 1,
  scale: 200,
  startAngle: 0,
  endAngle: 360,
  tooltipDataSource: "all",
  labelsPosition: "inside",
}

export const PieChart = forwardRef<PieChartProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("PieChart", props)
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
    data,
    strokeWidth,
    withLabels,
    withTooltip,
    className,
    pieChartProps,
    pieProps,
    tooltipAnimationDuration,
    startAngle,
    endAngle,
    children,
    labelsPosition,
    withLabelsLine,
    ...computedProps
  } = omitThemeProps({ ...defaultProps, ...mergedProps })

  const {} = useChart(computedProps)
  const { getCellProps, getCSSVariables } = usePieChart({
    data,
    styles,
    ...computedProps,
  })

  const insideLabelEl: PieLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    value,
  }) => {
    const RADIAN = Math.PI / 180
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <ui.text
        x={x}
        y={y}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        __css={{ color: black, fontSize: 10 }}
        // className={classes.label}
      >
        {value}
      </ui.text>
    )
  }

  const black = "#ffffff"

  const cellEl = data.map((item, index) => {
    const { fill, stroke, id, ...rest } = getCellProps({ item, index }, ref)

    rest.onCopy
    return (
      <Cell
        id={id}
        key={`pie-${index}`}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        {...rest}
      />
    )
  })

  return (
    <ChartProvider value={{ styles }}>
      <PieChartProvider value={{}}>
        <ui.div
          ref={ref}
          className={cx("ui-pie-chart", className)}
          var={getCSSVariables()}
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
          <ResponsiveContainer>
            <ReChartsPieChart {...pieChartProps}>
              <Pie
                data={data}
                innerRadius={0}
                outerRadius="100%"
                dataKey="value"
                label={
                  withLabels
                    ? labelsPosition === "inside"
                      ? insideLabelEl
                      : { fill: black, fontSize: 14 }
                    : false
                }
                labelLine={
                  withLabelsLine && labelsPosition === "outside"
                    ? {
                        stroke: black,
                        strokeWidth: 1,
                      }
                    : false
                }
                isAnimationActive={false}
                paddingAngle={0}
                startAngle={startAngle}
                endAngle={endAngle}
                {...pieProps}
              >
                {cellEl}
              </Pie>

              {withTooltip ? (
                <Tooltip
                  animationDuration={tooltipAnimationDuration}
                  isAnimationActive={false}
                  // content={({payload}) => {
                  // return <ChartTooltip label='test' withPortal><p>test</p></ChartTooltip>}}
                />
              ) : null}
              {children}
            </ReChartsPieChart>
          </ResponsiveContainer>
        </ui.div>
      </PieChartProvider>
    </ChartProvider>
  )
})
