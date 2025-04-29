import type { FC } from "../../core"
import { getVar } from "../../core"
import { useTheme } from "../../providers/theme-provider"

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
        stopColor={getVar(theme)(`area-split-0`)}
        stopOpacity={fillOpacity ?? 0.4}
      />
      <stop
        offset={offset}
        stopColor={getVar(theme)(`area-split-1`)}
        stopOpacity={fillOpacity ?? 0.4}
      />
    </linearGradient>
  )
}

AreaSplit.displayName = "AreaSplit"
