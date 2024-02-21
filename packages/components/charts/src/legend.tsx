import { ui, type CSSUIProps } from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"

export type LegendProps = {
  payload?: Dict[]
  onHeightlight: (area: string | null) => void
  legendPosition?: "top" | "bottom" | "middle"
  //?payloadでわたってこない？
  series?: { dataKey: string; color: CSSUIProps["color"] }[]
}

//todo: yamada-ui/reactは利用しない　自作する ui.div
export const Legend = ({
  payload,
  onHeightlight,
  legendPosition,
}: LegendProps) => {
  // const items = payload?.map((entry, index) => (
  //   <Box
  //     key={`legend-${index}`}
  //     display="flex"
  //     gap="sm"
  //     onMouseEnter={() => onHeightlight(entry.dataKey)}
  //     onMouseLeave={() => onHeightlight(null)}
  //   >
  //     <ColorSwatch variant="rounded" color={entry.color} size="sm" />
  //     {entry.dataKey}
  //   </Box>
  // ))

  // return (
  //   <HStack justifyContent="flex-end" m="md">
  //     {items}
  //   </HStack>
  // )
  return <ui.div></ui.div>
}
