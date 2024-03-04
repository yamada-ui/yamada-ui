import { forwardRef, ui } from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import { useLegend } from "./use-chart"

export type LegendProps = {
  payload?: Dict[]
  onHighlight: (area: string | null) => void
}

export const Legend = forwardRef<LegendProps, "div">((props, ref) => {
  const { payload, onHighlight } = props

  const { styles } = useLegend()

  const items = payload?.map((entry, index) => (
    <ui.div
      key={`legend-${index}`}
      onMouseEnter={() => onHighlight(entry.dataKey)}
      onMouseLeave={() => onHighlight(null)}
      __css={styles.legendItem}
    >
      <ui.div background={entry.color} __css={styles.legendColorTip} />
      <ui.div __css={styles.legendItemText}>{entry.dataKey}</ui.div>
    </ui.div>
  ))

  return (
    <ui.div ref={ref} __css={styles.legend}>
      {items}
    </ui.div>
  )
})
