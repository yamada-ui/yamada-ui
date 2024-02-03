import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { ChartProvider, useChart } from "./use-chart"
import { LineChartProvider, useLineChart } from "./use-line-chart"

type LineChartOptions = {}

export type LineChartProps = HTMLUIProps<"div"> &
  ThemeProps<"LineChart"> &
  LineChartOptions

export const LineChart = forwardRef<LineChartProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("LineChart", props)
  const { className, ...computedProps } = omitThemeProps(mergedProps)

  const {} = useChart(computedProps)
  const {} = useLineChart(computedProps)

  const css: CSSUIObject = {}

  return (
    <ChartProvider value={{ styles }}>
      <LineChartProvider value={{}}>
        <ui.div
          ref={ref}
          className={cx("ui-line-chart", className)}
          __css={css}
        ></ui.div>
      </LineChartProvider>
    </ChartProvider>
  )
})
