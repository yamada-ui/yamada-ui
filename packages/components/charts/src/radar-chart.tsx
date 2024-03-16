import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { ChartProvider } from "./use-chart"
import { RadarChartProvider, useRadarChart } from "./use-radar-chart"

type RadarChartOptions = {}

export type RadarChartProps = HTMLUIProps<"div"> &
  ThemeProps<"RadarChart"> &
  RadarChartOptions

export const RadarChart = forwardRef<RadarChartProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("RadarChart", props)
  const { className, ...computedProps } = omitThemeProps(mergedProps)

  const {} = useRadarChart(computedProps)

  const css: CSSUIObject = {}

  return (
    <ChartProvider value={{ styles }}>
      <RadarChartProvider value={{}}>
        <ui.div
          ref={ref}
          className={cx("ui-line-chart", className)}
          __css={css}
        ></ui.div>
      </RadarChartProvider>
    </ChartProvider>
  )
})
