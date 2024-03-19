import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import {
  ResponsiveContainer,
  RadarChart as ReChartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts"
import { ChartProvider } from "./use-chart"
import { useRadarChart } from "./use-radar-chart"

type RadarChartOptions = {
  /**
   * Determines whether polarGrid should be displayed.
   *
   * @default true
   */
  withPolarGrid?: boolean
  /**
   * Determines whether polarAngleAxis should be displayed.
   *
   * @default true
   */
  withPolarAngleAxis?: boolean
  /**
   * Determines whether polarRadiusAxis should be displayed.
   *
   * @default true
   */
  withPolarRadiusAxis?: boolean
}

export type RadarChartProps = HTMLUIProps<"div"> &
  ThemeProps<"RadarChart"> &
  RadarChartOptions

export const RadarChart = forwardRef<RadarChartProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("RadarChart", props)
  const {
    className,
    withPolarGrid = true,
    withPolarAngleAxis = true,
    withPolarRadiusAxis = false,
    ...computedProps
  } = omitThemeProps(mergedProps)

  const {} = useRadarChart(computedProps)

  const css: CSSUIObject = {}

  // const radars = []

  return (
    <ChartProvider value={{ styles }}>
      <ui.div ref={ref} className={cx("ui-radar-chart", className)} __css={css}>
        <ResponsiveContainer>
          <ReChartsRadarChart>
            {withPolarGrid ? <PolarGrid /> : null}
            {withPolarAngleAxis ? <PolarAngleAxis /> : null}
            {withPolarRadiusAxis ? <PolarRadiusAxis /> : null}
            {/* {radars} */}
          </ReChartsRadarChart>
        </ResponsiveContainer>
      </ui.div>
    </ChartProvider>
  )
})
