import { useToken, useValue } from "@yamada-ui/react"

export type AreaSplitProps = {
  offset: number
  colors: [string, string]
  id?: string
  fillOpacity: number | undefined
}

export const AreaSplit = ({
  offset,
  id,
  colors,
  fillOpacity,
}: AreaSplitProps) => {
  const _colors = colors.map(
    (color) => useToken("colors", useValue(color)) ?? color,
  )

  return (
    <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
      <stop
        offset={offset}
        stopColor={_colors[0]}
        stopOpacity={fillOpacity ?? 0.2}
      />
      <stop
        offset={offset}
        stopColor={_colors[1]}
        stopOpacity={fillOpacity ?? 0.2}
      />
    </linearGradient>
  )
}
