import { forwardRef } from "@yamada-ui/core"
import { TrainFrontTunnel as TrainFrontTunnelIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TrainFrontTunnelProps = LucideIconProps

/**
 * `TrainFrontTunnel` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TrainFrontTunnel = forwardRef<TrainFrontTunnelProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={TrainFrontTunnelIcon} {...props} />,
)
