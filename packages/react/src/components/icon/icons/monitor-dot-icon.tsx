import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MonitorDot } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MonitorDotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MonitorDotIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={MonitorDot} className={cx("ui-lucide-icon", className)} {...rest} />
)
