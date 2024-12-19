import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { TrainFrontTunnel } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TrainFrontTunnelIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TrainFrontTunnelIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={TrainFrontTunnel}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
