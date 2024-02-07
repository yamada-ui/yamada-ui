import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { BarChartProvider, useBarChart } from "./use-bar-chart"
import { ChartProvider, useChart } from "./use-chart"

type BarChartOptions = {}

export type BarChartProps = HTMLUIProps<"div"> &
  ThemeProps<"BarChart"> &
  BarChartOptions

export const BarChart = forwardRef<BarChartProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("BarChart", props)
  const { className, ...computedProps } = omitThemeProps(mergedProps)

  const {} = useChart(computedProps)
  const {} = useBarChart(computedProps)

  const css: CSSUIObject = {}

  return (
    <ChartProvider value={{ styles }}>
      <BarChartProvider value={{}}>
        <ui.div
          ref={ref}
          className={cx("ui-line-chart", className)}
          __css={css}
        ></ui.div>
      </BarChartProvider>
    </ChartProvider>
  )
})
