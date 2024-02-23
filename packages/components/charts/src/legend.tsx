import { forwardRef, ui } from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"

export type LegendProps = {
  payload?: Dict[]
  onHeightlight: (area: string | null) => void
}

export const Legend = forwardRef<LegendProps, "div">((props, ref) => {
  const { payload, onHeightlight } = props
  const items = payload?.map((entry, index) => (
    <ui.div
      key={`legend-${index}`}
      onMouseEnter={() => onHeightlight(entry.dataKey)}
      onMouseLeave={() => onHeightlight(null)}
      __css={{
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <ui.div rounded="9999px" background={entry.color} boxSize={3} />
      {entry.dataKey}
    </ui.div>
  ))

  return (
    <ui.div
      ref={ref}
      __css={{
        justifyContent: "flex-end",
        display: "flex",
        gap: 5,
        m: 3,
      }}
    >
      {items}
    </ui.div>
  )
})
