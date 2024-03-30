import type { HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useMultiComponentStyle,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { ChartProvider } from "./use-chart"
import type { UseDonutChartOptions } from "./use-donut-chart"
import { useDonutChart } from "./use-donut-chart"

type DonutChartOptions = {}

export type DonutChartProps = HTMLUIProps<"div"> &
  ThemeProps<"DonutChart"> &
  DonutChartOptions &
  UseDonutChartOptions

/**
 * `DonutChart` is a component for drawing donut charts to compare multiple sets of data.
 *
 * @see Docs https://yamada-ui.com/components/feedback/donut-chart
 */
export const DonutChart = forwardRef<DonutChartProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("DonutChart", props)
  const { className, ...rest } = omitThemeProps(mergedProps)

  const {} = useDonutChart({ styles })

  return (
    <ChartProvider value={{ styles }}>
      <ui.div
        ref={ref}
        className={cx("ui-donut-chart", className)}
        // var={[...areaVars, ...tooltipVars]}
        __css={{ maxW: "full", ...styles.container }}
        {...rest}
      ></ui.div>
    </ChartProvider>
  )
})
