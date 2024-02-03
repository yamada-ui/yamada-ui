import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { ChartProvider, useChart } from "./use-chart"
import { PieChartProvider, usePieChart } from "./use-pie-chart"

type PieChartOptions = {}

export type PieChartProps = HTMLUIProps<"div"> &
  ThemeProps<"PieChart"> &
  PieChartOptions

export const PieChart = forwardRef<PieChartProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("PieChart", props)
  const { className, ...computedProps } = omitThemeProps(mergedProps)

  const {} = useChart(computedProps)
  const {} = usePieChart(computedProps)

  const css: CSSUIObject = {}

  return (
    <ChartProvider value={{ styles }}>
      <PieChartProvider value={{}}>
        <ui.div
          ref={ref}
          className={cx("ui-line-chart", className)}
          __css={css}
        ></ui.div>
      </PieChartProvider>
    </ChartProvider>
  )
})
