import type { FC } from "@yamada-ui/core"
import { getVar, useTheme } from "@yamada-ui/core"

export interface AreaSplitProps {
  fillOpacity: number | string | undefined
  offset: number
  id?: string
}

export const AreaSplit: FC<AreaSplitProps> = ({ id, fillOpacity, offset }) => {
  const { theme } = useTheme()

  return (
    <linearGradient id={id} x1="0" x2="0" y1="0" y2="1">
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

AreaSplit.displayName = "AreaSplit"
AreaSplit.__ui__ = "AreaSplit"
