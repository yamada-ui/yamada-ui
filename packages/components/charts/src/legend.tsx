import { forwardRef, ui } from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import { useLegend } from "./use-chart"

export type LegendProps = {
  payload?: Dict[]
  onHighlight: (area: string | null) => void
}

export const Legend = forwardRef<LegendProps, "div">(
  ({ payload = [], onHighlight }, ref) => {
    const { styles } = useLegend()

    const items = payload.map(({ dataKey, color }, index) => (
      <ui.div
        key={`legend-${index}`}
        onMouseEnter={() => onHighlight(dataKey)}
        onMouseLeave={() => onHighlight(null)}
        __css={styles.legendItem}
      >
        <ui.div background={color} __css={styles.legendColorTip} />

        <ui.p __css={styles.legendItemText}>{dataKey}</ui.p>
      </ui.div>
    ))

    return (
      <ui.div ref={ref} __css={styles.legend}>
        {items}
      </ui.div>
    )
  },
)
