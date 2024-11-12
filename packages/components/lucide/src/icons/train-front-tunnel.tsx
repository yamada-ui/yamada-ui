import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { TrainFrontTunnel as OriginalTrainFrontTunnel } from "lucide-react"

/**
 * `TrainFrontTunnelIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TrainFrontTunnelIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalTrainFrontTunnel} {...props} />,
)

/**
 * `TrainFrontTunnel` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `TrainFrontTunnelIcon` instead.
 */
export const TrainFrontTunnel = TrainFrontTunnelIcon
