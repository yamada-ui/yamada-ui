import type { HTMLUIProps } from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import { forwardRef, ui } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useLegend } from "./use-chart"

interface ChartLegendOptions {
  onHighlight: (area: null | string) => void
  payload?: Dict[]
}

export interface ChartLegendProps extends HTMLUIProps, ChartLegendOptions {}

export const ChartLegend = forwardRef<ChartLegendProps, "div">(
  ({ className, payload = [], onHighlight, ...rest }, ref) => {
    const { styles } = useLegend()

    const items = payload.map(({ color, dataKey, value: valueProp }, index) => {
      const value = dataKey ?? valueProp

      return (
        <ui.div
          key={`legend-${index}`}
          className="ui-chart__legend-item"
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
