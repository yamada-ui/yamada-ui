import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TrainFrontTunnel as LucideTrainFrontTunnelIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TrainFrontTunnelIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TrainFrontTunnelIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideTrainFrontTunnelIcon} {...props} />
  ),
)

/**
 * @deprecated Use `TrainFrontTunnelIcon` instead.
 */
export const TrainFrontTunnel = TrainFrontTunnelIcon
