import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { AreaChartProvider, useAreaChart } from "./use-area-chart"
import { ChartProvider, useChart } from "./use-chart"

type AreaChartOptions = {}

export type AreaChartProps = HTMLUIProps<"div"> &
  ThemeProps<"AreaChart"> &
  AreaChartOptions

export const AreaChart = forwardRef<AreaChartProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("AreaChart", props)
  const { className, ...computedProps } = omitThemeProps(mergedProps)

  const {} = useChart(computedProps)
  const {} = useAreaChart(computedProps)

  const css: CSSUIObject = {}

  return (
    <ChartProvider value={{ styles }}>
      <AreaChartProvider value={{}}>
        <ui.div
          ref={ref}
          className={cx("ui-line-chart", className)}
          __css={css}
        ></ui.div>
      </AreaChartProvider>
    </ChartProvider>
  )
})
