import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MonitorUp } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MonitorUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MonitorUpIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={MonitorUp} className={cx("ui-lucide-icon", className)} {...rest} />
)
