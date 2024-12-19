import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MonitorDown } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MonitorDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MonitorDownIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={MonitorDown}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
