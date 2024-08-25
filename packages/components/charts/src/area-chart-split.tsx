import { getVar, useTheme } from "@yamada-ui/core"

export type AreaSplitProps = {
  offset: number
  id?: string
  fillOpacity: number | string | undefined
}

export const AreaSplit = ({ offset, id, fillOpacity }: AreaSplitProps) => {
  const { theme } = useTheme()

  return (
    <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
      <stop
        offset={offset}
        stopColor={getVar(`area-split-0`)(theme)}
        stopOpacity={fillOpacity ?? 0.4}
      />
      <stop
        offset={offset}
        stopColor={getVar(`area-split-1`)(theme)}
        stopOpacity={fillOpacity ?? 0.4}
      />
    </linearGradient>
  )
}
