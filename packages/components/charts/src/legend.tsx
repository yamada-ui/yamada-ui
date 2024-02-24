import { forwardRef, ui } from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import { useLegend } from "./use-chart"

export type LegendProps = {
  payload?: Dict[]
  onHeightlight: (area: string | null) => void
}

export const Legend = forwardRef<LegendProps, "div">((props, ref) => {
  const { payload, onHeightlight } = props

  const { styles } = useLegend()

  const items = payload?.map((entry, index) => (
    <ui.div
      key={`legend-${index}`}
      onMouseEnter={() => onHeightlight(entry.dataKey)}
      onMouseLeave={() => onHeightlight(null)}
      __css={styles.legendItem}
    >
      <ui.div rounded="9999px" background={entry.color} boxSize={3} />
      {entry.dataKey}
    </ui.div>
  ))

  return (
    <ui.div ref={ref} __css={styles.legend}>
      {items}
    </ui.div>
  )
})
