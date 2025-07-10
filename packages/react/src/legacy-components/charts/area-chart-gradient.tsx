import type { FC } from "../../core"

export interface AreaGradientProps {
  fillOpacity: number | string
  id?: string
  color?: string
  withGradient?: boolean
}

export const AreaGradient: FC<AreaGradientProps> = ({
  id,
  color,
  fillOpacity,
  withGradient,
}) => {
  if (withGradient) {
    return (
      <linearGradient id={id} x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor={color} stopOpacity={fillOpacity} />
        <stop offset="100%" stopColor={color} stopOpacity={0.01} />
      </linearGradient>
    )
  } else {
    return (
      <linearGradient id={id} x1="0" x2="0" y1="0" y2="1">
        <stop stopColor={color} stopOpacity={fillOpacity} />
      </linearGradient>
    )
  }
}

AreaGradient.displayName = "AreaGradient"
AreaGradient.__ui__ = "AreaGradient"
