import { ui } from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"

export type LegendProps = {
  ref?: React.Ref<any>
  payload?: Dict[]
  onHeightlight: (area: string | null) => void
}

export const Legend = ({ ref, payload, onHeightlight }: LegendProps) => {
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
}
