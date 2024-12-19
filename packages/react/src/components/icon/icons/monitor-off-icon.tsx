import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MonitorOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MonitorOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MonitorOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={MonitorOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
