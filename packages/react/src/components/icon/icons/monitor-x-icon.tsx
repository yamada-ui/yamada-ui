import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MonitorX } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MonitorXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MonitorXIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={MonitorX} className={cx("ui-lucide-icon", className)} {...rest} />
)
