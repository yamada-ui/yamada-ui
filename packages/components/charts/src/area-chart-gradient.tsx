import { FC } from "@yamada-ui/core"

export interface AreaGradientProps {
  id?: string
  color?: string
  withGradient?: boolean
  fillOpacity: number | string
}

export const AreaGradient: FC<AreaGradientProps> = ({
  color,
  id,
  withGradient,
  fillOpacity,
}) => {
  if (withGradient) {
    return (
      <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={color} stopOpacity={fillOpacity} />
        <stop offset="100%" stopColor={color} stopOpacity={0.01} />
      </linearGradient>
    )
  } else {
    return (
      <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
        <stop stopColor={color} stopOpacity={fillOpacity} />
      </linearGradient>
    )
  }
}

AreaGradient.displayName = "AreaGradient"
AreaGradient.__ui__ = "AreaGradient"
