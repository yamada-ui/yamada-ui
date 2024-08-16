import {
  forwardRef,
  omitThemeProps,
  ui,
  useMultiComponentStyle,
  type HTMLUIProps,
  type ThemeProps,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { ChartProvider } from "./use-chart"

type RadialChartOptions = {}

export type RadialChartProps = HTMLUIProps<"div"> &
  ThemeProps<"radialChart"> &
  RadialChartOptions

/**
 * `RadialChart` is a component for drawing radial charts to compare multiple sets of data.
 *
 * @see Docs https://yamada-ui.com/components/feedback/radial-chart
 */
export const RadialChart = forwardRef<RadialChartProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("RadialChart", props)
  const { className, ...rest } = omitThemeProps(mergedProps)

  return (
    <ChartProvider value={{ styles }}>
      <ui.div
        ref={ref}
        className={cx("ui-pie-chart", className)}
        // var={pieVars}
        __css={{ maxW: "full", ...styles.container }}
        {...rest}
      ></ui.div>
    </ChartProvider>
  )
})
