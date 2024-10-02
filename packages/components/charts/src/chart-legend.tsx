import type { HTMLUIProps } from "@yamada-ui/core"
import { forwardRef, ui } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import type { Dict } from "@yamada-ui/utils"
import { useLegend } from "./use-chart"

interface ChartLegendOptions {
  payload?: Dict[]
  onHighlight: (area: string | null) => void
}

export interface ChartLegendProps extends HTMLUIProps, ChartLegendOptions {}

export const ChartLegend = forwardRef<ChartLegendProps, "div">(
  ({ className, payload = [], onHighlight, ...rest }, ref) => {
    const { styles } = useLegend()

    const items = payload.map(({ dataKey, value: valueProp, color }, index) => {
      const value = dataKey ?? valueProp

      return (
        <ui.div
          className="ui-chart__legend-item"
          key={`legend-${index}`}
          onMouseEnter={() => onHighlight(value)}
          onMouseLeave={() => onHighlight(null)}
          __css={styles.legendItem}
        >
          <ui.div
            className="ui-chart__legend-swatch"
            background={color}
            __css={styles.legendSwatch}
          />

          <ui.span className="ui-chart__legend-label">{value}</ui.span>
        </ui.div>
      )
    })

    return (
      <ui.div
        ref={ref}
        className={cx("ui-chart__legend", className)}
        __css={styles.legend}
        {...rest}
      >
        {items}
      </ui.div>
    )
  },
)

ChartLegend.displayName = "ChartLegend"
ChartLegend.__ui__ = "ChartLegend"
