import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Waypoints } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `WaypointsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WaypointsIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Waypoints} className={cx("ui-lucide-icon", className)} {...rest} />
)
