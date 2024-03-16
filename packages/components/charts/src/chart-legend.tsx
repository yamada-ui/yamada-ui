import { forwardRef, ui } from "@yamada-ui/core"
import { cx, type Dict } from "@yamada-ui/utils"
import { useLegend } from "./use-chart"

export type ChartLegendProps = {
  payload?: Dict[]
  onHighlight: (area: string | null) => void
}

export const ChartLegend = forwardRef<ChartLegendProps, "div">(
  ({ className, payload = [], onHighlight }, ref) => {
    const { styles } = useLegend()

    const items = payload.map(({ dataKey, color }, index) => (
      <ui.div
        className="ui-chart__legend-item"
        key={`legend-${index}`}
        onMouseEnter={() => onHighlight(dataKey)}
        onMouseLeave={() => onHighlight(null)}
        __css={styles.legendItem}
      >
        <ui.div
          className="ui-chart__legend-swatch"
          background={color}
          __css={styles.legendSwatch}
        />

        <ui.span className="ui-chart__legend-label">{dataKey}</ui.span>
      </ui.div>
    ))

    return (
      <ui.div
        ref={ref}
        className={cx("ui-chart__legend", className)}
        __css={styles.legend}
      >
        {items}
      </ui.div>
    )
  },
)
